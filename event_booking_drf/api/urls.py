from django.urls import path
from .views import HallListAPIView

urlpatterns = [
    path('event-hall/', HallListAPIView.as_view(), name="hall-list"),
]