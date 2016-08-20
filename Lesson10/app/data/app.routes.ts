import { Routes, RouterModule } from '@angular/router';
import {FlightPlanningComponent}   from '../planning/flightplanning.component';
import {AircraftDetailsComponent} from '../aircraft/aircraft-detail.component';
import {MapContainer} from '../planning/mapcontainer.component';

const appRoutes: Routes = [
    { path: 'FlightPlanning', component: FlightPlanningComponent },
    { path: 'AircraftDetails', component: AircraftDetailsComponent },
    { path: 'MapContainer', component: MapContainer },
    { path: '**', component: AircraftDetailsComponent }
];

export const appRoutingProviders : any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

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
