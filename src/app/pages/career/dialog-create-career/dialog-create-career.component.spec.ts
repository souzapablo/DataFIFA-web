import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCareerComponent } from './dialog-create-career.component';

describe('DialogCreateCareerComponent', () => {
  let component: DialogCreateCareerComponent;
  let fixture: ComponentFixture<DialogCreateCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
