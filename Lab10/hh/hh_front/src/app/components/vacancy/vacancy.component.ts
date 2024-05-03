import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "@app/api/services/company.service";
import {VacancyInterface} from "@app/interfaces/vacancy.interface";
import {CompanyInterface} from "@app/interfaces/company.interface";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  companyId: string | number | null = 0;
  vacancies: VacancyInterface[] = [];
  currentCompany: CompanyInterface | undefined;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.getCompany(Number(this.companyId));
    this.getVacanciesByCompany(Number(this.companyId));
  }

  getVacanciesByCompany(id: number): void {
    this.companyService.getAllVacancies(id).subscribe(res => this.vacancies = res);
  }

  getCompany(id: number): void {
    this.companyService.getById(id).subscribe(res => this.currentCompany = res);
  }
}
