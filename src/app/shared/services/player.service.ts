import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPlayer } from '../interfaces/IPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAllPlayers(){
    return this.http.get<IPlayer[]>(`${environment.apiUrl}/players`);
  }
}
