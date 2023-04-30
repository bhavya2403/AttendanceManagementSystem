from pymongo import MongoClient
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import *

CLIENT = MongoClient("mongodb+srv://202001067:notBhavya2003@cluster0.6u0jcmx.mongodb.net")
DB = CLIENT.get_database('ams')
COLL_CRS = DB.get_collection('courses')
COLL_USR = DB.get_collection('user')
COLL_ATT = DB.get_collection('Attendance')
COLL_LVE = DB.get_collection('leave certificate')

def is_authenticated(request):
    ''' The method either returns a user object or none in case of authentication failure '''

    # the user is sending the token
    user = COLL_USR.find_one({'password': request.META.get('HTTP_TOKEN')})
    if user is not None:
        return user

    # the user is sending email address, password and role
    user = COLL_USR.find_one({'id': request.data.get('id'), 'role': request.data.get('role')})
    if user and check_password(request.data.get('password'), user.get('password')):
        return user
    return None

def authenticate_dec(func):
    '''
        This is a decorator function that checks for errors in authentication details
        If authentication is successful then user parameter in request is set
        Otherwise returns the error accordingly
    '''
    def inner1(request):
        request.user = is_authenticated(request)
        if not request.user:
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner1

@api_view(['POST'])
@authenticate_dec
def login(request):
    '''
        Takes either the token of user or email, password, role as
        input and returns token in case of successful scenario
    '''
    return Response({'token': request.user.get('password')}, HTTP_200_OK)
