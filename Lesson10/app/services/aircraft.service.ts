

import {Injectable,  Output, EventEmitter} from '@angular/core';
import {aircraftList} from '../data/mock-aircraft-data';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AircraftSpeed, AircraftWeight, Aircraft, AircraftBrief} from '../data/aircraft.types';
import {iAircraftService} from '../aircraft/aircraft.interface';
import {Subject} from 'rxjs/Subject';



@Injectable()
export class AircraftService {

    currentAircraft: Aircraft;

    // Observable string sources
    private obAircraftDetails = new Subject<Aircraft>();

    // Observable string streams
    aircraftDetailsChange$ = this.obAircraftDetails.asObservable();

    constructor(private http: Http) {
        console.log('Creating Aircraft service');
        this.currentAircraft = aircraftList.filter(x => x.id == 1)[0];
    }

    getBriefAircraftList() {
        var acList = [];
        for (var ac of aircraftList) {
            var acBrief = new AircraftBrief(ac.id, ac.name);
            acList.push(acBrief);
        }
        return acList;
    }

    getSelectedAircraft() {
        return this.currentAircraft;
    }
    getFirstAircraft() {
        var firstAc = aircraftList[0];
        return firstAc;
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    getAircraftForId(id: number) {
       // this.selectedChange.next(aircraftList.filter(x => x.id == id)[0]);
        return aircraftList.filter(x => x.id == id)[0];
    }

    setCurrentAircraft(id: number) {
        this.currentAircraft = this.getAircraftForId(id);
        this.obAircraftDetails.next(this.currentAircraft);
    }
}


    