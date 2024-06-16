from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Professional
from Domains.models import Domain


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email', 
            'usertype', 
            'location'
        ]

class DomainSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Domain
        fields = [
            'id', 
            'domain_name'
        ]

class ProfessionalSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset = User.objects.all(), write_only = True)
    domain = serializers.PrimaryKeyRelatedField(queryset = Domain.objects.all(), write_only = True)
    user_details = UserSerializer(source = "user", read_only = True)
    domain_details = DomainSerializer(source = "domain", read_only = True)

    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Professional 
        fields = [
            'id',
            'user',
            'domain',
            'user_details',
            'domain_details',
            'photo',
            'availability', 
            'rating', 
        ]
