webpackJsonp(["settings.module"],{

/***/ "../../../../../src/app/views/settings/calculation/calculation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"card\" *ngIf=\"calculationparametersdef\">\n    <div class=\"card-header\">\n      <strong>{{'Seized condition'|translate}}</strong>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"card-group\">\n        <div class=\"card\">\n          <div class=\"card-header\">{{'Activation'|translate}}</div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <p>{{'Horizontal'|translate}}</p>\n              </div>\n              <div class=\"col-md-7\">\n                <label class=\"switch switch-text switch-primary\">\n                  <input type=\"checkbox\" id=\"ishorizScanDef\" name=\"ishorizScanDef\" class=\"switch-input\" [checked]=\"calculationparametersdef.HORIZ_SCAN_DEF == 1\"\n                    [(ngModel)]=\"calculationparametersdef.HORIZ_SCAN_DEF\">\n                  <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                  <span class=\"switch-handle\"></span>\n                </label>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <p>{{'Vertical'|translate}}</p>\n              </div>\n              <div class=\"col-md-7\">\n                <label class=\"switch switch-text switch-primary\">\n                  <input type=\"checkbox\" id=\"isVertScanDef\" name=\"isVertScanDef\" class=\"switch-input\" [checked]=\"calculationparametersdef.VERT_SCAN_DEF == 1\"\n                    [(ngModel)]=\"calculationparametersdef.VERT_SCAN_DEF\">\n                  <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                  <span class=\"switch-handle\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Max of iterations'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"maxIter\" name=\"maxIter\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.MAX_IT_NB_DEF\">\n                </div>\n              </div>\n            </div>\n            <hr>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Coef. of relaxation'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"relaxCoef\" name=\"relaxCoef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.RELAX_COEFF_DEF\">\n                </div>\n              </div>\n            </div>\n            <hr>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Precision of numerical modelling(%)'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"precision\" name=\"precision\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.PRECISION_REQUEST_DEF\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">{{'Temperature to stop'|translate}} ({{ temperatureSymbol }})</div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Surface'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"stopTopSurfDef\" name=\"stopTopSurfDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STOP_TOP_SURF_DEF\">\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Internal'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"stopIntDef\" name=\"stopIntDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STOP_INT_DEF\">\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Bottom'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"stopBottomSurfDef\" name=\"stopBottomSurfDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STOP_BOTTOM_SURF_DEF\">\n                </div>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>{{'Average'|translate}}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <small></small>\n                  </span>\n                  <input type=\"text\" id=\"stopAvgDef\" name=\"stopAvgDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STOP_AVG_DEF\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-header\">\n      <strong>{{'Alpha '|translate}}({{ convectionCoeffSymbol }})</strong>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row align-items-start text-center\">\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Top'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Bottom'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Left'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Right'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Front'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-12 col-form-label\" for=\"text-input\">{{'Rear'|translate}}</label>\n        </div>\n      </div>\n      <div class=\"row align-items-center \">\n        <div class=\"col\">\n          <div class=\"col-md-12 \">\n            <div class=\"input-group\">\n              <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaTopFixedDef\" name=\"isStudyAlphaTopFixedDef\" [checked]=\"calculationparametersdef.STUDY_ALPHA_TOP_FIXED_DEF == 1\"\n                  [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_TOP_FIXED_DEF\" (click)=\"resetTopValue();\">\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n                <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaBottomFixedDef\" name=\"isStudyAlphaBottomFixedDef\" \n                  [checked]=\"calculationparametersdef.STUDY_ALPHA_BOTTOM_FIXED_DEF == 1\"\n                  [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_BOTTOM_FIXED_DEF\" (click)=\"resetBotvalue();\">\n                  <span class=\"custom-control-indicator\"></span>\n                </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaLeftFixedDef\" name=\"isStudyAlphaLeftFixedDef\" \n                [checked]=\"calculationparametersdef.STUDY_ALPHA_LEFT_FIXED_DEF == 1\"\n                [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_LEFT_FIXED_DEF\" (click)=\"resetLeftValue();\">\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaRightFixedDef\" name=\"isStudyAlphaRightFixedDef\" \n                [checked]=\"calculationparametersdef.STUDY_ALPHA_RIGHT_FIXED_DEF == 1\"\n                [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_RIGHT_FIXED_DEF\" (click)=\"resetRightValue();\">\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaFrontFixedDef\" name=\"isStudyAlphaFrontFixedDef\" \n                [checked]=\"calculationparametersdef.STUDY_ALPHA_FRONT_FIXED_DEF == 1\"\n                [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_FRONT_FIXED_DEF\" (click)=\"resetFrontValue();\">\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <label class=\"custom-control custom-checkbox cal-check\" style=\"margin-left: 3em;\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"isStudyAlphaRearFixedDef\" name=\"isStudyAlphaRearFixedDef\"\n                [checked]=\"calculationparametersdef.STUDY_ALPHA_REAR_FIXED_DEF == 1\"\n                [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_REAR_FIXED_DEF\" (click)=\"resetRearValue();\">\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row align-items-center\">\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaTopDef\" name=\"studyAlphaTopDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_TOP_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_TOP_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaBottomDef\" name=\"studyAlphaBottomDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_BOTTOM_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaLeftDef\" name=\"studyAlphaLeftDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_LEFT_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_LEFT_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaRightDef\" name=\"studyAlphaRightDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_RIGHT_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_RIGHT_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaFrontDef\" name=\"studyAlphaFrontDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_FRONT_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_FRONT_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" id=\"studyAlphaRearDef\" name=\"studyAlphaRearDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STUDY_ALPHA_REAR_DEF\"\n                [disabled]=\"calculationparametersdef.STUDY_ALPHA_REAR_FIXED_DEF != 1\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-header\">\n      <strong>{{'Step number'|translate}}</strong>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row align-items-start\">\n        <div class=\"col\">\n          <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Storage step'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Precision log step'|translate}}</label>\n        </div>\n        <div class=\"col\">\n          <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Time step '|translate}} ({{ timeSymbol }})</label>\n        </div>\n      </div>\n      <div class=\"row align-items-center\">\n        <div class=\"col\">\n          <div class=\"col-md-7\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <small></small>\n              </span>\n              <input type=\"text\" id=\"storageStepDef\" name=\"storageStepDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.STORAGE_STEP_DEF\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-7\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <small></small>\n              </span>\n              <input type=\"text\" id=\"precisionLogStepDef\" name=\"precisionLogStepDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.PRECISION_LOG_STEP_DEF\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-md-7\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <small></small>\n              </span>\n              <input type=\"text\" id=\"timeStepDef\" name=\"timeStepDef\" class=\"form-control\" [(ngModel)]=\"calculationparametersdef.TIME_STEP_DEF\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer text-center\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"saveMyCalculationParametersDef()\" [ladda]=\"laddaSavingcalculation\">\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{'Save'|translate}}</button>\n    </div>\n    <!-- /.card-footer -->\n  </div>\n  <!-- /.card -->\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/settings/calculation/calculation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-check {\n  margin-left: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/settings/calculation/calculation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalculationComponent = (function () {
    function CalculationComponent(api, toastr, translate) {
        this.api = api;
        this.toastr = toastr;
        this.translate = translate;
        this.laddaSavingcalculation = false;
        this.isLoading = false;
        this.temperatureSymbol = '';
        this.convectionCoeffSymbol = '';
        this.timeSymbol = '';
        this.isLoading = true;
    }
    CalculationComponent.prototype.ngOnInit = function () {
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (Number(this.listUnits[i].TYPE_UNIT) === 8) {
                    this.temperatureSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 14) {
                    this.convectionCoeffSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 5) {
                    this.timeSymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
    };
    CalculationComponent.prototype.ngAfterViewInit = function () {
        this.getSettingCaculation();
    };
    CalculationComponent.prototype.getSettingCaculation = function () {
        var _this = this;
        this.api.getMyCalculationParametersDef().subscribe(function (data) {
            data.VERT_SCAN_DEF = Number(data.VERT_SCAN_DEF);
            data.HORIZ_SCAN_DEF = Number(data.HORIZ_SCAN_DEF);
            data.STUDY_ALPHA_TOP_FIXED_DEF = Number(data.STUDY_ALPHA_TOP_FIXED_DEF);
            data.STUDY_ALPHA_BOTTOM_FIXED_DEF = Number(data.STUDY_ALPHA_BOTTOM_FIXED_DEF);
            data.STUDY_ALPHA_LEFT_FIXED_DEF = Number(data.STUDY_ALPHA_LEFT_FIXED_DEF);
            data.STUDY_ALPHA_RIGHT_FIXED_DEF = Number(data.STUDY_ALPHA_RIGHT_FIXED_DEF);
            data.STUDY_ALPHA_FRONT_FIXED_DEF = Number(data.STUDY_ALPHA_FRONT_FIXED_DEF);
            data.STUDY_ALPHA_REAR_FIXED_DEF = Number(data.STUDY_ALPHA_REAR_FIXED_DEF);
            data.STORAGE_STEP_DEF = Number(data.STORAGE_STEP_DEF);
            data.PRECISION_LOG_STEP_DEF = Number(data.PRECISION_LOG_STEP_DEF);
            _this.calculationparametersdef = data;
            _this.isLoading = false;
        });
    };
    CalculationComponent.prototype.saveMyCalculationParametersDef = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.MAX_IT_NB_DEF) || String(this.calculationparametersdef.MAX_IT_NB_DEF) === ''
            || isNaN(this.calculationparametersdef.MAX_IT_NB_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Max of iterations'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.RELAX_COEFF_DEF) || String(this.calculationparametersdef.RELAX_COEFF_DEF) === ''
            || isNaN(this.calculationparametersdef.RELAX_COEFF_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Coef. of relaxation'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.PRECISION_REQUEST_DEF)
            || String(this.calculationparametersdef.PRECISION_REQUEST_DEF) === ''
            || isNaN(this.calculationparametersdef.PRECISION_REQUEST_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Precision of numerical modelling'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STOP_TOP_SURF_DEF) || String(this.calculationparametersdef.STOP_TOP_SURF_DEF) === ''
            || isNaN(this.calculationparametersdef.STOP_TOP_SURF_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Surface'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STOP_INT_DEF) || String(this.calculationparametersdef.STOP_INT_DEF) === ''
            || isNaN(this.calculationparametersdef.STOP_INT_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Internal'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STOP_BOTTOM_SURF_DEF)
            || String(this.calculationparametersdef.STOP_BOTTOM_SURF_DEF) === ''
            || isNaN(this.calculationparametersdef.STOP_BOTTOM_SURF_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Bottom'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STOP_AVG_DEF)
            || String(this.calculationparametersdef.STOP_AVG_DEF) === ''
            || isNaN(this.calculationparametersdef.STOP_AVG_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Average'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_TOP_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_TOP_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_TOP_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha top'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha bottom'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_LEFT_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_LEFT_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_LEFT_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha left'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_RIGHT_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_RIGHT_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_RIGHT_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha right'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_FRONT_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_FRONT_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_FRONT_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha front'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STUDY_ALPHA_REAR_DEF)
            || String(this.calculationparametersdef.STUDY_ALPHA_REAR_DEF) === ''
            || isNaN(this.calculationparametersdef.STUDY_ALPHA_REAR_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Alpha rear'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.STORAGE_STEP_DEF)
            || String(this.calculationparametersdef.STORAGE_STEP_DEF) === ''
            || isNaN(this.calculationparametersdef.STORAGE_STEP_DEF) || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.calculationparametersdef.STORAGE_STEP_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Storage step'), 'Error');
            return;
        }
        if (Number(this.calculationparametersdef.STORAGE_STEP_DEF) < 1
            || Number(this.calculationparametersdef.STORAGE_STEP_DEF) > 100000000) {
            this.toastr.error(this.translate.instant('Value out of range in Storage step (1 : 100000000) !'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.PRECISION_LOG_STEP_DEF)
            || String(this.calculationparametersdef.PRECISION_LOG_STEP_DEF) === ''
            || isNaN(this.calculationparametersdef.PRECISION_LOG_STEP_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.calculationparametersdef.PRECISION_LOG_STEP_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Precision log step'), 'Error');
            return;
        }
        if (Number(this.calculationparametersdef.PRECISION_LOG_STEP_DEF) < 1
            || Number(this.calculationparametersdef.PRECISION_LOG_STEP_DEF) > 100000000) {
            this.toastr.error(this.translate.instant('Value out of range in Precision log step (1 : 100000000) !'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.calculationparametersdef.TIME_STEP_DEF)
            || String(this.calculationparametersdef.TIME_STEP_DEF) === ''
            || isNaN(this.calculationparametersdef.TIME_STEP_DEF)) {
            this.toastr.error(this.translate.instant('Please specify Time Step'), 'Error');
            return;
        }
        this.laddaSavingcalculation = true;
        this.api.saveMyCalculationParametersDef({
            ishorizScanDef: Number(this.calculationparametersdef.HORIZ_SCAN_DEF),
            maxIter: Number(this.calculationparametersdef.MAX_IT_NB_DEF),
            relaxCoef: Number(this.calculationparametersdef.RELAX_COEFF_DEF),
            precision: Number(this.calculationparametersdef.PRECISION_REQUEST_DEF),
            isVertScanDef: Number(this.calculationparametersdef.VERT_SCAN_DEF),
            stopTopSurfDef: Number(this.calculationparametersdef.STOP_TOP_SURF_DEF),
            stopIntDef: Number(this.calculationparametersdef.STOP_INT_DEF),
            stopBottomSurfDef: Number(this.calculationparametersdef.STOP_BOTTOM_SURF_DEF),
            stopAvgDef: Number(this.calculationparametersdef.STOP_AVG_DEF),
            isStudyAlphaTopFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_TOP_FIXED_DEF),
            isStudyAlphaBottomFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_BOTTOM_FIXED_DEF),
            isStudyAlphaLeftFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_LEFT_FIXED_DEF),
            isStudyAlphaRightFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_RIGHT_FIXED_DEF),
            isStudyAlphaFrontFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_FRONT_FIXED_DEF),
            isStudyAlphaRearFixedDef: Number(this.calculationparametersdef.STUDY_ALPHA_REAR_FIXED_DEF),
            studyAlphaTopDef: Number(this.calculationparametersdef.STUDY_ALPHA_TOP_DEF),
            studyAlphaBottomDef: Number(this.calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF),
            studyAlphaLeftDef: Number(this.calculationparametersdef.STUDY_ALPHA_LEFT_DEF),
            studyAlphaRightDef: Number(this.calculationparametersdef.STUDY_ALPHA_RIGHT_DEF),
            studyAlphaFrontDef: Number(this.calculationparametersdef.STUDY_ALPHA_FRONT_DEF),
            studyAlphaRearDef: Number(this.calculationparametersdef.STUDY_ALPHA_REAR_DEF),
            storageStepDef: Number(this.calculationparametersdef.STORAGE_STEP_DEF),
            precisionLogStepDef: Number(this.calculationparametersdef.PRECISION_LOG_STEP_DEF),
            timeStepDef: Number(this.calculationparametersdef.TIME_STEP_DEF)
        }).subscribe(function (res) {
            if (res === 1) {
                _this.toastr.success('Save mesh setting completed', 'successfully');
                _this.getSettingCaculation();
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            // console.log(err);
        }, function () {
            _this.laddaSavingcalculation = false;
        });
    };
    CalculationComponent.prototype.resetTopValue = function () {
        this.calculationparametersdef.STUDY_ALPHA_TOP_DEF = 0;
    };
    CalculationComponent.prototype.resetBotvalue = function () {
        this.calculationparametersdef.STUDY_ALPHA_BOTTOM_DEF = 0;
    };
    CalculationComponent.prototype.resetLeftValue = function () {
        this.calculationparametersdef.STUDY_ALPHA_LEFT_DEF = 0;
    };
    CalculationComponent.prototype.resetRightValue = function () {
        this.calculationparametersdef.STUDY_ALPHA_RIGHT_DEF = 0;
    };
    CalculationComponent.prototype.resetFrontValue = function () {
        this.calculationparametersdef.STUDY_ALPHA_FRONT_DEF = 0;
    };
    CalculationComponent.prototype.resetRearValue = function () {
        this.calculationparametersdef.STUDY_ALPHA_REAR_DEF = 0;
    };
    CalculationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calculation',
            template: __webpack_require__("../../../../../src/app/views/settings/calculation/calculation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/settings/calculation/calculation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], CalculationComponent);
    return CalculationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"subnav\" class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" *ngFor=\"let nav of subnav\" [class.active]=\"router.isActive(nav.url)\" class=\"btn btn-outline-secondary\"\n      [routerLink]=\"nav.url\">\n      {{ nav.name | translate}}\n    </button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/settings/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/settings/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_nav_items__ = __webpack_require__("../../../../../src/app/views/settings/settings.nav-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.subnav = __WEBPACK_IMPORTED_MODULE_1__settings_nav_items__["a" /* SettingsNavItems */];
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/views/settings/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/settings/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/mesh/mesh.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <strong>{{'Default Mesh sizes (irregular mode)'|translate}}</strong>\n    </div>\n    <div class=\"card-body\" *ngIf=\"meshparamdef\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3 settings\">\n          <div class=\"form-group row\">\n            <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Dimension 1'|translate}}</label>\n            <div class=\"col-md-5\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"dim1\" name=\"dim1\" class=\"form-control\" [(ngModel)]=\"meshparamdef.MESH_1_SIZE\">\n                <span class=\"input-group-addon\">\n                  <small>({{ meshesSymbol }})</small>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Dimension 2'|translate }}</label>\n            <div class=\"col-md-5\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"dim2\" name=\"dim2\" class=\"form-control\" [(ngModel)]=\"meshparamdef.MESH_2_SIZE\">\n                <span class=\"input-group-addon\">\n                  <small>({{ meshesSymbol }})</small>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{'Dimension 3'|translate}}</label>\n            <div class=\"col-md-5\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"dim3\" name=\"dim3\" class=\"form-control\" [(ngModel)]=\"meshparamdef.MESH_3_SIZE\">\n                <span class=\"input-group-addon\">\n                  <small>({{ meshesSymbol }})</small>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer text-center\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"saveMyMeshParamDef()\" [ladda]=\"laddaSavingMesh\">\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{'Save'|translate}}</button>\n    </div>\n    <!-- /.card-footer -->\n  </div>\n  <!-- /.card -->\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/settings/mesh/mesh.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/settings/mesh/mesh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeshComponent = (function () {
    function MeshComponent(api, toastr, translate) {
        this.api = api;
        this.toastr = toastr;
        this.translate = translate;
        this.laddaSavingMesh = false;
        this.isLoading = false;
        this.meshesSymbol = '';
    }
    MeshComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        for (var i = 0; i < this.listUnits.length; i++) {
            if (Number(this.listUnits[i].TYPE_UNIT) === 20) {
                this.meshesSymbol = this.listUnits[i].SYMBOL;
            }
        }
    };
    MeshComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isLoading = true;
        this.api.getMyMeshParamDef().subscribe(function (data) {
            data.MESH_1_SIZE = Number(data.MESH_1_SIZE);
            data.MESH_2_SIZE = Number(data.MESH_2_SIZE);
            data.MESH_3_SIZE = Number(data.MESH_3_SIZE);
            _this.meshparamdef = data;
            _this.isLoading = false;
        });
    };
    MeshComponent.prototype.saveMyMeshParamDef = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.meshparamdef.MESH_1_SIZE) || String(this.meshparamdef.MESH_1_SIZE) === ''
            || isNaN(this.meshparamdef.MESH_1_SIZE)) {
            this.toastr.error(this.translate.instant('Please specify Dimension 1'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.meshparamdef.MESH_2_SIZE) || String(this.meshparamdef.MESH_2_SIZE) === ''
            || isNaN(this.meshparamdef.MESH_2_SIZE)) {
            this.toastr.error(this.translate.instant('Please specify Dimension 2'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.meshparamdef.MESH_3_SIZE) || String(this.meshparamdef.MESH_3_SIZE) === ''
            || isNaN(this.meshparamdef.MESH_3_SIZE)) {
            this.toastr.error(this.translate.instant('Please specify Dimension 3'), 'Error');
            return;
        }
        this.laddaSavingMesh = true;
        this.api.saveMyMeshParamDef({
            dim1: Number(this.meshparamdef.MESH_1_SIZE),
            dim2: Number(this.meshparamdef.MESH_2_SIZE),
            dim3: Number(this.meshparamdef.MESH_3_SIZE)
        }).subscribe(function (res) {
            if (res === 1) {
                _this.toastr.success(_this.translate.instant('Save mesh setting completed'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            _this.laddaSavingMesh = false;
            // console.log(err);
        }, function () {
            _this.laddaSavingMesh = false;
        });
    };
    MeshComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mesh',
            template: __webpack_require__("../../../../../src/app/views/settings/mesh/mesh.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/settings/mesh/mesh.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MeshComponent);
    return MeshComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n\t<div class=\"card\" *ngIf=\"temprecordptsdef\">\n\t\t<div class=\"card-header\">\n\t\t\t<strong>{{'Coordinates of the points of follow-up'|translate}}</strong>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label class=\"col-md-6 col-form-label\" for=\"text-input\">{{'Top'|translate}}</label>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1TopSurf\" name=\"axis1TopSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS1_PT_TOP_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2TopSurf\" name=\"axis2TopSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS2_PT_TOP_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3TopSurf\" name=\"axis3TopSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS3_PT_TOP_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label class=\"col-md-6 col-form-label\" for=\"text-input\">{{'Inside'|translate }}</label>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1IntPt\" name=\"axis1IntPt\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS1_PT_INT_PT_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2IntPt\" name=\"axis2IntPt\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS2_PT_INT_PT_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3IntPt\" name=\"axis3IntPt\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS3_PT_INT_PT_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label class=\"col-md-6 col-form-label\" for=\"text-input\">{{'Bottom'|translate}}</label>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1BotSurf\" name=\"axis1BotSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS1_PT_BOT_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2BotSurf\" name=\"axis2BotSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS2_PT_BOT_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3BotSurf\" name=\"axis3BotSurf\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS3_PT_BOT_SURF_DEF\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.card-body -->\n\t\t<div class=\"card-header\">\n\t\t\t<strong>{{'Coordinates of the points of follow-up'|translate}}</strong>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"row align-items-start\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Plan 12'|translate}}</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Plan 13'|translate }}</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Plan 23'|translate}}</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3PL12\" name=\"axis3PL12\" class=\"form-control\" \n\t\t\t\t\t\t\t[(ngModel)]=\"temprecordptsdef.AXIS3_PL_1_2_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2PL13\" name=\"axis2PL13\" class=\"form-control\" \n\t\t\t\t\t\t\t[(ngModel)]=\"temprecordptsdef.AXIS2_PL_1_3_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1PL23\" name=\"axis1PL23\" class=\"form-control\" \n\t\t\t\t\t\t\t[(ngModel)]=\"temprecordptsdef.AXIS1_PL_2_3_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>%</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-header\">\n\t\t\t<strong>{{'Coordinates of the axis of follow-up'|translate}}</strong>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"row align-items-start\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Axis 1 %'|translate}}</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Axis 2 %'|translate }}</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Axis 3 %'|translate}}</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2Axe1\" name=\"axis2Axe1\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS2_AX_1_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3Axe1\" name=\"axis3Axe1\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS3_AX_1_DEF\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1Axe2\" name=\"axis1Axe2\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS1_AX_2_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>3</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis3Axe2\" name=\"axis3Axe2\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS3_AX_2_DEF\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>1</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis1Axe3\" name=\"axis1Axe3\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS1_AX_3_DEF\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t<small>2</small>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"axis2Axe3\" name=\"axis2Axe3\" class=\"form-control\" [(ngModel)]=\"temprecordptsdef.AXIS2_AX_3_DEF\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-footer text-center\">\n\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"saveMyTempRecordPtsDef()\" [ladda]=\"laddaSavingResult\">\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{'Save'|translate}}</button>\n\t\t</div>\n\t\t<!-- /.card-footer -->\n\t</div>\n\t<!-- /.card -->\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/settings/result/result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/settings/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResultComponent = (function () {
    function ResultComponent(api, toastr, translate) {
        this.api = api;
        this.toastr = toastr;
        this.translate = translate;
        this.laddaSavingResult = false;
        this.isLoading = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
    };
    ResultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isLoading = true;
        this.api.getMyTempRecordPtsDef().subscribe(function (data) {
            data.AXIS1_PT_TOP_SURF_DEF = Number(data.AXIS1_PT_TOP_SURF_DEF);
            data.AXIS2_PT_TOP_SURF_DEF = Number(data.AXIS2_PT_TOP_SURF_DEF);
            data.AXIS3_PT_TOP_SURF_DEF = Number(data.AXIS3_PT_TOP_SURF_DEF);
            data.AXIS1_PT_INT_PT_DEF = Number(data.AXIS1_PT_INT_PT_DEF);
            data.AXIS2_PT_INT_PT_DEF = Number(data.AXIS2_PT_INT_PT_DEF);
            data.AXIS3_PT_INT_PT_DEF = Number(data.AXIS3_PT_INT_PT_DEF);
            data.AXIS1_PT_BOT_SURF_DEF = Number(data.AXIS1_PT_BOT_SURF_DEF);
            data.AXIS2_PT_BOT_SURF_DEF = Number(data.AXIS2_PT_BOT_SURF_DEF);
            data.AXIS3_PT_BOT_SURF_DEF = Number(data.AXIS3_PT_BOT_SURF_DEF);
            data.AXIS2_PL_1_3_DEF = Number(data.AXIS2_PL_1_3_DEF);
            data.AXIS3_PL_1_2_DEF = Number(data.AXIS3_PL_1_2_DEF);
            data.AXIS1_PL_2_3_DEF = Number(data.AXIS1_PL_2_3_DEF);
            data.AXIS2_AX_1_DEF = Number(data.AXIS2_AX_1_DEF);
            data.AXIS3_AX_1_DEF = Number(data.AXIS3_AX_1_DEF);
            data.AXIS1_AX_2_DEF = Number(data.AXIS1_AX_2_DEF);
            data.AXIS3_AX_2_DEF = Number(data.AXIS3_AX_2_DEF);
            data.AXIS1_AX_3_DEF = Number(data.AXIS1_AX_3_DEF);
            data.AXIS2_AX_3_DEF = Number(data.AXIS2_AX_3_DEF);
            _this.temprecordptsdef = data;
            _this.isLoading = false;
        });
    };
    ResultComponent.prototype.saveMyTempRecordPtsDef = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_PT_TOP_SURF_DEF)
            || String(this.temprecordptsdef.AXIS1_PT_TOP_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_PT_TOP_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_PT_TOP_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Top- X'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_PT_TOP_SURF_DEF)
            || String(this.temprecordptsdef.AXIS2_PT_TOP_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_PT_TOP_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_PT_TOP_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Top- Y '), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_PT_TOP_SURF_DEF)
            || String(this.temprecordptsdef.AXIS3_PT_TOP_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_PT_TOP_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_PT_TOP_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Top- Z '), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_PT_INT_PT_DEF)
            || String(this.temprecordptsdef.AXIS1_PT_INT_PT_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_PT_INT_PT_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_PT_INT_PT_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Inside- X'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_PT_INT_PT_DEF)
            || String(this.temprecordptsdef.AXIS2_PT_INT_PT_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_PT_INT_PT_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_PT_INT_PT_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Inside- Y'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_PT_INT_PT_DEF)
            || String(this.temprecordptsdef.AXIS3_PT_INT_PT_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_PT_INT_PT_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_PT_INT_PT_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Inside- Z'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_PT_BOT_SURF_DEF)
            || String(this.temprecordptsdef.AXIS1_PT_BOT_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_PT_BOT_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_PT_BOT_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Bottom- X'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_PT_BOT_SURF_DEF)
            || String(this.temprecordptsdef.AXIS2_PT_BOT_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_PT_BOT_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_PT_BOT_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Bottom- Y'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_PT_BOT_SURF_DEF)
            || String(this.temprecordptsdef.AXIS3_PT_BOT_SURF_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_PT_BOT_SURF_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_PT_BOT_SURF_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Bottom- Z'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_PL_1_2_DEF)
            || String(this.temprecordptsdef.AXIS3_PL_1_2_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_PL_1_2_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_PL_1_2_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Plan 12- Y'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_PL_1_3_DEF)
            || String(this.temprecordptsdef.AXIS2_PL_1_3_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_PL_1_3_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_PL_1_3_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Plan 13- Z'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_PL_2_3_DEF)
            || String(this.temprecordptsdef.AXIS1_PL_2_3_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_PL_2_3_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_PL_2_3_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Plan 23- X'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_AX_1_DEF)
            || String(this.temprecordptsdef.AXIS2_AX_1_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_AX_1_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_AX_1_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 1- Y'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_AX_1_DEF)
            || String(this.temprecordptsdef.AXIS3_AX_1_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_AX_1_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_AX_1_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 1- Z'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_AX_2_DEF)
            || String(this.temprecordptsdef.AXIS1_AX_2_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_AX_2_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_AX_2_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 2- X '), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS3_AX_2_DEF)
            || String(this.temprecordptsdef.AXIS3_AX_2_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS3_AX_2_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS3_AX_2_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 2- Z '), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS1_AX_3_DEF)
            || String(this.temprecordptsdef.AXIS1_AX_3_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS1_AX_3_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS1_AX_3_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 3- X'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.temprecordptsdef.AXIS2_AX_3_DEF)
            || String(this.temprecordptsdef.AXIS2_AX_3_DEF) === ''
            || isNaN(this.temprecordptsdef.AXIS2_AX_3_DEF)
            || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(this.temprecordptsdef.AXIS2_AX_3_DEF))) {
            this.toastr.error(this.translate.instant('Please specify Axis 3- Y'), 'Error');
            return;
        }
        this.laddaSavingResult = true;
        this.api.saveMyTempRecordPtsDef({
            axis1TopSurf: Number(this.temprecordptsdef.AXIS1_PT_TOP_SURF_DEF),
            axis2TopSurf: Number(this.temprecordptsdef.AXIS2_PT_TOP_SURF_DEF),
            axis3TopSurf: Number(this.temprecordptsdef.AXIS3_PT_TOP_SURF_DEF),
            axis1IntPt: Number(this.temprecordptsdef.AXIS1_PT_INT_PT_DEF),
            axis2IntPt: Number(this.temprecordptsdef.AXIS2_PT_INT_PT_DEF),
            axis3IntPt: Number(this.temprecordptsdef.AXIS3_PT_INT_PT_DEF),
            axis1BotSurf: Number(this.temprecordptsdef.AXIS1_PT_BOT_SURF_DEF),
            axis2BotSurf: Number(this.temprecordptsdef.AXIS2_PT_BOT_SURF_DEF),
            axis3BotSurf: Number(this.temprecordptsdef.AXIS3_PT_BOT_SURF_DEF),
            axis3PL12: Number(this.temprecordptsdef.AXIS3_PL_1_2_DEF),
            axis2PL13: Number(this.temprecordptsdef.AXIS2_PL_1_3_DEF),
            axis1PL23: Number(this.temprecordptsdef.AXIS1_PL_2_3_DEF),
            axis2Axe1: Number(this.temprecordptsdef.AXIS2_AX_1_DEF),
            axis3Axe1: Number(this.temprecordptsdef.AXIS3_AX_1_DEF),
            axis1Axe2: Number(this.temprecordptsdef.AXIS1_AX_2_DEF),
            axis3Axe2: Number(this.temprecordptsdef.AXIS3_AX_2_DEF),
            axis1Axe3: Number(this.temprecordptsdef.AXIS1_AX_3_DEF),
            axis2Axe3: Number(this.temprecordptsdef.AXIS2_AX_3_DEF)
        }).subscribe(function (res) {
            if (res === 1) {
                _this.toastr.success(_this.translate.instant('Save result setting completed'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            _this.laddaSavingResult = false;
        }, function () {
            _this.laddaSavingResult = false;
        });
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("../../../../../src/app/views/settings/result/result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/settings/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/settings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/settings/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesh_mesh_component__ = __webpack_require__("../../../../../src/app/views/settings/mesh/mesh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculation_calculation_component__ = __webpack_require__("../../../../../src/app/views/settings/calculation/calculation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result_component__ = __webpack_require__("../../../../../src/app/views/settings/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            {
                path: '',
                redirectTo: 'mesh',
                pathMatch: 'full',
            },
            {
                path: 'mesh',
                component: __WEBPACK_IMPORTED_MODULE_3__mesh_mesh_component__["a" /* MeshComponent */],
            },
            {
                path: 'calculation',
                component: __WEBPACK_IMPORTED_MODULE_4__calculation_calculation_component__["a" /* CalculationComponent */],
            },
            {
                path: 'result',
                component: __WEBPACK_IMPORTED_MODULE_5__result_result_component__["a" /* ResultComponent */],
            }
        ]
    }
];
var SettingsRoutingModule = (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__ = __webpack_require__("../../../../../src/app/views/settings/settings-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/settings/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh_mesh_component__ = __webpack_require__("../../../../../src/app/views/settings/mesh/mesh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculation_calculation_component__ = __webpack_require__("../../../../../src/app/views/settings/calculation/calculation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_component__ = __webpack_require__("../../../../../src/app/views/settings/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__["a" /* SettingsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__layout_layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_4__mesh_mesh_component__["a" /* MeshComponent */], __WEBPACK_IMPORTED_MODULE_5__calculation_calculation_component__["a" /* CalculationComponent */], __WEBPACK_IMPORTED_MODULE_6__result_result_component__["a" /* ResultComponent */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/settings/settings.nav-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNavItems; });
var SettingsNavItems = [
    {
        name: 'Mesh',
        url: '/settings/mesh',
        icon: '',
    },
    {
        name: 'Calculation',
        url: '/settings/calculation',
        icon: '',
    },
    {
        name: 'Result',
        url: '/settings/result',
        icon: '',
    }
];


/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map