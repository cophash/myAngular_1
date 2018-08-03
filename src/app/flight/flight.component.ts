import { Component, OnInit, Input } from '@angular/core';
import { FlightVo } from '../FlightVo';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flight: FlightVo;
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
     console.log(this.flight.company);
  }
}
