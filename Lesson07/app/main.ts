import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Lesson07} from './lesson07.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        Lesson07
    ],
    bootstrap: [Lesson07]
})
export class AppModule { }

//bootstrap(Lesson07);
