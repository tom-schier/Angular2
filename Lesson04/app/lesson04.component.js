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
var Lesson04 = (function () {
    function Lesson04() {
        console.log('Creating Lesson04');
    }
    Lesson04.prototype.ngOnInit = function () {
        console.log('Initialising Lesson04');
        this.myTextClass = "bg-success";
        this.myIconClass = "glyphicon glyphicon-envelope";
        this.myButtonClass = "btn btn-default";
    };
    Lesson04.prototype.onClickText = function () {
        this.myTextClass = this.toggleClass(this.myTextClass, "bg-success", "bg-danger");
    };
    Lesson04.prototype.onClickIcon = function () {
        this.myIconClass = this.toggleClass(this.myIconClass, "glyphicon glyphicon-envelope", "glyphicon glyphicon-print");
    };
    Lesson04.prototype.onClickBtn = function () {
        this.myButtonClass = this.toggleClass(this.myButtonClass, "btn btn-info", "btn btn-default");
    };
    Lesson04.prototype.toggleClass = function (c0, c1, c2) {
        if (c0 == c1)
            return c2;
        if (c0 == c2)
            return c1;
        else
            return c0;
    };
    Lesson04 = __decorate([
        core_1.Component({
            selector: 'lesson-04',
            templateUrl: './views/templates.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson04);
    return Lesson04;
}());
exports.Lesson04 = Lesson04;
//# sourceMappingURL=lesson04.component.js.map