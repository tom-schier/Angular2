"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var grandchild_component_1 = require('./grandchild.component');
var Child = (function () {
    function Child() {
        this.msgFromGrandchild = new core_1.EventEmitter();
    }
    Child.prototype.handleMyEvent = function (evt) {
        this.msgFromGrandchild.next(evt);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Child.prototype, "msgFromParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Child.prototype, "msgFromGrandchild", void 0);
    Child = __decorate([
        core_1.Component({
            selector: 'child',
            directives: [grandchild_component_1.GrandChild],
            template: "<h3>This is child</h3>\n               <div style=\"width:300\">Message from parent:</div><input type=\"text\" [ngModel]=\"msgFromParent\" readonly=\"true\" style=\"width:500;background-color: lightgrey\"><br>\n               <div><grand-child [msgFromParent]=\"msgFromParent\"  (msgPassthrough)=\"handleMyEvent($event)\"></grand-child></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Child);
    return Child;
}());
exports.Child = Child;
//# sourceMappingURL=child.component.js.map