//import { Routes, RouterModule } from '@angular/router';
import {FlightPlanningComponent}   from '../planning/flightplanning.component';
import {AircraftDetailsComponent} from '../aircraft/aircraft-detail.component';
import {MapContainer} from '../planning/mapcontainer.component';

//const appRoutes: Routes = [
//    { path: 'FlightPlanning', component: FlightPlanningComponent },
//    { path: 'AircraftDetails', component: AircraftDetailsComponent },
//    { path: 'MapContainer', component: MapContainer },
//    { path: '**', component: AircraftDetailsComponent }
//];

//export const appRoutingProviders : any[] = [];

//export const routing = RouterModule.forRoot(appRoutes);

//import {ListB} from './ListB';
//import {ListA} from './ListA';
//import { Routes, RouterModule } from '@angular/router';

//const appRoutes: Routes = [
//    { path: 'ListA', component: ListA },
//    { path: 'ListB', component: ListB },
//    { path: '', component: ListA }];
//export const appRoutingProviders: any[] = [
//];
//export const routing = RouterModule.forRoot(appRoutes);

//import { provideRouter, RouterConfig } from '@angular/router';
//import { PeopleListComponent } from './people-list.component';
//import { PersonDetailsComponent } from './person-details.component';

// Route config let's you map routes to components
// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
//import { Routes, RouterModule } from '@angular/router';

//import { PeopleListComponent } from './people-list.component';
//import { PersonDetailsComponent } from './person-details.component';

//import {AircraftDetailsComponent} from './aircraft/aircraft-detail.component';
//import {FlightPlanningComponent} from './planning/flightplanning.component';
//import {MapContainer} from './planning/mapcontainer.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'FlightPlanning', component: FlightPlanningComponent },
    { path: 'AircraftDetails', component: AircraftDetailsComponent },
    { path: 'MapContainer', component: MapContainer },
    { path: '**', component: AircraftDetailsComponent },
    { path: '', component: AircraftDetailsComponent }];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);

// - Updated Export

