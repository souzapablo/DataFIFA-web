import { Component, OnInit } from '@angular/core';
import { IMatchDetails } from 'src/app/shared/interfaces/IMatchDetails';
import { IOpponentGoals } from 'src/app/shared/interfaces/IOpponentGoals';
import { MatchService } from 'src/app/shared/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.getMatch(2);
  }

  match!: IMatchDetails;
  homeTeam: string = '';
  homeLogo: string = '';
  awayTeam: string = '';
  awayLogo: string = '';

  getMatch(matchId: number) {
    this.matchService.getById(matchId).subscribe(
      (response: IMatchDetails) => {
        if (response !== null) {
          this.match = response;
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

    this.matchService.patchOpponentGoals(2, payload).subscribe(
      (response) => {
        this.getMatch(2);
      }
    );
  }

  alert() {
    alert()
  }
}
