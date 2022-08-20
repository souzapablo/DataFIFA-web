import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerListRoutingModule } from './player-list-routing.module';



@NgModule({
  declarations: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayerListRoutingModule
  ]
})
export class PlayerListModule { }
