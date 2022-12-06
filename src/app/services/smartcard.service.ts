import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SmartcardBeneficiary } from '../models/smartcardBeneficiary';
import { SmartcardEvent } from '../models/smartcard-event';

@Injectable({
  providedIn: 'root',
})
export class SmartcardService {
  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getHistory(code: string): Observable<SmartcardBeneficiary[]> {
    return this.http
      .get<{ data: SmartcardBeneficiary[] }>(
        `${this.BASE_URL}/support-app/v1/smartcards/${code}`
      )
      .pipe(map((response) => response.data));
  }

  public getEvents(code: string): Observable<SmartcardEvent[]> {
    return this.http
      .get<{ data: SmartcardEvent[] }>(
        `${this.BASE_URL}/web-app/v1/smartcard/analytics/smartcards/${code}`
      )
      .pipe(map((response) => response.data));
  }
}
