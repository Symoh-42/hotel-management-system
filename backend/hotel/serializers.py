from rest_framework import serializers
from .models import Hotel, Department, StaffType, StaffProfile
from accounts.models import CustomUser
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
import secrets
import random
import string
from django.core.mail import send_mail
from django.conf import settings

def generate_uppercase_password(length=6):
    return ''.join(random.choices(string.ascii_uppercase, k=length))

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = [
            'id', 'hotel_name', 'logo', 'description', 
            'business_location', 'business_email',
            'business_phone_number', 'tax_pin', 
            'business_postal_address', 'owner'
        ]
        read_only_fields = ['owner']

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'department_name', 'description', 'hotel']
        read_only_fields = ['hotel']

    def validate_department_name(self, value):
        """Ensure department name is unique within a hotel"""
        hotel = self.context.get('hotel')
        if hotel and Department.objects.filter(hotel=hotel, department_name=value).exists():
            raise serializers.ValidationError("A department with this name already exists for this hotel.")
        return value

class StaffTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffType
        fields = ['id', 'staff_type_name', 'description', 'permissions', 'hotel']
        read_only_fields = ['hotel']

    def validate_staff_type_name(self, value):
        """Ensure staff type name is unique within a hotel"""
        hotel = self.context.get('hotel')
        if hotel and StaffType.objects.filter(hotel=hotel, staff_type_name=value).exists():
            raise serializers.ValidationError("A staff type with this name already exists for this hotel.")
        return value

class UserBasicSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()
    staff_type = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'phone_number', 'full_name', 'user_type', 'staff_type']
        read_only_fields = fields

    def get_user_type(self, obj):
        return obj.user_type
    
class StaffProfileSerializer(serializers.ModelSerializer):
    user = UserBasicSerializer()
    
    class Meta:
        model = StaffProfile
        fields = '__all__'
        read_only_fields = ['id', 'hire_date']

class StaffCreateSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=20)
    full_name = serializers.CharField(max_length=255)
    password = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'},
        min_length=8
    )
    staff_type = serializers.PrimaryKeyRelatedField(
        queryset=StaffType.objects.all(),
        required=True
    )
    
    department = serializers.PrimaryKeyRelatedField(
        queryset=Department.objects.all(), 
        required=False, 
        allow_null=True
    )
    salary = serializers.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        required=False, 
        allow_null=True
    )
    is_active = serializers.BooleanField(default=True)
    def validate_password(self, value):
        if value:
            try:
                validate_password(value)
            except ValidationError as e:
                raise serializers.ValidationError(list(e.messages))
        return value


    def create(self, validated_data):
        password = validated_data.pop('password')
        
        user_data = {
            'email': validated_data['email'],
            'phone_number': validated_data['phone_number'],
            'full_name': validated_data['full_name'],
            'password': make_password(validated_data['password']),
            'staff_type': validated_data['staff_type'],
            'is_admin': False
        }
        user = CustomUser.objects.create(**user_data)
        
        staff_profile = StaffProfile.objects.create(
            user=user,
            department=validated_data.get('department'),
            salary=validated_data.get('salary'),
            is_active=True
        )

        # Send credentials via email
        self._send_credentials_email(user, password)

        return staff_profile


    def _send_credentials_email(self, user, password):
        send_mail(
            subject='Your Staff Account Has Been Created',
            message=f"""
            Hello {user.full_name},

            Your staff account has been created.

            Email: {user.email}
            Password: {password}

            Please log in and change your password immediately.

            Regards,
            Hotel Management
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )