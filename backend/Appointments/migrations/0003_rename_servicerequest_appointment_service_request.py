# Generated by Django 4.0.10 on 2024-05-29 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Appointments', '0002_rename_request_appointment_servicerequest'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='servicerequest',
            new_name='service_request',
        ),
    ]