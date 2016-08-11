import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

declare var map: any;
declare var geocoder: any;
declare var google: any;

@Component({
    selector: 'xpGoogleMap',
    templateUrl: './views/xpGoogleMap.html',
    styleUrls: ['./styles.css']
    }
)
export class xpGoogleMap implements OnInit
{
    address: string;
    markers = [];

    geocoder: any;
    map: any;
    google: any;

    constructor() {
        this.address = "Sydney, NSW";
    }

    ngOnInit() {
        
        this.initMap();
    }

    initMap() {
        this.geocoder = new google.maps.Geocoder();
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: { lat: -34.397, lng: 150.644 }
        });
    }

    geocodeAddress() {
        this.geocoder.geocode({ 'address': this.address }, this.setMarker);
    }

    // note the syntax how this function is declared. This will ensure the event listener for geocode will work
    // see above the call to this.setMarker can be resolved using this syntax below
    public setMarker = (results, status) => {
        if (status === 'OK') {
            this.clearMarkers();
            this.addMarker(results[0].geometry.location);
            this.map.setCenter(results[0].geometry.location);
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    }

    // Adds a marker to the map and push to the array.
    addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map
        });
        this.markers.push(marker);
    }

    // Sets the map on all markers in the array.
    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    clearMarkers() {
        this.setMapOnAll(null);
        //this.deleteMarkers();
    }

    // Shows any markers currently in the array.
    showMarkers() {
        this.setMapOnAll(map);
    }

    // Deletes all markers in the array by removing references to them.
    deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }

}