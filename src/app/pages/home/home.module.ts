import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import {MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DfWrapperModule,
    MatCardModule
  ]
})
export class HomeModule { }
