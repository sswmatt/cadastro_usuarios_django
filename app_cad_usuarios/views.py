
from django.shortcuts import render, redirect
from .models import Usuarios

def home(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        idade = request.POST.get('idade')

        if nome and idade:
            Usuarios.objects.create(nome=nome, idade=idade)
            return redirect('lista_usuarios')

    return render(request, 'usuarios/home.html')


def lista_usuarios(request):
    usuarios = Usuarios.objects.all()
    return render(request, 'usuarios/lista.html', {'usuarios': usuarios})

     
   
    
    