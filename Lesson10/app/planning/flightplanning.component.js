System.register(['./wind.component', '../services/weather.service', './track.component', 'angular2/core', '../services/aircraft.service', 'angular2/router'], function(exports_1, context_1) {
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
    var wind_component_1, weather_service_1, track_component_1, core_1, aircraft_service_1, router_1;
    var FlightPlanningComponent;
    return {
        setters:[
            function (wind_component_1_1) {
                wind_component_1 = wind_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (track_component_1_1) {
                track_component_1 = track_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aircraft_service_1_1) {
                aircraft_service_1 = aircraft_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FlightPlanningComponent = (function () {
                function FlightPlanningComponent(_routeParams, _acService, _weatherService) {
                    this._routeParams = _routeParams;
                    this._acService = _acService;
                    this._weatherService = _weatherService;
                    console.log('Creating Flight Planning Component');
                }
                FlightPlanningComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('ngOnInit Flight Planning Component');
                    this.selectedAircraft = this._acService.getSelectedAircraft();
                    this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
                        _this.UpdateAircraft(acDetails);
                    });
                };
                FlightPlanningComponent.prototype.UpdateAircraft = function (theAircraft) {
                    this.selectedAircraft = theAircraft;
                };
                FlightPlanningComponent = __decorate([
                    core_1.Component({
                        templateUrl: './flightplan.html',
                        directives: [wind_component_1.WindData, track_component_1.TrackData]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, aircraft_service_1.AircraftService, weather_service_1.WeatherService])
                ], FlightPlanningComponent);
                return FlightPlanningComponent;
            }());
            exports_1("FlightPlanningComponent", FlightPlanningComponent);
        }
    }
});
//# sourceMappingURL=flightplanning.component.js.map