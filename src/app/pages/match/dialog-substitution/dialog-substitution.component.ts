import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { ISubstitution } from 'src/app/shared/interfaces/ISubstitution';
import { MatchService } from 'src/app/shared/services/match.service';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-dialog-substitution',
  templateUrl: './dialog-substitution.component.html',
  styleUrls: ['./dialog-substitution.component.scss']
})
export class DialogSubstitutionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
  private matchService: MatchService, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.matchId = Number(localStorage.getItem("matchId"));
    this.teamId = Number(localStorage.getItem("teamId"));
    this.getPlayers();
  }

  matchId: number = 0;
  teamId: number = 0;
  players: IPlayer[] = [];

  substitutionForm: FormGroup = this.fb.group({
    matchId: this.data.id,
    playerId: [0, Validators.required]
  })

  getPlayers() {
    this.playerService.getPlayersForSubstitution(this.teamId, this.matchId).subscribe(
      (response: IPlayer[]) => {
        this.players = response;
      });
  }

  makeSubstitution() {
    let payload: ISubstitution = this.substitutionForm.value;

    if (payload.playerId !== 0) {
      this.matchService.patchSubstitution(this.matchId, payload).subscribe(
        (response) => {
        }
      )
    }
  }

}
