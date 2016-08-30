import { Component, OnInit }        from '@angular/core';
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
export class Lesson08 implements OnInit{

    constructor(private locationService: LocationService) { }

    aLoc: Location;

    ngOnInit() {
        this.aLoc = new Location();
    }

    errorMessage: string;
    locations: Location[];
    mode = 'Observable';
    displayValue: string;

    private searchTermStream = new Subject<string>();

    search(term: string) {
        this.searchTermStream.next(term);
    }

    items: Observable<Location[]> = this.searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term: string) => this.locationService.search(term));
}