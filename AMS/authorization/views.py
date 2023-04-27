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

@api_view(['POST'])
@authenticate_dec
def register(request):
    '''
        Takes token of admin, create_id, create_password, create_role as
        input and adds entry of new user into database
    '''
    if request.data.get('role')!='admin':
        return Response(status=HTTP_401_UNAUTHORIZED)
    user = COLL_USR.find_one({'id': request.data.get('create_id'),
                              'role': request.data.get('create_role')})
    if user is not None:
        return Response(status=HTTP_409_CONFLICT)
    COLL_USR.insert_one({'id': request.data.get('create_id'),
                         'password': make_password(request.data.get('create_password')),
                         'role': request.data.get('create_role')})
    return Response(status=HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
def apply_leave(request):
    """"""
    if request.data.get('role') not in {'student', 'instructor'}:
        return Response(status=HTTP_401_UNAUTHORIZED)
    COLL_LVE.insert_one({'start_date': request.data.get("start_date"),
                         'end_date': request.data.get("end_date"),
                         'reason': request.data.get('reason'),
                         'report': request.data.get('reason'),
                         'id': request.user.get('id'),
                         'status': 'pending'})
    return Response(status=HTTP_200_OK)
