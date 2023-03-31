from django.shortcuts import render
from .models import *
from django.urls import reverse
   

# Возвращаем urls
def instruction_view(request, base, collar, sleeve, pocket):
    url = reverse('instruction', kwargs={'base': base, 'collar': collar, 'sleeve': sleeve, 'pocket': pocket})
    return url


# Главная страница
def index(request):
    bases = Base.objects.filter(published=True)
    collars = Collar.objects.filter(published=True)
    sleeves = Sleeve.objects.filter(published=True)
    pockets = Pocket.objects.filter(published=True)
    toppockets = topPocket.objects.filter(published=True)
    context = {
        'bases': bases,
        'collars': collars,
        'sleeves': sleeves,
        'pockets': pockets,
        'toppockets': toppockets,
    }
    return render(request, 'index.html', context)


# Вывод инструкции по собранному пиджаку
def instruction(request, base, collar, sleeve, pocket):
    bases = Base.objects.filter(pk=base)
    collars = Collar.objects.filter(pk=collar)
    sleeves = Sleeve.objects.filter(pk=sleeve)
    pockets = Pocket.objects.filter(pk=pocket)
    
    context = {
        'bases': bases,
        'collars': collars,
        'sleeves': sleeves,
        'pockets': pockets,
    }
    
    return render(request, 'instruction.html', context)
