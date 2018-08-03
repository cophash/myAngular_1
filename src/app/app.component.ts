import { Component } from '@angular/core';
import { FlightComponent } from './flight/flight.component';
import { ConditionComponent } from './condition/condition.component';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  cond = ConditionComponent;
  constructor() {
  }
}
