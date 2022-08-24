import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './match-list.component';
import { MatchListRoutingModule } from './match-list-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { DialogCreateMatchComponent } from './dialog-create-match/dialog-create-match.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MatchListComponent,
    DialogCreateMatchComponent
  ],
  imports: [
    CommonModule,
    MatchListRoutingModule,
    DfWrapperModule,
    DfButtonModule,
    DfLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    DfButtonModule,
    MatDialogModule
  ]
})
export class MatchListModule { }
