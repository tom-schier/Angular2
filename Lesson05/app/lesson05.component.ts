import { Component, OnInit } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import { TestService }    from './test.service';
import {CompB} from './compB';
import {CompA} from './compA';
import {ListB} from './ListB';
import {ListA} from './ListA';

@Component({
    selector: 'lesson-05',
    templateUrl: './views/testservice.html',
    directives: [ROUTER_DIRECTIVES, CompB, CompA]
})
@RouteConfig([
    { path: '/ListA', name: 'ListA', component: ListA },
    { path: '/ListB', name: 'ListB', component: ListB }
])
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


