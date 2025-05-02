from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.crypto import get_random_string
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.mail import send_mail
from django.conf import settings
from datetime import timedelta
from django.utils import timezone
import random

class CustomUserManager(BaseUserManager):
    def create_user(self, email, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        if not phone_number:
            raise ValueError('Users must have a phone number')
            
        email = self.normalize_email(email)
        
        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError("A user with this email already exists.")
        if CustomUser.objects.filter(phone_number=phone_number).exists():
            raise ValidationError("A user with this phone number already exists.")
            
        user = self.model(email=email, phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, phone_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)
        extra_fields.setdefault('is_verified', True)
        return self.create_user(email, phone_number, password, **extra_fields)
    


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    phone_number = models.CharField(_('phone number'), max_length=20, unique=True)
    full_name = models.CharField(_('full name'), max_length=255)
    staff_type = models.ForeignKey('hotel.StaffType', on_delete=models.SET_NULL, null=True, blank=True, related_name='staff_users')
    is_admin = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='customuser_set',
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='customuser_set',
        related_query_name='customuser',
    )
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number', 'full_name']
    
    objects = CustomUserManager()
    
    def __str__(self):
        return self.email

    def clean(self):
        super().clean()
        if CustomUser.objects.filter(email=self.email).exclude(pk=self.pk).exists():
            raise ValidationError({'email': 'This email is already in use.'})
        if CustomUser.objects.filter(phone_number=self.phone_number).exclude(pk=self.pk).exists():
            raise ValidationError({'phone_number': 'This phone number is already in use.'})
        
    def send_verification_email(self):
        # Generate and send OTP
        OTP.generate_otp(self)
        
    def verify_email(self, otp_code):
        try:
            otp = OTP.objects.get(
                user=self,
                code=otp_code,
                is_used=False
            )
            
            if otp.is_valid():
                self.is_verified = True
                self.save()
                otp.is_used = True
                otp.save()
                return True
            return False
        except OTP.DoesNotExist:
            return False
        
    @property
    def user_type(self):
        if self.is_admin:
            return 'ADMIN'
        return 'STAFF'
    

class OTP(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.email} - {self.code}"

    def is_valid(self):
        return not self.is_used and (timezone.now() - self.created_at) < timedelta(minutes=15)

    @classmethod
    def generate_otp(cls, user):
        # Delete any existing OTPs for this user
        cls.objects.filter(user=user).delete()
        
        # Generate 6-digit OTP
        code = str(random.randint(100000, 999999))
        
        # Create and save OTP
        otp = cls.objects.create(user=user, code=code)
        
        # Build email content
        subject = 'Your Email Verification Code'
        message = (
            f"Hello {user.full_name},\n\n"
            f"Your OTP code is: {code}\n\n"
            "This code will expire in 15 minutes.\n\n"
            "Thank you for choosing our platform."
        )
        
        # Send email
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )
        
        return otp

# accounts/models.py
from django.db import models
from django.utils import timezone
import secrets
from datetime import timedelta

class PasswordResetToken(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    token = models.CharField(max_length=64, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.CharField(max_length=255, blank=True)
    
    def is_valid(self):
        return not self.is_used and (timezone.now() - self.created_at) < timedelta(hours=24)

    @classmethod
    def generate_token(cls, user, request=None):
        # Delete any existing tokens for this user
        cls.objects.filter(user=user).delete()
        
        # Generate secure token
        token = get_random_string(length=6).upper()
        
        # Create and save token
        return cls.objects.create(
            user=user,
            token=token,
            ip_address=request.META.get('REMOTE_ADDR') if request else None,
            user_agent=request.META.get('HTTP_USER_AGENT', '')[:255] if request else ''
        )