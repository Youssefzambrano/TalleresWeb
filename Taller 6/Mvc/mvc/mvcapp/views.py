from multiprocessing import context
from django.http import HttpResponse
from django.http import HttpRequest

from django.shortcuts import render

from mvcapp.forms import formspersona
from .models import persona

def index(request) :
        personas = persona.objects.all()
        context={'personas':personas}
        return render(request,'index.html', context)
def forms(request):
        personas = formspersona()
        return render(request,'registrarPersonas.html',{'form':personas})

def procesar(request):
        personas = formspersona(request.POST)
        if personas.is_valid():
                personas.save()
                personas = formspersona()
        return render(request,'registrarPersonas.html',{'form':personas, 'message':'ok'})

def edit(request, id_persona):
        personas = persona.objects.filter(id=id_persona).first()
        form = formspersona(instance=personas)
        return render(request,"editarPersona.html",{"form":form,'persona':personas})

def update(request, id_persona):
        personas = persona.objects.get(pk=id_persona)
        form = formspersona(request.POST, instance=personas)
        if form.is_valid():
                form.save()
        perso = persona.objects.all()
        return render(request, 'index.html',{'form':perso})

def delete(request, id_persona):
        personas = persona.objects.get(pk=id_persona)
        personas.delete()
        person = persona.objects.all()
        
        return render(request,'index.html', {'persona':person, 'message':'ok'})
