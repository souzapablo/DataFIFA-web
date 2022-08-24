import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICompetition } from 'src/app/shared/interfaces/ICompetition';
import { IOpponent } from 'src/app/shared/interfaces/IOpponent';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { CompetitionService } from 'src/app/shared/services/competition.service';
import { MatchService } from 'src/app/shared/services/match.service';
import { OpponentService } from 'src/app/shared/services/opponent-service.service';
import { PlayerService } from 'src/app/shared/services/player.service';
import { msg } from 'src/app/shared/utils/msg';
import Swal from 'sweetalert2';
import { IPostMatch } from '../interfaces/IPostMatch';

@Component({
  selector: 'app-dialog-create-match',
  templateUrl: './dialog-create-match.component.html',
  styleUrls: ['./dialog-create-match.component.scss']
})
export class DialogCreateMatchComponent implements OnInit {
  opponents: IOpponent[] = [];
  competitions: ICompetition[] = [];
  players: IPlayer[] = [];
  playersIds: string[] = [];
  lineUp: number[] = [];

  createMatchForm: FormGroup = this.fb.group({
    competition: [4, Validators.required],
    opponentId: [0, Validators.required],
    lineUpId: [this.lineUp, Validators.required],
    isHome: [false]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
  private playerService: PlayerService, private opponentService: OpponentService, 
  private competitionService: CompetitionService, private matchService: MatchService,
  private router: Router) { }

  ngOnInit(): void {
    this.getValues();
  }

  msg = msg;
  
  getValues() {
    this.opponentService.getOpponents().subscribe(
      (response: IOpponent[]) => {
        this.opponents = response;
      }
    );

    this.competitionService.getCompetitions().subscribe(
      (response: ICompetition[]) => {
        this.competitions = response;
      });

    this.playerService.getAllPlayers().subscribe(
      (response: IPlayer[]) => {
        this.players = response;
      });

  }

  postMatch() {
    let payload: IPostMatch = this.createMatchForm.value;

    this.matchService.postMatch(payload).subscribe(
      (response) => {
        Swal.fire({
          title: "Tudo certo!",
          text: "Partida adicionada com sucesso!",
          icon: 'success',
          confirmButtonText: 'Ok!'
        });
      });
  }

  addPlayer(playerId: IPlayer) {
    if (!this.lineUp.find(d => d == playerId.playerId)) {
      this.lineUp.push(playerId.playerId);
    } else {
      const index = this.lineUp.indexOf(playerId.playerId);
      this.lineUp.splice(index, 1);
    }
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.createMatchForm.get(inputName);

    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
