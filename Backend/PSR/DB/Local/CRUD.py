from PSR.models import LocalPSR

def CreateLocal(data):
    x = LocalPSR.objects.filter(**data).first()
    if x == None:
        newObj = LocalPSR(**data)
        newObj.save()
        return newObj
    else:
        return x