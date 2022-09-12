from django.db import models

# Create your models here.
class Company(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=256, null=False, unique=True)
    def __str__(self):
        return self.name



class CompanyDetails(models.Model):
    company = models.OneToOneField(Company, on_delete=models.CASCADE, related_name="company", primary_key=True)
    address = models.TextField()
    key_person = models.CharField(max_length=64, blank=True)
    involving_industry = models.CharField(max_length=64, blank=True)
    phone_no = models.PositiveBigIntegerField()
    email = models.EmailField(max_length=254)
    pf_no = models.CharField(max_length=30)
    esi_no = models.PositiveBigIntegerField()
    head_office_address = models.TextField()
    pan_no = models.CharField(max_length=10, unique=True)
    tin_no = models.CharField(max_length=11, blank=True)
    registration_no = models.CharField(max_length=50, blank=True)
    registration_date = models.DateField()
    

