# Generated by Django 3.1.2 on 2020-10-28 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PSR', '0006_auto_20201028_1346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cadastropsr',
            name='Hora',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='necessidadespsr',
            name='Hora',
            field=models.DateField(auto_now=True),
        ),
    ]
