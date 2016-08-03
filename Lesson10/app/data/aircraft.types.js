"use strict";
var AircraftSpeed = (function () {
    function AircraftSpeed(id, name, val, desc) {
        this.id = id;
        this.name = name;
        this.val = val;
        this.desc = desc;
    }
    return AircraftSpeed;
}());
exports.AircraftSpeed = AircraftSpeed;
var AircraftWeight = (function () {
    function AircraftWeight(id, name, val, desc) {
        this.id = id;
        this.name = name;
        this.val = val;
        this.desc = desc;
    }
    return AircraftWeight;
}());
exports.AircraftWeight = AircraftWeight;
var Aircraft = (function () {
    function Aircraft(id, name, acSpeeds, acWeights, imageUrl) {
        this.id = id;
        this.name = name;
        this.acSpeeds = acSpeeds;
        this.acWeights = acWeights;
        this.imageUrl = imageUrl;
    }
    return Aircraft;
}());
exports.Aircraft = Aircraft;
var AircraftBrief = (function () {
    function AircraftBrief(id, name) {
        this.id = id;
        this.name = name;
    }
    return AircraftBrief;
}());
exports.AircraftBrief = AircraftBrief;
//# sourceMappingURL=aircraft.types.js.map