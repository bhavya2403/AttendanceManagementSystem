from authorization.views import *
from django.core.mail import send_mail

def admin_auth(func):
    def inner(request):
        if request.user.get('role')!='admin':
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner

@api_view(['POST'])
@authenticate_dec
@admin_auth
def register_user(request):
    '''
        Takes token of admin, create_id, create_password, create_role as
        input and adds entry of new user into database
    '''
    if not request.data.get('id') or not request.data.get('role') or not request.data.get('password'):
        return Response(status=HTTP_412_PRECONDITION_FAILED)
    user = COLL_USR.find_one({'id': request.data.get('id'),
                              'role': request.data.get('role')})
    if user is not None:
        return Response(status=HTTP_409_CONFLICT)
    if request.data.get('role') not in {'instructor', 'student'}:
        return Response(status=HTTP_406_NOT_ACCEPTABLE)
    COLL_USR.insert_one({'id': request.data.get('id'),
                         'name': request.data.get('name'),
                         'password': make_password(request.data.get('password')),
                         'role': request.data.get('role'),
                         'email': request.data.get('email'),
                         'batch': request.data.get('batch'),
                         'age': request.data.get('age'),
                         'gender': request.data.get('gender'),
                         'post': request.data.get('post'),
                         'description': request.data.get('description')})
    send_mail('Registered successfully',
              'Your registration in attendance management system has been completed successfully by the admin',
              'attendancemanagement58@gmail.com',
              [request.data.get('email')])
    return Response(status=HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@admin_auth
def register_course(request):
    '''
        register a new course.
        course code, semester and instructor id are mandatory
        returns a response with one of the status code 200, 400, 401, 406, 409, 412 according to the input
    '''
    if not request.data.get('code') or not request.data.get('semester') or not request.data.get('id'):
        return Response(status=HTTP_412_PRECONDITION_FAILED)
    course = COLL_CRS.find_one({'code': request.data.get('code'),
                              'semester': request.data.get('semester')})
    if course is not None:
        return Response(status=HTTP_409_CONFLICT)
    instr = COLL_USR.find_one({'id': request.data.get('id')})
    if instr is None:
        return Response(status=HTTP_406_NOT_ACCEPTABLE)
    COLL_CRS.insert_one({'code': request.data.get('code'), 'semester': request.data.get('semester'),
                         'name': request.data.get('name'), 'description': request.data.get('description'),
                         'department': request.data.get('department'), 'instructor': instr['_id'],
                         'students': []})
    return Response(status=HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@admin_auth
def register_student_in_course(request):
    '''
        course code, semester and student id are mandatory.
        inserts student id in the course table's course object
        returns one of status codes 200, 400, 401, 406, 409, 412 accordingly
    '''
    if not request.data.get('code') or not request.data.get('semester') or not request.data.get('id'):
        return Response(status=HTTP_412_PRECONDITION_FAILED)
    crs = COLL_CRS.find_one({"code": request.data.get('code'), "semester": request.data.get('semester')})
    usr = COLL_USR.find_one({'id': request.data.get('id'), 'role': 'student'})
    if crs is None or usr is None:
        return Response(status=HTTP_406_NOT_ACCEPTABLE)
    if usr['_id'] in crs['students']:
        return Response(status=HTTP_409_CONFLICT)
    COLL_CRS.update_one({'code': request.data.get('code'), 'semester': request.data.get('semester')},
                        {'$set': {'students': crs['students']+[usr['_id']]}})
    send_mail(f'Registration in {request.data.get("code")} course',
              f'Your registration in {crs["name"]} ({crs["code"]}) completed successfully by the admin',
              'attendancemanagement58@gmail.com',
              [usr['email']])
    return Response(status=HTTP_200_OK)