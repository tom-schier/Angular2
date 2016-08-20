import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';



@Component({
    selector: 'lesson-04',
    templateUrl: './views/lesson04.html'
})
export class Lesson04 implements OnInit {

    myTextClass: string;
    myIconClass: string;
    myButtonClass: string;

    constructor() {
        console.log('Creating Lesson04');
    }

    ngOnInit() {
        console.log('Initialising Lesson04');
        this.myTextClass = "bg-success";
        this.myIconClass = "glyphicon glyphicon-envelope";
        this.myButtonClass = "btn btn-default"; 
    }

    onClickText() {
        this.myTextClass = this.toggleClass(this.myTextClass, "bg-success", "bg-danger");  
    }

    onClickIcon() {
        this.myIconClass = this.toggleClass(this.myIconClass, "glyphicon glyphicon-envelope", "glyphicon glyphicon-print");  
    }


    onClickBtn() {
        this.myButtonClass = this.toggleClass(this.myButtonClass, "btn btn-info", "btn btn-default"); 
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


