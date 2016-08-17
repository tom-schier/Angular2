import {Component, OnInit, ElementRef} from '@angular/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup, Control, FormBuilder, ControlGroup, Validators} from '@angular/common';
import {TrackComponent, TrackService} from '../services/track.service';
import {SpeedValidator} from './flightplanning.validators';



@Component({
    selector: 'track-data',
    templateUrl: './trackData.html'
})
export class TrackData implements OnInit {

    aHeading: number;
    aDistance: number;
    aTas: number;

    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
    selIdx: number;
    selTrackComp: TrackComponent;

    tracks: TrackComponent[];
    tr: TrackComponent;

    private stBtnEditDefaultClass: string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;
    trackForm: ControlGroup;

    constructor(private _trackService: TrackService, private _weatherService: WeatherService, private _elRef: ElementRef,
        fb: FormBuilder)
        {
            this.tr = new TrackComponent();
            this.tracks = new Array();
            this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil fa-lg";
            this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok fa-lg";
            this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove fa-lg";

            this.trackForm = fb.group({
                "trackSpeed": new Control(this.tr.tas, Validators.compose([Validators.required, SpeedValidator.validSpeed])),
                "trackWaypoint": new Control(this.tr.fromLocation, Validators.required),
                "trackAltitude": new Control(this.tr.altitude, Validators.required)
            });
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
        this.loadTracks();
    }

    loadTracks() {
        this.tracks = this._trackService.tracks;
    }

    UpdateTracks(theTracks: TrackComponent[]) {
        this.tracks = theTracks;
    }

    UpdateWeather(theWinds: WindDetails[]) {
        this.selWindspeed = theWinds[0].windspeed;
    }

    onAdd(aTrack: TrackComponent) {

        //var newTrack = new TrackComponent();
        //newTrack.headingTrue = heading;
        //newTrack.distance = distance;
        //newTrack.tas = tas;
        //newTrack.isReadOnly = true;
        
        //aTrack.btnEditClass = this.stBtnEditDefaultClass;
        //aTrack.btnRemoveClass = this.stBtnRemoveClass;
        // also add the wind to the service
        this._trackService.AddTrack(aTrack);
        // reset the initial values for the input box
        this.aHeading = null;
        this.aDistance = null;
        this.aTas = null;
    }

    onRemove(aTrack) {
        this._trackService.RemoveTrack(aTrack);
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
