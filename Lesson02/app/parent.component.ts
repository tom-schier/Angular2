import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Child} from './child.component';

@Component({
    selector: 'parent',
    directives: [Child],
    template: `
                <h3 (click)="sendMsgToDecendants()" style="width:300">This is Parent</h3>
                    <div style="width:300;color: red">Message to all descendants:</div><input type="text" [(ngModel)]="msgFromParent" style="width:500;color: red" ><br>
                    <div style="width:300">Message from grand child:</div> <input type="text" [(ngModel)]="msgFromGrandChild" style="width:500;background-color: lightgrey" readonly="true" ><br>
                <div><child [msgFromParent]="msgFromParent" (msgFromGrandchild)="handleChildEvent($event)" ></child></div> `
})
export class Parent {
    msgFromGrandChild: string;
    msgFromParent: string;

    handleChildEvent(evt) {
        this.msgFromGrandChild = evt;
    }
}