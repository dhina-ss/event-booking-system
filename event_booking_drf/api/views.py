from rest_framework.views import APIView, status
from .models import Event, EventBooking
from .serializers import EventSerializer, EventBookingSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from drf_yasg.utils import swagger_auto_schema
from django.http import Http404

class EventAPIView(APIView):
    
    def get(self, request):
        event = Event.objects.order_by('date')
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(request_body=EventSerializer)
    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Event Created Successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EventDetailsAPIView(APIView):

    def get_object(self, event_id):
        try:
            return Event.objects.get(event_id=event_id)
        except Event.DoesNotExist:
            raise Http404
        
    def get(self, request, event_id):
        event = self.get_object(event_id)
        serializer = EventSerializer(event)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class EventReserveAPIView(APIView):
    
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
        
        serializer = EventBookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(event=event)
            return Response({"message": "Your seat is booked"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EventBookingAPIView(APIView):
        
    def get(self, request, event_id):
        try:
            event = Event.objects.get(event_id=event_id)
        except EventBooking.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        booking_users = event.event_booking.all()
        serializer = EventBookingSerializer(booking_users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class EventTicketAPIView(APIView):

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
        

