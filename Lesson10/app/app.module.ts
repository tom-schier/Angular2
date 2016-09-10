
//import {bootstrap} from '@angular/platform-browser-dynamic';
import {Provider}           from '@angular/core';
import {provideRoutes}  from '@angular/router';
import {Http} from '@angular/http';
import {AircraftService} from './services/aircraft.service';
import {WeatherService} from './services/weather.service';
import {TrackService} from './services/track.service';
import {routing} from './data/app.routes';
import {AircraftListComponent}           from './aircraft/aircraftlist.component';
import {FlightPlanningComponent}   from './planning/flightplanning.component';
import {AircraftSpeedsComponent} from './aircraft/aircraft-speeds.component';
import {AircraftWeightsComponent} from './aircraft/aircraft-weights.component';
import {MapContainer}   from './planning/mapcontainer.component';
import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {TrackData}  from './planning/track.component';
import {WindData}  from './planning/wind.component';

/*******************NEW NEW*********************************************/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {Lesson10} from './lesson10.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule
    ],
    providers: [
        AircraftService,
        WeatherService,
        TrackService
    ],
    declarations: [
        Lesson10, FlightPlanningComponent, AircraftDetailsComponent, AircraftListComponent,
        MapContainer, AircraftSpeedsComponent, AircraftWeightsComponent, WindData, TrackData
    ],
    bootstrap: [Lesson10]
})
export class AppModule { }


