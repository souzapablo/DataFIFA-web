import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostMatch } from 'src/app/pages/match-list/interfaces/IPostMatch';
import { environment } from 'src/environments/environment';
import { IMatch } from '../interfaces/IMatch';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get<IMatch[]>(`${environment.apiUrl}/matches`)
  }

  deleteMatch(matchId: number) {
    return this.http.delete(`${environment.apiUrl}/matches/${matchId}`)
  }

  postMatch(payload: IPostMatch) {
    return this.http.post(`${environment.apiUrl}/matches`, payload);
  }
}
