import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentContactComponent } from './appointment-contact.component';

describe('AppointmentContactComponent', () => {
  let component: AppointmentContactComponent;
  let fixture: ComponentFixture<AppointmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
