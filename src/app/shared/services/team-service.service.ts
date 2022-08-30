import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITeam } from '../interfaces/ITeam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  serviceUrl: string = `${environment.apiUrl}/teams`

  getTeamById(teamId: number) {
    return this.http.get<ITeam>(`${this.serviceUrl}/${teamId}`);
  }
}
