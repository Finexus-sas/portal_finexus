import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoComponent } from './ado.component';

describe('AdoComponent', () => {
  let component: AdoComponent;
  let fixture: ComponentFixture<AdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
