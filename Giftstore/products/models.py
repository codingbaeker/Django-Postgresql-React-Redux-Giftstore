from django.db import models

# Create your models here.

class Product(models.Model):

    name = models.CharField(max_length=150, primary_key=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    picture = models.CharField(max_length=150)
    availability = models.BooleanField(default=False)

    def __str__(self):
        return self.name + 'price' + self.price + self.description
