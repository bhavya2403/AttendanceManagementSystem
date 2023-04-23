from faculty import views
from django.urls import path

urlpatterns = [
    path('', views.faculty_profile, name='faculty profile'),
    path('mark_attendance/', views.mark_attendance, name='mark attendance'),
    path('mark_attendance/start_attendance', views.start_attendance, name='start attendance'),
    path('mark_attendance/start_attendance/date_clicked', views.start_attendance, name='start attendance'),
    path('mark_attendance/start_attendance/date_clicked/toggle_student', views.start_attendance, name='start attendance')
]