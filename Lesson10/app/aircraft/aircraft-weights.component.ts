import {Component, OnInit, Input}   from '@angular/core';
import {AircraftWeight, Aircraft}   from '../data/aircraft.types';
import {AircraftService}   from '../services/aircraft.service';
import {Router} from '@angular/router';

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

                                   