import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match.component';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { CreateMatchRoutingModule } from './create-match-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';

@NgModule({
  declarations: [
    CreateMatchComponent
  ],
  imports: [
    CommonModule,
    CreateMatchRoutingModule,
    DfWrapperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    DfButtonModule
  ]
})
export class CreateMatchModule { }
