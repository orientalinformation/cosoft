webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/views/profile/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  layout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/views/profile/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/profile/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/views/profile/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/profile/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userreferences_userreferences_component__ = __webpack_require__("../../../../../src/app/views/profile/userreferences/userreferences.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__userreferences_userreferences_component__["a" /* UserreferencesComponent */],
        children: [
            {
                path: '',
                redirectTo: 'userreferences',
                pathMatch: 'full',
            },
            {
                path: 'userreferences',
                component: __WEBPACK_IMPORTED_MODULE_2__userreferences_userreferences_component__["a" /* UserreferencesComponent */]
            },
        ]
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_routing_module__ = __webpack_require__("../../../../../src/app/views/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/profile/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userreferences_userreferences_component__ = __webpack_require__("../../../../../src/app/views/profile/userreferences/userreferences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["d" /* ModalModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__layout_layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__userreferences_userreferences_component__["a" /* UserreferencesComponent */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/profile/userreferences/userreferences.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px;\" *ngIf=\"!isLoading\">\n  <div class=\"card product-container\">\n    <div class=\"card-header\">\n      \n      <button type=\"button\" class=\"btn btn-sm btn-success float-right\" (click)=\"saveUnits()\" [ladda]=\"isSave\">\n        <i class=\"fa fa-floppy-o\"></i> {{'Save'|translate}}\n      </button>\n      <button type=\"button\" class=\"btn btn-sm btn-danger float-right\" style=\"margin-right: 10px;\" (click)=\"modalChangePassword.show()\">\n          <i class=\"fa fa-lock\"></i> {{'Change password'|translate}}\n        </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h6 class=\"card-title\"><strong>{{ 'Language and monetary units'|translate }}</strong></h6>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Language'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listLang\">\n                  <select class=\"form-control form-control-sm\" [(ngModel)]=\"langue.langId\">\n                    <option *ngFor=\"let lang of listLang\" [value]=\"lang.ID_TRANSLATION\">{{ lang.LABEL }}</option>\n                  </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Monetary'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listMonetary\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"langue.monetaryId\">\n                  <option *ngFor=\"let money of listMonetary\" [value]=\"money.ID_MONETARY_CURRENCY\"> {{ money.MONEY_TEXT }}\n                  ( <span [innerHTML]=\"money.MONEY_SYMB\"></span>)</option>\n                </select>\n              </div>\n          </div>\n          <h6 class=\"card-title\"><strong>{{ 'Default selection for equipment page'|translate }}</strong></h6>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Type of Refrigeration\t'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listEnergies\">\n                  <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.energyId\" (change)=\"select_energy()\">\n                    <option value=\"-1\">{{ 'All'|translate }}</option>\n                    <option *ngFor=\"let ener of listEnergies\" [value]=\"ener.ID_COOLING_FAMILY\">{{ ener.LABEL }}</option>\n                  </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Manufacturer'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listConstructors\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.construct\" (change)=\"select_manufacturer()\">\n                  <option value=\"\">{{ 'All'|translate }}</option>\n                  <option *ngFor=\"let cons of listConstructors\" [value]=\"cons.CONSTRUCTOR\">{{ cons.CONSTRUCTOR }}</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Equipment Series'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listFamilies\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.familyId\" (change)=\"select_family()\">\n                  <option value=\"-1\">{{ 'All'|translate }}</option>\n                  <option *ngFor=\"let fam of listFamilies\" [value]=\"fam.ID_FAMILY\">{{ fam.LABEL }}</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Equipment origin'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listOrigines\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.stdId\" (change)=\"select_origin()\">\n                    <option value=\"-1\">{{ 'All'|translate }}</option>\n                    <option *ngFor=\"let ori of listOrigines\" [value]=\"ori.STD\">{{ ori.LABEL }}</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Process type'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listProcess\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.batchProcess\" (change)=\"select_process_type()\">\n                    <option value=\"-1\">{{ 'All'|translate }}</option>\n                    <option *ngFor=\"let pro of listProcess\" [value]=\"pro.BATCH_PROCESS\">{{ pro.LABEL }}</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{ 'Model'|translate }}</label>\n              <div class=\"col-md-8\" *ngIf=\"listModels\">\n                <select class=\"form-control form-control-sm\" [(ngModel)]=\"defaultEquip.equipseriesId\">\n                    <option value=\"-1\">{{ 'All'|translate }}</option>\n                    <option *ngFor=\"let model of listModels\" [value]=\"model.ID_EQUIPSERIES\">{{ model.LABEL }}</option>\n                </select>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <h6 class=\"card-title\"><strong>{{ 'UNITS'|translate }}</strong></h6>\n            <table class=\"table table-hover table-sm mb-0 \" >\n              <thead>\n                <tr>\n                    <th style=\"vertical-align:middle;text-align:center\" width=\"50%\">{{ 'Type'|translate }}</th>\n                    <th style=\"vertical-align:middle;text-align:center\" width=\"50%\">{{ 'Symbol'|translate }}</th>\n                </tr>\n              </thead>\n              \n                  <tbody>\n                    <td colspan=\"2\">\n                      \n                        <perfect-scrollbar style=\"max-height: 360px;\">\n                            <table *ngIf=\"listUnits\">\n                                <tr *ngFor=\"let unit of listUnits\">\n                                    <td width=\"50%\">{{ unit.nameLabel | translate }}</td>\n                                    <td align=\"center\" width=\"20%\">\n                                        <div *ngIf=\"unit.listSymbol\">\n                                            <select class=\"form-control form-control-sm\" [(ngModel)]=\"unit.ID_UNIT\">\n                                              <option *ngFor=\"let symbol of unit.listSymbol\" value=\"{{ symbol.ID_UNIT }}\">{{ symbol.SYMBOL }}</option>\n                                            </select>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </table>\n                          </perfect-scrollbar>\n                      </td>\n                    \n                  </tbody>\n              \n              \n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal -->\n<div bsModal class=\"modal fade\" #modalChangePassword=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header \">\n              <strong>{{ 'Change password'|translate }}</strong>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalChangePassword.hide()\">\n                  <span aria-hidden=\"true\">×</span>\n              </button>\n          </div>\n          <div class=\"modal-body row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group row\">\n                    <label class=\"col-md-3 col-form-label\" for=\"text-input\"><b>{{ 'Old password'|translate }}</b></label>\n                    <div class=\"col-md-7\">\n                        <input type=\"password\" [(ngModel)]=\"pass.oldPass\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-md-3 col-form-label\" for=\"text-input\"><b>{{ 'New password'|translate }}</b></label>\n                    <div class=\"col-md-7\">\n                        <input type=\"password\" [(ngModel)]=\"pass.newPass\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-md-3 col-form-label\" for=\"text-input\"><b>{{ 'Confirm password'|translate }}</b></label>\n                    <div class=\"col-md-7\">\n                        <input type=\"password\" [(ngModel)]=\"pass.confPass\" class=\"form-control\">\n                    </div>\n                </div>\n              </div>\n          </div>\n          <div class=\"modal-footer\">\n              <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalChangePassword.hide()\">{{ 'Cancel'|translate }}</button>\n              <button class=\"btn btn-success\" (click)=\"changePassword()\" [ladda]=\"isChange\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n          </div>\n      </div>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/profile/userreferences/userreferences.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/profile/userreferences/userreferences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserreferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_text_service__ = __webpack_require__("../../../../../src/app/shared/text.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_models__ = __webpack_require__("../../../../../src/app/api/models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserreferencesComponent = (function () {
    function UserreferencesComponent(profileService, toastr, router, api, translate, text) {
        this.profileService = profileService;
        this.toastr = toastr;
        this.router = router;
        this.api = api;
        this.translate = translate;
        this.text = text;
        this.isLoading = false;
        this.isChange = false;
        this.isSave = false;
        this.pass = {
            oldPass: '',
            newPass: '',
            confPass: ''
        };
        this.userLogon = JSON.parse(localStorage.getItem('user'));
        this.langue = new __WEBPACK_IMPORTED_MODULE_8__api_models__["d" /* Langue */]();
        this.defaultEquip = new __WEBPACK_IMPORTED_MODULE_8__api_models__["a" /* DefaultEquipment */]();
    }
    UserreferencesComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.langue.langId = this.userLogon.CODE_LANGUE;
        this.langue.monetaryId = this.userLogon.ID_MONETARY_CURRENCY;
        this.defaultEquip.energyId = this.userLogon.USER_ENERGY;
        this.defaultEquip.construct = this.userLogon.USER_CONSTRUCTOR;
        this.defaultEquip.familyId = this.userLogon.USER_FAMILY;
        this.defaultEquip.stdId = this.userLogon.USER_ORIGINE;
        this.defaultEquip.batchProcess = this.userLogon.USER_PROCESS;
        this.defaultEquip.equipseriesId = this.userLogon.USER_MODEL;
    };
    UserreferencesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isLoading = true;
        var params = {
            energy: this.defaultEquip.energyId,
            manufacturer: this.defaultEquip.construct,
            sery: this.defaultEquip.familyId,
            origin: this.defaultEquip.stdId,
            process: this.defaultEquip.batchProcess,
            model: this.defaultEquip.equipseriesId
        };
        this.api.getSelectionCriteriaFilter(params).subscribe(function (data) {
            _this.listEnergies = data.energies;
            _this.listConstructors = data.manufacturer;
            _this.listFamilies = data.series;
            _this.listOrigines = data.origines;
            _this.listProcess = data.processes;
            _this.listModels = data.model;
        });
        this.refrestListUnits();
        this.refrestListLang();
        this.refrestListMonetary();
    };
    UserreferencesComponent.prototype.select_energy = function () {
        this.defaultEquip.construct = '';
        this.defaultEquip.familyId = -1;
        this.defaultEquip.stdId = -1;
        this.defaultEquip.batchProcess = -1;
        this.defaultEquip.equipseriesId = -1;
        this.loadFilter();
    };
    UserreferencesComponent.prototype.select_manufacturer = function () {
        this.defaultEquip.familyId = -1;
        this.defaultEquip.stdId = -1;
        this.defaultEquip.batchProcess = -1;
        this.defaultEquip.equipseriesId = -1;
        this.loadFilter();
    };
    UserreferencesComponent.prototype.select_family = function () {
        this.defaultEquip.stdId = -1;
        this.defaultEquip.batchProcess = -1;
        this.defaultEquip.equipseriesId = -1;
        this.loadFilter();
    };
    UserreferencesComponent.prototype.select_origin = function () {
        this.defaultEquip.batchProcess = -1;
        this.defaultEquip.equipseriesId = -1;
        this.loadFilter();
    };
    UserreferencesComponent.prototype.select_process_type = function () {
        this.defaultEquip.equipseriesId = -1;
        this.loadFilter();
    };
    UserreferencesComponent.prototype.loadFilter = function () {
        var _this = this;
        var params = {
            energy: this.defaultEquip.energyId,
            manufacturer: this.defaultEquip.construct,
            sery: this.defaultEquip.familyId,
            origin: this.defaultEquip.stdId,
            process: this.defaultEquip.batchProcess,
            model: this.defaultEquip.equipseriesId
        };
        console.log(params);
        this.api.getSelectionCriteriaFilter(params).subscribe(function (data) {
            _this.listEnergies = data.energies;
            _this.listConstructors = data.manufacturer;
            _this.listFamilies = data.series;
            _this.listOrigines = data.origines;
            _this.listProcess = data.processes;
            _this.listModels = data.model;
        });
    };
    UserreferencesComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.pass.oldPass === '' || this.pass.oldPass === undefined) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please specify old password !'), 'warning');
            return;
        }
        if (this.pass.oldPass.length < 5 || this.pass.oldPass.length > 30) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please old password ( 5 : 30 )'), 'warning');
            return;
        }
        if (this.pass.newPass === '' || this.pass.newPass === undefined) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please specify new password !'), 'warning');
            return;
        }
        if (this.pass.newPass.length < 5 || this.pass.newPass.length > 30) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please new password ( 5 : 30 )'), 'warning');
            return;
        }
        if (this.pass.confPass === '' || this.pass.confPass === undefined) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please specify confirm password !'), 'warning');
            return;
        }
        if (this.pass.confPass.length < 5 || this.pass.confPass.length > 30) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Please confirm password ( 5 : 30 )'), 'warning');
            return;
        }
        if (this.pass.newPass !== this.pass.confPass) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', this.translate.instant('Password was different to the confirm password!'), 'warning');
            return;
        }
        var body = {
            oldPass: this.pass.oldPass,
            newPass: this.pass.newPass
        };
        this.isChange = true;
        this.profileService.changePassword({
            id: this.userLogon.ID_USER,
            body: body
        }).subscribe(function (response) {
            var success = true;
            if (response === -1) {
                success = false;
            }
            if (success) {
                _this.modalChangePassword.hide();
                _this.toastr.success(_this.translate.instant('Change password'), 'successfully');
                _this.router.navigate(['/auth/signin']);
                _this.pass = {
                    oldPass: '',
                    newPass: '',
                    confPass: ''
                };
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Warning', _this.translate.instant('Change password error!'), 'error');
            }
            _this.isChange = false;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListEnergies = function () {
        var _this = this;
        this.profileService.getEnergies()
            .subscribe(function (data) {
            _this.listEnergies = data;
            // console.log(data);
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListConstructors = function () {
        var _this = this;
        this.profileService.getConstructors()
            .subscribe(function (data) {
            _this.listConstructors = data;
            // console.log(data);
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListFamilies = function () {
        var _this = this;
        var dataSend = {
            idCooling: 0,
            manufacturerLabel: ''
        };
        this.profileService.getFamilies(dataSend)
            .subscribe(function (data) {
            _this.listFamilies = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListOrigines = function () {
        var _this = this;
        var dataSend = {
            idCooling: 0,
            manufacturerLabel: '',
            idFamily: 0
        };
        this.profileService.getOrigines(dataSend)
            .subscribe(function (data) {
            _this.listOrigines = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListProcessType = function () {
        var _this = this;
        var dataSend = {
            idCooling: 0,
            manufacturerLabel: '',
            idFamily: 0,
            idStd: 0
        };
        this.profileService.getProcesses(dataSend)
            .subscribe(function (data) {
            _this.listProcess = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListModels = function () {
        var _this = this;
        var dataSend = {
            idCooling: 0,
            manufacturerLabel: '',
            idFamily: 0,
            idStd: 0,
            idProcess: 0
        };
        this.profileService.getModels(dataSend)
            .subscribe(function (data) {
            _this.listModels = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListLang = function () {
        var _this = this;
        this.profileService.getLangue()
            .subscribe(function (data) {
            _this.listLang = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListMonetary = function () {
        var _this = this;
        this.profileService.getMonetary()
            .subscribe(function (data) {
            _this.listMonetary = data;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.refrestListUnits = function () {
        var _this = this;
        this.profileService.getUnits(this.userLogon.ID_USER)
            .subscribe(function (data) {
            _this.listUnits = data;
            _this.processNameUnits(_this.listUnits);
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    UserreferencesComponent.prototype.processNameUnits = function (res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].TYPE_UNIT === 1) {
                res[i].nameLabel = this.translate.instant('Fluid flow');
            }
            if (res[i].TYPE_UNIT === 2) {
                res[i].nameLabel = this.translate.instant('Product flow');
            }
            if (res[i].TYPE_UNIT === 3) {
                res[i].nameLabel = this.translate.instant('Length');
            }
            if (res[i].TYPE_UNIT === 4) {
                res[i].nameLabel = this.translate.instant('Mass');
            }
            if (res[i].TYPE_UNIT === 5) {
                res[i].nameLabel = this.translate.instant('Time');
            }
            if (res[i].TYPE_UNIT === 6) {
                res[i].nameLabel = this.translate.instant('Specific Heat');
            }
            if (res[i].TYPE_UNIT === 7) {
                res[i].nameLabel = this.translate.instant('Density');
            }
            if (res[i].TYPE_UNIT === 8) {
                res[i].nameLabel = this.translate.instant('Temperature');
            }
            if (res[i].TYPE_UNIT === 9) {
                res[i].nameLabel = this.translate.instant('Enthalpy');
            }
            if (res[i].TYPE_UNIT === 10) {
                res[i].nameLabel = this.translate.instant('Conductivity');
            }
            if (res[i].TYPE_UNIT === 11) {
                res[i].nameLabel = this.translate.instant('Losses in get cold (Line)');
            }
            if (res[i].TYPE_UNIT === 12) {
                res[i].nameLabel = this.translate.instant('Permanent Heat losses (Line)');
            }
            if (res[i].TYPE_UNIT === 13) {
                res[i].nameLabel = this.translate.instant('Convection speed');
            }
            if (res[i].TYPE_UNIT === 14) {
                res[i].nameLabel = this.translate.instant('Convection coef');
            }
            if (res[i].TYPE_UNIT === 15) {
                res[i].nameLabel = this.translate.instant('Pressure');
            }
            if (res[i].TYPE_UNIT === 16) {
                res[i].nameLabel = this.translate.instant('Thickness packing');
            }
            if (res[i].TYPE_UNIT === 17) {
                res[i].nameLabel = this.translate.instant('Line');
            }
            if (res[i].TYPE_UNIT === 18) {
                res[i].nameLabel = this.translate.instant('LN2 tank capacity');
            }
            if (res[i].TYPE_UNIT === 19) {
                res[i].nameLabel = this.translate.instant('Product dimension');
            }
            if (res[i].TYPE_UNIT === 20) {
                res[i].nameLabel = this.translate.instant('Mesh cut');
            }
            if (res[i].TYPE_UNIT === 21) {
                res[i].nameLabel = this.translate.instant('Equipment dimension');
            }
            if (res[i].TYPE_UNIT === 22) {
                res[i].nameLabel = this.translate.instant('Carpet/Sieve width');
            }
            if (res[i].TYPE_UNIT === 23) {
                res[i].nameLabel = this.translate.instant('Slopes position');
            }
            if (res[i].TYPE_UNIT === 24) {
                res[i].nameLabel = this.translate.instant('Material Rise');
            }
            if (res[i].TYPE_UNIT === 25) {
                res[i].nameLabel = this.translate.instant('CO2 tank capacity');
            }
            if (res[i].TYPE_UNIT === 26) {
                res[i].nameLabel = this.translate.instant('Evaporation');
            }
            if (res[i].TYPE_UNIT === 28) {
                res[i].nameLabel = this.translate.instant('Consumption unit');
            }
            if (res[i].TYPE_UNIT === 29) {
                res[i].nameLabel = this.translate.instant('Consumption unit (LN2)');
            }
            if (res[i].TYPE_UNIT === 30) {
                res[i].nameLabel = this.translate.instant('Consumption unit (CO2)');
            }
            if (res[i].TYPE_UNIT === 31) {
                res[i].nameLabel = this.translate.instant('Heat losses per hour');
            }
            if (res[i].TYPE_UNIT === 32) {
                res[i].nameLabel = this.translate.instant('Heat losses per hour (LN2)');
            }
            if (res[i].TYPE_UNIT === 33) {
                res[i].nameLabel = this.translate.instant('Heat losses per hour (CO2)');
            }
            if (res[i].TYPE_UNIT === 34) {
                res[i].nameLabel = this.translate.instant('Cooldown');
            }
            if (res[i].TYPE_UNIT === 35) {
                res[i].nameLabel = this.translate.instant('Cooldown (LN2)');
            }
            if (res[i].TYPE_UNIT === 36) {
                res[i].nameLabel = this.translate.instant('Cooldown (CO2)');
            }
            if (res[i].TYPE_UNIT === 37) {
                res[i].nameLabel = this.translate.instant('unit of mass (consumption)');
            }
            if (res[i].TYPE_UNIT === 38) {
                res[i].nameLabel = this.translate.instant('Product dimension - product chart');
            }
        }
    };
    UserreferencesComponent.prototype.saveUnits = function () {
        var _this = this;
        var profile = {
            'Langue': this.langue,
            'DefaultEquipment': this.defaultEquip,
            'Units': this.listUnits
        };
        this.isSave = true;
        this.profileService.updateUnits({
            id: this.userLogon.ID_USER,
            body: profile
        }).subscribe(function (data) {
            localStorage.setItem('UnitUser', JSON.stringify(data));
            _this.toastr.success(_this.translate.instant('Update profile'), 'successfully');
            _this.router.navigate(['/profile/userreferences']);
            _this.refrestUser();
            _this.isSave = false;
            _this.profileService.getMonetaryUser(_this.userLogon.ID_USER).subscribe(function (res) {
                localStorage.setItem('MoneratyUser', JSON.stringify(res));
                if (_this.isSave === false) {
                    location.reload();
                }
            });
        }, function (err) {
            console.log(err);
            _this.isSave = false;
        }, function () {
            _this.isSave = false;
        });
    };
    UserreferencesComponent.prototype.refrestUser = function () {
        var _this = this;
        this.api.getUser(this.userLogon.ID_USER).subscribe(function (data) {
            _this.userLogon = data;
            localStorage.setItem('user', JSON.stringify(data));
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalChangePassword'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], UserreferencesComponent.prototype, "modalChangePassword", void 0);
    UserreferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userreferences',
            template: __webpack_require__("../../../../../src/app/views/profile/userreferences/userreferences.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/profile/userreferences/userreferences.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__api_services__["d" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_7__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__shared_text_service__["a" /* TextService */]])
    ], UserreferencesComponent);
    return UserreferencesComponent;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map