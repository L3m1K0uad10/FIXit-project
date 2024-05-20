from django.urls import path

from .views import domain_view


urlpatterns = [
    path("create/", domain_view, name = "domain_create")
]