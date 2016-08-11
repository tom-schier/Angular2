import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataItem }           from './dataitem.component';
import { Observable }     from 'rxjs/Observable';
import {Address} from './address.component';
import {OnInit} from '@angular/core';

declare var google: any;
declare var map: any;
declare var geocodePlaceId: any;
declare var infowindow: any;
declare var geocoder: any;

@Injectable()
export class GmapService implements OnInit {

    geocoder: any;
    infowindow: any;
    map: any;
    result: any;

    constructor() {
        
    }

    private dataUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';  // URL to web API
    private GOOGLE_API_KEY = 'AIzaSyB6uNJRZKDeKJEypk4raRB67kcqACphlp0';

    //getData(): Observable<DataItem[]> {
    //    return this.http.get(this.dataUrl)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}
    //getLocation(aAddress: Address) {
    //    var myAddress = "27 Croft Rd, Eleebana, NSW, Australia";
    //    var marker;
    //    var results;
    //    var geocoder = new google.maps.Geocoder();
    //    //geocoder.geocode({ 'address': myAddress }, this.myFunction(results, status));
    //    geocoder.geocode({ 'address': myAddress }, function (results, status) {
    //        if (status == google.maps.GeocoderStatus.OK) {
    //           // map.setCenter(results[0].geometry.location);
    //            marker = new google.maps.Marker({
    //              //  map: map,
    //                position: results[0].geometry.location
    //            });
    //        }
    //    });
    //    return marker;       
    //}

    //myFunction(results, status) {
    //    var marker;
    //    if (status == google.maps.GeocoderStatus.OK)
    //    {
    //            //map.setCenter(results[0].geometry.location);
    //            marker = new google.maps.Marker({
    //              //  map: map,
    //                position: results[0].geometry.location
    //            });
    //    }
    //}
    ngOnInit() {
        this.initMap();
    }

    initMap() {
        //this.map = new google.maps.Map(document.getElementById('map'), {
        //    zoom: 8,
        //    center: { lat: 40.72, lng: -73.96 }
        //});
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        this.map = google.maps;
        //document.getElementById('submit').addEventListener('click', function () {
        //    geocodePlaceId(geocoder, map, infowindow);
        //});
    }

    geocodePlaceId() {
        var mapX = google.maps;
        var geocoder = new mapX.Geocoder;
        var infowindow = new mapX.InfoWindow;
        var marker;
        //var address = document.getElementById('place-id').nodeValue;
        var address = "27 Croft Rd, Eleebana, NSW, Australia";
        //this.geocoder.geocode({ 'address': address }, this.getIt(this.result, status));
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                if (results[0])
                {
                    //this.map.setZoom(11);
                    //this.map.setCenter(results[0].geometry.location);
                    marker = new mapX.Marker({
                        map: mapX,
                        position: results[0].geometry.location
                    });
                    return marker;
                    //infowindow.setContent(results[0].formatted_address);
                    //infowindow.open(mapX, marker);
                }
                else
                {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
        
    }

    getIt(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                //this.map.setZoom(11);
                this.map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: this.map,
                    position: results[0].geometry.location
                });
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(this.map, marker);
            }
            else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
