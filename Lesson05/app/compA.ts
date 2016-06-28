import { Component, OnInit } from 'angular2/core';
import {TestService} from './test.service';

@Component({
    selector: 'comp-a',
    templateUrl: './views/compA.html'
})
export class CompA implements OnInit {
    _stA: string;

    constructor(private _svc: TestService) {
    }

    ngOnInit() {
        this._stA = this._svc._svcSt;
    }
}
