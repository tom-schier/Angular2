"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
//import {WINDOW_GLOBAL, DOCUMENT_GLOBAL} from 'angular2-google-maps/ts/core';
var Lesson06 = (function () {
    //constructor(private myLoaderConfig: LazyMapsAPILoaderConfig) {
    function Lesson06(myLoader) {
        // this.myLoader = new LazyMapsAPILoader(myLoaderConfig, WINDOW_GLOBAL, DOCUMENT_GLOBAL);
        this.myLoader = myLoader;
        // google maps zoom level
        this.zoom = 8;
        //myLoader: LazyMapsAPILoader;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
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
        ];
    }
    Lesson06.prototype.ngOnInit = function () {
        this.myLoader.load().then(function () {
            return alert("HEY");
        }).catch(function (e) {
            console.error(e.stack);
        });
    };
    Lesson06.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    Lesson06.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    Lesson06.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    Lesson06 = __decorate([
        core_1.Component({
            selector: 'lesson-06',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            providers: [core_2.LazyMapsAPILoader],
            templateUrl: './views/googlemaps.html',
            styles: ['./styles.css']
        }), 
        __metadata('design:paramtypes', [core_2.LazyMapsAPILoader])
    ], Lesson06);
    return Lesson06;
}());
exports.Lesson06 = Lesson06;
//// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
//bootstrap(App, [
//    GOOGLE_MAPS_PROVIDERS,
//    // If you don't want to let angular2-google-maps load the Google Maps API script,
//    // you can use the NoOpMapsAPILoader like this:
//    // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
//])
//# sourceMappingURL=lesson06.component.js.map