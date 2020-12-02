from PSR.models import LocalPSR

def CreateLocal(data):
    localPSR = LocalPSR.objects.filter(**data).first()
    if localPSR == None:
        newObj = LocalPSR(**data)
        newObj.save()
        return newObj
    else:
        return localPSR

def FindLocal(data):
    resp = []
    Locals = LocalPSR.objects.filter(**data).all()
    return Locals
    # for local in Locals:
    #     resp.append(
    #         {
    #             "lat":local.latitude,
    #             "lng":local.longitude
    #         }
    #     )
    # if resp != []:
    #     return resp