import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<Login> {
    return this.http.post<Login>(`${this.BASE_URL}/v1/login`, credentials);
  }
}
