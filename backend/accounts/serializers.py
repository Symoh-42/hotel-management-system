from rest_framework import serializers
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password
from .models import CustomUser
from hotel.models import Hotel
import re

class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    full_name = serializers.CharField()
    phone_number = serializers.CharField(required=False)
    hotel_name = serializers.CharField()
    
    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value
    
    def validate_phone_number(self, value):
        if value and not re.match(r'^\+?[0-9]{8,15}$', value):
            raise serializers.ValidationError("Invalid phone number format.")
        return value
    
    def create(self, validated_data):
        # Create user
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            full_name=validated_data['full_name'],
            phone_number=validated_data.get('phone_number', ''),
            user_type='ADMIN',
            is_admin=True
        )
        
        # Create hotel
        hotel = Hotel.objects.create(
            owner=user,
            hotel_name=validated_data['hotel_name'],
        )
        
        return user

class LoginSerializer(serializers.Serializer):
    email_or_phone = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email_or_phone = attrs.get('email_or_phone')
        password = attrs.get('password')

        if email_or_phone and password:
            # Check if input is email or phone
            if '@' in email_or_phone:
                user = authenticate(
                    request=self.context.get('request'),
                    email=email_or_phone,
                    password=password
                )
            else:
                user = authenticate(
                    request=self.context.get('request'),
                    phone_number=email_or_phone,
                    password=password
                )

            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
            
            if not user.is_verified:
                raise serializers.ValidationError(
                    _('Account not verified. Please verify your email first.'),
                    code='unverified'
                )
        else:
            msg = _('Must include "email_or_phone" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
    
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, min_length=8)
    confirm_password = serializers.CharField(required=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"confirm_password": "Password fields didn't match."}
            )
        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect")
        return value
    