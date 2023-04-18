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

""""
response format:
{
    name: student full name,
    id: student id,
    batch: batch of the student
    registered course name 1: [present in number of sessions, total sessions],
    registered course name 2: [present, total]
    .
    .
    .
}
"""
@authenticate_dec
def student_profile(request):
    if request.POST.get('role')!='student':
        return JsonResponse({}, status=401)
    user = COLL_USR.find_one({'email': request.POST.get('email'), 'role': request.POST.get('role')})
    response = {'name': user['name'], 'batch': user['batch'], 'id': user['email'][:user['email'].find('@')]}
    lst = list(COLL_CRS.find({'students': {'$in': [user['_id']]}}))
    for course in lst:
        all_sessions = list(COLL_ATT.find({'course_id': course['_id']}))
        present_sessions = list(COLL_ATT.find({'course_id': course['_id'],
                                               'presence': {'$in': [{'student_id': user['_id'], 'status':
                                                   'present'}]}}))

        response[course['name']] = {'present': len(present_sessions), 'total': len(all_sessions)}
    print(response)
    return JsonResponse(response, status=200)

@authenticate_dec
def apply_leave(request): # database not yet made for leave
    pass


"""
{
    email: email,
    id: id,
    description: description
}
"""
@authenticate_dec
def faculty_profile(request):
    fac = COLL_USR.find_one({'email': request.POST.get('email'), 'role': 'instructor'})
    return JsonResponse({'email': fac['email'], 'id': fac['email'][:fac['email'].find('@')], 'description': fac[
        'description']}, status=200)


"""
    course name 1 taught by instructor: number of students
    course name 2: number of students registered
    .
    .
    .
"""
@authenticate_dec
def mark_attendance(request):
    fac = COLL_USR.find_one({'email': request.POST.get('email'), 'role': 'instructor'})
    courses = list(COLL_CRS.find({'instructor': fac['_id']}))
    response = {}
    for course in courses:
        response[course['name']] = len(course['students'])
