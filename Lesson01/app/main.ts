import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Lesson01 } from './lesson01.component';


@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [
        Lesson01
    ],
    bootstrap: [Lesson01]
})
export class Lesson01Module { }

platformBrowserDynamic().bootstrapModule(Lesson01Module);

