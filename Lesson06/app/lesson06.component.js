System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Lesson06;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Lesson06 = (function () {
                function Lesson06() {
                    console.log('Creating Lesson06');
                }
                Lesson06.prototype.ngOnInit = function () {
                    console.log('Initialising Lesson06');
                    this.myTextClass = "bg-success";
                    this.myIconClass = "glyphicon glyphicon-envelope";
                    this.myButtonClass = "btn btn-default";
                };
                Lesson06.prototype.onClickText = function () {
                    this.myTextClass = this.toggleClass(this.myTextClass, "bg-success", "bg-danger");
                };
                Lesson06.prototype.onClickIcon = function () {
                    this.myIconClass = this.toggleClass(this.myIconClass, "glyphicon glyphicon-envelope", "glyphicon glyphicon-print");
                };
                Lesson06.prototype.onClickBtn = function () {
                    this.myButtonClass = this.toggleClass(this.myButtonClass, "btn btn-info", "btn btn-default");
                };
                Lesson06.prototype.toggleClass = function (c0, c1, c2) {
                    if (c0 == c1)
                        return c2;
                    if (c0 == c2)
                        return c1;
                    else
                        return c0;
                };
                Lesson06 = __decorate([
                    core_1.Component({
                        selector: 'lesson-06',
                        templateUrl: './views/extendclass.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Lesson06);
                return Lesson06;
            }());
            exports_1("Lesson06", Lesson06);
        }
    }
});
//# sourceMappingURL=lesson06.component.js.map