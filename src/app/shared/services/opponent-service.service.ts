import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOpponent } from '../interfaces/IOpponent';

@Injectable({
  providedIn: 'root'
})
export class OpponentService {

  constructor(private http: HttpClient) { }

  getOpponents(){
    return this.http.get<IOpponent[]>(`${environment.apiUrl}/opponents`)
  }
}
