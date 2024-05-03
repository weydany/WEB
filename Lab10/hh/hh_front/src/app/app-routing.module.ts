import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "@app/components/company/company.component";
import {VacancyComponent} from "@app/components/vacancy/vacancy.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'company/:id',
    component: VacancyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
