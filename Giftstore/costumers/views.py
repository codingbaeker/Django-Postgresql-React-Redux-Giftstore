from .models import Costumer, Address
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .serializers import CostumerSerializer, AddressSerializer


class CostumerViewSet(ModelViewSet):
    queryset = Costumer.objects.all()
    permission_classes= [IsAuthenticated]
    serializer_class = CostumerSerializer


class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = AddressSerializer

