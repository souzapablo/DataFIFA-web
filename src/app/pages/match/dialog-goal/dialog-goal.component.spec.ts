import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGoalComponent } from './dialog-goal.component';

describe('DialogGoalComponent', () => {
  let component: DialogGoalComponent;
  let fixture: ComponentFixture<DialogGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
