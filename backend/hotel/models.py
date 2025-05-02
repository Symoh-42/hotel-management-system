from django.db import models
from accounts.models import CustomUser

class BaseModel(models.Model):
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
   
   class Meta:
      abstract = True
      
class Hotel(BaseModel):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='owned_hotels')
    hotel_name     = models.CharField(max_length=255)
    logo     = models.ImageField(upload_to='hotel_logo', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    business_location = models.CharField(max_length=255, blank=True, null=True)
    business_email = models.EmailField(max_length=255, blank=True, null=True)
    business_phone_number = models.CharField(max_length=255, blank=True, null=True)
    tax_pin = models.CharField(max_length=255, blank=True, null=True)
    business_postal_address = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        
        return self.hotel_name
    
class Department(BaseModel):
    department_name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='departments')
    
    class Meta:
        unique_together = ('department_name', 'hotel')
    
    def __str__(self):
        return f"{self.department_name} ({self.hotel.hotel_name})"

class StaffType(BaseModel):
    staff_type_name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    permissions = models.JSONField(default=list)
    hotel = models.ForeignKey('hotel.Hotel', on_delete=models.CASCADE, related_name='staff_types')
    
    class Meta:
        unique_together = ('staff_type_name', 'hotel')
    
    def __str__(self):
        return f"{self.staff_type_name} ({self.hotel.hotel_name})"

class StaffProfile(BaseModel):
    user = models.OneToOneField('accounts.CustomUser', on_delete=models.CASCADE, related_name='staff_profile')
    department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, blank=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    hire_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        staff_type = self.user.staff_type.staff_type_name if self.user.staff_type else 'No Type'
        return f"{self.user.full_name} - {staff_type} at {self.user.hotel.hotel_name if hasattr(self.user, 'hotel') else 'No Hotel'}"