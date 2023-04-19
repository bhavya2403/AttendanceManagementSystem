from faculty import views
from django.urls import path

urlpatterns = [
    path('', views.faculty_profile, name='faculty profile'),
    path('mark_attendance/', views.mark_attendance, name='mark attendance')
]