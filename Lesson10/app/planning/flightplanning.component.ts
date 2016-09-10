import {TrackService, TrackComponent}   from '../services/track.service';
import {WindData}  from './wind.component';
import {WeatherService, WindDetails}  from '../services/weather.service';
import {TrackData}  from './track.component';
import {Component, OnInit, Input, Output, EventEmitter}  from '@angular/core';
import {AircraftService}  from '../services/aircraft.service';
import { Router} from '@angular/router';
import {Aircraft, AircraftBrief} from '../data/aircraft.types';


@Component({
    templateUrl: './flightplan.html'
  //  directives: [WindData, TrackData]
})
export class FlightPlanningComponent implements OnInit {

    selectedAircraft: Aircraft;
    acFlightPlanSpeed: number;
    windDirection: number;
    windSpeed: number;
   // calcTrack: TrackComponent[];

    constructor(private _acService: AircraftService,
                public _weatherService: WeatherService, public _trackService: TrackService) {
        console.log('Creating Flight Planning Component');
    }

    ngOnInit() {
        console.log('ngOnInit Flight Planning Component');
        this.selectedAircraft = this._acService.getSelectedAircraft();
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });

        this._weatherService.windDetailsChange$.subscribe(
            wnd => {
                this.CalculateWindEffect(wnd);
            });

        this._trackService.trackDetailsChange$.subscribe(
            tr => {
                this.CalculateTrackChanges(tr);
            });
        this.acFlightPlanSpeed = this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
        this.acFlightPlanSpeed = theAircraft.acSpeeds.find(x => x.name == "TAS").val;
    }

    CalculateWindEffect(winds: WindDetails[]) {
        // update the calcTrack array
    }

    CalculateTrackChanges(tracks: TrackComponent[]) {
        // empty the calcTrack array, recreate and take winds into account
    }

    findClosestWind(aTrack: TrackComponent) {
        // return a WindDetails object
    }

}