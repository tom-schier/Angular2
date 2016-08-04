import {Component,provide, OnInit} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Promise} from "ts-promise";

import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent,
    GOOGLE_MAPS_PROVIDERS,
    GOOGLE_MAPS_DIRECTIVES,
    LazyMapsAPILoader,
    LazyMapsAPILoaderConfig
    
} from 'angular2-google-maps/core';

//import {WINDOW_GLOBAL, DOCUMENT_GLOBAL} from 'angular2-google-maps/ts/core';


@Component({
    selector: 'lesson-06',
    directives: [GOOGLE_MAPS_DIRECTIVES],
    providers: [LazyMapsAPILoader],
    templateUrl: './views/googlemaps.html',
    styles: ['./styles.css']
})
export class Lesson06 implements OnInit{
    // google maps zoom level
    zoom: number = 8;
    //myLoader: LazyMapsAPILoader;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;


    //constructor(private myLoaderConfig: LazyMapsAPILoaderConfig) {
    constructor(private myLoader: LazyMapsAPILoader) {
       // this.myLoader = new LazyMapsAPILoader(myLoaderConfig, WINDOW_GLOBAL, DOCUMENT_GLOBAL);

    }

    ngOnInit() {
        this.myLoader.load().then(() => {
            return alert("HEY");
        }).catch((e) => {
            console.error(e.stack);
        });
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ]
}
// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

//// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
//bootstrap(App, [
//    GOOGLE_MAPS_PROVIDERS,
//    // If you don't want to let angular2-google-maps load the Google Maps API script,
//    // you can use the NoOpMapsAPILoader like this:
//    // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
//])
