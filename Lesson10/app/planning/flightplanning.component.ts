
//import {Component, OnInit, Input, Output, EventEmitter,  Inject}   from 'angular2/core';
import { TrackService}   from './track.service';
//import {RouteParams} from 'angular2/router';
//import {AircraftService}  from '../aircraft/aircraft.service';
//import {Aircraft}  from '../data/aircraft.types';
import {WindData}  from './wind.component';
import {WeatherService}  from './weather.service';
import {TrackData}  from './track.component';

import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from 'angular2/core';
//import {AircraftSpeedsComponent} from './aircraft-speeds.component';
//import {AircraftWeightsComponent} from './aircraft-weights.component';
import {AircraftService}  from '../aircraft/aircraft.service';
import {RouteParams, Router} from 'angular2/router';
import {Aircraft, AircraftBrief} from '../data/aircraft.types';



@Component({
    templateUrl: './flightplan.html',
    directives: [WindData, TrackData]
})
export class FlightPlanningComponent implements OnInit {

    selectedAircraft: Aircraft;
    windDirection: number;
    windSpeed: number;

    constructor(private _routeParams: RouteParams, private _acService: AircraftService,
                public _weatherService: WeatherService) {
        console.log('Creating Flight Planning Component');
    }

    ngOnInit() {
        console.log('ngOnInit Flight Planning Component');
        this.selectedAircraft = this._acService.getSelectedAircraft();
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
    }

    //onSubmit() {
    //    this.windDirection
    //}

    //onclick(evt) {

    //}
}