import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { TestService }    from './test.service';
import {ListB} from './ListB';
import {ListA} from './ListA';

@Component({
    selector: 'lesson-05',
    templateUrl: './views/testservice.html',
    directives: [ROUTER_DIRECTIVES, ListA, ListB]
})
export class Lesson05 implements OnInit {

    modelMsg: string;
    serviceMsg: string;

    constructor(private _router: Router, private _svc: TestService) {
        console.log('Creating Lesson05');
    }
    ngOnInit() {
        console.log('Initialising Lesson05');
        this.serviceMsg = this._svc._msg;
        this.modelMsg = 'Init Model Msg';
        this._svc.obMessageChange$.subscribe(
            msg => {
                this.updateMessage(msg);
            });
    }

    updateMessage(msg: string) {
        this.serviceMsg = msg;
    }

    onSetMsg(msg: string) {
        this._svc.setMessage(msg);
    }

}


