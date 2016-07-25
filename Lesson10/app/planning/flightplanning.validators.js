System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpeedValidator;
    return {
        setters:[],
        execute: function() {
            SpeedValidator = (function () {
                function SpeedValidator() {
                }
                SpeedValidator.validSpeed = function (control) {
                    if (control.value && control.value.length != 4)
                        return { 'validSpeed': false };
                    if (control.value && control.value.length > 0) {
                        if (control.value[0] != 'N')
                            return { 'validSpeed': false };
                    }
                    if (control.value && control.value.length == 4) {
                        var numComp = control.value.slice(1, 3);
                        if (isNaN(numComp)) {
                            return { 'validSpeed': false };
                        }
                    }
                    return null;
                };
                return SpeedValidator;
            }());
            exports_1("SpeedValidator", SpeedValidator);
        }
    }
});
//# sourceMappingURL=flightplanning.validators.js.map