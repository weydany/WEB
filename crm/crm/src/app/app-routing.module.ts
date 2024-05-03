import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestComponent} from "@app/request/request.component";

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
