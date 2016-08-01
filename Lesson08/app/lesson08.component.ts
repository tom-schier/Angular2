import {Component, Input, ViewContainerRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'lesson08',
    templateUrl: './views/boot-modal.html',
    directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [BS_VIEW_PROVIDERS],
})
export class Lesson08 {

    constructor(public viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}