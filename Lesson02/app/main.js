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
var lesson02_component_1 = require('./lesson02.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var Lesson02Module = (function () {
    function Lesson02Module() {
    }
    Lesson02Module = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [],
            declarations: [
                lesson02_component_1.Lesson02
            ],
            bootstrap: [lesson02_component_1.Lesson02]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson02Module);
    return Lesson02Module;
}());
exports.Lesson02Module = Lesson02Module;
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Lesson02Module);
//# sourceMappingURL=main.js.map