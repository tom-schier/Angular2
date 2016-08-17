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
var common_1 = require('@angular/common');
var track_service_1 = require('../services/track.service');
var flightplanning_validators_1 = require('./flightplanning.validators');
var TrackData = (function () {
    function TrackData(_trackService, _weatherService, _elRef, fb) {
        this._trackService = _trackService;
        this._weatherService = _weatherService;
        this._elRef = _elRef;
        this.tr = new track_service_1.TrackComponent();
        this.tracks = new Array();
        this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil fa-lg";
        this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok fa-lg";
        this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove fa-lg";
        this.trackForm = fb.group({
            "trackSpeed": new common_1.Control(this.tr.tas, common_1.Validators.compose([common_1.Validators.required, flightplanning_validators_1.SpeedValidator.validSpeed])),
            "trackWaypoint": new common_1.Control(this.tr.fromLocation, common_1.Validators.required),
            "trackAltitude": new common_1.Control(this.tr.altitude, common_1.Validators.required)
        });
    }
    TrackData.prototype.ngOnInit = function () {
        var _this = this;
        this._trackService.trackDetailsChange$.subscribe(function (trackDetails) {
            _this.UpdateTracks(trackDetails);
        });
        this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
            _this.UpdateWeather(windDetails);
        });
        this.loadTracks();
    };
    TrackData.prototype.loadTracks = function () {
        this.tracks = this._trackService.tracks;
    };
    TrackData.prototype.UpdateTracks = function (theTracks) {
        this.tracks = theTracks;
    };
    TrackData.prototype.UpdateWeather = function (theWinds) {
        this.selWindspeed = theWinds[0].windspeed;
    };
    TrackData.prototype.onAdd = function (aTrack) {
        //var newTrack = new TrackComponent();
        //newTrack.headingTrue = heading;
        //newTrack.distance = distance;
        //newTrack.tas = tas;
        //newTrack.isReadOnly = true;
        //aTrack.btnEditClass = this.stBtnEditDefaultClass;
        //aTrack.btnRemoveClass = this.stBtnRemoveClass;
        // also add the wind to the service
        this._trackService.AddTrack(aTrack);
        // reset the initial values for the input box
        this.aHeading = null;
        this.aDistance = null;
        this.aTas = null;
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
        __metadata('design:paramtypes', [track_service_1.TrackService, weather_service_1.WeatherService, core_1.ElementRef, common_1.FormBuilder])
    ], TrackData);
    return TrackData;
}());
exports.TrackData = TrackData;
//# sourceMappingURL=track.component.js.map