from django.http import JsonResponse

from api.models import Company, Vacancy


# Create your views here.
def get_all_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def get_company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'details': 'Company does not exist.'}, status=404)

    return JsonResponse(company.to_json())


def get_company_vacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company__id=company.id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancy_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'details': 'Vacancy does not exist.'}, status=404)

    return JsonResponse(vacancy.to_json())


def get_top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
