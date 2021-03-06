﻿import {Injectable, OnInit, Component} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {WindDetails} from './weather.service'
import {AircraftService} from './aircraft.service';
import {WeatherService} from './weather.service';
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
    public totalDistance: number;
    public totalTime: number;
    public totalDistanceString: string;
    public totalTimeString: string;
    private selectedAircraft: Aircraft;

    private locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/';  // URL to web API
    //private locServiceUrl = 'http://localhost:25920/api/';

    // Observable string sources
    private obTrackDetails = new Subject<TrackComponent[]>();
    private obWaypointDetails = new Subject<Location[]>();
    private obTotalTime = new Subject<string>();
    private obTotalDistance = new Subject<string>();

    // Observable string streams
    trackDetailsChange$ = this.obTrackDetails.asObservable();
    waypointDetailsChange$ = this.obWaypointDetails.asObservable();
    totalTimeChanged$ = this.obTotalTime.asObservable();
    totalDistanceChanged$ = this.obTotalDistance.asObservable();

    //geocoder: google.maps.Geocoder;
    //map: google.maps.Map;

    constructor(private _http: Http, private jsonp: Jsonp, private _weatherSvc: WeatherService) {
        console.log('creating flight planning service');
        this.tracks = new Array();
        this.waypoints = new Array();
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
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
        this.totalDistance = 0;
        this.totalTime = 0;
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
                //this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
                newTrack.tas = this.selectedAircraft.acSpeeds.find(x => x.name == "TAS").val;
                newTrack.gs = this.calculateGroundspeed(aLoc.altitude);
                // last location calc
                let theLatParts = lastLoc.latitude.split(" ");
                let decPart1 = theLatParts[1].split(".");
                let theLat = parseFloat(theLatParts[0]) + parseFloat(theLatParts[1]) / 60;

                if (lastLoc.latdir == 'W')
                    theLat = theLat * (-1);

                let theLngParts = lastLoc.longitude.split(" ");
                let theLng = parseFloat(theLngParts[0]) + parseFloat(theLngParts[1]) / 60;

                if (lastLoc.latdir == 'S')
                    theLng = theLng * (-1);
                // the new location
                let theLatParts1 = aLoc.latitude.split(" ");
                let theLat1 = parseFloat(theLatParts1[0]) + parseFloat(theLatParts1[1]) / 60;

                if (aLoc.latdir == 'W')
                    theLat1 = theLat1 * (-1);

                let theLngParts1 = aLoc.longitude.split(" ");
                let theLng1 = parseFloat(theLngParts1[0]) + parseFloat(theLngParts1[1]) / 60;

                if (aLoc.latdir == 'S')
                    theLng1 = theLng1 * (-1);

                let pos1 = new google.maps.LatLng(theLat, theLng, false);
                let pos2 = new google.maps.LatLng(theLat1,theLng1, false);
                let tmp = this.getDistance(pos1, pos2) * 0.000539957; //convert distance from m to nm
                newTrack.ti = ((tmp / newTrack.gs)*60).toFixed(0);
                newTrack.distance = (this.getDistance(pos1, pos2) * 0.000539957).toFixed(0);
                this.totalDistance += (this.getDistance(pos1, pos2) * 0.000539957);
                this.totalTime += ((tmp / newTrack.gs) * 60);
                this.totalDistanceString = this.totalDistance.toFixed(0);
                this.totalTimeString = this.totalTime.toFixed(0);
                newTrack.headingTrue = this.calculateHeading(pos2, pos1, newTrack);
                newTrack.headingMag = newTrack.headingTrue;
                this.tracks.push(newTrack);
            }
            lastLoc = aLoc;
            idx = idx + 1;
        }
        this.obTotalTime.next(this.totalTimeString);
        this.obTotalDistance.next(this.totalDistanceString);
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

    calculateHeading(p1: google.maps.LatLng, p2: google.maps.LatLng, aTrack: TrackComponent): number {

        let λ1 = this._toRad(p1.lng());
        let λ2 = this._toRad(p2.lng());
        let φ1 = this._toRad(p1.lat());
        let φ2 = this._toRad(p2.lat());

        let y = Math.sin(λ2 - λ1) * Math.cos(φ2);
        let x = Math.cos(φ1) * Math.sin(φ2) -
            Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
        let brng = this._toDeg(Math.atan2(y, x));

        if (brng < 0)
            brng = 360 + brng;
        if (this._weatherSvc.winds.length > 0 && aTrack.altitude != "") {
            //find the wind altitude closest to the one for the track
          //  let aWind = this._weatherSvc.winds.find(x => x.altitude == aTrack.altitude);
            //aWind.direction
            return Math.round(brng);
        }
        else {
            // no wind therfore no correction
            return Math.round(brng);
        }
    }


    /**
  * Since not all browsers implement this we have our own utility that will
  * convert from degrees into radians
  *
  * @param deg - The degrees to be converted into radians
  * @return radians
  */
    _toRad(deg: number): number {
        return deg * Math.PI / 180;
    }

    /**
     * Since not all browsers implement this we have our own utility that will
     * convert from radians into degrees
     *
     * @param rad - The radians to be converted into degrees
     * @return degrees
     */
    _toDeg(rad: number): number {
        return rad * 180 / Math.PI;
    }

    calculateGroundspeed(altitude: string): number
    {
        //find the wind altitude closest to the one for the track
        if (this._weatherSvc.winds.length > 0) {
            return this.selectedAircraft.acSpeeds.find(x => x.name == "TAS").val;
        }
        else
            return this.selectedAircraft.acSpeeds.find(x => x.name == "TAS").val;
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
