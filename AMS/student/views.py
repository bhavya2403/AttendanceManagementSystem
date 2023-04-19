from authorization.views import *

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
    user = request.user
    if user['role']!='student':
        return JsonResponse({}, status=401)
    response = {'name': user['name'], 'batch': user['batch'], 'id': user['email'][:user['email'].find('@')]}
    lst = list(COLL_CRS.find({'students': {'$in': [user['_id']]}}))
    for course in lst:
        all_sessions = list(COLL_ATT.find({'course_id': course['_id']}))
        present_sessions = list(COLL_ATT.find({'course_id': course['_id'],
                                               'presence': {'$in': [{'student_id': user['_id'], 'status':
                                                   'present'}]}}))

        response[course['name']] = {'present': len(present_sessions), 'total': len(all_sessions)}
    return JsonResponse(response, status=200)

@authenticate_dec
def apply_leave(request): # database not yet made for leave
    pass
