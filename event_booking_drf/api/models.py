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

    def save(self, *args, **kwargs):
        if not self.event_id:
            last_event = Event.objects.order_by('-event_id').first()
            if last_event and last_event.event_id[1:].isdigit():
                last_number = int(last_event.event_id[1:])
            else:
                last_number = 0
            self.event_id = f"E{last_number + 1:03d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name