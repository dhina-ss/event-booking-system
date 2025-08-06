from django.db import models

class Event(models.Model):
    EVENT_TYPE_CHOICES = [
        ('Music', 'Music'),
        ('Comedy', 'Comedy'),
        ('Speech', 'Speech'),
        ('Dance', 'Dance'),
        ('Movie', 'Movie')
    ]
    EVENT_LANGUAGE_CHOICES = [
        ('Tamil', 'Tamil'),
        ('English', 'English'),
        ('Malayalam', 'Malayalam'),
        ('Kanada', 'Kanada'),
        ('Telugu', 'Telugu'),
        ('Hindi', 'Hindi')
    ]
    event_id = models.CharField(max_length=50, primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date = models.DateField(null=True)
    start_time = models.TimeField(null=True)
    end_time = models.TimeField(null=True)
    language = models.CharField(max_length=50, choices=EVENT_LANGUAGE_CHOICES)
    type = models.CharField(max_length=50, choices=EVENT_TYPE_CHOICES)
    age_limit = models.IntegerField(default=18)
    keywords = models.JSONField(default=list, blank=True)
    description = models.TextField()
    price = models.IntegerField()
    organizer = models.CharField(max_length=100)
    total_seat_count = models.IntegerField(default=100)
    available_seat_count = models.IntegerField(null=True)

    def save(self, *args, **kwargs):
        if not self.event_id:
            last_event = Event.objects.order_by('-event_id').first()
            if last_event and last_event.event_id[1:].isdigit():
                last_number = int(last_event.event_id[1:])
            else:
                last_number = 0
            self.event_id = f"E{last_number + 1:03d}"

        if not self.available_seat_count:
            self.available_seat_count = self.total_seat_count

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
class EventBooking(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE, related_name='event_booking')
    booking_id = models.CharField(max_length=50, primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    age = models.IntegerField(default=18)
    seat_number = models.CharField(max_length=50, null=True)
    email = models.EmailField(null=True)

    def save(self, *args, **kwargs):
        is_new = self._state.adding 

        if not self.booking_id:
            last_booking = EventBooking.objects.order_by('-booking_id').first()
            if last_booking and last_booking.booking_id[1:].isdigit():
                last_booking_number = int(last_booking.booking_id[1:])
            else:
                last_booking_number = 0
            self.booking_id = f"B{last_booking_number + 1:03d}"

        if not self.seat_number:
            last_seat = EventBooking.objects.order_by('-seat_number').first()
            if last_seat and last_seat.seat_number[1:].isdigit():
                seat_letter = last_seat.seat_number[0]
                seat_number = int(last_seat.seat_number[1:])
                if seat_number < 5:
                    self.seat_number = f"{seat_letter}{seat_number + 1}"
                else:
                    new_seat_letter = chr(ord(seat_letter) + 1)
                    self.seat_number = f"{new_seat_letter}1"
            else:
                self.seat_number = "A1"

        if is_new:
            if self.event.available_seat_count <= 0:
                raise ValueError("No seats available for this event")
            self.event.available_seat_count -= 1
            self.event.save()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.seat_number} - {self.name}"