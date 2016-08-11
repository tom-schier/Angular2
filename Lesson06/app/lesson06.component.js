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
var EventMarker = (function () {
    function EventMarker(_lat, _lng, _label, _draggable) {
        this.lat = _lat;
        this.lng = _lng;
        this.label = _label;
        this.draggable = _draggable;
    }
    return EventMarker;
}());
var Lesson06 = (function () {
    function Lesson06() {
        this.isShowMarker = false;
        this.isReadOnly = false;
        this.lat = 51.528308;
        this.lng = -0.3817765;
        this.zoom = 15;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: 'A',
                draggable: false
            }
        ];
    }
    Lesson06.prototype.ngOnInit = function () {
        this.mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = google.maps;
        this.geocoder = new this.map.Geocoder;
        //this.gMap.Map(document.getElementById("googleMap"), this.mapProp);
        this.gMap = new google.maps.Map(document.getElementById("googleMap"), this.mapProp);
    };
    Lesson06.prototype.getNext = function ($event) {
        //this.map = google.maps;
        // this.geocoder = this.map.Geocoder;
        var infowindow = this.map.InfoWindow;
        var marker;
        var newMarker;
        var markerList = this.markers;
        var address = "27 Croft Rd, Eleebana, NSW, Australia";
        //this.geocoder.geocode({ 'address': address }, this.getIt(this.results, status).then(() => this.getIt());
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var map = google.maps;
                    marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map
                    });
                    newMarker = new EventMarker(results[0].geometry.location.lat(), results[0].geometry.location.lng(), "My Home", true);
                    markerList.push(newMarker);
                    map.Map(document.getElementById("googleMap")).panTo(marker.getPosition());
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
        //this.map.setMap(markerList[0].lat, markerList[0].lng);
    };
    ;
    Lesson06.prototype.getIt = function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                this.map.Marker({
                    position: results[0].geometry.location,
                    setMap: document.querySelector("#googleMap"),
                });
                var newMarker = new EventMarker(results[0].geometry.location.lat(), results[0].geometry.location.lng(), "My Home", true);
                this.markers.push(newMarker);
            }
            else {
                window.alert('No results found');
            }
        }
        else {
            window.alert('Geocoder failed due to: ' + status);
        }
        this.map.set(this.markers[0].lat, this.markers[0].lng);
    };
    ;
    Lesson06 = __decorate([
        core_1.Component({
            selector: 'lesson-06',
            templateUrl: './views/googlemaps.html',
            styleUrls: ['./styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson06);
    return Lesson06;
}());
exports.Lesson06 = Lesson06;
//# sourceMappingURL=lesson06.component.js.map