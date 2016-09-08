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
var weather_service_1 = require('../services/weather.service');
var aircraft_service_1 = require('../services/aircraft.service');
var track_service_1 = require('../services/track.service');
var Subject_1 = require('rxjs/Subject');
require('../rxjs-operators');
var TrackData = (function () {
    function TrackData(_trackService, _weatherService, _elRef, _acService) {
        var _this = this;
        this._trackService = _trackService;
        this._weatherService = _weatherService;
        this._elRef = _elRef;
        this._acService = _acService;
        this.submitted = false;
        this.mode = 'Observable';
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this._trackService.search(term); });
        this.active = true;
        this.tr = new track_service_1.TrackComponent();
        this.model = new track_service_1.TrackComponent();
        this.tracks = new Array();
        this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil fa-lg";
        this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok fa-lg";
        this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove fa-lg";
        this.altList = new Array();
        this.altList.push('A020');
        this.altList.push('A030');
        this.altList.push('A040');
        this.altList.push('A050');
        this.altList.push('A060');
        this.altList.push('A070');
        this.altList.push('A080');
    }
    TrackData.prototype.ngOnInit = function () {
        var _this = this;
        this._trackService.trackDetailsChange$.subscribe(function (trackDetails) {
            _this.UpdateTracks(trackDetails);
        });
        this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
            _this.UpdateWeather(windDetails);
        });
        this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
            _this.UpdateAircraft(acDetails);
        });
        this.loadTracks();
        this.currAircraft = this._acService.currentAircraft;
    };
    TrackData.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    TrackData.prototype.loadTracks = function () {
        this.tracks = this._trackService.tracks;
    };
    TrackData.prototype.setItem = function () {
        var tt = 4;
    };
    TrackData.prototype.UpdateTracks = function (theTracks) {
        this.tracks = theTracks;
    };
    TrackData.prototype.UpdateAircraft = function (theAircraft) {
        this.currAircraft = theAircraft;
    };
    TrackData.prototype.UpdateWeather = function (theWinds) {
        this.selWindspeed = theWinds[0].windspeed;
    };
    TrackData.prototype.onSubmit = function () {
        this.submitted = true;
    };
    TrackData.prototype.onAdd = function (item) {
        var newTrack = new track_service_1.TrackComponent();
        newTrack.fromLocation = this.model.fromLocation;
        newTrack.altitude = this.model.altitude;
        newTrack.tas = this.currAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
        //newTrack.marker = new 
        // also add the wind to the service
        this._trackService.AddTrack(newTrack);
    };
    TrackData.prototype.onRemove = function (aTrack) {
        this._trackService.RemoveTrack(aTrack);
    };
    TrackData.prototype.onEdit = function (aTrack) {
        aTrack.btnEditClass = this.toggleClass(aTrack.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
        aTrack.isReadOnly = (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
        if (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
            this._trackService.UpdateTrack(aTrack);
    };
    TrackData.prototype.toggleClass = function (c0, c1, c2) {
        if (c0 == c1)
            return c2;
        if (c0 == c2)
            return c1;
        else
            return c0;
    };
    TrackData = __decorate([
        core_1.Component({
            selector: 'track-data',
            templateUrl: './trackData.html'
        }), 
        __metadata('design:paramtypes', [track_service_1.TrackService, weather_service_1.WeatherService, core_1.ElementRef, aircraft_service_1.AircraftService])
    ], TrackData);
    return TrackData;
}());
exports.TrackData = TrackData;
//# sourceMappingURL=track.component.js.map