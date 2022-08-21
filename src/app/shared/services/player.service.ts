import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPlayer } from '../interfaces/IPlayer';
import { IPosition } from '../interfaces/IPosition';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAllPlayers(){
    return this.http.get<IPlayer[]>(`${environment.apiUrl}/players`);
  }

  getPostitions() {
    return this.http.get<IPosition[]>(`${environment.apiUrl}/players/player-positions`);
  }

  postPlayer(payload: IPlayer) {
    return this.http.post(`${environment.apiUrl}/players`, payload);
  }
}
