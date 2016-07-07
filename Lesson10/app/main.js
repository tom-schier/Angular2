System.register(['angular2/platform/browser', './app.component', 'angular2/router', 'angular2/http', './services/aircraft.service', './services/weather.service', './services/track.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, http_1, aircraft_service_1, weather_service_1, track_service_1;
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
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (track_service_1_1) {
                track_service_1 = track_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                aircraft_service_1.AircraftService,
                weather_service_1.WeatherService,
                track_service_1.TrackService
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map