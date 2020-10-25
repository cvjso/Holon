# Generated by Django 3.1.2 on 2020-10-24 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CadastroPSR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Endereco', models.CharField(max_length=120)),
                ('Bairro', models.CharField(max_length=120)),
                ('Cidade', models.CharField(max_length=120)),
                ('Referencia', models.CharField(max_length=120)),
                ('Descricao', models.TextField(blank=True, max_length=120)),
                ('GrauPrioridade', models.CharField(choices=[('LOW', 'Baixa'), ('MED', 'Media'), ('HIGH', 'Alta')], max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='NecessidadesPSR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Agua', models.CharField(choices=[('MEIOLITRO', '500 ml'), ('1L', '1 L'), ('2L', '2 L'), ('5L', '5 L')], max_length=50)),
                ('Saude', models.CharField(choices=[('REMEDIOS', 'Remedios'), ('ASSISTENCIA MEDICA', 'Assistencia Medica'), ('ASSITENCIA VETERINARIA', 'Assistencia Veterinaria')], default='REMEDIOS', max_length=50)),
                ('Higiene', models.CharField(choices=[('SABONETE', 'Sabonete'), ('XAMPU/CONDICIONADOR', 'Xampu/Condicionador'), ('ESCOVA/PASTA DE DENTE', 'Escova/Pasta de dente'), ('ALCOOL', 'Alcool'), ('FRAUDA', 'Frauda'), ('ABSORVENTE', 'Absorvente')], max_length=50)),
                ('Roupas', models.CharField(choices=[('CAMISA', 'Camisa(s)'), ('CALÇAS', 'Calça(s)/Bermuda(s)/Short(s)'), ('CALÇADOS', 'Calçado(s)')], default='CAMISA', max_length=50)),
                ('Comida', models.CharField(max_length=120)),
                ('Outros', models.CharField(max_length=120)),
            ],
        ),
    ]