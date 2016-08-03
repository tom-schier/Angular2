import { provideRouter, RouterConfig } from '@angular/router';
import {ListB} from './ListB';
import {ListA} from './ListA';

const routes: RouterConfig = [
    { path: 'ListA', component: ListA },
    { path: 'ListB', component: ListB }
];
export const appRouterProviders = [
    provideRouter(routes)
];
