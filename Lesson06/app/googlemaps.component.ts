
import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

declare var map: any;
declare var geocoder: any;
declare var google: any;

@Component({
    selector: 'lesson-06',
    templateUrl: './views/googlemaps.html',
    styleUrls: ['./styles.css']
    }
)
export class GoogleMaps implements OnInit
{
    address: string;
    // the markers array will contain a list of Google marker objects
    markers: Array<google.maps.Marker>;
    lat: number = -33.8688;
    lng: number = 151.2093;
    initialZoom: number = 9;
    monkey: string;

    geocoder: google.maps.Geocoder;
    map: google.maps.Map;
    //google: any;

    constructor() {
        this.markers = new Array<google.maps.Marker>();
        this.address = "Sydney, NSW";
    }

    ngOnInit() {
        
        this.initMap();
    }

    initMap() {
        this.geocoder = new google.maps.Geocoder();
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: this.initialZoom,
            center: { lat: this.lat, lng: this.lng }
        });
    }

    setMarkerForAddress() {
        // calls the geocode method in the Google API, specifies setMarker as the event handler
        this.geocoder.geocode({ 'address': this.address }, this.setMarker);
    }



    // note the syntax how this function is declared. This will ensure the event listener for geocode will work
    // see above the call to this.setMarker can be resolved using this syntax below
    // good information regarding this can be fount here https://github.com/Microsoft/TypeScript/wiki/ 
    private setMarker = (results, status) => {
        if (status === 'OK') {
            this.clearMarkers();
            this.map.setCenter(results[0].geometry.location);
            this.addMarker(results[0].geometry.location);
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    }

    // Adds a marker to the map and push to the array. The parameter is expected to be a 
    private addMarker(location: google.maps.LatLng) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map
        });
        this.markers.push(marker);
        this.lat = location.lat();
        this.lng = location.lng();
        this.monkey = "monkey was here";
    }

    // Sets the map on all markers in the array.
    private setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    private clearMarkers() {
        this.setMapOnAll(null);
    }

    // Shows any markers currently in the array.
    private showMarkers() {
        this.setMapOnAll(map);
    }

    // Deletes all markers in the array by removing references to them.
    private deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }

}