import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDocumentsComponent } from './missing-documents.component';

describe('MissingDocumentsComponent', () => {
  let component: MissingDocumentsComponent;
  let fixture: ComponentFixture<MissingDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
