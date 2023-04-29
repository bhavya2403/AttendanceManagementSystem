from bson.objectid import ObjectId
from authorization.views import *
from rest_framework.response import Response
from rest_framework.status import *
import pandas as pd
import json

def _convert_date(date):
    return pd.to_datetime(date[:10]).to_pydatetime()

def faculty_auth(func):
    def inner(request):
        if request.user.get('role')!='instructor':
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
    return Response({'id': user.get('id'), 'email': user.get('email'),
                     'age': user.get('age'), 'gender': user.get('gender'), 'post': user.get('post'),
                     'description': user.get('description'), 'name': user.get('name'),
                     'tot_courses': len(list(COLL_CRS.find({'instructor': user.get('_id')})))}, HTTP_200_OK)

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
    courses = list(COLL_CRS.find({'instructor': request.user.get('_id')}))
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
        'date': date of the class start in the format as shown in test
        'total_present': total number of students currently present in the class
    """
    course_obj = COLL_CRS.find_one({'name': request.data.get('course_name'), 'semester': request.data.get('semester')})
    response = {'data': []}
    for session_obj in COLL_ATT.find({'course_id': course_obj['_id']}):
        response['data'].append({
            'date': str(session_obj['date'].date()),
            'total_present': len(list(filter(lambda d: d['status']=='absent', session_obj['presence'])))})
    return Response(response, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def attendance_page(request):
    """
    given token in header of professor, course_name in body, semester in body, date in body
    return a list of all students with name, id and status absent/present
    Response format: {
        data: [
            [student1 id, student1 name, present or absent in the class],
            [student2 id, student2 name, present or absent in the class],
            ...
        ]
    }
    """
    # getting student objects from database and presence array from attendance data
    crs = COLL_CRS.find_one({'name': request.data.get('course_name'), 'semester': request.data.get('semester')})
    date_obj = _convert_date(request.data.get('date'))
    session_obj = COLL_ATT.find_one({'course_id': crs['_id'], 'date': date_obj})
    if not session_obj:
        COLL_ATT.insert_one({
            'course_id': crs['_id'], 'date': date_obj,
            'presence': list(map(lambda student_id: {'student_id': str(student_id), 'status': 'absent'}, crs['students']))
        })
        session_obj = COLL_ATT.find_one({'course_id': crs['_id'], 'date': date_obj})

    data = []
    for presence_stud in session_obj['presence']:
        student_obj = COLL_USR.find_one({'_id': ObjectId(presence_stud['student_id'])})
        data.append([student_obj['id'], student_obj['name'], presence_stud['status']])
    data.sort()
    return Response({'data': data}, HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@faculty_auth
def change_attendance(request):
    """
    request format: {
        token in the header
        body: {
            course_name, semester, date
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
    go_in_db = []
    for stud_id, name, present in presence_arr:
        stud_obj = COLL_USR.find_one({'id': stud_id})
        go_in_db.append({'student_id': str(stud_obj['_id']), 'status': present})

    # getting course id from course name and batch
    crs = COLL_CRS.find_one({'name': request.data.get('course_name'), 'semester': request.data.get('semester')})

    # inserting the data
    COLL_ATT.update_one({'course_id': crs['_id'], 'date': _convert_date(request.data.get('date'))},
                        {'$set': {'presence': go_in_db}})
    return Response(status=HTTP_200_OK)