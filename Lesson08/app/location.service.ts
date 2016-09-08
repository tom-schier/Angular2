import { Injectable }     from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Location }           from './location.component';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LocationService {
    constructor(private http: Http, private jsonp: Jsonp) { }

    private locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/location';  // URL to web API

    search(term: string): Observable<Location[]> {
        return this.http.get(this.locServiceUrl + "/?st=" + term)
            .map(response => <string[]>response.json())
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
