import {Component, OnInit} from 'angular2/core';
import {WeatherService, WindDetails} from './weather.service';

class TrackComponent {
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
}

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

    constructor(private _weatherService: WeatherService) {
        this.tracks = new Array();
    }

    ngOnInit() {
        this.selTrackComp = new TrackComponent();
        this._weatherService.windDetailsChange$.subscribe(
            windDetails => {
                this.UpdateFlightPlan(windDetails);
            });
    }

    UpdateFlightPlan(theWinds: WindDetails[]) {
       //find all the winds which are used for this plan and require an update
    }

    onClick() {
        var newTrack = new TrackComponent();
        newTrack.headingTrue = this.aHeadingTrue;
        newTrack.distance = this.aDistance;
        newTrack.tas = this.aTas;
        newTrack.isReadOnly = true;
        this.tracks.push(newTrack);
    }

    onRemove(idx) {
        this.tracks.splice(idx, 1);
    }

    onSelect(idx) {
        this.selTrackComp = this.tracks[idx];
        this.selIdx = idx;
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
