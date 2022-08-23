import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { CareerRoutingModule } from './career-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import {MatCardModule} from '@angular/material/card';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';


@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    DfWrapperModule,
    MatCardModule,
    DfLoaderModule,
    DfButtonModule
  ]
})
export class CareerModule { }
