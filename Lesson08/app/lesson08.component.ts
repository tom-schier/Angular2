import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { LocationService } from './location.service';
import {Location} from './location.component';
import './rxjs-operators';

@Component({
    selector: 'lesson-08',
    templateUrl: './views/lesson08.html',
    providers: [LocationService]
})
export class Lesson08 {

    constructor(private locationService: LocationService) { }

    errorMessage: string;
    locations: Location[];
    mode = 'Observable';

    private searchTermStream = new Subject<string>();
    searchString: string;

    search(term: string) {

        this.searchTermStream.next(term);
    }

    getLocations() {
        this.locationService.search(this.searchString)
            .subscribe(
            heroes => this.locations = heroes,
            error => this.errorMessage = <any>error);
    }

    //items: Observable<string[]> = this.searchTermStream
    //    .debounceTime(300)
    //    .distinctUntilChanged()
    //    .switchMap((term: string) => this.wikipediaService.search(term));
}