import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoDebtSuccessComponent } from './ado-debt-success.component';

describe('AdoDebtSuccessComponent', () => {
  let component: AdoDebtSuccessComponent;
  let fixture: ComponentFixture<AdoDebtSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoDebtSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoDebtSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
