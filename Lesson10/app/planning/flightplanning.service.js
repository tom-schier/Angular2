System.register(['angular2/core', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Subject_1;
    var TrackComponent, TrackService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            TrackComponent = (function () {
                function TrackComponent() {
                }
                return TrackComponent;
            }());
            exports_1("TrackComponent", TrackComponent);
            TrackService = (function () {
                function TrackService() {
                    // Observable string sources
                    this.obTrackDetails = new Subject_1.Subject();
                    // Observable string streams
                    this.trackDetailsChange$ = this.obTrackDetails.asObservable();
                    console.log('creating flight planning service');
                    this.tracks = new Array();
                }
                // Service message commands
                TrackService.prototype.AddTrack = function (aTrack) {
                    var newTrack = new TrackComponent();
                    newTrack.headingTrue = aTrack.headingTrue;
                    newTrack.distance = aTrack.distance;
                    newTrack.tas = aTrack.tas;
                    newTrack.isReadOnly = true;
                    this.tracks.push(newTrack);
                };
                TrackService.prototype.RemoveTrack = function (aTrack) {
                    var idx = this.tracks.indexOf(aTrack);
                    this.tracks.splice(idx, 1);
                    this.obTrackDetails.next(this.tracks);
                };
                TrackService.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                TrackService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TrackService);
                return TrackService;
            }());
            exports_1("TrackService", TrackService);
        }
    }
});
//# sourceMappingURL=flightplanning.service.js.map