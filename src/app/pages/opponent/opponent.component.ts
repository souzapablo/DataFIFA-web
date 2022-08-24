import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IOpponent } from 'src/app/shared/interfaces/IOpponent';
import { OpponentService } from 'src/app/shared/services/opponent-service.service';
import { DialogCreateOpponentComponent } from './dialog-create-opponent/dialog-create-opponent.component';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {

  constructor(private opponentService: OpponentService, public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getValues();
  }

  isLoadingTable: boolean = false;
  opponents: IOpponent[] = [];

  getValues() {
    this.opponentService.getOpponents().subscribe(
      (response: IOpponent[]) => {
        this.opponents = response;
      }
    )
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogCreateOpponentComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true"){
        this.router.navigateByUrl('matches');
      } 
    });
  }

}
