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
var aircraft_service_1 = require('../services/aircraft.service');
var AircraftDetailsComponent = (function () {
    function AircraftDetailsComponent(_acService) {
        this._acService = _acService;
        console.log('creating Details Component');
    }
    AircraftDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit Details Component');
        this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
            _this.UpdateAircraft(acDetails);
        });
        this.selectedAircraft = this._acService.getSelectedAircraft();
    };
    AircraftDetailsComponent.prototype.UpdateAircraft = function (theAircraft) {
        this.selectedAircraft = theAircraft;
    };
    AircraftDetailsComponent = __decorate([
        core_1.Component({
            selector: 'ac-details',
            templateUrl: './acDetails.html'
        }), 
        __metadata('design:paramtypes', [aircraft_service_1.AircraftService])
    ], AircraftDetailsComponent);
    return AircraftDetailsComponent;
}());
exports.AircraftDetailsComponent = AircraftDetailsComponent;
//# sourceMappingURL=aircraft-detail.component.js.map