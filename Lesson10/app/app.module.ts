

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide}           from '@angular/core';
import {provideRouter}  from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {AircraftService} from './services/aircraft.service';
import {WeatherService} from './services/weather.service';
import {TrackService} from './services/track.service';
import {appRoutingProviders, routing} from './data/app.routes';
import {AircraftListComponent}           from './aircraft/aircraftlist.component';
import {FlightPlanningComponent}   from './planning/flightplanning.component';
import {MapContainer}   from './planning/mapcontainer.component';
import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';


/*******************NEW NEW*********************************************/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Lesson10} from './lesson10.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        HTTP_PROVIDERS,
        AircraftService,
        WeatherService,
        TrackService
    ],
    declarations: [
        Lesson10, FlightPlanningComponent, AircraftDetailsComponent, AircraftListComponent, MapContainer
    ],
    bootstrap: [Lesson10]
})
export class AppModule { }


