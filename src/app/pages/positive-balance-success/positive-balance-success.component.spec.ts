import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveBalanceSuccessComponent } from './positive-balance-success.component';

describe('PositiveBalanceSuccessComponent', () => {
  let component: PositiveBalanceSuccessComponent;
  let fixture: ComponentFixture<PositiveBalanceSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveBalanceSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveBalanceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
