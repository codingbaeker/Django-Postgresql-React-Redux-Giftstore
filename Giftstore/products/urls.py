from django.urls import include, path
from rest_framework import routers
from .views import *

# define the router
router = routers.DefaultRouter()

# define the router path and viewset to be used
router.register(r'Product', ProductViewSet)

# URLS
urlpatterns = [
    path('', include(router.urls)),
]
