from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('professionals/', include('Professionals.urls')),
    path('domains/', include('Domains.urls')),
    path('servicerequests/', include('ServiceRequest.urls')),
]
