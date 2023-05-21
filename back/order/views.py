from django.shortcuts import render
from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework.parsers import FileUploadParser
from .serializers import OrderSerializer

from rest_framework import generics, permissions
from rest_framework.response import Response

from .models import Order

# Create your views here.
class FileUploadView(generics.GenericAPIView):
    serializer_class = OrderSerializer
    parser_classes = (MultiPartParser,FormParser)
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        ser = self.get_serializer(data=request.data)
        ser.is_valid(raise_exception=True)
        
        record = Order(user=request.user, **{key:value for key, value in request.data.items()})
        record.save()

        return Response({ 'message': 'success' }, status=201)
