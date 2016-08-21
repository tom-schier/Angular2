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
var WindData = (function () {
    // WeatherService will be injected from the parent component. This is because it is not listed
    // as a provider in the @Component decorator
    function WindData(_weatherService, _elRef) {
        this._weatherService = _weatherService;
        this._elRef = _elRef;
        this.active = true;
        this.wnd = new weather_service_1.WindDetails();
        this.windRows = new Array();
        this.altList = new Array();
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
    }
    WindData.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new weather_service_1.WindDetails();
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
    WindData.prototype.onAdd = function () {
        //  if (this.windForm.valid) {
        var newWind = new weather_service_1.WindDetails();
        newWind.altitude = this.model.altitude;
        newWind.direction = this.model.direction;
        newWind.windspeed = this.model.windspeed;
        newWind.isReadOnly = true;
        newWind.btnEditClass = this.stBtnEditDefaultClass;
        newWind.btnRemoveClass = this.stBtnRemoveClass;
        // also add the wind to the service
        this._weatherService.AddWind(newWind);
        this.wnd.altitude = null;
        this.wnd.windspeed = null;
        this.wnd.direction = null;
        //}
        //else {
        //    alert('form is not valid!');
        //}
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
            templateUrl: './windData.html'
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService, core_1.ElementRef])
    ], WindData);
    return WindData;
}());
exports.WindData = WindData;
//# sourceMappingURL=wind.component.js.map