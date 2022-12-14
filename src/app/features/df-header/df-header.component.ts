import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'df-header',
  templateUrl: './df-header.component.html',
  styleUrls: ['./df-header.component.scss']
})
export class DfHeaderComponent implements OnInit {

  user: IUser = {};

  ngOnInit(): void {
    this.buildHeader();
    
  }

  buildHeader() {
    if (this.checkIfUserIsLogged()) {
      this.user.name = localStorage.getItem("userName") || '';
    }
  }

  checkIfUserIsLogged(): boolean {
    return localStorage.getItem("userName") !== null;
  }

}
