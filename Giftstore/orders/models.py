from django.db import models
from products.models import Product
from costumers.models import Address, Costumer

class Order(models.Model):
    payment = models.ForeignKey('Payment', on_delete=models.DO_NOTHING)
    timestamp = models.DateTimeField(auto_now_add=True)
    order = models.ManyToManyField(Product, through="Shopping_Cart")
    address = models.ForeignKey(Address, null=True, on_delete=models.CASCADE)
    costumer = models.ForeignKey(Costumer, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.costumer + self.timestamp

class Shopping_Cart(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self):
        return self.product + self.amount

class Payment(models.Model):
    method = models.CharField(max_length=64, null=True)

    def __str__(self):
        return 'Paid with' + self.method




