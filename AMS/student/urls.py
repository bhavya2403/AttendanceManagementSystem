from student import views
from django.urls import path

urlpatterns = [
    path('', views.student_profile, name='student profile'),
    path('student/medicalform/', views.apply_leave, name='apply leave')
]