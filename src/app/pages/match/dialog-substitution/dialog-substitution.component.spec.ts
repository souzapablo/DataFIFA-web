import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubstitutionComponent } from './dialog-substitution.component';

describe('DialogSubstitutionComponent', () => {
  let component: DialogSubstitutionComponent;
  let fixture: ComponentFixture<DialogSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
