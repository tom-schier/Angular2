/// <reference path="../../../typings/jQuery/jQuery.d.ts" />

import {Component, ElementRef, OnInit} from 'angular2/core';
import {WeatherService, WindDetails} from '../services/weather.service';
declare var $: JQueryStatic;


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


    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    constructor(public _weatherService: WeatherService, private _elRef: ElementRef) {
        //this.winds = new Array();
    }

    ngOnInit() {
        this._weatherService.windDetailsChange$.subscribe(
            windDetails => {
                this.UpdateWinds(windDetails);
            });
    }


    UpdateWinds(theWinds: WindDetails[]) {
       // this.winds = theWinds;
    }

    onClick() {
        var newWind = new WindDetails();
        newWind.altitude = this.aAltitude;
        newWind.direction = this.aDirection;
        newWind.windspeed = this.aWindspeed;
        newWind.isReadOnly = true;
        this._weatherService.AddWind(newWind);
        this.aWindspeed = null;
        this.aAltitude = null;
        this.aDirection = null;
    }

    onAdd(direction, speed, altitude) { 
              
        var newWind = new WindDetails();
        newWind.altitude = altitude;
        newWind.direction = direction;
        newWind.windspeed = speed;
        newWind.isReadOnly = true;
        this._weatherService.AddWind(newWind);
    }

    onRemove(aWind) {
        this._weatherService.RemoveWind(aWind);
    }


    onEdit(aWind, idx) {
        var windTable = $(this._elRef.nativeElement).find("#windTable");
        aWind.isReadOnly = !aWind.isReadOnly;
        var theEditBtnElement = $(this._elRef.nativeElement).find("#btnEdit");   
        var theDirection = $(this._elRef.nativeElement).find("#tdDirection");
        theDirection   
        var theSpeed = $(this._elRef.nativeElement).find("#tdSpeed");  
        var theAltitude = $(this._elRef.nativeElement).find("#tdAltitude");  
        //var theEditBtnElement = document.getElementById("btnEdit");
        theEditBtnElement.toggleClass('btn btn-primary glyphicon glyphicon-ok').toggleClass('btn btn-primary glyphicon glyphicon-pencil');
    }

}
