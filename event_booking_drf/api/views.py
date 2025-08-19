from rest_framework.views import APIView
from .models import EventHall
from .serializers import EventHallSerializer
from rest_framework.views import status, Response
from drf_yasg.utils import swagger_auto_schema

class HallListAPIView(APIView):

    def get(self, request):
        event_hall = EventHall.objects.all()
        serializer = EventHallSerializer(event_hall, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(request_body=EventHallSerializer)
    def post(self, request):
        email = request.data.get('email')
        if EventHall.objects.filter(email=email):
            return Response(
                {"error": "This email is already registered."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = EventHallSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Event Hall Details Added Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)