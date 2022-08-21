import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayer();
  }

  isLoadingTable: boolean = true;
  playerList: IPlayer[] = [];

  deletePlayer(id: number) {

  }

  getPlayer() {
    this.playerService.getAllPlayers().subscribe(
      (response: IPlayer[]) => {
        this.playerList = response;
        this.isLoadingTable = false;
      });
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
