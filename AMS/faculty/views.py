from authorization.views import *

"""
{
    email: email,
    id: id,
    description: description
}
"""
@authenticate_dec
def faculty_profile(request):
    if request.POST.get('role')!='instructor':
        return JsonResponse({}, status=401)
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
    if request.POST.get('role')!='instructor':
        return JsonResponse({}, status=401)
    fac = COLL_USR.find_one({'email': request.POST.get('email'), 'role': 'instructor'})
    courses = list(COLL_CRS.find({'instructor': fac['_id']}))
    response = {}
    for course in courses:
        response[course['name']] = len(course['students'])
    return JsonResponse(response, status=200)