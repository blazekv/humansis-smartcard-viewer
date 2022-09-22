import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Smartcard } from '../models/smartcard';

@Injectable({
  providedIn: 'root',
})
export class SmartcardService {
  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get(code: string): Observable<Smartcard> {
    return this.http.get<Smartcard>(`${this.BASE_URL}/v1/smartcards/${code}`);
  }
}
