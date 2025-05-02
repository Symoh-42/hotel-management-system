from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from .models import *
from .serializers import *

class RegisterView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()   
            user.send_verification_email()    
            return Response({
                'success': True,
                'message': 'User registered successfully. Please check your email for verification code.',
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        return Response({'errors':serializer.errors, 'success':False}, status=status.HTTP_400_BAD_REQUEST,)
    
class VerifyEmailView(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp_code = request.data.get('otp')
        
        try:
            user = CustomUser.objects.get(email=email)
            if user.verify_email(otp_code):
                return Response({
                    'message': 'Email verified successfully!'
                }, status=status.HTTP_200_OK)
            return Response({
                'error': 'Invalid or expired OTP code'
            }, status=status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            return Response({
                'error': 'User with this email does not exist'
            }, status=status.HTTP_404_NOT_FOUND)

class ResendOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        
        try:
            user = CustomUser.objects.get(email=email)
            user.send_verification_email()
            return Response({
                'message': 'New OTP code sent to your email'
            }, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response({
                'error': 'User with this email does not exist'
            }, status=status.HTTP_404_NOT_FOUND)
            
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            
            return Response({
                'success': True,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'phone_number': user.phone_number,
                    'full_name': user.full_name,
                    'user_type': user.user_type,
                    'is_admin': user.is_admin,
                    'is_verified': user.is_verified,
                }
            }, status=status.HTTP_200_OK)
        
        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
class RequestPasswordResetView(APIView):
    def post(self, request):
        serializer = RequestPasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = CustomUser.objects.get(email=email)
            
            # Generate and save token
            reset_token = PasswordResetToken.generate_token(user)
            
            # Send email with reset link
            reset_link = f"{settings.FRONTEND_URL}/reset-password?token={reset_token.token}"
            
            send_mail(
                subject='Password Reset Request',
                message=f"""
                Hello {user.full_name},
                
                You requested a password reset for your account.
                Please click the following link to reset your password:
                
                {reset_link}
                
                This link will expire in 24 hours.
                
                If you didn't request this, please ignore this email.
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )
            
            return Response({
                'success': True,
                'message': 'Password reset link sent to your email'
            }, status=status.HTTP_200_OK)
        
        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetConfirmView(APIView):
     def post(self, request):
        token = request.data.get("token")
        new_password = request.data.get("new_password")
        
        if not token or not new_password:
            return Response(
                {"error": "Token and new password is required.", "success": False},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            reset_token = PasswordResetToken.objects.get(token=token)
            
        except PasswordResetToken.DoesNotExist:
            return Response(
                {"error": "Invalid token.", "success": False},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Validate the token
        if not reset_token.is_valid():
            return Response(
                {"error": "Token has expired.", "success": False},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        # Reset the user's password
        user = reset_token.user
        user.set_password(new_password)
        user.save()
        
        # Mark the token as used
        reset_token.used = True
        reset_token.save()
        
        return Response(
            {"message": "Password has been reset successfully.", "success": True},
            status=status.HTTP_200_OK
        )