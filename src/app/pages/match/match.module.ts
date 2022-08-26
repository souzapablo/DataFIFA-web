import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { MatchRoutingModule } from './match-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DialogSubstitutionComponent } from './dialog-substitution/dialog-substitution.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    MatchComponent,
    DialogSubstitutionComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    DfWrapperModule,
    DfButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class MatchModule { }
