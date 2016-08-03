import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class TestService implements OnInit {

    _svcSt: string;
    _msg: string;

    // Observable string sources
    private obMessage = new Subject<string>();

    // Observable string streams
    obMessageChange$ = this.obMessage.asObservable();

    constructor()
    {
        console.log('Creating TestService');
    }

    ngOnInit() {
        console.log('Initialising TestService');
        this._msg = "Initialised in TestService constructor";
    }

    setMessage(msg: string) {
        this._msg = msg;
        this.obMessage.next(this._msg);
    }

}
