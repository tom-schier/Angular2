import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {WindDetails} from './weather.service'
import { Http, Response, Jsonp } from '@angular/http';
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

    private locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/location';  // URL to web API


    // Observable string sources
    private obTrackDetails = new Subject<TrackComponent[]>();

    // Observable string streams
    trackDetailsChange$ = this.obTrackDetails.asObservable();


    constructor(private http: Http, private jsonp: Jsonp) {
        console.log('creating flight planning service');
        this.tracks = new Array();
    }

    // Service message commands
    AddTrack(aTrack: TrackComponent) {
        aTrack.variation = -11.5;
        aTrack.headingMag
        aTrack.isReadOnly = true;
        aTrack.sector = 1;
        this.tracks.push(aTrack);
        this.obTrackDetails.next(this.tracks);
    }

    RemoveTrack(aTrack: TrackComponent) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks.splice(idx, 1);
        this.obTrackDetails.next(this.tracks);
    }

    UpdateTrack(aTrack: TrackComponent) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks[idx] = aTrack;
        this.obTrackDetails.next(this.tracks);
    }

    search(term: string): Observable<Location[]> {
        return this.http.get(this.locServiceUrl + "/?st=" + term)
            .map(response => <Location[]>response.json())
            .catch(this.handleError);
    }

    getLocation(id: number) {
        return this.http.get(this.locServiceUrl + "/?id=" + id);
            //.map(response => <Location>response.json())
            //.catch(this.handleError);
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
