import {platformBrowserDynamic}    from '@angular/platform-browser-dynamic';
import {Lesson03} from './lesson03.component';
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
        Lesson03
    ],
    bootstrap: [Lesson03]
})
export class Lesson03Module { }

platformBrowserDynamic().bootstrapModule(Lesson03Module);
