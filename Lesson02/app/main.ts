import {platformBrowserDynamic}    from '@angular/platform-browser-dynamic';
import {Lesson02} from './lesson02.component';
import {Parent} from "./parent.component";
import {Child} from "./child.component";
import {GrandChild} from "./grandchild.component";
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
        Lesson02,
        Parent,
        Child,
        GrandChild
    ],
    bootstrap: [Lesson02]
})
export class Lesson02Module { }

platformBrowserDynamic().bootstrapModule(Lesson02Module);
