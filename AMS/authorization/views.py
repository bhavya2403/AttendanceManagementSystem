from pymongo import MongoClient
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password

CLIENT = MongoClient("mongodb+srv://202001067:notBhavya2003@cluster0.6u0jcmx.mongodb.net")
DB = CLIENT.get_database('ams')
COLL_CRS = DB.get_collection('courses')
COLL_USR = DB.get_collection('user')
COLL_ATT = DB.get_collection('Attendance')

def is_authenticated(request):
    user = COLL_USR.find_one({'email': request.POST.get('email'), 'role': request.POST.get('role')})
    if user is None:
        return False
    return check_password(request.POST.get('password'), user['password'])

def authenticate_dec(func):
    def inner1(request):
        if request.method != 'POST':
            return JsonResponse({}, status=400)
        if not is_authenticated(request):
            return JsonResponse({}, status=401)
        return func(request)
    return inner1

@authenticate_dec
def login(request):
    return JsonResponse({}, status=200)

@authenticate_dec
def register(request):
    if request.POST.get('role')!='admin':
        return JsonResponse({}, status=401)
    user = COLL_USR.find_one({'email': request.POST.get('create_mail'), 'role': request.POST.get('create_role')})
    if user is not None:
        return JsonResponse({}, status=409)
    COLL_USR.insert_one({'email': request.POST.get('create_mail'),
                    'password': make_password(request.POST.get('create_password')),
                     'role': request.POST.get('create_role')})

    return JsonResponse({}, status=200)
