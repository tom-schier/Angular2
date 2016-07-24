/// <reference path="../../../typings/jQuery/jQuery.d.ts" />
System.register(['angular2/core', '../services/weather.service', './flightplanning.validators', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, weather_service_1, flightplanning_validators_1, common_1;
    var WindData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (flightplanning_validators_1_1) {
                flightplanning_validators_1 = flightplanning_validators_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            WindData = (function () {
                // WeatherService will be injected from the parent component. This is because it is not listed
                // as a provider in the @Component decorator
                function WindData(_weatherService, _elRef, fb) {
                    this._weatherService = _weatherService;
                    this._elRef = _elRef;
                    this.wnd = new weather_service_1.WindDetails();
                    this.windRows = new Array();
                    this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil";
                    this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok";
                    this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove";
                    this.windForm = fb.group({
                        "windSpeed": new common_1.Control(this.wnd.windspeed, common_1.Validators.compose([common_1.Validators.required, flightplanning_validators_1.SpeedValidator.validSpeed])),
                        "windDirection": new common_1.Control(this.wnd.direction, common_1.Validators.required),
                        "windAltitude": new common_1.Control(this.wnd.altitude, common_1.Validators.required)
                    });
                }
                WindData.prototype.ngOnInit = function () {
                    var _this = this;
                    this._weatherService.windDetailsChange$.subscribe(function (wnd) {
                        _this.UpdateWinds(wnd);
                    });
                    this.loadWinds();
                };
                WindData.prototype.loadWinds = function () {
                    this.windRows = this._weatherService.winds;
                };
                WindData.prototype.UpdateWinds = function (theWinds) {
                    this.loadWinds();
                };
                WindData.prototype.onAdd = function (wnd) {
                    if (this.windForm.valid) {
                        var newWind = new weather_service_1.WindDetails();
                        newWind.altitude = wnd.altitude;
                        newWind.direction = wnd.direction;
                        newWind.windspeed = wnd.windspeed;
                        newWind.isReadOnly = true;
                        newWind.btnEditClass = this.stBtnEditDefaultClass;
                        newWind.btnRemoveClass = this.stBtnRemoveClass;
                        // also add the wind to the service
                        this._weatherService.AddWind(newWind);
                    }
                    else {
                        alert('form is not valid!');
                    }
                    //if (this.aWindspeed.valid == false)
                    //    alert("What is it");
                    // reset the initial values for the input box
                    //this.aAltitude = null;
                    //this.aDirection = null;
                    //this.aWindspeed = null;
                };
                WindData.prototype.onRemove = function (aWind) {
                    this._weatherService.RemoveWind(aWind);
                };
                WindData.prototype.onEdit = function (aWind) {
                    aWind.isReadOnly = (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
                    if (aWind.isReadOnly == false) {
                        var msg;
                        msg = this.validateWind(aWind);
                        if (msg != 'OK') {
                            alert(msg);
                            return;
                        }
                    }
                    aWind.btnEditClass = this.toggleClass(aWind.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
                    aWind.isReadOnly = (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
                    if (aWind.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
                        this._weatherService.UpdateWind(aWind);
                };
                WindData.prototype.validateWind = function (aWind) {
                    if (isNaN(aWind.direction) == true)
                        return "Direction must be between 0 amd 360";
                    var dir;
                    dir = +aWind.direction;
                    if (dir < 0 || dir > 360)
                        return "Direction must be between 0 amd 360";
                    if (isNaN(aWind.windspeed) == true)
                        return "Speed must be between 0 amd 250";
                    var dir;
                    dir = +aWind.windspeed;
                    if (dir < 0 || dir > 360)
                        return "Speed must be between 0 amd 250";
                    else
                        return "OK";
                };
                WindData.prototype.toggleClass = function (c0, c1, c2) {
                    if (c0 == c1)
                        return c2;
                    if (c0 == c2)
                        return c1;
                    else
                        return c0;
                };
                WindData = __decorate([
                    core_1.Component({
                        selector: 'wind-data',
                        templateUrl: './windData.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService, core_1.ElementRef, common_1.FormBuilder])
                ], WindData);
                return WindData;
            }());
            exports_1("WindData", WindData);
        }
    }
});
//# sourceMappingURL=wind.component.js.map