import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './match-list.component';
import { MatchListRoutingModule } from './match-list-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DfLoaderModule } from 'src/app/shared/components/df-loader/df-loader.module';


@NgModule({
  declarations: [
    MatchListComponent
  ],
  imports: [
    CommonModule,
    MatchListRoutingModule,
    DfWrapperModule,
    DfButtonModule,
    DfLoaderModule
  ]
})
export class MatchListModule { }
