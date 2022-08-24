import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOpponent } from '../interfaces/IOpponent';
import { IPostOpponent } from '../interfaces/IPostOpponent';

@Injectable({
  providedIn: 'root'
})
export class OpponentService {

  constructor(private http: HttpClient) { }

  getOpponents(){
    return this.http.get<IOpponent[]>(`${environment.apiUrl}/opponents`)
  }

  postOpponent(payload: IPostOpponent) {
    return this.http.post(`${environment.apiUrl}/opponents`, payload)
  }
}
