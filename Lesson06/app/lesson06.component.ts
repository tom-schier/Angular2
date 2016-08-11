import { Component } from '@angular/core';

declare var google: any;
declare var map: any;
declare var geocodePlaceId: any;
declare var infowindow: any;
declare var geocoder: any;


// interfaces for type safety
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

interface mapEvent {
    mouseEv: MouseEvent;
    coords: any;
}

class EventMarker implements marker {
    lat: number;
    lng: number;
    label: string;
    draggable: boolean;

    constructor(_lat: number, _lng: number, _label: string, _draggable: boolean) {
        this.lat = _lat;
        this.lng = _lng;
        this.label = _label;
        this.draggable = _draggable;
    }
}

@Component({
    selector: 'lesson-06',
    templateUrl: './views/googlemaps.html',
    styleUrls: ['./styles.css']
})
export class Lesson06 {

    isShowMarker: boolean = false;
    isReadOnly: boolean = false;
    lat: number = 51.528308;
    lng: number = -0.3817765;
    zoom: number = 15;
    gMap: any;
    map: any;
    mapProp: any;
    geocoder: any;
    marker: any;
    results: any;

    constructor() { }

    ngOnInit() {
        this.mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = google.maps;
        this.geocoder = new this.map.Geocoder;
        //this.gMap.Map(document.getElementById("googleMap"), this.mapProp);
        this.gMap = new google.maps.Map(document.getElementById("googleMap"), this.mapProp);
    }

    markers: marker[] = [
        {
            lat: this.lat,
            lng: this.lng,
            label: 'A',
            draggable: false
        }
    ];

    getNext($event: any) {

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
                           // setMap: document.querySelector("#googleMap"),
                        });
                        newMarker = new EventMarker(results[0].geometry.location.lat(),
                            results[0].geometry.location.lng(),
                            "My Home",
                            true);
                        markerList.push(newMarker);
                        map.Map(document.getElementById("googleMap")).panTo(marker.getPosition());

                    }
                    else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
        });
        //this.map.setMap(markerList[0].lat, markerList[0].lng);
            

    };

    getIt(results: any, status: any)
    {
        if (status === 'OK')
        {
            if (results[0])
            {
                this.map.Marker({
                    position: results[0].geometry.location,
                    setMap: document.querySelector("#googleMap"),
                });
                var newMarker = new EventMarker(results[0].geometry.location.lat(),
                    results[0].geometry.location.lng(),
                    "My Home",
                    true);
                this.markers.push(newMarker);
            }
            else
            {
                window.alert('No results found');
            }
        }
        else
        {
            window.alert('Geocoder failed due to: ' + status);
        }
        this.map.set(this.markers[0].lat, this.markers[0].lng);
    };
}