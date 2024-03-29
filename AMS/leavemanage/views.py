from authorization.views import *
from adminapp.views import admin_auth
from datetime import datetime
from bson.objectid import ObjectId
from django.core.mail import send_mail

@api_view(['POST'])
@authenticate_dec
def apply_leave(request):
    """ given the token of either faculty or student in headers, along with start_date, end_date, leave_type, report,
    the view will submit the data in leave certificate collection with pending status"""
    if request.user.get('role') not in {'student', 'instructor'}:
        return Response(status=HTTP_401_UNAUTHORIZED)
    sdate = datetime.strptime(request.data.get('start_date')[:10], '%Y-%m-%d')
    edate = datetime.strptime(request.data.get('end_date')[:10], '%Y-%m-%d')
    if sdate > edate:
        return Response(status=HTTP_406_NOT_ACCEPTABLE)
    COLL_LVE.insert_one({'start_date': request.data.get("start_date"),
                         'end_date': request.data.get("end_date"),
                         'leave_type': request.data.get('leave_type'),
                         'report': request.data.get('report'),
                         'id': request.user.get('id'),
                         'role': request.user.get('role'),
                         'status': 'pending'})
    return Response(status=HTTP_200_OK)

@api_view(['POST'])
@authenticate_dec
@admin_auth
def change_status(request):
    """
        given token of admin in headers and leave id (the object id in mongo) the admin will change the status
        request format: {
            headers: token
            body:
                leave_id: the object id of leave of mongo
                change_to: pending/approve/rejected
    """
    leaveobj = COLL_LVE.find_one({'_id': ObjectId(request.data.get('leave_id'))})
    if leaveobj is None:
        return Response(HTTP_406_NOT_ACCEPTABLE)
    if request.data.get('change_to') not in {'pending', 'approved', 'rejected'}:
        return Response(status=HTTP_406_NOT_ACCEPTABLE)
    COLL_LVE.update_one({'_id': leaveobj['_id']}, {'$set':{'status': request.data.get('change_to')}})
    send_mail(f'Leave {request.data.get("change_to")}',
              f'Your applied leave with reason "{leaveobj["leave_type"]}" from {leaveobj["start_date"]} to '
                f'{leaveobj["end_date"]} has been {request.data.get("change_to")} by the admin',
              'attendancemanagement58@gmail.com',
              [COLL_USR.find_one({'id': leaveobj['id'], 'role': leaveobj['role']})['email']])
    return Response(status=200)

@api_view(['POST'])
@authenticate_dec
def get_leaves(request):
    """
        given the token of user we return the list of leaves
        response is list of [leave id, user id, user role, leave type, reason, start date, end date and status]
    """
    usr = request.user
    leave_objs = list(COLL_LVE.find({'id': usr['id'], 'role': usr['role']} if usr['role']!='admin' else None))
    data = []
    for obj in leave_objs:
        data.append({'id': str(obj['_id']), 'user_id': obj['id'], 'role': obj['role'],
                     'leave_type': obj['leave_type'], 'report': obj['report'], 'start_date': obj['start_date'],
                     'end_date': obj['end_date'], 'status': obj['status']})
    return Response({'data': data}, HTTP_200_OK)