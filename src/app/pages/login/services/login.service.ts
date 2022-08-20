import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: ILogin) {
    return this.http.post(`${environment.apiUrl}/auth/login`, payload);        
  }
}
