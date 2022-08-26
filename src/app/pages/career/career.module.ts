import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { CareerRoutingModule } from './career-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import {MatCardModule} from '@angular/material/card';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCreateCareerComponent } from './dialog-create-career/dialog-create-career.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CareerComponent,
    DialogCreateCareerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    DfWrapperModule,
    MatCardModule,
    DfLoaderModule,
    DfButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CareerModule { }
