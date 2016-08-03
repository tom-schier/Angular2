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
var core_2 = require('angular2-google-maps/core');
var Lesson06 = (function () {
    function Lesson06() {
        this.lat = 44.3;
        this.lng = 33.2;
    }
    Lesson06.prototype.initMap = function () {
    };
    Lesson06 = __decorate([
        core_1.Component({
            selector: 'lesson-06',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            template: "\n\t\t<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n\t\t</sebm-google-map>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson06);
    return Lesson06;
}());
exports.Lesson06 = Lesson06;
//# sourceMappingURL=lesson06.component.js.map