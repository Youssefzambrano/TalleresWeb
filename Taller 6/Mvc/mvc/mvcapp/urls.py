from unicodedata import name
from django.urls import URLPattern, path 
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('registro',views.forms, name='registrar'),
    path('guardar',views.procesar, name='save'),
    path('editar/<int:id_persona>',views.edit, name='edit'),
    path('actualizar/<int:id_persona>',views.update, name='update'),
    path('eliminar/<int:id_persona>',views.delete, name='delete'),
    
]