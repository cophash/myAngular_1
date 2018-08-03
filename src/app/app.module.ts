import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { ConditionComponent } from './condition/condition.component';
import { SelectButtonModule } from 'primeng/primeng';
import { FormsModule} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {GrowlModule} from 'primeng/growl';
import { FlightgroupComponent } from './flightgroup/flightgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    ConditionComponent,
    FlightgroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
