from PSR.models import CadastroPSR

def FindPSR(data):
    try:
        return CadastroPSR.objects.filter(**data).first()
    except Exception:
        return []

def CreatePSR(local,data):
    newPSR = CadastroPSR(id_latlong=local,**data)
    newPSR.save()
    return newPSR

def DeletePSR(data):
    newPSR = FindPSR(data)
    newPSR.delete()

def UpdatePSR(data):
    CadastroPSR.objects.filter(id=data["id"]).update(**data)
