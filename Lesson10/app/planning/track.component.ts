import {Component, OnInit} from 'angular2/core';
import {WeatherService, WindDetails} from './weather.service';
import {TrackComponent, TrackService} from './track.service';



@Component({
    selector: 'track-data',
    templateUrl: './trackData.html'
})
export class TrackData implements OnInit {

    aHeadingTrue: number;
    aDistance: number;
    aTas: number;

    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
    selIdx: number;
    selTrackComp: TrackComponent;

    myTest: string;

    tracks: TrackComponent[];

    constructor(private _weatherService: WeatherService, private _trackService: TrackService) {
        this.tracks = new Array();
    }

    ngOnInit() {
        this._trackService.trackDetailsChange$.subscribe(
            trackDetails => {
                this.UpdateTracks(trackDetails);
            });
        this.loadTracks();
    }

    loadTracks() {
        this.tracks = this._trackService.tracks;
    }

    UpdateTracks(theTracks: TrackComponent[]) {
        this.tracks = theTracks;
    }

    onClick() {
        var newTrack = new TrackComponent();
        newTrack.headingTrue = this.aHeadingTrue;
        newTrack.distance = this.aDistance;
        newTrack.tas = this.aTas;
        newTrack.isReadOnly = true;
        this._trackService.AddTrack(newTrack);
    }

    onRemove(aTrack) {
        this._trackService.RemoveTrack(aTrack);
    }

    onSelect(idx) {
        //this.selWindComp = this.winds[idx];
        //  this.selIdx = idx;
    }

    onEdit(idx) {
        this.tracks[idx].isReadOnly = !this.tracks[idx].isReadOnly;
        var currentCaption = document.getElementsByClassName("idEditBtn")[idx].innerHTML;
        if (currentCaption == "Save") {
            document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Edit";
            let editWndDir = <HTMLElement>(document.getElementsByClassName("idxTrackHdg")[idx]);
            editWndDir.style.backgroundColor = "lightgray";
            let editWndSpeed = <HTMLElement>(document.getElementsByClassName("idxTrackDist")[idx]);
            editWndSpeed.style.backgroundColor = "lightgray";
            let editWndAlt = <HTMLElement>(document.getElementsByClassName("idxTrackTas")[idx]);
            editWndAlt.style.backgroundColor = "lightgray";
        }
        else {
            document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Save";
            let editWndDir = <HTMLElement>(document.getElementsByClassName("idxTrackHdg")[idx]);
            editWndDir.style.backgroundColor = "white";
            let editWndSpeed = <HTMLElement>(document.getElementsByClassName("idxTrackDist")[idx]);
            editWndSpeed.style.backgroundColor = "white";
            let editWndAlt = <HTMLElement>(document.getElementsByClassName("idxTrackTas")[idx]);
            editWndAlt.style.backgroundColor = "white";
        }
    }

}
