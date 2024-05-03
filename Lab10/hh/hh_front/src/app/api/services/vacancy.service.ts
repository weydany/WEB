import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VacancyInterface} from "@app/interfaces/vacancy.interface";
import {vacancyEndpoints} from "@app/api/endpoints/vacancy.endpoints";
import {environment} from "@env/environment";

@Injectable({ providedIn: 'root' })
export class VacancyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<VacancyInterface[]> {
    return this.http.get<VacancyInterface[]>(this.apiUrl + vacancyEndpoints.getAll());
  }

  getById(id: number): Observable<VacancyInterface> {
    return this.http.get<VacancyInterface>(this.apiUrl + vacancyEndpoints.getById(id));
  }

  getTopTenVacancies(): Observable<VacancyInterface[]> {
    return this.http.get<VacancyInterface[]>(this.apiUrl + vacancyEndpoints.getTopTen());
  }
}
