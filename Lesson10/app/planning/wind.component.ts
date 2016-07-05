import {Component, OnInit} from 'angular2/core';
import {WeatherService, WindDetails} from './weather.service';



@Component({
    selector: 'wind-data',
    templateUrl: './windData.html'
})
export class WindData implements OnInit {
    aWindspeed: number;
    aDirection: number;
    aAltitude: number;

    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
   // selIdx: number;

    winds: WindDetails[];

    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    constructor(private _weatherService: WeatherService) {
        this.winds = new Array();
    }

    ngOnInit() {
        this._weatherService.windDetailsChange$.subscribe(
            windDetails => {
                this.UpdateWinds(windDetails);
            });
    }

    UpdateWinds(theWinds: WindDetails[]) {
        this.winds = theWinds;
    }

    onClick() {
        var newWind = new WindDetails();
        newWind.altitude = this.aAltitude;
        newWind.direction = this.aDirection;
        newWind.windspeed = this.aWindspeed;
        newWind.isReadOnly = true;
        this._weatherService.AddWind(newWind);
    }

    onRemove(aWind) {
        this._weatherService.RemoveWind(aWind);
    }

    onSelect(idx) {
        //this.selWindComp = this.winds[idx];
      //  this.selIdx = idx;
    }

    onEdit(idx) {
        this.winds[idx].isReadOnly = !this.winds[idx].isReadOnly;
        var currentCaption = document.getElementsByClassName("idEditBtn")[idx].innerHTML;
        if (currentCaption == "Save") {
            document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Edit";
            let editWndDir = <HTMLElement>(document.getElementsByClassName("idxWndDir")[idx]);
            editWndDir.style.backgroundColor = "lightgray";
            let editWndSpeed = <HTMLElement>(document.getElementsByClassName("idxWndSpeed")[idx]);
            editWndSpeed.style.backgroundColor = "lightgray";
            let editWndAlt = <HTMLElement>(document.getElementsByClassName("idxWndAltitude")[idx]);
            editWndAlt.style.backgroundColor = "lightgray";
        }
        else {
            document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Save";
            let editWndDir = <HTMLElement>(document.getElementsByClassName("idxWndDir")[idx]);
            editWndDir.style.backgroundColor = "white";
            let editWndSpeed = <HTMLElement>(document.getElementsByClassName("idxWndSpeed")[idx]);
            editWndSpeed.style.backgroundColor = "white";
            let editWndAlt = <HTMLElement>(document.getElementsByClassName("idxWndAltitude")[idx]);
            editWndAlt.style.backgroundColor = "white";
        }
    }

}
