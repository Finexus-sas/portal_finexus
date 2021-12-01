import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCertificateInfoComponent } from './debt-certificate-info.component';

describe('DebtCertificateInfoComponent', () => {
  let component: DebtCertificateInfoComponent;
  let fixture: ComponentFixture<DebtCertificateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtCertificateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtCertificateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
