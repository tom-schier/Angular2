import {Component} from '@angular/core';
import {Parent} from './parent.component';

@Component({
    selector: 'lesson-02',
    //directives: [Parent],
    template: '<h1>This is Lesson-02</h1><div><parent></parent></div>'
})
export class Lesson02 { }
