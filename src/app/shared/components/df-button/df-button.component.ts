import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'df-button',
  templateUrl: './df-button.component.html',
  styleUrls: ['./df-button.component.scss']
})
export class DfButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() small: boolean = false;
  @Input() light: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
