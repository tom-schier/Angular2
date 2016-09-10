import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, NgControlStatus} from '@angular/forms';

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
    public events: any[] = []; // use to publish for m changes
    // the form groupd where we capture speed, direction, and altitude of the Wind (model)
    windForm: FormGroup;

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

        this.windForm = new FormGroup({
            speed: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("^[0-9][0-9][0-9]$")]),
            direction: new FormControl('', [Validators.required, Validators.pattern("^[0-3][0-9][0-9]$")]),
            altitude: new FormControl('', [Validators.required])
        });
        this.subcribeToChanges();
    }

    onSubmit() {
        this.submitted = true;
    }

    subcribeToChanges() {
        // initialize stream
        const myFormValueChanges$ = this.windForm.valueChanges;
        // subscribe to the stream 
        myFormValueChanges$.subscribe(x => this.events
            .push({
                        event: 'SOME EVENT', object: x 
                    })
                );
     }

    save(model: Wind, isValid: boolean) {
        this.submitted = true; // set form submit to true

        if (isValid) 
            this.model = model;
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}
