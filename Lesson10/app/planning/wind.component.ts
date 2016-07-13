/// <reference path="../../../typings/jQuery/jQuery.d.ts" />

import {Component, ElementRef, OnInit} from 'angular2/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'wind-data',
    templateUrl: './windData.html'
})
export class WindData implements OnInit{

    aWindspeed: number;
    aDirection: number;
    aAltitude: number;

    selWindspeed: number;
    selDirection: number;
    selAltitude: number;

    windRows: WindDetails[];
    //windRows: WindRowDetails[];

    private stBtnEditDefaultClass : string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;

    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    constructor(public _weatherService: WeatherService, private _elRef: ElementRef) {
        this.windRows = new Array();
        this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil";
        this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok";
        this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove";
    }

    ngOnInit() {
        this._weatherService.windDetailsChange$.subscribe(
            wnd => {
                this.UpdateWinds(wnd);
            });
        this.loadWinds();
    }

    loadWinds() {
        this.windRows = this._weatherService.winds;
    }

    UpdateWinds(theWinds: WindDetails[]) {
        this.loadWinds();
    }

    onAdd(direction, speed, altitude) { 
              
        var newWind = new WindDetails();
        newWind.altitude = altitude;
        newWind.direction = direction;
        newWind.windspeed = speed;
        newWind.isReadOnly = true;
        newWind.btnEditClass = this.stBtnEditDefaultClass;
        newWind.btnRemoveClass = this.stBtnRemoveClass;
        // also add the wind to the service
        this._weatherService.AddWind(newWind);
        // reset the initial values for the input box
        this.aAltitude = null;
        this.aDirection = null;
        this.aWindspeed = null;
    }

    onRemove(aWind) {
        this._weatherService.RemoveWind(aWind);
    }

    onEdit(aWind) {
        aWind.btnEditClass = this.toggleClass(aWind.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
        aWind.isReadOnly = (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
        if (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
            this._weatherService.UpdateWind(aWind);
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
