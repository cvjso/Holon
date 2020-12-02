from PSR.DB.Cadastro.CRUD import *
from PSR.DB.Necessidades.CRUD import *
from PSR.DB.Local.CRUD import *
from django.forms.models import model_to_dict

class RN():
    def Create(data):
        local = CreateLocal(data['latlong'])
        psr = CreatePSR(local,data["psr"])
        CreateNecessidades(psr,data["necessidades"])
    
    def Remove(data):
        DeletePSR(data)
    
    def Find(data):
        local = FindLocal({**data}).first()
        local = model_to_dict(local)
        psr = FindPSR({"id_latlong_id":local['id']}).first()
        neces = FindNecessidades(psr)
        psr = model_to_dict(psr)
        neces = model_to_dict(neces)
        resp = {"psr":psr,"necessidades":neces, "Latlng":local}
        return resp

    def FindAll(data):
        resp = []
        Psrs = FindPSR(data)
        for psr in Psrs:
            local = psr.id_latlong
            local = {
                "id" : local.id,
                "lat" : local.latitude,
                "lng" : local.longitude
            }
            resp.append(local)
        return resp
    
    def Update(data):
        UpdatePSR(data["psr"])
        psr = FindPSR(data["psr"]).first()
        if "necessidades" in data.keys():
            UpdateNecessidades(psr,data["necessidades"])