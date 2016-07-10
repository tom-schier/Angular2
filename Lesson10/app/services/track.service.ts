import {Injectable} from 'angular2/core';
import { Subject }    from 'rxjs/Subject';
import {WindDetails} from './weather.service'

export class TrackComponent {
    idx: number;
    windIdx: number;
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
}

@Injectable()
export class TrackService {

    public tracks: TrackComponent[];

    constructor() {
        console.log('creating flight planning service');
        this.tracks = new Array();
    }

    // Observable string sources
    private obTrackDetails = new Subject<TrackComponent[]>();

    // Observable string streams
    trackDetailsChange$ = this.obTrackDetails.asObservable();

    // Service message commands
    AddTrack(aTrack: TrackComponent) {
        var newTrack = new TrackComponent();
        newTrack.headingTrue = aTrack.headingTrue;
        newTrack.distance = aTrack.distance;
        newTrack.tas = aTrack.tas;
        newTrack.variation = -11.5;
        newTrack.headingMag
        newTrack.isReadOnly = true;
        newTrack.sector = 1;
        this.tracks.push(newTrack);
    }

    RemoveTrack(aTrack: TrackComponent) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks.splice(idx, 1);
        this.obTrackDetails.next(this.tracks);
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}
