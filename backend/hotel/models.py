from django.db import models
from accounts.models import CustomUser

class BaseModel(models.Model):
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
   
   class Meta:
      abstract = True
      
class Hotel(BaseModel):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='owned_hotels')
    name     = models.CharField(max_length=255)
    logo     = models.ImageField(upload_to='hotel_logo', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    business_location = models.CharField(max_length=255, blank=True, null=True)
    business_email = models.EmailField(max_length=255, blank=True, null=True)
    business_phone_number = models.CharField(max_length=255, blank=True, null=True)
    tax_pin = models.CharField(max_length=255, blank=True, null=True)
    business_postal_address = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        
        return self.name
    
class Department(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='departments')
    
    class Meta:
        unique_together = ('name', 'hotel')
    
    def __str__(self):
        return f"{self.name} ({self.hotel.name})"

class StaffType(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    permissions = models.JSONField(default=list)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='staff_types')
    
    class Meta:
        unique_together = ('name', 'hotel')
    
    def __str__(self):
        return f"{self.name} ({self.hotel.name})"

class StaffProfile(BaseModel):
    user = models.OneToOneField('accounts.CustomUser', on_delete=models.CASCADE, related_name='staff_profile')
    staff_type = models.ForeignKey('StaffType', on_delete=models.PROTECT)
    department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, blank=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    hire_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.user.get_full_name()} - {self.staff_type.name} at {self.user.hotel.name if hasattr(self.user, 'hotel') else 'No Hotel'}"
