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
var windComponent = (function () {
    function windComponent() {
    }
    return windComponent;
}());
var Lesson03 = (function () {
    function Lesson03() {
        this.winds = new Array();
    }
    Lesson03.prototype.ngOnInit = function () {
        this.selWindComp = new windComponent();
    };
    Lesson03.prototype.onClick = function () {
        var newWind = new windComponent();
        newWind.altitude = this.aAltitude;
        newWind.direction = this.aDirection;
        newWind.windspeed = this.aWindspeed;
        newWind.isReadOnly = true;
        this.winds.push(newWind);
    };
    Lesson03.prototype.onRemove = function (idx) {
        this.winds.splice(idx, 1);
    };
    Lesson03.prototype.onSelect = function (idx) {
        this.selWindComp = this.winds[idx];
        this.selIdx = idx;
    };
    Lesson03.prototype.onEdit = function (idx) {
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
    Lesson03 = __decorate([
        core_1.Component({
            selector: 'lesson-03',
            templateUrl: './views/iodemo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson03);
    return Lesson03;
}());
exports.Lesson03 = Lesson03;
//# sourceMappingURL=lesson03.component.js.map