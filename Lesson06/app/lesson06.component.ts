import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';



@Component({
    selector: 'lesson-06',
    templateUrl: './views/googlemaps.html'
})
export class Lesson06 implements OnInit {

    myTextClass: string;
    myIconClass: string;
    myButtonClass: string;

    constructor() {
        console.log('Creating Lesson06');
    }

    ngOnInit() {
        console.log('Initialising Lesson06'); 
    }
}


