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
var Subject_1 = require('rxjs/Subject');
var TestService = (function () {
    function TestService() {
        // Observable string sources
        this.obMessage = new Subject_1.Subject();
        // Observable string streams
        this.obMessageChange$ = this.obMessage.asObservable();
        console.log('Creating TestService');
    }
    TestService.prototype.ngOnInit = function () {
        console.log('Initialising TestService');
        this._msg = "Initialised in TestService constructor";
    };
    TestService.prototype.setMessage = function (msg) {
        this._msg = msg;
        this.obMessage.next(this._msg);
    };
    TestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map