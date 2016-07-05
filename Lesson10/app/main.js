System.register(['angular2/platform/browser', './app.component', 'angular2/router', 'angular2/http', './aircraft/aircraft.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, http_1, aircraft_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (aircraft_service_1_1) {
                aircraft_service_1 = aircraft_service_1_1;
            }],
        execute: function() {
            // Add these symbols to override the `LocationStrategy`
            //import {LocationStrategy, PathLocationStrategy} from 'angular2/router';
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                aircraft_service_1.AircraftService
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map