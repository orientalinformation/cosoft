webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/views/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__("../../../../../src/app/views/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_units_component__ = __webpack_require__("../../../../../src/app/views/admin/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_translations_component__ = __webpack_require__("../../../../../src/app/views/admin/translations/translations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full',
            },
            {
                path: 'users',
                component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["c" /* UsersComponent */]
            },
            {
                path: 'units',
                component: __WEBPACK_IMPORTED_MODULE_3__units_units_component__["a" /* UnitsComponent */]
            },
            {
                path: 'translations',
                component: __WEBPACK_IMPORTED_MODULE_4__translations_translations_component__["a" /* TranslationsComponent */]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__("../../../../../src/app/views/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__("../../../../../src/app/views/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__units_units_component__ = __webpack_require__("../../../../../src/app/views/admin/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__translations_translations_component__ = __webpack_require__("../../../../../src/app/views/admin/translations/translations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["d" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__users_users_component__["c" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_6__units_units_component__["a" /* UnitsComponent */], __WEBPACK_IMPORTED_MODULE_7__translations_translations_component__["a" /* TranslationsComponent */], __WEBPACK_IMPORTED_MODULE_5__users_users_component__["b" /* UserFilterPipe */], __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* ConnectionsFilterPipe */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/translations/translations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"activePage == 'interface'\" (click)=\"openPageInterface()\">{{ 'User Interface Labels'|translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"activePage == 'datalabel'\" (click)=\"openPageDataLabel()\">{{ 'Data Labels'|translate }}</button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"card-header\">\n        <strong>{{ 'Translation: ' | translate }}</strong>\n      <button type=\"button\" class=\"btn btn-sm btn-success float-right\" (click)=\"updateLabel()\">\n        <i class=\"fa fa-floppy-o\"></i> {{'Save'|translate}}\n      </button>\n    </div>\n    <div class=\"card product-container\">\n      <div class=\"card-body\">\n        <div style=\"margin-top:10px;\" *ngIf=\"activePage=='interface'\">\n          <table class=\"table table-bordered table-sm mb-0\">\n            <thead>\n              <tr>\n                <th class=\"text-center\">Reference language </th>\n                <th>\n                  <select class=\"form-control form-control-sm\">\n                    <option></option>\n                  </select>\n                </th>\n                <th class=\"text-center\">To</th>\n                <th class=\"text-center\">Translation language </th>\n                <th>\n                  <select class=\"form-control form-control-sm\">\n                    <option></option>\n                  </select>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td colspan=\"2\">Interface Label</td>\n                <td > </td>\n                <td colspan=\"2\"><input class=\"form-control\" type=\"text\" name=\"changeLabel\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div style=\"margin-top:10px;\" *ngIf=\"activePage=='datalabel'\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">{{'Reference language'|translate}}</div>\n            <div class=\"col-md-2\">\n              <select class=\"form-control form-control-sm\" (change)=\"changeTrans()\" [(ngModel)]=\"chooseRef\">\n                <option *ngFor=\"let langName of langNames let i = index\" [value]=\"(i +1)\">{{ langName.LABEL}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-2 text-center\">To</div>\n            <div class=\"col-md-3\">{{'Translation language'|translate}} </div>\n            <div class=\"col-md-2\">\n              <select class=\"form-control form-control-sm\" (change)=\"changeTrans()\" [(ngModel)]=\"chooseTrans\">\n                <option *ngFor=\"let langName of langNames let i = index\" [value]=\"(i+1)\">{{ langName.LABEL}}</option>\n              </select>\n            </div>\n        </div>\n        <p></p>\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"row\" *ngFor=\"let label of showLabelRef\" style=\"height:29px\">\n              <div class=\"col-md-12 text-right\">\n                <span style=\"font-size:10px;\"><strong>{{label.LABEL}}</strong></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-5\">\n            <div class=\"row\" *ngFor=\"let label of showLabelTrans\"  style=\"height:29px\">\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" [(ngModel)]=\"label.LABEL\" style=\"font-size:10px;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/admin/translations/translations.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/admin/translations/translations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TranslationsComponent = (function () {
    function TranslationsComponent(api, translate, toastr) {
        this.api = api;
        this.translate = translate;
        this.toastr = toastr;
        this.activePage = '';
        this.showLabelRef = [];
        this.showLabelTrans = [];
        this.langNames = [];
    }
    TranslationsComponent.prototype.ngOnInit = function () {
        this.activePage = 'datalabel';
        this.chooseRef = 1;
        this.chooseTrans = 1;
    };
    TranslationsComponent.prototype.ngAfterViewInit = function () {
        this.refeshView();
    };
    TranslationsComponent.prototype.openPageInterface = function () {
        this.activePage = 'interface';
    };
    TranslationsComponent.prototype.openPageDataLabel = function () {
        this.activePage = 'datalabel';
    };
    TranslationsComponent.prototype.refeshView = function () {
        var _this = this;
        this.api.getDefaultLanguage().subscribe(function (data) {
            _this.langNames = data.langName;
            _this.showLabelRef = data.referenceLangs;
            _this.showLabelTrans = data.translationLangs;
        });
    };
    TranslationsComponent.prototype.changeTrans = function () {
        var _this = this;
        var params = {
            id: this.chooseRef,
            idtrans: this.chooseTrans
        };
        this.api.filterTrans(params).subscribe(function (data) {
            _this.showLabelTrans = data.translation;
            _this.showLabelRef = data.referenceLangs;
        });
    };
    TranslationsComponent.prototype.updateLabel = function () {
        var _this = this;
        var changeLabel = [];
        for (var i = 0; i < this.showLabelTrans.length; i++) {
            changeLabel.push({
                CODE_LANGUE: this.showLabelTrans[i].CODE_LANGUE,
                ID_TRANSLATION: this.showLabelTrans[i].ID_TRANSLATION,
                TRANS_TYPE: this.showLabelTrans[i].TRANS_TYPE,
                LABEL: this.showLabelTrans[i].LABEL,
            });
        }
        // console.log(changeLabel);
        this.api.changeLabels(changeLabel).subscribe(function (data) {
            _this.refeshView();
            _this.toastr.success(_this.translate.instant('Save label completed!'), 'Success');
        });
    };
    TranslationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translations',
            template: __webpack_require__("../../../../../src/app/views/admin/translations/translations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/admin/translations/translations.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], TranslationsComponent);
    return TranslationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/units/units.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-3 mb-3\"></div>\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"card product-container\">\n      <div class=\"card-body\">\n        <div style=\"margin-top:10px;\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <strong>{{ 'UNITS MANAGEMENT'|translate }}</strong>\n            </div>\n            <div class=\"card-body\">\n              <ng-template #showLoader>\n                <div class=\"text-center\" id=\"showLoader\"></div>\n              </ng-template>\n              <table class=\"table table-bordered table-sm mb-0 text-center\" *ngIf=\"listUnit;else showLoader\">\n                <thead>\n                  <tr>\n                    <th rowspan=\"2\" width=\"35%\" style=\"vertical-align: center;\">{{ 'Value type'|translate }}</th>\n                    <th width=\"20%\">{{ 'Kernel reference'|translate }}</th>\n                    <th colspan=\"3\" width=\"45%\">{{ 'Units references'|translate }}</th>\n                  </tr>\n                  <tr>\n                    <td>Symbol</td>\n                    <td>Symbol</td>\n                    <td>A</td>\n                    <td>B</td>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngIf=\"kernelMonetary && monetary\">\n                    <td style=\"vertical-align: middle\">\n                    <a href=\"javascript:void(0)\" (click)=\"onModalValuePrice()\">{{'Price'|translate}}</a>\n                    </td>\n                    <td [innerHTML]=\"kernelMonetary.MONEY_SYMB\" style=\"vertical-align: middle\"></td>\n                    <td>\n                      <select name=\"monetary\" [(ngModel)]=\"priceMoneySelect\" class=\"form-control\" *ngIf=\"monetary\">\n                        <ng-container *ngFor=\"let item of monetary\">\n                          <option [value]=\"item.ID_MONETARY_CURRENCY\" [innerHTML]=\"item.MONEY_SYMB\"></option>\n                        </ng-container>\n                      </select>\n                    </td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                  <tr *ngFor=\"let unit of listUnit, let i = index\">\n                    <td style=\"vertical-align: middle\">\n                      <a href=\"javascript:void(0)\" (click)=\"onModalValueUnit(i)\">{{unit.name|translate}}</a>\n                    </td>\n                    <td style=\"vertical-align: middle\">{{unit.SYMBOL}}</td>\n                    <td>\n                      <select (change)=\"loadSymbol(i, $event.target.value)\" class=\"form-control\">\n                        <ng-container *ngFor=\"let item of unit.symbolSelect\">\n                          <option [value]=\"item.SYMBOL\">{{item.SYMBOL}}</option>\n                        </ng-container>\n                      </select>\n                    </td>\n                    <td>\n                      <input type=\"text\" *ngIf=\"symbolSelectCoeffA[i] != ''\" [value]=\"symbolSelectCoeffA[i]\" class=\"form-control\" disabled />\n                    </td>\n                    <td>\n                      <input type=\"text\" *ngIf=\"symbolSelectCoeffB[i] != ''\" [value]=\"symbolSelectCoeffB[i]\" class=\"form-control\" disabled />                       \n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"card-footer text-center\">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal  -->\n<div bsModal class=\"modal modal-primary fade\" #modalValuePrice=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>  {{ 'ADD or MODIFY UNIT'|translate }}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalValuePrice.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body col-md-12\">\n        <div class=\"form-group text-center \">\n          <label class=\"col-md-3 col-form-label \"><strong>{{ 'Value type'|translate }} : </strong> {{'PRICE'|translate}} </label>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-2\" align=\"center\" >\n              <label class=\"custom-control custom-radio\" >\n                <input type=\"radio\" class=\"custom-control-input\" name=\"modifyPrice\" [value]=\"0\" [(ngModel)]=\"modifyPrice\" (change)=\"showPriceForm('new')\">{{ 'New'|translate }}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n          </div>\n          <div class=\"col-md-2\" align=\"center\" >\n              <label class=\"custom-control custom-radio\" >\n                <input type=\"radio\" class=\"custom-control-input\" name=\"modifyPrice\" [value]=\"1\" [(ngModel)]=\"modifyPrice\" (change)=\"showPriceForm('modify')\">{{ 'Modify' | translate }}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"showModifyPrice == true\">\n            <table class=\"table table-bordered table-sm mb-0 text-center\" >\n              <thead>\n                <tr>\n                  <th width=\"50%\">{{ 'Text'|translate }}</th>\n                  <th>{{ 'Symbol'|translate }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td align=\"center\" style=\"vertical-align:middle\" *ngIf=\"priceText\">\n                    <input type=\"text\" name=\"priceText\" [(ngModel)]=\"priceText\" class=\"form-control\">\n                  </td>\n                  <td align=\"center\" *ngIf=\"priceSymbol\">\n                    <input type=\"text\" name=\"priceSymbol\" [(ngModel)]=\"priceSymbol\" class=\"form-control\">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"showNewPrice == true\">\n            <table class=\"table table-bordered table-sm mb-0 text-center\" >\n              <thead>\n                <tr>\n                  <th>{{ 'Text'|translate }}</th>\n                  <th>{{ 'Symbol'|translate }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td align=\"center\">\n                      <input type=\"text\" name=\"priceTextNew\" [(ngModel)]=\"priceTextNew\" class=\"form-control\">\n                  </td>\n                  <td align=\"center\">\n                    <input type=\"text\" name=\"priceSymbolNew\" [(ngModel)]=\"priceSymbolNew\" class=\"form-control\">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-12\" style=\"margin-top: 20px;\">\n          <p>Y (new unit) = A*X (reference unit) + B</p>\n          <p>X (reference unit) = (Y (new unit) - B) / A</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalValuePrice.hide()\">{{ 'Cancel'|translate }}</button>\n        <button class=\"btn btn-primary\" (click)=\"savePrice()\">{{ 'Confirm'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal class=\"modal modal-primary fade\" #modalValueUnit=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>  {{ 'ADD or MODIFY UNIT'|translate }}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalValueUnit.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body col-md-12\">\n        <div class=\"form-group text-center \">\n          <label class=\"col-md-6 col-form-label \"><strong>{{ 'Value type'|translate }} : </strong> {{valueUnitName|translate}} </label>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-2\" align=\"center\" >\n              <label class=\"custom-control custom-radio\" >\n                <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\" [value]=\"0\" [(ngModel)]=\"modifyUnit\" (change)=\"showUnitForm('new')\">{{ 'New'|translate }}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n          </div>\n          <div class=\"col-md-2\" align=\"center\" >\n              <label class=\"custom-control custom-radio\" >\n                <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\" [value]=\"1\" [(ngModel)]=\"modifyUnit\" (change)=\"showUnitForm('modify')\">{{ 'Modify' | translate }}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n            <table class=\"table table-bordered table-sm mb-0 text-center\" >\n              <thead>\n                <tr>\n                  <th>{{ 'Symbol'|translate }}</th>\n                  <th>A</th>\n                  <th>B</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"showModifyUnit== true\">\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                    <input type=\"text\" *ngIf=\"unitKernal == false;else valueKernalSymbol\" [(ngModel)]=\"valueUnitSymbol\" class=\"form-control\">\n                    <ng-template #valueKernalSymbol>\n                      <span style=\"display:inline-block;line-height:35px\">{{valueUnitSymbol}}</span>\n                    </ng-template>\n                  </td>\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                    <input type=\"text\" *ngIf=\"unitKernal == false;else valueKernalCoeffA\" [(ngModel)]=\"valueUnitCoeffA\" class=\"form-control\">\n                    <ng-template #valueKernalCoeffA>\n                      <span style=\"display:inline-block;line-height:35px\">{{valueUnitCoeffA}}</span>\n                    </ng-template>\n                  </td>\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                    <input type=\"text\" *ngIf=\"unitKernal == false;else valueKernalCoeffB\"  [(ngModel)]=\"valueUnitCoeffB\" class=\"form-control\">\n                    <ng-template #valueKernalCoeffB>\n                      <span style=\"display:inline-block;line-height:35px\">{{valueUnitCoeffB}}</span>\n                    </ng-template>\n                  </td>\n                </tr>\n                <tr *ngIf=\"showNewUnit == true\">\n                  <td align=\"center\">\n                    <input type=\"text\" [(ngModel)]=\"newUnitSymbol\" class=\"form-control\">\n                  </td>\n                  <td align=\"center\">\n                    <input type=\"text\" [(ngModel)]=\"newUnitCoeffA\" class=\"form-control\">\n                  </td>\n                  <td align=\"center\">\n                    <input type=\"text\" [(ngModel)]=\"newUnitCoeffB\" class=\"form-control\">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-12\" style=\"margin-top: 20px;\">\n          <p>Y (new unit) = A*X (reference unit) + B</p>\n          <p>X (reference unit) = (Y (new unit) - B) / A</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalValueUnit.hide()\">{{ 'Cancel'|translate }}</button>\n        <button class=\"btn btn-primary\" *ngIf=\"unitKernal == false || modifyUnit == 0\" (click)=\"saveUnit()\">{{ 'Confirm'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/views/admin/units/units.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n\n.card-body {\n  position: relative;\n  min-height: 500px; }\n\n#showLoader {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/admin/units/units.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services_api_service__ = __webpack_require__("../../../../../src/app/api/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnitsComponent = (function () {
    function UnitsComponent(api, translate) {
        this.api = api;
        this.translate = translate;
        this.symbolSelectSymbol = [];
        this.symbolSelectCoeffA = [];
        this.symbolSelectCoeffB = [];
        this.symbolSelectIdUnit = [];
    }
    UnitsComponent.prototype.ngOnInit = function () {
        this.modifyPrice = 1;
        this.showModifyPrice = true;
        this.showNewPrice = false;
        this.priceTextNew = '';
        this.priceSymbolNew = '';
        this.modifyUnit = 1;
        this.showModifyUnit = true;
        this.showNewUnit = false;
        this.newUnitCoeffA = 1;
        this.newUnitCoeffB = 0;
        this.unitKernal = true;
        this.newUnitSymbol = '';
    };
    UnitsComponent.prototype.ngAfterViewInit = function () {
        this.refeshView();
    };
    UnitsComponent.prototype.refeshView = function () {
        var _this = this;
        this.api.units().subscribe(function (data) {
            _this.kernelMonetary = data.kernelMonetary;
            _this.priceMoneySelect = data.kernelMonetary.ID_MONETARY_CURRENCY;
            _this.monetary = data.monetary;
            _this.listUnit = data.listUnit;
            for (var i = 0; i < Object.keys(_this.listUnit).length; i++) {
                _this.symbolSelectSymbol.push(_this.listUnit[i]['SYMBOL']);
                _this.symbolSelectCoeffA.push(_this.listUnit[i]['COEFF_A']);
                _this.symbolSelectCoeffB.push(_this.listUnit[i]['COEFF_B']);
                _this.symbolSelectIdUnit.push(_this.listUnit[i]['value']);
            }
        });
    };
    UnitsComponent.prototype.loadSymbol = function (i, symbol) {
        var symbolSelected = this.listUnit[i].symbolSelect;
        for (var j = 0; j < Object.keys(symbolSelected).length; j++) {
            if (symbolSelected[j]['SYMBOL'] == symbol) {
                this.symbolSelectSymbol[i] = symbolSelected[j]['SYMBOL'];
                this.symbolSelectCoeffA[i] = symbolSelected[j]['COEFF_A'];
                this.symbolSelectCoeffB[i] = symbolSelected[j]['COEFF_B'];
                this.symbolSelectIdUnit[i] = symbolSelected[j]['ID_UNIT'];
            }
        }
    };
    UnitsComponent.prototype.onModalValuePrice = function () {
        var _this = this;
        // console.log(this.priceMoneySelect);
        this.api.getMonetaryCurrencyById(this.priceMoneySelect).subscribe(function (data) {
            // console.log(this.priceText);
            _this.priceText = data.MONEY_TEXT;
            _this.priceSymbol = data.MONEY_SYMB;
        });
        this.modalValuePrice.show();
    };
    UnitsComponent.prototype.showPriceForm = function (value) {
        if (value == 'modify') {
            this.showModifyPrice = true;
            this.showNewPrice = false;
        }
        else {
            this.showModifyPrice = false;
            this.showNewPrice = true;
        }
    };
    UnitsComponent.prototype.savePrice = function () {
        var _this = this;
        // console.log(this.modifyPrice);
        if (this.modifyPrice == 1) {
            if (this.priceText == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Text !'), 'error');
            }
            else if (this.priceSymbol == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Symbol !'), 'error');
            }
            var params = {
                ID_MONETARY_CURRENCY: this.priceMoneySelect,
                MONEY_TEXT: this.priceText,
                MONEY_SYMB: this.priceSymbol
            };
            this.api.saveMonetaryCurrency(params).subscribe(function (data) {
                _this.showModifyPrice = true;
                _this.showNewPrice = false;
                _this.modalValuePrice.hide();
                _this.refeshView();
            });
        }
        if (this.modifyPrice == 0) {
            if (this.priceTextNew == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Text !'), 'error');
            }
            else if (this.priceSymbolNew == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Symbol !'), 'error');
            }
            var params = {
                MONEY_TEXT: this.priceTextNew,
                MONEY_SYMB: this.priceSymbolNew
            };
            this.api.createMonetaryCurrency(params).subscribe(function (data) {
                _this.modifyPrice = 1;
                _this.showModifyPrice = true;
                _this.showNewPrice = false;
                _this.modalValuePrice.hide();
                _this.priceTextNew = '';
                _this.priceSymbolNew = '';
                _this.refeshView();
            });
        }
    };
    UnitsComponent.prototype.onModalValueUnit = function (i) {
        if (this.listUnit[i]['value'] != this.symbolSelectIdUnit[i]) {
            this.unitKernal = false;
        }
        else {
            this.unitKernal = true;
        }
        this.typeUnit = this.listUnit[i]['value'];
        this.idUnit = this.symbolSelectIdUnit[i];
        this.modifyUnit = 1;
        this.showModifyUnit = true;
        this.showNewUnit = false;
        this.valueUnitName = this.listUnit[i]['name'];
        this.valueUnitSymbol = this.symbolSelectSymbol[i];
        this.valueUnitCoeffA = this.symbolSelectCoeffA[i];
        this.valueUnitCoeffB = this.symbolSelectCoeffB[i];
        this.modalValueUnit.show();
    };
    UnitsComponent.prototype.showUnitForm = function (value) {
        if (value == 'modify') {
            this.modifyUnit = 1;
            this.showModifyUnit = true;
            this.showNewUnit = false;
        }
        else {
            this.modifyUnit = 0;
            this.showModifyUnit = false;
            this.showNewUnit = true;
        }
    };
    UnitsComponent.prototype.saveUnit = function () {
        var _this = this;
        if (this.modifyUnit == 1) {
            if (this.valueUnitSymbol == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Symbol !'), 'error');
                return false;
            }
            else if (!this.valueUnitCoeffA) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in A !'), 'error');
                return false;
            }
            else if (Number.isInteger(Math.floor(this.valueUnitCoeffA)) === false) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Not a valid number in A !'), 'error');
                return false;
            }
            else if (!this.valueUnitCoeffB) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in B !'), 'error');
                return false;
            }
            else if (Number.isInteger(Math.floor(this.valueUnitCoeffB)) === false) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Not a valid number in B !'), 'error');
                return false;
            }
            var params = {
                ID_UNIT: this.idUnit,
                TYPE_UNIT: this.typeUnit,
                SYMBOL: this.valueUnitSymbol,
                COEFF_A: this.valueUnitCoeffA,
                COEFF_B: this.valueUnitCoeffB,
            };
            this.api.saveUnit(params).subscribe(function (data) {
                _this.showModifyUnit = true;
                _this.showNewUnit = false;
                _this.symbolSelectSymbol = [];
                _this.modalValueUnit.hide();
                _this.refeshView();
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Error', _this.translate.instant(err.error.message), 'error');
                // console.log(err);
            }, function () {
            });
        }
        if (this.modifyUnit == 0) {
            if (this.newUnitSymbol == '') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Enter a value in Symbol !'), 'error');
                return false;
            }
            else if (Number.isInteger(Math.floor(this.newUnitCoeffA)) === false) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Not a valid number in A !'), 'error');
                return false;
            }
            else if (Number.isInteger(Math.floor(this.newUnitCoeffB)) === false) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', this.translate.instant('Not a valid number in B !'), 'error');
                return false;
            }
            var params = {
                TYPE_UNIT: this.typeUnit,
                SYMBOL: this.newUnitSymbol,
                COEFF_A: this.newUnitCoeffA,
                COEFF_B: this.newUnitCoeffB,
            };
            this.api.createUnit(params).subscribe(function (data) {
                _this.showModifyUnit = true;
                _this.showNewUnit = false;
                _this.symbolSelectSymbol = [];
                _this.newUnitSymbol = '';
                _this.newUnitCoeffA = 1;
                _this.newUnitCoeffB = 0;
                _this.modalValueUnit.hide();
                _this.refeshView();
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Error', _this.translate.instant(err.error.message), 'error');
                // console.log(err);
            }, function () {
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalValuePrice'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], UnitsComponent.prototype, "modalValuePrice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalValueUnit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], UnitsComponent.prototype, "modalValueUnit", void 0);
    UnitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-units',
            template: __webpack_require__("../../../../../src/app/views/admin/units/units.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/admin/units/units.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], UnitsComponent);
    return UnitsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"activePage == 'users'\" (click)=\"openPageUsers()\">{{ 'Users'|translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" [class.active]=\"activePage == 'connections'\" (click)=\"openPageConnections()\">{{ 'Connections'|translate }}</button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n\n    <div class=\"card product-container\">\n      <div class=\"card-body\">\n        <div style=\"margin-top:10px;\" *ngIf=\"activePage=='users'\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>{{ 'USER SELECTTION'|translate }}</strong>\n                  <div class=\"study-search-box-container\">\n                    <div class=\"input-group input-group-sm study-search-box\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n                      <span>\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <perfect-scrollbar style=\"max-height: 500px;\">\n                  <div class=\"list-group\" *ngIf=\"listUsers\">\n                    <h6 class=\"dropdown-header\">Online</h6>\n                    <a *ngFor=\"let user of (listUsers['online'] | userFilter: filterString)\" [ngClass]=\"user == selectUser? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelect(user)\">\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        {{user.USERNAM}}\n                        <i class=\"fa fa-circle text-success\"></i>\n                      </div>\n                    </a>\n                    <h6 class=\"dropdown-header\">Offline</h6>\n                    <a *ngFor=\"let user of (listUsers['offline'] | userFilter: filterString)\" [ngClass]=\"user == selectUser? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelect(user)\">\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        {{user.USERNAM}}\n                        <i class=\"fa fa-circle text-secondary\"></i>\n                      </div>\n                    </a>\n                  </div>\n                </perfect-scrollbar>\n                <div class=\"card-footer text-center\">\n                  <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"modalAddUser.show()\"><i class=\"fa fa-plus\"></i> {{ 'Create new user'|translate }}</button>\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"refrestListUsers()\"><i class=\"fa fa-refresh\"></i> {{ 'Refresh'|translate }}</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"card\">\n                  <div class=\"card-header\">\n                      <strong>{{ 'USER MODIFICATION'|translate }}</strong>\n                  </div>\n                  <div class=\"card-body\" *ngIf=\"!selectUser\">\n                      <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n                          Please select a user from the list before process.\n                      </div>\n                  </div>\n                  <div class=\"card-body\" *ngIf=\"selectUser\">\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"username\">{{ 'Login'|translate }}</label>\n                        <div class=\"col-md-8\">\n                          <input type=\"text\" [(ngModel)]=\"user.username\" id=\"username\" name=\"username\" class=\"form-control\" disabled>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"email\">{{ 'E-Mail'|translate }}\t</label>\n                        <div class=\"col-md-8\">\n                          <input type=\"text\" [(ngModel)]=\"user.email\" id=\"email\" name=\"email\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"password\">{{ 'New password'|translate }}</label>\n                        <div class=\"col-md-8\">\n                          <input type=\"password\" [(ngModel)]=\"user.password\" id=\"password\" name=\"password\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\" for=\"confirm\">{{ 'Confirm'|translate }}</label>\n                        <div class=\"col-md-8\">\n                          <input type=\"password\" [(ngModel)]=\"user.confirmpassword\" name=\"confirm\" class=\"form-control\">\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"card-footer text-center\" *ngIf=\"selectUser\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"updateUser(selectUser)\" [ladda]=\"isUpdateUser\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"delUser(selectUser)\" [ladda]=\"isDeleteUser\"><i class=\"fa fa-trash-o\"></i> {{ 'Delete'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"disconnectUser(selectUser)\" [ladda]=\"isDisconnectUser\" *ngIf=\"!selectUser.USERPRIO\"><i class=\"fa fa-plug\"></i> {{ 'Disconnect'|translate }}</button>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"margin-top:10px;\" *ngIf=\"activePage=='connections'\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n                <div class=\"input-group\" >\n                    <div class=\"input-group-btn\">\n                      <select [(ngModel)]=\"numberConnects\" class=\"form-control\" style=\"height: 30px;\" (change)=\"changesRecordConnections()\">\n                        <option value=\"0\">All</option>\n                        <option value=\"10\">10</option>\n                        <option value=\"20\">20</option>\n                        <option value=\"30\">30</option>\n                        <option value=\"40\">40</option>\n                        <option value=\"50\">50</option>\n                        <option value=\"100\">100</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"study-search-box-container\">\n                    <div class=\"input-group input-group-sm study-search-box\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterConnections\" placeholder=\"{{'Search'|translate}}\" />\n                      <span>\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"\">\n              <table class=\"table table-bordered table-sm mb-0\" >\n                <thead>\n                    <tr>\n                        <th align=\"center\" width=\"25%\">{{ 'Login'|translate }}</th>\n                        <th align=\"center\" width=\"25%\">{{ 'Connection date'|translate }}\t</th>\n                        <th align=\"center\" width=\"25%\">{{ 'Disconnection date'|translate }}\t</th>\n                        <th align=\"center\" width=\"25%\">{{ 'Period'|translate }}</th>\n                      </tr>\n                </thead>\n                <tbody *ngIf=\"listConnections\">\n                    <tr *ngFor=\"let item of (listConnections | connectionsFilter: filterConnections)\">\n                        <td>{{ item.USERNAM }}</td>\n                        <td>{{ item.DATE_CONNECTION }}</td>\n                        <td>{{ item.DATE_DISCONNECTION }}</td>\n                        <td>{{ item.PERIOD }}</td>\n                      </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal -->\n<div bsModal class=\"modal fade\" #modalAddUser=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header \">\n              <strong>{{ 'CREATE NEW USER'|translate }}</strong>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalAddUser.hide()\">\n                <span aria-hidden=\"true\">×</span>\n              </button>\n            </div>\n            <div class=\"modal-body row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group row\">\n                  <div class=\"col-md-1\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"username\">{{ 'Login'|translate }}</label>\n                  <div class=\"col-md-6\">\n                    <input type=\"text\" id=\"username\" required name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"email\">{{'E-Mail'|translate}}\t</label>\n                  <div class=\"col-md-6\">\n                    <input type=\"email\" id=\"email\" required  name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" required [pattern]=\"emailPattern\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"password\">{{ 'Password'|translate }}</label>\n                  <div class=\"col-md-6\">\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"confirm\">{{ 'Confirm'|translate }}</label>\n                  <div class=\"col-md-6\">\n                    <input type=\"password\" id=\"confirm\" name=\"confirm\" class=\"form-control\" [(ngModel)]=\"user.confirmpassword\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"modal-footer\">\n              <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalAddUser.hide()\">{{ 'Cancel'|translate }}</button>\n              <button class=\"btn btn-success\" (click)=\"newUser()\" [ladda]=\"isSavingUser\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n            </div>\n          </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/admin/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n\n.study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n\n.study-search-box-container {\n  position: absolute;\n  top: 8px;\n  right: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__ = __webpack_require__("../../../../../src/app/api/models/new-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_services_admin_service__ = __webpack_require__("../../../../../src/app/api/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.USERNAM.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    UserFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'userFilter' })
    ], UserFilterPipe);
    return UserFilterPipe;
}());

var ConnectionsFilterPipe = (function () {
    function ConnectionsFilterPipe() {
    }
    ConnectionsFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.USERNAM.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    ConnectionsFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'connectionsFilter' })
    ], ConnectionsFilterPipe);
    return ConnectionsFilterPipe;
}());

var UsersComponent = (function () {
    function UsersComponent(admin, router, toastr, translate) {
        this.admin = admin;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.activePage = 'users';
        this.filterString = '';
        this.filterConnections = '';
        this.isSavingUser = false;
        this.isUpdateUser = false;
        this.isDeleteUser = false;
        this.isDisconnectUser = false;
        this.isRefreshUser = false;
        this.emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        this.numberConnects = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.openPageUsers = function () {
        this.activePage = 'users';
    };
    UsersComponent.prototype.openPageConnections = function () {
        this.activePage = 'connections';
        this.loadConnections();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectUser = user;
        this.user = {
            username: user.USERNAM,
            email: user.USERMAIL,
            password: '',
            confirmpassword: ''
        };
    };
    UsersComponent.prototype.newUser = function () {
        var _this = this;
        if (!this.user.username) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify username!'), 'warning');
            return;
        }
        if (this.user.username.length < 5 || this.user.username.length > 30) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please username ( 5 : 30 )'), 'warning');
            return;
        }
        if (!this.user.email) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify email!'), 'warning');
            return;
        }
        if (!this.emailPattern.test(this.user.email)) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant(' Email is incorrect!'), 'warning');
            return;
        }
        if (!this.user.password) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify password!'), 'warning');
            return;
        }
        if (this.user.password.length < 5 || this.user.password.length > 30) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please password ( 5 : 30 )'), 'warning');
            return;
        }
        if (!this.user.confirmpassword) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify confirm password!'), 'warning');
            return;
        }
        if (this.user.password !== this.user.confirmpassword) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Password was different to the confirm password!'), 'warning');
            return;
        }
        this.isSavingUser = true;
        this.admin.newUser({
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            confirmpassword: this.user.confirmpassword
        }).subscribe(function (response) {
            var success = true;
            if (response === 0) {
                success = false;
            }
            if (success) {
                _this.modalAddUser.hide();
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
                _this.toastr.success(_this.translate.instant('Create user'), 'successfully');
                _this.router.navigate(['/admin']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', _this.translate.instant('Create user error!'), 'error');
            }
            _this.isSavingUser = false;
        }, function (err) {
            _this.isSavingUser = false;
        }, function () {
            _this.isSavingUser = false;
            _this.refrestListUsers();
        });
    };
    UsersComponent.prototype.refrestListUsers = function () {
        var _this = this;
        this.isRefreshUser = true;
        this.admin.getUsers()
            .subscribe(function (data) {
            if (data) {
                _this.listUsers = data;
                var listOff = _this.listUsers['offline'];
                var listOn = _this.listUsers['online'];
                for (var i = 0; i < listOff.length; i++) {
                    for (var j = 0; j < listOn.length; j++) {
                        if (parseInt(listOff[i].ID_USER, 10) === parseInt(listOn[j].ID_USER, 10)) {
                            listOff.splice(i, 1);
                        }
                    }
                }
            }
        }, function (err) {
            // console.log(err);
        }, function () {
            // console.log('find completed');
        });
    };
    UsersComponent.prototype.delUser = function (user) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won`t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes, delete it!')
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()(_this.translate.instant('Deleted!'), _this.translate.instant('Your file has been deleted.'), 'success');
                _this.isDeleteUser = true;
                _this.admin.deleteUser(user.ID_USER)
                    .subscribe(function (data) {
                    _this.isDeleteUser = false;
                    _this.toastr.success(_this.translate.instant('Update user'), 'successfully');
                }, function (err) {
                    _this.isDeleteUser = false;
                    // console.log(err);
                }, function () {
                    _this.isDeleteUser = false;
                    _this.refrestListUsers();
                    _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
                });
            }
        });
    };
    UsersComponent.prototype.updateUser = function (userUpdate) {
        var _this = this;
        if (!this.user.username) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify username!'), 'warning');
            return;
        }
        if (this.user.username.length < 5 || this.user.username.length > 30) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please username ( 5 : 30 )'), 'warning');
            return;
        }
        if (!this.user.email) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify email!'), 'warning');
            return;
        }
        if (!this.emailPattern.test(this.user.email)) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant(' Email is incorrect!'), 'warning');
            return;
        }
        if (this.user.password.length < 5 || this.user.password.length > 30) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please password ( 5 : 30 )'), 'warning');
            return;
        }
        if (!this.user.confirmpassword) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Please specify confirm password!'), 'warning');
            return;
        }
        if (this.user.password !== this.user.confirmpassword) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', this.translate.instant('Password was different to the confirm password!'), 'warning');
            return;
        }
        this.isUpdateUser = true;
        var body = {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            confirmpassword: this.user.confirmpassword
        };
        this.admin.updateUser({
            id: userUpdate.ID_USER,
            body: body
        }).subscribe(function (response) {
            var success = true;
            for (var i = 0; i < response.length; i++) {
                var element = response[i];
                if (element !== 1) {
                    success = false;
                    break;
                }
            }
            if (success) {
                _this.toastr.success(_this.translate.instant('Update user'), 'successfully');
                _this.router.navigate(['/admin']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Warning', _this.translate.instant('Update user error!'), 'error');
            }
            _this.isUpdateUser = false;
        }, function (err) {
            _this.isUpdateUser = false;
        }, function () {
            _this.modalAddUser.hide();
            _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
            _this.isUpdateUser = false;
            _this.refrestListUsers();
            _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
        });
    };
    UsersComponent.prototype.disconnectUser = function (userCurr) {
        var _this = this;
        var idUser = userCurr.ID_USER;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('Confirm logout'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('OK !')
        }).then(function (result) {
            _this.isDisconnectUser = true;
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: _this.translate.instant('Are you sure?'),
                    text: _this.translate.instant('Reset the status of the studies?'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: _this.translate.instant('OK !')
                }).then(function (res) {
                    if (res.value) {
                        _this.admin.disconnectUser({
                            id: idUser,
                            reset: 1
                        }).subscribe(function (data) {
                            _this.toastr.success(_this.translate.instant('Disconnect complete'), 'successfully');
                            _this.isDisconnectUser = false;
                            _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
                        }, function (err) {
                            // console.log(err);
                            _this.isDisconnectUser = false;
                        }, function () {
                            _this.isDisconnectUser = false;
                            _this.refrestListUsers();
                        });
                    }
                    else {
                        _this.admin.disconnectUser({
                            id: idUser,
                            reset: 1
                        }).subscribe(function (data) {
                            _this.toastr.success(_this.translate.instant('Disconnect complete'), 'successfully');
                            _this.isDisconnectUser = false;
                            _this.user = new __WEBPACK_IMPORTED_MODULE_1__api_models_new_user__["a" /* NewUser */]();
                        }, function (err) {
                            // console.log(err);
                            _this.isDisconnectUser = false;
                        }, function () {
                            _this.isDisconnectUser = false;
                            _this.refrestListUsers();
                        });
                    }
                });
            }
        });
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        this.refrestListUsers();
    };
    UsersComponent.prototype.changesRecordConnections = function () {
        this.loadConnections();
    };
    UsersComponent.prototype.loadConnections = function () {
        var _this = this;
        this.admin.loadConnections(this.numberConnects).subscribe(function (data) {
            _this.listConnections = data;
            var dateConnection;
            var dateDisconnection;
            var options = {
                weekday: 'long', year: 'numeric', month: 'short',
                day: 'numeric', hour: '2-digit', minute: '2-digit', seconds: '2-digit'
            };
            for (var item in data) {
                if (data[item].DATE_DISCONNECTION !== null) {
                    dateConnection = Date.parse(data[item].DATE_CONNECTION);
                    dateDisconnection = Date.parse(data[item].DATE_DISCONNECTION);
                    var period = dateDisconnection - dateConnection;
                    data[item].PERIOD = _this.msToHMS(period);
                    data[item].DATE_CONNECTION = (new Date(dateConnection)).toLocaleTimeString('en-us', options);
                    data[item].DATE_DISCONNECTION = (new Date(dateDisconnection)).toLocaleTimeString('en-us', options);
                }
                else {
                    data[item].DATE_CONNECTION = (new Date(Date.parse(data[item].DATE_CONNECTION))).toLocaleTimeString('en-us', options);
                }
                // console.log('ok');
            }
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    UsersComponent.prototype.msToHMS = function (ms) {
        var hours;
        var minutes;
        var seconds;
        seconds = Math.floor(ms / 1000);
        hours = Math.floor(seconds / 3600);
        minutes = Math.floor((seconds % 3600) / 60);
        seconds = seconds % 60;
        hours = hours < 10 ? ('0' + hours) : hours;
        minutes = minutes < 10 ? ('0' + minutes) : minutes;
        seconds = seconds < 10 ? ('0' + seconds) : seconds;
        return hours + ':' + minutes + ':' + seconds;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddUser'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], UsersComponent.prototype, "modalAddUser", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/views/admin/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/admin/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map