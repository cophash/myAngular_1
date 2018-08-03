import { Injectable } from '@angular/core';
import { FlightgroupComponent } from './flightgroup/flightgroup.component';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightgroupComponent: FlightgroupComponent;
  request() {
    this.flightgroupComponent.onQuery();
  }

  constructor() { }
}
