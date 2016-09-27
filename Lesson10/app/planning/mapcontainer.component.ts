import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {TrackComponent, TrackService} from '../services/track.service';

declare var map: any;
declare var geocoder: any;
declare var google: any;

@Component({
    selector: 'map-container',
    templateUrl: './googlemap.html',
    styleUrls: ['./styles/lesson10.styles.css']
}
)
export class MapContainer implements OnInit, AfterViewInit {
    address: string;
    // the markers array will contain a list of Google marker objects
    markers: Array<google.maps.Marker>;
    lines: Array<google.maps.Polyline>;

    lat: number = -33.8688;
    lng: number = 151.2093;
    initialZoom: number = 9;

    geocoder: google.maps.Geocoder;
    map: google.maps.Map;

    constructor(private _trackService: TrackService) {
        this.markers = new Array<google.maps.Marker>();
        this.lines = new Array<google.maps.Polyline>();
    }

    ngAfterViewInit() {
        console.log('After Init MapContainer');
        this.UpdateMap();
    }

    ngOnInit() {
        console.log('Initialising MapContainer');

        this.initMap();
       // this.UpdateMap();
        this._trackService.waypointDetailsChange$.subscribe(
            trackDetails => {
                this.UpdateMap();
            });
    }

    UpdateMap() {
        if (this.map == null)
            return;
        this.clearMarkers();
        let centreLoc: google.maps.LatLng; 
        for (let aLoc of this._trackService.waypoints) {
            let locLatLng: google.maps.LatLng;
            let latitude = this.convertCoordStringToNumber(aLoc.latitude, aLoc.latdir);
            let longitude = this.convertCoordStringToNumber(aLoc.longitude, aLoc.lngdir);
            locLatLng = new google.maps.LatLng(latitude, longitude, false);
            centreLoc = locLatLng;
            this.addMarker(locLatLng);
        }
        this.map.setCenter(centreLoc);
        this.showMarkers();
    }

    convertCoordStringToNumber(coordinates: string, dir: string): number {
        let values = coordinates.split(' ');

        let major = values[0];
        let minor = values[1];
        let minorNumber = (parseFloat(minor) / 60) ;
        let majorNumber = parseFloat(major);
        let incr = values[2];
        let newCoordinate = majorNumber +  minorNumber;
        if (dir == 'W' || dir == 'S')     
            return newCoordinate*(-1);
        else
            return newCoordinate;
    }

    private initMap() {
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
            this.lat = results[0].geometry.location.lat();
            this.clearMarkers();
            this.map.setCenter(results[0].geometry.location);
            this.addMarker(results[0].geometry.location);
        }
    }

    // Adds a marker to the map and push to the array. The parameter is expected to be a 
    private addMarker = (location: google.maps.LatLng) => {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map
        });
        this.markers.push(marker);
        this.lat = location.lat();
        this.lng = location.lng();

        if (this.markers.length > 1) {
            this.drawLine(this.markers[this.markers.length - 1], this.markers[this.markers.length - 2]);
        }
    }

    // Sets the map on all markers in the array.
    private setMapOnAll() {
        for (var i = 0; i < this.markers.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.markers[i].setMap(this.map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    private clearMarkers() {
       // this.setMapOnAll(null);

        for (var i = 0; i < this.markers.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.markers[i].setMap(null);
        }
        for (var i = 0; i < this.lines.length; i++) {
            // by calling the setMap function on the Google marker object the marker will be placed on the map
            // if map == null the marker will be removed if it exists on the map
            this.lines[i].setMap(null);
        }
        this.lines = [];
    }

    // Shows any markers currently in the array.
    private showMarkers() {
        this.setMapOnAll();
    }

    // Deletes all markers in the array by removing references to them.
    private deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }

    public drawLine(point1: google.maps.Marker, point2: google.maps.Marker) {
        var line = new google.maps.Polyline({
            path: [
                point1.getPosition(),
                point2.getPosition()
                // new google.maps.LatLng(37.4419, -122.1419),
                // new google.maps.LatLng(37.4519, -122.1519)
            ],
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            geodesic: true,
            map: this.map
        });
        this.lines.push(line);
    }

}
