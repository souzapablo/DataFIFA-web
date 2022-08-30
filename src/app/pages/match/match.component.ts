import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMatchDetails } from 'src/app/shared/interfaces/IMatchDetails';
import { IOpponentGoals } from 'src/app/shared/interfaces/IOpponentGoals';
import { MatchService } from 'src/app/shared/services/match.service';
import { environment } from 'src/environments/environment';
import { DialogGoalComponent } from './dialog-goal/dialog-goal.component';
import { DialogSubstitutionComponent } from './dialog-substitution/dialog-substitution.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private matchService: MatchService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.matchIdp = environment.matchId;
    this.getMatch(this.matchIdp);
  }

  match!: IMatchDetails;
  homeTeam: string = '';
  homeLogo: string = '';
  awayTeam: string = '';
  awayLogo: string = '';
  matchIdp: number = 0;
  isFinished: boolean = false;

  getMatch(matchId: number) {
    this.matchService.getById(matchId).subscribe(
      (response: IMatchDetails) => {
        if (response !== null) {
          this.match = response;
          this.isFinished = this.match.hasEnded;
          if (this.match.isHome) {
            this.homeLogo = this.match.teamLogoUrl;
            this.awayLogo = this.match.opponentLogoUrl;
            this.homeTeam = this.match.teamName;
            this.awayTeam = this.match.opponentName
          } else {
            this.homeLogo = this.match.opponentLogoUrl;
            this.awayLogo = this.match.teamLogoUrl;
            this.homeTeam = this.match.opponentName;
            this.awayTeam = this.match.teamName
          }
        }
      }
    )
  }
  
  opponentGoals(state: boolean) {
    console.log(state)
    let payload: IOpponentGoals = {
      opponentScored: state
    }

    this.matchService.patchOpponentGoals(this.matchIdp, payload).subscribe(
      (response) => {
        this.getMatch(this.matchIdp);
      }
    );
  }

  substitutionDialog() {
    let dialogRef = this.dialog.open(DialogSubstitutionComponent, {data: {id: this.matchIdp}})
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.getMatch(this.matchIdp);
      }
    })
  }

  goalDialog() {
    let dialogRef = this.dialog.open(DialogGoalComponent, {data: {id: this.matchIdp}})
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.getMatch(this.matchIdp);
      }
    })
  }

  finishMatch() {
    this.matchService.patchEndMatch(this.matchIdp).subscribe()
    this.getMatch(this.matchIdp);
  }
}
