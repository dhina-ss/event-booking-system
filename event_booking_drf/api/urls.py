from django.urls import path
from .views import HallListAPIView, HallUpdateAPIView

urlpatterns = [
    path('event-hall/', HallListAPIView.as_view(), name="hall-list"),
    path('event-hall/<str:hall_id>/', HallUpdateAPIView.as_view(), name="hall-update"),
]