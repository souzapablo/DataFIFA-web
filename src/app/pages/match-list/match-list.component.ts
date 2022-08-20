import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IMatch } from '../../shared/interfaces/IMatch';
import { MatchService } from '../../shared/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router) { }

  matchList: IMatch[] = [];
  isLoadingTable: boolean = true;

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      (response: IMatch[]) => {
        this.matchList = response;
        this.isLoadingTable = false;
      }
    )
  }

  goToEdit(id: number | undefined) {
    window.location.href = `project-create-edit.html?id=${id}`;
  }

  deleteProject(matchId: number) {
    this.matchService.deleteMatch(matchId).subscribe(
      (response) => {
        this.matchList = this.matchList.filter((match: IMatch) => match.matchId != matchId);
      }
    )
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: number) {
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    };
    this.router.navigate([`${url}/`], dataParams)
  }

}