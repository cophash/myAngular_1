import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightgroupComponent } from './flightgroup.component';

describe('FlightgroupComponent', () => {
  let component: FlightgroupComponent;
  let fixture: ComponentFixture<FlightgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
