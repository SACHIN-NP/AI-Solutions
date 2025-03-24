from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer
import csv
from django.http import HttpResponse

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
