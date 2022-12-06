import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { map, Observable } from 'rxjs';
import { Login } from '../models/login';
import { VendorEvent } from '../models/vendor-event';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getVendorEvents(id: number): Observable<VendorEvent[]> {
    return this.http
      .get<{ data: VendorEvent[] }>(
        `${this.BASE_URL}/web-app/v1/smartcard/analytics/vendor/${id}`
      )
      .pipe(map((response) => response.data));
  }
}
