from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers

from rest_framework.response import Response
from rest_framework.views import APIView

from Users.DB.CRUD import *

# Create your views here.
class UserView(APIView):
    def post(self, request, *args, **kwargs):
        if request.data["operation"] == "registrar":
            # existedUser = FindUser(request.data["usuario"])
            # if existedUser != None:
            CreateUser(request.data["usuario"])
            return Response("Registrado")
            # else:
            #     return Response("Usuário já foi cadastrado")
        
        if request.data["operation"] == "remover":
            RemoveUser(request.data["usuario"])
            return Response("Removido")

        if request.data["operation"] == "auth":
            resp = {}
            if AuthUser(request.data["usuario"]):
                resp = FindUser(request.data["usuario"])
                resp = {
                    "Nome": resp.Nome,
                    "Email": resp.Email,
                    "status": True
                }
            else:
                raise Exception
            return Response(resp)

            # return Response(AuthUser(request.data["usuario"]))
        
        if request.data["operation"] == "procurar":
            request.data["usuario"]["Senha"] = ReplacePassword(request.data["usuario"])
            resp = FindUser(request.data["usuario"])
            resp = {
                "Nome": resp.Nome,
                "Email": resp.Email
            }
            return Response(resp)