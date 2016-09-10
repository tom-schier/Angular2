import {Lesson07} from './lesson07.component';
//import {bootstrap}    from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    declarations: [
        Lesson07
    ],
    bootstrap: [Lesson07]
})
export class Lesson07Module { }

