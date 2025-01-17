# Generated by Django 3.1.2 on 2020-11-27 13:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CadastroPSR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nome', models.CharField(blank=True, default='', max_length=120)),
                ('Apelido', models.CharField(blank=True, default='', max_length=120)),
                ('Endereco', models.CharField(blank=True, max_length=120)),
                ('Bairro', models.CharField(blank=True, max_length=120)),
                ('Cidade', models.CharField(blank=True, max_length=120)),
                ('Referencia', models.CharField(blank=True, max_length=120)),
                ('Descricao', models.TextField(blank=True, max_length=120)),
                ('GrauPrioridade', models.CharField(choices=[('LOW', 'Baixa'), ('MED', 'Media'), ('HIGH', 'Alta')], max_length=120)),
                ('Hora', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='LocalPSR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.CharField(blank=True, default='', max_length=120)),
                ('longitude', models.CharField(blank=True, default='', max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='NecessidadesPSR',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Agua', models.CharField(blank=True, choices=[('MEIOLITRO', '500 ml'), ('1L', '1 L'), ('2L', '2 L'), ('5L', '5 L')], max_length=50)),
                ('Saude', models.CharField(blank=True, choices=[('REMEDIOS', 'Remedios'), ('ASSISTENCIA MEDICA', 'Assistencia Medica'), ('ASSITENCIA VETERINARIA', 'Assistencia Veterinaria')], default='REMEDIOS', max_length=50)),
                ('Higiene', models.CharField(blank=True, choices=[('SABONETE', 'Sabonete'), ('XAMPU/CONDICIONADOR', 'Xampu/Condicionador'), ('ESCOVA/PASTA DE DENTE', 'Escova/Pasta de dente'), ('ALCOOL', 'Alcool'), ('FRAUDA', 'Frauda'), ('ABSORVENTE', 'Absorvente')], max_length=50)),
                ('Roupas', models.CharField(blank=True, choices=[('CAMISA', 'Camisa(s)'), ('CALÇAS', 'Calça(s)/Bermuda(s)/Short(s)'), ('CALÇADOS', 'Calçado(s)')], default='CAMISA', max_length=50)),
                ('Comida', models.CharField(blank=True, max_length=120)),
                ('Outros', models.CharField(blank=True, max_length=120)),
                ('Psr', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PSR.cadastropsr')),
            ],
        ),
        migrations.AddField(
            model_name='cadastropsr',
            name='id_latlong',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PSR.localpsr'),
        ),
    ]
