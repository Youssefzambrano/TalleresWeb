# Generated by Django 4.0.3 on 2022-03-09 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='persona',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=30)),
                ('apellidos', models.CharField(max_length=30)),
                ('idtipodocumento', models.IntegerField()),
                ('documento', models.IntegerField()),
                ('lugarresidencia', models.CharField(max_length=30)),
                ('fechanacimiento', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('telefono', models.IntegerField()),
                ('usuario', models.CharField(max_length=15)),
                ('password', models.CharField(max_length=15)),
            ],
        ),
    ]