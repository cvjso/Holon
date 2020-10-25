from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers
from django.forms.models import model_to_dict

from rest_framework.response import Response
from rest_framework.views import APIView

from PSR.DB.Business import *

class PSR(APIView):
    def post(self, request, *args, **kwargs):
        if request.data["operation"] == "criar":
            CreatePSR(request.data["psr"])
            return Response("Reporte Cadastrado")

        if request.data["operation"] == "deletar":
            try:
                DeletePSR(request.data["psr"])
                resp = "Reporte Deletado"
            except Exception:
                resp = ""
            return Response(resp)

        if request.data["operation"] == "procurar":
            resp = FindPSR(request.data["psr"])
            try:
                resp = model_to_dict(resp)
            except Exception:
                resp = []
            return Response(resp)
        
        if request.data["operation"] == "atualizar":
            UpdatePSR(request.data["psr"])
            return Response("Reporte Atualizado")