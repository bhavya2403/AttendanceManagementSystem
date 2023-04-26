from faculty import views
from django.urls import path

urlpatterns = [
    path('', views.faculty_profile, name='faculty profile'),
    path('view_courses/', views.view_courses, name='view courses'),
    path('view_courses/mark_attendance', views.mark_attendance, name='mark attendance'),
    path('view_courses/mark_attendance/attendance_page', views.mark_attendance, name='attendance page'),
    path('view_courses/mark_attendance/attendance_page/submit', views.mark_attendance, name='change attendance'),
    path('view_courses/view_attendance', views.mark_attendance)
]