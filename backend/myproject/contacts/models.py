
# Create your models here.
from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    job_details = models.TextField()
    created_at = models.DateField(auto_now_add=True)  # Add this field if not present

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
