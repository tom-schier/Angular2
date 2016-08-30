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
var Subject_1 = require('rxjs/Subject');
var location_service_1 = require('./location.service');
var location_component_1 = require('./location.component');
require('./rxjs-operators');
var Lesson08 = (function () {
    function Lesson08(locationService) {
        var _this = this;
        this.locationService = locationService;
        this.mode = 'Observable';
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.locationService.search(term); });
    }
    Lesson08.prototype.ngOnInit = function () {
        this.aLoc = new location_component_1.Location();
    };
    Lesson08.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    Lesson08 = __decorate([
        core_1.Component({
            selector: 'lesson-08',
            templateUrl: './views/lesson08.html',
            providers: [location_service_1.LocationService]
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService])
    ], Lesson08);
    return Lesson08;
}());
exports.Lesson08 = Lesson08;
//# sourceMappingURL=lesson08.component.js.map