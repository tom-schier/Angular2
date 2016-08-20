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
var lesson05_component_1 = require('./lesson05.component');
var app_routes_1 = require('./app.routes');
var ListA_1 = require('./ListA');
var ListB_1 = require('./ListB');
var test_service_1 = require('./test.service');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var Lesson05Module = (function () {
    function Lesson05Module() {
    }
    Lesson05Module = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.routing
            ],
            providers: [app_routes_1.appRoutingProviders, test_service_1.TestService],
            declarations: [ListA_1.ListA, ListB_1.ListB, lesson05_component_1.Lesson05],
            bootstrap: [lesson05_component_1.Lesson05]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson05Module);
    return Lesson05Module;
}());
exports.Lesson05Module = Lesson05Module;
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Lesson05Module);
//# sourceMappingURL=main.js.map