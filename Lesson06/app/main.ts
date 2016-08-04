import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson06} from './lesson06.component';
import {
    GOOGLE_MAPS_DIRECTIVES,
    GOOGLE_MAPS_PROVIDERS,
    NoOpMapsAPILoader,
    LazyMapsAPILoaderConfig 
} from 'angular2-google-maps/core';
import {provide} from '@angular/core';
//import {BROWSER_GLOBALS_PROVIDERS} from 'angular2-google-maps/ts/core';


bootstrap(Lesson06, [
    GOOGLE_MAPS_PROVIDERS,
    provide(LazyMapsAPILoaderConfig, {
        useFactory: () => {
            let config = new LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyB6uNJRZKDeKJEypk4raRB67kcqACphlp0';
            config.libraries = ['geometry', 'places'];
            return config;
        }
    })
])
