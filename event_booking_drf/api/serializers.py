from rest_framework import serializers
from .models import Event, EventBooking

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['event_id', 'available_seat_count']

class EventBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventBooking
        fields = ['booking_id', 'name', 'email', 'seat_number', 'age']
        read_only_fields = ['booking_id', 'seat_number']