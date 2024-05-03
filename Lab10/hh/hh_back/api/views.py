from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import CompanySerializer, VacancySerializer
from .models import Company, Vacancy


@api_view(['GET'])
def get_all_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({'details': 'Company does not exist.'}, status=404)

    serializer = CompanySerializer(company)
    return Response(serializer.data)


@api_view(['GET'])
def get_company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({'details': 'Company does not exist.'}, status=404)

    vacancies = Vacancy.objects.filter(company__id=company.id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyDetail(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({'details': 'Vacancy does not exist.'}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)


class TopTenVacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
