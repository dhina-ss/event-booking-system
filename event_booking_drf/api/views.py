from .serializers import EventSerializer, EventBookingSerializer
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView, status
from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from .models import Event, EventBooking
from django.http import JsonResponse
from django.http import Http404


class EventAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        event = Event.objects.order_by('date')
        paginator = PageNumberPagination()
        paginated_event = paginator.paginate_queryset(event, request)
        serializer = EventSerializer(paginated_event, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    @swagger_auto_schema(request_body=EventSerializer)
    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Event Created Successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EventDetailsAPIView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'event_id'

class EventReserveAPIView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=EventBookingSerializer)
    def post(self, request, event_id):
        try:
            event = Event.objects.get(event_id=event_id)
        except Event.DoesNotExist:
            raise Http404

        if event.event_booking.count() >= event.total_seat_count:
            return Response({"error": "The event reached the maximum count."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data.get('email')
        if event.event_booking.filter(email=email).exists():
            return Response({"error": "email already registered. use different email."})
        
        try:
            age = int(request.data.get('age', 0))
        except ValueError:
            return Response({"error": "Invalid age value"}, status=status.HTTP_400_BAD_REQUEST)
        if age < event.age_limit:
            return Response({"error": f"You are underage for this event. Minimum age is {event.age_limit}."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        serializer = EventBookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(event=event)
            return Response({"message": "Your seat is booked"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EventBookingAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = EventBookingSerializer
    pagination_class = PageNumberPagination
    
    def get_queryset(self):
        event_id = self.kwargs.get('event_id')
        return EventBooking.objects.filter(event__event_id=event_id)

class EventTicketAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        try:
            booking = EventBooking.objects.select_related('event').get(booking_id=booking_id)
            data = {
                'booking_name': booking.name,
                'email': booking.email,
                'seat_number': booking.seat_number,
                'event_name': booking.event.name,
                'event_location': booking.event.location,
                'event_date': booking.event.date,
                'event_start_time': booking.event.start_time,
                'event_end_time': booking.event.end_time,
                'event_price': booking.event.price,
            }
            return JsonResponse(data, status=status.HTTP_200_OK)
        except EventBooking.DoesNotExist:
            return JsonResponse({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)
        