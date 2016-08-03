import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {
    GOOGLE_MAPS_DIRECTIVES,
    GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

@Component({
    selector: 'lesson-06',
    directives: [GOOGLE_MAPS_DIRECTIVES],
	template: `
		<sebm-google-map [latitude]="lat" [longitude]="lng">
		</sebm-google-map>
	`
})
export class Lesson06 {
    lat: number = 44.3;
    lng: number = 33.2;

    initMap() {
    }
}




