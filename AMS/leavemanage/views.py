from authorization.views import *

def admin_auth(func):
    def inner(request):
        if request.user['role']!='admin':
            return Response(status=HTTP_401_UNAUTHORIZED)
        return func(request)
    return inner

@api_view(['POST'])
@authenticate_dec
def apply_leave(request):
    """ given the token of either faculty or student in headers, along with start_date, end_date, leave_type, report,
    the view will submit the data in leave certificate collection with pending status"""
    if request.data.get('role') not in {'student', 'instructor'}:
        return Response(status=HTTP_401_UNAUTHORIZED)
    COLL_LVE.insert_one({'start_date': request.data.get("start_date"),
                         'end_date': request.data.get("end_date"),
                         'leave_type': request.data.get('leave_type'),
                         'report': request.data.get('reason'),
                         'id': request.user.get('id'),
                         'role': request.user.get('role'),
                         'status': 'pending'})
    return Response(status=HTTP_200_OK)

@api_view(['POST'])
@admin_auth
@authenticate_dec
def change_status(request):
    """
        given token of admin in headers and leave id (the object id in mongo) the admin will change the status
        request format: {
            headers: token
            body:
                leave_id: the object id of leave of mongo
                change_to: pending/approve/rejected
    """
    leaveobj = COLL_LVE.find_one({'_id': request.data.get('leave_id')})
    if leaveobj is None or request.data.get('change_to') not in {'pending', 'approved', 'rejected'}:
        return Response(status=HTTP_404_NOT_FOUND)
    COLL_LVE.update_one({'_id': leaveobj['_id']}, {'status': request.data.get('change_to')})
    return Response(status=200)