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
var test_service_1 = require('./test.service');
var ListB = (function () {
    function ListB(_svc) {
        this._svc = _svc;
        console.log('Creating ListB');
    }
    ListB.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Initialising ListB');
        this._stB = this._svc._msg;
        this._svc.obMessageChange$.subscribe(function (msg) {
            _this.updateMessage(msg);
        });
    };
    ListB.prototype.updateMessage = function (msg) {
        this._stB = msg;
    };
    ListB = __decorate([
        core_1.Component({
            selector: 'list-b',
            templateUrl: './views/listB.html'
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService])
    ], ListB);
    return ListB;
}());
exports.ListB = ListB;
//# sourceMappingURL=ListB.js.map