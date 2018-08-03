import { Component, OnInit } from '@angular/core';
import { FlightVo } from '../FlightVo';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flightgroup',
  templateUrl: './flightgroup.component.html',
  styleUrls: ['./flightgroup.component.css']
})
export class FlightgroupComponent implements OnInit {
  selectedflight: FlightVo;
  flights: Object[] = new Array();
  constructor(private flightService: FlightService) {
    flightService.flightgroupComponent = this;
  }
  onQuery() {
    this.flights = this.flights.concat(
    [{
      company: 'company1',
      flightNo: 'No001',
      departTime: '2017-01-01 19:00:01',
      arriveTime: '2017-01-01 21:00:01',
      price: 1200.12,
      planType: 'A380',
      departAirport: 'HVG',
      arriveAirport: 'KKX',
      stopover: 'ABC',
      crossDay: true
    }, {
      company: 'company2',
      flightNo: 'No002',
      departTime: '2017-01-02 19:00:01',
      arriveTime: '2017-02-01 21:00:01',
      price: 1200.12,
      planType: 'A380',
      departAirport: 'HVG',
      arriveAirport: 'KKX'
    }, {
      company: 'company3',
      flightNo: 'No003',
      departTime: '2017-01-01 19:00:01',
      arriveTime: '2017-01-01 21:00:01',
      price: 1200.12,
      planType: 'A380',
      departAirport: 'HVG',
      arriveAirport: 'KKX'
    }]
  );
  }
  ngOnInit() {
  }
  onSelect(flight: FlightVo): void {
    this.selectedflight = flight;
  }
}
