import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup} from 'angular2/common';

export class Wind {
    constructor(
        public id: number,
        public speed: number,
        public altitude: string,
        public direction: number
    ) { }
}



@Component({
    selector: 'lesson07',
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

    constructor() {

        this.altList = new Array();
        this.altList.push('A020');
        this.altList.push('A030');
        this.altList.push('A040');
        this.altList.push('A050');
        this.altList.push('A060');
        this.altList.push('A070');
        this.altList.push('A080'); 
    }

    onSubmit() {
        if (this.altControl.valid == false)
            alert("OOBA");
        this.submitted = true;
    }
    get diagnostic() { return JSON.stringify(this.model); }

}