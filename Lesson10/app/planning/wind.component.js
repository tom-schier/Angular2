System.register(['angular2/core', './weather.service'], function(exports_1, context_1) {
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
    var core_1, weather_service_1;
    var WindData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WindData = (function () {
                // WeatherService will be injected from the parent component. This is because it is not listed
                // as a provider in the @Component decorator
                function WindData(_weatherService) {
                    this._weatherService = _weatherService;
                    this.winds = new Array();
                }
                WindData.prototype.ngOnInit = function () {
                    var _this = this;
                    this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
                        _this.UpdateWinds(windDetails);
                    });
                };
                WindData.prototype.UpdateWinds = function (theWinds) {
                    this.winds = theWinds;
                };
                WindData.prototype.onClick = function () {
                    var newWind = new weather_service_1.WindDetails();
                    newWind.altitude = this.aAltitude;
                    newWind.direction = this.aDirection;
                    newWind.windspeed = this.aWindspeed;
                    newWind.isReadOnly = true;
                    this._weatherService.AddWind(newWind);
                };
                WindData.prototype.onRemove = function (aWind) {
                    this._weatherService.RemoveWind(aWind);
                };
                WindData.prototype.onSelect = function (idx) {
                    //this.selWindComp = this.winds[idx];
                    //  this.selIdx = idx;
                };
                WindData.prototype.onEdit = function (idx) {
                    this.winds[idx].isReadOnly = !this.winds[idx].isReadOnly;
                    var currentCaption = document.getElementsByClassName("idEditBtn")[idx].innerHTML;
                    if (currentCaption == "Save") {
                        document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Edit";
                        var editWndDir = (document.getElementsByClassName("idxWndDir")[idx]);
                        editWndDir.style.backgroundColor = "lightgray";
                        var editWndSpeed = (document.getElementsByClassName("idxWndSpeed")[idx]);
                        editWndSpeed.style.backgroundColor = "lightgray";
                        var editWndAlt = (document.getElementsByClassName("idxWndAltitude")[idx]);
                        editWndAlt.style.backgroundColor = "lightgray";
                    }
                    else {
                        document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Save";
                        var editWndDir = (document.getElementsByClassName("idxWndDir")[idx]);
                        editWndDir.style.backgroundColor = "white";
                        var editWndSpeed = (document.getElementsByClassName("idxWndSpeed")[idx]);
                        editWndSpeed.style.backgroundColor = "white";
                        var editWndAlt = (document.getElementsByClassName("idxWndAltitude")[idx]);
                        editWndAlt.style.backgroundColor = "white";
                    }
                };
                WindData = __decorate([
                    core_1.Component({
                        selector: 'wind-data',
                        templateUrl: './windData.html'
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WindData);
                return WindData;
            }());
            exports_1("WindData", WindData);
        }
    }
});
//# sourceMappingURL=wind.component.js.map