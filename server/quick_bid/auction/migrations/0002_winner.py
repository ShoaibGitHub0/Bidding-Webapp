# Generated by Django 5.1.6 on 2025-03-12 08:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auction', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Winner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auction_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='winner_auction', to='auction.auctionitem')),
                ('bid_amount', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='winner_amount', to='auction.bid')),
                ('winner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='winner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
