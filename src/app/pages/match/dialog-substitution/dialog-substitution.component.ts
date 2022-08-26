import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { ISubstitution } from 'src/app/shared/interfaces/ISubstitution';
import { MatchService } from 'src/app/shared/services/match.service';

@Component({
  selector: 'app-dialog-substitution',
  templateUrl: './dialog-substitution.component.html',
  styleUrls: ['./dialog-substitution.component.scss']
})
export class DialogSubstitutionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
  private matchService: MatchService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  players: IPlayer[] = [];

  substitutionForm: FormGroup = this.fb.group({
    matchId: this.data.id,
    playerId: [0, Validators.required]
  })

  getPlayers() {
    this.matchService.getPlayersForSubstitution(1, 2).subscribe(
      (response: IPlayer[]) => {
        this.players = response;
      });
  }

  makeSubstitution() {
    let payload: ISubstitution = this.substitutionForm.value;

    if (payload.playerId !== 0) {
      this.matchService.patchSubstitution(2, payload).subscribe(
        (response) => {
        }
      )
    }
  }

}
