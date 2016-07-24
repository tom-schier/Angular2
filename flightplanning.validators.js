System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.startsWithNumber = function (control) {
                    if (control.value && control.value.length > 0) {
                        if (isNaN(control.value[0]))
                            return { 'startsWithNumber': true };
                    }
                    return null;
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=flightplanning.validators.js.map