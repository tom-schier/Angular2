System.register(['angular2/core', './child.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_component_1;
    var Parent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            Parent = (function () {
                function Parent() {
                }
                Parent.prototype.handleChildEvent = function (evt) {
                    this.msgFromGrandChild = evt;
                };
                Parent = __decorate([
                    core_1.Component({
                        selector: 'parent',
                        directives: [child_component_1.Child],
                        template: "\n                <h3 (click)=\"sendMsgToDecendants()\" style=\"width:300\">This is Parent</h3>\n                    <div style=\"width:300;color: red\">Message to all descendants:</div><input type=\"text\" [(ngModel)]=\"msgFromParent\" style=\"width:500;color: red\" ><br>\n                    <div style=\"width:300\">Message from grand child:</div> <input type=\"text\" [(ngModel)]=\"msgFromGrandChild\" style=\"width:500;background-color: lightgrey\" readonly=\"true\" ><br>\n                <div><child [msgFromParent]=\"msgFromParent\" (msgFromGrandchild)=\"handleChildEvent($event)\" ></child></div> "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Parent);
                return Parent;
            }());
            exports_1("Parent", Parent);
        }
    }
});
//# sourceMappingURL=parent.component.js.map