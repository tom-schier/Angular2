import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
    selector: 'list-b',
    templateUrl: './views/listB.html'
})
export class ListB implements OnInit {

    _stB: string;

    constructor(private _svc: TestService) {
        console.log('Creating ListB');    
    }

    ngOnInit() {
        console.log('Initialising ListB');
        this._stB = this._svc._msg;
        this._svc.obMessageChange$.subscribe(
            msg => {
                this.updateMessage(msg);
            });
    }

    updateMessage(msg: string) {
        this._stB = msg;
    }
}
