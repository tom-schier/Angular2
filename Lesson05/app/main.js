System.register(['angular2/platform/browser', './lesson05.component', 'angular2/router', './test.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, lesson05_component_1, router_1, test_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (lesson05_component_1_1) {
                lesson05_component_1 = lesson05_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(lesson05_component_1.Lesson05, [router_1.ROUTER_PROVIDERS, test_service_1.TestService]);
        }
    }
});
//# sourceMappingURL=main.js.map