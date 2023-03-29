from django.contrib import admin
from .models import *

# добавляем ссылку на новый CSS-файл
class Media:
    css = {
        'all': ('admin/custom_admin.css',),
    }

    js = ('admin/custom_admin.js',)

admin.site.Media = Media

admin.site.register(Base)
admin.site.register(Сollar)
admin.site.register(Sleeve)
admin.site.register(Pocket)