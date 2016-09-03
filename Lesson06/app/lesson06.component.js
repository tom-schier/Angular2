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
var Lesson06 = (function () {
    function Lesson06() {
        var _this = this;
        this.lat = -33.8688;
        this.lng = 151.2093;
        this.initialZoom = 9;
        // note the syntax how this function is declared. This will ensure the event listener for geocode will work
        // see above the call to this.setMarker can be resolved using this syntax below
        // good information regarding this can be fount here https://github.com/Microsoft/TypeScript/wiki/ 
        this.setMarker = function (results, status) {
            if (status === 'OK') {
                _this.lat = results[0].geometry.location.lat();
                // this.clearMarkers();
                _this.map.setCenter(results[0].geometry.location);
                _this.addMarker(results[0].geometry.location);
            }
        };
        // Adds a marker to the map and push to the array. The parameter is expected to be a 
        this.addMarker = function (location) {
            var marker = new google.maps.Marker({
                position: location,
                map: _this.map
            });
            _this.markers.push(marker);
            _this.lat = location.lat();
            _this.lng = location.lng();
            if (_this.markers.length > 1) {
                _this.drawLine(_this.markers[_this.markers.length - 1], _this.markers[_this.markers.length - 2]);
            }
        };
        this.markers = new Array();
        this.lines = new Array();
    }
    Lesson06.prototype.ngOnInit = function () {
        this.initMap();
    };
    Lesson06.prototype.initMap = function () {
        this.geocoder = new google.maps.Geocoder();
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: this.initialZoom,
            center: { lat: this.lat, lng: this.lng }
        });
    };
    Lesson06.prototype.setMarkerForAddress = function () {
        // calls the geocode method in the Google API, specifies setMarker as the event handler
        this.geocoder.geocode({ 'address': this.address }, this.setMarker);
    };
    Lesson06.prototype.drawLine = function (point1, point2) {
        var line = new google.maps.Polyline({
            path: [
                point1.getPosition(),
                point2.getPosition()
            ],
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 5,
            geodesic: true,
            map: this.map
        });
        this.lines.push(line);
    };
    // Sets the map on all markers in the array.
    Lesson06.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.markers[i].setMap(map);
        }
    };
    // Removes the markers from the map, but keeps them in the array.
    Lesson06.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
        for (var i = 0; i < this.lines.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.lines[i].setMap(null);
        }
        this.lines = [];
    };
    // Shows any markers currently in the array.
    Lesson06.prototype.showMarkers = function () {
        this.setMapOnAll(map);
    };
    // Deletes all markers in the array by removing references to them.
    Lesson06.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    Lesson06 = __decorate([
        core_1.Component({
            selector: 'lesson-06',
            templateUrl: './views/lesson06.html',
            styleUrls: ['./styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson06);
    return Lesson06;
}());
exports.Lesson06 = Lesson06;
//# sourceMappingURL=lesson06.component.js.map