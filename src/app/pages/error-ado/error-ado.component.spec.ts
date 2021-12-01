import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAdoComponent } from './error-ado.component';

describe('ErrorAdoComponent', () => {
  let component: ErrorAdoComponent;
  let fixture: ComponentFixture<ErrorAdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
