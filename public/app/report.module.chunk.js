webpackJsonp(["report.module"],{

/***/ "../../../../../src/app/views/report/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"subnav\" class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" *ngFor=\"let nav of subnav\"\n      [class.active]=\"router.isActive(nav.url)\"\n      class=\"btn btn-outline-secondary\" [routerLink]=\"nav.url\">\n      {{ nav.name }}\n    </button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/report/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/report/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_nav_items__ = __webpack_require__("../../../../../src/app/views/report/report.nav-items.ts");
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
        this.subnav = __WEBPACK_IMPORTED_MODULE_1__report_nav_items__["a" /* ReportNavItems */];
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/views/report/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/report/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/report/report-config/report-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div *ngIf=\"checkcontrol\">\n    <div *ngIf=\"loading == true\" class=\"text-center\" id=\"showLoader\"></div>\n    <div class=\"card product-container\">\n        <div class=\"card-header\">\n          <strong>{{ 'HEAT BALANCE' | translate }}</strong>\n        </div>\n        <div class=\"card-body\" *ngIf=\"report\">\n          <strong style=\"padding:10px;\">{{ 'Customisation' | translate }}</strong>\n          <table class=\"table table-bordered table-sm\" style=\"margin-top:10px;\">\n            <tr>\n              <td>\n                <div class=\"form-group row\">\n                  <strong class=\"col-md-3\">{{'Customer' | translate}}</strong>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Company name' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.DEST_SURNAME\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Surname / Name' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.DEST_NAME\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Function' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.DEST_FUNCTION\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Contact' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.DEST_COORD\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"form-group row\">\n                  <strong class=\"col-md-4\">{{'Study realized by' | translate}}</strong>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Company name' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.WRITER_SURNAME\" [disabled]=\"ischeckUser\"  class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Surname / Name' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.WRITER_NAME\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Function' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.WRITER_FUNCTION\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <p class=\"col-md-4\">{{'Contact' | translate}}</p>\n                  <div class=\"col-md\"> \n                    <input type=\"text\" [(ngModel)]=\"report.WRITER_COORD\" [disabled]=\"ischeckUser\" class=\"form-control\">\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </table>\n          <table class=\"table table-bordered table-sm\">\n            <tr>\n              <td align=\"center\" width=\"25%\" ><strong>{{\"Customer's logo\" | translate}}</strong></td>\n              <td align=\"center\" width=\"25%\"><strong>{{'First page image' | translate}}</strong></td>\n              <td align=\"center\" width=\"50%\"><strong>{{'Last page comment' | translate}}</strong></td>\n            </tr>\n            <tr>\n              <td align=\"center\">\n                <div *ngIf=\"report.CUSTOMER_LOGO != ''; else imgLogoEmpty\">\n                    <img [src]=\"report.CUSTOMER_LOGO\" width=\"100\" height=\"100\"><br>\n                </div>\n                <ng-template #imgLogoEmpty>\n                    <p style=\"width: 50px; height: 60px;\">No logo</p><br>\n                </ng-template>\n                <label class=\"custom-file-upload\" style=\"margin-top: 0.5em;\">\n                  <input type=\"file\" id=\"file\" [disabled]=\"ischeckUser\" (change)=\"handleFileInput($event.target.files)\" style=\"display: none;\">\n                  <i class=\"fa fa-cloud-upload\"></i> {{'Change' | translate}}\n                </label>\n              </td>\n              <td align=\"center\">\n                <div *ngIf=\"report.PHOTO_PATH != ''; else imgLogoPhotoPath\">\n                    <img [src]=\"report.PHOTO_PATH\" width=\"100\" height=\"100\"><br>\n                </div>\n                <ng-template #imgLogoPhotoPath>\n                    <img src=\"assets/img/globe_food.gif\" width=\"100\" height=\"100\"><br>\n                </ng-template>                \n                <label class=\"custom-file-upload\" style=\"margin-top: 0.5em;\">\n                  <input type=\"file\" name=\"img-logo\" [disabled]=\"ischeckUser\" style=\"display: none;\" (change)=\"handleFilePhotoPath($event.target.files)\"/>\n                  <i class=\"fa fa-cloud-upload\"></i> {{'Change' | translate}}\n                </label>\n              </td>\n              <td align=\"center\" valign=\"center\">\n                <textarea class=\"form-control\" style=\"height: 125px;\" [(ngModel)]=\"report.REPORT_COMMENT\" [disabled]=\"ischeckUser\" ></textarea>\n              </td>\n            </tr>\n          </table>\n          <strong style=\"padding:5px;\"> {{'Input data' | translate}}</strong>\n          <table class=\"table table-bordered table-sm\" style=\"margin-top:10px;\">\n            <tr>\n              <td>\n                <strong>{{'Product' | translate}}</strong><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepProdList\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.PROD_LIST\" [checked]=\"report.PROD_LIST == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Components list' | translate}}\n                </label><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepProd3D\" [(ngModel)]=\"report.PROD_3D\" [disabled]=\"ischeckUser\" [checked]=\"report.PROD_3D == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Product 3D' | translate}}\n                </label>\n              </td>\n              <td>\n                <strong>{{'Equipment' | translate}}</strong><br>\n                <label class=\"form-checkbox-label\" style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepEquipList\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.EQUIP_LIST\" [checked]=\"report.EQUIP_LIST == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Equipment list' | translate}}\n                </label><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepLayout\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ASSES_ECO\" [checked]=\"report.ASSES_ECO == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Belt or shelves layout' | translate }}\n                </label>\n              </td>\n              <td>\n                <strong>{{'Other inputs' | translate}}</strong><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\" *ngIf=\"report.REP_CUSTOMER\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepCustomer\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.REP_CUSTOMER\" [checked]=\"report.REP_CUSTOMER == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Production' | translate }}\n                </label><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\" >\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepPacking\" [disabled]=\"ischeckUser || study.ID_PACKING == 0\" [(ngModel)]=\"study.ID_PACKING\" [checked]=\"study.ID_PACKING > 0\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  {{'Packaging data' | translate}}\n                </label><br>\n                <label class=\"form-checkbox-label\"style=\"padding:10px 0px 0px 20px;\">\n                  <label class=\"switch switch-icon switch-primary-outline-alt\" *ngIf=\"study.OPTION_CRYOPIPELINE != null && !(study.OPTION_CRYOPIPELINE == 0); else notPipe\">\n                    <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepPipeLine\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.PIPELINE\" [checked]=\"report.PIPELINE == 1\" value=\"1\">\n                    <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                    <span class=\"switch-handle\"></span>\n                  </label>\n                  <ng-template #notPipe>\n                    <label class=\"switch switch-icon switch-primary-outline-alt\">\n                      <input type=\"checkbox\" class=\"switch-input\" name=\"refContRepPipeLine\" disabled value=\"0\">\n                      <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                      <span class=\"switch-handle\"></span>\n                    </label>\n                  </ng-template>\n                  {{'Pipeline Elements' | translate}}\n                </label>\n              </td>\n            </tr>\n          </table>\n          <strong style=\"padding:5px;\">{{'Calculation Output' | translate}}</strong>\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-sm\" style=\"margin-top:10px; font-size: 12px;\">\n              <tr>\n                <td colspan=\"11\"><strong>{{'Consumption & Prices' | translate}}</strong></td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Overall Cryogen Consumption Ratio (product + equipment and pipeline losses) Unit of Cryogen, per piece of product.' | translate}}\n                  ({{ symbol.consumSymbol}})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption (product + equipment and pipeline losses).' | translate}}  ({{ symbol.consumSymbol }}/kg)\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Specific Cryogen Consumption Ratio (product only) Unit of Cryogen, per unit weight of product.' | translate }}  ({{ symbol.consumSymbol }}/kg)\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption per hour' | translate }} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption per day' | translate}} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption per week' | translate}} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption per month' | translate}} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Total Cryogen Consumption per year' | translate }} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Equipment Cryogen Consumption' | translate}} ({{ symbol.consumSymbol }})\t\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Pipeline consumption' | translate}} ({{ symbol.consumSymbol }})\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  {{'Tank losses' | translate}} ({{ symbol.consumSymbol }})\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsOverall\" [(ngModel)]=\"report.CONS_OVERALL\" [checked]=\"report.CONS_OVERALL == 1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsTotal\" [(ngModel)]=\"report.CONS_TOTAL\" [checked]=\"report.CONS_TOTAL == 1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsSpecific\" [(ngModel)]=\"report.CONS_SPECIFIC\" [checked]=\"report.CONS_SPECIFIC == 1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"refContRepConsHour\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.CONS_HOUR\" [checked]=\"report.CONS_HOUR == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsDay\" [(ngModel)]=\"report.CONS_DAY\" [checked]=\"report.CONS_DAY == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsWeek\" [(ngModel)]=\"report.CONS_WEEK\" [checked]=\"report.CONS_WEEK == 1\" value=\"1\" >\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsMonth\" [(ngModel)]=\"report.CONS_MONTH\" [checked]=\"report.CONS_MONTH == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsYear\" [(ngModel)]=\"report.CONS_YEAR\" [checked]=\"report.CONS_YEAR == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsEquip\" [(ngModel)]=\"report.CONS_EQUIP\" [checked]=\"report.CONS_EQUIP == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsPipe\" [(ngModel)]=\"report.CONS_PIPE\" [checked]=\"report.CONS_PIPE == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n                <td align=\"center\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsTank\" [(ngModel)]=\"report.CONS_TANK\" [checked]=\"report.CONS_TANK == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </td>\n              </tr>\n              <tr>\n                <td colspan=\"11\">\n                  <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\" >\n                    <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"ischeckUser\" name=\"refContRepConsPie\" [(ngModel)]=\"report.REP_CONS_PIE\" [checked]=\"report.REP_CONS_PIE == 1\" value=\"1\">\n                    <span class=\"custom-control-indicator\"></span>  \n                    <span style=\"margin-top: 0.3em;\">{{'Consumption pies' | translate}}</span>\n                  </label>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <!-- optimum -->\n          <div *ngIf=\"study.CALCULATION_MODE == 3\" class=\"table-responsive\">\n            <table class=\"table table-bordered table-sm\" style=\"font-size: 12px;\">\n              <tr>\n                <td>\n                  <form class=\"form form-horizontal\">\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-3\">{{'Sizing & Thermal Results' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"refContRepSizingValuesChosen\" [(ngModel)]=\"report.isSizingValuesChosen\" [checked]=\"report.isSizingValuesChosen != 0\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values (Chosen product flowrate)' | translate}}\n                        </label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"refContRepSizingValuesMax\" [(ngModel)]=\"report.isSizingValuesMax\" [checked]=\"report.isSizingValuesMax != 0\" value=\"16\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values (Maximum product flowrate)' | translate}}\n                        </label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"refContRepSizingGraphe\" [(ngModel)]=\"report.SIZING_GRAPHE\" [checked]=\"report.SIZING_GRAPHE == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                  </form>\n                </td>\n              </tr>\n            </table>\n            <table class=\"table table-bordered table-sm\">\n              <tr>\n                <td width=\"40%\">\n                  <div class=\"form-group row\">\n                    <strong class=\"col-md-12\"> {{'Enthalpies' | translate}}</strong>\n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                      <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                        <label class=\"switch switch-icon switch-primary-outline-alt\">\n                          <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ENTHALPY_V\" [checked]=\"report.ENTHALPY_V == 1\" value=\"1\">\n                          <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                          <span class=\"switch-handle\"></span>\n                        </label>\n                        {{'Values' | translate}} \n                      </label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                        <label class=\"switch switch-icon switch-primary-outline-alt\">\n                          <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ENTHALPY_G\" [checked]=\"report.ENTHALPY_G == 1\" value=\"1\">\n                          <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                          <span class=\"switch-handle\"></span>\n                        </label>\n                        {{'Graph' | translate}}\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                    <div class=\"col-md-3\">\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ENTHALPY_SAMPLE\">\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Product Section' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOCHRONE_V\" [checked]=\"report.ISOCHRONE_V == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values' | translate}} \n                        </label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOCHRONE_G\" [checked]=\"report.ISOCHRONE_G == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ISOCHRONE_SAMPLE\">\n                        </div>\n                      </div>\n                    </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Time Based' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-6\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOVALUE_V\" [checked]=\"report.ISOVALUE_V == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values' | translate}} \n                        </label>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOVALUE_G\" [checked]=\"report.ISOVALUE_G == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ISOVALUE_SAMPLE\">\n                        </div>\n                      </div>\n                    </div>\n                </td>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Contour' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContour\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" disabled>\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                        </label>\n                      </div>\n                      <ng-template #checkContour>\n                        <div class=\"col-md-4\">\n                          <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                            <label class=\"switch switch-icon switch-primary-outline-alt\">\n                              <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.CONTOUR2D_G\" [checked]=\"report.CONTOUR2D_G == 1\" value=\"1\">\n                              <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                              <span class=\"switch-handle\"></span>\n                            </label>\n                          </label>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContourTemperature\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature step' | translate}} </label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperature>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature step' | translate}} </label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" placeholder=\"0.00\" \n                            [(ngModel)]=\"report.CONTOUR2D_TEMP_STEP\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" \n                            [(ngModel)]=\"report.refContRep2DTempStepRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n      \n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 \n                    || report.productElmt.ID_SHAPE == 6; else checkContourTemperatureMin\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Min' | translate}}  ({{ temperatureSymbol }})</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperatureMin>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Min' | translate}}  ({{ temperatureSymbol }})</label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" placeholder=\"0.00\" \n                            [(ngModel)]=\"report.CONTOUR2D_TEMP_MIN\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" \n                            [(ngModel)]=\"report.refContRep2DTempMinRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n\n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 \n                    || report.productElmt.ID_SHAPE == 6; else checkContourTemperatureMax\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Max' | translate}}  ({{ temperatureSymbol }})</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperatureMax>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Max' | translate}}  ({{ temperatureSymbol }})</label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" placeholder=\"0.00\" [(ngModel)]=\"report.CONTOUR2D_TEMP_MAX\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.refContRep2DTempMaxRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n                </td>\n              </tr>\n            </table>\n            <table class=\"table table-bordered table-sm\">\n              <tr>\n                <td colspan=\"3\">\n                    <strong>{{'Following-up Point ' | translate}} ({{ meshesSymbol }})</strong>\n                    <button class=\"btn btn-primary btn-sm\" [disabled]=\"ischeckUser\" style=\"float:right;margin-right:10px;\"> {{'Selected points' | translate}}</button>\n                </td>\n              </tr>\n              <tr>\n                <td width=\"60%\">\n                    <strong >{{'Points' | translate}}</strong>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{'Top'|translate}}</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT1_X\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeTop1\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeTop1>\n                              <option [value]=\"report.POINT1_X\">{{ report.POINT1_X }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\">{{'None'|translate}}</option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n      \n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT1_Y\">\n                              <ng-container *ngIf=\"shape < 10;else newShapeTop2\">\n                                <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                              </ng-container>\n                              <ng-template #newShapeTop2>\n                                <option [value]=\"report.POINT1_Y\">{{ report.POINT1_Y }}</option>\n                              </ng-template>\n                            </select>\n                        </div>\n                      </div>\n      \n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9 || report.productElmt.ID_SHAPE > 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT1_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeTop3\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeTop3>\n                              <option [value]=\"report.POINT1_Z\">{{ report.POINT1_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">Internal :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT2_X\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeInternal1\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeInternal1>\n                              <option [value]=\"report.POINT2_X\">{{ report.POINT2_X }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT2_Y\">\n                              <ng-container *ngIf=\"shape < 10;else newShapeInternal2\">\n                                <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                              </ng-container>\n                              <ng-template #newShapeInternal2>\n                                <option [value]=\"report.POINT2_Y\">{{ report.POINT2_Y }}</option>\n                              </ng-template>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9 || report.productElmt.ID_SHAPE > 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT2_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeInternal3\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeInternal3>\n                              <option [value]=\"report.POINT2_Z\">{{ report.POINT2_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">Bottom :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT3_X\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeBottom1\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeBottom1>\n                                <option [value]=\"report.POINT3_X\">{{ report.POINT3_X }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT3_Y\">\n                              <ng-container *ngIf=\"shape < 10;else newShapeBottom2\">\n                                <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                              </ng-container>\n                              <ng-template #newShapeBottom2>\n                                  <option [value]=\"report.POINT3_Y\">{{ report.POINT3_Y }}</option>\n                              </ng-template>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9 || report.productElmt.ID_SHAPE > 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.POINT3_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeBottom3\">\n                             <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeBottom3>\n                                <option [value]=\"report.POINT3_Z\">{{ report.POINT3_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                </td>\n                <td width=\"40%\">\n                    <strong >Axes</strong>\n                    <div class=\"form-group row\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 1 :</label>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE3_Y\">\n                              <ng-container *ngIf=\"shape < 10;else newShapeAxe1Y\">\n                                <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                              </ng-container>\n                              <ng-template #newShapeAxe1Y>\n                                <option [value]=\"report.AXE3_Y\">{{ report.AXE3_Y }}</option>\n                              </ng-template>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE >= 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE3_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeAxe1Z\">\n                             <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeAxe1Z>\n                              <option [value]=\"report.AXE3_Z\">{{ report.AXE3_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 2 :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE2_X\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeAxe2X\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeAxe2X>\n                              <option [value]=\"report.AXE2_X\">{{ report.AXE2_X }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE >= 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE2_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeAxe2Z\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeAxe2Z>\n                              <option [value]=\"report.AXE2_Z\">{{ report.AXE2_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}}</option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6 && report.productElmt.ID_SHAPE != 4 && report.productElmt.ID_SHAPE != 5 && report.productElmt.ID_SHAPE != 7 && report.productElmt.ID_SHAPE != 8\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 3 :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE1_X\">\n                            <ng-container *ngIf=\"shape < 10;else newShapeAxe3X\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapeAxe3X>\n                              <option [value]=\"report.AXE1_X\">{{ report.AXE1_X }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.AXE1_Y\">\n                              <ng-container *ngIf=\"shape < 10;else newShapeAxe3Y\">\n                                <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                              </ng-container>\n                              <ng-template #newShapeAxe3Y>\n                                <option [value]=\"report.AXE1_Y\">{{ report.AXE1_Y }}</option>\n                              </ng-template>\n                            </select>\n                        </div>\n                      </div>\n                    </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6 && report.productElmt.ID_SHAPE != 4 && report.productElmt.ID_SHAPE != 5 && report.productElmt.ID_SHAPE != 7 && report.productElmt.ID_SHAPE != 8\">\n                <td colspan=\"2\">\n                  <strong>  Slices </strong>\n                  <div class=\"form-group row\" >\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\">Slice 23</label>\n                    <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmpty \">\n                      <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                        <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.PLAN_X\">\n                          <ng-container *ngIf=\"shape < 10;else newShapePlanX\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </ng-container>\n                          <ng-template #newShapePlanX>\n                            <option [value]=\"report.PLAN_X\">{{ report.PLAN_X }}</option>\n                          </ng-template>\n                        </select>\n                      </div>\n                    </div>\n                    <ng-template #shapeEmpty>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                            <option value=\"0\"> {{'None'|translate}} </option>\n                          </select>\n                        </div>\n                      </div>\n                    </ng-template>\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\">Slice 13</label>\n                    <div class=\"col-md-2\">\n                      <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.PLAN_Y\">\n                            <ng-container *ngIf=\"shape < 10;else newShapePlanY\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapePlanY>\n                              <option [value]=\"report.PLAN_Y\">{{ report.PLAN_Y }}</option>\n                            </ng-template>\n                          </select>\n                      </div>\n                    </div>\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">Slice 12</label>\n                    <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">\n                      <div *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE >= 9; else shapeEmpty3 \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser || shape > 9\" [(ngModel)]=\"report.PLAN_Z\">\n                            <ng-container *ngIf=\"shape < 10;else newShapePlanZ\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </ng-container>\n                            <ng-template #newShapePlanZ>\n                              <option [value]=\"report.PLAN_Z\">{{ report.PLAN_Z }}</option>\n                            </ng-template>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option value=\"0\"> {{'None'|translate}} </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <!-- end optimum -->\n\n          <!-- estimation -->\n          <div *ngIf=\"study.CALCULATION_MODE == 1\">\n            <table class=\"table table-bordered table-sm\" style=\"font-size: 12px;\">\n              <tr>\n                <td width=\"50%\">\n                  <form class=\"form form-horizontal\">\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Sizing & Thermal Results' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"refContRepSizingValues\" [checked]=\"report.SIZING_VALUES == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values' | translate}}\n                        </label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"refContRepSizingGraphe\" [(ngModel)]=\"report.SIZING_GRAPHE\" [checked]=\"report.SIZING_GRAPHE == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                  </form>\n                </td>\n                <td>\n                  <form class=\"form form-horizontal\">\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Temperature' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"choixTR\" [checked]=\"report.SIZING_TR == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Control Temperature' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"choixTR\" [(ngModel)]=\"report.SIZING_GRAPHE\" [checked]=\"report.SIZING_GRAPHE == 2\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Control Temperature 10°C (18°F) colder.' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" name=\"choixTR\" [(ngModel)]=\"report.SIZING_GRAPHE\" [checked]=\"report.SIZING_GRAPHE == 0\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Control Temperature 10°C (18°F) warmer.' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                  </form>\n                </td>\n              </tr>\n            </table>\n            <table class=\"table table-bordered table-sm\">\n              <tr>\n                <td width=\"50%\">\n                  <div class=\"form-group row\">\n                    <strong class=\"col-md-12\"> {{'Enthalpies' | translate}}</strong>\n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                      <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                        <label class=\"switch switch-icon switch-primary-outline-alt\">\n                          <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ENTHALPY_V\" [checked]=\"report.ENTHALPY_V == 1\" value=\"1\">\n                          <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                          <span class=\"switch-handle\"></span>\n                        </label>\n                        {{'Values' | translate}} \n                      </label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                        <label class=\"switch switch-icon switch-primary-outline-alt\">\n                          <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ENTHALPY_G\" [checked]=\"report.ENTHALPY_G == 1\" value=\"1\">\n                          <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                          <span class=\"switch-handle\"></span>\n                        </label>\n                        {{'Graph' | translate}}\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                    <div class=\"col-md-3\">\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ENTHALPY_SAMPLE\">\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Product Section' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOCHRONE_V\" [checked]=\"report.ISOCHRONE_V == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values' | translate}} \n                        </label>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOCHRONE_G\" [checked]=\"report.ISOCHRONE_G == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ISOCHRONE_SAMPLE\">\n                        </div>\n                      </div>\n                    </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Time Based' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-6\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOVALUE_V\" [checked]=\"report.ISOVALUE_V == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Values' | translate}} \n                        </label>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.ISOVALUE_G\" [checked]=\"report.ISOVALUE_G == 1\" value=\"1\">\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                          {{'Graph' | translate}}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{'Number of samples' | translate}} </label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.ISOVALUE_SAMPLE\">\n                        </div>\n                      </div>\n                    </div>\n                </td>\n                <td>\n                    <div class=\"form-group row\">\n                      <strong class=\"col-md-12\">{{'Contour' | translate}}</strong>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-4\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContourEs\">\n                        <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                          <label class=\"switch switch-icon switch-primary-outline-alt\">\n                            <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" disabled>\n                            <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                            <span class=\"switch-handle\"></span>\n                          </label>\n                        </label>\n                      </div>\n                      <ng-template #checkContourEs>\n                        <div class=\"col-md-4\">\n                          <label class=\"form-checkbox-label\"style=\"margin-left:20px;\">\n                            <label class=\"switch switch-icon switch-primary-outline-alt\">\n                              <input type=\"checkbox\" class=\"switch-input\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.CONTOUR2D_G\" [checked]=\"report.CONTOUR2D_G == 1\" value=\"1\">\n                              <span class=\"switch-label\" data-on=\"&#xf00c;\" data-off=\"&#xf00d;\"></span>\n                              <span class=\"switch-handle\"></span>\n                            </label>\n                          </label>\n                        </div>\n                      </ng-template>\n                    </div>\n      \n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContourTemperatureEs\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature step' | translate}} </label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperatureEs>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature step' | translate}} </label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.CONTOUR2D_TEMP_STEP\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.refContRep2DTempStepRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n      \n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContourTemperatureMinEs\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Min' | translate}}  ({{ report.temperatureSymbol }})</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperatureMinEs>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Min' | translate}}  ({{ report.temperatureSymbol }})</label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.CONTOUR2D_TEMP_MIN\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.refContRep2DTempMinRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n                    <div class=\"form-group row\" style=\"margin-left:10px;\" *ngIf=\"report.productElmt.ID_SHAPE == 1 || report.productElmt.ID_SHAPE == 6; else checkContourTemperatureMaxEs\">\n                      <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Max' | translate}}  ({{ report.temperatureSymbol }})</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" disabled>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #checkContourTemperatureMaxEs>\n                      <div class=\"form-group row\" style=\"margin-left:10px;\" >\n                        <label class=\"col-md-4 col-form-label\" for=\"text-input\">{{'Temperature Max' | translate}}  ({{ report.temperatureSymbol }})</label>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.CONTOUR2D_TEMP_MAX\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" placeholder=\"0.00\" [(ngModel)]=\"report.refContRep2DTempMaxRef\" disabled>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n                </td>\n              </tr>\n            </table>\n\n            <table class=\"table table-bordered table-sm\">\n              <tr>\n                <td colspan=\"3\">\n                    <strong>{{'Following-up Point (mm)' | translate}}</strong>\n                    <button class=\"btn btn-primary btn-sm\" [disabled]=\"ischeckUser\" style=\"float:right;margin-right:10px;\"> {{'Selected points' | translate}}</button>\n                </td>\n              </tr>\n              <tr>\n                <td width=\"50%\">\n                    <strong >{{'Points' | translate}}</strong>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{'Top'|translate}}</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos.axis1\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT1_X\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmptyEs>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n      \n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT1_Y\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </select>\n                        </div>\n                      </div>\n      \n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT1_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option> </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">Internal :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT2_X\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmptyEs>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option > </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT2_Y\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT2_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">Bottom :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT3_X\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmptyEs>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option> </option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT3_Y\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.POINT3_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                </td>\n                <td width=\"40%\">\n                    <strong >Axes</strong>\n                    <div class=\"form-group row\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 1 :</label>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE3_Y\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </select>\n                        </div>\n                      </div>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE3_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 2 :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE2_X\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmptyEs>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">3</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE2_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>v\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                    <div class=\"form-group row\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6 && report.productElmt.ID_SHAPE != 4 && report.productElmt.ID_SHAPE != 5 && report.productElmt.ID_SHAPE != 7 && report.productElmt.ID_SHAPE != 8\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">Axes 3 :</label>\n                      <label class=\"col-md-1 col-form-label\">1</label>\n                      <div class=\"col-md-3\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE1_X\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmptyEs>v\n                        <div class=\"col-md-3\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                      <label class=\"col-md-1 col-form-label\">2</label>\n                      <div class=\"col-md-3\">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.AXE1_Y\">\n                              <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                            </select>\n                        </div>\n                      </div>\n                    </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6 && report.productElmt.ID_SHAPE != 4 && report.productElmt.ID_SHAPE != 5 && report.productElmt.ID_SHAPE != 7 && report.productElmt.ID_SHAPE != 8\">\n                <td colspan=\"2\">\n                  <strong>  Slices </strong>\n                  <div class=\"form-group row\" >\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\">Slice 23</label>\n                    <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 || report.productElmt.ID_SHAPE != 6; else shapeEmptyEs \">\n                      <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                        <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.PLAN_X\">\n                          <option *ngFor=\"let axis of meshAxisPos.axis1\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <ng-template #shapeEmptyEs>\n                      <div class=\"col-md-2\">\n                        <div class=\"input-group\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                            <option></option>\n                          </select>\n                        </div>\n                      </div>\n                    </ng-template>\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\">Slice 13</label>\n                    <div class=\"col-md-2\">\n                      <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.PLAN_Y\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis2\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                      </div>\n                    </div>\n                    <label class=\"col-md-2 col-form-label\" for=\"text-input\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">Slice 12</label>\n                    <div class=\"col-md-2\" *ngIf=\"report.productElmt.ID_SHAPE != 1 && report.productElmt.ID_SHAPE != 6\">\n                      <div *ngIf=\"report.productElmt.ID_SHAPE == 2 || report.productElmt.ID_SHAPE == 3 || report.productElmt.ID_SHAPE == 9; else shapeEmpty3Es \">\n                        <div class=\"input-group\" *ngIf=\"meshAxisPos\">\n                          <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\" [(ngModel)]=\"report.PLAN_Z\">\n                            <option *ngFor=\"let axis of meshAxisPos.axis3\" [value]=\"axis.MESH_AXIS_POS\">{{ axis.meshAxisPosValue }}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <ng-template #shapeEmpty3Es>\n                        <div class=\"col-md-2\">\n                          <div class=\"input-group\">\n                            <select class=\"form-control form-control-sm\" [disabled]=\"ischeckUser\">\n                              <option></option>\n                            </select>\n                          </div>\n                        </div>\n                      </ng-template>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </table>\n\n\n          </div>\n          <!-- end estimation -->\n         \n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn btn-success\" type=\"button\" (click)=\"saveContentReport()\" [disabled]=\"ischeckUser\" [ladda]=\"isSaveReport\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n            <button class=\"btn btn-primary float-right\" (click)=\"generatePDF()\" [ladda]=\"laddaGenerate\" style=\"float:right;margin-right:20px;\">Generate</button>\n            <label class=\"custom-control custom-radio float-right\" style=\"margin-top: 5px;\" >\n                <input  type=\"radio\" [(ngModel)]=\"typeGenerate\" [value]=\"1\" class=\"custom-control-input\" name=\"add-equip\">{{ 'PDF'|translate }}\n                <span class=\"custom-control-indicator\"></span>\n            </label>\n            <label class=\"custom-control custom-radio float-right\" style=\"margin-top: 5px;\">\n                <input  type=\"radio\" [(ngModel)]=\"typeGenerate\" [value]=\"0\" class=\"custom-control-input\" name=\"add-equip\">{{ 'HTML'|translate }}\n                <span class=\"custom-control-indicator\"></span>\n            </label>\n          <!-- <button class=\"btn btn-secondary float-right\" (click)=\"downloadPDF()\"><i class=\"fa fa-file\"></i> PDF</button>\n          <button class=\"btn btn-secondary float-right\" (click)=\"savePDFs()\"> <i class=\"fa fa-code\"></i> HTML </button> -->\n        </div>\n      </div>\n    </div>\n    \n</div>\n<div bsModal class=\"modal fade\" #modalGeneration=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>{{'GENERATION REPORT'|translate}}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModalGeneration()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"showLoaderProgess\" *ngIf=\"isLoadingProgess == true\"></div>\n        <strong>{{'Input data'|translate}}</strong>\n        <div class=\"row\" style=\"margin-top:5px;margin-bottom:10px\">\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n          <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <div *ngIf=\"isRepCustomer == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessProduction\">{{'Production'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepProdList == 1 || isRefContRepProd3D == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessProduct\">{{'Product'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepPacking == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessPacking\">{{'Packaging data'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepEquipList == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessEquipment\">{{'Equipment'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepPipeLine == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessPipeline\">{{'Pipeline Elements'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n        </div>\n        <strong>{{'Calculation Output'|translate}}</strong>\n        <div class=\"row\" style=\"margin-top:5px;margin-bottom:10px\">\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n          <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <div *ngIf=\"isRefContRepAssesConsump == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessConsumptionResult\">{{'Consumption Results'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepConsPie == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessConsumptionPie\">{{'Consumption pies'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepSizingValues == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessHeatBalance\">{{'Heat balance / sizing results'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepSizingGraphe == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessSizing\">{{'Sizing'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepEnthalpyV == 1 || isRefContRepEnthalpyG == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessEnthalpie\">{{'Enthalpies'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepIsochroneV == 1 || isRefContRepIsochroneG == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessProductSection\">{{'Product Section'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf=\"isRefContRepIsovalueV == 1 || isRefContRepIsovalueG == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessTimeBased\">{{'Time Based'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div *ngIf = \"isRefContRep2DG == 1\">\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isProcessContour\">{{'Contour'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n        </div>\n        <strong>{{'Report translation'|translate}}</strong>\n        <div class=\"row\" style=\"margin-top:5px\">\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n          <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <div>\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"isReportTranlation\">{{'Report translation'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div>\n              <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em\">\n                <input type=\"checkbox\" class=\"custom-control-input\">{{'Generate'|translate}}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-3 hidden-xs hidden-sm\"></div>\n        </div>\n      </div><!-- modal-body -->\n          <div class=\"modal-footer\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-spinner *ngIf=\"isLoading\"></app-spinner>\n  "

/***/ }),

/***/ "../../../../../src/app/views/report/report-config/report-config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer; }\n\n#showLoaderProgess {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.3);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/report/report-config/report-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services_api_service__ = __webpack_require__("../../../../../src/app/api/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReportConfigComponent = (function () {
    function ReportConfigComponent(api, toastr, router, http, sanitizer, translate) {
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.isSaveReport = false;
        this.checkcontrol = false;
        this.loading = false;
        this.laddaGenerate = false;
        this.fileToUpload = null;
        this.checkUpload = 0;
        this.urlLogo = '';
        this.urlFirstpage = '';
        this.isLoading = true;
        this.isProcessProduction = true;
        this.isProcessProduct = true;
        this.isProcessPacking = true;
        this.isProcessEquipment = true;
        this.isProcessPipeline = true;
        this.isProcessConsumptionResult = true;
        this.isProcessConsumptionPie = true;
        this.isProcessHeatBalance = false;
        this.isProcessSizing = false;
        this.isProcessEnthalpie = false;
        this.isProcessProductSection = false;
        this.isProcessTimeBased = false;
        this.isProcessContour = false;
        this.isLoadingProgess = false;
        this.isReportTranlation = false;
        this.progressFileHtml = '';
        this.ischeckUser = true;
        this.temperatureSymbol = '';
        this.meshesSymbol = '';
        this.study = JSON.parse(localStorage.getItem('study'));
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ReportConfigComponent.prototype.ngOnInit = function () {
        this.optionSelected = 0;
        this.typeGenerate = 0;
        this.checkUser();
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (Number(this.listUnits[i].TYPE_UNIT) === 8) {
                    this.temperatureSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 20) {
                    this.meshesSymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
    };
    ReportConfigComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.progressFileHtml = '';
        localStorage.setItem('iframeReport', this.progressFileHtml);
        this.isLoading = true;
        var params = {
            idStudy: this.study.ID_STUDY,
            idProd: this.study.ID_PROD
        };
        this.api.checkControl(params).subscribe(function (data) {
            if (Number(_this.user.ID_USER) === Number(_this.study.ID_USER)) {
                _this.checkcontrol = data.checkcontrol;
                if (!data.checkcontrol) {
                    _this.router.navigate(['/calculation/check-control']);
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Warning', _this.translate.instant('Report is available only when equipments are calculated numerically'), 'error');
                }
            }
            else {
                _this.checkcontrol = true;
            }
        });
        this.api.getSymbol(this.study.ID_STUDY).subscribe(function (data) {
            _this.symbol = data;
            _this.loadReport();
            _this.loadMeshAxisPos();
        });
        if (this.displayProgesReport) {
            clearInterval(this.displayProgesReport);
        }
    };
    ReportConfigComponent.prototype.loadReport = function () {
        var _this = this;
        this.api.getReport(this.study.ID_STUDY).subscribe(function (resp) {
            // console.log(resp);
            localStorage.setItem('ip', resp.ip);
            if (resp.productElmt) {
                _this.shape = resp.productElmt.ID_SHAPE;
            }
            resp.ASSES_CONSUMP = Number(resp.ASSES_CONSUMP);
            resp.ASSES_ECO = Number(resp.ASSES_ECO);
            resp.ASSES_TERMAL = Number(resp.ASSES_TERMAL);
            resp.ASSES_TR = Number(resp.ASSES_TR);
            resp.ASSES_TR_MAX = Number(resp.ASSES_TR_MAX);
            resp.ASSES_TR_MIN = Number(resp.ASSES_TR_MIN);
            resp.CONS_DAY = Number(resp.CONS_DAY);
            resp.CONS_EQUIP = Number(resp.CONS_EQUIP);
            resp.CONS_HOUR = Number(resp.CONS_HOUR);
            resp.CONS_MONTH = Number(resp.CONS_MONTH);
            resp.CONS_OVERALL = Number(resp.CONS_OVERALL);
            resp.CONS_PIPE = Number(resp.CONS_PIPE);
            resp.CONS_SPECIFIC = Number(resp.CONS_SPECIFIC);
            resp.CONS_TANK = Number(resp.CONS_TANK);
            resp.CONS_TOTAL = Number(resp.CONS_TOTAL);
            resp.CONS_WEEK = Number(resp.CONS_WEEK);
            resp.CONS_YEAR = Number(resp.CONS_YEAR);
            resp.CONTOUR2D_G = Number(resp.CONTOUR2D_G);
            resp.CONTOUR2D_OUTLINE_TIME = Number(resp.CONTOUR2D_OUTLINE_TIME);
            resp.CONTOUR2D_SAMPLE = Number(resp.CONTOUR2D_SAMPLE);
            resp.ENTHALPY_G = Number(resp.ENTHALPY_G);
            resp.ENTHALPY_SAMPLE = Number(resp.ENTHALPY_SAMPLE);
            resp.ENTHALPY_V = Number(resp.ENTHALPY_V);
            resp.EQUIP_LIST = Number(resp.EQUIP_LIST);
            resp.EQUIP_PARAM = Number(resp.EQUIP_PARAM);
            resp.ISOCHRONE_G = Number(resp.ISOCHRONE_G);
            resp.ISOCHRONE_SAMPLE = Number(resp.ISOCHRONE_SAMPLE);
            resp.ISOCHRONE_V = Number(resp.ISOCHRONE_V);
            resp.ISOVALUE_G = Number(resp.ISOVALUE_G);
            resp.ISOVALUE_SAMPLE = Number(resp.ISOVALUE_SAMPLE);
            resp.ISOVALUE_V = Number(resp.ISOVALUE_V);
            resp.PACKING = Number(resp.PACKING);
            resp.PIPELINE = Number(resp.PIPELINE);
            resp.PROD_3D = Number(resp.PROD_3D);
            resp.PROD_LIST = Number(resp.PROD_LIST);
            resp.PROD_TEMP = Number(resp.PROD_TEMP);
            resp.REP_CONS_PIE = Number(resp.REP_CONS_PIE);
            resp.REP_CUSTOMER = Number(resp.REP_CUSTOMER);
            resp.SIZING_GRAPHE = Number(resp.SIZING_GRAPHE);
            resp.SIZING_TEMP_G = Number(resp.SIZING_TEMP_G);
            resp.SIZING_TEMP_SAMPLE = Number(resp.SIZING_TEMP_SAMPLE);
            resp.SIZING_TEMP_V = Number(resp.SIZING_TEMP_V);
            resp.SIZING_TR = Number(resp.SIZING_TR);
            resp.SIZING_TR_MAX = Number(resp.SIZING_TR_MAX);
            resp.SIZING_TR_MIN = Number(resp.SIZING_TR_MIN);
            resp.SIZING_VALUES = Number(resp.SIZING_VALUES);
            resp.isSizingValuesChosen = Number(resp.isSizingValuesChosen);
            resp.isSizingValuesMax = Number(resp.isSizingValuesMax);
            _this.report = resp;
            // console.log(this.report);
            localStorage.setItem('reportParam', JSON.stringify(resp));
            _this.reportParam = JSON.parse(localStorage.getItem('reportParam'));
        }, function (err) {
            console.log(err);
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Warning', _this.translate.instant(err.error), 'error');
            _this.router.navigate(['/output/preliminary']);
        }, function () {
        });
    };
    ReportConfigComponent.prototype.loadMeshAxisPos = function () {
        var _this = this;
        this.api.getMeshAxisPos(this.study.ID_STUDY)
            .subscribe(function (resp) {
            // console.log(resp);
            _this.meshAxisPos = resp;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ReportConfigComponent.prototype.saveContentReport = function () {
        var _this = this;
        // console.log(this.report);
        if (Number(this.user.ID_USER) === Number(this.study.ID_USER)) {
            this.isSaveReport = true;
            this.api.saveReport({
                id: this.study.ID_STUDY,
                body: this.report
            }).subscribe(function (resp) {
                // console.log(this.report);
                localStorage.setItem('reportParam', JSON.stringify(_this.report));
                if (resp === 1) {
                    _this.toastr.success(_this.translate.instant('Save report of user success'), 'successfully');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Warning', _this.translate.instant('Save report error!'), 'error');
                }
                _this.isSaveReport = false;
            }, function (err) {
                console.log(err);
                _this.toastr.error(_this.translate.instant(err.error), 'error');
                _this.isSaveReport = false;
            }, function () {
                _this.isSaveReport = false;
            });
        }
        // else {
        // this.toastr.success('Save report', 'successfully');
        // }
    };
    ReportConfigComponent.prototype.viewPDF = function () {
        var _this = this;
        var reportParam = {
            id: this.study.ID_STUDY,
            reportParam: {
                DEST_SURNAME: this.report.DEST_SURNAME,
                DEST_NAME: this.report.DEST_NAME,
                DEST_FUNCTION: this.report.DEST_FUNCTION,
                DEST_COORD: this.report.DEST_COORD,
                PHOTO_PATH: this.report.PHOTO_PATH,
                CUSTOMER_LOGO: this.report.CUSTOMER_LOGO,
                REPORT_COMMENT: this.report.REPORT_COMMENT,
                WRITER_SURNAME: this.report.WRITER_SURNAME,
                WRITER_NAME: this.report.WRITER_NAME,
                WRITER_FUNCTION: this.report.WRITER_FUNCTION,
                WRITER_COORD: this.report.WRITER_COORD,
                // Input data
                PROD_LIST: this.report.PROD_LIST,
                PROD_3D: this.report.PROD_3D,
                EQUIP_LIST: this.report.EQUIP_LIST,
                REP_CUSTOMER: this.report.REP_CUSTOMER,
                PACKING: this.report.PACKING,
                ASSES_ECO: this.report.ASSES_ECO,
                PIPELINE: this.report.PIPELINE,
                // Calculation Output
                CONS_OVERALL: this.report.CONS_OVERALL,
                CONS_TOTAL: this.report.CONS_TOTAL,
                CONS_SPECIFIC: this.report.CONS_SPECIFIC,
                CONS_HOUR: this.report.CONS_HOUR,
                CONS_DAY: this.report.CONS_DAY,
                CONS_WEEK: this.report.CONS_WEEK,
                CONS_MONTH: this.report.CONS_MONTH,
                CONS_YEAR: this.report.CONS_YEAR,
                CONS_EQUIP: this.report.CONS_EQUIP,
                CONS_PIPE: this.report.CONS_PIPE,
                CONS_TANK: this.report.CONS_TANK,
                REP_CONS_PIE: this.report.REP_CONS_PIE,
                // Sizing
                isSizingValuesChosen: this.report.isSizingValuesChosen,
                isSizingValuesMax: this.report.isSizingValuesMax,
                SIZING_GRAPHE: this.report.SIZING_GRAPHE,
                // Enthalpies
                ENTHALPY_V: this.report.ENTHALPY_V,
                ENTHALPY_G: this.report.ENTHALPY_G,
                ENTHALPY_SAMPLE: this.report.ENTHALPY_SAMPLE,
                // product section
                ISOCHRONE_V: this.report.ISOCHRONE_V,
                ISOCHRONE_G: this.report.ISOCHRONE_G,
                ISOCHRONE_SAMPLE: this.report.ISOCHRONE_SAMPLE,
                // time base
                ISOVALUE_V: this.report.ISOVALUE_V,
                ISOVALUE_G: this.report.ISOVALUE_G,
                ISOVALUE_SAMPLE: this.report.ISOVALUE_SAMPLE,
                // Contour
                CONTOUR2D_G: this.report.CONTOUR2D_G,
                CONTOUR2D_TEMP_STEP: this.report.CONTOUR2D_TEMP_STEP,
                CONTOUR2D_TEMP_MIN: this.report.CONTOUR2D_TEMP_MIN,
                CONTOUR2D_TEMP_MAX: this.report.CONTOUR2D_TEMP_MAX,
                // AXE
                AXE1_X: this.report.AXE1_X,
                AXE1_Y: this.report.AXE1_Y,
                AXE2_X: this.report.AXE2_X,
                AXE2_Z: this.report.AXE2_Z,
                AXE3_Y: this.report.AXE3_Y,
                AXE3_Z: this.report.AXE3_Z,
                POINT1_X: this.report.POINT1_X,
                POINT1_Y: this.report.POINT1_Y,
                POINT1_Z: this.report.POINT1_Z,
                POINT2_X: this.report.POINT2_X,
                POINT2_Y: this.report.POINT2_Y,
                POINT2_Z: this.report.POINT2_Z,
                POINT3_X: this.report.POINT3_X,
                POINT3_Y: this.report.POINT3_Y,
                POINT3_Z: this.report.POINT3_Z,
                PLAN_Y: this.report.PLAN_Y,
                PLAN_Z: this.report.PLAN_Z,
            },
        };
        this.api.downLoadPDF(reportParam).subscribe(function (data) {
            _this.isProcessHeatBalance = true;
            _this.isProcessSizing = true;
            _this.isProcessEnthalpie = true;
            _this.isProcessProductSection = true;
            _this.isProcessTimeBased = true;
            _this.isProcessContour = true;
            _this.isLoadingProgess = false;
            _this.progressFileHtml = data.url;
            localStorage.setItem('iframeReport', _this.progressFileHtml);
            _this.modalGeneration.hide();
            _this.router.navigate(['/report/reportview']);
        }, function (err) {
            console.log(err);
            _this.laddaGenerate = false;
        }, function () {
            _this.laddaGenerate = false;
        });
    };
    ReportConfigComponent.prototype.viewHTML = function () {
        var _this = this;
        var reportParam = {
            id: this.study.ID_STUDY,
            reportParam: {
                DEST_SURNAME: this.report.DEST_SURNAME,
                DEST_NAME: this.report.DEST_NAME,
                DEST_FUNCTION: this.report.DEST_FUNCTION,
                DEST_COORD: this.report.DEST_COORD,
                PHOTO_PATH: this.report.PHOTO_PATH,
                CUSTOMER_LOGO: this.report.CUSTOMER_LOGO,
                REPORT_COMMENT: this.report.REPORT_COMMENT,
                WRITER_SURNAME: this.report.WRITER_SURNAME,
                WRITER_NAME: this.report.WRITER_NAME,
                WRITER_FUNCTION: this.report.WRITER_FUNCTION,
                WRITER_COORD: this.report.WRITER_COORD,
                // Input data
                PROD_LIST: this.report.PROD_LIST,
                PROD_3D: this.report.PROD_3D,
                EQUIP_LIST: this.report.EQUIP_LIST,
                REP_CUSTOMER: this.report.REP_CUSTOMER,
                PACKING: this.report.PACKING,
                ASSES_ECO: this.report.ASSES_ECO,
                PIPELINE: this.report.PIPELINE,
                // Calculation Output
                CONS_OVERALL: this.report.CONS_OVERALL,
                CONS_TOTAL: this.report.CONS_TOTAL,
                CONS_SPECIFIC: this.report.CONS_SPECIFIC,
                CONS_HOUR: this.report.CONS_HOUR,
                CONS_DAY: this.report.CONS_DAY,
                CONS_WEEK: this.report.CONS_WEEK,
                CONS_MONTH: this.report.CONS_MONTH,
                CONS_YEAR: this.report.CONS_YEAR,
                CONS_EQUIP: this.report.CONS_EQUIP,
                CONS_PIPE: this.report.CONS_PIPE,
                CONS_TANK: this.report.CONS_TANK,
                REP_CONS_PIE: this.report.REP_CONS_PIE,
                // Sizing
                isSizingValuesChosen: this.report.isSizingValuesChosen,
                isSizingValuesMax: this.report.isSizingValuesMax,
                SIZING_GRAPHE: this.report.SIZING_GRAPHE,
                // Enthalpies
                ENTHALPY_V: this.report.ENTHALPY_V,
                ENTHALPY_G: this.report.ENTHALPY_G,
                ENTHALPY_SAMPLE: this.report.ENTHALPY_SAMPLE,
                // product section
                ISOCHRONE_V: this.report.ISOCHRONE_V,
                ISOCHRONE_G: this.report.ISOCHRONE_G,
                ISOCHRONE_SAMPLE: this.report.ISOCHRONE_SAMPLE,
                // time base
                ISOVALUE_V: this.report.ISOVALUE_V,
                ISOVALUE_G: this.report.ISOVALUE_G,
                ISOVALUE_SAMPLE: this.report.ISOVALUE_SAMPLE,
                // Contour
                CONTOUR2D_G: this.report.CONTOUR2D_G,
                CONTOUR2D_TEMP_STEP: this.report.CONTOUR2D_TEMP_STEP,
                CONTOUR2D_TEMP_MIN: this.report.CONTOUR2D_TEMP_MIN,
                CONTOUR2D_TEMP_MAX: this.report.CONTOUR2D_TEMP_MAX,
                // AXE
                AXE1_X: this.report.AXE1_X,
                AXE1_Y: this.report.AXE1_Y,
                AXE2_X: this.report.AXE2_X,
                AXE2_Z: this.report.AXE2_Z,
                AXE3_Y: this.report.AXE3_Y,
                AXE3_Z: this.report.AXE3_Z,
                POINT1_X: this.report.POINT1_X,
                POINT1_Y: this.report.POINT1_Y,
                POINT1_Z: this.report.POINT1_Z,
                POINT2_X: this.report.POINT2_X,
                POINT2_Y: this.report.POINT2_Y,
                POINT2_Z: this.report.POINT2_Z,
                POINT3_X: this.report.POINT3_X,
                POINT3_Y: this.report.POINT3_Y,
                POINT3_Z: this.report.POINT3_Z,
                PLAN_Y: this.report.PLAN_Y,
                PLAN_Z: this.report.PLAN_Z,
            },
        };
        this.api.downLoadHtmlToPDF(reportParam).subscribe(function (data) {
            _this.isProcessHeatBalance = true;
            _this.isProcessSizing = true;
            _this.isProcessEnthalpie = true;
            _this.isProcessProductSection = true;
            _this.isProcessTimeBased = true;
            _this.isProcessContour = true;
            _this.isLoadingProgess = false;
            _this.progressFileHtml = data.url;
            localStorage.setItem('iframeReport', _this.progressFileHtml);
            _this.modalGeneration.hide();
            _this.router.navigate(['/report/reportview']);
        }, function (err) {
            console.log(err);
        }, function () {
            _this.laddaGenerate = false;
        });
    };
    ReportConfigComponent.prototype.generatePDF = function () {
        // console.log(this.reportParam.AXE1_X);
        this.showContentReportWaiting(this.typeGenerate);
        this.saveContentReport();
        this.loading = true;
    };
    ReportConfigComponent.prototype.showContentReportWaiting = function (typeGenerate) {
        // console.log(this.report);
        // console.log(this.reportParam);
        this.isRepCustomer = this.report.REP_CUSTOMER;
        this.isRefContRepProdList = this.report.PROD_LIST;
        this.isRefContRepProd3D = this.report.PROD_3D;
        this.isRefContRepPacking = this.report.PACKING;
        this.isRefContRepEquipList = this.report.EQUIP_LIST;
        this.isRefContRepPipeLine = this.report.PIPELINE;
        this.isRefContRepAssesConsump = this.report.ASSES_CONSUMP;
        this.isRefContRepConsPie = this.report.REP_CONS_PIE;
        this.isRefContRepSizingValues = this.report.SIZING_VALUES;
        this.isRefContRepSizingGraphe = this.report.SIZING_GRAPHE;
        this.isRefContRepEnthalpyV = this.report.ENTHALPY_V;
        this.isRefContRepEnthalpyG = this.report.ENTHALPY_G;
        this.isRefContRepIsochroneV = this.report.ISOCHRONE_V;
        this.isRefContRepIsochroneG = this.report.ISOCHRONE_G;
        this.isRefContRepIsovalueV = this.report.ISOVALUE_V;
        this.isRefContRepIsovalueG = this.report.ISOVALUE_G;
        this.isRefContRep2DG = this.report.CONTOUR2D_G;
        this.modalGeneration.show();
        this.isProcessHeatBalance = false;
        this.isProcessSizing = false;
        this.isProcessEnthalpie = false;
        this.isProcessProductSection = false;
        this.isProcessTimeBased = false;
        this.isProcessContour = false;
        this.isLoadingProgess = true;
        if (Number(this.typeGenerate) === 1) {
            this.viewPDF();
        }
        else if (Number(this.typeGenerate) === 0) {
            this.viewHTML();
        }
        /*this.displayProgesReport = setInterval(() => {
          this.processingReport(typeGenerate);
        }, 1000);*/
    };
    ReportConfigComponent.prototype.processingReport = function (typeGenerate) {
        var _this = this;
        this.api.processingReport(this.study.ID_STUDY).subscribe(function (data) {
            if (data != null) {
                // console.log(data);
                _this.isProcessHeatBalance = true;
                _this.isProcessSizing = true;
                _this.isProcessEnthalpie = true;
                _this.isProcessProductSection = true;
                _this.isProcessTimeBased = true;
                _this.isProcessContour = true;
                _this.isLoadingProgess = false;
                if (typeGenerate === 1) {
                    _this.isReportTranlation = true;
                    _this.progressFileHtml = data.progressFilePdf;
                }
                else {
                    _this.progressFileHtml = data.progressFileHtml;
                }
                localStorage.setItem('iframeReport', _this.progressFileHtml);
                clearInterval(_this.displayProgesReport);
                _this.modalGeneration.hide();
                _this.router.navigate(['/report/reportview']);
            }
        });
    };
    ReportConfigComponent.prototype.closeModalGeneration = function () {
        this.modalGeneration.hide();
        if (this.displayProgesReport) {
            clearInterval(this.displayProgesReport);
        }
    };
    ReportConfigComponent.prototype.handleFileInput = function (files) {
        this.checkUpload = 1;
        this.fileToUpload = files.item(0);
        // console.log('logo');
        this.uploadFileToActivity();
    };
    ReportConfigComponent.prototype.handleFilePhotoPath = function (files) {
        this.checkUpload = 2;
        this.fileToUpload = files.item(0);
        // console.log('photo path');
        this.uploadFileToActivity();
    };
    ReportConfigComponent.prototype.uploadFileToActivity = function () {
        this.postFile(this.fileToUpload).subscribe(function (data) {
            // console.log(data);
        }, function (error) {
            // console.log(error);
        }, function () {
        });
    };
    ReportConfigComponent.prototype.postFile = function (fileToUpload) {
        var _this = this;
        var endpoint = localStorage.getItem('ip') + '/api/v1/upload';
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData, { responseType: 'text' }).map(function (res) {
            if (_this.checkUpload === 1) {
                _this.report.CUSTOMER_LOGO = res;
            }
            else if (_this.checkUpload === 2) {
                _this.report.PHOTO_PATH = res;
            }
            return true;
        });
    };
    ReportConfigComponent.prototype.checkUser = function () {
        if (Number(this.user.ID_USER) === Number(this.study.ID_USER)) {
            this.ischeckUser = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalGeneration'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], ReportConfigComponent.prototype, "modalGeneration", void 0);
    ReportConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-config',
            template: __webpack_require__("../../../../../src/app/views/report/report-config/report-config.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/report/report-config/report-config.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ReportConfigComponent);
    return ReportConfigComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-body\">\n        <ng-container *ngIf=\"progressFileHtml !== ''\">\n          <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"800\" frameborder=\"0\" [src]=\"iframeReport\" allowfullscreen></iframe>\n        </ng-container>\n\n        <!-- <iframe *ngIf=\"iframeReport != ''\" class=\"embed-responsive-item\" width=\"100%\" height=\"800\" frameborder=\"0\" [src]=\"iframeReport\" allowfullscreen></iframe> -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPdfviewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportPdfviewerComponent = (function () {
    function ReportPdfviewerComponent(sanitizer, router, translate) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.translate = translate;
    }
    ReportPdfviewerComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.study = JSON.parse(localStorage.getItem('study'));
        var name = this.user.USERNAM;
        var id = this.study.ID_STUDY;
        var studyname = this.study.STUDY_NAME;
        if (localStorage.getItem('iframeReport') != '') {
            this.progressFileHtml = localStorage.getItem('iframeReport');
            this.iframeReport = this.sanitizer.bypassSecurityTrustResourceUrl(this.progressFileHtml);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Warning', this.translate.instant('Please generate report config'), 'error');
            this.router.navigate(['/report/reportconfig']);
        }
    };
    ReportPdfviewerComponent.prototype.ngAfterViewInit = function () {
    };
    ReportPdfviewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-pdfviewer',
            template: __webpack_require__("../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ReportPdfviewerComponent);
    return ReportPdfviewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/report/report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/report/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_config_report_config_component__ = __webpack_require__("../../../../../src/app/views/report/report-config/report-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_pdfviewer_report_pdfviewer_component__ = __webpack_require__("../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.ts");
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
                redirectTo: 'reportconfig',
                pathMatch: 'full',
            },
            {
                path: 'reportconfig',
                component: __WEBPACK_IMPORTED_MODULE_3__report_config_report_config_component__["a" /* ReportConfigComponent */],
            },
            {
                path: 'reportview',
                component: __WEBPACK_IMPORTED_MODULE_4__report_pdfviewer_report_pdfviewer_component__["a" /* ReportPdfviewerComponent */],
            }
        ]
    }
];
var ReportRoutingModule = (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_routing_module__ = __webpack_require__("../../../../../src/app/views/report/report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_config_report_config_component__ = __webpack_require__("../../../../../src/app/views/report/report-config/report-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/report/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_pdfviewer_report_pdfviewer_component__ = __webpack_require__("../../../../../src/app/views/report/report-pdfviewer/report-pdfviewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__report_routing_module__["a" /* ReportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["d" /* ModalModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_3__report_config_report_config_component__["a" /* ReportConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_8__report_pdfviewer_report_pdfviewer_component__["a" /* ReportPdfviewerComponent */],
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/report/report.nav-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportNavItems; });
var ReportNavItems = [
    {
        name: 'Config',
        url: '/report/reportconfig',
        icon: ''
    },
    {
        name: 'View',
        url: '/report/reportview',
        icon: ''
    },
];


/***/ })

});
//# sourceMappingURL=report.module.chunk.js.map