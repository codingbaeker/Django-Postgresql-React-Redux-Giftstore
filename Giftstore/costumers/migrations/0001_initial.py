# Generated by Django 3.2.9 on 2021-12-17 01:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=128)),
                ('state', models.CharField(max_length=128)),
                ('city', models.CharField(max_length=128)),
                ('postal_code', models.IntegerField()),
                ('street', models.CharField(max_length=128)),
                ('number', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Costumer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('birthday', models.DateField(null=True)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='costumers.address')),
            ],
        ),
    ]
