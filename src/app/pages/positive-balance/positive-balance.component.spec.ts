import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveBalanceComponent } from './positive-balance.component';

describe('PositiveBalanceComponent', () => {
  let component: PositiveBalanceComponent;
  let fixture: ComponentFixture<PositiveBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
