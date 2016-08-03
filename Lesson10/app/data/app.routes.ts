import { provideRouter, RouterConfig } from '@angular/router';
import {FlightPlanningComponent}   from '../planning/flightplanning.component';
import {AircraftDetailsComponent} from '../aircraft/aircraft-detail.component';

const routes: RouterConfig = [
    { path: 'FlightPlanning', component: FlightPlanningComponent },
    { path: 'AircraftDetails', component: AircraftDetailsComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
