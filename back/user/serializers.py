from rest_framework import serializers
from django.contrib.auth import authenticate
# from authentication.models import User

from .models import User

# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','password','first_name', 'last_name')
        extra_kwargs = { 'password': { 'write_only': True } }
    def create(self, validated_data):
        user = User.objects.create(
            email = validated_data['email'],
            password = validated_data['password'],
            first_name =validated_data['first_name'],
            last_name = validated_data['last_name']
        )
        return user

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')


class UserLoginSerializer(serializers.Serializer):
    """
    Serializer class to authenticate users with email and password.
    """

    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = User.objects.get(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class UserSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = User
        fields = "__all__"

