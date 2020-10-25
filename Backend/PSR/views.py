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
            return Response("Cadastrado")

        if request.data["operation"] == "deletar":
            try:
                DeletePSR(request.data["psr"])
                resp = "PSR Deletado"
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

# def product_create_view(request):
    # form = ProductForm(request.POST or None)
#     print(form)
#     if form.is_valid():
#         form.save()
#     context = {
#         "form":form
#     }
#     return render(request, 'products/create.html', context)