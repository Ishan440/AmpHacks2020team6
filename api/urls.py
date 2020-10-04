from . import views
from django.urls import path

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('listing-list/', views.ListingsList, name="listing-list"),
	path('user-list/', views.UsersList, name="user-list"),
	path('listing-detail/<str:pk>/', views.ListingDetail, name="listing-detail"),
	path('listing-create/', views.ListingCreate, name="listing-create"),
	path('listing-update/<str:pk>/', views.ListingUpdate, name="listing-update"),
	path('listing-delete/<str:pk>/', views.ListingDelete, name="listing-delete"),
] 