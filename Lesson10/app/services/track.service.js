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
var aircraft_service_1 = require('./aircraft.service');
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
    function TrackService(_http, jsonp, _acService) {
        var _this = this;
        this._http = _http;
        this.jsonp = jsonp;
        this._acService = _acService;
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
        this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
            _this.UpdateAircraft(acDetails);
        });
    }
    //ngOnInit() {
    //    this._acService.aircraftDetailsChange$.subscribe(
    //        acDetails => {
    //            this.UpdateAircraft(acDetails);
    //        });
    //}
    TrackService.prototype.UpdateAircraft = function (theAircraft) {
        this.selectedAircraft = theAircraft;
        //
        //this.updateTracks();
        //this.acFlightPlanSpeed = theAircraft.acSpeeds.find(x => x.name == "TAS").val;
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
                this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
                //newTrack.tas = this.selectedAircraft.acSpeeds.find(x => x.name == "TAS").val;
                newTrack.gs = this.calculateGroundspeed(aLoc.altitude);
                var pos1 = new google.maps.LatLng(parseFloat(lastLoc.latitude), parseFloat(lastLoc.longitude), false);
                var pos2 = new google.maps.LatLng(parseFloat(aLoc.latitude), parseFloat(aLoc.longitude), false);
                var tmp = this.getDistance(pos1, pos2) * 0.000539957;
                newTrack.ti = ((tmp / newTrack.gs) * 60).toFixed(0);
                newTrack.distance = (this.getDistance(pos1, pos2) * 0.000539957).toFixed(0);
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
        var R = 6378137; // Earth�s mean radius in meter
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
    TrackService.prototype.calculateGroundspeed = function (altitude) {
        return this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
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
        __metadata('design:paramtypes', [http_1.Http, http_2.Jsonp, aircraft_service_1.AircraftService])
    ], TrackService);
    return TrackService;
}());
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map