System.register(['angular2/core', '../services/weather.service', '../services/track.service'], function(exports_1, context_1) {
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
    var core_1, weather_service_1, track_service_1;
    var TrackData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (track_service_1_1) {
                track_service_1 = track_service_1_1;
            }],
        execute: function() {
            TrackData = (function () {
                function TrackData(_weatherService, _trackService) {
                    this._weatherService = _weatherService;
                    this._trackService = _trackService;
                    this.tracks = new Array();
                    this.stBtnEditDefaultClass = "btn btn-primary glyphicon glyphicon-pencil";
                    this.stBtnEditSaveClass = "btn btn-primary glyphicon glyphicon-ok";
                    this.stBtnRemoveClass = "btn btn-primary glyphicon glyphicon-remove";
                }
                TrackData.prototype.ngOnInit = function () {
                    var _this = this;
                    this._trackService.trackDetailsChange$.subscribe(function (trackDetails) {
                        _this.UpdateTracks(trackDetails);
                    });
                    this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
                        _this.UpdateWeather(windDetails);
                    });
                    this.loadTracks();
                };
                TrackData.prototype.loadTracks = function () {
                    this.tracks = this._trackService.tracks;
                };
                TrackData.prototype.UpdateTracks = function (theTracks) {
                    this.tracks = theTracks;
                };
                TrackData.prototype.UpdateWeather = function (theWinds) {
                    this.selWindspeed = theWinds[0].windspeed;
                };
                TrackData.prototype.onAdd = function (heading, distance, tas) {
                    var newTrack = new track_service_1.TrackComponent();
                    newTrack.headingTrue = heading;
                    newTrack.distance = distance;
                    newTrack.tas = tas;
                    newTrack.isReadOnly = true;
                    newTrack.btnEditClass = this.stBtnEditDefaultClass;
                    newTrack.btnRemoveClass = this.stBtnRemoveClass;
                    // also add the wind to the service
                    this._trackService.AddTrack(newTrack);
                    // reset the initial values for the input box
                    this.aHeading = null;
                    this.aDistance = null;
                    this.aTas = null;
                };
                TrackData.prototype.onRemove = function (aTrack) {
                    this._trackService.RemoveTrack(aTrack);
                };
                TrackData.prototype.onEdit = function (aTrack) {
                    aTrack.btnEditClass = this.toggleClass(aTrack.btnEditClass, "btn btn-primary glyphicon glyphicon-pencil", "btn btn-primary glyphicon glyphicon-ok");
                    aTrack.isReadOnly = (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil");
                    if (aTrack.btnEditClass == "btn btn-primary glyphicon glyphicon-pencil")
                        this._trackService.UpdateTrack(aTrack);
                };
                TrackData.prototype.toggleClass = function (c0, c1, c2) {
                    if (c0 == c1)
                        return c2;
                    if (c0 == c2)
                        return c1;
                    else
                        return c0;
                };
                TrackData = __decorate([
                    core_1.Component({
                        selector: 'track-data',
                        templateUrl: './trackData.html'
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService, track_service_1.TrackService])
                ], TrackData);
                return TrackData;
            }());
            exports_1("TrackData", TrackData);
        }
    }
});
//# sourceMappingURL=track.component.js.map