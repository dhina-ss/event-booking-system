from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import EventAPIView, EventDetailsAPIView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('event/', EventAPIView.as_view(), name='event'),
    path('event/<str:event_id>/', EventDetailsAPIView.as_view(), name='event_details'),
]