# Generated by Django 4.1.7 on 2023-03-31 06:50

import datetime
from django.db import migrations, models
import django_ckeditor_5.fields
import visola_blazer.models


class Migration(migrations.Migration):

    dependencies = [
        ('visola_blazer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='topPocket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today, editable=False)),
                ('photo', models.ImageField(upload_to=visola_blazer.models.upload_toppocket)),
                ('description', models.TextField()),
                ('published', models.BooleanField(default=False)),
                ('instruction', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Инструкция')),
            ],
            options={
                'verbose_name': 'Верхний Карман',
                'verbose_name_plural': 'Верхние Карманы',
            },
        ),
        migrations.RenameModel(
            old_name='Сollar',
            new_name='Collar',
        ),
        migrations.AlterModelOptions(
            name='base',
            options={'verbose_name': 'Основа', 'verbose_name_plural': 'Основы'},
        ),
        migrations.AlterModelOptions(
            name='collar',
            options={'verbose_name': 'Воротник', 'verbose_name_plural': 'Воротники'},
        ),
        migrations.AlterModelOptions(
            name='pocket',
            options={'verbose_name': 'Карман', 'verbose_name_plural': 'Карманы'},
        ),
        migrations.AlterModelOptions(
            name='sleeve',
            options={'verbose_name': 'Рукав', 'verbose_name_plural': 'Рукава'},
        ),
    ]
