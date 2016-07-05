import {Component, Input, OnInit, EventEmitter, Output, ViewEncapsulation}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {AircraftListComponent}           from './aircraft/aircraftlist.component';
import {FlightPlanningComponent}   from './planning/flightplanning.component';
import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';
import {AircraftService}           from './aircraft/aircraft.service';
import {Aircraft}           from './data/aircraft.types';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES, FlightPlanningComponent, AircraftDetailsComponent, AircraftListComponent],
    providers: [AircraftService]
})
@RouteConfig([
        { path: '/planning', name: 'FlightPlanning', component: FlightPlanningComponent},
        { path: '/aircraft', name: 'AircraftDetails', component: AircraftDetailsComponent}
])
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