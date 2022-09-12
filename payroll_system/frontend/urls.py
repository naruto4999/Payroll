from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('menu/company-entry', index),
    path('menu/bank-entry', index),
    path('menu/category-entry', index),
    path('menu/department-entry', index),
    path('menu/designation-entry', index),
    path('menu/employee-entry', index),
    path('menu/holiday-entry', index),
    path('menu/salary-grade-entry', index),
    path('menu/shift-entry', index),
    path('menu/new-company-entry', index),
]
