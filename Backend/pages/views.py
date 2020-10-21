from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView

class TesteView(APIView):
    def get(self, request, *args, **kwargs):
        data = {
            "teste":123,
            "maisUmTeste":456
        }
        return Response(data)
    
    def post(self, request, *args, **kwargs):
        data = {
            "method": "post",
            "teste":543,
            "data": request.data
        }
        return Response(data)

# Create your views here.
# def home_view(request):
#     data = {
#         "teste":123,
#         "maisUmTeste":456
#     }
#     return JsonResponse(data)