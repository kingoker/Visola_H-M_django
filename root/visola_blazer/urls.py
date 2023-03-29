from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='instruction'),
    path('instruction/<base>/<collar>/<sleeve>/<pocket>/', instruction, name='instruction'),
]

