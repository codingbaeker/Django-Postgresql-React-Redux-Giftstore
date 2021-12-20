from rest_framework import serializers
from orders.models import Order, Shopping_Cart, Payment
from products.serializers import ProductSerializer
from users.serializers import UserSerializer
from costumers.serializers import CostumerSerializer


class Shopping_CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer
    class Meta:
        model = Shopping_Cart
        fields = ['order', 'product', 'amount']
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['method']

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer
    order = Shopping_CartSerializer
    payment = PaymentSerializer
    costumer = CostumerSerializer
    class Meta:
        model = Order
        fields = ['user', 'payment', 'timestamp', 'order', 'costumer']

