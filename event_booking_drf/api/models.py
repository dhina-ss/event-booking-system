from django.db import models

class EventHall(models.Model):
    # Hall Details
    hall_id = models.CharField(max_length=50, primary_key=True, editable=False)
    hall_name = models.CharField(max_length=100)
    is_hall_ac = models.BooleanField(default=False)
    is_dining_ac = models.BooleanField(default=False)
    max_hall_capacity = models.IntegerField(default=1000)
    max_dining_capacity = models.IntegerField(default=1000)
    is_parking = models.BooleanField(default=False)
    max_parking_capacity = models.IntegerField(default=500)
    is_bride_groom_room = models.BooleanField(default=False)
    is_bride_groom_room_ac = models.BooleanField(default=False)
    is_relative_rooms = models.BooleanField(default=False)
    relative_rooms_count = models.IntegerField(default=5)
    is_relative_rooms_ac = models.BooleanField(default=False)
    is_kitchen_facility = models.BooleanField(default=False)
    created_at = models.DateField(auto_now=True)
    modified_at = models.DateField(auto_now=True)
    hall_image = models.ImageField(null=True)
    
    # Hall Address
    nationality = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    town = models.CharField(max_length=50)
    street_name = models.CharField(max_length=50)
    door_no = models.CharField(max_length=20)
    pincode = models.IntegerField(default=600001)

    # Owner Details
    owner_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(max_length=10)
    phone = models.IntegerField()
    email = models.EmailField()
    address = models.TextField()

    def save(self, *args, **kwargs):
        if not self.hall_id:
            last_num = 0
            last_hall_id = EventHall.objects.order_by("-hall_id").first()
            if last_hall_id and last_hall_id.hall_id[1:].isdigit():
                last_num = int(last_hall_id.hall_id[1:])
            self.hall_id = f"H{last_num+1:03d}"
        
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.hall_name} at {self.town}, {self.district}"
