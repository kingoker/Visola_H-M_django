from django.db import models
from datetime import date

from django_ckeditor_5.fields import CKEditor5Field


# Основа
def upload_base(instance, filename):
    return 'photos/base{}/{}'.format(instance.date, filename)

class Base(models.Model):
    date = models.DateField(default=date.today, editable=False)
    photo = models.ImageField(upload_to=upload_base)
    description = models.TextField()
    published = models.BooleanField(default=False)
    instruction = CKEditor5Field('Инструкция', config_name='extends')

    def __str__(self):
        return self.description
    
    class Meta:
        verbose_name = 'Основа'
        verbose_name_plural = 'Основы'


# Воротник
def upload_collar(instance, filename):
    return 'photos/collar{}/{}'.format(instance.date, filename)

class Collar(models.Model):
    date = models.DateField(default=date.today, editable=False)
    photo = models.ImageField(upload_to=upload_collar)
    description = models.TextField()
    published = models.BooleanField(default=False)
    instruction = CKEditor5Field('Инструкция', config_name='extends')

    def __str__(self):
        return self.description
    
    class Meta:
        verbose_name = 'Воротник'
        verbose_name_plural = 'Воротники'
    

# Рукава
def upload_sleeve(instance, filename):
    return 'photos/sleeve{}/{}'.format(instance.date, filename)

class Sleeve(models.Model):
    date = models.DateField(default=date.today, editable=False)
    photo = models.ImageField(upload_to=upload_sleeve)
    description = models.TextField()
    published = models.BooleanField(default=False)
    instruction = CKEditor5Field('Инструкция', config_name='extends')

    def __str__(self):
        return self.description
    
    class Meta:
        verbose_name = 'Рукав'
        verbose_name_plural = 'Рукава'
    

# Карманы
def upload_pocket(instance, filename):
    return 'photos/pocket{}/{}'.format(instance.date, filename)

class Pocket(models.Model):
    date = models.DateField(default=date.today, editable=False)
    photo = models.ImageField(upload_to=upload_pocket)
    description = models.TextField()
    published = models.BooleanField(default=False)
    instruction = CKEditor5Field('Инструкция', config_name='extends')

    def __str__(self):
        return self.description
    
    class Meta:
        verbose_name = 'Карман'
        verbose_name_plural = 'Карманы'