import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: ILogin):Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, payload)
    .pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removeTokenLocalStorage();
        throw 'Falha ao efetuar login.'
      })
    );        
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
  }

  private setTokenLocalStorage(response: any): void {
    const { userName, userId, token } = response
    localStorage.setItem(environment.token, token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", userName);
  }

  private removeTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }
}