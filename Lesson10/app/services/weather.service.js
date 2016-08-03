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
var WindDetails = (function () {
    function WindDetails() {
    }
    return WindDetails;
}());
exports.WindDetails = WindDetails;
var CloudDetails = (function () {
    function CloudDetails() {
    }
    return CloudDetails;
}());
exports.CloudDetails = CloudDetails;
var WeatherService = (function () {
    function WeatherService() {
        // Observable string sources
        this.obWindDetails = new Subject_1.Subject();
        this.obCloudDetails = new Subject_1.Subject();
        // Observable string streams
        this.windDetailsChange$ = this.obWindDetails.asObservable();
        this.cloudDetailsChange$ = this.obCloudDetails.asObservable();
        console.log('Creating weather service');
        this.winds = new Array();
        this.clouds = new Array();
    }
    // Service message commands
    WeatherService.prototype.AddWind = function (aWind) {
        var newWind = new WindDetails();
        newWind = aWind;
        this.winds.push(aWind);
        this.obWindDetails.next(this.winds);
    };
    WeatherService.prototype.RemoveWind = function (aWind) {
        var idx = this.winds.indexOf(aWind);
        this.winds.splice(idx, 1);
        this.obWindDetails.next(this.winds);
    };
    WeatherService.prototype.UpdateWind = function (aWind) {
        var idx = this.winds.indexOf(aWind);
        var theWind = this.winds.find(function (x) { return x.id == aWind.id; });
        this.winds[idx] = aWind;
        this.obWindDetails.next(this.winds);
    };
    // Service message commands
    WeatherService.prototype.AddCloud = function (aCloud) {
        var newCloud = new CloudDetails();
        newCloud = aCloud;
        this.clouds.push(aCloud);
        this.obCloudDetails.next(this.clouds);
    };
    WeatherService.prototype.RemoveCloud = function (aCloud) {
        var idx = this.clouds.indexOf(aCloud);
        this.clouds.splice(idx);
        this.obCloudDetails.next(this.clouds);
    };
    WeatherService.prototype.UpdateCloud = function (aCloud) {
        var idx = this.clouds.indexOf(aCloud);
        var theCloud = this.clouds.find(function (x) { return x == aCloud; });
        this.obCloudDetails.next(this.clouds);
    };
    WeatherService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    WeatherService.prototype.getWindForSector = function (aSector, aAltitude) {
        return this.winds.find(function (wnd) { return wnd.sector == aSector && wnd.altitude == aAltitude; });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map