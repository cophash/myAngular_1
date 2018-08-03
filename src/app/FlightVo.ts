import { Time } from '../../node_modules/@angular/common';

export class FlightVo {
  id: number;
  company: string;
  flightNo: string;
  departTime: Time;
  arriveTime: Time;
  price: number;
  planType: string;
  departAirport: string;
  arriveAirport: string;
  stopover: string;
  crossDay: boolean;
}
