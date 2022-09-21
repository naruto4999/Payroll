from django.urls import path, include
from .views import CompanyListCreateAPIView, CompanyDetailsMixinView, CompanyDestroyAPIView

urlpatterns = [
    path('company', CompanyListCreateAPIView.as_view()),
    path('delete-company/<int:id>', CompanyDestroyAPIView.as_view()),
    path('company-details', CompanyDetailsMixinView.as_view()),
    path('company-details/<int:company_id>', CompanyDetailsMixinView.as_view()),
    

]

