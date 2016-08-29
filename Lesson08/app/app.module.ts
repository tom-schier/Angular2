import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Lesson08 } from './lesson08.component';
import {LocationService} from './location.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [Lesson08],
    providers: [LocationService],
    bootstrap: [Lesson08]
})
export class Lesson08Module { }
