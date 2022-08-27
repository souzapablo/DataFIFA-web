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

  serviceUrl: string = `${environment.apiUrl}/players`;

  getAllPlayers(){
    return this.http.get<IPlayer[]>(this.serviceUrl);
  }

  getPlayersByTeamId(teamId: number) {
    return this.http.get<IPlayer[]>(`${this.serviceUrl}/team/${teamId}`);
  }

  getPlayersForSubstitution(teamId: number, matchId:number) {
    return this.http.get<IPlayer[]>(`${this.serviceUrl}/${teamId}/${matchId}/substitution`)
  }

  getPlayersByMatch(matchId: number) {
    return this.http.get<IPlayer[]>(`${this.serviceUrl}/match/${matchId}`)
  }
  getPostitions() {
    return this.http.get<IPosition[]>(`${this.serviceUrl}/player-positions`);
  }

  postPlayer(payload: IPlayer) {
    return this.http.post(this.serviceUrl, payload);
  }
  
}
