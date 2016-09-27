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
var track_service_1 = require('../services/track.service');
var weather_service_1 = require('../services/weather.service');
var core_1 = require('@angular/core');
var aircraft_service_1 = require('../services/aircraft.service');
var FlightPlanningComponent = (function () {
    function FlightPlanningComponent(_acService, _weatherService, _trackService) {
        this._acService = _acService;
        this._weatherService = _weatherService;
        this._trackService = _trackService;
        console.log('Creating Flight Planning Component');
    }
    FlightPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit Flight Planning Component');
        this.selectedAircraft = this._acService.getSelectedAircraft();
        this._trackService.UpdateAircraft(this.selectedAircraft);
        this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
            _this.UpdateAircraft(acDetails);
        });
        this._weatherService.windDetailsChange$.subscribe(function (wnd) {
            _this.CalculateWindEffect(wnd);
        });
        this._trackService.trackDetailsChange$.subscribe(function (tr) {
            _this.CalculateTrackChanges(tr);
        });
        this.totalTime = this._trackService.totalTimeString;
        this.totalDistance = this._trackService.totalDistanceString;
    };
    FlightPlanningComponent.prototype.UpdateAircraft = function (theAircraft) {
        this.selectedAircraft = theAircraft;
        this.acFlightPlanSpeed = theAircraft.acSpeeds.find(function (x) { return x.name == "TAS"; }).val;
        this._trackService.UpdateAircraft(theAircraft);
        this._trackService.updateTracks();
    };
    FlightPlanningComponent.prototype.CalculateWindEffect = function (winds) {
        // update the calcTrack array
    };
    FlightPlanningComponent.prototype.CalculateTrackChanges = function (tracks) {
        // empty the calcTrack array, recreate and take winds into account
    };
    FlightPlanningComponent.prototype.findClosestWind = function (aTrack) {
        // return a WindDetails object
    };
    FlightPlanningComponent = __decorate([
        core_1.Component({
            templateUrl: './flightplan.html'
        }), 
        __metadata('design:paramtypes', [aircraft_service_1.AircraftService, weather_service_1.WeatherService, track_service_1.TrackService])
    ], FlightPlanningComponent);
    return FlightPlanningComponent;
}());
exports.FlightPlanningComponent = FlightPlanningComponent;
//# sourceMappingURL=flightplanning.component.js.map