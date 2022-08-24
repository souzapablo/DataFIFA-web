import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOpponentComponent } from './dialog-create-opponent.component';

describe('DialogCreateOpponentComponent', () => {
  let component: DialogCreateOpponentComponent;
  let fixture: ComponentFixture<DialogCreateOpponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateOpponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
