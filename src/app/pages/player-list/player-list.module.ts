import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerListRoutingModule } from './player-list-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DialogCreatePlayerComponent } from './dialog-create-player/dialog-create-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    PlayerListComponent,
    DialogCreatePlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerListRoutingModule,
    DfWrapperModule,
    DfLoaderModule,
    DfButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
  ]
})
export class PlayerListModule { }
