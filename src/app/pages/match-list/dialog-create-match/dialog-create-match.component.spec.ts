import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateMatchComponent } from './dialog-create-match.component';

describe('DialogCreateMatchComponent', () => {
  let component: DialogCreateMatchComponent;
  let fixture: ComponentFixture<DialogCreateMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
