import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfLoaderComponent } from './df-loader.component';

describe('DfLoaderComponent', () => {
  let component: DfLoaderComponent;
  let fixture: ComponentFixture<DfLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
