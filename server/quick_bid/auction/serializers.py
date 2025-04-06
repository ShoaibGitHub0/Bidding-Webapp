from rest_framework import serializers
from .models import Category, Bid, AuctionItem, Watchlist, Comment, Winner,DeliveryDetails



class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class BidSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bid
        fields = "__all__"
        read_only_fields = ('auction_item','bidder',)


class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = "__all__"
        read_only_fields = ('user',)


class CommentSerializer(serializers.ModelSerializer):
    commenter = serializers.SlugRelatedField(slug_field='username',read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ('commenter',)


class AuctionItemSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many = True, read_only = True)
    seller = serializers.SlugRelatedField(slug_field='username',read_only=True)
    category = CategorySerializer()
    class Meta:
        model = AuctionItem
        fields = "__all__"
        read_only_fields = ('seller',)

class AuctionItemCreateSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many = True, read_only = True)
    seller = serializers.SlugRelatedField(slug_field='username',read_only=True)
    class Meta:
        model = AuctionItem
        fields = "__all__"
        read_only_fields = ('seller',)

class WatchlistDetailSerializer(serializers.ModelSerializer):
    auction = AuctionItemSerializer()

    class Meta:
        model = Watchlist
        fields = "__all__"
        read_only_fields = ('user',)

class WinnerAuctionSerializer(serializers.ModelSerializer):
    #auction_item = AuctionItemSerializer()
    class Meta:
        model = Winner
        fields = "__all__"
        read_only_fields = ('winner',)


class DeliveryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryDetails
        fields = "__all__"
        read_only_fields = ('user',)

class WinnerAuctionGetSerializer(serializers.ModelSerializer):
    auction_item = AuctionItemSerializer()
    #delivery_details_user = DeliveryDetailSerializer()

    class Meta:
        model = Winner
        fields = "__all__"
        read_only_fields = ('winner',)
    
class DeliveryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryDetails
        fields = "__all__"
        read_only_fields = ('user',)

class DeliveryDetailGetSerializer(serializers.ModelSerializer):
    user = WinnerAuctionSerializer()
    class Meta:
        model = DeliveryDetails
        fields = "__all__"
        read_only_fields = ('user',)
