from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers

from rest_framework.response import Response
from rest_framework.views import APIView

from PSR.DB.RN import RN

class PSR(APIView):
    def post(self, request, *args, **kwargs):
        if request.data["operation"] == "criar":
            RN.Create(request.data)
            return Response("Reporte Cadastrado")

        if request.data["operation"] == "deletar":
            try:
                RN.Remove(request.data["psr"])
                resp = "Reporte Deletado"
            except Exception:
                resp = ""
            return Response(resp)

        if request.data["operation"] == "procurar":
            resp = RN.Find(request.data["psr"])
            return Response(resp)
        
        if request.data["operation"] == "atualizar":
            RN.Update(request.data)
            return Response("Reporte Atualizado")