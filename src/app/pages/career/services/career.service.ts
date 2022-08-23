import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICareer } from '../interfaces/ICareer';
import { IPostCareer } from '../interfaces/IPostCareer';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  getUsersCareer(userId: number) {
    return this.http.get<ICareer[]>(`${environment.apiUrl}/careers/by-user/${userId}`);
  }

  deleteCareer(careerId: number) {
    return this.http.delete(`${environment.apiUrl}/careers/${careerId}`);
  }

  postCareer(career: IPostCareer) {
    return this.http.post(`${environment.apiUrl}/careers`, career);
  }
}
