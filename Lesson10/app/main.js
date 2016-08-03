"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var aircraft_service_1 = require('./services/aircraft.service');
var weather_service_1 = require('./services/weather.service');
var track_service_1 = require('./services/track.service');
var app_routes_1 = require('./data/app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    aircraft_service_1.AircraftService,
    weather_service_1.WeatherService,
    track_service_1.TrackService
]).catch(function (err) { return console.error(err); });
;
//# sourceMappingURL=main.js.map