from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend

class EmailOrPhoneBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            # Check if input is email
            if '@' in username:
                user = UserModel.objects.get(email=username)
            else:
                # Otherwise treat as phone number
                user = UserModel.objects.get(phone_number=username)
        except UserModel.DoesNotExist:
            return None
        
        if user.check_password(password):
            return user
        return None

    def get_user(self, user_id):
        UserModel = get_user_model()
        try:
            return UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None