import {Component, OnInit, Input}   from 'angular2/core';
import {AircraftWeight, Aircraft}   from '../data/aircraft.types';
import {AircraftService}   from './aircraft.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'ac-weights',
    templateUrl: './acWeights.html'
})

export class AircraftWeightsComponent {

    @Input() selectedAircraft: Aircraft;

    constructor() {
        console.log('creating Weights Componenent');
    }

    ngOnInit() {
        console.log('ngOnInit Weights Componenent');
    }   
}

                                   