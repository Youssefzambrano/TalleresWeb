from datetime import date
from xml.dom.minidom import Document
from django.db import models
from django.forms import CharField, EmailField, IntegerField, PasswordInput

# Create your models here.
class persona(models.Model):
    nombres = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=30)
    idtipodocumento = models.IntegerField()
    documento = models.IntegerField()
    lugarresidencia = models.CharField(max_length=30)
    fechanacimiento = models.IntegerField()
    email = models.EmailField()
    telefono = models.IntegerField()
    usuario = models.CharField(max_length=15)
    password = models.CharField(max_length=15)
