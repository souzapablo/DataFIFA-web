import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerListRoutingModule } from './player-list-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';



@NgModule({
  declarations: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayerListRoutingModule,
    DfWrapperModule,
    DfLoaderModule,
    DfButtonModule
  ]
})
export class PlayerListModule { }
