from cgitb import reset
import math
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *

# Create your views here.

@csrf_exempt
def authview(request):
    # print(dict(request.GET))
    return JsonResponse({"name":"Elijah"})

@csrf_exempt
def factoriaL(request):
    if request.method == 'POST':
        operand = int(request.POST.get("operand"))
        result = 1
        while operand > 1:
            result = result * operand
            operand = operand -1

        factorial = Factorial.objects.create(operand=operand,result=result)
        factorial.save()
        return JsonResponse({'result':result})

@csrf_exempt
def commoNMultiples(request):
    if request.method == 'POST':
        operand1 = int(request.POST.get("operand1"))
        operand2 = int(request.POST.get("operand2"))
        result = list(set([operand1*i for i in range(0,6)]).intersection(set(operand2*i for i in range(0,6))))
        commonMultiples = CommonMultiples(operand1=operand1,operand2=operand2,commonMultiples=str(result))
        commonMultiples.save()
        return JsonResponse({'result':result})

@csrf_exempt
def squareRoot(request):
    if request.method == "POST":
        result = math.sqrt(request.POST.get("operand"))
        squarert = SquareRoot(operand=request.POST.get("operand"), result=result)
        squarert.save()
        return JsonResponse({'result':result})