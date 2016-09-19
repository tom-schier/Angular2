import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {WindDetails} from './weather.service'
import {AircraftService} from './aircraft.service';
import {Aircraft} from '../data/aircraft.types';
import {AircraftDetailsComponent} from '../aircraft/aircraft-detail.component';
import {Http} from '@angular/http';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { Location }           from '../planning/location';
import { Observable }     from 'rxjs/Observable';

export class TrackComponent {
    idx: number;
    windIdx: number;
    altitude: string;
    fromLocation: string;
    toLocation: string;
    distance: string;
    headingTrue: number;
    headingMag: number;
    trackTrue: number;
    trackMag: number;
    tas: number;
    gs: number;
    ti: string;
    isReadOnly: boolean;
    variation: number;
    trackWind: WindDetails;
    sector: number;
    btnEditClass: string;
    btnRemoveClass: string;
    marker: google.maps.LatLng;
}

@Injectable()
export class TrackService  {

    public tracks: TrackComponent[];
    public waypoints: Location[];

    private selectedAircraft: Aircraft;

    private locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/';  // URL to web API
    //private locServiceUrl = 'http://localhost:25920/api/';

    // Observable string sources
    private obTrackDetails = new Subject<TrackComponent[]>();
    private obWaypointDetails = new Subject<Location[]>();

    // Observable string streams
    trackDetailsChange$ = this.obTrackDetails.asObservable();
    waypointDetailsChange$ = this.obWaypointDetails.asObservable();

    constructor(private _http: Http, private jsonp: Jsonp, private _acService: AircraftService) {
        console.log('creating flight planning service');
        this.tracks = new Array();
        this.waypoints = new Array();

        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });

    }

    //ngOnInit() {
    //    this._acService.aircraftDetailsChange$.subscribe(
    //        acDetails => {
    //            this.UpdateAircraft(acDetails);
    //        });
    //}

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
        //
        //this.updateTracks();
        //this.acFlightPlanSpeed = theAircraft.acSpeeds.find(x => x.name == "TAS").val;
    }

    AddLocation(aLoc: Location, altitude: string) {
        if (aLoc == null)
            return;

        aLoc.altitude = altitude;
        this.waypoints.push(aLoc);
        this.obWaypointDetails.next(this.waypoints);

        this.updateTracks();
        this.obTrackDetails.next(this.tracks);
    }

    updateTracks() {
        let lastLoc: Location;
        let idx = 0;
        this.tracks = [];
        for (let aLoc of this.waypoints) {
            
            if (idx == 0) {
                
            }
            else {
                var newTrack = new TrackComponent();
                newTrack.variation = -11.5;
                newTrack.headingMag
                newTrack.sector = idx;
                newTrack.fromLocation = lastLoc.code;
                newTrack.toLocation = aLoc.code;
                newTrack.altitude = aLoc.altitude;
                this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
                //newTrack.tas = this.selectedAircraft.acSpeeds.find(x => x.name == "TAS").val;
                newTrack.gs = this.calculateGroundspeed(aLoc.altitude);
                let pos1 = new google.maps.LatLng(parseFloat(lastLoc.latitude), parseFloat(lastLoc.longitude), false);
                let pos2 = new google.maps.LatLng(parseFloat(aLoc.latitude), parseFloat(aLoc.longitude), false);
                let tmp = this.getDistance(pos1, pos2) * 0.000539957;
                newTrack.ti = ((tmp / newTrack.gs)*60).toFixed(0);
                newTrack.distance = (this.getDistance(pos1, pos2) * 0.000539957).toFixed(0);
                this.tracks.push(newTrack);
            }
            lastLoc = aLoc;
            idx = idx + 1;
        }
    }


    rad(x: number) {
        return x * Math.PI / 180;
    };


    getDistance (p1: google.maps.LatLng, p2: google.maps.LatLng): number {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat() - p1.lat());
        var dLong = this.rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(p1.lat())) * Math.cos(this.rad(p2.lat())) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

    calculateGroundspeed(altitude: string): number {
        return this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
    }

    RemoveWaypoint(aLoc: Location) {
        var idx = this.waypoints.indexOf(aLoc);
        this.waypoints.splice(idx, 1);
        this.obWaypointDetails.next(this.waypoints);

        this.updateTracks();
        this.obTrackDetails.next(this.tracks);
    }

    UpdateTrack(aTrack: TrackComponent) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks[idx] = aTrack;
        this.obTrackDetails.next(this.tracks);
    }

    search(term: string) {
        return this._http.get(this.locServiceUrl + "location/?st=" + term)
            .toPromise()
            .then((response) => response.json());
    }


    getLocation(id: number) {
        return this._http.get(this.locServiceUrl + "LocByID/?id=" + id)
            .toPromise()
            .then((response) => response.json());
    }



    getLocationByDescr(desc: string): Observable<Location> {
        let outSt = encodeURIComponent(desc);
        return this._http.get(this.locServiceUrl + "LocByDesc/?descr=" + outSt)
            .map((res) => res.json());
    } 


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}
