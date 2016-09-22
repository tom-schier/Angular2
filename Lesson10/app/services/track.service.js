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
var Subject_1 = require('rxjs/Subject');
var weather_service_1 = require('./weather.service');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TrackComponent = (function () {
    function TrackComponent() {
    }
    return TrackComponent;
}());
exports.TrackComponent = TrackComponent;
var TrackService = (function () {
    //geocoder: google.maps.Geocoder;
    //map: google.maps.Map;
    function TrackService(_http, jsonp, _weatherSvc) {
        this._http = _http;
        this.jsonp = jsonp;
        this._weatherSvc = _weatherSvc;
        this.locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/'; // URL to web API
        //private locServiceUrl = 'http://localhost:25920/api/';
        // Observable string sources
        this.obTrackDetails = new Subject_1.Subject();
        this.obWaypointDetails = new Subject_1.Subject();
        // Observable string streams
        this.trackDetailsChange$ = this.obTrackDetails.asObservable();
        this.waypointDetailsChange$ = this.obWaypointDetails.asObservable();
        console.log('creating flight planning service');
        this.tracks = new Array();
        this.waypoints = new Array();
    }
    TrackService.prototype.UpdateAircraft = function (theAircraft) {
        this.selectedAircraft = theAircraft;
    };
    TrackService.prototype.AddLocation = function (aLoc, altitude) {
        if (aLoc == null)
            return;
        aLoc.altitude = altitude;
        this.waypoints.push(aLoc);
        this.obWaypointDetails.next(this.waypoints);
        this.updateTracks();
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.updateTracks = function () {
        var lastLoc;
        var idx = 0;
        this.tracks = [];
        for (var _i = 0, _a = this.waypoints; _i < _a.length; _i++) {
            var aLoc = _a[_i];
            if (idx == 0) {
            }
            else {
                var newTrack = new TrackComponent();
                newTrack.variation = -11.5;
                newTrack.headingMag;
                newTrack.sector = idx;
                newTrack.fromLocation = lastLoc.code;
                newTrack.toLocation = aLoc.code;
                newTrack.altitude = aLoc.altitude;
                //this._acService.currentAircraft.acSpeeds.find(x => x.name == "TAS").val;
                newTrack.tas = this.selectedAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
                newTrack.gs = this.calculateGroundspeed(aLoc.altitude);
                // last location calc
                var theLatParts = lastLoc.latitude.split(" ");
                var decPart1 = theLatParts[1].split(".");
                var theLat = parseFloat(theLatParts[0]) + parseFloat(theLatParts[1]) / 60;
                if (lastLoc.latdir == 'W')
                    theLat = theLat * (-1);
                var theLngParts = lastLoc.longitude.split(" ");
                var theLng = parseFloat(theLngParts[0]) + parseFloat(theLngParts[1]) / 60;
                if (lastLoc.latdir == 'S')
                    theLng = theLng * (-1);
                // the new location
                var theLatParts1 = aLoc.latitude.split(" ");
                var theLat1 = parseFloat(theLatParts1[0]) + parseFloat(theLatParts1[1]) / 60;
                if (aLoc.latdir == 'W')
                    theLat1 = theLat1 * (-1);
                var theLngParts1 = aLoc.longitude.split(" ");
                var theLng1 = parseFloat(theLngParts1[0]) + parseFloat(theLngParts1[1]) / 60;
                if (aLoc.latdir == 'S')
                    theLng1 = theLng1 * (-1);
                var pos1 = new google.maps.LatLng(theLat, theLng, false);
                var pos2 = new google.maps.LatLng(theLat1, theLng1, false);
                var tmp = this.getDistance(pos1, pos2) * 0.000539957; //convert distance from m to nm
                newTrack.ti = ((tmp / newTrack.gs) * 60).toFixed(0);
                newTrack.distance = (this.getDistance(pos1, pos2) * 0.000539957).toFixed(0);
                newTrack.headingTrue = this.calculateHeading(pos2, pos1, newTrack);
                newTrack.headingMag = newTrack.headingTrue;
                this.tracks.push(newTrack);
            }
            lastLoc = aLoc;
            idx = idx + 1;
        }
    };
    TrackService.prototype.rad = function (x) {
        return x * Math.PI / 180;
    };
    ;
    TrackService.prototype.getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat() - p1.lat());
        var dLong = this.rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(p1.lat())) * Math.cos(this.rad(p2.lat())) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };
    ;
    TrackService.prototype.calculateHeading = function (p1, p2, aTrack) {
        var λ1 = this._toRad(p1.lng());
        var λ2 = this._toRad(p2.lng());
        var φ1 = this._toRad(p1.lat());
        var φ2 = this._toRad(p2.lat());
        var y = Math.sin(λ2 - λ1) * Math.cos(φ2);
        var x = Math.cos(φ1) * Math.sin(φ2) -
            Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
        var brng = this._toDeg(Math.atan2(y, x));
        if (brng < 0)
            brng = 360 + brng;
        if (this._weatherSvc.winds.length > 0 && aTrack.altitude != "") {
            //find the wind altitude closest to the one for the track
            //  let aWind = this._weatherSvc.winds.find(x => x.altitude == aTrack.altitude);
            //aWind.direction
            return Math.round(brng);
        }
        else {
            // no wind therfore no correction
            return Math.round(brng);
        }
    };
    /**
  * Since not all browsers implement this we have our own utility that will
  * convert from degrees into radians
  *
  * @param deg - The degrees to be converted into radians
  * @return radians
  */
    TrackService.prototype._toRad = function (deg) {
        return deg * Math.PI / 180;
    };
    /**
     * Since not all browsers implement this we have our own utility that will
     * convert from radians into degrees
     *
     * @param rad - The radians to be converted into degrees
     * @return degrees
     */
    TrackService.prototype._toDeg = function (rad) {
        return rad * 180 / Math.PI;
    };
    TrackService.prototype.calculateGroundspeed = function (altitude) {
        //find the wind altitude closest to the one for the track
        if (this._weatherSvc.winds.length > 0) {
            return this.selectedAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
        }
        else
            return this.selectedAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
    };
    TrackService.prototype.RemoveWaypoint = function (aLoc) {
        var idx = this.waypoints.indexOf(aLoc);
        this.waypoints.splice(idx, 1);
        this.obWaypointDetails.next(this.waypoints);
        this.updateTracks();
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.UpdateTrack = function (aTrack) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks[idx] = aTrack;
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.search = function (term) {
        return this._http.get(this.locServiceUrl + "location/?st=" + term)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    TrackService.prototype.getLocation = function (id) {
        return this._http.get(this.locServiceUrl + "LocByID/?id=" + id)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    TrackService.prototype.getLocationByDescr = function (desc) {
        var outSt = encodeURIComponent(desc);
        return this._http.get(this.locServiceUrl + "LocByDesc/?descr=" + outSt)
            .map(function (res) { return res.json(); });
    };
    TrackService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TrackService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TrackService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    TrackService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_2.Jsonp, weather_service_1.WeatherService])
    ], TrackService);
    return TrackService;
}());
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map