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
        this.submitted = false;
        this.events = []; // use to publish for m changes
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
            speed: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(3), forms_1.Validators.pattern("^[0-9][0-9][0-9]$")]),
            direction: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[0-3][0-9][0-9]$")]),
            altitude: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.subcribeToChanges();
    };
    Lesson07.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Lesson07.prototype.subcribeToChanges = function () {
        var _this = this;
        // initialize stream
        var myFormValueChanges$ = this.windForm.valueChanges;
        // subscribe to the stream 
        myFormValueChanges$.subscribe(function (x) { return _this.events
            .push({
            event: 'SOME EVENT', object: x
        }); });
    };
    Lesson07.prototype.save = function (model, isValid) {
        this.submitted = true; // set form submit to true
        if (isValid)
            this.model = model;
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
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