from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.get_all_companies),
    path('companies/<int:id>/', views.get_company_by_id),
    path('companies/<int:id>/vacancies/', views.get_company_vacancies),

    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view()),
]