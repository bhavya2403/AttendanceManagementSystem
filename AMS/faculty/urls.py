from faculty import views
from django.urls import path

urlpatterns = [
    path('', views.faculty_profile, name='faculty profile'),
    path('view_courses/', views.view_courses, name='view courses'),
    path('view_courses/start_attendance', views.start_attendance, name='start attendance'),
    path('view_courses/start_attendance/date_clicked', views.start_attendance, name='start attendance'),
    path('view_courses/start_attendance/date_clicked/toggle_student', views.start_attendance, name='start attendance')
]