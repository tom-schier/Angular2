import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from '@angular/core';
import {AircraftSpeedsComponent} from './aircraft-speeds.component';
import {AircraftWeightsComponent} from './aircraft-weights.component';
import {AircraftService}  from '../services/aircraft.service';
import {Aircraft, AircraftBrief} from '../data/aircraft.types';

@Component({
    selector: 'ac-details',
    templateUrl: './acDetails.html'
   // directives: [AircraftSpeedsComponent, AircraftWeightsComponent]
})
export class AircraftDetailsComponent implements OnInit{

    selectedAircraft: Aircraft;

    constructor(private _acService: AircraftService) {
        console.log('creating Details Component');
    }

    ngOnInit() {
        console.log('ngOnInit Details Component');
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });
        this.selectedAircraft = this._acService.getSelectedAircraft();
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
    }
}

