import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {AircraftService} from '../services/aircraft.service';
import {AircraftSpeed, AircraftWeight, Aircraft} from '../data/aircraft.types';
import {TrackComponent, TrackService} from '../services/track.service';
import {SpeedValidator} from './flightplanning.validators';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import {Location} from './location';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
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
    tracks: TrackComponent[];
    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
    selIdx: number;
    selTrackComp: TrackComponent;
    currAircraft: Aircraft;
    trackRows: TrackComponent[];
    altList: string[];
    submitted = false;
    showList: boolean;
    errorMessage: string;
    stLocation: string;
    loc: Location;
    waypoints: Location[];
    mode = 'Observable';
    displayValue: string;
    isSelected: boolean;

    trackForm: FormGroup;
    stComments: string[];

    wnd: WindDetails;

    private stBtnEditDefaultClass: string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;

    items: Observable<Array<string>>;

    constructor(private _trackService: TrackService, private _weatherService: WeatherService, private _elRef: Renderer,
         private _acService: AircraftService)
        {
         
            this.model = new TrackComponent();
            this.trackRows = new Array();
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
            this.isSelected = false;
            this.stLocation = "";
            this.loc = new Location();
            this.tracks = this._trackService.tracks;
            this.waypoints = this._trackService.waypoints;
    }

    ngOnInit() {
        
        this._trackService.trackDetailsChange$.subscribe(
            trackDetails => {
                this.UpdateTracks(trackDetails);
            });

        this._trackService.waypointDetailsChange$.subscribe(
            waypointDetails => {
                this.UpdateWaypoints(waypointDetails);
            });
        this._weatherService.windDetailsChange$.subscribe(
            windDetails => {
                this.UpdateWeather(windDetails);
            });
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });

        this.trackForm = new FormGroup({
            waypoint: new FormControl('', [Validators.required]),
            altitude: new FormControl('', [Validators.required])
        });

        this.items = this.trackForm.controls["waypoint"].valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this._trackService.search(term));

        this.loadTracks();
        this.currAircraft = this._acService.currentAircraft;
    }

    private searchTermStream = new Subject<string>();

    search(waypoint: string) {
        this.searchTermStream.next(waypoint);
    }


    hideList() {
        this.isSelected = false;
        this.stComments = [];
    }

    loadTracks() {
        this.trackRows = this._trackService.tracks;
    }


    onSelectLocation(event) {
        var ee = 5;
        //this.model.fromLocation = item.description;
        //this.showList = false;
        //this.isSelected = true;
    }

    UpdateTracks(theTracks: TrackComponent[]) {
        this.trackRows = theTracks;
    }

    UpdateWaypoints(theWaypoints: Location[]) {
        this.waypoints = theWaypoints;
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.currAircraft = theAircraft;
    }

    UpdateWeather(theWinds: WindDetails[]) {
        this.selWindspeed = theWinds[0].windspeed;
    }

    onSelect(item: Location) {
        this.stLocation = item.description;
        this.isSelected = true;
        //this.trackForm.controls['waypoint'].value = item.description;
        ////trackForm.controls.waypoint
        //var ee = 7;
    }

    onSubmit(event) {
        this.submitted = true;
      //  this.term.get("searchInput").setValue
    }
    active = true;

    onAdd(model: TrackComponent, isValid: boolean) {

        this.stComments = [];
        if (this.trackForm.controls["altitude"].valid == false)
            this.stComments.push("Select valid altitude from list.");
        if (this.trackForm.controls["waypoint"].valid == false)
            this.stComments.push("Waypoint is invalid.");
        
        if (isValid == false)
            return;

        this._trackService.getLocationByDescr(this.trackForm.controls["waypoint"].value).subscribe(x => this._trackService.AddLocation(x, this.trackForm.controls["altitude"].value));     
    }




    onRemove(aLoc: Location) {
        this._trackService.RemoveWaypoint(aLoc);
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
