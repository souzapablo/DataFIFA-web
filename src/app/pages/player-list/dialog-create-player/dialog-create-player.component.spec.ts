import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePlayerComponent } from './dialog-create-player.component';

describe('DialogCreatePlayerComponent', () => {
  let component: DialogCreatePlayerComponent;
  let fixture: ComponentFixture<DialogCreatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreatePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
