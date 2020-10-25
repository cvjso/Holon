from PSR.models import NecessidadesPSR

def CreateNecessidades(psr,data):
    newObj = NecessidadesPSR(Psr=psr,**data)
    newObj.save()
    return newObj

def FindNecessidades(psr):
    return NecessidadesPSR.objects.get(Psr=psr)

def UpdateNecessidades(psr,data):
    NecessidadesPSR.objects.filter(Psr=psr).update(**data)