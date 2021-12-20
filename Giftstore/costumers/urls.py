from django.urls import include, path
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
router.register(r'Costumer', CostumerViewSet)
router.register(r'Address', AddressViewSet)


urlpatterns = [
    path('', include(router.urls)),
]