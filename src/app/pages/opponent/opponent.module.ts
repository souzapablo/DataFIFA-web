import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpponentComponent } from './opponent.component';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { OpponentRoutingModule } from './opponent-routing.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DialogCreateOpponentComponent } from './dialog-create-opponent/dialog-create-opponent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OpponentComponent,
    DialogCreateOpponentComponent
  ],
  imports: [
    CommonModule,
    OpponentRoutingModule,
    DfWrapperModule,
    DfLoaderModule,
    DfButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class OpponentModule { }
