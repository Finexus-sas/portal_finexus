import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaceAndSafeComponent } from './peace-and-safe.component';

describe('PeaceAndSafeComponent', () => {
  let component: PeaceAndSafeComponent;
  let fixture: ComponentFixture<PeaceAndSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeaceAndSafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeaceAndSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
