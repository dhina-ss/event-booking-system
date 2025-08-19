from rest_framework import serializers
from .models import EventHall

class EventHallSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventHall
        fields = "__all__"
        read_only_fields = ["hall_id"]