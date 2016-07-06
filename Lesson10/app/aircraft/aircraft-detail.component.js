System.register(['angular2/core', './aircraft-speeds.component', './aircraft-weights.component', './aircraft.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, aircraft_speeds_component_1, aircraft_weights_component_1, aircraft_service_1;
    var AircraftDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aircraft_speeds_component_1_1) {
                aircraft_speeds_component_1 = aircraft_speeds_component_1_1;
            },
            function (aircraft_weights_component_1_1) {
                aircraft_weights_component_1 = aircraft_weights_component_1_1;
            },
            function (aircraft_service_1_1) {
                aircraft_service_1 = aircraft_service_1_1;
            }],
        execute: function() {
            AircraftDetailsComponent = (function () {
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
                        templateUrl: './acDetails.html',
                        directives: [aircraft_speeds_component_1.AircraftSpeedsComponent, aircraft_weights_component_1.AircraftWeightsComponent]
                    }), 
                    __metadata('design:paramtypes', [aircraft_service_1.AircraftService])
                ], AircraftDetailsComponent);
                return AircraftDetailsComponent;
            }());
            exports_1("AircraftDetailsComponent", AircraftDetailsComponent);
        }
    }
});
//# sourceMappingURL=aircraft-detail.component.js.map