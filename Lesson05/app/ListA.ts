import { Component, OnInit } from 'angular2/core';
import {TestService} from './test.service';

@Component({
    selector: 'list-a',
    templateUrl: './views/listA.html'
})
export class ListA implements OnInit {

    _stA: string;

    constructor(private _svc: TestService) {
        console.log('Creating ListA');
    }

    ngOnInit() {
        console.log('Initialising ListA'); 
        this._stA = this._svc._msg;
        this._svc.obMessageChange$.subscribe(
            msg => {
                this.updateMessage(msg);
            });
    }

    updateMessage(msg: string) {
        this._stA = msg;
    }
}
