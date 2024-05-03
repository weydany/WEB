from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.get_all_companies),
    path('companies/<int:id>/', views.get_company_by_id),
    path('companies/<int:id>/vacancies/', views.get_company_vacancies),

    path('vacancies/', views.get_all_vacancies),
    path('vacancies/<int:id>/', views.get_vacancy_by_id),
    path('vacancies/top_ten/', views.get_top_ten_vacancies),
]