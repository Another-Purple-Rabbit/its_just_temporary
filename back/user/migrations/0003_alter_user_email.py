# Generated by Django 4.1.5 on 2023-05-16 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_options_alter_user_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=254, unique=True, verbose_name='Email'),
        ),
    ]
