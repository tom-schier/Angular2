import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson05} from './lesson05.component';
import { routing, appRoutingProviders } from './app.routes';
import {ListA}  from './ListA';
import {ListB}  from './ListB';
import { TestService }    from './test.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [appRoutingProviders, TestService],
    declarations: [ListA, ListB, Lesson05],
    bootstrap: [Lesson05]
})
export class Lesson05Module { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(Lesson05Module);


