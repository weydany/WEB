import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyInterface} from "@app/interfaces/company.interface";
import {companyEndpoints} from "@app/api/endpoints/company.endpoints";
import {environment} from "@env/environment";
import {VacancyInterface} from "@app/interfaces/vacancy.interface";

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyInterface[]> {
    return this.http.get<CompanyInterface[]>(this.apiUrl + companyEndpoints.getAll());
  }

  getById(id: number): Observable<CompanyInterface> {
    return this.http.get<CompanyInterface>(this.apiUrl + companyEndpoints.getById(id));
  }

  getAllVacancies(id: number): Observable<VacancyInterface[]> {
    return this.http.get<VacancyInterface[]>(this.apiUrl + companyEndpoints.getAllVacancies(id));
  }
}
