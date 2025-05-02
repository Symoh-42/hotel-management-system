from django.urls import path
from .views import *

urlpatterns = [
    path('staff-types/', StaffTypeView.as_view(), name='staff-type'),
    path('staff/', StaffView.as_view(), name='staff'),
    path('departments/', DepartmentView.as_view(), name='departments'),
]