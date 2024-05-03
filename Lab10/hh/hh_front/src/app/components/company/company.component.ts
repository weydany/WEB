import {Component, OnInit} from '@angular/core';
import {CompanyInterface} from "@app/interfaces/company.interface";
import {CompanyService} from "@app/api/services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CompanyInterface[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getAll().subscribe(res => this.companies = res);
  }

  openVacancies(id: number): void {
    this.router.navigate(['company', id]);
  }
}
