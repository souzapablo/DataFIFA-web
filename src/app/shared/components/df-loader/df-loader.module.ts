import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfLoaderComponent } from './df-loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    DfLoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    DfLoaderComponent
  ]
})
export class DfLoaderModule { }
