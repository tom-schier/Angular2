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
var common_1 = require('@angular/common');
var Wind = (function () {
    function Wind(id, speed, altitude, direction) {
        this.id = id;
        this.speed = speed;
        this.altitude = altitude;
        this.direction = direction;
    }
    return Wind;
}());
exports.Wind = Wind;
var Lesson07 = (function () {
    function Lesson07() {
        this.model = new Wind(1, 120, 'A050', 270);
        this.submitted = false;
        this.altList = new Array();
        this.altList.push('A020');
        this.altList.push('A030');
        this.altList.push('A040');
        this.altList.push('A050');
        this.altList.push('A060');
        this.altList.push('A070');
        this.altList.push('A080');
    }
    Lesson07.prototype.onSubmit = function () {
        if (this.altControl.valid == false)
            alert("OOBA");
        this.submitted = true;
    };
    Object.defineProperty(Lesson07.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Lesson07 = __decorate([
        core_1.Component({
            selector: 'lesson-07',
            templateUrl: './views/validation.html',
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson07);
    return Lesson07;
}());
exports.Lesson07 = Lesson07;
//# sourceMappingURL=lesson07.component.js.map