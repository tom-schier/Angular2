import {Component, OnInit} from '@angular/core';

class windComponent {
    idx: number;
    windspeed: number;
    direction: number;
    altitude: number;
    isReadOnly: boolean;
}


@Component({
    selector: 'lesson-03',
    templateUrl: './views/lesson03.html'
})
export class Lesson03 implements OnInit {
    aWindspeed: number;
    aDirection: number;
    aAltitude: number;

    selWindspeed: number;
    selDirection: number;
    selAltitude: number;
    selIdx: number;
    selWindComp: windComponent;
    

    winds: windComponent[];

    constructor() {
        this.winds = new Array();
    }

    ngOnInit() {
        this.selWindComp = new windComponent();
    }

    onClick() {
        var newWind = new windComponent();
        newWind.altitude = this.aAltitude;
        newWind.direction = this.aDirection;
        newWind.windspeed = this.aWindspeed;
        newWind.isReadOnly = true;
        this.winds.push(newWind);
    }

    onRemove(idx) {
        this.winds.splice(idx, 1);
    }

    onSelect(idx) {
        this.selWindComp = this.winds[idx];
        this.selIdx = idx;
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
