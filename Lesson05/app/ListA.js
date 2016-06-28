System.register(['angular2/core', './test.service'], function(exports_1, context_1) {
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
    var core_1, test_service_1;
    var ListA;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            }],
        execute: function() {
            ListA = (function () {
                function ListA(_svc) {
                    this._svc = _svc;
                    console.log('Creating ListA');
                }
                ListA.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Initialising ListA');
                    this._stA = this._svc._msg;
                    this._svc.obMessageChange$.subscribe(function (msg) {
                        _this.updateMessage(msg);
                    });
                };
                ListA.prototype.updateMessage = function (msg) {
                    this._stA = msg;
                };
                ListA = __decorate([
                    core_1.Component({
                        selector: 'list-a',
                        templateUrl: './views/listA.html'
                    }), 
                    __metadata('design:paramtypes', [test_service_1.TestService])
                ], ListA);
                return ListA;
            }());
            exports_1("ListA", ListA);
        }
    }
});
//# sourceMappingURL=ListA.js.map