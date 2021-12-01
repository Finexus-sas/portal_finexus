import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaceAndSafeConfirmComponent } from './peace-and-safe-confirm.component';

describe('PeaceAndSafeConfirmComponent', () => {
  let component: PeaceAndSafeConfirmComponent;
  let fixture: ComponentFixture<PeaceAndSafeConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeaceAndSafeConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeaceAndSafeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
