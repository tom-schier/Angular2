import { Component, OnInit } from '@angular/core';

export class Wind {
    constructor(
        public id: number,
        public speed: number,
        public altitude: string,
        public direction: number
    ) { }
};

@Component({
    selector: 'lesson-07',
    templateUrl: './views/lesson07.html'
})
export class Lesson07 implements OnInit {

    model: Wind;
    submitted = false;
    altList: string[];

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

    ngOnInit() {
        this.model = new Wind(0, 0, this.altList[0], 0);
    }

    onSubmit() {
        this.submitted = true;
    }
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    newWind() {
        this.model = new Wind(0, 0, this.altList[0], 0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
