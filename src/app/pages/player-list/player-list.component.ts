import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';
import { PlayerService } from 'src/app/shared/services/player.service';
import { environment } from 'src/environments/environment';
import { DialogCreatePlayerComponent } from './dialog-create-player/dialog-create-player.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  isLoadingTable: boolean = true;
  playerList: IPlayer[] = [];

  deletePlayer(id: number) {

  }

  getPlayers() {
    this.playerService.getPlayersByTeamId(environment.teamId).subscribe(
      (response: IPlayer[]) => {
        this.playerList = response;
        this.isLoadingTable = false;
      });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogCreatePlayerComponent, {data: {id: environment.teamId}})

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
