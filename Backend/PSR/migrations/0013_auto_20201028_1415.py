# Generated by Django 3.1.2 on 2020-10-28 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PSR', '0012_auto_20201028_1411'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='necessidadespsr',
            name='Dia',
        ),
        migrations.AlterField(
            model_name='cadastropsr',
            name='Dia',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
