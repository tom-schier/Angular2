import {Component,Input, Output, EventEmitter} from '@angular/core';
import {GrandChild} from './grandchild.component';

@Component({
    selector: 'child',
    directives: [GrandChild],
    template: `<h3>This is child</h3>
               <div style="width:300">Message from parent:</div><input type="text" [ngModel]="msgFromParent" readonly="true" style="width:500;background-color: lightgrey"><br>
               <div><grand-child [msgFromParent]="msgFromParent"  (msgPassthrough)="handleMyEvent($event)"></grand-child></div>`
})
export class Child {

    @Input() msgFromParent: string;
    @Output() msgFromGrandchild: EventEmitter<string> = new EventEmitter<string>();

    handleMyEvent(evt) {
        this.msgFromGrandchild.next(evt);
    }
}