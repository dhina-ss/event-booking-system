from django.db import models
from django_mysql.models import ListTextField

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
    event_id = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date = models.DateField(null=True)
    start_time = models.TimeField(null=True)
    end_time = models.TimeField(null=True)
    language = models.CharField(max_length=50, choices=EVENT_LANGUAGE_CHOICES)
    type = models.CharField(max_length=50, choices=EVENT_TYPE_CHOICES)
    age_limit = models.IntegerField(default=18)
    keywords = ListTextField(base_field=models.IntegerField(), 
                             size=100)
    description = models.TextField()
    price = models.IntegerField()
    organizer = models.CharField(max_length=100)

    def __str__(self):
        return self.name