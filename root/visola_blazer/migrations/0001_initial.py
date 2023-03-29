# Generated by Django 4.1.7 on 2023-03-27 12:00

import datetime
from django.db import migrations, models
import django_ckeditor_5.fields
import visola_blazer.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Base',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today, editable=False)),
                ('photo', models.ImageField(upload_to=visola_blazer.models.upload_base)),
                ('description', models.TextField()),
                ('published', models.BooleanField(default=False)),
                ('instruction', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Инструкция')),
            ],
        ),
        migrations.CreateModel(
            name='Pocket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today, editable=False)),
                ('photo', models.ImageField(upload_to=visola_blazer.models.upload_pocket)),
                ('description', models.TextField()),
                ('published', models.BooleanField(default=False)),
                ('instruction', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Инструкция')),
            ],
        ),
        migrations.CreateModel(
            name='Sleeve',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today, editable=False)),
                ('photo', models.ImageField(upload_to=visola_blazer.models.upload_sleeve)),
                ('description', models.TextField()),
                ('published', models.BooleanField(default=False)),
                ('instruction', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Инструкция')),
            ],
        ),
        migrations.CreateModel(
            name='Сollar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today, editable=False)),
                ('photo', models.ImageField(upload_to=visola_blazer.models.upload_collar)),
                ('description', models.TextField()),
                ('published', models.BooleanField(default=False)),
                ('instruction', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Инструкция')),
            ],
        ),
    ]
