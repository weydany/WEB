import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "@env/env";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TelegramService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<unknown> {
    const body = {
      chat_id: environment.adminId,
      text: message,
    };
    return this.http.post(environment.telegramAPI + environment.token + '/sendMessage', body);
  }
}
