from PSR.DB.Cadastro.CRUD import *
from PSR.DB.Necessidades.CRUD import *
from django.forms.models import model_to_dict

class RN():
    def Create(data):
        psr = CreatePSR(data["psr"])
        CreateNecessidades(psr,data["necessidades"])
    
    def Remove(data):
        DeletePSR(data)
    
    def Find(data):
        psr = FindPSR(data)
        neces = FindNecessidades(psr)
        psr = model_to_dict(psr)
        neces = model_to_dict(neces)
        resp = {"psr":psr,"necessidades":neces}
        return resp

    
    def Update(data):
        UpdatePSR(data["psr"])
        psr = FindPSR(data["psr"])
        if "necessidades" in data.keys():
            UpdateNecessidades(psr,data["necessidades"])