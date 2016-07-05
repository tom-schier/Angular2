System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AircraftSpeed, AircraftWeight, Aircraft, AircraftBrief;
    return {
        setters:[],
        execute: function() {
            AircraftSpeed = (function () {
                function AircraftSpeed(id, name, val, desc) {
                    this.id = id;
                    this.name = name;
                    this.val = val;
                    this.desc = desc;
                }
                return AircraftSpeed;
            }());
            exports_1("AircraftSpeed", AircraftSpeed);
            AircraftWeight = (function () {
                function AircraftWeight(id, name, val, desc) {
                    this.id = id;
                    this.name = name;
                    this.val = val;
                    this.desc = desc;
                }
                return AircraftWeight;
            }());
            exports_1("AircraftWeight", AircraftWeight);
            Aircraft = (function () {
                function Aircraft(id, name, acSpeeds, acWeights, imageUrl) {
                    this.id = id;
                    this.name = name;
                    this.acSpeeds = acSpeeds;
                    this.acWeights = acWeights;
                    this.imageUrl = imageUrl;
                }
                return Aircraft;
            }());
            exports_1("Aircraft", Aircraft);
            AircraftBrief = (function () {
                function AircraftBrief(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return AircraftBrief;
            }());
            exports_1("AircraftBrief", AircraftBrief);
        }
    }
});
//# sourceMappingURL=aircraft.types.js.map