from rest_framework.views import APIView, status
from .models import Event
from .serializers import EventSerializer
from rest_framework.response import Response
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