from authorization.views import *
from rest_framework.status import *
from rest_framework.response import Response

def student_auth(func):
    def inner(request):
        if request.user['role']!='student':
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner

@api_view(['POST'])
@authenticate_dec
@student_auth
def student_profile(request):
    """"
        request format: Give only token of the student in headers
        response format: {
            name: student full name,
            id: student id,
            batch: batch of the student
            courses: [
                [registered course name 1, present in number of sessions, total sessions],
                [registered course name 2, present, total],
                ...
            ]
        }
    """
    user = request.user
    response = {'name': user['name'], 'batch': user['batch'],
                'id': user['id'], 'email': user['email'], 'courses': []}
    lst = list(COLL_CRS.find({'students': {'$in': [user['_id']]}}))
    for course in lst:
        all_sessions = list(COLL_ATT.find({'course_id': course['_id']}))
        present_sessions = list(COLL_ATT.find({'course_id': course['_id'],
                                               'presence': {'$in': [{'student_id': str(user['_id']), 'status':
                                                   'present'}]}}))

        response['courses'].append([course['name'], len(present_sessions), len(all_sessions)])
    return Response(response, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@student_auth
def see_all_courses(request):
    """ given the token of student, return all the courses available. """
    crs = COLL_CRS.find()
    response = {}
    for course in crs:
        response[course['name']] = course['description']
    return Response(response, HTTP_200_OK)