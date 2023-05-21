from django.db import models
from user.models import User

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    order_id = models.IntegerField()
    name = models.CharField(max_length=255)
    material_type = models.CharField(choices=[('ABS', 'A'), ('PLA','P'), ('PETG','PE'), ('TPU','T')], max_length=255)
    material_amount = models.IntegerField()
    length = models.FloatField()
    estimated_time = models.FloatField()
    started_at = models.DateTimeField(auto_now_add=True, verbose_name='Started at')
    finished_at = models.DateTimeField(auto_now_add=True, verbose_name='Finished at')
    status = models.CharField(choices=[('pending', 'pending'), ('complete', 'complete'), ('rejected', 'rejected')], max_length=255)
    price = models.FloatField()
    delivery = models.CharField(max_length=255)
    file = models.FileField(upload_to='documents/%Y-%m-%d %h-%m-%s')