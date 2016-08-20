import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson04} from './lesson04.component';
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
        Lesson04
    ],
    bootstrap: [Lesson04]
})
export class Lesson04Module { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(Lesson04Module);

