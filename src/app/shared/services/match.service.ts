import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostMatch } from 'src/app/pages/match-list/interfaces/IPostMatch';
import { environment } from 'src/environments/environment';
import { IMatch } from '../interfaces/IMatch';
import { IMatchDetails } from '../interfaces/IMatchDetails';
import { IOpponentGoals } from '../interfaces/IOpponentGoals';
import { IPlayer } from '../interfaces/IPlayer';
import { ISubstitution } from '../interfaces/ISubstitution';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get<IMatch[]>(`${environment.apiUrl}/matches`)
  }

  getById(matchId: number) {
    return this.http.get<IMatchDetails>(`${environment.apiUrl}/matches/${matchId}`)
  }

  deleteMatch(matchId: number) {
    return this.http.delete(`${environment.apiUrl}/matches/${matchId}`)
  }

  postMatch(payload: IPostMatch) {
    return this.http.post(`${environment.apiUrl}/matches`, payload);
  }

  patchOpponentGoals(matchId: number, payload: IOpponentGoals) {
    return this.http.patch(`${environment.apiUrl}/matches/${matchId}/opponent-goal`, payload)
  }

  getPlayersForSubstitution(teamId: number, matchId:number) {
    return this.http.get<IPlayer[]>(`${environment.apiUrl}/matches/${teamId}/${matchId}/substitution`)
  }

  patchSubstitution(matchId: number, paylod: ISubstitution) {
    return this.http.patch(`${environment.apiUrl}/matches/${matchId}/substitution`, paylod);
  }
}