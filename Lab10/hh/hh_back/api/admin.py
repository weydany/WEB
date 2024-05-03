from django.contrib import admin
from .models import Company, Vacancy


# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')
    search_fields = ('name', )
    list_filter = ('city', )


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')
    search_fields = ('name', )
    list_filter = ('company', )
