
import {Lesson06} from './lesson06.component';
import {provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        Lesson06
    ],
    bootstrap: [Lesson06]
})
export class Lesson06Module { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(Lesson06Module);

