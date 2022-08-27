import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostMatch } from 'src/app/pages/match-list/interfaces/IPostMatch';
import { environment } from 'src/environments/environment';
import { IGoal } from '../interfaces/IGoal';
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

  serviceUrl: string = `${environment.apiUrl}/matches`

  getMatches() {
    return this.http.get<IMatch[]>(this.serviceUrl)
  }

  getById(matchId: number) {
    return this.http.get<IMatchDetails>(`${this.serviceUrl}/${matchId}`)
  }

  deleteMatch(matchId: number) {
    return this.http.delete(`${this.serviceUrl}/${matchId}`)
  }

  postMatch(payload: IPostMatch) {
    return this.http.post(this.serviceUrl, payload);
  }

  patchOpponentGoals(matchId: number, payload: IOpponentGoals) {
    return this.http.patch(`${this.serviceUrl}/${matchId}/opponent-goal`, payload)
  }

  patchGoal(matchId: number, payload: IGoal) {
    return this.http.patch(`${this.serviceUrl}/${matchId}/goal`, payload);
  }

  patchSubstitution(matchId: number, paylod: ISubstitution) {
    return this.http.patch(`${this.serviceUrl}/${matchId}/substitution`, paylod);
  }

  patchEndMatch(matchId: number) {
    return this.http.patch(`${this.serviceUrl}/${matchId}/end-match`, null);
  }
}