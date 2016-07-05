System.register(['../data/aircraft.types'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aircraft_types_1;
    var vfeDescription, tasDescription, vneDescription, psdDescription, vxDescription, vyDescription, vrDescription, vsoDescription, vsDescription, vaDescription, vnoDescription, mtowDescription, mlwDescription, bewDescription, payloadDescription, baggageDescription, aircraftSpeedsCessna172, aircraftWeightsCessna172, aircraftSpeedsCirrusSR20, aircraftWeightsCirrusSR20, aircraftSpeedsPA28, aircraftWeightsPA28, aircraftList;
    return {
        setters:[
            function (aircraft_types_1_1) {
                aircraft_types_1 = aircraft_types_1_1;
            }],
        execute: function() {
            /*** description constants for speeds ************/
            vfeDescription = 'Maximum flap extension speed';
            tasDescription = 'Standard airspeeed used for flight planning';
            vneDescription = 'Never Exceeed Speed';
            psdDescription = 'Maximum parachute deployment speed';
            tasDescription = 'Airspeed used for flight planning';
            vxDescription = 'Best angle of climbe speed';
            vyDescription = 'Best rate of climb speed';
            vrDescription = 'Rotation speed';
            vsoDescription = 'Stall speed in landing configuraton';
            vsDescription = 'Stall speed with no flap';
            vaDescription = 'Maneouvering speed';
            vnoDescription = 'Max normal operating speed';
            /***** description constants for weights *********/
            mtowDescription = 'Maximum take-off weight';
            mlwDescription = 'The maximum landing weight';
            bewDescription = 'The basic empty weight';
            payloadDescription = 'The maximum payload with full fuel';
            baggageDescription = 'Maxmum weight in thr baggage compartment';
            aircraftSpeedsCessna172 = [
                new aircraft_types_1.AircraftSpeed(1, 'VFE', 90, vfeDescription),
                new aircraft_types_1.AircraftSpeed(2, 'TAS', 110, tasDescription),
                new aircraft_types_1.AircraftSpeed(3, 'VNE', 155, vneDescription),
                new aircraft_types_1.AircraftSpeed(4, 'VX', 65, vxDescription),
                new aircraft_types_1.AircraftSpeed(5, 'VY', 75, vyDescription),
                new aircraft_types_1.AircraftSpeed(7, 'VSO', 44, vsoDescription),
                new aircraft_types_1.AircraftSpeed(8, 'VS', 52, vsDescription),
                new aircraft_types_1.AircraftSpeed(9, 'VA', 125, vaDescription),
                new aircraft_types_1.AircraftSpeed(10, 'VR', 60, vrDescription),
            ];
            aircraftWeightsCessna172 = [
                new aircraft_types_1.AircraftWeight(1, 'MTOW', 1092, 'Maximum take-off weight'),
                new aircraft_types_1.AircraftWeight(2, 'BEW', 684, 'The basic empty weight'),
                new aircraft_types_1.AircraftWeight(3, 'MLW', 175, mlwDescription),
                new aircraft_types_1.AircraftWeight(4, 'Max Payload', 3045, payloadDescription),
            ];
            aircraftSpeedsCirrusSR20 = [
                new aircraft_types_1.AircraftSpeed(1, 'VFE', 120, vfeDescription),
                new aircraft_types_1.AircraftSpeed(2, 'TAS', 145, tasDescription),
                new aircraft_types_1.AircraftSpeed(3, 'VNE', 200, vneDescription),
                new aircraft_types_1.AircraftSpeed(4, 'VX', 75, vxDescription),
                new aircraft_types_1.AircraftSpeed(5, 'VY', 96, vyDescription),
                new aircraft_types_1.AircraftSpeed(6, 'VPD', 135, psdDescription),
                new aircraft_types_1.AircraftSpeed(7, 'VSO', 56, vsoDescription),
                new aircraft_types_1.AircraftSpeed(8, 'VS', 65, vsDescription),
                new aircraft_types_1.AircraftSpeed(9, 'VA', 131, vaDescription),
                new aircraft_types_1.AircraftSpeed(10, 'VR', 70, vrDescription),
            ];
            aircraftWeightsCirrusSR20 = [
                new aircraft_types_1.AircraftWeight(1, 'MTOW', 1631, mtowDescription),
                new aircraft_types_1.AircraftWeight(2, 'BAG', 59, baggageDescription),
                new aircraft_types_1.AircraftWeight(3, 'BEW', 835, bewDescription),
                new aircraft_types_1.AircraftWeight(4, 'MLW', 1631, mlwDescription),
                new aircraft_types_1.AircraftWeight(5, 'Max Payload', 385, payloadDescription),
            ];
            aircraftSpeedsPA28 = [
                new aircraft_types_1.AircraftSpeed(1, 'VFE', 90, vfeDescription),
                new aircraft_types_1.AircraftSpeed(2, 'TAS', 110, tasDescription),
                new aircraft_types_1.AircraftSpeed(3, 'VNE', 155, vneDescription),
                new aircraft_types_1.AircraftSpeed(4, 'VX', 65, vxDescription),
                new aircraft_types_1.AircraftSpeed(5, 'VY', 75, vyDescription),
                new aircraft_types_1.AircraftSpeed(7, 'VSO', 44, vsoDescription),
                new aircraft_types_1.AircraftSpeed(8, 'VS', 52, vsDescription),
                new aircraft_types_1.AircraftSpeed(9, 'VA', 125, vaDescription),
                new aircraft_types_1.AircraftSpeed(10, 'VR', 60, vrDescription),
            ];
            aircraftWeightsPA28 = [
                new aircraft_types_1.AircraftWeight(1, 'MTOW', 1092, mtowDescription),
                new aircraft_types_1.AircraftWeight(2, 'BEW', 684, bewDescription),
                new aircraft_types_1.AircraftWeight(3, 'MLW', 175, mlwDescription),
                new aircraft_types_1.AircraftWeight(4, 'Max Payload', 3045, payloadDescription),
            ];
            exports_1("aircraftList", aircraftList = [
                new aircraft_types_1.Aircraft(1, "Cessna 172", aircraftSpeedsCessna172, aircraftWeightsCessna172, "/res/Cessna172.jpg"),
                new aircraft_types_1.Aircraft(2, "Cirrus SR20", aircraftSpeedsCirrusSR20, aircraftWeightsCirrusSR20, "/res/CirrusSR20.jpg"),
                new aircraft_types_1.Aircraft(3, "Piper PA28", aircraftSpeedsPA28, aircraftWeightsPA28, "/res/PA28.jpg")
            ]);
        }
    }
});
//# sourceMappingURL=mock-aircraft-data.js.map