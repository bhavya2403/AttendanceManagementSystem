from authorization.views import *

def check_faculty_dec(func):
    def inner(request):
        if request.user['role']!='instructor':
            return JsonResponse({}, status=401)
        return func(request)
    return inner

"""
{
    email: email,
    id: id,
    description: description
}
"""
@check_faculty_dec
@authenticate_dec
def faculty_profile(request):
    user = request.user
    return JsonResponse({'email': user['email'], 'id': user['email'][:user['email'].find('@')], 'description': user[
        'description']}, status=200)

"""
    list of courses where each element is JSON of:
        course name: name of the course
        semester: winter-2021/winter-2020/autumn-2200
        total students: 1/2/3/..
"""
@check_faculty_dec
@authenticate_dec
def mark_attendance(request):
    courses = list(COLL_CRS.find({'instructor': request.user['_id']}))
    response = {'data': []}
    for course in courses:
        response['data'].append({'course_name': course['name'], 'semester': course['semester'], 'total_students':
            len(course['students'])})
    return JsonResponse(response, status=200)

"""
    Returns a list of classes that happened in the course. each element:
        'date': date and time of the class start in teh format of "2023-03-21 15:30:00"
        'total present': total number of students currently present in the class
"""
@check_faculty_dec
@authenticate_dec
def start_attendance(request):
    course_obj = COLL_CRS.find_one({'name': request.POST.get('course_name'), 'semester': request.POST.get('semester')})
    response = {'data': []}
    for session_obj in COLL_ATT.find({'course_id': course_obj['_id']}):
        response['data'].append({'date': session_obj['date'],
                             'total_present': len(list(filter(lambda d: d['status']=='absent', session_obj['present'])))})
    return JsonResponse(response, status=200)

# @check_faculty_dec
# @authenticate_dec
# def toggle_attendance(request):