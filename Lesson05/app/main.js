"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var lesson05_component_1 = require('./lesson05.component');
var app_routes_1 = require('./app.routes');
var test_service_1 = require('./test.service');
platform_browser_dynamic_1.bootstrap(lesson05_component_1.Lesson05, [app_routes_1.appRouterProviders, test_service_1.TestService]);
//# sourceMappingURL=main.js.map