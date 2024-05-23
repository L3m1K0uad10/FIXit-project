from django.urls import path

from .views import service_request_view



urlpatterns = [
    path("create/", service_request_view, name = "service_request_create")
]