from .models import Order, Shopping_Cart, Payment
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .serializers import OrderSerializer, Shopping_CartSerializer, PaymentSerializer

class OrderViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Order.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer


class Shopping_CartViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Shopping_Cart.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = Shopping_CartSerializer

class PaymentViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Payment.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer
