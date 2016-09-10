import {Component, OnInit, ElementRef} from '@angular/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {AircraftService} from '../services/aircraft.service';
import {AircraftSpeed, AircraftWeight, Aircraft} from '../data/aircraft.types';
import {TrackComponent, TrackService} from '../services/track.service';
import {SpeedValidator} from './flightplanning.validators';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import {Location} from './location';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import '../rxjs-operators';


@Component({
    selector: 'track-data',
    templateUrl: './trackData.html'
})
export class TrackData implements OnInit {

    aHeading: number;
    aDistance: number;
    aTas: number;
    model: TrackComponent;
    
    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
    selIdx: number;
    selTrackComp: TrackComponent;
    currAircraft: Aircraft;
    //waypoints: Location[];
    tracks: TrackComponent[];
    //model: Location;
    altList: string[];
    submitted = false;
    showList: boolean;
    errorMessage: string;
    locations: Location[];
    mode = 'Observable';
    displayValue: string;

    private stBtnEditDefaultClass: string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;

    items: Observable<Array<string>>;
    term: FormControl;

    constructor(private _trackService: TrackService, private _weatherService: WeatherService, private _elRef: ElementRef,
         private _acService: AircraftService)
        {
         
            this.model = new TrackComponent();
            this.tracks = new Array();
            this.showList = true;

            this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil fa-lg";
            this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok fa-lg";
            this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove fa-lg";

            this.altList = new Array();
            this.altList.push('A020');
            this.altList.push('A030');
            this.altList.push('A040');
            this.altList.push('A050');
            this.altList.push('A060');
            this.altList.push('A070');
            this.altList.push('A080');
            this.term = new FormControl();

            this.items = this.term.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this._trackService.search(term));


    }

    ngOnInit() {
        
        this._trackService.trackDetailsChange$.subscribe(
            trackDetails => {
                this.UpdateTracks(trackDetails);
            });
        this._weatherService.windDetailsChange$.subscribe(
            windDetails => {
                this.UpdateWeather(windDetails);
            });
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });
        this.loadTracks();
        this.currAircraft = this._acService.currentAircraft;
    }

    private searchTermStream = new Subject<string>();

    search(term: string) {
        this.searchTermStream.next(term);
    }

    loadTracks() {
        this.tracks = this._trackService.tracks;
    }


    onSelectLocation(event, item: Location) {
        this.model.fromLocation = item.description;
        this.showList =false;
    }

    UpdateTracks(theTracks: TrackComponent[]) {
        this.tracks = theTracks;
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.currAircraft = theAircraft;
    }

    UpdateWeather(theWinds: WindDetails[]) {
        this.selWindspeed = theWinds[0].windspeed;
    }


    onSubmit() {
        this.submitted = true;
        this.term.get("searchInput").setValue
    }
    active = true;

    onAdd() {
        
        //first add the new waypoint to the array
        //this.waypoints.push(this.loc);
        if (this.tracks.length > 0) {
            //get the previous waypoint
            let idx = this.tracks.length - 1;         
            let lastWaypoint = this.tracks[idx];

            var newTrack = new TrackComponent();
            newTrack.fromLocation = lastWaypoint.fromLocation;
            newTrack.toLocation = this.model.fromLocation;
            newTrack.altitude = this.model.altitude;
            newTrack.tas = this.currAircraft.acSpeeds.find(x => x.name == "TAS").val;
            this._trackService.AddTrack(newTrack);
        }
        else {
            //get the previous waypoint
            //let idx = this.tracks.length - 1;
            //let lastWaypoint = this.tracks[idx];

            var newTrack = new TrackComponent();
            newTrack.fromLocation = this.model.fromLocation;
            //newTrack.toLocation = this.model.fromLocation;
            newTrack.altitude = this.model.altitude;
            newTrack.tas = this.currAircraft.acSpeeds.find(x => x.name == "TAS").val;
            this._trackService.AddTrack(newTrack);
        }        
    }

    onRemove(aLoc: Location) {
       // this._trackService.RemoveTrack(aTrack);
    }

    onEdit(aTrack) {
        aTrack.btnEditClass = this.toggleClass(aTrack.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
        aTrack.isReadOnly = (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
        if (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
            this._trackService.UpdateTrack(aTrack);
    }

    toggleClass(c0: string, c1: string, c2: string) {
        if (c0 == c1)
            return c2;
        if (c0 == c2)
            return c1;
        else
            return c0;
    }

}
