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
var router_1 = require('@angular/router');
var aircraftlist_component_1 = require('./aircraft/aircraftlist.component');
var flightplanning_component_1 = require('./planning/flightplanning.component');
var mapcontainer_component_1 = require('./planning/mapcontainer.component');
var aircraft_detail_component_1 = require('./aircraft/aircraft-detail.component');
var aircraft_service_1 = require('./services/aircraft.service');
var AppComponent = (function () {
    function AppComponent(_router, _acService) {
        this._router = _router;
        this._acService = _acService;
        console.log('creating AppComponent');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit AppComponent');
        this._acService.aircraftDetailsChange$.subscribe(function (msg) {
            _this.updateMessage(msg);
        });
    };
    AppComponent.prototype.updateMessage = function (msg) {
        this.id = msg.id;
    };
    AppComponent.prototype.getAircraftDetails = function (evt) {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'lesson-10',
            templateUrl: 'app.html',
            directives: [router_1.ROUTER_DIRECTIVES, flightplanning_component_1.FlightPlanningComponent, aircraft_detail_component_1.AircraftDetailsComponent, aircraftlist_component_1.AircraftListComponent, mapcontainer_component_1.MapContainer],
            providers: [aircraft_service_1.AircraftService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, aircraft_service_1.AircraftService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map