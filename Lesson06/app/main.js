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
var lesson06_component_1 = require('./lesson06.component');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var Lesson06Module = (function () {
    function Lesson06Module() {
    }
    Lesson06Module = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [],
            declarations: [
                lesson06_component_1.Lesson06
            ],
            bootstrap: [lesson06_component_1.Lesson06]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson06Module);
    return Lesson06Module;
}());
exports.Lesson06Module = Lesson06Module;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Lesson06Module);
//# sourceMappingURL=main.js.map