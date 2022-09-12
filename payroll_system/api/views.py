from django.forms import ValidationError
from django.shortcuts import render
from rest_framework import generics, status, mixins
from .serializers import CompanySerializer, CreateCompanySerializer, CompanyEntrySerializer
from .models import Company, CompanyDetails
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailsMixinView(generics.GenericAPIView,
mixins.CreateModelMixin,
mixins.RetrieveModelMixin,
mixins.ListModelMixin,
mixins.UpdateModelMixin):
    queryset = CompanyDetails.objects.all()
    serializer_class = CompanyEntrySerializer
    lookup_field = 'company_id'

    def get(self, request, *args, **kwargs):
        print(kwargs)
        # print(request)
        return self.retrieve(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.partial_update(request,  *args, **kwargs)

    # def perform_create(self, serializer):
    #     print(serializer.validated_data)
    #     serializer.save()



# class CompanyDetailsView(APIView):
#     serializer_class = CompanyEntrySerializer
#     lookup_url_kwarg = 'id'
#     def post(self, request, format=None):
#         print(request.data)
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             print(serializer.data)
#             queryset = Company.objects.get(pk=serializer.data.get('company'))
#             print(queryset)
#             company_details = CompanyDetails()
#             company_details.company = queryset
#             company_details.address = serializer.data.get('address')
#             company_details.key_person = serializer.data.get('key_person')
#             company_details.involving_industry = serializer.data.get('involving_industry')
#             company_details.phone_no = serializer.data.get('phone_no')
#             company_details.email = serializer.data.get('email')
#             company_details.pf_no = serializer.data.get('pf_no')
#             company_details.esi_no = serializer.data.get('esi_no')
#             company_details.head_office_address = serializer.data.get('head_office_address')
#             company_details.pan_no = serializer.data.get('pan_no')
#             company_details.tin_no = serializer.data.get('tin_no')
#             company_details.registration_no = serializer.data.get('registration_no')
#             company_details.registration_date = serializer.data.get('registration_date')

#             company_details.save()
#             return Response({'data' : 'oaky'}, status=status.HTTP_200_OK)
#         print(serializer.errors)
#         return Response({'Details Not Found' : 'Invalid id...'}, status=status.HTTP_400_BAD_REQUEST)

#     def get(self, request, format=None):
#         id = request.GET.get(self.lookup_url_kwarg)
#         if id != None:           
#             company_details = CompanyDetails.objects.filter(company_id=id)
#             if len(company_details) > 0:
#                 #result = list(map(lambda x: x.data, company_details))
#                 print(CompanyEntrySerializer(company_details, many=True).data)
#                 return Response(CompanyEntrySerializer(company_details, many=True).data, status=status.HTTP_200_OK)
#             else:
#                 return Response({'Bad Request' : 'Company details do not exist'}, status=status.HTTP_404_NOT_FOUND)
#         return Response({'Bad Request' : 'id parameter not found'}, status=status.HTTP_400_BAD_REQUEST)

        

class CompanyDestroyAPIView(generics.DestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'
            

