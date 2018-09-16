webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__open_study_open_study_component__ = __webpack_require__("../../../../../src/app/views/dashboard/open-study/open-study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__start_page_start_page_component__ = __webpack_require__("../../../../../src/app/views/dashboard/start-page/start-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_study_new_study_component__ = __webpack_require__("../../../../../src/app/views/dashboard/new-study/new-study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_import_component__ = __webpack_require__("../../../../../src/app/views/dashboard/import/import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_loading_component__ = __webpack_require__("../../../../../src/app/views/dashboard/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__start_page_start_page_component__["a" /* StartPageComponent */],
    },
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_2__new_study_new_study_component__["a" /* NewStudyComponent */],
    },
    {
        path: 'open',
        component: __WEBPACK_IMPORTED_MODULE_0__open_study_open_study_component__["b" /* OpenStudyComponent */],
    },
    {
        path: 'import',
        component: __WEBPACK_IMPORTED_MODULE_3__import_import_component__["a" /* ImportComponent */],
    },
    {
        path: 'loading',
        component: __WEBPACK_IMPORTED_MODULE_4__loading_loading_component__["a" /* LoadingComponent */],
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_page_start_page_component__ = __webpack_require__("../../../../../src/app/views/dashboard/start-page/start-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_study_new_study_component__ = __webpack_require__("../../../../../src/app/views/dashboard/new-study/new-study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__open_study_open_study_component__ = __webpack_require__("../../../../../src/app/views/dashboard/open-study/open-study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_select__ = __webpack_require__("../../../../ng-select/ng-select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__import_import_component__ = __webpack_require__("../../../../../src/app/views/dashboard/import/import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_nl2br_pipe__ = __webpack_require__("../../../../nl2br-pipe/src/nl2br.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loading_loading_component__ = __webpack_require__("../../../../../src/app/views/dashboard/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_select__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__start_page_start_page_component__["a" /* StartPageComponent */], __WEBPACK_IMPORTED_MODULE_4__new_study_new_study_component__["a" /* NewStudyComponent */], __WEBPACK_IMPORTED_MODULE_5__open_study_open_study_component__["b" /* OpenStudyComponent */], __WEBPACK_IMPORTED_MODULE_8__import_import_component__["a" /* ImportComponent */], __WEBPACK_IMPORTED_MODULE_5__open_study_open_study_component__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_11_nl2br_pipe__["a" /* Nl2BrPipe */], __WEBPACK_IMPORTED_MODULE_13__loading_loading_component__["a" /* LoadingComponent */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/import/import.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"text-center\">\n        {{'Under construction!'|translate}}\n      </h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/import/import.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/import/import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportComponent; });
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

var ImportComponent = (function () {
    function ImportComponent() {
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-import',
            template: __webpack_require__("../../../../../src/app/views/dashboard/import/import.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/import/import.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{'Loading, please wait...'| translate}}\n</p>\n\n<app-spinner></app-spinner>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/views/dashboard/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/new-study/new-study.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <strong>{{'NEW STUDY'|translate}}</strong>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n          <small>\n            <strong>{{'STUDY NAME'|translate}}</strong>\n          </small>\n          <div class=\"form-group row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"study.STUDY_NAME\" placeholder=\"Enter new study name\">\n            </div>\n          </div>\n          <small>\n            <strong>{{'NOTES'|translate}}</strong>\n          </small>\n          <div class=\"form-group row\">\n            <div class=\"col\">\n              <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"study.COMMENT_TXT\" placeholder=\"Comments..\"></textarea>\n            </div>\n          </div>\n        </div> <!-- #col-md-7 -->\n        <div class=\"col-md-5\">\n          <small>\n            <strong>{{'CALCULATION MODE'|translate}}</strong>\n          </small>\n          <div class=\"form-check mt-2\">\n            <label class=\"form-check-label\">\n              <label class=\"switch switch-icon switch-pill switch-primary\">\n                <input type=\"radio\" class=\"switch-input\" [(ngModel)]=\"study.CALCULATION_MODE\" [value]=\"1\" [checked]=\"study.CALCULATION_MODE == 1\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Estimation'|translate}}\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <label class=\"switch switch-icon switch-pill switch-primary\">\n                <input type=\"radio\" class=\"switch-input\" [(ngModel)]=\"study.CALCULATION_MODE\" [value]=\"3\" [checked]=\"study.CALCULATION_MODE == 3\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Optimum Equipment'|translate}}\n            </label>\n          </div>\n          \n          <small><strong>{{'CALCULATION OPTIONS'|translate}}</strong></small>\n          \n          <div class=\"form-check mt-2\">\n            <label class=\"form-check-label\">\n              <label class=\"switch switch-icon switch-primary-outline-alt\">\n                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"study.OPTION_ECO\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Economic'|translate}}\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" [ngClass]=\"study.CHAINING_CONTROLS?'text-muted':''\">\n              <label class=\"switch switch-icon switch-primary-outline-alt\">\n                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"study.OPTION_CRYOPIPELINE\" [disabled]=\"study.CHAINING_CONTROLS\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Cryogenic Pipeline'|translate}}\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <label class=\"switch switch-icon switch-primary-outline-alt\">\n                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"study.CHAINING_CONTROLS\" (change)=\"toggleChainControl()\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Perform chaining checks'|translate}}\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" [ngClass]=\"!study.CHAINING_CONTROLS?'text-muted':''\">\n              <label class=\"switch switch-icon switch-primary-outline-alt\">\n                <input type=\"checkbox\" class=\"switch-input\" [(ngModel)]=\"study.CHAINING_ADD_COMP_ENABLE\" [disabled]=\"!study.CHAINING_CONTROLS\">\n                <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n              {{'Allow adding components in child study'|translate}}\n            </label>\n          </div>\n        </div> <!-- #col-md-5 -->\n      </div>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer text-center\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"saveStudy()\" [ladda]=\"laddaSavingStudy\">{{'SAVE'|translate}}</button>\n    </div>\n  </div>\n  <!-- /.card -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/new-study/new-study.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/new-study/new-study.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStudyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_models__ = __webpack_require__("../../../../../src/app/api/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewStudyComponent = (function () {
    function NewStudyComponent(api, router, toastr, translate) {
        this.api = api;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.laddaSavingStudy = false;
        this.study = new __WEBPACK_IMPORTED_MODULE_1__api_models__["l" /* Study */]();
        this.study.CALCULATION_MODE = 3;
    }
    NewStudyComponent.prototype.ngOnInit = function () {
    };
    NewStudyComponent.prototype.toggleChainControl = function () {
        if (this.study.CHAINING_CONTROLS) {
            this.study.OPTION_CRYOPIPELINE = false;
        }
        else {
            this.study.CHAINING_ADD_COMP_ENABLE = false;
        }
    };
    NewStudyComponent.prototype.saveStudy = function () {
        var _this = this;
        if (!this.study.STUDY_NAME) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Error', this.translate.instant('Please specify study name!'), 'error');
            return false;
        }
        this.api.createStudy(this.study).subscribe(function (resp) {
            localStorage.setItem('study', JSON.stringify(resp));
            _this.api.openStudy(resp.ID_STUDY)
                .subscribe(function (data) {
                _this.router.navigate(['/input']);
            }, function (err) {
            }, function () {
            });
        }, function (err) {
            _this.toastr.error(_this.translate.instant(err.error.message), 'Error');
            _this.laddaSavingStudy = false;
        }, function () {
            _this.laddaSavingStudy = false;
        });
    };
    NewStudyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-study',
            template: __webpack_require__("../../../../../src/app/views/dashboard/new-study/new-study.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/new-study/new-study.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], NewStudyComponent);
    return NewStudyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/open-study/open-study.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\" id=\"study-list-card\">\n        <div class=\"card-header\">\n          <strong>{{'STUDIES'|translate}}</strong>\n          <div id=\"study-search-box-container\">\n            <div class=\"input-group input-group-sm\" id=\"study-search-box\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n              <span>\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n        <perfect-scrollbar style=\"max-height: 650px;\">\n          <div class=\"list-group\" *ngIf=\"studies\">\n            <!-- mine -->\n            <h6 class=\"dropdown-header\" *ngIf=\"studies.mine\">{{'MINE'|translate}}</h6>\n            <a *ngFor=\"let study of (studies.mine | filter: filterString)\" class=\"list-group-item list-group-item-action mineElement\" [ngClass]=\"study == selectedStudy? 'active' : ''\" (click)=\"onSelect(study)\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                {{study.STUDY_NAME}}\n                <span>\n                  <i *ngIf=\"study.CHAINING_CONTROLS == 1\" class=\"fa fa-chain text-muted\"></i>\n                </span>\n              </div>\n            </a>\n            <!-- others -->\n            <h6 class=\"dropdown-header\" *ngIf=\"studies.mine && studies.others\">{{'OTHER'|translate}}</h6>\n            <a *ngFor=\"let study of (studies.others | filter: filterString)\" class=\"list-group-item list-group-item-action userElement\" [ngClass]=\"study == selectedStudy? 'active' : ''\"\n              (click)=\"onSelect(study)\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                {{study.STUDY_NAME}}\n                <span>\n                  <small>{{study.USERNAM}}</small>\n                  <i *ngIf=\"study.CHAINING_CONTROLS == 1\" class=\"fa fa-chain text-muted\"></i>\n                </span>\n              </div>\n            </a>\n          </div>\n        </perfect-scrollbar>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>FILTERS</strong>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group\">\n              {{'Who'|translate}}\n              <select class=\"form-control\" [(ngModel)]=\"userSelected\" (change)=\"selectUser()\">\n                <option [value]=\"0\">{{ 'Select a user'|translate }}</option>\n                <option *ngFor=\"let user of users\" [value]=\"user.ID_USER\">\n                  {{ user.USERNAM }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              {{'Component family'|translate}}\n              <select class=\"form-control\" [(ngModel)]=\"compFamilySelected\" (change)=\"selectFamily()\">\n                <option [value]=\"0\">{{ 'Select a family'|translate }}</option>\n                <option *ngFor=\"let family of compFamily\" [value]=\"family.ID_TRANSLATION\">\n                  {{ family.LABEL }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              {{'Sub family'|translate}}\n              <select class=\"form-control\" [(ngModel)]=\"subFamilySelected\" (change)=\"selectSubFamily()\">\n                <option [value]=\"0\">{{ 'Select a sub family'|translate }}</option>\n                <option *ngFor=\"let family of subFamily\" [value]=\"family.ID_TRANSLATION\">\n                  {{ family.LABEL }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-12\">\n              {{'Component list'|translate}}\n              <select class=\"form-control\" *ngIf=\"components\" [(ngModel)]=\"componentSelected\" (change)=\"selectComponent()\">\n                <option [value]=\"0\">{{ 'Select a component'|translate }}</option>\n                <option *ngFor=\"let component of components.active\" [value]=\"component.ID_COMP\" class=\"{{component.class}}\">\n                  {{ component.displayName }}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>SELECTED STUDY</strong>\n        </div>\n        <div class=\"card-body\">\n          <ng-template #noSelectedStudy>\n            <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n              {{'Please select a study from the list before process to calculation.'|translate}}\n            </div>\n          </ng-template>\n          <div *ngIf=\"selectedStudy; else noSelectedStudy\">\n            <table class=\"table table-hover table-striped\">\n              <tr>\n                <th>{{'Study Name'|translate}}</th>\n                <td>{{ selectedStudy.STUDY_NAME }}</td>\n              </tr>\n              <tr>\n                <th>Owner</th>\n                <td>{{ selectedStudy.USERNAM }}</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\">Comment</th>\n              </tr>\n              <tr>\n                <td colspan=\"2\" [innerHTML]=\"selectedStudy.COMMENT_TXT | nl2br\"></td>\n              </tr>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"card-footer text-center\" *ngIf=\"selectedStudy\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteStudy()\" [ladda]=\"laddaDeletingStudy\" [disabled]=\"disabledField()\"><i class=\"fa fa-trash-o\"></i> {{'Delete'|translate}}</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalSaveAs.show()\"><i class=\"fa fa-copy\"></i> {{'Save As'|translate}}</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"openStudy()\" [ladda]=\"laddaOpeningStudy\"><i class=\"fa fa-folder-open-o\"></i> {{'Open'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Start model save as -->\n<div bsModal class=\"modal fade\" #modalSaveAs=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>{{'SAVE AS'|translate}}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalSaveAs.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div align=\"left\" class=\"labelSaveAs\">{{'Enter a new name'|translate}}</div>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Study Name\">\n      </div><!-- modal-body -->\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalSaveAs.hide()\">{{'Cancel'|translate}}</button>\n        <button class=\"btn btn-primary\" (click)=\"saveStudyAs()\" [ladda]=\"laddaSaveStudyAs\">{{'Confirm'|translate}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End model save as -->\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/open-study/open-study.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#study-list-card .list-group .list-group-item {\n  border-left: none;\n  border-right: none;\n  cursor: pointer; }\n\n#study-list-card .list-group .list-group-item:first-child {\n  border-top: none !important; }\n\n#study-list-card .list-group .list-group-item:last-child {\n  border-bottom: none !important; }\n\n#study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n\n#study-search-box-container {\n  position: absolute;\n  top: 8px;\n  right: 12px; }\n\n.compLocked {\n  color: #C0C0C0 !important; }\n\n.packLocked {\n  color: #C0C0C0 !important; }\n\n.eqpLocked {\n  color: #C0C0C0 !important; }\n\n.lineLocked {\n  color: #C0C0C0 !important; }\n\n.mineElement {\n  color: #4682B4 !important; }\n\n.userElement {\n  color: #808080 !important; }\n\n.obsoleteElement {\n  color: #FF0000 !important; }\n\n.disabledElement {\n  color: #FF8C00 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/open-study/open-study.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OpenStudyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_services_input_service__ = __webpack_require__("../../../../../src/app/api/services/input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.STUDY_NAME.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());

var OpenStudyComponent = (function () {
    function OpenStudyComponent(api, router, input, toastr, translate) {
        this.api = api;
        this.router = router;
        this.input = input;
        this.toastr = toastr;
        this.translate = translate;
        this.selectedStudy = null;
        this.filterUsers = [];
        this.filterCompFamilies = [];
        this.filterCompSubFamilies = [];
        this.filterComponents = [];
        this.filterString = '';
        this.name = '';
        this.laddaOpeningStudy = false;
        this.laddaDeletingStudy = false;
        this.laddaSaveStudyAs = false;
        this.userSelected = 0;
        this.compFamilySelected = 0;
        this.subFamilySelected = 0;
        this.componentSelected = 0;
        this.isLoading = true;
    }
    OpenStudyComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    OpenStudyComponent.prototype.openStudy = function () {
        var _this = this;
        localStorage.setItem('study', JSON.stringify(this.selectedStudy));
        this.laddaOpeningStudy = true;
        this.api.openStudy(this.selectedStudy.ID_STUDY)
            .subscribe(function (data) {
            _this.api.getProductViewModel(_this.selectedStudy.ID_PROD).subscribe(function (response) {
                localStorage.setItem('productWarning', 'Y');
                localStorage.setItem('productDeleteWarning', 'Y');
                localStorage.setItem('productView', JSON.stringify(response));
                var elements = response.elements;
                if (elements.length > 0) {
                    localStorage.setItem('productShape', elements[0].ID_SHAPE.toString());
                }
                else {
                    localStorage.removeItem('productShape');
                }
                _this.laddaOpeningStudy = false;
                _this.router.navigate(['/input']);
            }, function (err) {
                console.log(err);
            }, function () {
            });
        }, function (err) {
            console.log(err);
            _this.laddaOpeningStudy = false;
        }, function () {
            _this.laddaOpeningStudy = false;
        });
    };
    OpenStudyComponent.prototype.onSelect = function (study) {
        // console.log('select study: ' + study.ID_STUDY);
        this.selectedStudy = study;
    };
    OpenStudyComponent.prototype.refrestListStudies = function () {
        var _this = this;
        this.isLoading = true;
        localStorage.removeItem('study');
        this.selectedStudy = null;
        this.api.findStudies({})
            .subscribe(function (data) {
            // console.log('get studies response:');
            // console.log(data);
            _this.studies = data;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        }, function () {
            // console.log('find sttudies completed');
        });
        this.api.getActiveUsers().subscribe(function (data) {
            _this.users = data;
        });
        this.api.getAllCompFamily().subscribe(function (data) {
            _this.compFamily = data;
        });
        this.api.getSubfamily(this.compFamilySelected).subscribe(function (data) {
            _this.subFamily = data;
        });
        this.api.findComponents({}).subscribe(function (data) {
            _this.components = data;
        });
    };
    OpenStudyComponent.prototype.ngAfterViewInit = function () {
        // console.log('open study initializing');
        this.refrestListStudies();
    };
    OpenStudyComponent.prototype.deleteStudy = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won\'t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#dd3333',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.laddaDeletingStudy = true;
                _this.api.deleteStudyById(_this.selectedStudy.ID_STUDY).subscribe(function (data) {
                    // console.log(data);
                    _this.laddaDeletingStudy = false;
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()(_this.translate.instant('Deleted!'), _this.translate.instant('Your study has been deleted.'), 'success');
                    _this.refrestListStudies();
                }, function (err) {
                    _this.laddaDeletingStudy = false;
                    console.log(err);
                }, function () {
                    _this.laddaDeletingStudy = false;
                });
            }
        });
    };
    OpenStudyComponent.prototype.saveStudyAs = function () {
        var _this = this;
        // console.log(this.name);
        if (!this.name) {
            this.toastr.error(this.translate.instant('Please specify study name!'), 'Error');
            return false;
        }
        this.laddaSaveStudyAs = true;
        this.studyID = this.selectedStudy.ID_STUDY;
        var studyName = this.name;
        // console.log(studyName);
        // console.log(this.name);
        this.api.saveStudyAs({
            id: this.studyID,
            name: this.name
        }).subscribe(function (data) {
            _this.modalSaveAs.hide();
            _this.laddaSaveStudyAs = false;
            _this.refrestListStudies();
        }, function (err) {
            _this.toastr.error(_this.translate.instant(err.error.message), 'Error');
            console.log(err);
            _this.laddaSaveStudyAs = false;
        }, function () {
            _this.laddaSaveStudyAs = false;
        });
    };
    OpenStudyComponent.prototype.selectUser = function () {
        var _this = this;
        this.api.findStudies({
            idUser: this.userSelected
        })
            .subscribe(function (data) {
            _this.studies = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    OpenStudyComponent.prototype.selectFamily = function () {
        var _this = this;
        this.api.getSubfamily(this.compFamilySelected).subscribe(function (data) {
            _this.subFamily = data;
        });
        this.api.findComponents({
            idStudy: 0,
            compfamily: this.compFamilySelected,
        }).subscribe(function (data) {
            // console.log(data);
            _this.components = data;
        });
        this.api.findStudies({
            idUser: this.userSelected,
            compfamily: this.compFamilySelected
        }).subscribe(function (data) {
            _this.studies = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    OpenStudyComponent.prototype.selectSubFamily = function () {
        var _this = this;
        this.api.findComponents({
            idStudy: 0,
            compfamily: this.compFamilySelected,
            subfamily: this.subFamilySelected
        }).subscribe(function (data) {
            // console.log(data);
            _this.components = data;
        });
        this.api.findStudies({
            idUser: this.userSelected,
            compfamily: this.compFamilySelected,
            subfamily: this.subFamilySelected
        }).subscribe(function (data) {
            _this.studies = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    OpenStudyComponent.prototype.selectComponent = function () {
        var _this = this;
        this.api.findStudies({
            idUser: this.userSelected,
            compfamily: this.compFamilySelected,
            subfamily: this.subFamilySelected,
            component: this.componentSelected
        }).subscribe(function (data) {
            _this.studies = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    OpenStudyComponent.prototype.disabledField = function () {
        return !(Number(this.selectedStudy.ID_USER) === Number(this.user.ID_USER));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], OpenStudyComponent.prototype, "modalSaveAs", void 0);
    OpenStudyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-study',
            template: __webpack_require__("../../../../../src/app/views/dashboard/open-study/open-study.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/open-study/open-study.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__api_services_input_service__["a" /* InputService */], __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], OpenStudyComponent);
    return OpenStudyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/start-page/start-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"mb-3\">{{'Welcome to CRYOSOFT Start page'|translate}}</h3>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>{{'Quick open recent studies...'|translate}}</strong>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"text-muted text-center p-3\" *ngIf=\"!recentStudies\">{{'No recent studies'|translate}}</div>\n          <ul *ngIf=\"recentStudies\">\n            <li *ngFor=\"let study of recentStudies\"><a href=\"javascript:void(0);\" (click)=\"open(study)\">{{ study.STUDY_NAME }}</a></li>\n          </ul>\n          <app-spinner *ngIf=\"isLoading\"></app-spinner>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <button class=\"btn btn-block btn-success btn-lg\" [routerLink]=\"['/new']\"><i class=\"fa fa-file fa-3x mb-2\"></i><br>{{'NEW STUDY'|translate}}</button>\n        </div>\n        <div class=\"col-md-6\">\n          <button class=\"btn btn-block btn-primary btn-lg\" [routerLink]=\"['/open']\"><i class=\"fa fa-folder-open fa-3x mb-2\"></i>\n          <br>{{'LOAD STUDY'|translate}}</button>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-md-6\">\n          <button class=\"btn btn-block btn-secondary btn-lg\" [routerLink]=\"['/import']\"><i class=\"fa fa-upload fa-3x mb-2\"></i><br>{{'IMPORT STUDY'|translate}}</button>\n        </div>\n        <div class=\"col-md-6\">\n          <button class=\"btn btn-block btn-info text-white btn-lg\" (click)=\"startTutorial()\"><i class=\"fa fa-question-circle fa-3x mb-2\"></i>\n          <br>{{'QUICK TUTORIAL'|translate}}</button>\n        </div>        \n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/start-page/start-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/start-page/start-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services_api_service__ = __webpack_require__("../../../../../src/app/api/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartPageComponent = (function () {
    function StartPageComponent(api, router, translate) {
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.isLoading = false;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
    };
    StartPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.api.recentStudies().subscribe(function (studies) {
            _this.recentStudies = studies;
            _this.isLoading = false;
        }, function (err) {
            // console.log(err);
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    StartPageComponent.prototype.startTutorial = function () {
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()('Warning', this.translate.instant('Not yet implement'), 'warning');
    };
    StartPageComponent.prototype.open = function (study) {
        var _this = this;
        this.isLoading = true;
        localStorage.setItem('study', JSON.stringify(study));
        this.api.openStudy(study.ID_STUDY)
            .subscribe(function (data) {
            localStorage.setItem('productWarning', 'Y');
            localStorage.setItem('productDeleteWarning', 'Y');
            _this.router.navigate(['/input']);
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    StartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__("../../../../../src/app/views/dashboard/start-page/start-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/start-page/start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "../../../../nl2br-pipe/src/nl2br.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nl2BrPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Nl2BrPipe = (function () {
    function Nl2BrPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Nl2BrPipe.prototype.transform = function (value) {
        var result;
        if (value) {
            result = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
            result = this.sanitizer.bypassSecurityTrustHtml(result);
        }
        return result ? result : value;
    };
    Nl2BrPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nl2br'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], Nl2BrPipe);
    return Nl2BrPipe;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map