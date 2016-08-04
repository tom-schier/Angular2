"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var lesson06_component_1 = require('./lesson06.component');
var core_1 = require('angular2-google-maps/core');
var core_2 = require('@angular/core');
//import {BROWSER_GLOBALS_PROVIDERS} from 'angular2-google-maps/ts/core';
platform_browser_dynamic_1.bootstrap(lesson06_component_1.Lesson06, [
    core_1.GOOGLE_MAPS_PROVIDERS,
    core_2.provide(core_1.LazyMapsAPILoaderConfig, {
        useFactory: function () {
            var config = new core_1.LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyB6uNJRZKDeKJEypk4raRB67kcqACphlp0';
            config.libraries = ['geometry', 'places'];
            return config;
        }
    })
]);
//# sourceMappingURL=main.js.map