import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson06} from './lesson06.component';
import {
    GOOGLE_MAPS_DIRECTIVES,
    GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

bootstrap(Lesson06, [GOOGLE_MAPS_PROVIDERS]);
