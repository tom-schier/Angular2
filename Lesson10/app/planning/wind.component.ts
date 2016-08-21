import {Component, ElementRef, OnInit} from '@angular/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {SpeedValidator} from './flightplanning.validators';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'wind-data',
    templateUrl: './windData.html'
})
export class WindData implements OnInit{

    windRows: WindDetails[];
    altList: string[];
    model: WindDetails;
    private stBtnEditDefaultClass : string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;

    active = true;

    wnd: WindDetails;
    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    constructor(public _weatherService: WeatherService, private _elRef: ElementRef) {
        this.wnd = new WindDetails();
        this.windRows = new Array();
        this.altList = new Array();
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

    }

    ngOnInit() {
        this.model = new WindDetails();
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

    onAdd() { 
            var newWind = new WindDetails();
            newWind.altitude = this.model.altitude;
            newWind.direction = this.model.direction;
            newWind.windspeed = this.model.windspeed;
            newWind.isReadOnly = true;
            newWind.btnEditClass = this.stBtnEditDefaultClass;
            newWind.btnRemoveClass = this.stBtnRemoveClass;
 
            this._weatherService.AddWind(newWind);
    }

    onRemove(aWind) {
        this._weatherService.RemoveWind(aWind);
    }

    onEdit(aWind) {
        aWind.isReadOnly = (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
        if (aWind.isReadOnly == false) {
            var msg: string;
            msg = this.validateWind(aWind)
            if (msg != 'OK') {
                alert(msg);
                return;
            }
                
        }
        aWind.btnEditClass = this.toggleClass(aWind.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
        aWind.isReadOnly = (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
        if (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
            this._weatherService.UpdateWind(aWind);
    }

    validateWind(aWind) {
        if (isNaN(aWind.direction) == true)
            return "Direction must be between 0 amd 360";
        var dir: number;
        dir = +aWind.direction;
        if (dir < 0 || dir > 360)
            return "Direction must be between 0 amd 360";
        if (isNaN(aWind.windspeed) == true)
            return "Speed must be between 0 amd 250";
        var dir: number;
        dir = +aWind.windspeed;
        if (dir < 0 || dir > 360)
            return "Speed must be between 0 amd 250";
        else
            return "OK";

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
