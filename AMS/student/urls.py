from student import views
from django.urls import path

urlpatterns = [
    path('', views.student_profile, name='student profile'),
    path('view_courses/', views.see_all_courses, name='view courses'),
]