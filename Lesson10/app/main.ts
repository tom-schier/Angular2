

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide}           from '@angular/core';
import {AppComponent} from './app.component';
import {provideRouter}  from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {AircraftService} from './services/aircraft.service';
import {WeatherService} from './services/weather.service';
import {TrackService} from './services/track.service';
import {appRouterProviders} from './data/app.routes';


bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    AircraftService,
    WeatherService,
    TrackService
]).catch(err => console.error(err));;
