from django.contrib import admin
from .models import Event, EventBooking

admin.site.register(Event)
admin.site.register(EventBooking)