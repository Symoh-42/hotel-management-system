from django.urls import path
from .views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name='admin-register'),
    path('verify-email/', VerifyEmailView.as_view(), name='verify-email'),
    path('resend-otp/', ResendOTPView.as_view(), name='resend-otp'),
    path('login/', LoginView.as_view(), name='login'),
    path('request-password-reset/', RequestPasswordResetView.as_view(), name='request-password-reset'),
    path('reset-password/', PasswordResetConfirmView.as_view(), name='reset-password'),
]