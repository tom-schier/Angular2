

import {bootstrap} from 'angular2/platform/browser';
import {provide}           from 'angular2/core';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AircraftService} from './aircraft/aircraft.service';

// Add these symbols to override the `LocationStrategy`

//import {LocationStrategy, PathLocationStrategy} from 'angular2/router';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AircraftService
]);
