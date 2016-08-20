import {Component, ElementRef, OnInit} from '@angular/core';
import {WeatherService, WindDetails} from '../services/weather.service';
import {SpeedValidator} from './flightplanning.validators';
import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'wind-data',
    templateUrl: './windData.html',
    directives: [FORM_DIRECTIVES],
    providers: [FormBuilder]
})
export class WindData implements OnInit{

    windRows: WindDetails[];

    private stBtnEditDefaultClass : string;
    private stBtnEditSaveClass: string;
    private stBtnRemoveClass: string;

    windForm: ControlGroup;
    wnd: WindDetails;
    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    constructor(public _weatherService: WeatherService, private _elRef: ElementRef, private fb: FormBuilder) {
        this.wnd = new WindDetails();
        this.windRows = new Array();
        this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil fa-lg";
        this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok fa-lg";
        this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove fa-lg";

        this.windForm = fb.group({
            "windSpeed": new Control(this.wnd.windspeed, Validators.compose([Validators.required, SpeedValidator.validSpeed])),
            "windDirection": new Control(this.wnd.direction, Validators.required),
            "windAltitude": new Control(this.wnd.altitude, Validators.required)
        });
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

    onAdd(wnd: WindDetails) { 

        if (this.windForm.valid) {
            var newWind = new WindDetails();
            newWind.altitude = wnd.altitude;
            newWind.direction = wnd.direction;
            newWind.windspeed = wnd.windspeed;
            newWind.isReadOnly = true;
            newWind.btnEditClass = this.stBtnEditDefaultClass;
            newWind.btnRemoveClass = this.stBtnRemoveClass;
            // also add the wind to the service
            this._weatherService.AddWind(newWind);

            this.wnd.altitude = null;
            this.wnd.windspeed = null;
            this.wnd.direction = null;
        }
        else {
            alert('form is not valid!');
        }
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
