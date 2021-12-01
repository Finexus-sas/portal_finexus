import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebCertificateStep2Component } from './deb-certificate-step2.component';

describe('DebCertificateStep2Component', () => {
  let component: DebCertificateStep2Component;
  let fixture: ComponentFixture<DebCertificateStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebCertificateStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebCertificateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
