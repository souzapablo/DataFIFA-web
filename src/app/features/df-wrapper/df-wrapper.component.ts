import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TDfWrapperCol } from './types/TDfWrapperCol';


@Component({
  selector: 'df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrls: ['./df-wrapper.component.scss']
})
export class DfWrapperComponent {

  @Input() type: TDfWrapperCol = 'two-col';
  @Input() back: string = '';

  constructor(private router: Router) {}

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
