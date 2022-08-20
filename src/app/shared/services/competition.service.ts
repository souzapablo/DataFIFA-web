import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICompetition } from '../interfaces/ICompetition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  getCompetitions(){
    return this.http.get<ICompetition[]>(`${environment.apiUrl}/matches/competitions`)
  }
}
