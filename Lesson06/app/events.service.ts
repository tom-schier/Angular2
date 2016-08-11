import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataItem }           from './dataitem.component';
import { Observable }     from 'rxjs/Observable';

import {Address} from './address.component';

@Injectable()
export class EventService {

    dataUrl: string;

    constructor(private http: Http) {
        this.dataUrl = "http://localhost:30141/api/Events";
    }

    getItems() {
        return this.http.get(this.dataUrl)
            .subscribe((res: Response) => this.extractData(res), (res: Response) => this.handleError(res));
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
