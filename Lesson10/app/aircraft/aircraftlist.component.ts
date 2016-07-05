

import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from 'angular2/core';
import {AircraftSpeedsComponent} from './aircraft-speeds.component';
import {AircraftWeightsComponent} from './aircraft-weights.component';
import {AircraftService}  from './aircraft.service';
import {RouteParams, Router} from 'angular2/router';
import {Aircraft, AircraftBrief} from '../data/aircraft.types';

@Component({
    selector: 'ac-list',
    templateUrl: './aircraftList.html'
})
export class AircraftListComponent implements OnInit{

    _acList: AircraftBrief[];
    myListString: string;

    selectedAircraft: Aircraft;

    constructor(private _router: Router, public _acService: AircraftService) {
        console.log('creating List Component');
    };

    ngOnInit() {
        console.log('ngOnInit List Component');
        this._acList = this._acService.getBriefAircraftList();
        if (this._acList.length > 0) {
            this.selectedAircraft = this._acService.getAircraftForId(1);
        }
    }

    onSelect(ac: AircraftBrief) {
        this._acService.setCurrentAircraft(ac.id);
    }
};
