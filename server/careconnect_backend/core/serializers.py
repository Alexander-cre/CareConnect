# Ensures Fetching or exposure of API to frontend(ReactJS)

from rest_framework import serializers
from .models import Product , Articles

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product 
        fields = '__all__'

class  ArticlesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = '__all__'