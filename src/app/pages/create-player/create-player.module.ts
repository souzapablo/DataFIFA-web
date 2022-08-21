import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlayerComponent } from './create-player.component';
import { CreatePlayerRoutingModule } from './create-match-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';


@NgModule({
  declarations: [
    CreatePlayerComponent
  ],
  imports: [
    CommonModule,
    CreatePlayerRoutingModule,
    DfWrapperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    DfButtonModule
  ]
})
export class CreatePlayerModule { }
