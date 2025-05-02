from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *

User = get_user_model()

class StaffTypeView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        staff_type_id = request.query_params.get("staff_type_id")
        authenticated_user = request.user.owned_hotels.first()
        if not authenticated_user:
            return Response({'error': 'User is not associated with any hotel.', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
        if staff_type_id:
            try:
                staff_type = StaffType.objects.get(id=staff_type_id, hotel=authenticated_user.id)
                serializer = StaffTypeSerializer(staff_type)
                return Response({'data': serializer.data, 'success': True, 'message': 'Staff type fetched successfully'}, status=status.HTTP_200_OK)
            except StaffType.DoesNotExist:
                return Response({'error': 'Staff type not found.', 'success': False}, status=status.HTTP_404_NOT_FOUND)
        else:
            staff_types = StaffType.objects.filter(hotel=authenticated_user.id)
            serializer = StaffTypeSerializer(staff_types, many=True)
            return Response({'data': serializer.data, 'success': True, 'message': 'Staff types fetched successfully'}, status=status.HTTP_200_OK)    
        

    def post(self, request):
        data = request.data
        serializer = StaffTypeSerializer(data=data)
        
        if not data.get('hotel_id'):
            return Response({'error': 'Hotel ID is required.', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
        
        if not serializer.is_valid():
            return Response({'error': 'Validation failed', 'success': False, 'details': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response({'success':True, 'message': 'Staff type created successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)

class DepartmentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        hotel_id = request.data.get('hotel_id')
        department_name = request.data.get('department_name')
        description = request.data.get('description', '')

        if not hotel_id or not department_name:
            return Response({'error': 'Hotel ID and department_name are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            hotel = Hotel.objects.get(id=hotel_id)
        except Hotel.DoesNotExist:
            return Response({'error': 'Hotel not found.'}, status=status.HTTP_404_NOT_FOUND)

        department = Department.objects.create(
            hotel=hotel,
            department_name=department_name,
            description=description
        )
        serializer = DepartmentSerializer(department)
        return Response({'message': 'Department created successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    
    def get (self, request):
        owned_hotel = request.user.owned_hotels.first()
        department_id = request.query_params.get("department_id")
        if not owned_hotel:
            return Response({'error': 'User is not associated with any hotel.', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            if department_id:
                department = Department.objects.get(id=department_id, hotel=owned_hotel.id)
                serializer = DepartmentSerializer(department)
                return Response({'data': serializer.data, 'success': True, 'message': 'Department fetched successfully'}, status=status.HTTP_200_OK)
            else:
                departments = Department.objects.filter(hotel=owned_hotel.id)
                serializer = DepartmentSerializer(departments, many=True)
                return Response({'data': serializer.data, 'success': True, 'message': 'Departments fetched successfully'}, status=status.HTTP_200_OK)    
        except Department.DoesNotExist:
            return Response({'error': 'Department not found.', 'success': False}, status=status.HTTP_404_NOT_FOUND)


class StaffView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        owned_hotel = request.user.owned_hotels.first()
        if not owned_hotel:
            return Response(
                {'error': 'User is not associated with any hotel.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        staff_id = request.query_params.get('id')
        if staff_id:
            staff = get_object_or_404(
                StaffProfile.objects.select_related('user'),
                id=staff_id,
                user__hotel=owned_hotel
            )
            serializer = StaffProfileSerializer(staff)
            return Response(serializer.data)
        
        staff_list = StaffProfile.objects.filter(
            user__hotel=owned_hotel
        ).select_related('user')
        serializer = StaffProfileSerializer(staff_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        owned_hotel = request.user.owned_hotels.first()
        if not owned_hotel:
            return Response(
                {'error': 'User is not associated with any hotel.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Verify staff_type belongs to the hotel
        staff_type_id = request.data.get('staff_type')
        if not staff_type_id:
            return Response(
                {'error': 'Staff type is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            staff_type = StaffType.objects.get(id=staff_type_id, hotel=owned_hotel)
        except StaffType.DoesNotExist:
            return Response(
                {'error': 'Invalid staff type for this hotel.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        request.data['staff_type'] = staff_type.id
        serializer = StaffCreateSerializer(data=request.data)
        
        if serializer.is_valid():
            staff = serializer.save()
            # Associate with hotel
            staff.user.hotel = owned_hotel
            staff.user.save()
            
            response_serializer = StaffProfileSerializer(staff)
            return Response(
                response_serializer.data,
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    

    def post(self, request):
        serializer = StaffCreateSerializer(data=request.data)
        if serializer.is_valid():
            staff_profile = serializer.save()
            return Response({
                'message': 'Staff created successfully.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'error': 'Validation failed',
            'details': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        owned_hotel = request.user.owned_hotels.first()
        if not owned_hotel:
            return Response({'error': 'User is not associated with any hotel.', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
        staff_id = request.query_params.get("staff_id")
        try:
            if staff_id:
                staff = StaffProfile.objects.get(id=staff_id, hotel=owned_hotel.id)
                serializer = StaffProfileSerializer(staff)
                return Response({'data': serializer.data, 'success': True, 'message': 'Staff fetched successfully'}, status=status.HTTP_200_OK)
            else:
                staffs = StaffProfile.objects.filter(hotel=owned_hotel.id)
                serializer = StaffProfileSerializer(staffs, many=True)
                return Response({'data': serializer.data, 'success': True, 'message': 'Staffs fetched successfully'}, status=status.HTTP_200_OK)    
        except StaffProfile.DoesNotExist:
            return Response({'error': 'Staff not found.', 'success': False}, status=status.HTTP_404_NOT_FOUND)