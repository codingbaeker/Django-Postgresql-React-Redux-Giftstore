from rest_framework import serializers
from costumers.models import Address, Costumer

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['country', 'state', 'city', 'postal_code', 'street', 'number']

class CostumerSerializer(serializers.ModelSerializer):
    address = AddressSerializer
    class Meta:
        model = Costumer
        fields = ['first_name', 'last_name', 'birthday', 'address']