from django.db import models

ListaAgua = {
    'MEIOLITRO': '500 ml',
    '1L': '1 L',
    '2L': '2 L',
    '5L': '5 L'
}

ListaAss = {
    'REMEDIOS':'Remedios',
    'ASSISTENCIA MEDICA':'Assistencia Medica',
    'ASSITENCIA VETERINARIA':'Assistencia Veterinaria'
}

ListaHigiene = {
    'SABONETE':'Sabonete',
    'XAMPU/CONDICIONADOR':'Xampu/Condicionador',
    'ESCOVA/PASTA DE DENTE':'Escova/Pasta de dente',
    'ALCOOL':'Alcool',
    'FRAUDA':'Frauda',
    'ABSORVENTE':'Absorvente'
}

ListaRoupas = {
    'CAMISA':'Camisa(s)',
    'CALÇAS':'Calça(s)/Bermuda(s)/Short(s)',
    'CALÇADOS':'Calçado(s)'
}

# Create your models here.
class CadastroPSR(models.Model):
    GRAU = [("LOW", 'Baixa'),("MED", 'Media'),("HIGH",'Alta')]
    Nome = models.CharField(max_length=120,blank=True,default='')
    Apelido = models.CharField(max_length=120,blank=True,default='')
    Endereco = models.CharField(max_length=120,blank=True)
    Bairro = models.CharField(max_length=120,blank=True)
    Cidade = models.CharField(max_length=120,blank=True)
    Referencia = models.CharField(max_length=120,blank=True)
    Descricao = models.TextField(max_length=120, blank=True)
    GrauPrioridade = models.CharField(max_length=120, choices=GRAU)
    Hora = models.DateTimeField(auto_now=True,)
    id_latlong = models.ForeignKey(LocalPSR,on_delete=models.CASCADE)

class NecessidadesPSR(models.Model):
    Psr = models.ForeignKey(CadastroPSR, on_delete=models.CASCADE)

    agua = [(i,ListaAgua[i]) for i in ListaAgua]
    Agua = models.CharField(max_length=50, choices=agua,blank=True)

    Assis = [(i,ListaAss[i]) for i in ListaAss]
    Saude = models.CharField(max_length = 50, choices = Assis, default = 'REMEDIOS',blank=True)

    higiene = [(i,ListaHigiene[i]) for i in ListaHigiene]
    Higiene = models.CharField(max_length=50, choices=higiene,blank=True)

    roupas = [(i,ListaRoupas[i]) for i in ListaRoupas]
    Roupas = models.CharField(max_length=50, choices=roupas, default='CAMISA',blank=True)

    Comida = models.CharField(max_length=120,blank=True)
    Outros = models.CharField(max_length=120,blank=True)

class LocalPSR(models.Model):
    latitude = models.CharField(max_length=120,blank=True,default='')
    longitude = models.CharField(max_length=120,blank=True,default='')
    