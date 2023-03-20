from django.shortcuts import render
from pymongo import MongoClient
from django.http import JsonResponse

CLIENT = MongoClient('localhost', 27017)
DB = CLIENT.get_database('sample_analytics')
COLL = DB.get_collection('accounts')

# Create your views here.
def index(request):
    data = list(COLL.find())
    return render(request, 'index.html', {'data': data})

def adddata(request):
    COLL.insert_one({'account_id': int(request.GET.get('account_id')), 'limit': int(request.GET.get('limit'))})
    return JsonResponse({})