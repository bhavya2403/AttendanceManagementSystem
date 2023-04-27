from authorization.views import *
from rest_framework.response import Response
from rest_framework.status import *
from datetime import datetime

def faculty_auth(func):
    def inner(request):
        if request.user['role']!='instructor':
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def faculty_profile(request):
    """
    request format: only token of faculty user in headers
    response format: {
        id: id,
        name: name,
        description: description,
        gender, post, age
    }
    """
    user = request.user
    return Response({'id': user['id'], 'email': user['email'],
                     'age': user['age'], 'gender': user['gender'], 'post': user['post'],
                     'description': user['description'], 'name': user['name']}, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
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

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def mark_attendance(request):
    """
    request format: {
        token of faculty in headers
        course_name in body
        semester in body
    }
    response format: Returns a list of classes that happened in the course. each element:
        'date': date of the class start in the format of "2023-03-21"
        'total present': total number of students currently present in the class
    """
    course_obj = COLL_CRS.find_one({'name': request.data.get('course_name'), 'semester': request.data.get('semester')})
    response = {'data': []}
    for session_obj in COLL_ATT.find({'course_id': course_obj['_id']}):
        response['data'].append({'date': session_obj['date'],
                             'total_present': len(list(filter(lambda d: d['status']=='absent', session_obj['present'])))})
    return Response(response, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def attendance_page(request):
    """
    given token in header of professor, course_name in body, batch in body, date in body
    return a list of all students with name, id and status 0/1 means absent/present
    Response format: {
        data: [
            [student1 id, student1 name, present or absent in the class],
            [student2 id, student2 name, present or absent in the class],
            ...
        ]
    }
    """

    # getting student objects from database and presence array from attendance data
    crs = COLL_CRS.findone({'name': request.data.get('course_name'), 'batch': request.data.get('batch')})
    students_in_crs = crs['students']
    student_objs = list(COLL_USR.find({ "_id": { "$in": students_in_crs }}))
    presence = COLL_ATT.find_one({'course_id': crs['_id'], 'date': request.data.get('date')})

    # sorting both of the arrays id'wise
    presence.sort(key=lambda s: s['student_id'])
    student_objs.sort(key=lambda s: s['_id'])
    response = {'data': []}
    for (student, present) in zip(student_objs, presence):
        response['data'].append([student['id'], student['name'], present['status']])
    response['data'].sort()
    return Response(response, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def start_attendance(request):
    """
    request format: {
        token in the header
        course_name, batch in teh body
    }
    response format: data of all the students with absent code
    """

    crs = COLL_CRS.findone({'name': request.data.get('course_name'), 'batch': request.data.get('batch')})
    curr_date = datetime.now()[:10]

    # check if the class already exist
    if COLL_ATT.find_one({'course_id': crs['_id'], 'date': curr_date}) is not None:
        return Response(status=HTTP_409_CONFLICT)

    COLL_ATT.insert_one({
        'course_id': crs['_id'], 'date': curr_date,
        'presence': list(map(lambda student_id: {'student_id': str(student_id), 'status': 'absent'}, crs['students']))
    })
    request.data['date'] = datetime.now()[:10]
    return attendance_page(request)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def change_attendance(request):
    """
    request format: {
        token in the header
        body: {
            course_name, batch, date
            presence: [
                [student1 id, student1 name, present or absent in the class],
                [student2 id, student2 name, present or absent in the class],
                ...
            ]
        }
    }
    response format: just the status code
    """

    # computing presence that needs to be stored
    presence_arr = request.data.get('presence')
    student_ids = list(map(lambda arr: arr[0], presence_arr))
    student_objs = list(COLL_USR.find({"id": {"$in": student_ids}}))
    presence = list(map(lambda tup: {'student_id': tup[0]['_id'], 'status': tup[1][2]}, zip(student_objs, presence_arr)))

    # getting course id from course name and batch
    crs = COLL_CRS.find_one({'name': request.data.get('course_name'), 'batch': request.data.get('batch')})

    # inserting the data
    COLL_ATT.update_one({'course_id': crs['_id'], 'date': request.data.get('date'), 'presence': presence})