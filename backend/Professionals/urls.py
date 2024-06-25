from django.urls import path 
from . import views


urlpatterns = [
    path('', views.ProfessionalListCreateAPIView.as_view(), name = "professional_list"),
    path('<int:pk>/', views.ProfessionalDetailAPIView.as_view(), name = "professional_detail"),
    path('create/', views.ProfessionalListCreateAPIView.as_view(), name = "professional_create"),
    path('update/<int:pk>/', views.ProfessionalUpdateAPIView.as_view(), name = "professional_update"),
    path('delete/<int:pk>/', views.ProfessionalDestroyAPIView.as_view(), name = "professional_delete"),
    path('profile/create/', views.profile_view, name = "profile_create"),
    path('profile/<int:pk>/', views.profile_view, name = "profile_detail"),
    path('profile/update/<int:pk>/', views.profile_view, name = "profile_update"),
    path('experiencebackground/create/', views.experience_bg_view, name = "experience_bg_create"),
    path('experiencebackground/<int:pk>/', views.experience_bg_view, name = "experience_bg_detail"),
    path('experiencebackground/professional/<int:professional_id>/', views.experience_bg_view, name = "experience_bg_professional_detail"),
    path('experiencebackground/update/<int:pk>/', views.experience_bg_view, name = "experience_bg_update"),
    path('experiencebackground/delete/<int:pk>/', views.experience_bg_view, name = "experience_bg_delete"),
]