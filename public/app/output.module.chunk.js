webpackJsonp(["output.module"],{

/***/ "../../../../../src/app/views/output/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"subnav\" class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" *ngFor=\"let nav of subnav\" [class.active]=\"router.isActive(nav.url)\" class=\"btn btn-outline-secondary\"\n      [routerLink]=\"nav.url\">\n      {{ nav.name | translate}}\n    </button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/output/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/output/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output_nav_items__ = __webpack_require__("../../../../../src/app/views/output/output.nav-items.ts");
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
        this.subnav = __WEBPACK_IMPORTED_MODULE_1__output_nav_items__["a" /* OutputNavItems */];
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/views/output/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/output/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/output/output-charts/output-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"study\">\n  \n  <div class=\"card product-container\">\n    <div class=\"card-header text-center\">\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"loadLocation()\" [class.active]=\"activePage == 'location'\">{{'Location'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"loadheadExchage()\" [class.active]=\"activePage == 'heatExchange'\">{{'Heat Exchange'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"loadProductSection()\" [class.active]=\"activePage == 'productSection'\">{{'Product Section'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"loadTimeBased()\" [class.active]=\"activePage == 'timeBased'\">{{'Time Based'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" *ngIf=\"shape != 1 && shape !=6\" (click)=\"loadOutlines2d()\" [class.active]=\"activePage == 'outlines2d'\">{{'2D Outlines'|translate}}</button>\n      </div>\n    </div>\n\n    <div class=\"card-body\" *ngIf=\"outputProductChartList != ''\">\n      <div *ngIf=\"displayLocationPage == true\" style=\"position:relative;min-height:500px\">\n        <div *ngIf=\"loadLocationData == false\" class=\"text-center\" id=\"showLoaderLocation\"></div>\n        <ng-container *ngIf=\"loadLocationData == true\">\n        <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Selection criteria'|translate}}</h5>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-horizontal\">\n              <div class=\"row form-group\">\n                <label class=\"col-md-2 col-form-label\">\n                  {{'Equipment'|translate}}\n                </label>\n                <div class=\"col-md-4\">\n                  <select name=\"\" [(ngModel)]=\"selectedEquip\" (ngModelChange)=\"changeEquipment()\" class=\"form-control\">\n                    <ng-container *ngFor=\"let equip of outputProductChartList\">\n                    <option *ngIf=\"equip\" [value]=\"equip.ID_STUDY_EQUIPMENTS\">{{equip.displayName}}</option>\n                    </ng-container>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-md-2 col-form-label\">\n                  {{'Number of samples'|translate}}\n                </label>\n                <div class=\"col-md-2\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nbSteps\" [disabled]=\"disableChange\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"img_pararel text-center\">\n                <img *ngIf=\"folderImg\" [src]=\"imgProd3D\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row form-group\" >\n              <div class=\"col-md-10\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-4 text-center\">\n                    <button class=\"btn btn-block btn-outline-primary\" [class.active]=\"activeBtn == 'points'\" (click)=\"selectPoints()\">Points</button>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <button class=\"btn btn-block btn-outline-primary\" [class.active]=\"activeBtn == 'axis'\" (click)=\"selectAxis()\">Axis</button>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <button class=\"btn btn-block btn-outline-primary\" [disabled]=\"planDisabled\" [class.active]=\"activeBtn == 'plans'\" (click)=\"selectPlans()\">Plans</button>\n                  </div>\n                </div>\n                <div class=\"row form-group\" style=\"margin-top:30px;height:30px\">\n                  <div class=\"col-md-4 text-center\">\n                    <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                      <input type=\"radio\" name=\"rbpoint\" [value]= \"0\" (change)=\"onrbChange(recordType, 0)\" class=\"custom-control-input\" [disabled]=\"radio1Disable\" [ngModel]=\"radioChecked\">{{rbpoint01}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                      <input type=\"radio\" name=\"rbpoint\" [value]= \"1\" (change)=\"onrbChange(recordType, 1)\" class=\"custom-control-input\" [disabled]=\"radio2Disable\" [ngModel]=\"radioChecked\">{{rbpoint02}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                  </div>\n                  <div class=\"col-md-4 text-center\">\n                    <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                      <input type=\"radio\" name=\"rbpoint\" [value]= \"2\" (change)=\"onrbChange(recordType, 2)\" class=\"custom-control-input\" [disabled]=\"radio3Disable\" [ngModel]=\"radioChecked\">{{rbpoint03}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"shape <= 9;else shapePointNew\">\n                  <ng-container *ngIf=\"shape != 5 && shape != 8; else shapeFull\">\n                      <div class=\"col-md-4\">\n                        <div class=\"row\">\n                            <label class=\"col-md-3 col-form-label text-success\">X</label>\n                            <div class=\"col-md-9\">\n                              <select class=\"form-control\" (change)=\"changeX()\" [(ngModel)]=\"mesAxisXSelected\" [disabled]=\"select1Disable\">\n                                <option *ngFor=\"let axis of mesAxisX\" [value]=\"axis.value\">{{ axis.name }}</option>\n                              </select>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"row\">\n                            <label class=\"col-md-3 col-form-label text-primary\">Y</label>\n                            <div class=\"col-md-9\">\n                              <select class=\"form-control\" (change)=\"changeY()\" [(ngModel)]=\"mesAxisYSelected\" [disabled]=\"select2Disable\">\n                                <option *ngFor=\"let axis of mesAxisY\" [value]=\"axis.value\">{{ axis.name }}</option>\n                              </select>\n                            </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <ng-template #shapeFull>\n                      <div class=\"col-md-4\">\n                        <div class=\"row\">\n                            <strong class=\"col-md-3 col-form-label text-success\">X</strong>\n                            <div class=\"col-md-9\">\n                              <select class=\"form-control\" (change)=\"changeY()\" [(ngModel)]=\"mesAxisYSelected\" [disabled]=\"select2Disable\">\n                                <option *ngFor=\"let axis of mesAxisY\" [value]=\"axis.value\">{{ axis.name }}</option>\n                              </select>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"row\">\n                            <label class=\"col-md-3 col-form-label text-primary\">Y</label>\n                            <div class=\"col-md-9\">\n                              <select class=\"form-control\"  (change)=\"changeX()\" [(ngModel)]=\"mesAxisXSelected\" [disabled]=\"select1Disable\">\n                                <option *ngFor=\"let axis of mesAxisX\" [value]=\"axis.value\">{{ axis.name }}</option>\n                              </select>\n                            </div>\n                        </div>\n                      </div>\n                    </ng-template>\n                    <div class=\"col-md-4\">\n                      <div class=\"row\">\n                          <label class=\"col-md-3 col-form-label text-warning\">Z</label>\n                          <div class=\"col-md-9\">\n                            <select class=\"form-control\" (change)=\"changeZ()\" [(ngModel)]=\"mesAxisZSelected\" [disabled]=\"select3Disable\">\n                              <option *ngFor=\"let axis of mesAxisZ\" [value]=\"axis.value\">{{ axis.name }}</option>\n                            </select>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <ng-template #shapePointNew>\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <div class=\"row\">\n                          <label class=\"col-md-3 col-form-label text-success\">X</label>\n                          <div class=\"col-md-9\">\n                            <select class=\"form-control\" [disabled]=\"select1Disable\">\n                              <option *ngIf=\"pointSelectedUnitX != ''\" [value]=\"pointSelectedValueX\">{{ pointSelectedValueX }}</option>\n                            </select>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"row\">\n                          <label class=\"col-md-3 col-form-label text-primary\">Y</label>\n                          <div class=\"col-md-9\">\n                            <select class=\"form-control\" [disabled]=\"select2Disable\">\n                              <option *ngIf=\"pointSelectedUnitY != ''\" [value]=\"pointSelectedValueY\">{{ pointSelectedValueY }}</option>\n                            </select>\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <div class=\"row\">\n                          <label class=\"col-md-3 col-form-label text-primary\">Z</label>\n                          <div class=\"col-md-9\">\n                            <select class=\"form-control\" [disabled]=\"select3Disable\">\n                              <option  [value]=\"pointSelectedValueZ\">{{ pointSelectedValueZ }}</option>\n                            </select>\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </div>\n              <div class=\"col-md-2\" *ngIf=\"symbol\" style=\"margin-top:116px\">\n                <strong class=\"text-danger\" *ngIf=\"shape <= 9;else meshSymbol3d\">{{symbol.meshesSymbol}}</strong>\n                <ng-template #meshSymbol3d>\n                <strong class=\"text-danger\">m</strong>                \n                </ng-template>\n              </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"shape < 10\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-success\" (click)=\"saveAll()\" [disabled]=\"disableChange\">Save</button>\n              </div>\n            </div>\n            <div class=\"text-center\" style=\"padding-top:15px\">\n                <img *ngIf=\"folderImg\" src=\"assets/img/output/{{folderImg}}/orientation.png\">\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      </div>\n      <div *ngIf=\"displayHeatExchangePage == true\" style=\"position:relative;min-height:500px\">\n        <div *ngIf=\"loadHeatExchangeData == false\" class=\"text-center\" id=\"showLoader\"></div>\n        <tabset *ngIf=\"loadHeatExchangeData == true\">\n          <tab>\n            <ng-template tabHeading><i class=\"icon-graph\"></i> {{'Curve'|translate}}</ng-template>\n            <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Curve'|translate}}</h5>\n            <div class=\"text-center\" *ngIf=\"outputProductChart\"><h4 style=\"color:#f00\">{{outputProductChart.displayName}}</h4></div>\n            <div *ngIf=\"imageHeatExchange != ''\">\n              <img [src]=\"imageHeatExchange\">\n            </div>\n          </tab>\n          <tab>\n            <ng-template tabHeading><i class=\"icon-doc\"></i> {{'Value'|translate}}</ng-template>\n            <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Value'|translate}}</h5>\n            <h6 class=\"text-primary text-center\" *ngIf=\"symbol\">{{'Enthalpy'|translate}} ({{symbol.enthalpySymbol}}) vs {{'Time'|translate}} ({{symbol.timeSymbol}})</h6>\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-sm\">\n                <tr>\n                    <th>{{'Equipment'|translate}}</th>\n                    <ng-container *ngFor=\"let result of headExchangeResult\">\n                    <th class=\"text-center\">{{result.x}}</th>\n                    </ng-container>\n                </tr>\n                <tr>\n                  <td *ngIf=\"outputProductChart\">{{outputProductChart.displayName}}</td>\n                  <ng-container *ngFor=\"let result of headExchangeResult\">\n                  <td class=\"text-center\">{{result.y}}</td>\n                  </ng-container>\n                </tr>\n              </table>\n            </div>\n          </tab>\n        </tabset>\n      </div>\n      <div *ngIf=\"displayProductSectionPage == true\" style=\"position:relative;min-height:500px\">\n        <div *ngIf=\"loadProductSectionData == false\" class=\"text-center\" id=\"showLoaderProductSection\"></div>\n        <ng-container *ngIf=\"loadProductSectionData == true\">\n          <div class=\"text-center\" *ngIf=\"outputProductChart\"><h4 style=\"color:#f00\">{{outputProductChart.displayName}}</h4></div>\n          <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Select'|translate}}</h5>\n          <div class=\"row\">\n            <div class=\"col-md-10\" style=\"margin-top:80px\">\n              <div class=\"row\">\n                <div class=\"col-md-4 text-center\" *ngIf=\"shape !=1 && shape != 6\">\n                  <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                    <input type=\"radio\" name=\"selectAxe\" [value]= \"1\" (change)=\"changeAxePS()\" class=\"custom-control-input\" [(ngModel)]=\"selectedAxe\" [disabled]=\"axis1Disable\">{{'Axis 1'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n                <div class=\"col-md-4 text-center\">\n                  <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                    <input type=\"radio\" name=\"selectAxe\" [value]= \"2\" (change)=\"changeAxePS()\" class=\"custom-control-input\" [(ngModel)]=\"selectedAxe\" [disabled]=\"axis2Disable\">{{'Axis 2'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n                <div class=\"col-md-4 text-center\" *ngIf=\"shape ==3 || shape == 2 || shape == 9 || shape > 9\">\n                  <label class=\"custom-control custom-radio\" style=\"margin:0\">\n                    <input type=\"radio\" name=\"selectAxe\" [value]= \"3\" (change)=\"changeAxePS()\" class=\"custom-control-input\" [(ngModel)]=\"selectedAxe\" [disabled]=\"axis3Disable\">{{'Axis 3'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2 text-center\">\n              <img *ngIf=\"folderImg\" src=\"assets/img/output/{{folderImg}}/orientation.png\">\n            </div>\n          </div>\n          <tabset>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-graph\"></i> {{'Curve'|translate}}</ng-template>\n              <h6 class=\"text-danger text-center\" *ngIf=\"symbol && shape <= 9\">{{'Graphic on the axis'|translate}} {{selectedAxe}} ({{productSectionAxisTemp}}) ({{symbol.prodchartDimensionSymbol}})</h6>            \n              <h6 class=\"text-danger text-center\" *ngIf=\"symbol && shape > 9\">{{'Graphic on the axis'|translate}} {{selectedAxe}} ({{productSectionAxisTemp}}) (m)</h6>            \n              <div *ngIf=\"imageProductSection != ''\">\n                <img [src]=\"imageProductSection\">\n              </div>\n            </tab>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-doc\"></i> {{'Value'|translate}}</ng-template>\n              <div class=\"row form-group\" *ngIf=\"shape < 10\">\n                <div class=\"col-md-2\">\n                  <h5 class=\"text-danger\" style=\"font-weight:600;margin-top:5px\">{{'Curve number'|translate}}</h5>\n                </div>\n                <div class=\"col-md-2 text-center\">\n                  <input type=\"text\" value=\"{{nbSteps}}\" [(ngModel)]=\"NB_STEPS\" class=\"form-control\" [disabled]=\"disableChange\">\n                </div>\n                <div class=\"col-md-2 text-center\">\n                  <button class=\"btn btn-primary\" (click)=\"saveNbStep()\" [disabled]=\"disableChange\">{{'Refresh'|translate}}</button>\n                </div>\n              </div>\n              <h6 class=\"text-danger text-center\" *ngIf=\"symbol\">{{'Table on the axis'|translate}} {{selectedAxe}} ({{productSectionAxisTemp}}) ({{symbol.prodchartDimensionSymbol}})</h6>\n              <div class=\"table-responsive\" style=\"height:300px\">\n                <table class=\"table table-bordered table-sm\">\n                    <tr *ngIf=\"symbol\">\n                      <th class=\"text-center\">{{'Node number'|translate}}</th>\n                      <th class=\"text-center\">{{'Position Axis'|translate}} {{selectedAxe}}<br>({{symbol.prodchartDimensionSymbol}})</th>\n                      <ng-container *ngFor=\"let result of productSectionResult\">\n                        <th *ngIf=\"result\" class=\"text-center\">{{'Temperature at'|translate}}<br>{{result}} {{symbol.timeSymbol}}<br>({{symbol.temperatureSymbol}})</th>\n                      </ng-container>\n                    </tr>\n                    <ng-container *ngFor=\"let items of productSectionValue, let i = index\">\n                      <tr>\n                        <td class=\"text-center\">{{i}}</td>\n                        <td class=\"text-center\">{{productSectionMesAxis[i]}}</td>\n                        <ng-container *ngFor=\"let item of items\">\n                        <td class=\"text-center\">{{item}}</td>\n                      </ng-container>\n                      </tr>\n                    </ng-container>\n                  </table>\n              </div>\n            </tab>\n          </tabset>\n      </ng-container>\n      </div>\n      <div *ngIf=\"displayTimeBasePage == true\" style=\"position:relative;min-height:500px\">\n        <div *ngIf=\"loadTimeBaseData == false\" class=\"text-center\" id=\"showLoaderTimeBased\"></div>\n        <tabset *ngIf=\"loadTimeBaseData == true\">\n          <tab>\n            <ng-template tabHeading><i class=\"icon-graph\"></i> {{'Curve'|translate}}</ng-template> \n            <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Curve'|translate}}</h5>\n            <div class=\"text-center\" *ngIf=\"outputProductChart\"><h4 style=\"color:#f00\">{{outputProductChart.displayName}}</h4></div>\n            <div *ngIf=\"imageTimeBased != ''\">\n              <img [src]=\"imageTimeBased\">\n            </div>\n          </tab>\n          <tab>\n            <ng-template tabHeading><i class=\"icon-doc\"></i> {{'Value'|translate}}</ng-template>\n            <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Value'|translate}}</h5>\n            <div class=\"text-center\" *ngIf=\"outputProductChart\"><h4 style=\"color:#f00\">{{outputProductChart.displayName}}</h4></div>\n            <h6 class=\"text-primary text-center\" *ngIf=\"symbol\">{{'Temperature'|translate}} ({{symbol.temperatureSymbol}}) vs {{'Time'|translate}} ({{symbol.timeSymbol}})</h6>\n            <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-sm\">\n                <tr>\n                    <th class=\"text-center\">{{'Points'|translate}}</th>\n                    <ng-container *ngFor=\"let result of timeBasedResult\">\n                    <th *ngIf=\"result.points\" class=\"text-center\">{{result.points}}</th>\n                    </ng-container>\n                </tr>\n                <tr *ngIf=\"timeBasedLabel\">\n                  <td class=\"text-center\">{{'Top'|translate}}({{timeBasedLabel.top}})</td>\n                  <ng-container *ngFor=\"let result of timeBasedResult\">\n                  <td *ngIf=\"result.top\" class=\"text-center\">{{result.top}}</td>\n                  </ng-container>\n                </tr>\n                <tr *ngIf=\"timeBasedLabel\">\n                  <td class=\"text-center\">{{'Internal'|translate}}({{timeBasedLabel.int}})</td>\n                  <ng-container *ngFor=\"let result of timeBasedResult\">\n                  <td *ngIf=\"result.int\" class=\"text-center\">{{result.int}}</td>\n                  </ng-container>\n                </tr>\n                <tr *ngIf=\"timeBasedLabel\">\n                  <td class=\"text-center\">{{'Bottom'|translate}}({{timeBasedLabel.bot}})</td>\n                  <ng-container *ngFor=\"let result of timeBasedResult\">\n                  <td *ngIf=\"result.bot\" class=\"text-center\">{{result.bot}}</td>\n                  </ng-container>\n                </tr>\n                <tr *ngIf=\"timeBasedLabel\">\n                  <td class=\"text-center\">{{'Average temperature'|translate}}</td>\n                  <ng-container *ngFor=\"let result of timeBasedResult\">\n                  <td *ngIf=\"result.average\" class=\"text-center\">{{result.average}}</td>\n                  </ng-container>\n                </tr>\n              </table>\n            </div>\n          </tab>\n        </tabset>\n      </div>\n      <div *ngIf=\"display2dOutlinePage == true\" style=\"position:relative;min-height:500px\">\n        <div *ngIf=\"loadProductChart == false || loadProductChartData == false\" class=\"text-center\" id=\"showLoaderOutline\"></div>\n        <ng-container *ngIf=\"loadProductChartData == true\">\n          <div class=\"text-center form-group\" *ngIf=\"outputProductChart\"><h4 style=\"color:#f00\">{{outputProductChart.displayName}}</h4></div>\n          <div class=\"row\" *ngIf=\"symbol\">\n            <div class=\"col-md-4\">\n              <div class=\"row\">\n                <label class=\"col-md-6 col-form-label text-right\">\n                  {{'Temperature Step'|translate}}\n                </label>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"temperatureStep\" [(ngModel)]=\"temperatureStep\" [disabled]=\"shape > 9\">\n                </div>\n                <label class=\"col-md-2 col-form-label\">({{symbol.temperatureSymbol}})</label>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"row\">\n                <label class=\"col-md-6 col-form-label text-right\">\n                  {{'Temperature Min'|translate}}\n                </label>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"temperatureMin\" [(ngModel)]=\"temperatureMin\" [disabled]=\"shape > 9\">\n                </div>\n                <label class=\"col-md-2 col-form-label\">({{symbol.temperatureSymbol}})</label>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"row\">\n                <label class=\"col-md-6 col-form-label text-right\">\n                  {{'Temperature Max'|translate}}\n                </label>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"temperatureMax\" [(ngModel)]=\"temperatureMax\" [disabled]=\"shape > 9\">\n                </div>\n                <label class=\"col-md-2 col-form-label\">({{symbol.temperatureSymbol}})</label>\n              </div>\n            </div>\n          </div>\n          <p class=\"text-primary\">{{'The bounds of the interval temperature must be outside the minimum and maximum temperatures reached by the product. Each of these bounds must be a multiple of the temperature step'|translate}}</p>\n          <div class=\"clearfix form-group\" *ngIf=\"shape < 10\">\n            <button class=\"btn btn-primary pull-right\" (click)=\"refreshStaticTemp()\">{{'Refresh'|translate}}</button>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n              <label class=\"custom-control custom-radio\" style=\"margin:0\" *ngIf=\"outline2Ddata\">\n                <input type=\"radio\" name=\"selectPlan\" [value]= \"3\" [(ngModel)]=\"selectedPlan\" [disabled]=\"plan3Disable\" (change)=\"changeSelectedPlan()\" class=\"custom-control-input\">{{'Slice 12'|translate}} (*,*,{{outline2Ddata.z}})\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <ng-container *ngIf=\"shape != 5 && shape != 4 && shape != 7 && shape != 8\">\n            <div class=\"col-md-4 text-center\">\n              <label class=\"custom-control custom-radio\" style=\"margin:0\" *ngIf=\"outline2Ddata\">\n                <input type=\"radio\" name=\"selectPlan\" [value]= \"2\" [(ngModel)]=\"selectedPlan\" [disabled]=\"plan2Disable\" (change)=\"changeSelectedPlan()\" class=\"custom-control-input\">{{'Slice 13'|translate}} (*,{{outline2Ddata.y}},*)\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div class=\"col-md-4 text-center\">\n              <label class=\"custom-control custom-radio\" style=\"margin:0\" *ngIf=\"outline2Ddata\">\n                <input type=\"radio\" name=\"selectPlan\" [value]= \"1\" [(ngModel)]=\"selectedPlan\" [disabled]=\"plan1Disable\" (change)=\"changeSelectedPlan()\" class=\"custom-control-input\">{{'Slice 23'|translate}} ({{outline2Ddata.x}},*,*)\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            </ng-container>\n          </div>\n          <div style=\"margin-top:30px\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h5 class=\"text-danger\" style=\"font-weight:600;margin-bottom:20px\">{{'Fixed graphic'|translate}}</h5>\n                <div class=\"row form-group\" *ngIf=\"symbol\">\n                  <label class=\"col-md-6 col-form-label text-right\">\n                    {{'Time Record'|translate}} ({{symbol.timeSymbol}}) :\n                  </label>\n                  <div class=\"col-md-6\">\n                    <select name=\"selectRecordTime\" [(ngModel)]=\"timeSelected\" class=\"form-control\">\n                      <ng-container *ngFor=\"let time of timeRecords\">\n                      <option [value]=\"time.RECORD_TIME\">{{ time.RECORD_TIME }}</option>\n                      </ng-container>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"clearfix\">\n                  <div class=\"form-group pull-right\" style=\"padding-top:10px\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"refreshStatic()\">{{'Refresh'|translate}}</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"rewindForwardStatic(0)\">{{'Rewind'|translate}}</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"rewindForwardStatic(1)\">{{'Forward'|translate}}</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getValueContour()\" [ladda]=\"laddaViewContourValue\">{{'Values'|translate}}</button>\n                  </div>\n                </div>\n                \n                <h5 class=\"text-danger\" style=\"font-weight:600;margin:20px 0\">{{'Animated graphic'|translate}}</h5>\n                <div class=\"row form-group\" *ngIf=\"symbol\">\n                  <label class=\"col-md-6 col-form-label text-right\">\n                    {{'Interval of time'|translate}} ({{symbol.timeSymbol}}) :\n                  </label>\n                  <div class=\"col-md-6\">\n                    <input type=\"text\" id=\"timeInterval\" class=\"form-control\" [(ngModel)]=\"timeInterval\">\n                  </div>\n                </div>\n                <div class=\"row form-group\" *ngIf=\"symbol\">\n                  <label class=\"col-md-6 col-form-label text-right\">\n                    {{'Animation speed (sec./image)'|translate}}:\n                  </label>\n                  <div class=\"col-md-6\">\n                    <select name=\"selectSpeedAnimation\" [(ngModel)]=\"selectedSpeed\" class=\"form-control\">\n                      <ng-container *ngFor=\"let speed of speedAnimation\">\n                      <option [value]=\"speed\">{{ speed }}</option>\n                      </ng-container>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group text-right\" style=\"padding-top:10px\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"refreshAnim()\">{{'Refresh'|translate}}</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"stopAnimationContour()\">{{'Stop'|translate}}</button>\n                </div>\n              </div>\n              <div class=\"col-md-6\" style=\"min-height:540px\">\n                <div *ngIf=\"displayContourChart == true;\">\n                  <img [src]=\"contourImage.src\">\n                </div>\n                <div *ngIf=\"contourImages.length > 0 && displayContourChart == false\">\n                  <img *ngFor=\"let image of contourImages; let i = index\" [src]=\"image.src\" [class.hidden]=\"i != activeContour\">\n                  <label class=\"col-form-label\">({{ sort }}/{{contourImages.length}})</label>\n                  <div class=\"progress\" *ngIf=\"percent\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" [ngStyle]=\"{'width.%': percent}\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #valuesModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5>{{'Array Of Values'|translate}}</h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"valuesModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"max-height: 750px;overflow: auto\">\n          <table class=\"table table-bordered table-sm mb-0 text-center\" *ngIf=\"symbol\">\n            <thead>\n              <tr>\n                <th>{{ 'dim'|translate }}{{axisX}}-{{'coordinate'|translate }} ({{ symbol.prodchartDimensionSymbol }})</th>\n                <th>{{ 'dim'|translate }}{{axisY}}-{{'coordinate'|translate }} ({{ symbol.prodchartDimensionSymbol }})</th>\n                <th>{{ 'Temperature'|translate }} ({{ symbol.temperatureSymbol }})</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let value of contourValue, let i = index\">\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  <span>{{ value.X }}</span>\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  <span>{{ value.Y }}</span>\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                  <span>{{ value.Z }}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"text-center\" style=\"margin-top: 25px;\">\n            <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"valuesModal.hide()\">{{ 'Close'|translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/output/output-charts/output-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#heatExchange {\n  position: relative; }\n\n#timeBased {\n  position: relative; }\n\n#showLoader {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderLocation {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderProductSection {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderTimeBased {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderOutline {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\nimg {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/output/output-charts/output-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_services_api_service__ = __webpack_require__("../../../../../src/app/api/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_text_service__ = __webpack_require__("../../../../../src/app/shared/text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OutputChartsComponent = (function () {
    function OutputChartsComponent(api, translate, router, http, toastr, text) {
        this.api = api;
        this.translate = translate;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.text = text;
        this.activePage = '';
        this.activeBtn = '';
        this.displayLocationPage = true;
        this.displayHeatExchangePage = false;
        this.displayProductSectionPage = false;
        this.displayTimeBasePage = false;
        this.display2dOutlinePage = false;
        this.radioChecked = 0;
        this.disableChange = false;
        this.imageTimeBased = '';
        this.imageProductSection = '';
        this.imageHeatExchange = '';
        this.imgPoint = {
            top: 'point_top.png',
            int: 'point_int.png',
            bot: 'point_bot.png'
        };
        this.imgAxis = {
            axis1: 'axe1.png',
            axis2: 'axe2.png',
            axis3: 'axe3.png'
        };
        this.imgPlan = {
            plan1: 'plan12.png',
            plan2: 'plan13.png',
            plan3: 'plan23.png'
        };
        this.tempForm = {
            nbSteps: ''
        };
        this.radioMeshAxis = {
            obj1: false,
            obj2: false,
            obj3: false
        };
        this.radioMeshPlan = {
            obj1: false,
            obj2: false,
            obj3: false
        };
        this.selectedMeshPoint = {
            obj1: {
                x: true,
                y: true,
                z: true
            },
            obj2: {
                x: true,
                y: true,
                z: true
            },
            obj3: {
                x: true,
                y: true,
                z: true
            },
        };
        this.selectedMeshAxis = {
            obj1: {
                x: true,
                y: true,
                z: true
            },
            obj2: {
                x: true,
                y: true,
                z: true
            },
            obj3: {
                x: true,
                y: true,
                z: true
            },
        };
        this.selectedMeshPlan = {
            obj1: {
                x: true,
                y: true,
                z: true
            },
            obj2: {
                x: true,
                y: true,
                z: true
            },
            obj3: {
                x: true,
                y: true,
                z: true
            },
        };
        this.selectedPointStorage = {
            point: {
                top: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                },
                int: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                },
                bot: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                }
            },
            axis: {
                axe1: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                },
                axe2: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                },
                axe3: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                }
            },
            plan: {
                x: 0.0,
                y: 0.0,
                z: 0.0
            },
        };
        this.radio1Disable = true;
        this.radio2Disable = true;
        this.radio3Disable = true;
        this.select1Disable = true;
        this.select2Disable = true;
        this.select3Disable = true;
        this.heatExchangeChartLegend = true;
        this.heatExchangeChartType = 'line';
        this.heatExchangeColours = [
            { backgroundColor: ['rgb(0,0,255)'], }
        ];
        this.productSectionChartLegend = true;
        this.productSectionChartType = 'line';
        this.productSectionColours = [];
        this.dataArrChart = [];
        this.dataArrColor = [];
        this.timeBasedChartLegend = true;
        this.timeBasedChartType = 'line';
        this.timeBasedColours = [
            { backgroundColor: ['rgb(0,0,255)', 'rgb(0,192,192)', 'rgb(0,255,255)', 'rgb(0,255,0)'], }
        ];
        this.speedAnimation = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
        this.contourData = [];
        this.axisName = [];
        this.dataFile = '';
        this.dataContour = {
            X: [],
            Y: [],
            Z: [],
        };
        this.contourImage = new Image();
        this.contourImages = [];
        this.activeContour = 0;
        this.sort = 1;
        this.percent = 0;
        this.planDisabled = false;
        this.laddaViewContourValue = false;
        this.tempForm.nbSteps = '';
    }
    OutputChartsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
            this.user = JSON.parse(localStorage.getItem('user'));
            if (this.study.ID_USER != this.user.ID_USER) {
                this.disableChange = true;
            }
            this.radioDisable = true;
            this.selectDisable = true;
            this.rbpoint01 = '';
            this.rbpoint02 = '';
            this.rbpoint03 = '';
            this.recordType = 'points';
            this.radioChecked = null;
            this.selectedAxe = 2;
            this.axis1Disable = false;
            this.axis2Disable = false;
            this.axis3Disable = false;
            this.selectedPlan = 3;
            this.plan1Disable = false;
            this.plan2Disable = false;
            this.plan3Disable = false;
            this.selectedSpeed = 1;
            this.axisX = '';
            this.axisY = '';
            this.loadLocationData = false;
            this.loadHeatExchangeData = false;
            this.loadTimeBaseData = false;
            this.loadProductSectionData = false;
            this.loadProductChartData = false;
            this.loadProductChart = false;
            this.x = -1;
            this.displayContourChart = false;
        }
    };
    OutputChartsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
            this.api.getstudyEquipmentProductChart(this.study.ID_STUDY).subscribe(function (dataEquip) {
                // console.log(dataEquip);
                if (dataEquip == '') {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Warning', 'This study has no product charts results.', 'error');
                    _this.router.navigate(['/output/preliminary']);
                }
                else {
                    _this.outputProductChartList = dataEquip;
                    _this.selectedEquip = dataEquip[0].ID_STUDY_EQUIPMENTS;
                    _this.api.getProductElmt(_this.study.ID_STUDY).subscribe(function (data) {
                        _this.shape = data.SHAPECODE;
                        if (_this.shape == 1 || _this.shape == 6) {
                            _this.planDisabled = true;
                        }
                        // console.log(this.shape);
                    });
                    _this.refeshView();
                }
            });
        }
    };
    OutputChartsComponent.prototype.refeshView = function () {
        var _this = this;
        this.api.getSymbol(this.study.ID_STUDY).subscribe(function (data) {
            _this.symbol = data;
            _this.activePage = 'location';
            _this.loadData();
            // console.log(this.radioMeshAxis);
            // console.log(this.radioMeshPlan);
            _this.api.getTempRecordPts(_this.study.ID_STUDY).subscribe(function (dataTemp) {
                // console.log(dataTemp);
                _this.tempRecordPts = dataTemp;
                _this.nbSteps = dataTemp.NB_STEPS;
                _this.NB_STEPS = _this.nbSteps;
                _this.loadLocationData = true;
            });
            _this.api.getSelectedMeshPoints(_this.study.ID_STUDY).subscribe(function (dataMesh) {
                // console.log(data);
                _this.selectedPoints = dataMesh;
            });
        });
    };
    OutputChartsComponent.prototype.changeEquipment = function () {
        this.activeBtn = '';
        this.radioDisable = true;
        this.selectDisable = true;
        this.radioChecked = null;
        this.selectedAxe = 2;
        this.loadData();
    };
    OutputChartsComponent.prototype.loadData = function () {
        var _this = this;
        this.api.getstudyEquipmentProductChart(this.study.ID_STUDY).subscribe(function (dataEquip) {
            _this.outputProductChartList = dataEquip;
            for (var i = 0; i < Object.keys(dataEquip).length; i++) {
                if (dataEquip[i].ID_STUDY_EQUIPMENTS == _this.selectedEquip) {
                    _this.outputProductChart = dataEquip[i];
                }
            }
            if (_this.shape == 1) {
                _this.folderImg = 'SLAB';
                _this.axis1Disable = true;
                _this.axis2Disable = false;
                _this.axis3Disable = true;
                _this.radioMeshAxis.obj1 = true;
                _this.radioMeshAxis.obj3 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: false,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 2 || _this.shape == 10 || _this.shape == 18) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.folderImg = 'STANDING_PLPD/parallel';
                    if (_this.shape < 10) {
                        _this.axis1Disable = true;
                    }
                    _this.axis2Disable = false;
                    _this.axis3Disable = false;
                }
                else {
                    _this.folderImg = 'STANDING_PLPD/perpendicular';
                    _this.axis1Disable = false;
                    _this.axis2Disable = false;
                    if (_this.shape < 10) {
                        _this.axis3Disable = true;
                    }
                }
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: false,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshPlan = {
                    obj1: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj2: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: false,
                    }
                };
            }
            else if (_this.shape == 3 || _this.shape == 11) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.folderImg = 'LAYING_PLPD/parallel';
                }
                else {
                    _this.folderImg = 'LAYING_PLPD/perpendicular';
                }
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: false,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshPlan = {
                    obj1: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj2: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: false,
                    }
                };
            }
            else if (_this.shape == 4 || _this.shape == 12 || _this.shape == 19) {
                _this.folderImg = 'STANDING_CYL';
                _this.axis1Disable = false;
                _this.axis2Disable = false;
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.radioMeshAxis.obj3 = true;
                _this.radioMeshPlan.obj1 = true;
                _this.radioMeshPlan.obj2 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 5 || _this.shape == 13 || _this.shape == 20) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.folderImg = 'LAYING_CYL/parallel';
                }
                else {
                    _this.folderImg = 'LAYING_CYL/perpendicular';
                }
                _this.axis1Disable = false;
                _this.axis2Disable = false;
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.radioMeshAxis.obj3 = true;
                _this.radioMeshPlan.obj1 = true;
                _this.radioMeshPlan.obj2 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 6 || _this.shape == 14) {
                _this.folderImg = 'SPHERE';
                if (_this.shape < 10) {
                    _this.axis1Disable = true;
                }
                _this.axis2Disable = false;
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.radioMeshAxis.obj1 = true;
                _this.radioMeshAxis.obj3 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: false,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 7 || _this.shape == 15) {
                _this.folderImg = 'STANDING_CYL_C';
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.radioMeshAxis.obj3 = true;
                _this.radioMeshPlan.obj1 = true;
                _this.radioMeshPlan.obj2 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 8 || _this.shape == 16) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.folderImg = 'LAYING_CYL_C/parallel';
                }
                else {
                    _this.folderImg = 'LAYING_CYL_C/perpendicular';
                }
                if (_this.shape < 10) {
                    _this.axis3Disable = true;
                }
                _this.radioMeshAxis.obj3 = true;
                _this.radioMeshPlan.obj1 = true;
                _this.radioMeshPlan.obj2 = true;
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: true,
                    }
                };
            }
            else if (_this.shape == 9 || _this.shape == 17) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.folderImg = 'BREADED/parallel';
                    if (_this.shape < 10) {
                        _this.axis1Disable = true;
                    }
                    _this.axis2Disable = false;
                    _this.axis3Disable = false;
                }
                else {
                    _this.folderImg = 'BREADED/perpendicular';
                    if (_this.shape < 10) {
                        _this.axis1Disable = true;
                    }
                    _this.axis2Disable = false;
                    _this.axis3Disable = false;
                }
                _this.selectedMeshPoint = {
                    obj1: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: false,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: false,
                    }
                };
                _this.selectedMeshAxis = {
                    obj1: {
                        x: true,
                        y: false,
                        z: false,
                    },
                    obj2: {
                        x: false,
                        y: true,
                        z: false,
                    },
                    obj3: {
                        x: false,
                        y: false,
                        z: true,
                    }
                };
                _this.selectedMeshPlan = {
                    obj1: {
                        x: false,
                        y: true,
                        z: true,
                    },
                    obj2: {
                        x: true,
                        y: false,
                        z: true,
                    },
                    obj3: {
                        x: true,
                        y: true,
                        z: false,
                    }
                };
            }
            // console.log(this.axis3Disable);
            if (_this.shape < 9) {
                if (_this.shape == 2 || _this.shape == 9) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.plan1Disable = false;
                        _this.plan2Disable = true;
                        _this.plan3Disable = true;
                        _this.selectedPlan = 1;
                    }
                    else {
                        _this.plan1Disable = true;
                        _this.plan2Disable = true;
                        _this.plan3Disable = false;
                        _this.selectedPlan = 3;
                    }
                }
                else if (_this.shape == 3) {
                    _this.plan1Disable = true;
                    _this.plan2Disable = true;
                    _this.plan3Disable = false;
                    _this.selectedPlan = 3;
                }
                else {
                    _this.plan1Disable = false;
                    _this.plan2Disable = false;
                    _this.plan3Disable = false;
                    _this.selectedPlan = 3;
                }
            }
            else {
                switch (Number(_this.shape)) {
                    case _this.text.shapeNames.D_STAND_CYL:
                    case _this.text.shapeNames.D_LYI_CYL:
                    case _this.text.shapeNames.D_STAND_CON_CYL:
                    case _this.text.shapeNames.D_LYN_CON_CYL:
                    case _this.text.shapeNames.D_STAND_OVAL:
                    case _this.text.shapeNames.D_LYN_OVAL:
                        _this.plan1Disable = true;
                        _this.plan2Disable = true;
                        _this.plan3Disable = false;
                        _this.selectedPlan = 3;
                        break;
                    default:
                        _this.plan1Disable = false;
                        _this.plan2Disable = false;
                        _this.plan3Disable = false;
                        _this.selectedPlan = 3;
                        break;
                }
            }
            _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/shape.png';
            // console.log(this.plan3Disable);
            _this.api.getlocationAxisSelected(_this.study.ID_STUDY).subscribe(function (data) {
                // console.log(data);
                _this.locationAxisSelected = data;
                _this.selectedPointStorage.point.top.x = data['top'][0].value;
                _this.selectedPointStorage.point.top.y = data['top'][1].value;
                _this.selectedPointStorage.point.top.z = data['top'][2].value;
                _this.selectedPointStorage.point.int.x = data['int'][0].value;
                _this.selectedPointStorage.point.int.y = data['int'][1].value;
                _this.selectedPointStorage.point.int.z = data['int'][2].value;
                _this.selectedPointStorage.point.bot.x = data['bot'][0].value;
                _this.selectedPointStorage.point.bot.y = data['bot'][1].value;
                _this.selectedPointStorage.point.bot.z = data['bot'][2].value;
                _this.selectedPointStorage.plan.x = data['plan'][0].value;
                _this.selectedPointStorage.plan.y = data['plan'][1].value;
                _this.selectedPointStorage.plan.z = data['plan'][2].value;
                if (_this.shape == 1) {
                    _this.selectedPointStorage.axis.axe1.x = data['axe1'][0].value;
                    _this.selectedPointStorage.axis.axe1.y = data['axe1'][1].value;
                    _this.selectedPointStorage.axis.axe1.z = data['axe1'][2].value;
                    _this.selectedPointStorage.axis.axe2.x = data['axe2'][0].value;
                    _this.selectedPointStorage.axis.axe2.y = data['axe2'][1].value;
                    _this.selectedPointStorage.axis.axe2.z = data['axe2'][2].value;
                    _this.selectedPointStorage.axis.axe3.x = data['axe3'][0].value;
                    _this.selectedPointStorage.axis.axe3.y = data['axe3'][1].value;
                    _this.selectedPointStorage.axis.axe3.z = data['axe3'][2].value;
                }
                else if (_this.shape == 2 || _this.shape == 9) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.selectedPointStorage.axis.axe1.x = data['axe3'][0].value;
                        _this.selectedPointStorage.axis.axe1.y = data['axe3'][1].value;
                        _this.selectedPointStorage.axis.axe1.z = data['axe3'][2].value;
                        _this.selectedPointStorage.axis.axe2.x = data['axe2'][0].value;
                        _this.selectedPointStorage.axis.axe2.y = data['axe2'][1].value;
                        _this.selectedPointStorage.axis.axe2.z = data['axe2'][2].value;
                        _this.selectedPointStorage.axis.axe3.x = data['axe1'][0].value;
                        _this.selectedPointStorage.axis.axe3.y = data['axe1'][1].value;
                        _this.selectedPointStorage.axis.axe3.z = data['axe1'][2].value;
                    }
                    else {
                        _this.selectedPointStorage.axis.axe1.x = data['axe1'][0].value;
                        _this.selectedPointStorage.axis.axe1.y = data['axe1'][1].value;
                        _this.selectedPointStorage.axis.axe1.z = data['axe1'][2].value;
                        _this.selectedPointStorage.axis.axe2.x = data['axe2'][0].value;
                        _this.selectedPointStorage.axis.axe2.y = data['axe2'][1].value;
                        _this.selectedPointStorage.axis.axe2.z = data['axe2'][2].value;
                        _this.selectedPointStorage.axis.axe3.x = data['axe3'][0].value;
                        _this.selectedPointStorage.axis.axe3.y = data['axe3'][1].value;
                        _this.selectedPointStorage.axis.axe3.z = data['axe3'][2].value;
                    }
                }
                else if (_this.shape == 3) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.selectedPointStorage.axis.axe1.x = data['axe3'][0].value;
                        _this.selectedPointStorage.axis.axe1.y = data['axe3'][1].value;
                        _this.selectedPointStorage.axis.axe1.z = data['axe3'][2].value;
                        _this.selectedPointStorage.axis.axe2.x = data['axe1'][0].value;
                        _this.selectedPointStorage.axis.axe2.y = data['axe1'][1].value;
                        _this.selectedPointStorage.axis.axe2.z = data['axe1'][2].value;
                        _this.selectedPointStorage.axis.axe3.x = data['axe2'][0].value;
                        _this.selectedPointStorage.axis.axe3.y = data['axe2'][1].value;
                        _this.selectedPointStorage.axis.axe3.z = data['axe2'][2].value;
                    }
                    else {
                        _this.selectedPointStorage.axis.axe1.x = data['axe2'][0].value;
                        _this.selectedPointStorage.axis.axe1.y = data['axe2'][1].value;
                        _this.selectedPointStorage.axis.axe1.z = data['axe2'][2].value;
                        _this.selectedPointStorage.axis.axe2.x = data['axe1'][0].value;
                        _this.selectedPointStorage.axis.axe2.y = data['axe1'][1].value;
                        _this.selectedPointStorage.axis.axe2.z = data['axe1'][2].value;
                        _this.selectedPointStorage.axis.axe3.x = data['axe3'][0].value;
                        _this.selectedPointStorage.axis.axe3.y = data['axe3'][1].value;
                        _this.selectedPointStorage.axis.axe3.z = data['axe3'][2].value;
                    }
                }
                else if (_this.shape == 4 || _this.shape == 5) {
                    _this.selectedPointStorage.axis.axe1.x = data['axe1'][0].value;
                    _this.selectedPointStorage.axis.axe1.y = data['axe1'][1].value;
                    _this.selectedPointStorage.axis.axe1.z = data['axe1'][2].value;
                    _this.selectedPointStorage.axis.axe2.x = data['axe2'][0].value;
                    _this.selectedPointStorage.axis.axe2.y = data['axe2'][1].value;
                    _this.selectedPointStorage.axis.axe2.z = data['axe2'][2].value;
                    _this.selectedPointStorage.axis.axe3.x = 0.0;
                    _this.selectedPointStorage.axis.axe3.y = 0.0;
                    _this.selectedPointStorage.axis.axe3.z = 0.0;
                }
                else if (_this.shape == 7 || _this.shape == 8) {
                    _this.selectedPointStorage.axis.axe1.x = data['axe2'][0].value;
                    _this.selectedPointStorage.axis.axe1.y = data['axe2'][1].value;
                    _this.selectedPointStorage.axis.axe1.z = data['axe2'][2].value;
                    _this.selectedPointStorage.axis.axe2.x = data['axe1'][0].value;
                    _this.selectedPointStorage.axis.axe2.y = data['axe1'][1].value;
                    _this.selectedPointStorage.axis.axe2.z = data['axe1'][2].value;
                    _this.selectedPointStorage.axis.axe3.x = 0.0;
                    _this.selectedPointStorage.axis.axe3.y = 0.0;
                    _this.selectedPointStorage.axis.axe3.z = 0.0;
                }
                else if (_this.shape == 6) {
                    _this.selectedPointStorage.axis.axe1.x = 0.0;
                    _this.selectedPointStorage.axis.axe1.y = 0.0;
                    _this.selectedPointStorage.axis.axe1.z = 0.0;
                    _this.selectedPointStorage.axis.axe2.x = data['axe1'][0].value;
                    _this.selectedPointStorage.axis.axe2.y = data['axe1'][1].value;
                    _this.selectedPointStorage.axis.axe2.z = data['axe1'][2].value;
                    _this.selectedPointStorage.axis.axe3.x = 0.0;
                    _this.selectedPointStorage.axis.axe3.y = 0.0;
                    _this.selectedPointStorage.axis.axe3.z = 0.0;
                }
                else {
                    _this.selectedPointStorage.axis.axe1.x = 0.0;
                    _this.selectedPointStorage.axis.axe1.y = 0.0;
                    _this.selectedPointStorage.axis.axe1.z = 0.0;
                    _this.selectedPointStorage.axis.axe2.x = 0.0;
                    _this.selectedPointStorage.axis.axe2.y = 0.0;
                    _this.selectedPointStorage.axis.axe2.z = 0.0;
                    _this.selectedPointStorage.axis.axe3.x = 0.0;
                    _this.selectedPointStorage.axis.axe3.y = 0.0;
                    _this.selectedPointStorage.axis.axe3.z = 0.0;
                }
                // console.log(this.selectedPointStorage);
            });
            _this.api.getMeshPoints(_this.study.ID_STUDY).subscribe(function (data) {
                if (_this.shape == 1) {
                    _this.mesAxisXData = data[0];
                    _this.mesAxisYData = data[1];
                    _this.mesAxisZData = data[2];
                }
                else if (_this.shape == 2 || _this.shape == 9) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.mesAxisXData = data[2];
                        _this.mesAxisYData = data[1];
                        _this.mesAxisZData = data[0];
                    }
                    else {
                        _this.mesAxisXData = data[0];
                        _this.mesAxisYData = data[1];
                        _this.mesAxisZData = data[2];
                    }
                }
                else if (_this.shape == 3) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.mesAxisXData = data[2];
                        _this.mesAxisYData = data[0];
                        _this.mesAxisZData = data[1];
                    }
                    else {
                        _this.mesAxisXData = data[1];
                        _this.mesAxisYData = data[0];
                        _this.mesAxisZData = data[2];
                    }
                }
                else if (_this.shape == 4 || _this.shape == 5) {
                    _this.mesAxisXData = data[0];
                    _this.mesAxisYData = data[1];
                    _this.mesAxisZData = [];
                }
                else if (_this.shape == 7 || _this.shape == 8) {
                    _this.mesAxisXData = data[1];
                    _this.mesAxisYData = data[0];
                    _this.mesAxisZData = [];
                }
                else if (_this.shape == 6) {
                    _this.mesAxisXData = [];
                    _this.mesAxisYData = data[1];
                    _this.mesAxisZData = [];
                }
                else {
                    _this.mesAxisXData = [];
                    _this.mesAxisYData = [];
                    _this.mesAxisZData = [];
                }
                // console.log(data);
            });
        });
    };
    OutputChartsComponent.prototype.convertPointForAppletDim = function (axisDataAxe) {
        var result = [];
        if (this.shape == 1) {
            result[0] = axisDataAxe[0];
            result[1] = axisDataAxe[1];
            result[2] = axisDataAxe[2];
        }
        else if (this.shape == 2 || this.shape == 9) {
            if (this.outputProductChart.ORIENTATION == 1) {
                result[0] = axisDataAxe[2];
                result[1] = axisDataAxe[1];
                result[2] = axisDataAxe[0];
            }
            else {
                result[0] = axisDataAxe[0];
                result[1] = axisDataAxe[1];
                result[2] = axisDataAxe[2];
            }
        }
        else if (this.shape == 3) {
            if (this.outputProductChart.ORIENTATION == 1) {
                result[0] = axisDataAxe[2];
                result[1] = axisDataAxe[0];
                result[2] = axisDataAxe[1];
            }
            else {
                result[0] = axisDataAxe[1];
                result[1] = axisDataAxe[0];
                result[2] = axisDataAxe[2];
            }
        }
        else if (this.shape == 4 || this.shape == 5) {
            result[0] = axisDataAxe[0];
            result[1] = axisDataAxe[1];
            result[2] = 0.0;
        }
        else if (this.shape == 7 || this.shape == 8) {
            result[0] = axisDataAxe[1];
            result[1] = axisDataAxe[0];
            result[2] = 0.0;
        }
        else if (this.shape == 6) {
            result[0] = 0.0;
            result[1] = axisDataAxe[1];
            result[2] = 0.0;
        }
        else {
            result[0] = 0.0;
            result[1] = 0.0;
            result[2] = 0.0;
        }
        return result;
    };
    OutputChartsComponent.prototype.selectPoints = function () {
        this.mesAxisXSelected = 0;
        this.mesAxisYSelected = 0;
        this.mesAxisZSelected = 0;
        this.activeBtn = 'points';
        this.radioDisable = false;
        this.radio1Disable = false;
        this.radio2Disable = false;
        this.radio3Disable = false;
        this.select1Disable = true;
        this.select2Disable = true;
        this.select3Disable = true;
        this.pointSelectedValueX = 0;
        this.pointSelectedValueY = 0;
        this.pointSelectedValueZ = 0;
        this.pointSelectedUnitX = '';
        this.pointSelectedUnitY = '';
        this.pointSelectedUnitZ = '';
        this.radioChecked = null;
        this.imgProd3D = 'assets/img/output/' + this.folderImg + '/points.png';
        this.rbpoint01 = this.translate.instant('Surface');
        this.rbpoint02 = this.translate.instant('Internal');
        this.rbpoint03 = this.translate.instant('Bottom');
        this.recordType = 'points';
    };
    OutputChartsComponent.prototype.selectAxis = function () {
        this.mesAxisXSelected = 0;
        this.mesAxisYSelected = 0;
        this.mesAxisZSelected = 0;
        // console.log(this.outputProductChart.ORIENTATION);
        this.activeBtn = 'axis';
        this.radioDisable = false;
        this.radio1Disable = this.radioMeshAxis.obj1;
        this.radio2Disable = this.radioMeshAxis.obj2;
        this.radio3Disable = this.radioMeshAxis.obj3;
        this.select1Disable = true;
        this.select2Disable = true;
        this.select3Disable = true;
        this.pointSelectedValueX = 0;
        this.pointSelectedValueY = 0;
        this.pointSelectedValueZ = 0;
        this.pointSelectedUnitX = '';
        this.pointSelectedUnitY = '';
        this.pointSelectedUnitZ = '';
        this.radioChecked = null;
        this.imgProd3D = 'assets/img/output/' + this.folderImg + '/axes.png';
        if (this.shape == 1) {
            this.rbpoint01 = this.translate.instant('Axis 3');
            this.rbpoint02 = this.translate.instant('Axis 2');
            this.rbpoint03 = this.translate.instant('Axis 1');
        }
        else if (this.shape == 2 || this.shape == 9) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.rbpoint01 = this.translate.instant('Axis 3');
                this.rbpoint02 = this.translate.instant('Axis 2');
                this.rbpoint03 = this.translate.instant('Axis 1');
            }
            else {
                this.rbpoint01 = this.translate.instant('Axis 1');
                this.rbpoint02 = this.translate.instant('Axis 2');
                this.rbpoint03 = this.translate.instant('Axis 3');
            }
        }
        else if (this.shape == 3) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.rbpoint01 = this.translate.instant('Axis 3');
                this.rbpoint02 = this.translate.instant('Axis 1');
                this.rbpoint03 = this.translate.instant('Axis 2');
            }
            else {
                this.rbpoint01 = this.translate.instant('Axis 2');
                this.rbpoint02 = this.translate.instant('Axis 1');
                this.rbpoint03 = this.translate.instant('Axis 3');
            }
        }
        else if (this.shape == 4 || this.shape == 5 || this.shape == 6) {
            this.rbpoint01 = this.translate.instant('Axis 1');
            this.rbpoint02 = this.translate.instant('Axis 2');
            this.rbpoint03 = this.translate.instant('Axis 3');
        }
        else if (this.shape == 7) {
            this.rbpoint01 = this.translate.instant('Axis 2');
            this.rbpoint02 = this.translate.instant('Axis 3');
            this.rbpoint03 = this.translate.instant('Axis 1');
        }
        else if (this.shape == 8) {
            this.rbpoint01 = this.translate.instant('Axis 2');
            this.rbpoint02 = this.translate.instant('Axis 1');
            this.rbpoint03 = this.translate.instant('Axis 3');
        }
        else {
            this.rbpoint01 = this.translate.instant('Axis 1');
            this.rbpoint02 = this.translate.instant('Axis 2');
            this.rbpoint03 = this.translate.instant('Axis 3');
        }
        this.recordType = 'axis';
    };
    OutputChartsComponent.prototype.selectPlans = function () {
        this.mesAxisXSelected = 0;
        this.mesAxisYSelected = 0;
        this.mesAxisZSelected = 0;
        this.activeBtn = 'plans';
        this.radioDisable = false;
        this.radio1Disable = this.radioMeshPlan.obj1;
        this.radio2Disable = this.radioMeshPlan.obj2;
        this.radio3Disable = this.radioMeshPlan.obj3;
        this.select1Disable = true;
        this.select2Disable = true;
        this.select3Disable = true;
        this.radioChecked = null;
        this.pointSelectedValueX = 0;
        this.pointSelectedValueY = 0;
        this.pointSelectedValueZ = 0;
        this.pointSelectedUnitX = '';
        this.pointSelectedUnitY = '';
        this.pointSelectedUnitZ = '';
        this.imgProd3D = 'assets/img/output/' + this.folderImg + '/plans.png';
        if (this.shape == 2 || this.shape == 9) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.rbpoint01 = this.translate.instant('Slice 12');
                this.rbpoint02 = this.translate.instant('Slice 13');
                this.rbpoint03 = this.translate.instant('Slice 23');
            }
            else {
                this.rbpoint01 = this.translate.instant('Slice 23');
                this.rbpoint02 = this.translate.instant('Slice 13');
                this.rbpoint03 = this.translate.instant('Slice 12');
            }
        }
        else if (this.shape == 5 || this.shape == 7) {
            this.rbpoint01 = this.translate.instant('Slice 13');
            this.rbpoint02 = this.translate.instant('Slice 23');
            this.rbpoint03 = this.translate.instant('Slice 12');
        }
        else if (this.shape == 3) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.rbpoint01 = this.translate.instant('Slice 12');
                this.rbpoint02 = this.translate.instant('Slice 23');
                this.rbpoint03 = this.translate.instant('Slice 13');
            }
            else {
                this.rbpoint01 = this.translate.instant('Slice 13');
                this.rbpoint02 = this.translate.instant('Slice 23');
                this.rbpoint03 = this.translate.instant('Slice 12');
            }
        }
        else if (this.shape == 4 || this.shape == 8) {
            this.rbpoint01 = this.translate.instant('Slice 23');
            this.rbpoint02 = this.translate.instant('Slice 13');
            this.rbpoint03 = this.translate.instant('Slice 12');
        }
        else {
            this.rbpoint01 = this.translate.instant('Slice 12');
            this.rbpoint02 = this.translate.instant('Slice 13');
            this.rbpoint03 = this.translate.instant('Slice 23');
        }
        this.recordType = 'plans';
    };
    OutputChartsComponent.prototype.onrbChange = function (recordType, value) {
        var _this = this;
        this.selectDisable = false;
        this.radioChecked = value;
        // console.log(this.shape);
        // console.log(this.selectedPointStorage);
        this.api.getMeshPoints(this.study.ID_STUDY).subscribe(function (data) {
            // console.log(data);
            if (_this.shape == 1) {
                _this.mesAxisX = data[0];
                _this.mesAxisY = data[1];
                _this.mesAxisZ = data[2];
            }
            else if (_this.shape == 2 || _this.shape == 9) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.mesAxisX = data[2];
                    _this.mesAxisY = data[1];
                    _this.mesAxisZ = data[0];
                }
                else {
                    _this.mesAxisX = data[0];
                    _this.mesAxisY = data[1];
                    _this.mesAxisZ = data[2];
                }
            }
            else if (_this.shape == 3) {
                if (_this.outputProductChart.ORIENTATION == 1) {
                    _this.mesAxisX = data[2];
                    _this.mesAxisY = data[0];
                    _this.mesAxisZ = data[1];
                }
                else {
                    _this.mesAxisX = data[1];
                    _this.mesAxisY = data[0];
                    _this.mesAxisZ = data[2];
                }
            }
            else if (_this.shape == 4 || _this.shape == 5) {
                _this.mesAxisX = data[0];
                _this.mesAxisY = data[1];
                _this.mesAxisZ = [];
            }
            else if (_this.shape == 7 || _this.shape == 8) {
                _this.mesAxisX = data[1];
                _this.mesAxisY = data[0];
                _this.mesAxisZ = [];
            }
            else if (_this.shape == 6) {
                _this.mesAxisX = [];
                _this.mesAxisY = data[1];
                _this.mesAxisZ = [];
            }
            else {
                _this.mesAxisX = [];
                _this.mesAxisY = [];
                _this.mesAxisZ = [];
            }
            // console.log(data);
            if (recordType === 'points') {
                if (value === 0) {
                    _this.select1Disable = _this.selectedMeshPoint.obj1.x;
                    _this.select2Disable = _this.selectedMeshPoint.obj1.y;
                    _this.select3Disable = _this.selectedMeshPoint.obj1.z;
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPoint.top;
                }
                else if (value === 1) {
                    _this.select1Disable = _this.selectedMeshPoint.obj2.x;
                    _this.select2Disable = _this.selectedMeshPoint.obj2.y;
                    _this.select3Disable = _this.selectedMeshPoint.obj2.z;
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPoint.int;
                }
                else {
                    _this.select1Disable = _this.selectedMeshPoint.obj3.x;
                    _this.select2Disable = _this.selectedMeshPoint.obj3.y;
                    _this.select3Disable = _this.selectedMeshPoint.obj3.z;
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPoint.bot;
                }
            }
            if (recordType === 'axis') {
                // console.log(this.shape);
                if (_this.shape == 2 || _this.shape == 9) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.imgAxis.axis1 = 'axe3.png';
                        _this.imgAxis.axis2 = 'axe2.png';
                        _this.imgAxis.axis3 = 'axe1.png';
                    }
                    else {
                        _this.imgAxis.axis1 = 'axe1.png';
                        _this.imgAxis.axis2 = 'axe2.png';
                        _this.imgAxis.axis3 = 'axe3.png';
                    }
                }
                else if (_this.shape == 7 || _this.shape == 8) {
                    _this.imgAxis.axis1 = 'axe2.png';
                    _this.imgAxis.axis2 = 'axe1.png';
                    _this.imgAxis.axis3 = 'axe3.png';
                }
                else if (_this.shape == 3) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.imgAxis.axis1 = 'axe3.png';
                        _this.imgAxis.axis2 = 'axe1.png';
                        _this.imgAxis.axis3 = 'axe2.png';
                    }
                    else {
                        _this.imgAxis.axis1 = 'axe2.png';
                        _this.imgAxis.axis2 = 'axe1.png';
                        _this.imgAxis.axis3 = 'axe3.png';
                    }
                }
                else if (_this.shape == 1) {
                    _this.imgAxis.axis1 = 'axe3.png';
                    _this.imgAxis.axis2 = 'axe2.png';
                    _this.imgAxis.axis3 = 'axe1.png';
                }
                if (value === 0) {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshAxis.obj1.x;
                        _this.select2Disable = _this.selectedMeshAxis.obj1.y;
                        _this.select3Disable = _this.selectedMeshAxis.obj1.z;
                    }
                    else {
                        _this.select1Disable = false;
                        _this.select2Disable = false;
                        _this.select3Disable = true;
                    }
                    _this.mesAxisX = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgAxis.axis1;
                }
                else if (value === 1) {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshAxis.obj2.x;
                        _this.select2Disable = _this.selectedMeshAxis.obj2.y;
                        _this.select3Disable = _this.selectedMeshAxis.obj2.z;
                    }
                    else {
                        _this.select1Disable = false;
                        _this.select2Disable = true;
                        _this.select3Disable = false;
                    }
                    _this.mesAxisY = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgAxis.axis2;
                }
                else {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshAxis.obj3.x;
                        _this.select2Disable = _this.selectedMeshAxis.obj3.y;
                        _this.select3Disable = _this.selectedMeshAxis.obj3.z;
                    }
                    else {
                        _this.select1Disable = true;
                        _this.select2Disable = false;
                        _this.select3Disable = false;
                    }
                    _this.mesAxisZ = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgAxis.axis3;
                }
            }
            if (recordType === 'plans') {
                if (_this.shape == 2 || _this.shape == 9) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.imgPlan.plan1 = 'plan12.png';
                        _this.imgPlan.plan2 = 'plan13.png';
                        _this.imgPlan.plan3 = 'plan23.png';
                    }
                    else {
                        _this.imgPlan.plan1 = 'plan23.png';
                        _this.imgPlan.plan2 = 'plan13.png';
                        _this.imgPlan.plan3 = 'plan12.png';
                    }
                }
                else if (_this.shape == 5 || _this.shape == 7) {
                    _this.imgPlan.plan1 = 'plan13.png';
                    _this.imgPlan.plan2 = 'plan23.png';
                    _this.imgPlan.plan3 = 'plan12.png';
                }
                else if (_this.shape == 8) {
                    _this.imgPlan.plan1 = 'plan23.png';
                    _this.imgPlan.plan2 = 'plan13.png';
                    _this.imgPlan.plan3 = 'plan12.png';
                }
                else if (_this.shape == 3) {
                    if (_this.outputProductChart.ORIENTATION == 1) {
                        _this.imgPlan.plan1 = 'plan12.png';
                        _this.imgPlan.plan2 = 'plan23.png';
                        _this.imgPlan.plan3 = 'plan13.png';
                    }
                    else {
                        _this.imgPlan.plan1 = 'plan13.png';
                        _this.imgPlan.plan2 = 'plan23.png';
                        _this.imgPlan.plan3 = 'plan12.png';
                    }
                }
                else if (_this.shape == 4) {
                    _this.imgPlan.plan1 = 'plan23.png';
                    _this.imgPlan.plan2 = 'plan13.png';
                    _this.imgPlan.plan3 = 'plan12.png';
                }
                if (value === 0) {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshPlan.obj1.x;
                        _this.select2Disable = _this.selectedMeshPlan.obj1.y;
                        _this.select3Disable = _this.selectedMeshPlan.obj1.z;
                    }
                    else {
                        _this.select1Disable = false;
                        _this.select2Disable = true;
                        _this.select3Disable = true;
                    }
                    _this.mesAxisY = [];
                    _this.mesAxisZ = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPlan.plan1;
                }
                else if (value === 1) {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshPlan.obj2.x;
                        _this.select2Disable = _this.selectedMeshPlan.obj2.y;
                        _this.select3Disable = _this.selectedMeshPlan.obj2.z;
                    }
                    else {
                        _this.select1Disable = true;
                        _this.select2Disable = false;
                        _this.select3Disable = true;
                    }
                    _this.mesAxisX = [];
                    _this.mesAxisZ = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPlan.plan2;
                }
                else {
                    if (_this.shape <= 9) {
                        _this.select1Disable = _this.selectedMeshPlan.obj3.x;
                        _this.select2Disable = _this.selectedMeshPlan.obj3.y;
                        _this.select3Disable = _this.selectedMeshPlan.obj3.z;
                    }
                    else {
                        _this.select1Disable = true;
                        _this.select2Disable = true;
                        _this.select3Disable = false;
                    }
                    _this.mesAxisX = [];
                    _this.mesAxisY = [];
                    _this.imgProd3D = 'assets/img/output/' + _this.folderImg + '/' + _this.imgPlan.plan3;
                }
            }
        });
        if (recordType === 'points') {
            if (value === 0) {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.top.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.top.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.top.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.top.x;
                        this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.top.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.top.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.top.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.top.y;
                        this.mesAxisYSelected = this.selectedPointStorage.point.top.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.top.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.top.y;
                    this.mesAxisYSelected = this.selectedPointStorage.point.top.x;
                    this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.top.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.point.top.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.top.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.top.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = this.selectedPoints.POINT1_X.value;
                    this.pointSelectedValueY = this.selectedPoints.POINT1_Y.value;
                    this.pointSelectedValueZ = this.selectedPoints.POINT1_Z.value;
                    this.pointSelectedUnitX = this.selectedPoints.POINT1_X.unit;
                    this.pointSelectedUnitY = this.selectedPoints.POINT1_Y.unit;
                    this.pointSelectedUnitZ = this.selectedPoints.POINT1_Z.unit;
                }
            }
            else if (value === 1) {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.int.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.int.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.int.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.int.x;
                        this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.int.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.int.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.int.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.int.y;
                        this.mesAxisYSelected = this.selectedPointStorage.point.int.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.int.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.int.y;
                    this.mesAxisYSelected = this.selectedPointStorage.point.int.x;
                    this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.int.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.point.int.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.int.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.int.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = this.selectedPoints.POINT2_X.value;
                    this.pointSelectedValueY = this.selectedPoints.POINT2_Y.value;
                    this.pointSelectedValueZ = this.selectedPoints.POINT2_Z.value;
                    this.pointSelectedUnitX = this.selectedPoints.POINT2_X.unit;
                    this.pointSelectedUnitY = this.selectedPoints.POINT2_Y.unit;
                    this.pointSelectedUnitZ = this.selectedPoints.POINT2_Z.unit;
                }
            }
            else if (value == 2) {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.bot.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.bot.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.bot.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.bot.x;
                        this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                        this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.point.bot.z;
                        this.mesAxisYSelected = this.selectedPointStorage.point.bot.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.bot.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.point.bot.y;
                        this.mesAxisYSelected = this.selectedPointStorage.point.bot.x;
                        this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.bot.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.bot.y;
                    this.mesAxisYSelected = this.selectedPointStorage.point.bot.x;
                    this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.point.bot.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.point.bot.x;
                    this.mesAxisYSelected = this.selectedPointStorage.point.bot.y;
                    this.mesAxisZSelected = this.selectedPointStorage.point.bot.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = this.selectedPoints.POINT3_X.value;
                    this.pointSelectedValueY = this.selectedPoints.POINT3_Y.value;
                    this.pointSelectedValueZ = this.selectedPoints.POINT3_Z.value;
                    this.pointSelectedUnitX = this.selectedPoints.POINT3_X.unit;
                    this.pointSelectedUnitY = this.selectedPoints.POINT3_Y.unit;
                    this.pointSelectedUnitZ = this.selectedPoints.POINT3_Z.unit;
                }
            }
        }
        if (recordType === 'axis') {
            if (value === 0) {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.x;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.y;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.y;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.x;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe1.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe1.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe1.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = this.selectedPoints.AXE1_X.value;
                    this.pointSelectedValueY = this.selectedPoints.AXE1_Y.value;
                    this.pointSelectedValueZ = 0;
                    this.pointSelectedUnitX = this.selectedPoints.AXE1_X.unit;
                    this.pointSelectedUnitY = this.selectedPoints.AXE1_Y.unit;
                    this.pointSelectedUnitZ = '';
                }
            }
            else if (value === 1) {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.x;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.y;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.y;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.x;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe2.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe2.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe2.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = this.selectedPoints.AXE2_X.value;
                    this.pointSelectedValueY = 0;
                    this.pointSelectedValueZ = this.selectedPoints.AXE2_Z.value;
                    this.pointSelectedUnitX = this.selectedPoints.AXE2_X.unit;
                    this.pointSelectedUnitY = '';
                    this.pointSelectedUnitZ = this.selectedPoints.AXE2_Z.unit;
                }
            }
            else {
                if (this.shape == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.x;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.x;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.z;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.y;
                    }
                    else {
                        this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.y;
                        this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.x;
                        this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.y;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.x;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                }
                else if (this.shape == 6) {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.axis.axe3.x;
                    this.mesAxisYSelected = this.selectedPointStorage.axis.axe3.y;
                    this.mesAxisZSelected = this.selectedPointStorage.axis.axe3.z;
                }
                if (this.shape > 9) {
                    this.pointSelectedValueX = 0;
                    this.pointSelectedValueY = this.selectedPoints.AXE3_Y.value;
                    this.pointSelectedValueZ = this.selectedPoints.AXE3_Z.value;
                    this.pointSelectedUnitX = '';
                    this.pointSelectedUnitY = this.selectedPoints.AXE3_Y.unit;
                    this.pointSelectedUnitZ = this.selectedPoints.AXE3_Z.unit;
                }
            }
        }
        if (recordType === 'plans') {
            if (this.shape == 1) {
                this.mesAxisXSelected = this.selectedPointStorage.plan.x;
                this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                this.mesAxisZSelected = this.selectedPointStorage.plan.z;
            }
            else if (this.shape == 2 || this.shape == 9) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.plan.z;
                    this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                    this.mesAxisZSelected = this.selectedPointStorage.plan.x;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.plan.x;
                    this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                    this.mesAxisZSelected = this.selectedPointStorage.plan.z;
                }
            }
            else if (this.shape == 3) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.mesAxisXSelected = this.selectedPointStorage.plan.z;
                    this.mesAxisYSelected = this.selectedPointStorage.plan.x;
                    this.mesAxisZSelected = this.selectedPointStorage.plan.y;
                }
                else {
                    this.mesAxisXSelected = this.selectedPointStorage.plan.y;
                    this.mesAxisYSelected = this.selectedPointStorage.plan.x;
                    this.mesAxisZSelected = this.selectedPointStorage.plan.z;
                }
            }
            else if (this.shape == 4 || this.shape == 5) {
                this.mesAxisXSelected = this.selectedPointStorage.plan.x;
                this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                this.mesAxisZSelected = this.selectedPointStorage.plan.z;
            }
            else if (this.shape == 7 || this.shape == 8) {
                this.mesAxisXSelected = this.selectedPointStorage.plan.y;
                this.mesAxisYSelected = this.selectedPointStorage.plan.x;
                this.mesAxisZSelected = this.selectedPointStorage.plan.z;
            }
            else if (this.shape == 6) {
                this.mesAxisXSelected = this.selectedPointStorage.plan.x;
                this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                this.mesAxisZSelected = this.selectedPointStorage.plan.z;
            }
            else {
                this.mesAxisXSelected = this.selectedPointStorage.plan.x;
                this.mesAxisYSelected = this.selectedPointStorage.plan.y;
                this.mesAxisZSelected = this.selectedPointStorage.plan.z;
            }
            switch (Number(value)) {
                case 0:
                    this.pointSelectedValueX = this.selectedPoints.PLAN_X.value;
                    this.pointSelectedValueY = 0;
                    this.pointSelectedValueZ = 0;
                    this.pointSelectedUnitX = this.selectedPoints.PLAN_X.unit;
                    this.pointSelectedUnitY = '';
                    this.pointSelectedUnitZ = '';
                    break;
                case 1:
                    this.pointSelectedValueX = 0;
                    this.pointSelectedValueY = this.selectedPoints.PLAN_Y.value;
                    this.pointSelectedValueZ = 0;
                    this.pointSelectedUnitX = '';
                    this.pointSelectedUnitY = this.selectedPoints.PLAN_Y.unit;
                    this.pointSelectedUnitZ = '';
                    break;
                case 2:
                    this.pointSelectedValueX = 0;
                    this.pointSelectedValueY = 0;
                    this.pointSelectedValueZ = this.selectedPoints.PLAN_Z.value;
                    this.pointSelectedUnitX = '';
                    this.pointSelectedUnitY = '';
                    this.pointSelectedUnitZ = this.selectedPoints.PLAN_Z.unit;
                    break;
            }
        }
        // console.log(this.mesAxisXSelected);
        // console.log(this.mesAxisYSelected);
        // console.log(this.mesAxisZSelected);
    };
    OutputChartsComponent.prototype.changeX = function () {
        // console.log(this.recordType);
        // console.log(this.radioChecked);
        // console.log(this.mesAxisXSelected);
        if (this.recordType === 'points') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.top.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.top.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.top.y = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.top.x = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.point.top.x = this.mesAxisXSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.int.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.int.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.int.y = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.int.x = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.point.int.x = this.mesAxisXSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.bot.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.bot.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.bot.y = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.bot.x = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.point.bot.x = this.mesAxisXSelected;
                }
            }
        }
        if (this.recordType === 'axis') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe1.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe1.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe1.x = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe1.y = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe1.x = this.mesAxisXSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe2.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe2.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe2.y = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe2.x = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe2.x = this.mesAxisXSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe3.x = this.mesAxisXSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.x = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.z = this.mesAxisXSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.y = this.mesAxisXSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe3.x = this.mesAxisXSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe3.y = this.mesAxisXSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe3.x = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe3.x = this.mesAxisXSelected;
                }
            }
        }
        if (this.recordType === 'plans') {
            if (this.shape == 1) {
                this.selectedPointStorage.plan.x = this.mesAxisXSelected;
            }
            else if (this.shape == 2 || this.shape == 9) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.z = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.plan.x = this.mesAxisXSelected;
                }
            }
            else if (this.shape == 3) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.z = this.mesAxisXSelected;
                }
                else {
                    this.selectedPointStorage.plan.y = this.mesAxisXSelected;
                }
            }
            else if (this.shape == 4 || this.shape == 5) {
                this.selectedPointStorage.plan.x = this.mesAxisXSelected;
            }
            else if (this.shape == 7 || this.shape == 8) {
                this.selectedPointStorage.plan.y = this.mesAxisXSelected;
            }
            else if (this.shape == 6) {
                this.selectedPointStorage.plan.x = this.mesAxisXSelected;
            }
            else {
                this.selectedPointStorage.plan.x = this.mesAxisXSelected;
            }
        }
        // console.log(this.selectedPointStorage);
    };
    OutputChartsComponent.prototype.changeY = function () {
        // console.log(this.recordType);
        // console.log(this.radioChecked);
        if (this.recordType === 'points') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.top.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.point.top.y = this.mesAxisYSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.int.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.point.int.y = this.mesAxisYSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.bot.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.point.bot.y = this.mesAxisYSelected;
                }
            }
        }
        if (this.recordType === 'axis') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe1.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe1.y = this.mesAxisYSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe2.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe2.y = this.mesAxisYSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.x = this.mesAxisYSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.x = this.mesAxisYSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe3.x = this.mesAxisYSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe3.y = this.mesAxisYSelected;
                }
            }
        }
        if (this.recordType === 'plans') {
            if (this.shape == 1) {
                this.selectedPointStorage.plan.y = this.mesAxisYSelected;
            }
            else if (this.shape == 2 || this.shape == 9) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.y = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.plan.y = this.mesAxisYSelected;
                }
            }
            else if (this.shape == 3) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.x = this.mesAxisYSelected;
                }
                else {
                    this.selectedPointStorage.plan.x = this.mesAxisYSelected;
                }
            }
            else if (this.shape == 4 || this.shape == 5) {
                this.selectedPointStorage.plan.y = this.mesAxisYSelected;
            }
            else if (this.shape == 7 || this.shape == 8) {
                this.selectedPointStorage.plan.x = this.mesAxisYSelected;
            }
            else if (this.shape == 6) {
                this.selectedPointStorage.plan.y = this.mesAxisYSelected;
            }
            else {
                this.selectedPointStorage.plan.y = this.mesAxisYSelected;
            }
        }
    };
    OutputChartsComponent.prototype.changeZ = function () {
        // console.log(this.recordType);
        // console.log(this.radioChecked);
        if (this.recordType === 'points') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.top.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.point.top.z = this.mesAxisZSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.int.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.point.int.z = this.mesAxisZSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.point.bot.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.point.bot.z = this.mesAxisZSelected;
                }
            }
        }
        if (this.recordType === 'axis') {
            if (this.radioChecked === 0) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe1.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe1.z = this.mesAxisZSelected;
                }
            }
            else if (this.radioChecked === 1) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe2.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe2.z = this.mesAxisZSelected;
                }
            }
            else if (this.radioChecked == 2) {
                if (this.shape == 1) {
                    this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                }
                else if (this.shape == 2 || this.shape == 9) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.x = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 3) {
                    if (this.outputProductChart.ORIENTATION == 1) {
                        this.selectedPointStorage.axis.axe3.y = this.mesAxisZSelected;
                    }
                    else {
                        this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                    }
                }
                else if (this.shape == 4 || this.shape == 5) {
                    this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                }
                else if (this.shape == 7 || this.shape == 8) {
                    this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                }
                else if (this.shape == 6) {
                    this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.axis.axe3.z = this.mesAxisZSelected;
                }
            }
        }
        if (this.recordType === 'plans') {
            if (this.shape == 1) {
                this.selectedPointStorage.plan.z = this.mesAxisZSelected;
            }
            else if (this.shape == 2 || this.shape == 9) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.x = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.plan.z = this.mesAxisZSelected;
                }
            }
            else if (this.shape == 3) {
                if (this.outputProductChart.ORIENTATION == 1) {
                    this.selectedPointStorage.plan.y = this.mesAxisZSelected;
                }
                else {
                    this.selectedPointStorage.plan.z = this.mesAxisZSelected;
                }
            }
            else if (this.shape == 4 || this.shape == 5) {
                this.selectedPointStorage.plan.z = this.mesAxisZSelected;
            }
            else if (this.shape == 7 || this.shape == 8) {
                this.selectedPointStorage.plan.z = this.mesAxisZSelected;
            }
            else if (this.shape == 6) {
                this.selectedPointStorage.plan.z = this.mesAxisZSelected;
            }
            else {
                this.selectedPointStorage.plan.z = this.mesAxisZSelected;
            }
        }
        // console.log(this.mesAxisZSelected);
    };
    OutputChartsComponent.prototype.saveAll = function () {
        var _this = this;
        // console.log(this.mesAxisXData);
        // console.log(this.mesAxisYData);
        // console.log(this.mesAxisZData);
        // console.log(this.selectedPointStorage);
        if (!this.nbSteps) {
            this.toastr.error(this.translate.instant('Enter a value in Number of samples !'), 'Error');
            return;
        }
        else if (!Number.isInteger(Number(this.nbSteps)) || this.nbSteps < 0) {
            this.toastr.error(this.translate.instant('Not a valid number in Number of samples !'), 'Error');
            return;
        }
        if (this.shape == 1) {
            this.POINT_TOP_X = this.selectedPointStorage.point.top.x;
            this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
            this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
            this.POINT_INT_X = this.selectedPointStorage.point.int.x;
            this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
            this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
            this.POINT_BOT_X = this.selectedPointStorage.point.bot.x;
            this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
            this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
            this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.x;
            this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
            this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
            this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.x;
            this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
            this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
            this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.x;
            this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
            this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
            this.PLAN_X = this.selectedPointStorage.plan.x;
            this.PLAN_Y = this.selectedPointStorage.plan.y;
            this.PLAN_Z = this.selectedPointStorage.plan.z;
        }
        else if (this.shape == 2 || this.shape == 9) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.POINT_TOP_X = this.selectedPointStorage.point.top.z;
                this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
                this.POINT_TOP_Z = this.selectedPointStorage.point.top.x;
                this.POINT_INT_X = this.selectedPointStorage.point.int.z;
                this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
                this.POINT_INT_Z = this.selectedPointStorage.point.int.x;
                this.POINT_BOT_X = this.selectedPointStorage.point.bot.z;
                this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
                this.POINT_BOT_Z = this.selectedPointStorage.point.bot.x;
                this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.z;
                this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
                this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.x;
                this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.z;
                this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
                this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.x;
                this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.z;
                this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
                this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.x;
                this.PLAN_X = this.selectedPointStorage.plan.z;
                this.PLAN_Y = this.selectedPointStorage.plan.y;
                this.PLAN_Z = this.selectedPointStorage.plan.x;
            }
            else {
                this.POINT_TOP_X = this.selectedPointStorage.point.top.x;
                this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
                this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
                this.POINT_INT_X = this.selectedPointStorage.point.int.x;
                this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
                this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
                this.POINT_BOT_X = this.selectedPointStorage.point.bot.x;
                this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
                this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
                this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.x;
                this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
                this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
                this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.x;
                this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
                this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
                this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.x;
                this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
                this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
                this.PLAN_X = this.selectedPointStorage.plan.x;
                this.PLAN_Y = this.selectedPointStorage.plan.y;
                this.PLAN_Z = this.selectedPointStorage.plan.z;
            }
        }
        else if (this.shape == 3) {
            if (this.outputProductChart.ORIENTATION == 1) {
                this.POINT_TOP_X = this.selectedPointStorage.point.top.z;
                this.POINT_TOP_Y = this.selectedPointStorage.point.top.x;
                this.POINT_TOP_Z = this.selectedPointStorage.point.top.y;
                this.POINT_INT_X = this.selectedPointStorage.point.int.z;
                this.POINT_INT_Y = this.selectedPointStorage.point.int.x;
                this.POINT_INT_Z = this.selectedPointStorage.point.int.y;
                this.POINT_BOT_X = this.selectedPointStorage.point.bot.z;
                this.POINT_BOT_Y = this.selectedPointStorage.point.bot.x;
                this.POINT_BOT_Z = this.selectedPointStorage.point.bot.y;
                this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.z;
                this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.x;
                this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.y;
                this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.z;
                this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.x;
                this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.y;
                this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.z;
                this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.x;
                this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.y;
                this.PLAN_X = this.selectedPointStorage.plan.z;
                this.PLAN_Y = this.selectedPointStorage.plan.x;
                this.PLAN_Z = this.selectedPointStorage.plan.y;
            }
            else {
                this.POINT_TOP_X = this.selectedPointStorage.point.top.y;
                this.POINT_TOP_Y = this.selectedPointStorage.point.top.x;
                this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
                this.POINT_INT_X = this.selectedPointStorage.point.int.y;
                this.POINT_INT_Y = this.selectedPointStorage.point.int.x;
                this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
                this.POINT_BOT_X = this.selectedPointStorage.point.bot.y;
                this.POINT_BOT_Y = this.selectedPointStorage.point.bot.x;
                this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
                this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.y;
                this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.x;
                this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
                this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.y;
                this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.x;
                this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
                this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.y;
                this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.x;
                this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
                this.PLAN_X = this.selectedPointStorage.axis.axe3.y;
                this.PLAN_Y = this.selectedPointStorage.plan.x;
                this.PLAN_Z = this.selectedPointStorage.plan.z;
            }
        }
        else if (this.shape == 4 || this.shape == 5) {
            this.POINT_TOP_X = this.selectedPointStorage.point.top.x;
            this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
            this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
            this.POINT_INT_X = this.selectedPointStorage.point.int.x;
            this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
            this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
            this.POINT_BOT_X = this.selectedPointStorage.point.bot.x;
            this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
            this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
            this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.x;
            this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
            this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
            this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.x;
            this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
            this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
            this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.x;
            this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
            this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
            this.PLAN_X = this.selectedPointStorage.plan.x;
            this.PLAN_Y = this.selectedPointStorage.plan.y;
            this.PLAN_Z = this.selectedPointStorage.plan.z;
        }
        else if (this.shape == 7 || this.shape == 8) {
            this.POINT_TOP_X = this.selectedPointStorage.point.top.y;
            this.POINT_TOP_Y = this.selectedPointStorage.point.top.x;
            this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
            this.POINT_INT_X = this.selectedPointStorage.point.int.y;
            this.POINT_INT_Y = this.selectedPointStorage.point.int.x;
            this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
            this.POINT_BOT_X = this.selectedPointStorage.point.bot.y;
            this.POINT_BOT_Y = this.selectedPointStorage.point.bot.x;
            this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
            this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.y;
            this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.x;
            this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
            this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.y;
            this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.x;
            this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
            this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.y;
            this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.x;
            this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
            this.PLAN_X = this.selectedPointStorage.axis.axe3.y;
            this.PLAN_Y = this.selectedPointStorage.plan.x;
            this.PLAN_Z = this.selectedPointStorage.plan.z;
        }
        else if (this.shape == 6) {
            this.POINT_TOP_X = this.selectedPointStorage.point.top.x;
            this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
            this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
            this.POINT_INT_X = this.selectedPointStorage.point.int.x;
            this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
            this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
            this.POINT_BOT_X = this.selectedPointStorage.point.bot.x;
            this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
            this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
            this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.x;
            this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
            this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
            this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.x;
            this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
            this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
            this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.x;
            this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
            this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
            this.PLAN_X = this.selectedPointStorage.plan.x;
            this.PLAN_Y = this.selectedPointStorage.plan.y;
            this.PLAN_Z = this.selectedPointStorage.plan.z;
        }
        else {
            this.POINT_TOP_X = this.selectedPointStorage.point.top.x;
            this.POINT_TOP_Y = this.selectedPointStorage.point.top.y;
            this.POINT_TOP_Z = this.selectedPointStorage.point.top.z;
            this.POINT_INT_X = this.selectedPointStorage.point.int.x;
            this.POINT_INT_Y = this.selectedPointStorage.point.int.y;
            this.POINT_INT_Z = this.selectedPointStorage.point.int.z;
            this.POINT_BOT_X = this.selectedPointStorage.point.bot.x;
            this.POINT_BOT_Y = this.selectedPointStorage.point.bot.y;
            this.POINT_BOT_Z = this.selectedPointStorage.point.bot.z;
            this.AXIS_AXE1_X = this.selectedPointStorage.axis.axe1.x;
            this.AXIS_AXE1_Y = this.selectedPointStorage.axis.axe1.y;
            this.AXIS_AXE1_Z = this.selectedPointStorage.axis.axe1.z;
            this.AXIS_AXE2_X = this.selectedPointStorage.axis.axe2.x;
            this.AXIS_AXE2_Y = this.selectedPointStorage.axis.axe2.y;
            this.AXIS_AXE2_Z = this.selectedPointStorage.axis.axe2.z;
            this.AXIS_AXE3_X = this.selectedPointStorage.axis.axe3.x;
            this.AXIS_AXE3_Y = this.selectedPointStorage.axis.axe3.y;
            this.AXIS_AXE3_Z = this.selectedPointStorage.axis.axe3.z;
            this.PLAN_X = this.selectedPointStorage.plan.x;
            this.PLAN_Y = this.selectedPointStorage.plan.y;
            this.PLAN_Z = this.selectedPointStorage.plan.z;
        }
        var params = {
            ID_STUDY_EQUIPMENTS: this.outputProductChart.ID_STUDY_EQUIPMENTS,
            NB_STEPS: this.nbSteps,
            POINT_TOP_X: this.POINT_TOP_X,
            POINT_TOP_Y: this.POINT_TOP_Y,
            POINT_TOP_Z: this.POINT_TOP_Z,
            POINT_INT_X: this.POINT_INT_X,
            POINT_INT_Y: this.POINT_INT_Y,
            POINT_INT_Z: this.POINT_INT_Z,
            POINT_BOT_X: this.POINT_BOT_X,
            POINT_BOT_Y: this.POINT_BOT_Y,
            POINT_BOT_Z: this.POINT_BOT_Z,
            AXIS_AXE1_X: this.AXIS_AXE1_X,
            AXIS_AXE1_Y: this.AXIS_AXE1_Y,
            AXIS_AXE1_Z: this.AXIS_AXE1_Z,
            AXIS_AXE2_X: this.AXIS_AXE2_X,
            AXIS_AXE2_Y: this.AXIS_AXE2_Y,
            AXIS_AXE2_Z: this.AXIS_AXE2_Z,
            AXIS_AXE3_X: this.AXIS_AXE3_X,
            AXIS_AXE3_Y: this.AXIS_AXE3_Y,
            AXIS_AXE3_Z: this.AXIS_AXE3_Z,
            PLAN_X: this.PLAN_X,
            PLAN_Y: this.PLAN_Y,
            PLAN_Z: this.PLAN_Z,
        };
        // console.log(this.mesAxisXData);
        // console.log(this.mesAxisYData);
        // console.log(this.mesAxisZData);
        // console.log(params);
        this.api.saveLocationAxis({
            id: this.study.ID_STUDY,
            body: params
        }).subscribe(function (response) {
            _this.toastr.success(_this.translate.instant('Update success'), 'successfully');
        });
    };
    OutputChartsComponent.prototype.getValueSelected = function (type, value) {
        if (type == 'x') {
            if (value > 0 && this.mesAxisXData.length > 0) {
                for (var i = 0; i < this.mesAxisXData.length; i++) {
                    if (this.mesAxisXData[i].name == value) {
                        return this.mesAxisXData[i].value;
                    }
                }
            }
            else {
                return value;
            }
        }
        else if (type == 'y') {
            if (value > 0 && this.mesAxisYData.length > 0) {
                for (var i = 0; i < this.mesAxisYData.length; i++) {
                    if (this.mesAxisYData[i].name == value) {
                        return this.mesAxisYData[i].value;
                    }
                }
            }
            else {
                return value;
            }
        }
        else if (type == 'z') {
            if (value > 0 && this.mesAxisZData.length > 0) {
                for (var i = 0; i < this.mesAxisZData.length; i++) {
                    if (this.mesAxisZData[i].name == value) {
                        return this.mesAxisZData[i].value;
                    }
                }
            }
            else {
                return value;
            }
        }
    };
    OutputChartsComponent.prototype.loadLocation = function () {
        this.activePage = 'location';
        this.displayContourChart = true;
        this.stopAnimationContour();
        this.displayLocationPage = true;
        this.displayHeatExchangePage = false;
        this.displayProductSectionPage = false;
        this.displayTimeBasePage = false;
        this.display2dOutlinePage = false;
        this.loadLocationData = false;
        this.refeshView();
    };
    OutputChartsComponent.prototype.loadheadExchage = function () {
        var _this = this;
        this.activePage = 'heatExchange';
        this.displayContourChart = true;
        this.stopAnimationContour();
        this.displayLocationPage = false;
        this.displayHeatExchangePage = true;
        this.displayProductSectionPage = false;
        this.displayTimeBasePage = false;
        this.display2dOutlinePage = false;
        this.loadHeatExchangeData = false;
        this.api.getstudyEquipmentProductChart(this.study.ID_STUDY).subscribe(function (data) {
            // console.log(data);
            for (var i = 0; i < Object.keys(data).length; i++) {
                if (data[i].ID_STUDY_EQUIPMENTS == _this.selectedEquip) {
                    _this.outputProductChart = data[i];
                }
            }
            var params = {
                idStudy: _this.study.ID_STUDY,
                idStudyEquipment: _this.outputProductChart['ID_STUDY_EQUIPMENTS']
            };
            _this.api.heatExchange(params).subscribe(function (dataChart) {
                _this.imageHeatExchange = dataChart.imageHeatExchange;
                _this.headExchangeCurve = dataChart.curve;
                _this.headExchangeResult = dataChart.result;
                var chartData = [
                    { data: JSON.parse(JSON.stringify(_this.headExchangeCurve)), label: _this.translate.instant('Enthalpy'),
                        type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,0,255)', backgroundColor: 'rgb(0,0,255)', borderWidth: 2 }
                ];
                _this.heatExchangeChartData = chartData;
                _this.heatExchangeChartOptions = {
                    animation: false,
                    responsive: false,
                    legend: {
                        onClick: function (e) { return e.stopPropagation(); },
                        position: 'right',
                        labels: {
                            padding: 20
                        }
                    },
                    hoverMode: 'index',
                    stacked: false,
                    title: {
                        display: false,
                        text: _this.outputProductChart.EQUIP_NAME,
                        fontColor: '#f00',
                        fontSize: 16
                    },
                    scales: {
                        xAxes: [{
                                type: 'linear',
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: _this.translate.instant(_this.symbol.timeSymbol),
                                    fontColor: '#f00',
                                    fontSize: 20
                                },
                            }],
                        yAxes: [{
                                type: 'linear',
                                display: true,
                                id: 'y-axis-1',
                                scaleLabel: {
                                    display: true,
                                    labelString: _this.translate.instant(_this.symbol.enthalpySymbol),
                                    fontColor: '#f00',
                                    fontSize: 20
                                }
                            }],
                    }
                };
                _this.loadHeatExchangeData = true;
            });
        });
    };
    OutputChartsComponent.prototype.loadProductSection = function () {
        var _this = this;
        this.activePage = 'productSection';
        this.displayContourChart = true;
        this.stopAnimationContour();
        this.displayLocationPage = false;
        this.displayHeatExchangePage = false;
        this.displayProductSectionPage = true;
        this.displayTimeBasePage = false;
        this.display2dOutlinePage = false;
        this.loadProductSectionData = false;
        var params = {
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedAxe: this.selectedAxe
        };
        this.api.productSection(params).subscribe(function (data) {
            // console.log(data);
            _this.imageProductSection = data.imageProductSection;
            _this.productSectionDataChart = data.dataChart;
            _this.productSectionResult = data.resultLabel;
            _this.productSectionValue = data.result.resultValue;
            _this.productSectionRecAxis = data.result.recAxis;
            _this.productSectionMesAxis = data.result.mesAxis;
            if (_this.selectedAxe == 1) {
                _this.productSectionAxisTemp = '*,' + data.axeTemp[0] + ',' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 2) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',*,' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 3) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',' + data.axeTemp[1] + ',*';
            }
            _this.loadProductSectionData = true;
        });
    };
    OutputChartsComponent.prototype.loadTimeBased = function () {
        var _this = this;
        // console.log(this.selectedPoints);
        this.activePage = 'timeBased';
        this.stopAnimationContour();
        this.displayLocationPage = false;
        this.displayHeatExchangePage = false;
        this.displayProductSectionPage = false;
        this.displayTimeBasePage = true;
        this.display2dOutlinePage = false;
        this.loadTimeBaseData = false;
        this.api.getstudyEquipmentProductChart(this.study.ID_STUDY).subscribe(function (data) {
            // console.log(data);
            for (var i = 0; i < Object.keys(data).length; i++) {
                if (data[i].ID_STUDY_EQUIPMENTS == _this.selectedEquip) {
                    _this.outputProductChart = data[i];
                }
            }
            var params = {
                idStudy: _this.study.ID_STUDY,
                idStudyEquipment: _this.outputProductChart['ID_STUDY_EQUIPMENTS']
            };
            _this.api.timeBased(params).subscribe(function (dataTimeBased) {
                // console.log(dataTimeBased);
                _this.imageTimeBased = dataTimeBased.imageTimebased;
                _this.timeBasedResult = dataTimeBased.result;
                _this.timeBasedCurve = dataTimeBased.curve;
                _this.timeBasedLabel = dataTimeBased.label;
                var chartDataObj = _this.timeBasedCurve;
                _this.loadTimeBaseData = true;
            });
        });
    };
    OutputChartsComponent.prototype.loadOutlines2d = function () {
        var _this = this;
        this.activePage = 'outlines2d';
        this.displayLocationPage = false;
        this.displayHeatExchangePage = false;
        this.displayProductSectionPage = false;
        this.displayTimeBasePage = false;
        this.display2dOutlinePage = true;
        this.displayContourChart = false;
        var params = {
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedPlan: this.selectedPlan,
            dimension: this.translate.instant('Dimension')
        };
        this.loadProductChartData = false;
        this.displayContourChart = false;
        this.api.getstudyEquipmentProductChart(this.study.ID_STUDY).subscribe(function (data) {
            // console.log(data);
            for (var i = 0; i < Object.keys(data).length; i++) {
                if (data[i].ID_STUDY_EQUIPMENTS == _this.selectedEquip) {
                    _this.outputProductChart = data[i];
                }
            }
            _this.api.getRecordPosition(_this.outputProductChart.ID_STUDY_EQUIPMENTS).subscribe(function (dataRecord) {
                _this.timeRecords = dataRecord;
            });
            _this.api.productchart2D(params).subscribe(function (dataPr) {
                // console.log(dataPr);
                _this.minTempStep = dataPr.minMax.minTempStep;
                _this.maxTempStep = dataPr.minMax.maxTempStep;
                _this.minTemperature = dataPr.minMax.minTemperature;
                _this.maxTemperature = dataPr.minMax.maxTemperature;
                _this.outline2Ddata = dataPr.valueRecAxis;
                _this.timeSelected = dataPr.lfDwellingTime;
                _this.timeInterval = dataPr.lftimeInterval;
                _this.temperatureMin = dataPr.chartTempInterval[0];
                _this.temperatureMax = dataPr.chartTempInterval[1];
                _this.temperatureStep = dataPr.chartTempInterval[2];
                _this.axisName = dataPr.axisName;
                if (typeof _this.axisName[0] !== 'undefined') {
                    _this.axisX = _this.axisName[0];
                }
                if (typeof _this.axisName[1] !== 'undefined') {
                    _this.axisY = _this.axisName[1];
                }
                _this.contourImage.src = dataPr.imageContour[0];
                _this.loadProductChart = true;
                _this.loadProductChartData = true;
                _this.displayContourChart = true;
            });
        });
    };
    OutputChartsComponent.prototype.changeAxePS = function () {
        // console.log(this.selectedAxe);
        var _this = this;
        this.loadProductSectionData = false;
        var params = {
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedAxe: this.selectedAxe
        };
        this.api.productSection(params).subscribe(function (data) {
            // console.log(data);
            _this.imageProductSection = data.imageProductSection;
            _this.productSectionResult = data.resultLabel;
            _this.productSectionValue = data.result.resultValue;
            _this.productSectionRecAxis = data.result.recAxis;
            _this.productSectionMesAxis = data.result.mesAxis;
            if (_this.selectedAxe == 1) {
                _this.productSectionAxisTemp = '*,' + data.axeTemp[0] + ',' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 2) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',*,' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 3) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',' + data.axeTemp[1] + ',*';
            }
            _this.productSectionDataChart = data.dataChart;
            _this.loadProductSectionData = true;
        });
    };
    OutputChartsComponent.prototype.saveNbStep = function () {
        var _this = this;
        if (!this.NB_STEPS) {
            this.toastr.error(this.translate.instant('Enter a value in Curve Number !'), 'Error');
            return;
        }
        else if (!Number.isInteger(Number(this.NB_STEPS)) || this.NB_STEPS < 0) {
            this.toastr.error(this.translate.instant('Not a valid number in Curve Number !'), 'Error');
            return;
        }
        this.loadProductSectionData = false;
        // console.log(this.NB_STEPS);
        var params = {
            ID_STUDY: this.study.ID_STUDY,
            ID_STUDY_EQUIPMENTS: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            AXE: this.selectedAxe,
            NB_STEPS: this.NB_STEPS
        };
        this.api.saveTempRecordPts(params).subscribe(function (data) {
            // console.log(data);
            _this.productSectionResult = data.resultLabel;
            _this.productSectionValue = data.result.resultValue;
            _this.productSectionRecAxis = data.result.recAxis;
            _this.productSectionMesAxis = data.result.mesAxis;
            if (_this.selectedAxe == 1) {
                _this.productSectionAxisTemp = '*,' + data.axeTemp[0] + ',' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 2) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',*,' + data.axeTemp[1];
            }
            else if (_this.selectedAxe == 3) {
                _this.productSectionAxisTemp = data.axeTemp[0] + ',' + data.axeTemp[1] + ',*';
            }
            _this.productSectionDataChart = data.dataChart;
            _this.loadProductSectionData = true;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Error', err.error.message, 'error');
            // console.log(err);
            _this.loadProductSectionData = true;
        }, function () {
        });
    };
    OutputChartsComponent.prototype.loadChartProductSection = function (chartDataObj, productResust) {
        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        };
        this.dataArrChart = [];
        this.dataArrColor = [];
        for (var i = 0; i < chartDataObj.length; i++) {
            var color = dynamicColors();
            var dataC = {
                data: JSON.parse(JSON.stringify(chartDataObj[i])),
                label: this.translate.instant('Temperature T ' + productResust[i] + '(' + this.symbol.timeSymbol + '))'),
                type: 'line',
                radius: 0,
                fill: false,
                borderColor: color,
                backgroundColor: color,
                borderWidth: 2
            };
            this.dataArrColor.push(color);
            this.dataArrChart.push(dataC);
        }
        this.productSectionColours = [
            { backgroundColor: [this.dataArrColor], }
        ];
        // console.log(this.dataArrColor);
        this.productSectionChartData = JSON.parse(JSON.stringify(this.dataArrChart));
        this.productSectionChartOptions = {
            animation: false,
            responsive: false,
            legend: {
                onClick: function (e) { return e.stopPropagation(); },
                position: 'right',
                labels: {
                    padding: 20
                }
            },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'test',
                fontColor: '#f00',
                fontSize: 16
            },
            scales: {
                xAxes: [{
                        type: 'linear',
                        display: true,
                        position: 'top',
                        scaleLabel: {
                            display: true,
                            labelString: this.translate.instant(this.symbol.temperatureSymbol),
                            fontColor: '#f00',
                            fontSize: 20
                        },
                    }],
                yAxes: [{
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-1',
                        scaleLabel: {
                            display: true,
                            labelString: this.translate.instant(this.symbol.prodchartDimensionSymbol),
                            fontColor: '#f00',
                            fontSize: 20
                        }
                    }],
            }
        };
        if (this.productSectionChart) {
            this.productSectionChart.datasets[0].data = this.productSectionChartData;
            this.productSectionChart.chart.update();
        }
    };
    OutputChartsComponent.prototype.refreshStatic = function () {
        var _this = this;
        var temperatureStepId = document.getElementById('temperatureStep');
        var temperatureMinId = document.getElementById('temperatureMin');
        var temperatureMaxId = document.getElementById('temperatureMax');
        // console.log(Number.isInteger(this.temperatureStep));
        if (this.shape < 10) {
            if (!this.temperatureStep) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature step !'), 'error');
                return;
            }
            else if (!this.isNumberic(this.temperatureStep)) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature step !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureStep, this.minTempStep, this.maxTempStep) === false) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature step' + ' (' + this.minTempStep + ' : '
                    + this.maxTempStep + ') !'), 'error');
                return;
            }
            else if (!this.temperatureMin) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Min !'), 'error');
                return;
            }
            else if (!this.isNumberic(this.temperatureMin)) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Min !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureMin, this.minTemperature, this.maxTemperature) === false) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Min' + ' (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
                return;
            }
            else if (!this.temperatureMax) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Max !'), 'error');
            }
            else if (!this.isNumberic(this.temperatureMax)) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Max !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureMax, this.minTemperature, this.maxTemperature) === false) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Max (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
                return;
            }
        }
        this.loadProductChart = false;
        var params = {
            refreshTemp: 0,
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedPlan: this.selectedPlan,
            temperatureStep: this.temperatureStep,
            temperatureMin: this.temperatureMin,
            temperatureMax: this.temperatureMax,
            timeSelected: this.timeSelected,
            timeInterval: this.timeInterval,
            axisX: this.axisX,
            axisY: this.axisY,
            dimension: this.translate.instant('Dimension'),
        };
        // console.log(params);
        this.api.productChart2DStatic(params).subscribe(function (dataPr) {
            // console.log(dataPr);
            _this.temperatureMin = dataPr.chartTempInterval[0];
            _this.temperatureMax = dataPr.chartTempInterval[1];
            _this.temperatureStep = dataPr.chartTempInterval[2];
            _this.contourImage.src = dataPr.imageContour[0];
            _this.loadProductChart = true;
            _this.displayContourChart = true;
        });
    };
    OutputChartsComponent.prototype.refreshStaticTemp = function () {
        var _this = this;
        var temperatureStepId = document.getElementById('temperatureStep');
        var temperatureMinId = document.getElementById('temperatureMin');
        var temperatureMaxId = document.getElementById('temperatureMax');
        // console.log(Number.isInteger(this.temperatureStep));
        if (!this.temperatureStep) {
            temperatureStepId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature step !'), 'error');
            return;
        }
        else if (!this.isNumberic(this.temperatureStep)) {
            temperatureStepId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature step !'), 'error');
            return;
        }
        else if (this.isInRangeOutput(this.temperatureStep, this.minTempStep, this.maxTempStep) === false) {
            temperatureStepId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature step (' + this.minTempStep + ' : ' + this.maxTempStep + ') !'), 'error');
            return;
        }
        else if (!this.temperatureMin) {
            temperatureMinId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Min !'), 'error');
            return;
        }
        else if (!this.isNumberic(this.temperatureMin)) {
            temperatureMinId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Min !'), 'error');
            return;
        }
        else if (this.isInRangeOutput(this.temperatureMin, this.minTemperature, this.maxTemperature) === false) {
            temperatureMinId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Min (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
            return;
        }
        else if (!this.temperatureMax) {
            temperatureMaxId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Max !'), 'error');
        }
        else if (!this.isNumberic(this.temperatureMax)) {
            temperatureMaxId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Max !'), 'error');
            return;
        }
        else if (this.isInRangeOutput(this.temperatureMax, this.minTemperature, this.maxTemperature) === false) {
            temperatureMaxId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Max (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
            return;
        }
        this.loadProductChart = false;
        var params = {
            refreshTemp: 1,
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedPlan: this.selectedPlan,
            temperatureStep: this.temperatureStep,
            temperatureMin: this.temperatureMin,
            temperatureMax: this.temperatureMax,
            timeSelected: this.timeSelected,
            timeInterval: this.timeInterval,
            axisX: this.axisX,
            axisY: this.axisY,
            dimension: this.translate.instant('Dimension'),
        };
        // console.log(params);
        this.api.productChart2DStatic(params).subscribe(function (dataPr) {
            // console.log(dataPr);
            _this.temperatureMin = dataPr.chartTempInterval[0];
            _this.temperatureMax = dataPr.chartTempInterval[1];
            _this.temperatureStep = dataPr.chartTempInterval[2];
            _this.contourImage.src = dataPr.imageContour[0];
            _this.loadProductChart = true;
            _this.displayContourChart = true;
        });
    };
    OutputChartsComponent.prototype.rewindForwardStatic = function (type) {
        var _this = this;
        var temperatureStepId = document.getElementById('temperatureStep');
        var temperatureMinId = document.getElementById('temperatureMin');
        var temperatureMaxId = document.getElementById('temperatureMax');
        // console.log(Number.isInteger(this.temperatureStep));
        if (this.shape < 10) {
            if (!this.temperatureStep) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature step !'), 'error');
                return;
            }
            else if (!this.isNumberic(this.temperatureStep)) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature step !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureStep, this.minTempStep, this.maxTempStep) === false) {
                temperatureStepId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature step (' + this.minTempStep + ' : ' + this.maxTempStep + ') !'), 'error');
                return;
            }
            else if (!this.temperatureMin) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Min !'), 'error');
                return;
            }
            else if (!this.isNumberic(this.temperatureMin)) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Min !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureMin, this.minTemperature, this.maxTemperature) === false) {
                temperatureMinId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Min (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
                return;
            }
            else if (!this.temperatureMax) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Temperature Max !'), 'error');
            }
            else if (!this.isNumberic(this.temperatureMax)) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Temperature Max !'), 'error');
                return;
            }
            else if (this.isInRangeOutput(this.temperatureMax, this.minTemperature, this.maxTemperature) === false) {
                temperatureMaxId.focus();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Value out of range in Temperature Max (' + this.minTemperature + ' : ' + this.maxTemperature + ') !'), 'error');
                return;
            }
        }
        this.displayContourChart = true;
        this.loadProductChart = false;
        for (var i = 0; i < Object.keys(this.timeRecords).length; i++) {
            if (this.timeSelected == this.timeRecords[i]['RECORD_TIME']) {
                if (type == 0) {
                    // console.log(this.timeSelected);
                    if (i > 0) {
                        this.timeSelected = this.timeRecords[i - 1]['RECORD_TIME'];
                    }
                    else {
                        this.loadProductChart = true;
                        return;
                    }
                }
                else if (type == 1) {
                    // console.log(this.timeSelected);
                    if (i < Object.keys(this.timeRecords).length - 1) {
                        this.timeSelected = this.timeRecords[i + 1]['RECORD_TIME'];
                        break;
                    }
                    else {
                        this.loadProductChart = true;
                        return;
                    }
                }
            }
        }
        var params = {
            refreshTemp: 0,
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedPlan: this.selectedPlan,
            temperatureStep: this.temperatureStep,
            temperatureMin: this.temperatureMin,
            temperatureMax: this.temperatureMax,
            timeSelected: this.timeSelected,
            timeInterval: this.timeInterval,
            axisX: this.axisX,
            axisY: this.axisY,
            dimension: this.translate.instant('Dimension'),
        };
        this.api.productChart2DStatic(params).subscribe(function (dataPr) {
            // console.log(dataPr);
            _this.temperatureMin = dataPr.chartTempInterval[0];
            _this.temperatureMax = dataPr.chartTempInterval[1];
            _this.temperatureStep = dataPr.chartTempInterval[2];
            _this.loadProductChart = true;
        });
    };
    OutputChartsComponent.prototype.refreshAnim = function () {
        var _this = this;
        this.stopAnimationContour();
        var timeIntervalId = document.getElementById('timeInterval');
        if (!this.timeInterval) {
            timeIntervalId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Enter a value in Interval of time (s) !'), 'error');
            return;
        }
        else if (!this.isNumberic(this.timeInterval) || this.timeInterval <= 0) {
            timeIntervalId.focus();
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Oops', this.translate.instant('Not a valid number in Interval of time (s) !'), 'error');
            return;
        }
        this.loadProductChart = false;
        var params = {
            refreshTemp: 0,
            idStudy: this.study.ID_STUDY,
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            selectedPlan: this.selectedPlan,
            temperatureStep: this.temperatureStep,
            temperatureMin: this.temperatureMin,
            temperatureMax: this.temperatureMax,
            timeSelected: this.timeSelected,
            timeInterval: this.timeInterval,
            axisX: this.axisX,
            axisY: this.axisY,
            dimension: this.translate.instant('Dimension'),
        };
        this.api.productchart2DAnim(params).subscribe(function (data) {
            // console.log(data);
            _this.temperatureMin = data.chartTempInterval[0];
            _this.temperatureMax = data.chartTempInterval[1];
            _this.temperatureStep = data.chartTempInterval[2];
            _this.contourImages = [];
            for (var i = 0; i < data.imageContour.length; i++) {
                var contourImage = new Image();
                contourImage.src = data.imageContour[i];
                _this.contourImages.push(contourImage);
            }
            // console.log(this.contourImages);
            _this.displayContourChart = false;
            _this.loadProductChart = true;
            _this.displayAnimationContour = setInterval(function () {
                _this.displayNextImage();
            }, _this.selectedSpeed * 1000);
        });
    };
    OutputChartsComponent.prototype.changeSelectedPlan = function () {
        var _this = this;
        if (this.shape > 9) {
            this.display2dOutlinePage = true;
            this.displayContourChart = false;
            var params = {
                idStudy: this.study.ID_STUDY,
                idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
                selectedPlan: this.selectedPlan,
                dimension: this.translate.instant('Dimension')
            };
            this.loadProductChartData = false;
            this.displayContourChart = false;
            this.api.productchart2D(params).subscribe(function (dataPr) {
                // console.log(dataPr);
                _this.minTempStep = dataPr.minMax.minTempStep;
                _this.maxTempStep = dataPr.minMax.maxTempStep;
                _this.minTemperature = dataPr.minMax.minTemperature;
                _this.maxTemperature = dataPr.minMax.maxTemperature;
                _this.outline2Ddata = dataPr.valueRecAxis;
                _this.timeSelected = dataPr.lfDwellingTime;
                _this.timeInterval = dataPr.lftimeInterval;
                _this.temperatureMin = dataPr.chartTempInterval[0];
                _this.temperatureMax = dataPr.chartTempInterval[1];
                _this.temperatureStep = dataPr.chartTempInterval[2];
                _this.axisName = dataPr.axisName;
                if (typeof _this.axisName[0] !== 'undefined') {
                    _this.axisX = _this.axisName[0];
                }
                if (typeof _this.axisName[1] !== 'undefined') {
                    _this.axisY = _this.axisName[1];
                }
                _this.contourImage.src = dataPr.imageContour[0];
                _this.loadProductChart = true;
                _this.loadProductChartData = true;
                _this.displayContourChart = true;
            });
        }
    };
    OutputChartsComponent.prototype.getValueContour = function () {
        var _this = this;
        this.laddaViewContourValue = true;
        var param = {
            selectedPlan: this.selectedPlan,
            timeSelected: this.timeSelected
        };
        this.api.readDataContour({
            idStudyEquipment: this.outputProductChart['ID_STUDY_EQUIPMENTS'],
            body: param
        }).subscribe(function (data) {
            _this.contourValue = JSON.parse(data.valueContour);
            // console.log(this.contourValue);
            _this.valuesModal.show();
            _this.laddaViewContourValue = false;
        });
    };
    OutputChartsComponent.prototype.displayNextImage = function () {
        if (!this.contourImages) {
            return; // no data
        }
        if (this.activeContour < this.contourImages.length - 1) {
            this.activeContour++;
        }
        else {
            this.activeContour = 0;
        }
        if (this.sort < this.contourImages.length) {
            this.sort++;
        }
        else {
            this.sort = 1;
        }
        this.percent = 100 - (100 - (this.sort / this.contourImages.length) * 100);
        // console.log(this.percent);
    };
    OutputChartsComponent.prototype.stopAnimationContour = function () {
        if (this.displayAnimationContour) {
            clearInterval(this.displayAnimationContour);
            this.displayContourChart = true;
        }
    };
    OutputChartsComponent.prototype.getConfig = function (url) {
        return this.http.get(url);
    };
    OutputChartsComponent.prototype.isNumber = function (n) {
        return typeof n == 'number' && !isNaN(n - n);
    };
    OutputChartsComponent.prototype.isNumberic = function (number) {
        return Number.isInteger(Math.floor(number));
    };
    OutputChartsComponent.prototype.isInRangeOutput = function (value, min, max) {
        if (value < min || value > max) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('valuesModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], OutputChartsComponent.prototype, "valuesModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], OutputChartsComponent.prototype, "heatExchangeChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], OutputChartsComponent.prototype, "productSectionChart", void 0);
    OutputChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-output-charts',
            template: __webpack_require__("../../../../../src/app/views/output/output-charts/output-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/output/output-charts/output-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_9__shared_text_service__["a" /* TextService */]])
    ], OutputChartsComponent);
    return OutputChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/output/output-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/output/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preliminary_preliminary_component__ = __webpack_require__("../../../../../src/app/views/output/preliminary/preliminary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizing_sizing_component__ = __webpack_require__("../../../../../src/app/views/output/sizing/sizing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__output_charts_output_charts_component__ = __webpack_require__("../../../../../src/app/views/output/output-charts/output-charts.component.ts");
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
                redirectTo: 'preliminary',
                pathMatch: 'full',
            },
            {
                path: 'preliminary',
                component: __WEBPACK_IMPORTED_MODULE_3__preliminary_preliminary_component__["a" /* PreliminaryComponent */]
            },
            {
                path: 'sizing',
                component: __WEBPACK_IMPORTED_MODULE_4__sizing_sizing_component__["a" /* SizingComponent */]
            },
            {
                path: 'charts',
                component: __WEBPACK_IMPORTED_MODULE_5__output_charts_output_charts_component__["a" /* OutputChartsComponent */]
            }
        ]
    }
];
var OutputRoutingModule = (function () {
    function OutputRoutingModule() {
    }
    OutputRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], OutputRoutingModule);
    return OutputRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/output/output.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputModule", function() { return OutputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output_routing_module__ = __webpack_require__("../../../../../src/app/views/output/output-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preliminary_preliminary_component__ = __webpack_require__("../../../../../src/app/views/output/preliminary/preliminary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizing_sizing_component__ = __webpack_require__("../../../../../src/app/views/output/sizing/sizing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/output/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calculation_calculation_module__ = __webpack_require__("../../../../../src/app/views/calculation/calculation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__output_charts_output_charts_component__ = __webpack_require__("../../../../../src/app/views/output/output-charts/output-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_ladda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var OutputModule = (function () {
    function OutputModule() {
    }
    OutputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__output_routing_module__["a" /* OutputRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__calculation_calculation_module__["CalculationModule"],
                __WEBPACK_IMPORTED_MODULE_15_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'slide-left',
                }),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__preliminary_preliminary_component__["a" /* PreliminaryComponent */], __WEBPACK_IMPORTED_MODULE_4__sizing_sizing_component__["a" /* SizingComponent */], __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_8__output_charts_output_charts_component__["a" /* OutputChartsComponent */]]
        })
    ], OutputModule);
    return OutputModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/output/output.nav-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputNavItems; });
var outputChart = localStorage.getItem('outputChart');
// console.log(outputChart);
if (outputChart != null) {
    this.productChartNav = [
        {
            name: 'Preliminary',
            url: '/output/preliminary',
            icon: '',
        },
        {
            name: 'Sizing',
            url: '/output/sizing',
            icon: '',
        },
        {
            name: 'Product charts',
            url: '/output/charts',
            icon: '',
        }
    ];
}
else {
    this.productChartNav = [
        {
            name: 'Preliminary',
            url: '/output/preliminary',
            icon: '',
        },
        {
            name: 'Sizing',
            url: '/output/sizing',
            icon: '',
        },
        {
            name: 'Product charts',
            url: '/output/charts',
            icon: '',
        }
    ];
}
var OutputNavItems = this.productChartNav;


/***/ }),

/***/ "../../../../../src/app/views/output/preliminary/preliminary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"study\">\n\n  <div class=\"card product-container\" *ngIf=\"(study.CALCULATION_MODE ==1 && headBalanceResultsTr != '') || (study.CALCULATION_MODE !=1 && headBalanceResults != ''); else noResult\">\n    <div class=\"card-header text-center\">\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openPageHeat()\" [class.active]=\"activePage == 'heat'\">{{'Heat Balance'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openPageCon()\"  [class.active]=\"activePage == 'consumpt'\">{{'Consumptions'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openPageEco()\"  [class.active]=\"activePage == 'economic'\" *ngIf=\"study.OPTION_ECO\">{{'Economics'|translate}}</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div style=\"margin-top:10px;display:block\" id=\"pageHeat\" *ngIf=\"study\">\n        <ng-template #showLoadingOptimum>\n          <div class=\"text-center\" *ngIf=\"study.CALCULATION_MODE == 2 || study.CALCULATION_MODE == 3\" id=\"showLoaderChange\"></div>\n        </ng-template>\n        <ng-template #showLoading>\n            <div class=\"text-center\" *ngIf=\"study.CALCULATION_MODE == 1\" id=\"showLoader\"></div>\n        </ng-template>\n        <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Heat Balance'|translate}}</h5>\n        <div id=\"pageHeadBalaceEstimation\" *ngIf=\"study.CALCULATION_MODE == 1 && headBalanceResultsTr && showLoader == false;else showLoading\">\n          <div class=\"row\">\n              <div class=\"col-md-4\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"trSelect\" (change)=\"openTrPage(2)\" [value]=\"2\">{{'Control Temperature 10°C (18°F) colder.'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n              </div>\n              <div class=\"col-md-4\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"trSelect\" (change)=\"openTrPage(1)\" [value]=\"1\">{{'Control Temperature'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n              </div>\n              <div class=\"col-md-4\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" class=\"custom-control-input\"  [(ngModel)]=\"trSelect\" (change)=\"openTrPage(0)\" [value]=\"0\">{{'Control Temperature 10°C (18°F) warmer.'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n              </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-sm\" *ngIf=\"resultAna\">\n              <tr *ngIf=\"symbol && resultAna\">\n                <td align=\"center\" style=\"vertical-align: middle\">{{'Required Production Rate'|translate}}</td>\n                <td align=\"center\" style=\"vertical-align: middle\">{{resultAna.prodFlowRate}} ({{symbol.productFlowSymbol}})</td>\n                <td align=\"center\" style=\"vertical-align: middle\">{{'Real product mass per unit'|translate}}</td>\n                <td align=\"center\" style=\"vertical-align: middle\">{{ resultAna.prodElmtRealweight }}({{symbol.massSymbol}})</td>\n                <td align=\"center\" style=\"vertical-align: middle\">{{'Initial Average Product temperature'|translate}}</td>\n                <td align=\"center\" style=\"vertical-align: middle\">{{resultAna.avgTInitial}} ({{symbol.temperatureSymbol}})</td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-sm\" *ngIf=\"symbol\">\n              <tr>\n                <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle;width:19%\">{{'Calculate'|translate}}</td>\n                <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Control temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Product Heat Load'|translate}} ({{symbol.enthalpySymbol}})</td>\n                <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Final Average Product temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                <td colspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Chosen product flowrate'|translate}}</td>\n                <td colspan=\"3\" align=\"center\" style=\"vertical-align:middle\">{{'Maximum product flowrate'|translate}}</td>\n                <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Precision of the high level calculation'|translate}}. ({{symbol.percentSymbol}})</td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"vertical-align:middle\">{{'Cryogen consumption (product + equipment heat load)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                <td align=\"center\" style=\"vertical-align:middle\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                <td align=\"center\" style=\"vertical-align:middle\">{{'Hourly production capacity'|translate}} ({{symbol.productFlowSymbol}})</td>\n                <td align=\"center\" style=\"vertical-align:middle\">{{'Cryogen consumption (product + equipment heat load)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                <td align=\"center\" style=\"vertical-align:middle\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n              </tr>\n              <tr *ngFor=\"let result of headBalanceResultsTr\" [style.background-color]=\"result.background\">\n                <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                  <a href=\"javascript:;\" class=\"tdResultLink\" (click)=\"calculator.openBrain(result.id)\">{{result.equipName}}</a>\n                  <div *ngIf=\"result.specificSize != ''\">\n                    <div><a href=\"javascript:;\" (click)=\"onEquipSizing(result.id)\" style=\"color:#f00\">{{'Specific equipment'|translate}}<br>{{result.specificSize}}</a></div>\n                  </div>\n                </td>\n                <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.tr) == true;else noTooltip\">\n                    <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\" (click)=\"viewEquipTr(result)\">{{result.tr}}</a>\n                    <ng-template #tipContent>\n                      <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                        <div style=\"white-space:nowrap\">{{'Control temperature'|translate}}: <b>{{result.tr}}</b> ({{symbol.temperatureSymbol}})</div>\n                        <div style=\"white-space:nowrap\">{{'Residence/Dwell time'|translate}}: <b>{{result.ts}}</b> ({{symbol.timeSymbol}})</div>\n                      </div>\n                    </ng-template>\n                  </td>\n                  <ng-template #noTooltip>\n                  <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                    <a href=\"javascript:;\">{{result.tr}}</a>\n                  </td>  \n                  </ng-template>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.vep}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tfp}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.conso}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.toc}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhp}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.consoMax}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tocMax}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.precision}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div id=\"pageHeadBalaceOptimum\" *ngIf=\"(study.CALCULATION_MODE == 2 || study.CALCULATION_MODE == 3) && headBalanceResults;else showLoadingOptimum\">\n            <div class=\"row\">\n                <div class=\"col-md-6\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"DHP\" (change)=\"openHeadBalacePage()\" checked>{{'Chosen product flowrate'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n                <div class=\"col-md-6\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"DHP\" (change)=\"openHeadBalaceMaxPage()\">￼{{'Maximum product flowrate'|translate}}\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n              </div>\n              \n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-sm\" *ngIf=\"resultAna\">\n                  <tr *ngIf=\"symbol && resultAna\">\n                    <td align=\"center\" style=\"vertical-align: middle\">{{'Required Production Rate'|translate}}</td>\n                    <td align=\"center\" style=\"vertical-align: middle\">{{resultAna.prodFlowRate}} ({{symbol.productFlowSymbol}})</td>\n                    <td align=\"center\" style=\"vertical-align: middle\">{{'Real product mass per unit'|translate}}</td>\n                    <td align=\"center\" style=\"vertical-align: middle\">{{ resultAna.prodElmtRealweight }}({{symbol.massSymbol}})</td>\n                    <td align=\"center\" style=\"vertical-align: middle\">{{'Initial Average Product temperature'|translate}}</td>\n                    <td align=\"center\" style=\"vertical-align: middle\">{{resultAna.avgTInitial}} ({{symbol.temperatureSymbol}})</td>\n                  </tr>\n                </table>\n              </div>\n\n              <div id=\"headBalacePage\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered table-sm\" *ngIf=\"symbol\">\n                    <tr>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Calculate'|translate}}</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle;width:19%\">{{'Equipment'|translate}}</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Refine'|translate}}</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Control temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Residence / Dwell time'|translate}} ({{symbol.timeSymbol}})</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Product Heat Load'|translate}} ({{symbol.enthalpySymbol}})</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Final Average Product temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                      <td colspan=\"3\" align=\"center\" style=\"vertical-align:middle\">{{'Chosen product flowrate'|translate}}</td>\n                      <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Precision of the high level calculation'|translate}}. ({{symbol.percentSymbol}})</td>\n                    </tr>\n                    <tr>\n                      <td align=\"center\" style=\"vertical-align:middle\">{{'Hourly production capacity'|translate}} ({{symbol.productFlowSymbol}})</td>\n                      <td align=\"center\" style=\"vertical-align:middle\">{{'Cryogen consumption (product + equipment heat load)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                      <td align=\"center\" style=\"vertical-align:middle\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                    </tr>\n                    <tr *ngFor=\"let result of headBalanceResults, let i = index\" [style.background-color]=\"result.background\">\n                      <td align=\"center\" class=\"tdResultAna\" >\n                        <label class=\"custom-control custom-checkbox\" style=\"margin-left:1.5em;margin-top:0.7em;\">\n                          <input type=\"checkbox\" name=\"cb{{result.id}}\" class=\"custom-control-input\" [disabled]=\"result.calculate\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                      <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                        <a href=\"javascript:;\" class=\"tdResultLink\" (click)=\"calculator.openRefine(result.id, false, 1)\">{{result.equipName}}</a>\n                        <div *ngIf=\"result.specificSize != ''\">\n                          <div><a href=\"javascript:;\" (click)=\"onEquipSizing(result.id)\" style=\"color:#f00\">{{'Specific equipment'|translate}}<br>{{result.specificSize}}</a></div>\n                        </div>\n                      </td>\n                      <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                        <button class=\"btn btn-outline-success\" (click)=\"calculator.openRefine(result.id, true, 2)\">\n                          <i class=\"fa fa-recycle\"></i>\n                        </button>\n                      </td>\n                      <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.tr) == true;else noTooltip\">\n                        <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\">{{result.tr}}</a>\n                        <ng-template #tipContent>\n                          <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                            <div style=\"white-space:nowrap\">{{'Control temperature'|translate}}: <b>{{result.tr}}</b> ({{symbol.temperatureSymbol}})</div>\n                            <div style=\"white-space:nowrap\">{{'Residence/Dwell time'|translate}}: <b>{{result.ts}}</b> ({{symbol.timeSymbol}})</div>\n                            <div style=\"white-space:nowrap\">{{'Convection Setting'|translate}}: <b>{{result.vc}}</b> ({{symbol.convectionSpeedSymbol}})</div>\n                          </div>\n                        </ng-template>\n                      </td>\n                      <ng-template #noTooltip>\n                      <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                        <a href=\"javascript:;\">{{result.tr}}</a>\n                      </td>  \n                      </ng-template>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.ts}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.vep}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tfp}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhp}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">\n                          <div *ngIf=\"result.conso_warning == 'warning_fluid'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"></div>\n                          <div *ngIf=\"result.conso_warning == 'warning_dhp'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                          <div *ngIf=\"result.conso_warning == 'warning_dhp_value'\"><div>{{result.conso}}</div><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                          <div *ngIf=\"result.conso_warning != 'warning_fluid' && result.conso_warning != 'warning_dhp' && result.conso_warning != 'warning_dhp_value'\">{{result.conso}}</div>\n                      </td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">\n                        <a href=\"javascript:;\" *ngIf=\"result.toc != '' && result.toc != '****';else txtToc\" (click)=\"equipEditLayout(result.id, i)\">{{result.toc}}</a>\n                        <ng-template #txtToc>{{result.toc}}</ng-template>\n                      </td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.precision}}</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <div id=\"headBalaceMaxPage\" style=display:none>\n                <table class=\"table table-bordered table-sm\" *ngIf=\"symbol\">\n                  <tr>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle;width:19%\">{{'Equipment'|translate}}</td>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Control temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Residence / Dwell time'|translate}} ({{symbol.timeSymbol}})</td>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Product Heat Load'|translate}} ({{symbol.enthalpySymbol}})</td>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Final Average Product temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                    <td colspan=\"3\" align=\"center\" style=\"vertical-align:middle\">{{'Chosen product flowrate'|translate}}</td>\n                    <td rowspan=\"2\" align=\"center\" style=\"vertical-align:middle\">{{'Precision of the high level calculation'|translate}}. ({{symbol.percentSymbol}})</td>\n                  </tr>\n                  <tr>\n                    <td align=\"center\" style=\"vertical-align:middle\">{{'Hourly production capacity'|translate}} ({{symbol.productFlowSymbol}})</td>\n                    <td align=\"center\" style=\"vertical-align:middle\">{{'Cryogen consumption (product + equipment heat load)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                    <td align=\"center\" style=\"vertical-align:middle\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                  </tr>\n                  <tr *ngFor=\"let result of headBalanceMaxResults\" [style.background-color]=\"result.background\">\n                    <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle;width:19%\">\n                      <a href=\"javascript:;\" class=\"tdResultLink\" (click)=\"calculator.openRefine(result.id, true, 3)\">{{result.equipName}}</a>\n                      <div *ngIf=\"result.specificSize != ''\">\n                        <div><a href=\"javascript:;\">{{'Specific equipment'|translate}}<br>{{result.specificSize}}</a></div>\n                      </div>\n                    </td>\n                    <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.tr) == true;else noTooltip\">\n                      <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\">{{result.tr}}</a>\n                      <ng-template #tipContent>\n                        <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                          <div style=\"white-space:nowrap\">{{'Control temperature'|translate}}: <b>{{result.tr}}</b> ({{symbol.temperatureSymbol}})</div>\n                          <div style=\"white-space:nowrap\">{{'Residence/Dwell time'|translate}}: <b>{{result.ts}}</b> ({{symbol.timeSymbol}})</div>\n                          <div style=\"white-space:nowrap\">{{'Convection Setting'|translate}}: <b>{{result.vc}}</b> ({{symbol.convectionSpeedSymbol}})</div>\n                        </div>\n                      </ng-template>\n                    </td>\n                    <ng-template #noTooltip>\n                    <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                      <a href=\"javascript:;\">{{result.tr}}</a>\n                    </td>  \n                    </ng-template>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.ts}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.vep}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tfp}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhp}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">\n                      <div *ngIf=\"result.conso_warning == 'warning_fluid'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning == 'warning_dhp'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning == 'warning_dhp_value'\"><div>{{result.conso}}</div><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning != 'warning_fluid' && result.conso_warning != 'warning_dhp' && result.conso_warning != 'warning_dhp_value'\">{{result.conso}}</div>\n                    </td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.toc}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.precision}}</td>\n                  </tr>\n                </table>\n            </div>\n        </div>\n      </div>\n      <div style=\"display:none;margin-top:10px;\" id=\"pageConsumption\">\n        <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Consumptions'|translate}}</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-sm\" style=\"margin-top:10px;\" *ngIf=\"symbol\">\n            <tr>\n              <td rowspan=\"2\" align=\"center\"style=\"vertical-align:middle;font-size:12px;width:19%\">{{'Equipment'|translate}}</td>\n              <td rowspan=\"2\"style=\"vertical-align:middle;font-size:12px;\" align=\"center\">\n                {{'Overall Cryogen Consumption Ratio (product + equipment and pipeline losses) Unit of Cryogen, per piece of product.'|translate}} ({{symbol.consumSymbol}})\n              </td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">\n                {{'Total Cryogen Consumption (product + equipment and pipeline losses).'|translate}} ({{symbol.consumSymbol}} /{{symbol.perUnitOfMassSymbol}})\n              </td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">\n                {{'Specific Cryogen Consumption Ratio (product only) Unit of Cryogen, per unit weight of product.'|translate}} ({{symbol.consumSymbol}} /{{symbol.perUnitOfMassSymbol}})\n              </td>\n              <td colspan=\"4\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption'|translate}}</td>\n              <td colspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Equipment Cryogen Consumption'|translate}}</td>\n              <td colspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Pipeline consumption'|translate}}</td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Tank losses'|translate}} ({{symbol.consumSymbol}})</td>\n            </tr>\n            <tr>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per year'|translate}} ({{symbol.consumSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per week'|translate}} ({{symbol.consumSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per day'|translate}} ({{symbol.consumSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per hour'|translate}} ({{symbol.consumSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Heat losses per hour'|translate}} ({{symbol.consumMaintienSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Cooldown'|translate}} ({{symbol.mefSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">{{'Heat losses per hour'|translate}} ({{symbol.consumMaintienSymbol}})</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Cooldown'|translate}} ({{symbol.mefSymbol}})</td>\n            </tr>\n            <tr *ngFor=\"let result of commonResults\">\n                <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                    <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\" class=\"tdResultLink\" (click)=\"onConsumptionPie(result)\">{{result.equipName}}</a>\n                    <ng-template #tipContent>\n                      <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                        <div style=\"white-space:nowrap\">{{'Product'|translate}}: <b class=\"pull-right\">{{result.percentProduct}}%</b></div>\n                        <div style=\"white-space:nowrap\">{{'Equipment(permanent'|translate}}: <b class=\"pull-right\">{{result.percentEquipmentPerm}}%</b></div>\n                        <div style=\"white-space:nowrap\">{{'Equipment(cool down)'|translate}}: <b class=\"pull-right\">{{result.percentEquipmentDown}}%</b></div>\n                        <div style=\"white-space:nowrap\">{{'Line'|translate}}: <b class=\"pull-right\">{{result.percentLine}}%</b></div>\n                      </div>\n                    </ng-template>\n                </td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tc}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.kgProduct}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.product}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.year}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.week}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.day}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.hour}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.eqptPerm}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.eqptCold}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.linePerm}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.lineCold}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tank}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div style=\"display:none;margin-top:10px;\" id=\"pageEconomics\">\n        <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Economic results'|translate}}</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-sm\" style=\"margin-top:10px;\" *ngIf=\"symbol\">\n            <tr>\n              <td rowspan=\"2\" align=\"center\"style=\"vertical-align:middle;font-size:12px;width:19%\">{{'Equipment'|translate}}</td>\n              <td rowspan=\"2\"style=\"vertical-align:middle;font-size:12px;\" align=\"center\">\n                {{'Overall Cryogen Consumption Ratio (product + equipment and pipeline losses) Unit of Cryogen, per piece of product.'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)\n              </td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">\n                {{'Total Cryogen Consumption (product + equipment and pipeline losses).'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span> /{{symbol.perUnitOfMassSymbol}})\n              </td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">\n                {{'Specific Cryogen Consumption Ratio (product only) Unit of Cryogen, per unit weight of product.'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span> /{{symbol.perUnitOfMassSymbol}})\n              </td>\n              <td colspan=\"4\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption'|translate}}</td>\n              <td colspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Equipment Cryogen Consumption'|translate}}</td>\n              <td colspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Pipeline consumption'|translate}}</td>\n              <td rowspan=\"2\" style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Tank losses'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n            </tr>\n            <tr>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per year'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per week'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per day'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Total Cryogen Consumption per hour'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Heat losses per hour'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span> /h)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Cooldown'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\"  align=\"center\">{{'Heat losses per hour'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span> /h)</td>\n              <td style=\"vertical-align:middle;font-size:12px;\" align=\"center\">{{'Cooldown'|translate}}<br>(<span [innerHTML]=\"symbol.monetarySymbol\"></span>)</td>\n            </tr>\n            <tr *ngFor=\"let result of economicResults\">\n                <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                  <a href=\"javascript:;\" class=\"tdResultLink\">{{result.equipName}}</a>\n                </td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tc}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.kgProduct}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.product}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.year}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.week}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.day}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.hour}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.eqptPerm}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.eqptCold}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.linePerm}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.lineCold}}</td>\n                <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tank}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noResult>\n    <div class=\"card\" *ngIf=\"checkcontrol\">\n      <div class=\"card-body text-center text-muted\" *ngIf=\"checkcontrol.checkcontrol;else isCheckControl\">\n        <p>{{'No data to display'|translate}}</p>\n        <div style=\"padding-top:10px\">\n          <button class=\"btn btn-primary btn-lg text-uppercase\" (click)=\"calculator.open()\">{{'Calculate'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #isCheckControl>\n    <div class=\"card\">\n      <div class=\"card-body text-center text-muted\">\n        <p>{{'No data to display'|translate}}</p>\n        <div style=\"padding-top:10px\">\n          <button class=\"btn btn-primary btn-lg text-uppercase\" disabled>{{'Calculate'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #consumptionPieModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngIf=\"chartPieData\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5>{{chartPieData.name}}</h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"consumptionPieModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- <div class=\"chart-wrapper\" *ngIf=\"pieData && displayPie == true\">\n          <canvas #myChart baseChart class=\"chart\"\n          [datasets]=\"pieData\"\n          [labels]=\"pieLabels\"\n          [colors]=\"pieColours\"\n          [options]=\"pieOptions\"\n          [chartType]=\"pieChartType\"></canvas>\n        </div>\n        <div class=\"chart-wrapper\" *ngIf=\"pieDataNone && displayPie == false\">\n          <canvas baseChart class=\"chart\"\n          [datasets]=\"pieDataNone\"\n          [labels]=\"pieLabelsNone\"\n          [colors]=\"pieColoursNone\"\n          [options]=\"pieOptionsNone\"\n          [chartType]=\"pieChartTypeNone\"></canvas>\n        </div> -->\n        <div class=\"text-center\" *ngIf=\"imageConsumptionPie != ''\">\n          <img [src]=\"imageConsumptionPie\">\n        </div>\n        <div class=\"text-center\" style=\"margin-top: 25px;margin-bottom:10px\">\n            <input type=\"checkbox\" [(ngModel)]=\"ENABLE_CONS_PIE\" [disabled]=\"!studyModifiable()\" (change)=\"addConsPieToReport()\" style=\"margin:0;margin-right: 5px;vertical-align: middle\"><span style=\"vertical-align: middle\">{{'Add this graph to the report'|translate}}</span>\n        </div>\n        <div class=\"text-center\">\n            <button class=\"btn btn-secondary btn-sm\" (click)=\"closePie()\">{{'Close'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #equipSizingModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5 *ngIf=\"equipSizingName\">{{'Define Equipment Size'|translate}} - {{equipSizingName}}</h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"equipSizingModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-bordered table-sm mb-0 text-center\" *ngIf=\"symbol\">\n          <thead>\n            <tr>\n              <ng-container *ngIf=\"study.CALCULATION_MODE == 1;else equipSizingOptimumLabel\">\n                <th>{{ 'Width'|translate }} ({{ symbol.equipDimensionSymbol }})</th>\n                <th>{{ 'Length'|translate }} ({{ symbol.equipDimensionSymbol }})</th>\n              </ng-container>\n              <ng-template #equipSizingOptimumLabel>\n                <th>{{ 'Length'|translate }} ({{ symbol.equipDimensionSymbol }})</th>\n                <th>{{ 'Width'|translate }} ({{ symbol.equipDimensionSymbol }})</th>\n              </ng-template>\n              <th>{{ 'Surface'|translate }} ({{ symbol.equipDimensionSymbol }}²)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <ng-container *ngIf=\"study.CALCULATION_MODE == 1;else equipSizingOptimum\">\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                      <input *ngIf=\"equipSizingDisable == false;else equipSizingWidthOther\" type=\"text\" [(ngModel)]=\"equipSizingWidth\" (change)=\"calculateLength()\" class=\"form-control\">\n                      <ng-template #equipSizingWidthOther>\n                        <span style=\"display:inline-block;line-height:35px\">{{equipSizingWidth}}</span>\n                      </ng-template>\n                  </td>\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                      <input *ngIf=\"equipSizingDisable == false;else equipSizingLengthOther\" type=\"text\" [(ngModel)]=\"equipSizingLength\" (change)=\"calculateWidth()\" class=\"form-control\">\n                      <ng-template #equipSizingLengthOther>\n                        <span style=\"display:inline-block;line-height:35px\">{{equipSizingLength}}</span>\n                      </ng-template>\n                    </td>\n              </ng-container>\n              <ng-template #equipSizingOptimum>\n                  <td align=\"center\" style=\"vertical-align:middle\">\n                      <input *ngIf=\"equipSizingDisable == false;else equipSizingLengthOther\" type=\"text\" [(ngModel)]=\"equipSizingLength\" (change)=\"calculateWidth()\" class=\"form-control\">\n                      <ng-template #equipSizingLengthOther>\n                        <span style=\"display:inline-block;line-height:35px\">{{equipSizingLength}}</span>\n                      </ng-template>\n                    </td>\n                    <td align=\"center\" style=\"vertical-align:middle\">\n                        <input *ngIf=\"equipSizingDisable == false;else equipSizingWidthOther\" type=\"text\" [(ngModel)]=\"equipSizingWidth\" (change)=\"calculateLength()\" class=\"form-control\">\n                        <ng-template #equipSizingWidthOther>\n                          <span style=\"display:inline-block;line-height:35px\">{{equipSizingWidth}}</span>\n                        </ng-template>\n                    </td>\n              </ng-template>\n              <td align=\"center\" style=\"vertical-align:middle\">\n                  <input *ngIf=\"equipSizingDisable == false;else equipSizingSurfaceOther\" type=\"text\" [(ngModel)]=\"equipSizingSurface\" (change)=\"calculateLength()\" class=\"form-control\">\n                  <ng-template #equipSizingSurfaceOther>\n                    <span style=\"display:inline-block;line-height:35px\">{{equipSizingSurface}}</span>\n                  </ng-template>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <p></p>\n        <div class=\"text-primary\" *ngIf=\"equipSizing && equipSizing.disabled == false\">\n          <span>{{'Possibility to calculate width from length and the opposite.'|translate}}</span><br>\n          <span>{{'Length is updated on change of surface.'|translate}}</span>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"equipSizingModal.hide()\">{{ 'Cancel'|translate }}</button>\n        <button class=\"btn btn-primary\" *ngIf=\"equipSizingDisable == false\" (click)=\"saveEquipSizing()\">{{ 'Calculation'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #viewEquipTrModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5 *ngIf=\"viewEquipTrData\">{{viewEquipTrData.equipName}} <span *ngIf=\"viewEquipTrData.specificSize != ''\">- {{viewEquipTrData.specificSize}}</span></h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"viewEquipTrModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-bordered table-sm mb-0 text-center\" *ngIf=\"symbol\">\n          <thead>\n            <tr>\n              <th>{{ 'Control temperature'|translate }} ({{ symbol.temperatureSymbol }})</th>\n              <th>{{ 'Residence / Dwell time'|translate }} ({{ symbol.timeSymbol }})</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf=\"viewEquipTrData\">\n              <td>{{viewEquipTrData.tr}}</td>\n              <td>{{viewEquipTrData.ts}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <p></p>\n        <div class=\"text-center\">\n          <button class=\"btn btn-secondary\" (click)=\"viewEquipTrModal.hide()\">{{'Close'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal class=\"modal modal-primary fade bd-example-modal-lg\" #editEquipTrModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\"  >\n  <div class=\"modal-dialog\" role=\"document\" style=\"max-width:50%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n          <h5 *ngIf=\"viewEquipTrData\">{{viewEquipTrData.equipName}} <span *ngIf=\"viewEquipTrData.specificSize != ''\">- {{viewEquipTrData.specificSize}}</span></h5>\n        </div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeEditEquipTrModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-sm\"  >\n            <thead>\n              <tr *ngIf=\"symbol\">\n                <td align=\"center\"><strong>{{'Residence / Dwell time'|translate}} ({{symbol.timeSymbol}})</strong></td>\n                <td align=\"center\"><strong>{{'Control temperature '|translate}} ({{symbol.temperatureSymbol}})</strong></td>\n                <td align=\"center\"><strong>{{'Convection Setting '|translate}} ({{symbol.convectionSpeedSymbol}})</strong></td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngIf=\"operatingSetting\">\n                <td align=\"center\">\n                  <div class=\"form-group\" *ngFor=\"let item of studyEquipment.ts, let i = index\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tsValue[i]\" style=\"width:80px\">\n                  </div>\n                  <button class=\"btn btn-md btn-primary\" [ladda]=\"laddaCalTr\" (click)=\"calcTr()\">{{'Compute Control Temperature'|translate}}</button>\n                </td>\n                <td align=\"center\">\n                  <div class=\"form-group\" *ngFor=\"let item of studyEquipment.tr, let i = index\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"trValue[i]\" [disabled]=\"disabledTr\" style=\"width:80px\">\n                  </div>\n                  <button class=\"btn btn-md btn-primary\" [ladda]=\"laddaCalTs\" (click)=\"calcTs()\">{{'Compute Residence/Dwell Time'|translate}}</button>\n                </td>\n                <td align=\"center\">\n                  <div *ngFor=\"let item of studyEquipment.vc, let i = index\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"vcValue[i]\" disabled style=\"width:80px\">\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        \n        <div style=\"padding: 5px 0\"><strong *ngIf=\"symbol\">{{'Gas Temperature'|translate}} ({{symbol.temperatureSymbol}}):</strong></div>\n        <div class=\"row\">\n          <div class=\"col-md-2\" *ngIf=\"operatingSetting\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"studyEquipment.TExt\" style=\"width:80px\">\n          </div>\n        </div>\n        <div style=\"float:right;margin-right:20px;\" >\n          <button class=\"btn btn-md btn-secondary\" (click)=\"closeEditEquipTrModal()\">{{'Cancel'|translate}}</button>\n          <button class=\"btn btn-md btn-primary\" [ladda]=\"laddaCalculationEquip\" (click)=\"submitCalculate()\">{{'Calculation'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal class=\"modal fade bd-example-modal-lg\" #editModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\"  >\n  <div class=\"modal-dialog modal-primary\" role=\"document\" style=\"max-width:60%;\" *ngIf=\"editLayoutForm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\"><strong >{{'TOC Wizard'|translate}}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeEditModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <h5 class=\"text-danger\" *ngIf=\"equipment\">{{ equipment.displayName }}</h5>\n      <div style=\"padding: 5px 0\"><strong >Input :</strong></div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\" *ngIf=\"symbol\">{{'Spaces (length x width)'|translate}} ({{symbol.equipDimensionSymbol}})</div>\n            <input type=\"text\" class=\"col-md-2\" style=\"height:30px;\" [disabled]=\"!studyModifiable()\" [(ngModel)]=\"editLayoutForm.lengthInterval\">\n            <div class=\"col-md-2\"></div>\n            <input type=\"text\"class=\"col-md-2\" style=\"height:30px;\" [disabled]=\"!studyModifiable()\" [(ngModel)]=\"editLayoutForm.widthInterval\">\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-6\">{{'Orientation'|translate}}</div>\n            <select class=\"form-control col-md-6\" [disabled]=\"!studyModifiable()\" [(ngModel)]=\"editLayoutForm.orientation\">\n                <option value=\"1\">{{'Parallel'|translate}}</option>\n                <option value=\"0\">{{'Perpendicular'|translate}}</option>\n            </select>\n          </div>\n          <div class=\"form-group row\" *ngIf=\"1==0\">\n            <div class=\"col-md-6\">{{'Shelves'|translate}}</div>\n            <select class=\"form-control col-md-6\"></select>\n          </div>\n          <div class=\"form-group row\" *ngIf=\"1==0\">\n            <div class=\"col-md-6\" *ngIf=\"symbol\">{{'Dimensions'|translate}} ({{'length'|translate}} x {{'width'|translate}}) ({{symbol.prodDimensionSymbol}})</div>\n            <input type=\"text\" class=\"col-md-2\" style=\"height:30px;\" >\n            <div class=\"col-md-2\"></div>\n            <input type=\"text\"class=\"col-md-2\" style=\"height:30px;\">\n          </div>\n          <div class=\"form-group row\" *ngIf=\"1==0\">\n            <div class=\"col-md-6\">{{'Number of shelves'|translate}}</div>\n            <input type=\"text\" class=\"col-md-3\" style=\"height:30px;\" >\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <img id=\"stdEqpLayoutImg\" style=\"width: 100%\">\n        </div>\n      </div>\n      <div style=\"padding:10px;\"><strong >{{'Output'|translate}} :</strong></div>\n      <table class=\"table  table-bordered table-sm\"  *ngIf=\"equipment\" >\n        <thead>\n          <tr *ngIf=\"symbol\">\n            <td align=\"center\" *ngIf=\"equipment.ORIENTATION == 0;else equipTitle;\"><strong>Width of Spaces. ({{symbol.shelvesWidthSymbol}})</strong></td>\n            <ng-template #equipTitle>\n            <td align=\"center\"><strong>Side remaining interval ({{symbol.shelvesWidthSymbol}})</strong></td>\n            </ng-template>\n            <td align=\"center\" *ngIf=\"equipment.ORIENTATION == 1;else equipNumberPer;\"><strong> {{'Number per tunnel length'|translate}}</strong></td>\n            <ng-template #equipNumberPer>\n            <td align=\"center\"><strong>{{'Number of items per meter run'|translate}}. ({{symbol.shelvesWidthSymbol}})</strong></td>\n            </ng-template>\n            <td align=\"center\"><strong> {{'Number of items in belt width'|translate}}.</strong></td>\n            <td align=\"center\"><strong> {{'Conveyor coverage or quantity of product per batch'|translate}}</strong></td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf=\"symbol && equipment.layoutResults != ''\">\n            <td align=\"center\">{{equipment.layoutResults.LEFT_RIGHT_INTERVAL}}</td>\n            <td align=\"center\">{{equipment.layoutResults.NUMBER_PER_M}}</td>\n            <td align=\"center\">{{equipment.layoutResults.NUMBER_IN_WIDTH}}</td>\n            <td align=\"center\" *ngIf=\"equipment\">{{equipment.top_or_QperBatch}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div>\n        <strong style=\"padding:15px;\" *ngIf=\"equipment.layoutResults != ''\">{{'Belt coverage'|translate}} <input type=\"text\" value=\"{{equipment.layoutResults.LOADING_RATE}}\" style=\"heigth:30px;width:60px;\"> (%)</strong>\n        <div style=\"float:right;margin-right:20px;\" >\n          <button class=\"btn btn-md btn-secondary\" (click)=\"closeEditModal()\">{{'Close'|translate}}</button>\n          <button class=\"btn btn-md btn-primary\" [disabled]=\"!studyModifiable()\" [ladda]=\"laddaUpdateLayout\" (click)=\"updateStdEquipLayout()\">{{'Apply'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<app-calculator #calculator (finishCalculate)=\"onFinishCalculate()\"></app-calculator>\n"

/***/ }),

/***/ "../../../../../src/app/views/output/preliminary/preliminary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#pageHeat {\n  position: relative;\n  min-height: 500px; }\n\n#showLoader {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderChange {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\nimg {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/output/preliminary/preliminary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreliminaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculation_calculator_calculator_component__ = __webpack_require__("../../../../../src/app/views/calculation/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_piecelabel_js__ = __webpack_require__("../../../../chart.piecelabel.js/src/Chart.PieceLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_piecelabel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_piecelabel_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PreliminaryComponent = (function () {
    function PreliminaryComponent(api, translate, toastr, auth) {
        this.api = api;
        this.translate = translate;
        this.toastr = toastr;
        this.auth = auth;
        this.chartPieData = {
            name: '',
            percentProduct: 0,
            percentEquipmentPerm: 0,
            percentEquipmentDown: 0,
            percentLine: 0
        };
        this.activePage = '';
        this.pieChartType = 'pie';
        this.pieColours = [
            { backgroundColor: ['#0000FF', '#00BFBF', '#00FFFF', '#33CC33'], }
        ];
        this.pieChartTypeNone = 'pie';
        this.pieColoursNone = [
            { backgroundColor: ['#b4b9c1', '#b4b9c1', '#b4b9c1'], }
        ];
        this.equipSizingMessage = '';
        this.laddaEquipSizing = false;
        this.unitDataRes = {
            price: 0,
            intervalL: 0,
            intervalW: 0
        };
        this.eid = 0;
        this.laddaUpdateLayout = false;
        this.laddaCalTr = false;
        this.laddaCalTs = false;
        this.laddaCalculationEquip = false;
        this.dhpMaxChecked = false;
        this.ENABLE_CONS_PIE = false;
        this.trSelect = 1;
        this.disabledTr = false;
        this.tsValue = [];
        this.trValue = [];
        this.vcValue = [];
        this.showLoader = false;
        this.showLoaderOptimum = false;
        this.imageConsumptionPie = '';
    }
    PreliminaryComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
            this.displayPie = true;
        }
    };
    PreliminaryComponent.prototype.openPageHeat = function () {
        var page = document.getElementById('pageHeat');
        var pageCon = document.getElementById('pageConsumption');
        var pageEco = document.getElementById('pageEconomics');
        page.style.display = 'block';
        pageCon.style.display = 'none';
        pageEco.style.display = 'none';
        this.activePage = 'heat';
    };
    PreliminaryComponent.prototype.openPageCon = function () {
        var page = document.getElementById('pageHeat');
        var pageCon = document.getElementById('pageConsumption');
        var pageEco = document.getElementById('pageEconomics');
        page.style.display = 'none';
        pageEco.style.display = 'none';
        pageCon.style.display = 'block';
        this.activePage = 'consumpt';
    };
    PreliminaryComponent.prototype.openPageEco = function () {
        var page = document.getElementById('pageHeat');
        var pageCon = document.getElementById('pageConsumption');
        var pageEco = document.getElementById('pageEconomics');
        page.style.display = 'none';
        pageEco.style.display = 'block';
        pageCon.style.display = 'none';
        this.activePage = 'economic';
    };
    PreliminaryComponent.prototype.openHeadBalacePage = function () {
        var _this = this;
        this.dhpMaxChecked = false;
        var headBalancePage = document.getElementById('headBalacePage');
        var headBalanceMaxPage = document.getElementById('headBalaceMaxPage');
        this.api.getOptimumHeadBalance(this.study.ID_STUDY).subscribe(function (data) {
            _this.headBalanceResults = data;
            headBalancePage.style.display = 'block';
            headBalanceMaxPage.style.display = 'none';
        });
    };
    PreliminaryComponent.prototype.openHeadBalaceMaxPage = function () {
        var _this = this;
        this.dhpMaxChecked = true;
        var headBalancePage = document.getElementById('headBalacePage');
        var headBalanceMaxPage = document.getElementById('headBalaceMaxPage');
        this.api.getOptimumHeadBalanceMax(this.study.ID_STUDY).subscribe(function (data) {
            _this.headBalanceMaxResults = data;
            headBalancePage.style.display = 'none';
            headBalanceMaxPage.style.display = 'block';
        });
    };
    PreliminaryComponent.prototype.openTrPage = function (value) {
        var _this = this;
        this.trSelect = value;
        var params = {
            idStudy: this.study.ID_STUDY,
            tr: value
        };
        this.api.getEstimationHeadBalance(params).subscribe(function (data) {
            // console.log(data);
            _this.headBalanceResultsTr = data;
        });
    };
    PreliminaryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.study = JSON.parse(localStorage.getItem('study'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.refreshView();
        var params = {
            idStudy: this.study.ID_STUDY,
            idProd: this.study.ID_PROD
        };
        this.api.checkControl(params).subscribe(function (data) {
            _this.checkcontrol = data;
            // console.log(this.checkcontrol);
        });
    };
    PreliminaryComponent.prototype.onConsumptionPie = function (element) {
        var _this = this;
        // console.log(element);
        this.chartPieData.name = element.equipName;
        this.chartPieData.percentProduct = element.percentProduct;
        this.chartPieData.percentEquipmentPerm = element.percentEquipmentPerm;
        this.chartPieData.percentEquipmentDown = element.percentEquipmentDown;
        this.chartPieData.percentLine = element.percentLine;
        this.idStudyEquipmentPie = element.id;
        if (Number(element.ENABLE_CONS_PIE) === 1) {
            this.ENABLE_CONS_PIE = true;
        }
        // console.log(this.ENABLE_CONS_PIE);
        // draw consumption pie chart
        var params = {
            percentProduct: element.percentProduct,
            percentEquipmentPerm: element.percentEquipmentPerm,
            percentEquipmentDown: element.percentEquipmentDown,
            percentLine: element.percentLine,
            percentProductLabel: this.translate.instant('Product'),
            percentEquipmentPermLabel: this.translate.instant('Equipment(permanent)'),
            percentEquipmentDownLabel: this.translate.instant('Equipment(cool down)'),
            percentLineLabel: this.translate.instant('Line'),
        };
        this.api.drawConsumptionPie({
            idStudyEquipment: element.id,
            body: params
        }).subscribe(function (data) {
            _this.imageConsumptionPie = data;
        });
        this.pieOptions = {
            responsive: true,
            pieceLabel: {
                render: 'value',
                fontSize: 14,
                fontStyle: 600,
                fontColor: ['#fff', '#000', '#000', '#fff'],
                fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
                overlap: true
            },
            tooltips: {
                enabled: false
            },
            legend: {
                onClick: function (e) { return e.stopPropagation(); }
            }
        };
        this.pieLabels = [];
        this.pieLabels = [this.translate.instant('Product') + ': ' + element.percentProduct + '%',
            this.translate.instant('Equipment(permanent)') + ': ' + element.percentEquipmentPerm + '%',
            this.translate.instant('Equipment(cool down)') + ': ' + element.percentEquipmentDown + '%'];
        if (element.percentLine > 0) {
            this.pieLabels.push(this.translate.instant('Line') + ': ' + element.percentLine + '%');
        }
        this.displayPie = true;
        if ((element.percentProduct + element.percentEquipmentPerm + element.percentEquipmentDown + element.percentLine) === 0) {
            this.displayPie = false;
        }
        var dataChart = [element.percentProduct, element.percentEquipmentPerm, element.percentEquipmentDown, element.percentLine];
        this.pieData = [
            {
                data: [element.percentProduct, element.percentEquipmentPerm, element.percentEquipmentDown, element.percentLine]
            }
        ];
        if (this.myChart) {
            this.myChart.chart.config.data.labels = this.pieLabels;
            this.myChart.chart.update();
        }
        // pie none
        this.pieDataNone = [{
                data: [100, 0, 0]
            }];
        // console.log(this.pieDataNone);
        this.pieOptionsNone = {
            responsive: true,
            tooltips: {
                enabled: false
            },
            legend: {
                onClick: function (e) { return e.stopPropagation(); }
            }
        };
        this.pieLabelsNone = [];
        this.pieLabelsNone = [this.translate.instant('Product') + ': 0%',
            this.translate.instant('Equipment(permanent)') + ': 0%',
            this.translate.instant('Equipment(cool down)') + ': 0%'];
        this.consumptionPieModal.show();
    };
    PreliminaryComponent.prototype.addConsPieToReport = function () {
        var param = {
            ENABLE_CONS_PIE: this.ENABLE_CONS_PIE
        };
        this.api.addConsPieToReport({
            id: this.idStudyEquipmentPie,
            body: param
        }).subscribe();
    };
    PreliminaryComponent.prototype.closePie = function () {
        this.consumptionPieModal.hide();
    };
    PreliminaryComponent.prototype.refreshView = function () {
        var _this = this;
        // console.log(this.studyModifiable());
        this.api.getSymbol(this.study.ID_STUDY).subscribe(function (data) {
            _this.symbol = data;
            _this.api.getstudyEquipmentProductChart(_this.study.ID_STUDY).subscribe(function (dataEquip) {
                // console.log(dataEquip);
                if (dataEquip !== '') {
                    localStorage.setItem('outputChart', JSON.stringify(dataEquip));
                    // console.log(JSON.parse(localStorage.getItem('outputChart')));
                }
                else {
                    localStorage.removeItem('outputChart');
                }
            });
            _this.api.getProInfoStudy(_this.study.ID_STUDY).subscribe(function (res) {
                _this.resultAna = res;
            });
            _this.api.getUnitData(_this.study.ID_STUDY).subscribe(function (resp) {
                // console.log(resp);
                _this.unitData = resp;
            });
        });
        if (Number(this.study.CALCULATION_MODE) === 1) {
            this.showLoader = true;
            var params = {
                idStudy: this.study.ID_STUDY,
                tr: 1
            };
            this.api.getEstimationHeadBalance(params).subscribe(function (data) {
                // console.log(data);
                _this.headBalanceResultsTr = data;
                _this.showLoader = false;
                _this.activePage = 'heat';
            });
        }
        else {
            this.showLoaderOptimum = true;
            this.api.getOptimumHeadBalance(this.study.ID_STUDY).subscribe(function (data) {
                // console.log(data);
                _this.headBalanceResults = data;
                _this.showLoaderOptimum = false;
                _this.activePage = 'heat';
            });
        }
        this.api.getAnalyticalConsumption(this.study.ID_STUDY).subscribe(function (data) {
            _this.commonResults = data;
        });
        this.api.getAnalyticalEconomic(this.study.ID_STUDY).subscribe(function (data) {
            _this.economicResults = data;
        });
    };
    PreliminaryComponent.prototype.onEquipSizing = function (id) {
        var _this = this;
        this.api.getEquipSizing(id).subscribe(function (data) {
            _this.equipSizing = data;
            _this.equipSizingName = data.equipName;
            _this.equipSizingDisable = data.disabled;
            _this.equipSizingWidth = data.initWidth;
            _this.equipSizingLength = data.initLength;
            _this.equipSizingSurface = data.initSurface;
        });
        this.equipSizingModal.show();
    };
    PreliminaryComponent.prototype.calculateWidth = function () {
        if (!this.validateEquipSizing()) {
            return false;
        }
        /* tslint:disable */
        this.equipSizingLength = this.setMaxDigit((isNaN(this.equipSizingLength) || (this.equipSizingLength <= 0)) ? this.equipSizing.initLength : this.equipSizingLength);
        this.equipSizingSurface = this.setMaxDigit((isNaN(this.equipSizingSurface)) ? this.equipSizing.initSurface : this.equipSizingSurface);
        this.equipSizingWidth = this.setMaxDigit(this.equipSizingSurface / this.equipSizingLength);
        if (this.equipSizingWidth < this.equipSizing.minWidth) {
            this.equipSizingWidth = this.equipSizing.minWidth;
            this.equipSizingLength = -1;
        }
        else if (this.equipSizingWidth > this.equipSizing.maxLength) {
            this.equipSizingWidth = this.equipSizing.maxWidth;
            this.equipSizingLength = -1;
        }
        if (this.equipSizingLength === -1) {
            this.equipSizingLength = this.setMaxDigit(this.equipSizingSurface / this.equipSizingWidth);
            if (this.equipSizingLength < this.equipSizing.minLength) {
                this.equipSizingLength = this.equipSizing.minLength;
            }
            else if (this.equipSizingLength > this.equipSizing.maxLength) {
                this.equipSizingLength = this.equipSizing.maxLength;
            }
            this.equipSizingSurface = this.setMaxDigit(this.equipSizingWidth * this.equipSizingLength);
        }
    };
    PreliminaryComponent.prototype.calculateLength = function () {
        if (!this.validateEquipSizing()) {
            return false;
        }
        /* tslint:disable */
        this.equipSizingWidth = this.setMaxDigit((isNaN(this.equipSizingWidth) || (this.equipSizingWidth <= 0)) ? this.equipSizing.initWidth : this.equipSizingWidth);
        this.equipSizingSurface = this.setMaxDigit((isNaN(this.equipSizingSurface)) ? this.equipSizing.initSurface : this.equipSizingSurface);
        this.equipSizingLength = this.setMaxDigit(this.equipSizingSurface / this.equipSizingWidth);
        if (this.equipSizingLength < this.equipSizing.minLength) {
            this.equipSizingLength = this.equipSizing.minLength;
            this.equipSizingWidth = -1;
        }
        else if (this.equipSizingLength > this.equipSizing.maxLength) {
            this.equipSizingLength = this.equipSizing.maxLength;
            this.equipSizingWidth = -1;
        }
        if (this.equipSizingWidth === -1) {
            this.equipSizingWidth = this.setMaxDigit(this.equipSizingSurface / this.equipSizingLength);
            if (this.equipSizingWidth < this.equipSizing.minWidth) {
                this.equipSizingWidth = this.equipSizing.minWidth;
            }
            else if (this.equipSizingWidth > this.equipSizing.maxLength) {
                this.equipSizingWidth = this.equipSizing.maxWidth;
            }
            this.equipSizingSurface = this.setMaxDigit(this.equipSizingWidth * this.equipSizingLength);
        }
    };
    PreliminaryComponent.prototype.saveEquipSizing = function () {
        var _this = this;
        if (!this.validateEquipSizing()) {
            return false;
        }
        this.laddaEquipSizing = true;
        var params = {
            width: this.equipSizingWidth,
            length: this.equipSizingLength
        };
        this.api.saveEquipSizing({
            id: this.equipSizing.idStudyEquipment,
            body: params
        }).subscribe(function (response) {
            _this.toastr.success(_this.translate.instant('Update success'), 'successfully');
            _this.refreshView();
            _this.laddaEquipSizing = false;
            _this.equipSizingModal.hide();
        });
    };
    PreliminaryComponent.prototype.viewEquipTr = function (element) {
        var _this = this;
        if (this.trSelect === 1) {
            this.api.getOperatingSetting(element.id).subscribe(function (data) {
                _this.viewEquipTrData = element;
                _this.operatingSetting = data;
                _this.studyEquipment = data.studyEquipment;
                _this.disabledTr = !(_this.getCapability(data.studyEquipment.CAPABILITIES, 1));
                for (var i = 0; i < _this.studyEquipment.ts.length; i++) {
                    _this.tsValue[i] = _this.studyEquipment.ts[i];
                }
                for (var i = 0; i < _this.studyEquipment.tr.length; i++) {
                    _this.trValue[i] = _this.studyEquipment.tr[i];
                }
                for (var i = 0; i < _this.studyEquipment.vc.length; i++) {
                    _this.vcValue[i] = _this.studyEquipment.vc[i];
                }
            });
            this.editEquipTrModal.show();
        }
        else {
            this.viewEquipTrData = element;
            this.viewEquipTrModal.show();
        }
    };
    PreliminaryComponent.prototype.calcTr = function () {
        var _this = this;
        for (var i = 0; i < this.operatingSetting.studyEquipment.ts.length; i++) {
            var value = this.tsValue[i];
            if (!value) {
                this.toastr.error(this.translate.instant('Enter a value in Residence / Dwell !'), 'Error');
                return;
            }
            else if (!this.isNumberic(value)) {
                this.toastr.error(this.translate.instant('Not a valid number in Residence / Dwell !'), 'Error');
                return;
            }
            else if (!this.isInRangeOutput(value, this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MIN, this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MAX)) {
                this.toastr.error(this.translate.instant('Value out of range in Residence / Dwell') +
                    ' (' + this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MIN +
                    ' : ' + this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MAX + ') !', 'Error');
                return;
            }
        }
        this.laddaCalTr = true;
        var newTsValue = [];
        this.tsValue.forEach(function (value) {
            newTsValue.push(value);
        });
        var params = {
            TR: this.trValue,
            TS: newTsValue,
            VC: this.vcValue,
            TE: this.studyEquipment.TExt,
            doTr: true
        };
        this.api.computeTrTs({
            idStudyEquipment: this.studyEquipment.ID_STUDY_EQUIPMENTS,
            body: params
        }).subscribe(function (data) {
            _this.studyEquipment = data;
            for (var i = 0; i < _this.studyEquipment.ts.length; i++) {
                _this.tsValue[i] = _this.studyEquipment.ts[i];
            }
            for (var i = 0; i < _this.studyEquipment.tr.length; i++) {
                _this.trValue[i] = _this.studyEquipment.tr[i];
            }
            for (var i = 0; i < _this.studyEquipment.vc.length; i++) {
                _this.vcValue[i] = _this.studyEquipment.vc[i];
            }
            _this.laddaCalTr = false;
        });
    };
    PreliminaryComponent.prototype.calcTs = function () {
        var _this = this;
        for (var i = 0; i < this.operatingSetting.studyEquipment.tr.length; i++) {
            var value = this.trValue[i];
            if (!value) {
                this.toastr.error(this.translate.instant('Enter a value in Control temperature !'), 'Error');
                return;
            }
            else if (!this.isNumberic(value)) {
                this.toastr.error(this.translate.instant('Not a valid number in Control temperature !'), 'Error');
                return;
            }
            else if (!this.isInRangeOutput(value, this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MIN, this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MAX)) {
                this.toastr.error(this.translate.instant('Value out of range in Control temperature ') +
                    ' (' + this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MIN +
                    ' : ' + this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MAX + ') !', 'Error');
                return;
            }
        }
        this.laddaCalTs = true;
        var newTrValue = [];
        this.trValue.forEach(function (value) {
            newTrValue.push(value);
        });
        var params = {
            TR: newTrValue,
            TS: this.tsValue,
            VC: this.vcValue,
            TE: this.studyEquipment.TExt,
            doTr: false
        };
        this.api.computeTrTs({
            idStudyEquipment: this.studyEquipment.ID_STUDY_EQUIPMENTS,
            body: params
        }).subscribe(function (data) {
            _this.studyEquipment = data;
            for (var i = 0; i < _this.studyEquipment.ts.length; i++) {
                _this.tsValue[i] = _this.studyEquipment.ts[i];
            }
            for (var i = 0; i < _this.studyEquipment.tr.length; i++) {
                _this.trValue[i] = _this.studyEquipment.tr[i];
            }
            for (var i = 0; i < _this.studyEquipment.vc.length; i++) {
                _this.vcValue[i] = _this.studyEquipment.vc[i];
            }
            _this.laddaCalTs = false;
        });
    };
    PreliminaryComponent.prototype.submitCalculate = function () {
        var _this = this;
        for (var i = 0; i < this.operatingSetting.studyEquipment.ts.length; i++) {
            var value = this.tsValue[i];
            if (!value) {
                this.toastr.error(this.translate.instant('Enter a value in Residence / Dwell !'), 'Error');
                return;
            }
            else if (!this.isNumberic(value)) {
                this.toastr.error(this.translate.instant('Not a valid number in Residence / Dwell !'), 'Error');
                return;
            }
            else if (!this.isInRangeOutput(value, this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MIN, this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MAX)) {
                this.toastr.error(this.translate.instant('Value out of range in Residence / Dwell') +
                    ' (' + this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MIN +
                    ' : ' + this.operatingSetting.studyEquipment.minMaxTs.LIMIT_MAX + ') !', 'Error');
                return;
            }
        }
        for (var i = 0; i < this.operatingSetting.studyEquipment.tr.length; i++) {
            var value = this.trValue[i];
            if (!value) {
                this.toastr.error(this.translate.instant('Enter a value in Control temperature !'), 'Error');
                return;
            }
            else if (!this.isNumberic(value)) {
                this.toastr.error(this.translate.instant('Not a valid number in Control temperature !'), 'Error');
                return;
            }
            else if (!this.isInRangeOutput(value, this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MIN, this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MAX)) {
                this.toastr.error(this.translate.instant('Value out of range in Control temperature ') +
                    ' (' + this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MIN +
                    ' : ' + this.operatingSetting.studyEquipment.minMaxTr.LIMIT_MAX + ') !', 'Error');
                return;
            }
        }
        for (var i = 0; i < this.operatingSetting.studyEquipment.vc.length; i++) {
            var value = this.vcValue[i];
            if (!value) {
                this.toastr.error(this.translate.instant('Enter a value in Convection Setting !'), 'Error');
                return;
            }
            else if (!this.isNumberic(value)) {
                this.toastr.error(this.translate.instant('Not a valid number in Convection Setting !'), 'Error');
                return;
            }
            else if (!this.isInRangeOutput(value, this.operatingSetting.studyEquipment.minMaxVc.LIMIT_MIN, this.operatingSetting.studyEquipment.minMaxVc.LIMIT_MAX)) {
                this.toastr.error(this.translate.instant('Value out of range in Convection Setting ') +
                    ' (' + this.operatingSetting.studyEquipment.minMaxVc.LIMIT_MIN +
                    ' : ' + this.operatingSetting.studyEquipment.minMaxVc.LIMIT_MAX + ') !', 'Error');
                return;
            }
        }
        this.laddaCalculationEquip = true;
        var params = {
            TR: this.trValue,
            TS: this.tsValue,
            VC: this.vcValue,
            TE: this.studyEquipment.TExt,
        };
        this.api.runSequenceCalculation({
            idStudyEquipment: this.studyEquipment.ID_STUDY_EQUIPMENTS,
            body: params
        }).subscribe(function (data) {
            _this.laddaCalculationEquip = false;
            _this.toastr.success(_this.translate.instant('Update success'), 'successfully');
            _this.refreshView();
            _this.editEquipTrModal.hide();
        });
    };
    PreliminaryComponent.prototype.setMaxDigit = function (value) {
        return Math.round(value * 100) / 100;
    };
    PreliminaryComponent.prototype.validateEquipSizing = function () {
        if (!this.equipSizingWidth) {
            this.toastr.error(this.translate.instant('Enter a value in Width !'), 'Error');
            return false;
        }
        else if (!this.isNumberic(this.equipSizingWidth)) {
            this.toastr.error(this.translate.instant('Not a valid number in Width !'), 'Error');
            return false;
        }
        else if (!this.isInRangeOutput(this.equipSizingWidth, this.equipSizing.minWidth, this.equipSizing.maxWidth)) {
            this.toastr.error(this.translate.instant('Value out of range in Width') + '(' + this.equipSizing.minWidth +
                ' : ' + this.equipSizing.maxWidth + ') !', 'Error');
            return false;
        }
        if (!this.equipSizingLength) {
            this.toastr.error(this.translate.instant('Enter a value in Length !'), 'Error');
            return false;
        }
        else if (!this.isNumberic(this.equipSizingLength)) {
            this.toastr.error(this.translate.instant('Not a valid number in Length !'), 'Error');
            return false;
        }
        else if (!this.isInRangeOutput(this.equipSizingLength, this.equipSizing.minLength, this.equipSizing.maxLength)) {
            this.toastr.error(this.translate.instant('Value out of range in Length') + '(' + this.equipSizing.minLength +
                ' : ' + this.equipSizing.maxLength + ') !', 'Error');
            return false;
        }
        if (!this.equipSizingSurface) {
            this.toastr.error(this.translate.instant('Enter a value in Surface !'), 'Error');
            return false;
        }
        else if (!this.isNumberic(this.equipSizingSurface)) {
            this.toastr.error(this.translate.instant('Not a valid number in Surface !'), 'Error');
            return false;
        }
        else if (!this.isInRangeOutput(this.equipSizingSurface, this.equipSizing.minSurf, this.equipSizing.maxSurf)) {
            this.toastr.error(this.translate.instant('Value out of range in Surface') + '(' + this.equipSizing.minSurf +
                ' : ' + this.equipSizing.maxSurf + ') !', 'Error');
            return false;
        }
        return true;
    };
    PreliminaryComponent.prototype.equipEditLayout = function (stdEquipId, index) {
        var _this = this;
        this.api.getStudyEquipmentById(stdEquipId).subscribe(function (equip) {
            // console.log(equip);
            _this.equipment = equip;
            _this.eid = index;
            _this.editLayoutForm = {
                stdEquipId: equip.ID_STUDY_EQUIPMENTS,
                orientation: equip.ORIENTATION,
                capabilities: equip.CAPABILITIES,
                toc: equip.layoutResults.LOADING_RATE
            };
            _this.editLayoutForm.lengthInterval = equip.layoutGen.LENGTH_INTERVAL;
            if (equip.layoutGen.LENGTH_INTERVAL < 0) {
                _this.editLayoutForm.lengthInterval = _this.unitData.IntervalLength;
            }
            _this.editLayoutForm.widthInterval = equip.layoutGen.WIDTH_INTERVAL;
            if (equip.layoutGen.WIDTH_INTERVAL < 0) {
                _this.editLayoutForm.widthInterval = _this.unitData.IntervalWidth;
            }
            _this.api.getMinMaxEquipment(_this.study.ID_STUDY).subscribe(function (mm) {
                _this.minmaxEquipment = mm;
            });
            _this.api.getStudyEquipmentLayout(equip.ID_STUDY_EQUIPMENTS).subscribe(function (data) {
                _this.editModal.show();
                setTimeout(function () {
                    // console.log(data);
                    var img = document.getElementById('stdEqpLayoutImg');
                    img.src = data;
                }, 500);
            }, function (err) {
                // @TODO: show error message box
                console.log(err);
            });
        });
    };
    PreliminaryComponent.prototype.updateStdEquipLayout = function () {
        var _this = this;
        if (!this.editLayoutForm.lengthInterval) {
            this.toastr.error(this.translate.instant('Enter a value in specify Lenght !'), 'Error');
            return;
        }
        else if (!this.isNumberic(this.editLayoutForm.lengthInterval)) {
            this.toastr.error(this.translate.instant('Not a valid number in specify Lenght !'), 'Error');
            return;
        }
        else if (!this.isInRangeOutput(this.editLayoutForm.lengthInterval, this.minmaxEquipment.mmLInterval.LIMIT_MIN, this.minmaxEquipment.mmLInterval.LIMIT_MAX)) {
            this.toastr.error(this.translate.instant('Value out of range in specify Lenght') +
                ' (' + this.minmaxEquipment.mmLInterval.LIMIT_MIN + ' : ' + this.minmaxEquipment.mmLInterval.LIMIT_MAX + ') !', 'Error');
            return;
        }
        if (!this.editLayoutForm.widthInterval) {
            this.toastr.error(this.translate.instant('Enter a value in specify Width !'), 'Error');
            return;
        }
        else if (!this.isNumberic(this.editLayoutForm.widthInterval)) {
            this.toastr.error(this.translate.instant('Not a valid number in specify Width !'), 'Error');
            return;
        }
        else if (!this.isInRangeOutput(this.editLayoutForm.widthInterval, this.minmaxEquipment.mmWInterval.LIMIT_MIN, this.minmaxEquipment.mmWInterval.LIMIT_MAX)) {
            this.toastr.error(this.translate.instant('Value out of range in specify Width') +
                ' (' + this.minmaxEquipment.mmWInterval.LIMIT_MIN + ' : ' + this.minmaxEquipment.mmWInterval.LIMIT_MAX + ') !', 'Error');
            return;
        }
        if (!this.editLayoutForm.toc) {
            this.toastr.error(this.translate.instant('Enter a value in Belt coverage !'), 'Error');
            return;
        }
        else if (!this.isNumberic(this.editLayoutForm.toc)) {
            this.toastr.error(this.translate.instant('Not a valid number in Belt coverage !'), 'Error');
            return;
        }
        else if (!this.isInRangeOutput(this.editLayoutForm.toc, 0, 100)) {
            this.toastr.error(this.translate.instant('Value out of range in Belt coverage') +
                ' (0 : 100) !', 'Error');
            return;
        }
        this.laddaUpdateLayout = true;
        this.api.updateStudyEquipmentLayout({
            id: this.editLayoutForm.stdEquipId,
            body: {
                lengthInterval: this.editLayoutForm.lengthInterval,
                widthInterval: this.editLayoutForm.widthInterval,
                orientation: this.editLayoutForm.orientation,
                toc: this.editLayoutForm.toc,
                studyClean: false
            }
        }).subscribe(function (resp) {
            if (_this.getCapability(_this.editLayoutForm.capabilities, 8192)) {
                _this.api.getStudyEquipmentLayout(_this.editLayoutForm.stdEquipId).subscribe(function (data) {
                    var img = document.getElementById('stdEqpLayoutImg');
                    img.src = data;
                });
            }
            _this.api.getStudyEquipmentById(_this.editLayoutForm.stdEquipId).subscribe(function (equip) {
                _this.equipment = equip;
                _this.laddaUpdateLayout = false;
                // console.log(this.equipment);
            });
        }, function (err) {
            console.log(err);
            _this.editModal.hide();
        }, function () {
            // this.editModal.hide();
            // this.refreshView();
        });
    };
    PreliminaryComponent.prototype.closeEditModal = function () {
        this.editModal.hide();
        this.refreshView();
    };
    PreliminaryComponent.prototype.closeEditEquipTrModal = function () {
        this.editEquipTrModal.hide();
        this.refreshView();
    };
    PreliminaryComponent.prototype.onTocPopup = function (id) {
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Oops', this.translate.instant('Not yet implement !'), 'error');
        return;
    };
    PreliminaryComponent.prototype.onFinishCalculate = function () {
        this.refreshView();
        if (this.dhpMaxChecked) {
            this.openHeadBalaceMaxPage();
        }
    };
    PreliminaryComponent.prototype.isNumberic = function (number) {
        return Number.isInteger(Math.floor(number));
    };
    PreliminaryComponent.prototype.isInRangeOutput = function (value, min, max) {
        if (value < min || value > max) {
            return false;
        }
        else {
            return true;
        }
    };
    PreliminaryComponent.prototype.studyModifiable = function () {
        if (typeof this.study === 'undefined' && this.study == null) {
            return false;
        }
        var owned = this.auth.user().ID_USER === this.study.ID_USER;
        return owned;
        // return owned && ((!this.study.CHAINING_CONTROLS) || (!this.study.HAS_CHILD));
    };
    PreliminaryComponent.prototype.getCapability = function (capabilities, capMask) {
        /* tslint:disable */
        if ((Number(capabilities) & Number(capMask)) !== 0) {
            return true;
        }
        else {
            return false;
        }
    };
    PreliminaryComponent.prototype.validate = function (value, minmax, name) {
        if (!value) {
            this.toastr.error(this.translate.instant('Enter a value in') + ' ' + this.translate.instant(name) + ' !', 'Error');
            return false;
        }
        else if (!this.isNumberic(value)) {
            this.toastr.error(this.translate.instant('Not a valid number in') + ' ' + this.translate.instant(name) + ' !', 'Error');
            return false;
        }
        else if (!this.isInRangeOutput(value, minmax.LIMIT_MIN, minmax.LIMIT_MAX)) {
            this.toastr.error(this.translate.instant('Value out of range in') + ' ' + this.translate.instant(name) +
                ' (' + minmax.LIMIT_MIN + ' : ' + minmax.LIMIT_MAX + ') !', 'Error');
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('consumptionPieModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "consumptionPieModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "modalSaveAs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('equipSizingModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "equipSizingModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "editModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('viewEquipTrModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "viewEquipTrModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editEquipTrModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PreliminaryComponent.prototype, "editEquipTrModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calculator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__calculation_calculator_calculator_component__["a" /* CalculatorComponent */])
    ], PreliminaryComponent.prototype, "calculator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], PreliminaryComponent.prototype, "myChart", void 0);
    PreliminaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preliminary',
            template: __webpack_require__("../../../../../src/app/views/output/preliminary/preliminary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/output/preliminary/preliminary.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__["a" /* AuthenticationService */]])
    ], PreliminaryComponent);
    return PreliminaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/output/sizing/sizing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card product-contaiber\" *ngIf=\"(study.CALCULATION_MODE == 1 && sizingEstimationValue != '') || (study.CALCULATION_MODE != 1 && sizingOptimumValue != ''); else noResult\">\n    <div class=\"card-header text-center\">\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openSize()\" [class.active]=\"activePage == 'result'\">{{'Sizing Result'|translate}}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openTem()\" [class.active]=\"activePage == 'profile'\">{{'Temperature Profile'|translate}}</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div style=\"display:block;\" id=\"sizing\">\n        <div id=\"sizingEstimation\" *ngIf=\"study.CALCULATION_MODE == 1 && sizingEstimationValue\">\n          <tabset>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-graph\"></i> {{'Graph'|translate}}</ng-template>   \n              <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Select option'|translate}}</h5>  \n              <div class=\"row\"> \n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"trGraph\" [ngModel]=\"trGraph\" [value]=\"2\" (change)=\"changeEstimationTrGraph(2)\" [checked]=\"2\">{{'Control Temperature 10°C (18°F) colder.'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"trGraph\" [ngModel]=\"trGraph\" [value]=\"1\" (change)=\"changeEstimationTrGraph(1)\" [checked]=\"1\">{{'Control Temperature'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"trGraph\" [ngModel]=\"trGraph\" [value]=\"0\" (change)=\"changeEstimationTrGraph(0)\" [checked]=\"0\">{{'Control Temperature 10°C (18°F) warmer.'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n              </div>\n              <h5 class=\"text-danger\" style=\"font-weight:600;margin-top:10px\">{{'Results criteria'|translate}}</h5>\n              <div class=\"result-criteria\" style=\"margin-top:10px\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\">\n                    <h6 class=\"text-primary\">{{'Equipment list'|translate}}</h6>\n                      <select multiple=\"\" [(ngModel)]=\"selectedEquipList\" class=\"form-control\" style=\"height:105px\">\n                        <option *ngFor=\"let equip of equipmentList\" [value]=\"equip\">{{equip.equipName}}</option>\n                      </select>\n                  </div>\n                  <div class=\"col-md-2\">\n                      <div style=\"margin-top: 38px\">\n                        <div class=\"text-center\">\n                          <i id=\"moveSelectedEquipment\" class=\"fa fa-long-arrow-right\" aria-hidden=\"true\" (click)=\"moveSelectedEquipment()\" style=\"font-size: 40px;cursor: pointer\"></i>\n                        </div>\n                        <div class=\"text-center\">\n                          <i id=\"moveAvailableEquipment\" class=\"fa fa-long-arrow-left\" aria-hidden=\"true\" (click)=\"moveAvailableEquipment()\" style=\"font-size: 40px;cursor: pointer\"></i>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-5\">\n                      <h6 class=\"text-primary\">{{'Active equipment'|translate}}</h6>\n                      <select multiple=\"\" [(ngModel)]=\"selectedActiveEquip\" class=\"form-control\" style=\"height:105px\" *ngIf=\"activeEquipment\">\n                          <option *ngFor=\"let equip of activeEquipment\" [value]=\"equip\">{{equip.equipName}}</option>\n                      </select>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"activeEquipment.length > 0 && estimationEquipBarImage.src != ''\"> \n                <img [src]=\"estimationEquipBarImage.src\">\n              </div>\n            \n              <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                  <div class=\"text-center form-group\">\n                    <select name=\"\" [(ngModel)]=\"selectedEquip\" class=\"form-control\" (ngModelChange)=\"loadEquipmentEstimationChart()\">\n                      <option *ngFor=\"let equip of dataGraphChart\" [value]=\"equip.id\">{{equip.equipName}}</option>\n                    </select>\n                </div>\n                </div>\n                <div class=\"col-md-3\"></div>\n              </div>\n              \n              <div *ngIf=\"dataGraphChart.length > 0 && sizingEstimationImage.src != ''\"> \n                <img [src]=\"sizingEstimationImage.src\">\n              </div>\n              \n            </tab>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-doc\"></i> {{'Value'|translate}}</ng-template>\n              <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Select option'|translate}}</h5>  \n              <div class=\"row\">\n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"TR\" (change)=\"loadEstimationValue(2)\">{{'Control Temperature 10°C (18°F) colder.'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"TR\" (change)=\"loadEstimationValue(1)\" checked>{{'Control Temperature'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n                <div class=\"col-md-4\" align=\"center\" >\n                    <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"TR\" (change)=\"loadEstimationValue(0)\">{{'Control Temperature 10°C (18°F) warmer.'|translate}}\n                      <span class=\"custom-control-indicator\"></span>\n                    </label>\n                </div>\n              </div>\n              <h5 class=\"text-danger\" style=\"font-weight:600;margin-top:10px\">{{'Equipment'|translate}}</h5>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-bordered table-sm\">\n                    <tr>\n                      <th rowspan=\"2\" style=\"vertical-align:middle;width:19%\">{{'Equipment'|translate}}</th>\n                      <th rowspan=\"2\" style=\"vertical-align:middle\">{{'Control Temperature'|translate}} ({{symbol.temperatureSymbol}})</th>\n                      <th colspan=\"3\"style=\"text-align:center;vertical-align:middle\">{{'Chosen product flowrate'|translate}}</th>\n                      <th colspan=\"3\"style=\"text-align:center;vertical-align:middle\">{{'Maximum product flowrate'|translate}}</th>\n                    </tr>\n                    <tr *ngIf=\"symbol\">\n                      <td align=\"center\">{{'Product flowrate'|translate}} ({{symbol.productFlowSymbol}})</td>\n                      <td align=\"center\">{{'Cryogen consumption (product + equipment heat losses'|translate}})({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                      <td align=\"center\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                      <td align=\"center\">{{'Maximum product flowrate'|translate}} ({{symbol.productFlowSymbol}})</td>\n                      <td align=\"center\">{{'Maximum cryogen consumption (product + equipment heat losses)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})\t</td>\n                      <td align=\"center\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                    </tr>\n                    <tr *ngFor=\"let result of sizingEstimationValue\">\n                      <td align=\"center\" class=\"tdResultLink\" style=\"vertical-align:middle\">\n                        <ng-container *ngIf=\"getCapability(result.capabilitie, 1024);else notAddEquipModal\">\n                            <a href=\"javascript:;\" class=\"tdResultLink\" (click)=\"viewAddEquipModal(result.id)\">{{result.equipName}}</a>                            \n                        </ng-container>\n                        <ng-template #notAddEquipModal>\n                        <a href=\"javascript:;\" class=\"tdResultLink\" disabled>{{result.equipName}}</a>\n                        </ng-template>\n                      </td>\n                      <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.tr) == true;else noTooltip\">\n                        <a href=\"javascript:;\" placement=\"right\" (click)=\"viewEquipTr(result)\">{{result.tr}}</a>\n                      </td>\n                      <ng-template #noTooltip>\n                      <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                        <a href=\"javascript:;\">{{result.tr}}</a>\n                      </td>  \n                      </ng-template>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhp}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.conso}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.toc}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhpMax}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.consoMax}}</td>\n                      <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tocMax}}</td>\n                    </tr>\n                  </table>\n              </div>\n            </tab>\n          </tabset>\n        </div>\n        <div id=\"sizingOptimum\" *ngIf=\"study.CALCULATION_MODE != 1 && sizingOptimumValue\">\n          <tabset>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-graph\"></i> {{'Graph'|translate}}</ng-template>     \n              <h5 class=\"text-danger\" style=\"font-weight:600\">{{'Results criteria'|translate}}</h5>\n  \n              <div class=\"result-criteria\" style=\"margin-top:20px\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\">\n                    <h6 class=\"text-primary\">{{'Equipment list'|translate}}</h6>\n                      <select [(ngModel)]=\"selectedEquipList\" id=\"availableEquipment\" name=\"availableEquipment\" multiple=\"\" class=\"form-control\" style=\"height:105px\">\n                        <option *ngFor=\"let equip of equipmentList\" [value]=\"equip\">{{equip.equipName}}</option>\n                      </select>\n                  </div>\n                  <div class=\"col-md-2\">\n                      <div style=\"margin-top: 38px\">\n                        <div class=\"text-center\">\n                          <i id=\"moveSelectedEquipment\" class=\"fa fa-long-arrow-right\" aria-hidden=\"true\" (click)=\"moveSelectedEquipment()\" style=\"font-size: 40px;cursor: pointer\"></i>\n                        </div>\n                        <div class=\"text-center\">\n                          <i id=\"moveAvailableEquipment\" class=\"fa fa-long-arrow-left\" aria-hidden=\"true\" (click)=\"moveAvailableEquipment()\" style=\"font-size: 40px;cursor: pointer\"></i>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-5\">\n                      <h6 class=\"text-primary\">{{'Active equipment'|translate}}</h6>\n                      <select [(ngModel)]=\"selectedActiveEquip\" id=\"selectedEquipment\" name=\"selectedEquipment\" multiple=\"\" class=\"form-control\" style=\"height:105px\">\n                        <option *ngFor=\"let equip of activeEquipment\" [value]=\"equip\">{{equip.equipName}}</option>\n                      </select>\n                  </div>\n                </div>\n                <!--<div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group pull-right\">\n                      <button class=\"btn btn-flat btn-primary buttons\" (click)=\"getSizingOptimumDraw()\"> Refesh</button>\n                    </div>\n                  </div>\n                </div>-->\n              </div>\n              \n              <div *ngIf=\"activeEquipment.length > 0 && sizingOptimumImage.src != ''\"> \n                <img [src]=\"sizingOptimumImage.src\">\n              </div>\n            </tab>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-doc\"></i> {{'Value'|translate}}</ng-template>\n              <strong>{{'Equipment'|translate}}</strong>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-sm\">\n                  <tr>\n                    <th rowspan=\"2\" style=\"vertical-align:middle;width:19%\">{{'Equipment'|translate}}</th>\n                    <th colspan=\"4\"style=\"text-align:center\">{{'Chosen product flowrate'|translate}}</th>\n                    <th colspan=\"4\"style=\"text-align:center\">{{'Maximum product flowrate'|translate}}</th>\n                  </tr>\n                  <tr *ngIf=\"symbol\">\n                    <td align=\"center\">{{'Control Temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                    <td align=\"center\">{{'Product flowrate'|translate}} ({{symbol.productFlowSymbol}})</td>\n                    <td align=\"center\">{{'Cryogen consumption (product + equipment heat losses'|translate}})({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})</td>\n                    <td align=\"center\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                    <td align=\"center\">{{'Control Temperature'|translate}} ({{symbol.temperatureSymbol}})</td>\n                    <td align=\"center\">{{'Maximum product flowrate'|translate}} ({{symbol.productFlowSymbol}})</td>\n                    <td align=\"center\">{{'Maximum cryogen consumption (product + equipment heat losses)'|translate}} ({{symbol.consumSymbol}}/{{symbol.perUnitOfMassSymbol}})\t</td>\n                    <td align=\"center\">{{'Conveyor coverage or quantity of product per batch'|translate}}</td>\n                  </tr>\n                  <tr *ngFor=\"let result of sizingOptimumValue\">\n                    <td align=\"center\" class=\"tdResultLink\"style=\"vertical-align:middle\">\n                      <a href=\"javascript:;\" class=\"tdResultLink\">{{result.equipName}}</a>\n                    </td>\n                    <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.tr) == true;else noTooltip\">\n                      <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\">{{result.tr}}</a>\n                      <ng-template #tipContent>\n                        <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                          <div style=\"white-space:nowrap\">{{'Control temperature'|translate}}: <b>{{result.tr}}</b> ({{symbol.temperatureSymbol}})</div>\n                          <div style=\"white-space:nowrap\">{{'Residence/Dwell time'|translate}}: <b>{{result.ts}}</b> ({{symbol.timeSymbol}})</div>\n                          <div style=\"white-space:nowrap\">{{'Convection Setting'|translate}}: <b>{{result.vc}}</b> ({{symbol.convectionSpeedSymbol}})</div>\n                        </div>\n                      </ng-template>\n                    </td>\n                    <ng-template #noTooltip>\n                    <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                      <a href=\"javascript:;\">{{result.tr}}</a>\n                    </td>  \n                    </ng-template>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhp}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">\n                      <div *ngIf=\"result.conso_warning == 'warning_fluid'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning == 'warning_dhp'\"><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning == 'warning_dhp_value'\"><div>{{result.conso}}</div><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.conso_warning != 'warning_fluid' && result.conso_warning != 'warning_dhp' && result.conso_warning != 'warning_dhp_value'\">{{result.conso}}</div>\n                    </td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.toc}}</td>\n                    <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\" *ngIf=\"isNumberic(result.trMax) == true;else noTooltipMax\">\n                        <a href=\"javascript:;\" placement=\"right\" [ngbTooltip]=\"tipContent\">{{result.trMax}}</a>\n                        <ng-template #tipContent>\n                          <div class=\"text-left\" style=\"padding: 3px 0;font-size:13px\">\n                            <div style=\"white-space:nowrap\">{{'Control temperature'|translate}}: <b>{{result.trMax}}</b> ({{symbol.temperatureSymbol}})</div>\n                            <div style=\"white-space:nowrap\">{{'Residence/Dwell time'|translate}}: <b>{{result.tsMax}}</b> ({{symbol.timeSymbol}})</div>\n                            <div style=\"white-space:nowrap\">{{'Convection Setting'|translate}}: <b>{{result.vcMax}}</b> ({{symbol.convectionSpeedSymbol}})</div>\n                          </div>\n                        </ng-template>\n                      </td>\n                      <ng-template #noTooltipMax>\n                      <td align=\"center\" class=\"tdResultAna\" style=\"vertical-align:middle\">\n                        <a href=\"javascript:;\">{{result.trMax}}</a>\n                      </td>  \n                      </ng-template>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.dhpMax}}</td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">\n                      <div *ngIf=\"result.consomax_warning == 'warning_fluid'\"><img src=\"assets/img/output/warning_fluid_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.consomax_warning == 'warning_dhp'\"><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.consomax_warning == 'warning_dhp_value'\"><div>{{result.consoMax}}</div><img src=\"assets/img/output/warning_dhp_overflow.gif\" width=\"30\"></div>\n                      <div *ngIf=\"result.consomax_warning != 'warning_fluid' && result.consomax_warning != 'warning_dhp' && result.consomax_warning != 'warning_dhp_value'\">{{result.consoMax}}</div>\n                    </td>\n                    <td align=\"center\" class=\"tdResultAna\"style=\"vertical-align:middle\">{{result.tocMax}}</td>\n                  </tr>\n                </table>\n              </div>\n              \n            </tab>\n          </tabset>\n        </div>\n        <div class=\"text-center\" id=\"showLoaderChange\"></div>\n      </div>\n      <div style=\"display:none\" id=\"temPer\">\n        <ng-template #showLoaderTerm>\n          <div class=\"text-center\" id=\"showLoaderTerm\"></div>\n        </ng-template>\n        <div class=\"text-center\" id=\"showLoaderTermChange\"></div>\n        <div class=\"row\">\n            <strong class=\"col-md-2\">{{'Equipment'|translate}}</strong>\n            <select name=\"\" id=\"\" class=\"form-control col-md-4\" (change)=\"loadTempChart($event.target.value)\">\n              <option *ngFor=\"let std of studyEquipments\" [value]=\"std.ID_STUDY_EQUIPMENTS\">{{ std.displayName }}</option>\n            </select>\n          </div>\n        <div *ngIf=\"tempChartData; else showLoaderTerm\">\n          <div style=\"margin-top:20px;\"> <strong> {{'Curve'|translate}}</strong></div>\n          <div class=\"row\"style=\"margin-top:20px;\">\n            <div class=\"col-md-12\">\n              <div class=\"chart-wrapper\" *ngIf=\"tempChartData; else showLoaderTerm\" style=\"width:70%;margin:auto\">\n                <canvas class=\"chart\" baseChart\n                  [datasets]=\"tempChartData\"\n                  [options]=\"tempChartOptions\"\n                  [colors]= \"tempColours\"\n                  [legend]=\"tempChartLegend\"\n                  [chartType]=\"tempChartType\">\n                </canvas>\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"row\"style=\"margin-top:20px;\">\n            <div class=\"col-md-12\">\n              <div class=\"chart-wrapper\" *ngIf=\"convChartData\" style=\"width:70%;margin:auto\">\n                <canvas class=\"chart\" baseChart\n                  [datasets]=\"convChartData\"\n                  [options]=\"convChartOptions\"\n                  [colors]= \"tempColours\"\n                  [legend]=\"convChartLegend\"\n                  [chartType]=\"convChartType\">\n                </canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noResult>\n    <div class=\"card\" *ngIf=\"checkcontrol\">\n      <div class=\"card-body text-center text-muted\" *ngIf=\"checkcontrol.checkcontrol;else isCheckControl\">\n        <p>{{'No data to display'|translate}}</p>\n        <div style=\"padding-top:10px\">\n          <button class=\"btn btn-primary btn-lg text-uppercase\" (click)=\"calculator.open()\">{{'Calculate'|translate}}</button>\n        </div>  \n      </div>\n    </div>\n  </ng-template>\n  <ng-template #isCheckControl>\n    <div class=\"card\">\n      <div class=\"card-body text-center text-muted\">\n        <p>{{'No data to display'|translate}}</p>\n        <div style=\"padding-top:10px\">\n          <button class=\"btn btn-primary btn-lg text-uppercase\" disabled>{{'Calculate'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #viewEquipTrModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5 *ngIf=\"viewEquipTrData\">{{viewEquipTrData.equipName}} <span *ngIf=\"viewEquipTrData.specificSize != ''\">- {{viewEquipTrData.specificSize}}</span></h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"viewEquipTrModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-bordered table-sm mb-0 text-center\" *ngIf=\"symbol\">\n          <thead>\n            <tr>\n              <th>{{ 'Residence / Dwell time'|translate }} ({{ symbol.timeSymbol }})</th>\n              <th>{{ 'Control temperature'|translate }} ({{ symbol.temperatureSymbol }})</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf=\"viewEquipTrData\">\n              <td>{{viewEquipTrData.ts}}</td>\n              <td>{{viewEquipTrData.tr}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <p></p>\n        <div class=\"text-center\">\n          <button class=\"btn btn-secondary\" (click)=\"viewEquipTrModal.hide()\">{{'Close'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal class=\"modal modal-primary fade\" #addEquipModal=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"text-center\" style=\"width:100%\">\n            <h5>{{'Input Wizard \"Special Lengths\"'|translate}}</h5>\n        </div>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"addEquipModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"width: 70%;margin:auto\"> \n          <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">{{'Dimension'|translate}}</label>\n            <div class=\"col-sm-9\">\n              <select class=\"form-control\" (change)=\"changeNbModuleValue($event.target.value)\" [ngModel]=\"nbModule\">\n                <option *ngFor=\"let length of specialLength, let i = index\" [value]=\"i+1\">{{ length }}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"text-center\">\n          <button class=\"btn btn-secondary\" (click)=\"addEquipModal.hide()\">{{'Close'|translate}}</button>\n          <button class=\"btn btn-primary\" (click)=\"applyAddEquip()\" [ladda]=\"laddaAddEquip\">{{'Apply'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-calculator #calculator></app-calculator>"

/***/ }),

/***/ "../../../../../src/app/views/output/sizing/sizing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\ncanvas {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n#sizing {\n  position: relative;\n  width: 100%;\n  min-height: 500px; }\n\n#temPer {\n  position: relative;\n  width: 100%;\n  min-height: 500px; }\n\n#showLoader {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderOptimum {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderTerm {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n#showLoaderChange, #showLoaderTermChange {\n  background: url(/app/assets/img/output/loading.gif) no-repeat center center rgba(255, 255, 255, 0.4);\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none; }\n\nimg {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/output/sizing/sizing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculation_calculator_calculator_component__ = __webpack_require__("../../../../../src/app/views/calculation/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SizingComponent = (function () {
    function SizingComponent(api, translate) {
        this.api = api;
        this.translate = translate;
        this.graphType = 'bar';
        this.graphLegend = true;
        this.tempChartLegend = true;
        this.tempChartType = 'line';
        this.tempColours = [
            { backgroundColor: ['rgb(0,0,255)', 'rgb(0,192,192)', 'rgb(0,255,255)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(255,0,255)'], }
        ];
        this.convChartLegend = true;
        this.convChartType = 'line';
        this.trGraph = 1;
        this.selectedEquipList = [];
        this.selectedActiveEquip = [];
        this.grapColours = [
            { backgroundColor: ['rgb(255,0,0)', 'rgb(0, 0, 255)', 'rgb(153, 204, 255)', 'rgb(51, 204, 51)', 'rgb(102, 255, 153)'], }
        ];
        this.graphOptions = {};
        this.equipmentList = [];
        this.activeEquipment = [];
        this.graphEstimationLabels = ['TR-10°C', 'TR', 'TR+10°C'];
        this.graphEstimationOptions = {};
        this.graphEstimationOptions01 = {};
        this.estimationAvailableOptions = {};
        this.activePage = '';
        this.sizingOptimumImage = new Image();
        this.sizingEstimationImage = new Image();
        this.estimationEquipBarImage = new Image();
        this.specialLength = [];
        this.laddaAddEquip = false;
    }
    SizingComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
        }
        this.selectedEquip = 0;
    };
    SizingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var showLoaderChange = document.getElementById('showLoaderChange');
        showLoaderChange.style.display = 'block';
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
            this.api.getSymbol(this.study.ID_STUDY).subscribe(function (data) {
                // console.log(data);
                _this.activePage = 'result';
                _this.symbol = data;
                showLoaderChange.style.display = 'none';
                if (_this.study.CALCULATION_MODE == 1) {
                    _this.refreshSizingEstimationResult();
                }
                else {
                    _this.api.sizingOptimumResult(_this.study.ID_STUDY).subscribe(function (dataCh) {
                        // console.log(dataCh);
                        _this.sizingOptimumValue = dataCh.result;
                        _this.selectedEquipment = dataCh.selectedEquipment;
                        _this.availableEquipment = dataCh.availableEquipment;
                        _this.equipmentList = _this.availableEquipment;
                        _this.activeEquipment = _this.selectedEquipment;
                        _this.productFlowRate = dataCh.productFlowRate;
                        _this.sizingOptimumImage.src = dataCh.imageSizing;
                    });
                }
            });
        }
        var params = {
            idStudy: this.study.ID_STUDY,
            idProd: this.study.ID_PROD
        };
        this.api.checkControl(params).subscribe(function (data) {
            _this.checkcontrol = data;
            // console.log(this.checkcontrol);
        });
    };
    SizingComponent.prototype.refreshSizingEstimationResult = function () {
        var _this = this;
        var paramsSizing = {
            idStudy: this.study.ID_STUDY
        };
        this.api.sizingEstimationResult(paramsSizing).subscribe(function (dataCh) {
            // console.log(dataCh);
            _this.sizingEstimationValue = dataCh.result;
            _this.dataGraphChart = dataCh.dataGraphChart;
            _this.selectedEquip = _this.dataGraphChart[0].id;
            _this.productFlowRate = dataCh.productFlowRate;
            for (var i = 0; i < Object.keys(dataCh.dataGraphChart).length; i++) {
                _this.equipmentList.push(dataCh.dataGraphChart[i]);
            }
            _this.sizingEstimationImage.src = _this.dataGraphChart[0].image;
        });
    };
    SizingComponent.prototype.moveSelectedEquipment = function () {
        for (var i = 0; i < Object.keys(this.selectedEquipList).length; i++) {
            this.activeEquipment.push(this.selectedEquipList[i]);
            var index = this.equipmentList.indexOf(this.selectedEquipList[i]);
            this.equipmentList.splice(index, 1);
        }
        this.selectedEquipList = [];
        this.getSizingOptimumDraw();
    };
    SizingComponent.prototype.moveAvailableEquipment = function () {
        for (var i = 0; i < Object.keys(this.selectedActiveEquip).length; i++) {
            this.equipmentList.push(this.selectedActiveEquip[i]);
            var index = this.activeEquipment.indexOf(this.selectedActiveEquip[i]);
            this.activeEquipment.splice(index, 1);
        }
        this.selectedActiveEquip = [];
        this.getSizingOptimumDraw();
    };
    SizingComponent.prototype.loadEstimationAvailableChart = function () {
        var showLoaderChange = document.getElementById('showLoaderChange');
        showLoaderChange.style.display = 'block';
        var dataGraphChart = this.activeEquipment;
        var dataGrapChartLength = Object.keys(dataGraphChart).length;
        if (dataGrapChartLength > 0) {
            var labelGrap = [];
            var dataCustomFlowRate = [];
            var dataDhp = [];
            var dataDhpMax = [];
            var dataConso = [];
            var dataConsoMax = [];
            for (var j = 0; j < Object.keys(dataGraphChart).length; j++) {
                labelGrap.push(dataGraphChart[j].equipName);
                var objDataGraph = dataGraphChart[j].data;
                for (var i = 0; i < Object.keys(objDataGraph).length; i++) {
                    if (i == this.trGraph) {
                        dataCustomFlowRate.push(this.productFlowRate);
                        dataDhp.push(objDataGraph[i].dhp);
                        dataDhpMax.push(objDataGraph[i].dhpMax);
                        dataConso.push(objDataGraph[i].conso);
                        dataConsoMax.push(objDataGraph[i].consoMax);
                    }
                }
                this.estimationEquipBarChart = new __WEBPACK_IMPORTED_MODULE_6_angular_highcharts__["a" /* Chart */]({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: labelGrap
                    },
                    yAxis: [
                        {
                            min: 1,
                            type: 'logarithmic',
                            plotLines: [{
                                    color: '#F00',
                                    width: 2,
                                    value: this.productFlowRate
                                }],
                            title: {
                                text: this.translate.instant('Flow rate') + ' ' + this.symbol.productFlowSymbol,
                            }
                        },
                        {
                            title: {
                                text: this.translate.instant('Conso') + ' ' + this.symbol.consumSymbol + '/' + this.symbol.perUnitOfMassSymbol
                            },
                            opposite: true
                        }
                    ],
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y;
                        }
                    },
                    plotOptions: {
                        column: {
                            events: {
                                legendItemClick: function () {
                                    return false;
                                }
                            }
                        },
                        spline: {
                            events: {
                                legendItemClick: function () {
                                    return false;
                                }
                            },
                            lineWidth: 0
                        }
                    },
                    series: [{
                            name: this.translate.instant('Product flowrate'),
                            color: 'rgba(0, 0, 255, 1)',
                            data: JSON.parse(JSON.stringify(dataDhp)),
                            stack: 'male',
                        }, {
                            name: this.translate.instant('Maximum product flowrate'),
                            color: 'rgba(153, 204, 255, .9)',
                            data: JSON.parse(JSON.stringify(dataDhpMax)),
                            stack: 'male'
                        }, {
                            name: this.translate.instant('Cryogen consumption (product + equipment heat losses)'),
                            color: 'rgba(51, 204, 51, 1)',
                            data: JSON.parse(JSON.stringify(dataConso)),
                            stack: 'female',
                            yAxis: 1
                        }, {
                            name: this.translate.instant('Maximum cryogen consumption (product + equipment heat losses)'),
                            color: 'rgba(102, 255, 153, .9)',
                            data: JSON.parse(JSON.stringify(dataConsoMax)),
                            stack: 'female',
                            yAxis: 1
                        }, {
                            name: this.translate.instant('Custom flow rate'),
                            type: 'spline',
                            color: '#f00',
                            data: JSON.parse(JSON.stringify(dataCustomFlowRate)),
                        }]
                });
            }
        }
        else {
            this.estimationEquipBarChart = '';
        }
        showLoaderChange.style.display = 'none';
    };
    SizingComponent.prototype.loadOptimumAvailableChart = function () {
        var chartGraphOptimumData = document.getElementById('chartGraphOptimumData');
        var showLoaderChange = document.getElementById('showLoaderChange');
        showLoaderChange.style.display = 'block';
        var dataGraphChart = this.activeEquipment;
        var dataGrapChartLength = Object.keys(dataGraphChart).length;
        var labelGrap = [];
        var dataCustomFlowRate = [];
        var dataDhp = [];
        var dataDhpMax = [];
        var dataConso = [];
        var dataConsoMax = [];
        if (dataGrapChartLength > 0) {
            for (var i = 0; i < Object.keys(dataGraphChart).length; i++) {
                labelGrap.push(dataGraphChart[i].equipName);
                dataCustomFlowRate.push(this.productFlowRate);
                dataDhp.push(dataGraphChart[i].dhp);
                dataDhpMax.push(dataGraphChart[i].dhpMax);
                dataConso.push(dataGraphChart[i].conso);
                dataConsoMax.push(dataGraphChart[i].consoMax);
            }
            this.optimumBarChart = new __WEBPACK_IMPORTED_MODULE_6_angular_highcharts__["a" /* Chart */]({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: labelGrap
                },
                yAxis: [
                    {
                        min: 1,
                        type: 'logarithmic',
                        plotLines: [{
                                color: '#F00',
                                width: 2,
                                value: this.productFlowRate
                            }],
                        title: {
                            text: this.translate.instant('Flow rate') + ' ' + this.symbol.productFlowSymbol,
                        }
                    },
                    {
                        title: {
                            text: this.translate.instant('Conso') + ' ' + this.symbol.consumSymbol + '/' + this.symbol.perUnitOfMassSymbol
                        },
                        opposite: true
                    }
                ],
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y;
                    }
                },
                plotOptions: {
                    column: {
                        events: {
                            legendItemClick: function () {
                                return false;
                            }
                        }
                    },
                    spline: {
                        events: {
                            legendItemClick: function () {
                                return false;
                            }
                        },
                        lineWidth: 0
                    }
                },
                series: [{
                        name: this.translate.instant('Product flowrate'),
                        color: 'rgba(0, 0, 255, 1)',
                        data: JSON.parse(JSON.stringify(dataDhp)),
                        stack: 'male',
                    }, {
                        name: this.translate.instant('Maximum product flowrate'),
                        color: 'rgba(153, 204, 255, .9)',
                        data: JSON.parse(JSON.stringify(dataDhpMax)),
                        stack: 'male'
                    }, {
                        name: this.translate.instant('Cryogen consumption (product + equipment heat losses)'),
                        color: 'rgba(51, 204, 51, 1)',
                        data: JSON.parse(JSON.stringify(dataConso)),
                        stack: 'female',
                        yAxis: 1
                    }, {
                        name: this.translate.instant('Maximum cryogen consumption (product + equipment heat losses)'),
                        color: 'rgba(102, 255, 153, .9)',
                        data: JSON.parse(JSON.stringify(dataConsoMax)),
                        stack: 'female',
                        yAxis: 1
                    }, {
                        name: this.translate.instant('Custom flow rate'),
                        type: 'spline',
                        color: '#f00',
                        data: JSON.parse(JSON.stringify(dataCustomFlowRate)),
                    }]
            });
        }
        else {
            this.optimumBarChart = '';
        }
        showLoaderChange.style.display = 'none';
    };
    SizingComponent.prototype.getSizingOptimumDraw = function () {
        var _this = this;
        if (this.study.CALCULATION_MODE == 1) {
            if (this.activeEquipment.length > 0) {
                var params_1 = [];
                var trNumber_1 = this.trGraph;
                this.activeEquipment.forEach(function (value) {
                    params_1.push({
                        id: value.id,
                        equipName: value.equipName,
                        dhp: value.data[trNumber_1].dhp,
                        conso: value.data[trNumber_1].conso,
                        dhpMax: value.data[trNumber_1].dhpMax,
                        consoMax: value.data[trNumber_1].consoMax
                    });
                });
                this.api.sizingOptimumDraw({
                    idStudy: this.study.ID_STUDY,
                    body: params_1
                }).subscribe(function (data) {
                    _this.estimationEquipBarImage.src = '' + data + '';
                });
            }
            else {
                this.estimationEquipBarImage.src = '';
            }
        }
        else {
            if (this.activeEquipment.length > 0) {
                var params_2 = [];
                this.activeEquipment.forEach(function (value) {
                    params_2.push({
                        id: value.id,
                        equipName: value.equipName,
                        dhp: value.dhp,
                        conso: value.conso,
                        dhpMax: value.dhpMax,
                        consoMax: value.consoMax
                    });
                });
                this.api.sizingOptimumDraw({
                    idStudy: this.study.ID_STUDY,
                    body: params_2
                }).subscribe(function (data) {
                    _this.sizingOptimumImage.src = '' + data + '';
                });
            }
            else {
                this.sizingOptimumImage.src = '';
            }
        }
    };
    SizingComponent.prototype.changeEstimationTrGraph = function (value) {
        this.trGraph = value;
        this.getSizingOptimumDraw();
    };
    SizingComponent.prototype.openSize = function () {
        this.activePage = 'result';
        var size = document.getElementById('sizing');
        var tem = document.getElementById('temPer');
        size.style.display = 'block';
        tem.style.display = 'none';
    };
    SizingComponent.prototype.openTem = function () {
        var _this = this;
        this.activePage = 'profile';
        var size = document.getElementById('sizing');
        var tem = document.getElementById('temPer');
        this.api.getSymbol(this.study.ID_STUDY).subscribe(function (dataSymbol) {
            _this.symbol = dataSymbol;
            _this.api.getstudyEquipmentByStudyId(_this.study.ID_STUDY).subscribe(function (data) {
                _this.studyEquipments = data;
                _this.api.temperatureProfile(_this.studyEquipments[0]['ID_STUDY_EQUIPMENTS']).subscribe(function (dataTempFirst) {
                    var tempChartDataObj = dataTempFirst.tempChartData;
                    var convChartDataObj = dataTempFirst.convChartData;
                    var chartTempData = [
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.top)), label: _this.translate.instant('Top'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,0,255)', backgroundColor: 'rgb(0,0,255)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.bottom)), label: _this.translate.instant('Bottom'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,192,192)', backgroundColor: 'rgb(0,192,192)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.left)), label: _this.translate.instant('Left'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,255)', backgroundColor: 'rgb(0,255,255)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.right)), label: _this.translate.instant('Right'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,0)', backgroundColor: 'rgb(0,255,0)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.front)), label: _this.translate.instant('Front'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,0)', backgroundColor: 'rgb(255,0,0)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(tempChartDataObj.rear)), label: _this.translate.instant('Rear'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,255)', backgroundColor: 'rgb(255,0,255)', borderWidth: 2 }
                    ];
                    var chartConvData = [
                        { data: JSON.parse(JSON.stringify(convChartDataObj.top)), label: _this.translate.instant('Top'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,0,255)', backgroundColor: 'rgb(0,0,255)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(convChartDataObj.bottom)), label: _this.translate.instant('Bottom'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,192,192)', backgroundColor: 'rgb(0,192,192)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(convChartDataObj.left)), label: _this.translate.instant('Left'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,255)', backgroundColor: 'rgb(0,255,255)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(convChartDataObj.right)), label: _this.translate.instant('Right'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,0)', backgroundColor: 'rgb(0,255,0)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(convChartDataObj.front)), label: _this.translate.instant('Front'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,0)', backgroundColor: 'rgb(255,0,0)', borderWidth: 2 },
                        { data: JSON.parse(JSON.stringify(convChartDataObj.rear)), label: _this.translate.instant('Rear'),
                            type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,255)', backgroundColor: 'rgb(255,0,255)', borderWidth: 2 }
                    ];
                    _this.tempChartData = chartTempData;
                    _this.convChartData = chartConvData;
                    _this.tempChartOptions = {
                        animation: false,
                        responsive: false,
                        legend: {
                            onClick: function (e) { return e.stopPropagation(); },
                            position: 'right',
                            labels: {
                                padding: 20
                            }
                        },
                        hoverMode: 'index',
                        stacked: false,
                        title: {
                            display: false,
                            text: 'Chart 1',
                            fontColor: '#000',
                            fontSize: 20
                        },
                        scales: {
                            xAxes: [{
                                    type: 'linear',
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: _this.translate.instant(_this.symbol.timePositionSymbol),
                                        fontColor: '#f00',
                                        fontSize: 20
                                    },
                                }],
                            yAxes: [{
                                    type: 'linear',
                                    display: true,
                                    id: 'y-axis-1',
                                    scaleLabel: {
                                        display: true,
                                        labelString: _this.translate.instant(_this.symbol.temperatureSymbol),
                                        fontColor: '#f00',
                                        fontSize: 20
                                    },
                                    ticks: {
                                        stepSize: 10
                                    }
                                }],
                        }
                    };
                    _this.convChartOptions = {
                        animation: false,
                        responsive: false,
                        legend: {
                            onClick: function (e) { return e.stopPropagation(); },
                            position: 'right',
                            labels: {
                                padding: 20
                            }
                        },
                        hoverMode: 'index',
                        stacked: false,
                        title: {
                            display: false,
                            text: 'Chart 1',
                            fontColor: '#000',
                            fontSize: 20
                        },
                        scales: {
                            xAxes: [{
                                    type: 'linear',
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: _this.translate.instant(_this.symbol.timePositionSymbol),
                                        fontColor: '#f00',
                                        fontSize: 20
                                    },
                                }],
                            yAxes: [{
                                    type: 'linear',
                                    display: true,
                                    id: 'y-axis-1',
                                    scaleLabel: {
                                        display: true,
                                        labelString: _this.translate.instant(_this.symbol.convectionCoeffSymbol),
                                        fontColor: '#f00',
                                        fontSize: 20
                                    },
                                    ticks: {
                                        min: dataTempFirst.minScaleConv,
                                        max: dataTempFirst.maxScaleConv,
                                    }
                                }],
                        }
                    };
                });
            });
            size.style.display = 'none';
            tem.style.display = 'block';
        });
    };
    SizingComponent.prototype.loadTempChart = function (element) {
        var _this = this;
        var showLoaderTermChange = document.getElementById('showLoaderTermChange');
        showLoaderTermChange.style.display = 'block';
        this.api.temperatureProfile(element).subscribe(function (data) {
            showLoaderTermChange.style.display = 'none';
            var tempChartDataObj = data.tempChartData;
            var convChartDataObj = data.convChartData;
            var chartTempData = [
                { data: JSON.parse(JSON.stringify(tempChartDataObj.top)), label: _this.translate.instant('Top'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,0,255)', backgroundColor: 'rgb(0,0,255)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(tempChartDataObj.bottom)), label: _this.translate.instant('Bottom'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,192,192)', backgroundColor: 'rgb(0,192,192)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(tempChartDataObj.left)), label: _this.translate.instant('Left'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,255)', backgroundColor: 'rgb(0,255,255)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(tempChartDataObj.right)), label: _this.translate.instant('Right'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,0)', backgroundColor: 'rgb(0,255,0)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(tempChartDataObj.front)), label: _this.translate.instant('Front'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,0)', backgroundColor: 'rgb(255,0,0)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(tempChartDataObj.rear)), label: _this.translate.instant('Rear'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,255)', backgroundColor: 'rgb(255,0,255)', borderWidth: 2 }
            ];
            var chartConvData = [
                { data: JSON.parse(JSON.stringify(convChartDataObj.top)), label: _this.translate.instant('Top'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,0,255)', backgroundColor: 'rgb(0,0,255)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(convChartDataObj.bottom)), label: _this.translate.instant('Bottom'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,192,192)', backgroundColor: 'rgb(0,192,192)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(convChartDataObj.left)), label: _this.translate.instant('Left'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,255)', backgroundColor: 'rgb(0,255,255)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(convChartDataObj.right)), label: _this.translate.instant('Right'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(0,255,0)', backgroundColor: 'rgb(0,255,0)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(convChartDataObj.front)), label: _this.translate.instant('Front'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,0)', backgroundColor: 'rgb(255,0,0)', borderWidth: 2 },
                { data: JSON.parse(JSON.stringify(convChartDataObj.rear)), label: _this.translate.instant('Rear'),
                    type: 'line', radius: 0, fill: false, borderColor: 'rgb(255,0,255)', backgroundColor: 'rgb(255,0,255)', borderWidth: 2 }
            ];
            _this.tempChartData = chartTempData;
            _this.convChartData = chartConvData;
            _this.tempChartOptions = {
                animation: false,
                responsive: false,
                legend: {
                    onClick: function (e) { return e.stopPropagation(); },
                    position: 'right',
                    labels: {
                        padding: 20
                    }
                },
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: false,
                    text: 'Chart 1',
                    fontColor: '#000',
                    fontSize: 20
                },
                scales: {
                    xAxes: [{
                            type: 'linear',
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: _this.translate.instant(_this.symbol.timePositionSymbol),
                                fontColor: '#f00',
                                fontSize: 20
                            },
                        }],
                    yAxes: [{
                            type: 'linear',
                            display: true,
                            id: 'y-axis-1',
                            scaleLabel: {
                                display: true,
                                labelString: _this.translate.instant(_this.symbol.temperatureSymbol),
                                fontColor: '#f00',
                                fontSize: 20
                            },
                            ticks: {
                                stepSize: 10
                            }
                        }],
                }
            };
            _this.convChartOptions = {
                animation: false,
                responsive: false,
                legend: {
                    onClick: function (e) { return e.stopPropagation(); },
                    position: 'right',
                    labels: {
                        padding: 20
                    }
                },
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: false,
                    text: 'Chart 1',
                    fontColor: '#000',
                    fontSize: 20
                },
                scales: {
                    xAxes: [{
                            type: 'linear',
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: _this.translate.instant(_this.symbol.timePositionSymbol),
                                fontColor: '#f00',
                                fontSize: 20
                            },
                        }],
                    yAxes: [{
                            type: 'linear',
                            display: true,
                            id: 'y-axis-1',
                            scaleLabel: {
                                display: true,
                                labelString: _this.translate.instant(_this.symbol.convectionCoeffSymbol),
                                fontColor: '#f00',
                                fontSize: 20
                            },
                            ticks: {
                                min: data.minScaleConv,
                                max: data.maxScaleConv,
                            }
                        }],
                }
            };
        });
    };
    SizingComponent.prototype.loadEstimationValue = function (value) {
        var _this = this;
        var showLoaderChange = document.getElementById('showLoaderChange');
        showLoaderChange.style.display = 'block';
        var params = {
            idStudy: this.study.ID_STUDY,
            tr: value
        };
        this.api.sizingEstimationResult(params).subscribe(function (data) {
            _this.sizingEstimationValue = data.result;
            showLoaderChange.style.display = 'none';
        });
    };
    SizingComponent.prototype.loadEquipmentEstimationChart = function () {
        for (var i = 0; i < this.dataGraphChart.length; i++) {
            if (this.dataGraphChart[i].id == this.selectedEquip) {
                this.sizingEstimationImage.src = this.dataGraphChart[i].image;
            }
        }
    };
    SizingComponent.prototype.viewEquipTr = function (element) {
        this.viewEquipTrData = element;
        this.viewEquipTrModal.show();
    };
    SizingComponent.prototype.isNumberic = function (number) {
        return Number.isInteger(Math.floor(number));
    };
    SizingComponent.prototype.viewAddEquipModal = function (element) {
        var _this = this;
        this.api.getSpecialLength(element).subscribe(function (data) {
            _this.nbModule = 1;
            _this.equipDuplicateId = element;
            _this.specialLength = data;
            _this.addEquipModal.show();
        });
    };
    SizingComponent.prototype.changeNbModuleValue = function (value) {
        this.nbModule = value;
    };
    SizingComponent.prototype.applyAddEquip = function () {
        var _this = this;
        this.laddaAddEquip = true;
        var params = {
            nbModule: this.nbModule
        };
        this.api.duplicateEltNewSize({
            id: this.equipDuplicateId,
            body: params
        }).subscribe(function (data) {
            _this.refreshSizingEstimationResult();
            _this.laddaAddEquip = false;
            _this.addEquipModal.hide();
        });
    };
    SizingComponent.prototype.getCapability = function (capabilities, capMask) {
        /* tslint:disable */
        if ((Number(capabilities) & Number(capMask)) !== 0) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calculator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__calculation_calculator_calculator_component__["a" /* CalculatorComponent */])
    ], SizingComponent.prototype, "calculator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], SizingComponent.prototype, "myGraphEstimationData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], SizingComponent.prototype, "myEstimationAvailableChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], SizingComponent.prototype, "myGraphOptimumData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", Object)
    ], SizingComponent.prototype, "myGraphOptimumData01", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('viewEquipTrModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], SizingComponent.prototype, "viewEquipTrModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addEquipModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], SizingComponent.prototype, "addEquipModal", void 0);
    SizingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sizing',
            template: __webpack_require__("../../../../../src/app/views/output/sizing/sizing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/output/sizing/sizing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], SizingComponent);
    return SizingComponent;
}());



/***/ }),

/***/ "../../../../angular-highcharts/angular-highcharts.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartModule; });
/* unused harmony export HIGHCHARTS_MODULES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* unused harmony export StockChart */
/* unused harmony export MapChart */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* unused harmony reexport Highcharts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Chart = /** @class */ (function () {
    function Chart(options) {
        if (options === void 0) { options = { series: [] }; }
        // init series array if not set
        if (!options.series) {
            options.series = [];
        }
        this.options = options;
    }
    Object.defineProperty(Chart.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ref) {
                return this.ref.options;
            }
            return this._options;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options = value;
            if (this.ref) {
                this.ref.update(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add Point
     * \@memberof Chart
     * @param {?} point         Highcharts.DataPoint, number touple or number
     * @param {?=} serieIndex    Index position of series. This defaults to 0.
     * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
     * @param {?=} shift         Shift point to the start of series. This defaults to false.
     * @return {?}
     */
    Chart.prototype.addPoint = /**
     * Add Point
     * \@memberof Chart
     * @param {?} point         Highcharts.DataPoint, number touple or number
     * @param {?=} serieIndex    Index position of series. This defaults to 0.
     * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
     * @param {?=} shift         Shift point to the start of series. This defaults to false.
     * @return {?}
     */
    function (point, serieIndex, redraw, shift) {
        if (serieIndex === void 0) { serieIndex = 0; }
        if (redraw === void 0) { redraw = true; }
        if (shift === void 0) { shift = false; }
        if (this.ref && this.ref.series.length > serieIndex) {
            this.ref.series[serieIndex].addPoint(point, redraw, shift);
            return;
        }
        // keep options in snyc if chart is not initialized
        if (this.options.series.length > serieIndex) {
            this.options.series[serieIndex].data.push(point);
        }
    };
    /**
     * Add Series
     * \@memberof Chart
     * @param {?} serie         Series Configuration
     * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
     * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @return {?}
     */
    Chart.prototype.addSerie = /**
     * Add Series
     * \@memberof Chart
     * @param {?} serie         Series Configuration
     * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
     * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @return {?}
     */
    function (serie, redraw, animation) {
        if (redraw === void 0) { redraw = true; }
        if (animation === void 0) { animation = false; }
        if (this.ref) {
            this.ref.addSeries(serie, redraw, animation);
            return;
        }
        // keep options in snyc if chart is not initialized
        this.options.series.push(serie);
    };
    /**
     * Remove Point
     * \@memberof Chart
     * @param {?} pointIndex    Index of Point
     * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
     * @return {?}
     */
    Chart.prototype.removePoint = /**
     * Remove Point
     * \@memberof Chart
     * @param {?} pointIndex    Index of Point
     * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
     * @return {?}
     */
    function (pointIndex, serieIndex) {
        if (serieIndex === void 0) { serieIndex = 0; }
        if (this.ref &&
            this.ref.series.length > serieIndex &&
            this.ref.series[serieIndex].data.length > pointIndex) {
            this.ref.series[serieIndex].removePoint(pointIndex, true);
            return;
        }
        // keep options in snyc if chart is not initialized
        if (this.options.series.length > serieIndex &&
            this.options.series[serieIndex].data.length > pointIndex) {
            this.options.series[serieIndex].data.splice(pointIndex, 1);
        }
    };
    /**
     * Remove Series
     * \@memberof Chart
     * @param {?} serieIndex    Index position of series to remove.
     * @return {?}
     */
    Chart.prototype.removeSerie = /**
     * Remove Series
     * \@memberof Chart
     * @param {?} serieIndex    Index position of series to remove.
     * @return {?}
     */
    function (serieIndex) {
        if (this.ref && this.ref.series.length > serieIndex) {
            this.ref.series[serieIndex].remove(true);
            return;
        }
        // keep options in snyc if chart is not initialized
        if (this.options.series.length > serieIndex) {
            this.options.series.splice(serieIndex, 1);
        }
    };
    return Chart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
var  /**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
MapChart = /** @class */ (function () {
    function MapChart(options) {
        this.options = options;
    }
    return MapChart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
var  /**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
StockChart = /** @class */ (function () {
    function StockChart(options) {
        if (options === void 0) { options = { series: [] }; }
        this.options = options;
    }
    return StockChart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartDirective = /** @class */ (function () {
    function ChartDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes["chart"].isFirstChange()) {
            this.destroy();
            this.init();
        }
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy(true);
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.chart instanceof Chart) {
            return this.chart.ref = Object(__WEBPACK_IMPORTED_MODULE_0_highcharts__["chart"])(this.el.nativeElement, this.chart.options);
        }
        if (this.chart instanceof StockChart) {
            return this.chart.ref = Object(__WEBPACK_IMPORTED_MODULE_0_highcharts__["stockChart"])(this.el.nativeElement, this.chart.options);
        }
        if (this.chart instanceof MapChart) {
            return this.chart.ref = Object(__WEBPACK_IMPORTED_MODULE_0_highcharts__["mapChart"])(this.el.nativeElement, this.chart.options);
        }
    };
    /**
     * @param {?=} sync
     * @return {?}
     */
    ChartDirective.prototype.destroy = /**
     * @param {?=} sync
     * @return {?}
     */
    function (sync) {
        if (sync === void 0) { sync = false; }
        if (this.chart && this.chart.ref) {
            if (sync) {
                this.chart.options = this.chart.ref.options;
            }
            this.chart.ref.destroy();
            delete this.chart.ref;
        }
    };
    ChartDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[chart]'
                },] },
    ];
    /** @nocollapse */
    ChartDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    ]; };
    ChartDirective.propDecorators = {
        "chart": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return ChartDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ HIGHCHARTS_MODULES = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HighchartsModules');
var ChartService = /** @class */ (function () {
    function ChartService(chartModules) {
        this.chartModules = chartModules;
    }
    /**
     * @return {?}
     */
    ChartService.prototype.initModules = /**
     * @return {?}
     */
    function () {
        this.chartModules.forEach(function (chartModule) {
            chartModule(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
        });
    };
    ChartService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ChartService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [HIGHCHARTS_MODULES,] },] },
    ]; };
    return ChartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var ChartModule = /** @class */ (function () {
    function ChartModule(cs) {
        this.cs = cs;
        this.cs.initModules();
    }
    ChartModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    exports: [ChartDirective],
                    declarations: [ChartDirective],
                    providers: [
                        { provide: HIGHCHARTS_MODULES, useValue: ɵ0 },
                        ChartService
                    ]
                },] },
    ];
    /** @nocollapse */
    ChartModule.ctorParameters = function () { return [
        { type: ChartService, },
    ]; };
    return ChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/***/ }),

/***/ "../../../../chart.piecelabel.js/src/Chart.PieceLabel.js":
/***/ (function(module, exports) {

/**
 * [Chart.PieceLabel.js]{@link https://github.com/emn178/Chart.PieceLabel.js}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017
 * @license MIT
 */
(function () {
  if (typeof Chart === 'undefined') {
    console.warn('Can not find Chart object.');
    return;
  }

  function PieceLabel() {
    this.drawDataset = this.drawDataset.bind(this);
  }

  PieceLabel.prototype.beforeDatasetsUpdate = function (chartInstance) {
    if (this.parseOptions(chartInstance) && this.position === 'outside') {
      var padding = this.fontSize * 1.5 + 2;
      chartInstance.chartArea.top += padding;
      chartInstance.chartArea.bottom -= padding;
    }
  };

  PieceLabel.prototype.afterDatasetsDraw = function (chartInstance) {
    if (!this.parseOptions(chartInstance)) {
      return;
    }
    this.labelBounds = [];
    chartInstance.config.data.datasets.forEach(this.drawDataset);
  };

  PieceLabel.prototype.drawDataset = function (dataset) {
    var ctx = this.ctx;
    var chartInstance = this.chartInstance;
    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
    var totalPercentage = 0;
    for (var i = 0; i < meta.data.length; i++) {
      var element = meta.data[i],
        view = element._view, text;

      //Skips label creation if value is zero and showZero is set
      if (view.circumference === 0 && !this.showZero) {
        continue;
      }
      switch (this.render) {
        case 'value':
          var value = dataset.data[i];
          if (this.format) {
            value = this.format(value);
          }
          text = value.toString();
          break;
        case 'label':
          text = chartInstance.config.data.labels[i];
          break;
        case 'image':
          text = this.images[i] ? this.loadImage(this.images[i]) : '';
          break;
        case 'percentage':
        default:
          var percentage = view.circumference / this.options.circumference * 100;
          percentage = parseFloat(percentage.toFixed(this.precision));
          if (!this.showActualPercentages) {
            totalPercentage += percentage;
            if (totalPercentage > 100) {
              percentage -= totalPercentage - 100;
              // After adjusting the percentage, need to trim the numbers after decimal points again, otherwise it may not show
              // on chart due to very long number after decimal point.
              percentage = parseFloat(percentage.toFixed(this.precision));
            }
          }
          text = percentage + '%';
          break;
      }
      if (typeof this.render === 'function') {
        text = this.render({
          label: chartInstance.config.data.labels[i],
          value: dataset.data[i],
          percentage: percentage,
          dataset: dataset,
          index: i
        });

        if (typeof text === 'object') {
          text = this.loadImage(text);
        }
      }
      if (!text) {
        return;
      }
      ctx.save();
      ctx.beginPath();
      ctx.font = Chart.helpers.fontString(this.fontSize, this.fontStyle, this.fontFamily);
      var position, innerRadius, arcOffset;
      if (this.position === 'outside' ||
        this.position === 'border' && chartInstance.config.type === 'pie') {
        innerRadius = view.outerRadius / 2;
        var rangeFromCentre, offset = this.fontSize + 2,
          centreAngle = view.startAngle + ((view.endAngle - view.startAngle) / 2);
        if (this.position === 'border') {
          rangeFromCentre = (view.outerRadius - innerRadius) / 2 + innerRadius;
        } else if (this.position === 'outside') {
          rangeFromCentre = (view.outerRadius - innerRadius) + innerRadius + offset;
        }
        position = {
          x: view.x + (Math.cos(centreAngle) * rangeFromCentre),
          y: view.y + (Math.sin(centreAngle) * rangeFromCentre)
        };
        if (this.position === 'outside') {
          if (position.x < view.x) {
            position.x -= offset;
          } else {
            position.x += offset;
          }
          arcOffset = view.outerRadius + offset;
        }
      } else {
        innerRadius = view.innerRadius;
        position = element.tooltipPosition();
      }

      var fontColor = this.fontColor;
      if (typeof fontColor === 'function') {
        fontColor = fontColor({
          label: chartInstance.config.data.labels[i],
          value: dataset.data[i],
          percentage: percentage,
          text: text,
          backgroundColor: dataset.backgroundColor[i],
          dataset: dataset,
          index: i
        });
      } else if (typeof fontColor !== 'string') {
        fontColor = fontColor[i] || this.options.defaultFontColor;
      }
      if (this.arc) {
        if (!arcOffset) {
          arcOffset = (innerRadius + view.outerRadius) / 2;
        }
        ctx.fillStyle = fontColor;
        ctx.textBaseline = 'middle';
        this.drawArcText(text, arcOffset, view, this.overlap);
      } else {
        var drawable, mertrics = this.measureText(text),
          left = position.x - mertrics.width / 2,
          right = position.x + mertrics.width / 2,
          top = position.y - this.fontSize / 2,
          bottom = position.y + this.fontSize / 2;
        if (this.overlap) {
          drawable = true;
        } else if (this.position === 'outside') {
          drawable = this.checkTextBound(left, right, top, bottom);
        } else {
          drawable = element.inRange(left, top) && element.inRange(left, bottom) &&
            element.inRange(right, top) && element.inRange(right, bottom);
        }
        if (drawable) {
          this.fillText(text, position, fontColor);
        }
      }
      ctx.restore();
    }
  };

  PieceLabel.prototype.parseOptions = function (chartInstance) {
    var pieceLabel = chartInstance.options.pieceLabel;
    if (pieceLabel) {
      this.chartInstance = chartInstance;
      this.ctx = chartInstance.chart.ctx;
      this.options = chartInstance.config.options;
      this.render = pieceLabel.render || pieceLabel.mode;
      this.position = pieceLabel.position || 'default';
      this.arc = pieceLabel.arc;
      this.format = pieceLabel.format;
      this.precision = pieceLabel.precision || 0;
      this.fontSize = pieceLabel.fontSize || this.options.defaultFontSize;
      this.fontColor = pieceLabel.fontColor || this.options.defaultFontColor;
      this.fontStyle = pieceLabel.fontStyle || this.options.defaultFontStyle;
      this.fontFamily = pieceLabel.fontFamily || this.options.defaultFontFamily;
      this.hasTooltip = chartInstance.tooltip._active && chartInstance.tooltip._active.length;
      this.showZero = pieceLabel.showZero;
      this.overlap = pieceLabel.overlap;
      this.images = pieceLabel.images || [];
      this.showActualPercentages = pieceLabel.showActualPercentages || false;
      return true;
    } else {
      return false;
    }
  };

  PieceLabel.prototype.checkTextBound = function (left, right, top, bottom) {
    var labelBounds = this.labelBounds;
    for (var i = 0;i < labelBounds.length;++i) {
      var bound = labelBounds[i];
      var potins = [
        [left, top],
        [left, bottom],
        [right, top],
        [right, bottom]
      ];
      for (var j = 0;j < potins.length;++j) {
        var x = potins[j][0];
        var y = potins[j][1];
        if (x >= bound.left && x <= bound.right && y >= bound.top && y <= bound.bottom) {
          return false;
        }
      }
      potins = [
        [bound.left, bound.top],
        [bound.left, bound.bottom],
        [bound.right, bound.top],
        [bound.right, bound.bottom]
      ];
      for (var j = 0;j < potins.length;++j) {
        var x = potins[j][0];
        var y = potins[j][1];
        if (x >= left && x <= right && y >= top && y <= bottom) {
          return false;
        }
      }
    }
    labelBounds.push({
      left: left,
      right: right,
      top: top,
      bottom: bottom
    });
    return true;
  };

  PieceLabel.prototype.measureText = function (text) {
    if (typeof text === 'object') {
      return { width: text.width, height: text.height };
    } else {
      return this.ctx.measureText(text);
    }
  };

  PieceLabel.prototype.fillText = function (text, position, fontColor) {
    var ctx = this.ctx;
    if (typeof text === 'object') {
      ctx.drawImage(text, position.x - text.width / 2, position.y - text.height / 2, text.width, text.height);
    } else {
      ctx.fillStyle = fontColor;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      ctx.fillText(text, position.x, position.y - this.fontSize / 2);
    }
  };

  PieceLabel.prototype.loadImage = function (obj) {
    var image = new Image();
    image.src = obj.src;
    image.width = obj.width;
    image.height = obj.height;
    return image;
  };

  PieceLabel.prototype.drawArcText = function (str, radius, view, overlap) {
    var ctx = this.ctx,
      centerX = view.x,
      centerY = view.y,
      startAngle = view.startAngle,
      endAngle = view.endAngle;

    ctx.save();
    ctx.translate(centerX, centerY);
    var angleSize = endAngle - startAngle;
    startAngle += Math.PI / 2;
    endAngle += Math.PI / 2;
    var origStartAngle = startAngle;
    var mertrics = this.measureText(str);
    startAngle += (endAngle - (mertrics.width / radius + startAngle)) / 2;
    if (!overlap && endAngle - startAngle > angleSize) {
      ctx.restore();
      return;
    }

    if (typeof str === 'string') {
      ctx.rotate(startAngle);
      for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        mertrics = ctx.measureText(char);
        ctx.save();
        ctx.translate(0, -1 * radius);
        ctx.fillText(char, 0, 0);
        ctx.restore();
        ctx.rotate(mertrics.width / radius);
      }
    } else {
      ctx.rotate((origStartAngle + endAngle) / 2);
      ctx.translate(0, -1 * radius);
      this.fillText(str, { x: 0, y: 0 });
    }
    ctx.restore();
  };

  Chart.pluginService.register({
    beforeInit: function(chartInstance) {
      chartInstance.pieceLabel = new PieceLabel();
    },
    beforeDatasetsUpdate: function (chartInstance) {
      chartInstance.pieceLabel.beforeDatasetsUpdate(chartInstance);
    },
    afterDatasetsDraw: function (chartInstance) {
      chartInstance.pieceLabel.afterDatasetsDraw(chartInstance);
    }
  });
})();


/***/ })

});
//# sourceMappingURL=output.module.chunk.js.map