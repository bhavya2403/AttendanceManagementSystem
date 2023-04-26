from authorization.views import *
from rest_framework.response import *
from rest_framework.status import *

def check_faculty_dec(func):
    def inner(request):
        if request.user['role']!='instructor':
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner


@check_faculty_dec
@authenticate_dec
def faculty_profile(request):
    """
    request format: only token of faculty user in headers
    response format: {
        id: id,
        name: name,
        description: description
    }
    """
    user = request.user
    return Response({'id': user['id'], 'id': user['email'],
                     'description': user['description'], 'name': user['name']}, HTTP_200_OK)

@check_faculty_dec
@authenticate_dec
def view_courses(request):
    """
        request format: token of faculty in headers.
        response is list of courses where each element is JSON of:
            course name: name of the course
            semester: winter-2021/winter-2020/autumn-2200
            total students: 1/2/3/..
    """
    courses = list(COLL_CRS.find({'instructor': request.user['_id']}))
    response = {'data': []}
    for course in courses:
        response['data'].append({'course_name': course['name'], 'semester': course['semester'], 'total_students':
            len(course['students'])})
    return Response(response, HTTP_200_OK)

@check_faculty_dec
@authenticate_dec
def start_attendance(request):
    """
        request format: {
            token of faculty in headers

        }
        Returns a list of classes that happened in the course. each element:
            'date': date and time of the class start in teh format of "2023-03-21 15:30:00"
            'total present': total number of students currently present in the class
    """
    course_obj = COLL_CRS.find_one({'name': request.POST.get('course_name'), 'semester': request.POST.get('semester')})
    response = {'data': []}
    for session_obj in COLL_ATT.find({'course_id': course_obj['_id']}):
        response['data'].append({'date': session_obj['date'],
                             'total_present': len(list(filter(lambda d: d['status']=='absent', session_obj['present'])))})
    return JsonResponse(response, status=200)

# @check_faculty_dec
# @authenticate_dec
# def toggle_attendance(request):