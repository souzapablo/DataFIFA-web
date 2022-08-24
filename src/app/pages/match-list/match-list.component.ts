import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IMatch } from '../../shared/interfaces/IMatch';
import { MatchService } from '../../shared/services/match.service';
import { DialogCreateMatchComponent } from './dialog-create-match/dialog-create-match.component';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router,
    public dialog: MatDialog) { }

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

  deleteMatch(matchId: number) {
    this.matchService.deleteMatch(matchId).subscribe(
      (response) => {
        this.matchList = this.matchList.filter((match: IMatch) => match.matchId != matchId);
      }
    )
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogCreateMatchComponent, {data: {id: 1}})

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true"){
      } 
    });
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