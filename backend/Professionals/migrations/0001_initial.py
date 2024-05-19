# Generated by Django 4.0.10 on 2024-05-17 07:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Domain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain_name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='ExperienceBackground',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('worked_at', models.CharField(max_length=100)),
                ('duration', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=100)),
                ('assigned_work', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Professional',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.CharField(blank=True, max_length=255, null=True)),
                ('availability', models.BooleanField(default=True)),
                ('rating', models.FloatField(default=0.0)),
                ('domain', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Professionals.domain')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='professional', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_url', models.CharField(max_length=255)),
                ('professional', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='Professionals.professional')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about', models.TextField(blank=True, null=True)),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('year_of_experience', models.IntegerField(default=0)),
                ('experience_bg', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='Professionals.experiencebackground')),
                ('professional', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='Professionals.professional')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_url', models.CharField(max_length=255)),
                ('professional', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='Professionals.professional')),
            ],
        ),
    ]