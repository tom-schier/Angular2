import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {WindDetails} from './weather.service'
import {AircraftService} from './aircraft.service';
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
    distance: number;
    headingTrue: number;
    headingMag: number;
    trackTrue: number;
    trackMag: number;
    tas: number;
    gs: number;
    ti: number;
    isReadOnly: boolean;
    variation: number;
    trackWind: WindDetails;
    sector: number;
    btnEditClass: string;
    btnRemoveClass: string;
    marker: google.maps.LatLng;
}

@Injectable()
export class TrackService {

    public tracks: TrackComponent[];
    public waypoints: Location[];

    private locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/';  // URL to web API
    //private locServiceUrl = 'http://localhost:25920/api/';

    // Observable string sources
    private obTrackDetails = new Subject<TrackComponent[]>();
    private obWaypointDetails = new Subject<Location[]>();
    // Observable string sources
   

    // Observable string streams
    trackDetailsChange$ = this.obTrackDetails.asObservable();
    waypointDetailsChange$ = this.obWaypointDetails.asObservable();

    constructor(private _http: Http, private jsonp: Jsonp, private _acService: AircraftService) {
        console.log('creating flight planning service');
        this.tracks = new Array();
        this.waypoints = new Array();
    }



    // Service message commands
    AddLocation(aLoc: Location, altitude: string) {
        if (aLoc == null)
            return;
        aLoc.altitude = altitude;
        this.waypoints.push(aLoc);
        this.obWaypointDetails.next(this.waypoints);

       // this.createNewTrack(aLoc, altitude);
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
                newTrack.tas = this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
                this.tracks.push(newTrack);
            }
            lastLoc = aLoc;
            idx = idx + 1;
        }
    }

    createNewTrack(aLoc: Location, altitude: string) {
        if (aLoc == null)
            return;
        
        if (this.tracks.length > 0) {
            //get the previous waypoint
            let idx = this.tracks.length - 1;
            let lastWaypoint = this.tracks[idx];

            if (this.tracks.length == 1 && lastWaypoint.toLocation == null) {
                lastWaypoint.toLocation = aLoc.code;
                lastWaypoint.altitude = altitude;
                lastWaypoint.tas = this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
            }
            else {
                var newTrack = new TrackComponent();
                newTrack.variation = -11.5;
                newTrack.headingMag
                newTrack.sector = 1;
                newTrack.fromLocation = lastWaypoint.toLocation;
                newTrack.toLocation = aLoc.code;
                newTrack.altitude = altitude;
                newTrack.tas = this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
                this.tracks.push(newTrack);
            }

        }
        else {
            var newTrack = new TrackComponent();
            newTrack.fromLocation = aLoc.code;
            newTrack.altitude = altitude;
            newTrack.variation = -11.5;
            newTrack.headingMag
            newTrack.sector = 1;
            newTrack.tas = this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
            this.tracks.push(newTrack);
        }
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

    //getLocationByDescr(desc: string) {

    //    let params: URLSearchParams = new URLSearchParams();
    //    let outSt = encodeURIComponent(desc);
    //  //  params.set('descr', outSt);
    //    return this._http.get(this.locServiceUrl + "LocByDesc/?descr=" + outSt)
    //        .toPromise()
    //        .then((response) => response.json());
    //}

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
