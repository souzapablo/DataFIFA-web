import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMatch } from 'src/app/shared/interfaces/IMatch';
import { IMatchDetails } from 'src/app/shared/interfaces/IMatchDetails';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { MatchService } from 'src/app/shared/services/match.service';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-dialog-goal',
  templateUrl: './dialog-goal.component.html',
  styleUrls: ['./dialog-goal.component.scss']
})
export class DialogGoalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
  private playerService: PlayerService, private matchService: MatchService) { }

  ngOnInit(): void {
    this.getLineUp();
  }

  lineup: IPlayer[] = [];
  scorerPicked: boolean = false;
  hasAssist: boolean = false;
  playersToAssist?: IPlayer[];
  
  goalForm: FormGroup = this.fb.group({
    playerScoredId: 0,
    playerAssistedId: null
  })

  getLineUp() {
    this.playerService.getPlayersByMatch(2).subscribe(
      (response: IPlayer[]) => {
        this.lineup = response;
      }
    )
  }

  toggleAssist() {
    this.hasAssist = !this.hasAssist;
  }

  filterPlayers(playerScored: IPlayer){
    let playersToAssist: IPlayer[] = this.lineup;

    playersToAssist = playersToAssist.filter((player: IPlayer) => player != playerScored);
  
    this.playersToAssist = playersToAssist;

    this.scorerPicked = true;
  }

  patchGoal() {
    let payload = this.goalForm.value;

    this.matchService.patchGoal(2, payload).subscribe()
  }
}
