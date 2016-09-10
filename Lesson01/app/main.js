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
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var lesson01_component_1 = require('./lesson01.component');
var Lesson01Module = (function () {
    function Lesson01Module() {
    }
    Lesson01Module = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            providers: [],
            declarations: [
                lesson01_component_1.Lesson01
            ],
            bootstrap: [lesson01_component_1.Lesson01]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson01Module);
    return Lesson01Module;
}());
exports.Lesson01Module = Lesson01Module;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Lesson01Module);
//# sourceMappingURL=main.js.map