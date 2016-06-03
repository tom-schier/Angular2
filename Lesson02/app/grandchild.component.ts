import {Component, Output, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'grand-child',
    template: `<h3>This is a grand child</h3>
                <div style="width:300">Message from parent:</div><input type="text" [ngModel]="msgFromParent" readonly="true" style="width:500;background-color: lightgrey"><br>
                <div style="width:300;color: red">Message to parent:</div><input type="text" [(ngModel)]="msg" (keyup)="sendMsg()" style="width:500;color: red"><br>`
})
export class GrandChild {

    @Output() msgPassthrough: EventEmitter<string> = new EventEmitter();
    @Input() msgFromParent: string;
    msg: string;

    sendMsg() {
       this.msgPassthrough.next(this.msg);
    }
}