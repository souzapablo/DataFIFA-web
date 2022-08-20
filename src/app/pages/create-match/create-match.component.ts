import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IPostMatch } from '../match-list/interfaces/IPostMatch';
import { MatchService } from '../../shared/services/match.service';
import { ICompetition } from '../../shared/interfaces/ICompetition';
import { IOpponent } from '../../shared/interfaces/IOpponent';
import { CompetitionService } from '../../shared/services/competition.service';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { PlayerService } from 'src/app/shared/services/player.service';
import { OpponentService } from 'src/app/shared/services/opponent-service.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  id: number;
  screenType: 'edit' | 'create';
  opponents: IOpponent[] = [];
  competitions: ICompetition[] = [];
  players: IPlayer[] = [];
  playersIds: string[] = [];
  lineUp: number[] = [];

  constructor(private opponentService: OpponentService, private competitionService: CompetitionService,
    private matchService: MatchService, private router: Router, private fb: FormBuilder,
    private playerService: PlayerService) {
    this.id = history.state.id
    this.screenType = this.id ? 'edit' : 'create'
  }

  ngOnInit(): void {
    this.getValues();
  }

  createMatchForm: FormGroup = this.fb.group({
    competition: [4, Validators.required],
    opponentId: [0, Validators.required],
    lineUpId: [this.lineUp, Validators.required],
    isHome: [false]
  })

  isHome: boolean = false;

  postMatch() {
    let payload: IPostMatch = this.createMatchForm.value;

    this.matchService.postMatch(payload).subscribe(
      (response) => {
        Swal.fire({
          title: "Tudo certo!",
          text: "Partida adicionada com sucesso!",
          icon: 'success',
          confirmButtonText: 'Ok!'
        }).then(response => {
          this.router.navigateByUrl('matches')
        })
      })
  }

  addPlayer(playerId: IPlayer) {
    if (!this.lineUp.find(d => d == playerId.playerId)) {
      this.lineUp.push(playerId.playerId);
    } else {
      const index = this.lineUp.indexOf(playerId.playerId);
      this.lineUp.splice(index, 1);
    }
  }

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

  printPlayersIds(): string {
    let ids: string = '';

    for (let id of this.playersIds) {
      ids += `${id},`;
    }

    ids = ids.substring(0, ids.length - 1);
    return ids;
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.createMatchForm.get(inputName);

    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
