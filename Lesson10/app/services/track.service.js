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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TrackComponent = (function () {
    function TrackComponent() {
    }
    return TrackComponent;
}());
exports.TrackComponent = TrackComponent;
var TrackService = (function () {
    function TrackService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.locServiceUrl = 'http://xpwebapp.azurewebsites.net/api/location'; // URL to web API
        // Observable string sources
        this.obTrackDetails = new Subject_1.Subject();
        // Observable string streams
        this.trackDetailsChange$ = this.obTrackDetails.asObservable();
        console.log('creating flight planning service');
        this.tracks = new Array();
    }
    // Service message commands
    TrackService.prototype.AddTrack = function (aTrack) {
        aTrack.variation = -11.5;
        aTrack.headingMag;
        aTrack.isReadOnly = true;
        aTrack.sector = 1;
        this.tracks.push(aTrack);
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.RemoveTrack = function (aTrack) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks.splice(idx, 1);
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.UpdateTrack = function (aTrack) {
        var idx = this.tracks.indexOf(aTrack);
        this.tracks[idx] = aTrack;
        this.obTrackDetails.next(this.tracks);
    };
    TrackService.prototype.search = function (term) {
        return this.http.get(this.locServiceUrl + "/?st=" + term);
        // .map(response => <Location[]>response.json())
        //  .catch(this.handleError);
    };
    TrackService.prototype.getLocation = function (id) {
        return this.http.get(this.locServiceUrl + "/?id=" + id);
        //.map(response => <Location>response.json())
        //.catch(this.handleError);
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
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], TrackService);
    return TrackService;
}());
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map