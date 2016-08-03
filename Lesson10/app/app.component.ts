import {Component, Input, OnInit, EventEmitter, Output, ViewEncapsulation}   from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AircraftListComponent}           from './aircraft/aircraftlist.component';
import {FlightPlanningComponent}   from './planning/flightplanning.component';
import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';
import {AircraftService}           from './services/aircraft.service';
import {Aircraft}           from './data/aircraft.types';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'lesson-10',
    templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES, FlightPlanningComponent, AircraftDetailsComponent, AircraftListComponent],
    providers: [AircraftService]
})
export class AppComponent implements OnInit{

    id: number;

    constructor(private _router: Router, private _acService: AircraftService) {
        console.log('creating AppComponent'); 
    }
    
    ngOnInit() {
        console.log('ngOnInit AppComponent');   
        this._acService.aircraftDetailsChange$.subscribe(
            msg => {
                this.updateMessage(msg);
            });  
    }

    updateMessage(msg: Aircraft) {
        this.id = msg.id;
    }

    getAircraftDetails(evt) {       
    }
}