# Generated by Django 3.1.2 on 2020-10-28 13:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PSR', '0008_auto_20201028_1356'),
    ]

    operations = [
        migrations.RenameField(
            model_name='necessidadespsr',
            old_name='Hora',
            new_name='Dia',
        ),
    ]
