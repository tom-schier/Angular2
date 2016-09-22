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
var location_1 = require('./location');
var forms_1 = require('@angular/forms');
require('../rxjs-operators');
var TrackData = (function () {
    function TrackData(_trackService, _weatherService, _elRef, _acService) {
        this._trackService = _trackService;
        this._weatherService = _weatherService;
        this._elRef = _elRef;
        this._acService = _acService;
        this.submitted = false;
        this.mode = 'Observable';
        this.searchTermStream = new Subject_1.Subject();
        this.active = true;
        this.model = new track_service_1.TrackComponent();
        this.trackRows = new Array();
        this.showList = true;
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
        this.isSelected = false;
        this.stLocation = "";
        this.loc = new location_1.Location();
        this.tracks = this._trackService.tracks;
        this.waypoints = this._trackService.waypoints;
    }
    TrackData.prototype.ngOnInit = function () {
        var _this = this;
        this._trackService.trackDetailsChange$.subscribe(function (trackDetails) {
            _this.UpdateTracks(trackDetails);
        });
        this._trackService.waypointDetailsChange$.subscribe(function (waypointDetails) {
            _this.UpdateWaypoints(waypointDetails);
        });
        this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
            _this.UpdateWeather(windDetails);
        });
        this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
            _this.UpdateAircraft(acDetails);
        });
        this.trackForm = new forms_1.FormGroup({
            waypoint: new forms_1.FormControl('', [forms_1.Validators.required]),
            altitude: new forms_1.FormControl('altitude', [forms_1.Validators.required])
        });
        this.items = this.trackForm.controls["waypoint"].valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this._trackService.search(term); });
        this.loadTracks();
        this.currAircraft = this._acService.currentAircraft;
    };
    TrackData.prototype.search = function (waypoint) {
        this.searchTermStream.next(waypoint);
        this.isSelected = false;
    };
    TrackData.prototype.onKeyUp = function (event) {
        if (this.trackForm.controls['waypoint'].value.length > 1)
            // if (event.target.innerHTML.length > 1)
            this.isSelected = false;
        else
            this.isSelected = true;
    };
    TrackData.prototype.hideList = function () {
        this.isSelected = false;
        this.stComments = [];
    };
    TrackData.prototype.loadTracks = function () {
        this.trackRows = this._trackService.tracks;
    };
    TrackData.prototype.onSelectLocation = function (event) {
        this.trackForm.controls['waypoint'].setValue(event.target.innerHTML);
        this.isSelected = true;
    };
    TrackData.prototype.UpdateTracks = function (theTracks) {
        this.trackRows = theTracks;
    };
    TrackData.prototype.UpdateWaypoints = function (theWaypoints) {
        this.waypoints = theWaypoints;
    };
    TrackData.prototype.UpdateAircraft = function (theAircraft) {
        this.currAircraft = theAircraft;
    };
    TrackData.prototype.UpdateWeather = function (theWinds) {
        this.selWindspeed = theWinds[0].windspeed;
    };
    TrackData.prototype.onSelect = function (item) {
        this.stLocation = item.description;
        this.isSelected = true;
        //this.trackForm.controls['waypoint'].value = item.description;
        ////trackForm.controls.waypoint
        //var ee = 7;
    };
    TrackData.prototype.onSubmit = function (event) {
        this.submitted = true;
        //  this.term.get("searchInput").setValue
    };
    TrackData.prototype.onAdd = function (model, isValid) {
        var _this = this;
        this.stComments = [];
        if (this.trackForm.controls["altitude"].valid == false)
            this.stComments.push("Select valid altitude from list.");
        if (this.trackForm.controls["waypoint"].valid == false)
            this.stComments.push("Waypoint is invalid.");
        if (isValid == false)
            return;
        this._trackService.getLocationByDescr(this.trackForm.controls["waypoint"].value).subscribe(function (x) { return _this._trackService.AddLocation(x, _this.trackForm.controls["altitude"].value); });
    };
    TrackData.prototype.onRemove = function (aLoc) {
        this._trackService.RemoveWaypoint(aLoc);
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
        __metadata('design:paramtypes', [track_service_1.TrackService, weather_service_1.WeatherService, core_1.Renderer, aircraft_service_1.AircraftService])
    ], TrackData);
    return TrackData;
}());
exports.TrackData = TrackData;
//# sourceMappingURL=track.component.js.map