from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from listings.models import Listing
from users.models import Profile
from listings.forms import LostRegisterForm
from users.forms import UserCreationForm, UserRegisterForm, UserUpdateForm
from .serializers import ListingSerializer, ProfileSerializer, UserSerializer
from django.contrib.auth.models import User


@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/listing-list/',
		'User List': '/user-list/',
		'Detail View':'/listing-detail/<str:pk>/',
		'Create':'/listing-create/',
		'Update':'/listing-update/<str:pk>/',
		'Delete':'/listing-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def ListingsList(request):
	listings = Listing.objects.all().order_by('-id')
	serializer = ListingSerializer(listings, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def UsersList(request):
	users = User.objects.all()
	serializer = UserSerializer(User, many=True)
	return Response(serializer.data)
@api_view(['GET'])
def ListingDetail(request, pk):
	listings = Listing.objects.get(id=pk)
	serializer = ListingSerializer(listings, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def ListingCreate(request):
	serializer = ListingSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def ListingUpdate(request, pk):
	listing = Listing.objects.get(id=pk)
	serializer = ListingSerializer(instance=listing, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def ListingDelete(request, pk):
	listing = Listing.objects.get(id=pk)
	listing.delete()

	return Response('Item succsesfully delete!')
