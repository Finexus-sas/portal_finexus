import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAdoComponent } from './success-ado.component';

describe('SuccessAdoComponent', () => {
  let component: SuccessAdoComponent;
  let fixture: ComponentFixture<SuccessAdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
