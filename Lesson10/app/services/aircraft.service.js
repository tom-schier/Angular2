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
var mock_aircraft_data_1 = require('../data/mock-aircraft-data');
var http_1 = require('@angular/http');
var aircraft_types_1 = require('../data/aircraft.types');
var Subject_1 = require('rxjs/Subject');
var AircraftService = (function () {
    function AircraftService(http) {
        this.http = http;
        // Observable string sources
        this.obAircraftDetails = new Subject_1.Subject();
        // Observable string streams
        this.aircraftDetailsChange$ = this.obAircraftDetails.asObservable();
        console.log('Creating Aircraft service');
        this.currentAircraft = mock_aircraft_data_1.aircraftList.filter(function (x) { return x.id == 1; })[0];
    }
    AircraftService.prototype.getBriefAircraftList = function () {
        var acList = [];
        for (var _i = 0, aircraftList_1 = mock_aircraft_data_1.aircraftList; _i < aircraftList_1.length; _i++) {
            var ac = aircraftList_1[_i];
            var acBrief = new aircraft_types_1.AircraftBrief(ac.id, ac.name);
            acList.push(acBrief);
        }
        return acList;
    };
    AircraftService.prototype.getSelectedAircraft = function () {
        return this.currentAircraft;
    };
    AircraftService.prototype.getFirstAircraft = function () {
        var firstAc = mock_aircraft_data_1.aircraftList[0];
        return firstAc;
    };
    AircraftService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AircraftService.prototype.getAircraftForId = function (id) {
        // this.selectedChange.next(aircraftList.filter(x => x.id == id)[0]);
        return mock_aircraft_data_1.aircraftList.filter(function (x) { return x.id == id; })[0];
    };
    AircraftService.prototype.setCurrentAircraft = function (id) {
        this.currentAircraft = this.getAircraftForId(id);
        this.obAircraftDetails.next(this.currentAircraft);
    };
    AircraftService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AircraftService);
    return AircraftService;
}());
exports.AircraftService = AircraftService;
//# sourceMappingURL=aircraft.service.js.map