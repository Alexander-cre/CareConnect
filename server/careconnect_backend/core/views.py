from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_list_or_404
from .models import Product,Articles
from .serializers import ProductSerializers , ArticlesSerializers

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('created_at')
    serializer_class = ProductSerializers

class ArticlesViewSet(viewsets.ModelViewSet):
    queryset = Articles.objects.all().order_by('published_at')
    serializer_class = ArticlesSerializers

@api_view(['GET'])
def article_detail(request, pk):
    article = get_list_or_404(Articles,pk=pk)
    serializer = ArticlesSerializers(article)
    return Response(serializer.data)