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
var forms_1 = require('@angular/forms');
var Wind = (function () {
    function Wind(id, speed, altitude, direction) {
        this.id = id;
        this.speed = speed;
        this.altitude = altitude;
        this.direction = direction;
    }
    return Wind;
}());
exports.Wind = Wind;
;
var Lesson07 = (function () {
    function Lesson07() {
        //this.speedControl = new FormControl("speed");
        //this.dirControl = new FormControl("direction");
        //this.altControl = new FormControl("altitude");
        this.submitted = false;
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
        //let windForm = new FormGroup({
        //    speedControl: new FormControl("speed"),
        //    dirControl: new FormControl("direction"),
        //    altControl: new FormControl("altitude"),
        //});
        this.altList = new Array();
        this.altList.push('A020');
        this.altList.push('A030');
        this.altList.push('A040');
        this.altList.push('A050');
        this.altList.push('A060');
        this.altList.push('A070');
        this.altList.push('A080');
    }
    Lesson07.prototype.ngOnInit = function () {
        this.model = new Wind(0, 0, this.altList[0], 0);
        this.windForm = new forms_1.FormGroup({
            speed: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(3)]),
            direction: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            altitude: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    Lesson07.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Lesson07.prototype.save = function (model, isValid) {
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    };
    Lesson07.prototype.newWind = function () {
        var _this = this;
        this.model = new Wind(0, 0, this.altList[0], 0);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Lesson07 = __decorate([
        core_1.Component({
            selector: 'lesson-07',
            templateUrl: './views/lesson07.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson07);
    return Lesson07;
}());
exports.Lesson07 = Lesson07;
//# sourceMappingURL=lesson07.component.js.map