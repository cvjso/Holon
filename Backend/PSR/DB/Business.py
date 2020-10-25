from PSR.models import CadastroPSR

def FindPSR(data):
    try:
        return CadastroPSR.objects.filter(**data).first()
    except Exception:
        return []

def CreatePSR(data):
    newPSR = CadastroPSR(**data)
    newPSR.save()

def DeletePSR(data):
    newPSR = FindPSR(data)
    newPSR.delete()

def UpdatePSR(data):
    CadastroPSR.objects.filter(id=data["id"]).update(**data)
