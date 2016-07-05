import {Component, OnInit, Input}  from 'angular2/core';
import {AircraftService}   from './aircraft.service';
import {AircraftSpeed, Aircraft} from '../data/aircraft.types';
import {AircraftDetailsComponent}   from './aircraft-detail.component';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'ac-speeds',
    templateUrl: './acSpeeds.html'
})
export class AircraftSpeedsComponent implements OnInit{

    @Input() selectedAircraft: Aircraft;

    constructor() {
        console.log('creating Speeds Componenent');
    }

    ngOnInit() {
        console.log('ngOnInit Speeds Componenent');
    }    
}
