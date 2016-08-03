"use strict";
var SpeedValidator = (function () {
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
exports.SpeedValidator = SpeedValidator;
//# sourceMappingURL=flightplanning.validators.js.map