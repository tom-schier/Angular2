import {Component, Input, OnInit, EventEmitter, Output, ViewEncapsulation}   from '@angular/core';
import {provideRoutes, Router} from '@angular/router';
import {AircraftListComponent}           from './aircraft/aircraftlist.component';
import {FlightPlanningComponent}   from './planning/flightplanning.component';
import {MapContainer}   from './planning/mapcontainer.component';
import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';
import {AircraftService}           from './services/aircraft.service';
import {Aircraft}           from './data/aircraft.types';
//import {Http} from '@angular/http';

@Component({
    selector: 'lesson-10',
    templateUrl: 'lesson10.html',
   // directives: [FlightPlanningComponent, AircraftDetailsComponent, AircraftListComponent, MapContainer],
    providers: [AircraftService]
})
export class Lesson10 implements OnInit{

    id: number;

    constructor(private _acService: AircraftService) {
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