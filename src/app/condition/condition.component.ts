import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import {Message} from 'primeng/api';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {

  constructor(private flightService: FlightService) {
    this.flightTypes = [
    {label: 'OneWay', value: 'oneWay'},
    {label: 'RoundTrip', value: 'roudTrip'}
  ];
    this.groupedCities = [
    {
        label: 'Germany',
        items: [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Mercedes', value: 'Mercedes'}
        ]
    },
    {
        label: 'USA',
        items: [
            {label: 'Cadillac', value: 'Cadillac'},
            {label: 'Ford', value: 'Ford'},
            {label: 'GMC', value: 'GMC'}
        ]
    },
    {
        label: 'Japan',
        items: [
            {label: 'Honda', value: 'Honda'},
            {label: 'Toyota', value: 'Toyota'}
        ]
    }
    ];
    this.today = new Date();
    this.maxDate = new Date('2020-12-31');
  }
  flightTypes: SelectItem[];
  selectedType: SelectItem;

  selectedDepart: SelectItem;
  selectedArrive: SelectItem;
  groupedCities: SelectItemGroup[];
  selectDates: Date;
  today: Date;
  maxDate: Date;
  msgs: Message[] = [];
  test: Boolean = true;
  handleClick() {
    this.msgs = [];
    if (this.test === true) {
      this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    } else {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'PrimeNG rocks'});
    }
    this.test = !this.test;

    this.flightService.request();
  }
}
