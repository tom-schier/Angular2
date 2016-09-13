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
        this._http = _http;
        this.jsonp = jsonp;
        this._acService = _acService;
        this.locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/'; // URL to web API
        //private locServiceUrl = 'http://localhost:25920/api/';
        // Observable string sources
        this.obTrackDetails = new Subject_1.Subject();
        this.obWaypointDetails = new Subject_1.Subject();
        // Observable string sources
        // Observable string streams
        this.trackDetailsChange$ = this.obTrackDetails.asObservable();
        this.waypointDetailsChange$ = this.obWaypointDetails.asObservable();
        console.log('creating flight planning service');
        this.tracks = new Array();
        this.waypoints = new Array();
    }
    // Service message commands
    TrackService.prototype.AddLocation = function (aLoc, altitude) {
        if (aLoc == null)
            return;
        aLoc.altitude = altitude;
        this.waypoints.push(aLoc);
        this.obWaypointDetails.next(this.waypoints);
        // this.createNewTrack(aLoc, altitude);
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
                newTrack.tas = this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
                this.tracks.push(newTrack);
            }
            lastLoc = aLoc;
            idx = idx + 1;
        }
    };
    TrackService.prototype.createNewTrack = function (aLoc, altitude) {
        if (aLoc == null)
            return;
        if (this.tracks.length > 0) {
            //get the previous waypoint
            var idx = this.tracks.length - 1;
            var lastWaypoint = this.tracks[idx];
            if (this.tracks.length == 1 && lastWaypoint.toLocation == null) {
                lastWaypoint.toLocation = aLoc.code;
                lastWaypoint.altitude = altitude;
                lastWaypoint.tas = this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
            }
            else {
                var newTrack = new TrackComponent();
                newTrack.variation = -11.5;
                newTrack.headingMag;
                newTrack.sector = 1;
                newTrack.fromLocation = lastWaypoint.toLocation;
                newTrack.toLocation = aLoc.code;
                newTrack.altitude = altitude;
                newTrack.tas = this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
                this.tracks.push(newTrack);
            }
        }
        else {
            var newTrack = new TrackComponent();
            newTrack.fromLocation = aLoc.code;
            newTrack.altitude = altitude;
            newTrack.variation = -11.5;
            newTrack.headingMag;
            newTrack.sector = 1;
            newTrack.tas = this._acService.currentAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
            this.tracks.push(newTrack);
        }
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
    //getLocationByDescr(desc: string) {
    //    let params: URLSearchParams = new URLSearchParams();
    //    let outSt = encodeURIComponent(desc);
    //  //  params.set('descr', outSt);
    //    return this._http.get(this.locServiceUrl + "LocByDesc/?descr=" + outSt)
    //        .toPromise()
    //        .then((response) => response.json());
    //}
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