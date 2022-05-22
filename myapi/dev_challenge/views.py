from cgitb import reset
import math
import secrets
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User 
from .models import *

# Create your views here.

@csrf_exempt
def authview(request):
    print(str(request.POST.get("username"))+" "+str(request.POST.get("action"))+" "+ str(request.POST.get("password")))
    if request.method == "POST" and request.POST.get("action") == 'login':
        user = authenticate(username=request.POST.get("username"),password=request.POST.get("password"))
        if user:
            return JsonResponse({"success":True,'token':secrets.token_hex(24)})
        else:
            return JsonResponse({"success":False})
    else:
        user = User.objects.create(username=request.POST.get("username"),password=request.POST.get("password"))
        user.save()
        return JsonResponse({'success':True})


@csrf_exempt
def factoriaL(request):
    if request.method == 'POST':
        operand = int(request.POST.get("operand"))
        result = 1
        while operand > 1:
            result = result * operand
            operand = operand -1

        factorial = Factorial.objects.create(operand=int(request.POST.get("operand")),result=result)
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
        result = math.sqrt(int(request.POST.get("operand")))
        squarert = SquareRoot(operand=request.POST.get("operand"), result=result)
        squarert.save()
        return JsonResponse({'result':result})

def home(request):
    factorials = Factorial.objects.all().order_by('-id')
    commons = CommonMultiples.objects.all().order_by('-id')
    squares = SquareRoot.objects.all().order_by('-id')

    context = {
        'factorials':[{"operand":x.operand,"result":x.result} for x in factorials],
        'commons':[{"operand1":x.operand1,"operand2":x.operand2,"commons":x.commonMultiples} for x in commons],
        'squares':[{"operand":x.operand,"result":x.result} for x in squares]
    }
    return JsonResponse(context)