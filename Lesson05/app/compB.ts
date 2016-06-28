import { Component, OnInit } from 'angular2/core';
import {TestService} from './test.service';

@Component({
    selector: 'comp-b',
    templateUrl: './views/compB.html'
})
export class CompB implements OnInit {
    _stB: string;

    constructor(private _svc: TestService) {       
    }

    ngOnInit() {
        this._svc._svcSt = "WAFFLE";
        this._stB = this._svc._svcSt;
    }
}
