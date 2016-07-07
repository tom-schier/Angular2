

import {bootstrap} from 'angular2/platform/browser';
import {provide}           from 'angular2/core';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AircraftService} from './services/aircraft.service';
import {WeatherService} from './services/weather.service';
import {TrackService} from './services/track.service';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AircraftService,
    WeatherService,
    TrackService
]);
