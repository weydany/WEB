import {CompanyInterface} from "@app/interfaces/company.interface";

export interface VacancyInterface {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: CompanyInterface;
}
