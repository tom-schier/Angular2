import { provideRouter, RouterConfig } from '@angular/router';
import {FlightPlanningComponent}   from '../planning/flightplanning.component';
import {AircraftDetailsComponent} from '../aircraft/aircraft-detail.component';
import {MapContainer} from '../planning/mapcontainer.component';

const routes: RouterConfig = [
    { path: 'FlightPlanning', component: FlightPlanningComponent },
    { path: 'AircraftDetails', component: AircraftDetailsComponent },
    { path: 'MapContainer', component: MapContainer }
];

export const appRouterProviders = [
    provideRouter(routes)
];
