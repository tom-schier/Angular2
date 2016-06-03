System.register(['angular2/platform/browser', './lesson02.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, lesson02_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (lesson02_component_1_1) {
                lesson02_component_1 = lesson02_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(lesson02_component_1.Lesson02);
        }
    }
});
//# sourceMappingURL=main.js.map