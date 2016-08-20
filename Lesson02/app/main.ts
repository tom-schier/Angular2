import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson02} from './lesson02.component';
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
        Lesson02
    ],
    bootstrap: [Lesson02]
})
export class Lesson02Module { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(Lesson02Module);
