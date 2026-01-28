#Ensures Admin Edits the Content and product of the webpage 
# ReactJS as Frontend
# Django as Backend

from django.contrib import admin
from .models import Product, Articles

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display=('name','price','is_active','created_at')
    search_fields = ('name','description')

@admin.register(Articles)
class ArticlesAdmin(admin.ModelAdmin):
    list_display =('title', 'published_at')
    search_fields = ('title','content')
    list_filter = ('published_at', 'updated_at')
