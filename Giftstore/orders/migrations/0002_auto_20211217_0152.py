# Generated by Django 3.2.9 on 2021-12-17 01:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('costumers', '0001_initial'),
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='costumer',
        ),
        migrations.RemoveField(
            model_name='payment',
            name='paid',
        ),
        migrations.AlterField(
            model_name='order',
            name='address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='costumers.address'),
        ),
        migrations.DeleteModel(
            name='Address',
        ),
    ]