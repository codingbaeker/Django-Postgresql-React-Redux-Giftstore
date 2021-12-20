from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'Order', OrderViewSet)
router.register(r'Shopping_Cart', Shopping_CartViewSet)
router.register(r'Payment', PaymentViewSet)



urlpatterns = [
    path('', include(router.urls)),
]