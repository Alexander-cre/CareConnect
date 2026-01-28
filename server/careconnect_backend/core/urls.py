from django.urls import path , include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ArticlesViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet , basename='products')
router.register(r'articles', ArticlesViewSet, basename='articles')

urlpatterns = [
    path('' , include(router.urls)),
]