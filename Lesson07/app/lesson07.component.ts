import {Component,ElementRef, Input} from '@angular/core';
import {SpeedValidator} from './validator';
import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup, Control, FormBuilder, ControlGroup, Validators} from '@angular/common';


export class Wind {
    constructor(
        public id: number,
        public speed: number,
        public altitude: string,
        public direction: number
    ) { }
}

@Component({
    selector: 'lesson-07',
    templateUrl: './views/validation.html',
    directives: [FORM_DIRECTIVES]
})
export class Lesson07 {
    model = new Wind(1, 120, 'A050', 270);
    submitted = false;
    altList: string[];
    altControl: NgControl;
    dirControl: NgControl;
    spdControl: NgControl;

    windForm: ControlGroup;
    wnd: Wind;

    constructor(fb: FormBuilder, private _elRef: ElementRef) {

        this.altList = new Array();
        this.altList.push('A020');
        this.altList.push('A030');
        this.altList.push('A040');
        this.altList.push('A050');
        this.altList.push('A060');
        this.altList.push('A070');
        this.altList.push('A080'); 

        this.windForm = fb.group({
            "windSpeed": new Control(this.wnd.speed, Validators.compose([Validators.required, SpeedValidator.validSpeed])),
            "windDirection": new Control(this.wnd.direction, Validators.required),
            "windAltitude": new Control(this.wnd.altitude, Validators.required)
        });
    }

    onSubmit() {
        if (this.altControl.valid == false)
            alert("OOBA");
        this.submitted = true;
    }
    get diagnostic() { return JSON.stringify(this.model); }

}