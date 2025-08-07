from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import EventAPIView, EventDetailsAPIView, EventReserveAPIView, EventBookingAPIView
from .views import EventTicketAPIView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('event/', EventAPIView.as_view(), name='event'),
    path('event/<str:event_id>/', EventDetailsAPIView.as_view(), name='event_details'),
    path('event/<str:event_id>/reserve/', EventReserveAPIView.as_view(), name='event_reserve'),
    path('event/<str:event_id>/bookings/', EventBookingAPIView.as_view(), name='event_booking_details'),
    path('event/ticket/<str:booking_id>/download/', EventTicketAPIView.as_view(), name='ticket_download'),
]