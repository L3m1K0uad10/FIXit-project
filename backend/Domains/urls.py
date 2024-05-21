from django.urls import path

from .views import domain_view


urlpatterns = [
    path("", domain_view, name = "domain_list"),
    path("create/", domain_view, name = "domain_create"),
    path("<int:pk>/", domain_view, name = "domain_detail"),
    path("update/<int:pk>/", domain_view, name = "domain_update"),
    path("delete/<int:pk>/", domain_view, name = "domain_delete"),
]