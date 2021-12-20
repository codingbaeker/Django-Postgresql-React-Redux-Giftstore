from django.db import models

class Costumer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birthday = models.DateField(null=True)
    address = models.ForeignKey('Address', on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name + self.last_name

class Address(models.Model):
    country = models.CharField(max_length=128)
    state = models.CharField(max_length=128)
    city = models.CharField(max_length=128)
    postal_code = models.IntegerField()
    street = models.CharField(max_length=128)
    number = models.CharField(max_length=128)

    def __str__(self):
        return self.country + self.state + self.city + self.postal_code + self.street + self.number



