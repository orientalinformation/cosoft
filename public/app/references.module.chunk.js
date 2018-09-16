webpackJsonp(["references.module"],{

/***/ "../../../../../src/app/views/references/component/component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"card product-container\">\n    <div class=\"card-header text-center\">\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn btn-outline-primary btn-sm\" [class.active]=\"activePageComponent == 'new'\" (click)=\"openNewComponent()\">{{ 'Component'|translate }}</button>\n        <button class=\"btn btn-outline-primary btn-sm\" [class.active]=\"activePageComponent == 'gen'\" *ngIf=\"selectComponent\"\n        (click)=\"openDataGenerateComponent()\" [disabled]=\"selectComponent.COMP_GEN_STATUS != 1\" (click)=\"getGeneratedData(selectComponent);\">{{ 'Data generated'|translate }}</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <!-- Component -->\n      <div style=\"margin-top:10px;\" id=\"page-new-component\" *ngIf=\"!isLoading\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <div class=\"input-group input-group-sm study-search-box\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n                  <span>\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </div>\n              <perfect-scrollbar style=\"max-height: 400px;\" *ngIf=\"components\">\n                <div class=\"list-group\">\n                  <h6 class=\"dropdown-header\">MINE</h6>\n                  <a *ngFor=\"let comp of (components.mine | pipeLineFilter: filterString)\" [ngClass]=\"checkActiveComp == comp.ID_COMP || comp == selectComponent? 'active' : ''\"\n                    (click)=\"onSelectComponent(comp);onGetTemperature(comp);\" class=\"list-group-item list-group-item-action\">\n                    <div class=\"d-flex w-100 justify-content-between\" *ngIf=\"comp.COMP_RELEASE == 7; else release7mine\">\n                      {{ comp.LABEL }} - (v{{ comp.COMP_VERSION }}) - (@) - {{ userLogon.USERNAM }}\n                      <i *ngIf=\"comp.COMP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                      <i *ngIf=\"comp.COMP_RELEASE == 6\" class=\"fa fa-lock text-secondary\"></i>\n                      <i *ngIf=\"comp.COMP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i> \n                      <i *ngIf=\"comp.COMP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                      <!-- <i class=\"fa fa-trash text-secondary\"></i>\n                            <i class=\"fa fa-exclamation-circle text-danger\"></i> -->\n                    </div>\n                    <ng-template #release7mine>\n                        <div class=\"d-flex w-100 justify-content-between\">\n                            {{ comp.LABEL }} - (v{{ comp.COMP_VERSION }}) - {{ userLogon.USERNAM }}\n                            <i *ngIf=\"comp.COMP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 6\" class=\"fa fa-lock text-secondary\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            <!-- <i class=\"fa fa-lock text-secondary\"></i>\n                                  <i class=\"fa fa-info-circle text-danger\"></i>  -->\n                          </div>\n                    </ng-template>\n                  </a>\n                  <h6 class=\"dropdown-header\">OTHERS</h6>\n                  <a *ngFor=\"let comp of (components.others | pipeLineFilter: filterString)\" [ngClass]=\"checkActiveComp == comp.ID_COMP || comp == selectComponent? 'active' : ''\"\n                    (click)=\"onSelectComponent(comp);onGetTemperature(comp);\" class=\"list-group-item list-group-item-action\">\n                    <div class=\"d-flex w-100 justify-content-between\" *ngIf=\"comp.ID_USER == 1; else kernellabel\">\n                      {{ comp.LABEL }}\n                      <i *ngIf=\"comp.COMP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                      <i *ngIf=\"comp.COMP_RELEASE == 6\" class=\"fa fa-lock text-secondary\"></i>\n                      <i *ngIf=\"comp.COMP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                      <i *ngIf=\"comp.COMP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                      <!-- <i class=\"fa fa-lock text-secondary\"></i>\n                            <i class=\"fa fa-info-circle text-danger\"></i>  -->\n                    </div>\n                    <ng-template #kernellabel>\n                        <div class=\"d-flex w-100 justify-content-between\">\n                            {{ comp.LABEL }} - {{ comp.USERNAM }}\n                            <i *ngIf=\"comp.COMP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 6\" class=\"fa fa-lock text-secondary\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                            <i *ngIf=\"comp.COMP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            <!-- <i class=\"fa fa-lock text-secondary\"></i>\n                                  <i class=\"fa fa-info-circle text-danger\"></i>  -->\n                          </div>\n                    </ng-template>\n                  </a>\n                </div>\n              </perfect-scrollbar>\n              <div class=\"card-footer text-center\">\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"modalAddComponent.show();onResetData();\">\n                  <i class=\"fa fa-plus\"></i> {{ 'Add'|translate }}</button>\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteComponent(selectComponent);\" [disabled]=\"selectComponent.ID_USER != dataComponent.ID_USER\"\n                  *ngIf=\"selectComponent && selectComponent.COMP_RELEASE != 6\">\n                  <i class=\"fa fa-trash-o\"></i> {{ 'Delete'|translate }}</button>\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"modalSaveAsComponent.show();\" *ngIf=\"selectComponent && selectComponent.COMP_RELEASE != 6\">\n                  <i class=\"fa fa-copy\"></i> {{ 'Save as'|translate }}</button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"refrestComponent();\">\n                  <i class=\"fa fa-refresh\"></i> {{ 'Refresh'|translate }}</button>\n              </div>\n            </div>\n            <div *ngIf=\"selectComponent && !checkHideInfo\">\n              <div class=\"card\" *ngIf=\"selectComponent && selectComponent.COMP_RELEASE != 6\">\n                <div class=\"card-header\">\n                  <strong>{{ 'STATUS'|translate }}</strong>\n                </div>\n                <div class=\"row card-status\">\n                  <div class=\"col\">\n                    <div class=\"col-md-2\" align=\"center\">\n                      <label class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\"  [value]=\"1\" [(ngModel)]=\"selectComponent.COMP_RELEASE\" \n                        [disabled]=\"selectComponent.COMP_RELEASE == 7\">{{ 'Draft'|translate }}\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\">\n                      <label class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\" [value]=\"2\" [(ngModel)]=\"selectComponent.COMP_RELEASE\" \n                        [disabled]=\"(selectComponent.COMP_GEN_STATUS != 1) || (selectComponent.COMP_RELEASE == 7)\">{{ 'Test'|translate }}\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\">\n                      <label class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\" [value]=\"3\" [(ngModel)]=\"selectComponent.COMP_RELEASE\" \n                        [disabled]=\"(selectComponent.COMP_GEN_STATUS != 1) || (selectComponent.COMP_RELEASE == 7)\">{{ 'Active'|translate }}\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"col-md-2\" align=\"center\">\n                      <label class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\"  [value]=\"4\" [(ngModel)]=\"selectComponent.COMP_RELEASE\" \n                        [disabled]=\"(selectComponent.COMP_GEN_STATUS != 1) || (selectComponent.COMP_RELEASE == 7)\">{{ 'Certified'|translate }}\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\">\n                      <label class=\"custom-control custom-radio\">\n                        <input type=\"radio\" class=\"custom-control-input\" name=\"statusComp\" [value]=\"9\" [(ngModel)]=\"selectComponent.COMP_RELEASE\"\n                        [disabled]=\"(selectComponent.COMP_GEN_STATUS != 1) || (selectComponent.COMP_RELEASE == 7)\">{{ 'Obsolete'|translate }}\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card\" *ngIf=\"selectComponent && selectComponent.COMP_RELEASE != 6\">\n                <div class=\"card-header\">\n                  <strong>{{ 'CALCULATION PARAMETER'|translate }}</strong>\n                </div>\n                <table class=\"table table-bordered table-sm mb-0\">\n                  <thead>\n                    <tr>\n                      <th style=\"vertical-align:middle;text-align:center\">{{ 'Temperature'|translate }}({{ temperatureSymbol }})</th>\n                      <th style=\"vertical-align:middle;text-align:center\">{{ 'Action'|translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <td colspan=\"2\">\n                      <perfect-scrollbar style=\"max-height: 150px;\">\n                        <table>\n                          <tr *ngFor=\"let field of fieldArray; let i = index\">\n                            <td align=\"center\" style=\"vertical-align:middle;text-align:center\">{{ field.temperature }}\n                              <!-- <input [(ngModel)]=\"field.temperature\" class=\"form-control\" type=\"text\" name=\"{{field.temperature}}\" /> -->\n                            </td>\n                            <td align=\"center\" width=\"10%\">\n                              <div style=\"margin-top:0.5em\">\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteFieldValue(i)\" ngbTooltip=\"Delete one temperature\">\n                                  <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                </button>\n                              </div>\n                            </td>\n                          </tr>\n                        </table>\n                      </perfect-scrollbar>\n                    </td>\n                    <tr>\n                      <td align=\"center\" style=\"vertical-align:middle\">\n                        <input type=\"text\" class=\"form-control col-md-6\" [(ngModel)]=\"newAttribute.temperature\">\n                      </td>\n                      <td align=\"center\">\n                        <div style=\"margin-top:0.5em\">\n                          <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addFieldValue()\" ngbTooltip=\"Add one temperature\">\n                            <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                          </button>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>{{ 'DESCRIPTION'|translate }}</strong>\n              </div>\n              <div class=\"card-body\" *ngIf=\"selectComponent && !checkHideInfo; else hideInfo\">\n                <div class=\"row\" *ngIf=\"dataComponent\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"name-component\">{{ 'Name'|translate }}</label>\n                      <div class=\"col-md-5\">\n                        <input type=\"text\" id=\"name-component\" name=\"name-component\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectComponent.LABEL\">\n                      </div>\n                      <label class=\"col-md-2 col-form-label\" for=\"version-component\">{{ 'Version'|translate }}</label>\n                      <div class=\"col-md-2\">\n                        <input type=\"text\" id=\"version-component\" name=\"version-component\" class=\"form-control form-control-sm\" placeholder=\"0.0\" [(ngModel)]=\"selectComponent.COMP_VERSION\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"comment-component\">{{ 'Comment'|translate }}</label>\n                      <div class=\"col-md-9\">\n                        <textarea type=\"text\" id=\"comment-component\" name=\"comment-component\" class=\"form-control\" [(ngModel)]=\"selectComponent.COMP_COMMENT\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-8 col-form-label\" for=\"text-input\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"caluclateFreeze\" (click)=\"checkDataComponent(selectComponent, 2);\"\n                          [ladda]=\"laddaIsFreeze\">\n                          <i class=\"icon-energy\"></i>&nbsp; {{ 'Freeze temperature'|translate }}</button>\n                      </label>\n                      <div class=\"col-md-4\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.FREEZE_TEMP\">\n                          <span class=\"input-group-addon\">\n                            <small>\n                            {{ temperatureSymbol }}  \n                            </small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Product family'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectComponent.CLASS_TYPE\" (change)=\"changCompFamily(selectComponent.CLASS_TYPE);\">\n                          <option [value]=\"0\">{{ 'Select a family'|translate }}</option>\n                          <option *ngFor=\"let family of dataComponent.productFamily\" [value]=\"family.ID_TRANSLATION\">\n                            {{ family.LABEL|translate }}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Sub family'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectComponent.SUB_FAMILY\">\n                          <option [value]=\"0\">{{ 'Select a sub family'|translate }}</option>\n                          <option *ngFor=\"let sub of dataComponent.subFamily\" [value]=\"sub.ID_TRANSLATION\">\n                            {{ sub.LABEL|translate}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Product nature'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectComponent.COMP_NATURE\">\n                          <option *ngFor=\"let nature of dataComponent.productNature\" [value]=\"nature.ID_TRANSLATION\">\n                            {{ nature.LABEL|translate}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Conductivity'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectComponent.COND_DENS_MODE\">\n                          <option [value]=0>{{ '% product weigth'|translate }}</option>\n                          <option [value]=1>{{ 'porosity'|translate }}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <hr>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Water'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.WATER\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Protein & dry material'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.PROTID\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Lipid'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.LIPID\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Glucid'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.GLUCID\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Salt'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.SALT\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Air (volume)'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.AIR\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Unfreezable water'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"selectComponent.NON_FROZEN_WATER\">\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Fat type'|translate }}</label>\n                      <div class=\"col-md-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectComponent.FAT_TYPE\">\n                          <option *ngFor=\"let fat of dataComponent.FatType\" [value]=\"fat.ID_TRANSLATION\">\n                            {{ fat.LABEL|translate}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-6\"></div>\n                      <div class=\"col-md-6\">\n                        <div class=\"input-group\" align=\"center\">\n                          <input type=\"text\" id=\"total\" name=\"total\" \n                            [value]=\"((selectComponent.WATER) -- (selectComponent.PROTID) -- (selectComponent.LIPID) -- (selectComponent.GLUCID) --\n                              (selectComponent.SALT) -- (0.01205 * selectComponent.AIR))\"\n                            class=\"form-control\" placeholder=\"0.00\" disabled>\n                          <span class=\"input-group-addon\">\n                            <small>%</small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <ng-template #hideInfo>\n                <div class=\"card-body\">\n                  <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n                    Please select a component from the list before process.\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"row col-md-12\" *ngIf=\"selectComponent && !checkHideInfo\">\n            <div class=\"btn-component text-center\" *ngIf=\"selectComponent && selectComponent.COMP_RELEASE != 6\">\n              <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"checkBackStudy == 1\" (click)=\"comeBackStudy()\">\n                <i class=\"fa fa-chevron-circle-left\"></i>&nbsp; {{ 'Come back to study'|translate }}\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\" id=\"calulationRun\" (click)=\"checkDataComponent(selectComponent, 3);\"\n               [disabled]=\"selectComponent.ID_USER != dataComponent.ID_USER\" [ladda]=\"laddaIsCalculating\">\n                <i class=\"icon-energy\"></i>&nbsp; {{ 'Calculate'|translate }}</button>\n              <!-- <button type=\"button\" class=\"btn btn-success\">\n                <i></i> {{ 'Data generated'|translate}}</button> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"btn-component text-center\" *ngIf=\"selectComponent && selectComponent.COMP_RELEASE == 6\">\n          <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"checkBackStudy == 1\" (click)=\"comBackStudyNoAdd();\">\n            <i class=\"fa fa-chevron-circle-left\"></i>&nbsp; {{ 'Come back to study'|translate }}\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" id=\"awakeCalculate\" (click)=\"awakeComponent(selectComponent, 3);\">\n            <i class=\"icon-energy\"></i>&nbsp; {{ 'Awake'|translate }}</button>\n        </div>\n      </div>\n      <!-- End Component -->\n      <!-- Generate data -->\n      <div style=\"margin-top:10px;display:none\" id=\"page-datagenerated-component\" *ngIf=\"!isLoading\">\n        <table class=\"table table-bordered table-sm mb-0\" *ngIf=\"compenths\">\n          <tr>\n            <td align=\"center\"></td>\n            <td align=\"center\">{{ 'Temperature'|translate }} ({{ temperatureSymbol }})</td>\n            <td align=\"center\">{{ 'Enthalpy'|translate }} ({{ enthalpySymbol }})</td>\n            <td align=\"center\">{{ 'Conductivity'|translate }} ({{ conductivitySymbol }})</td>\n            <td align=\"center\">{{ 'Density'|translate }} ({{ densitySymbol }})</td>\n          </tr>\n          <tr *ngFor=\"let compenth of compenths\" class=\"text-center nowrap\">\n            <td>\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"getElementCompenth(compenth);\" ngbTooltip=\"Edit one compenth\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n              </button>\n            </td>\n            <td>{{ compenth.COMPTEMP }}</td>\n            <td>{{ compenth.COMPENTH }}</td>\n            <td>{{ compenth.COMPCOND }}</td>\n            <td>{{ compenth.COMPDENS }}</td>\n          </tr>\n        </table>\n      </div>\n      <!-- End Generate data -->\n    </div>\n  </div>\n</div>\n\n<!-- Model new component -->\n<div bsModal class=\"modal fade\" #modalAddComponent=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\" style=\"max-width:80%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header \">\n        <strong>{{ 'Component - New'|translate }}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalAddComponent.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body row\">\n        <div class=\"card-body\" *ngIf=\"dataComponent\">\n          <div style=\"margin-top:10px;display:block\" id=\"page-new-component\" *ngIf=\"dataComponent\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>{{ 'DESCRIPTION'|translate }}</strong>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row col-md-12\" style=\"margin-top: 10px;\">\n                  <div class=\"col-md-7\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"name-component\">{{ 'Name'|translate }}</label>\n                      <div class=\"col-md-5\">\n                        <input type=\"text\" id=\"name-component\" name=\"name-component\" class=\"form-control\" [(ngModel)]=\"dataComponent.COMP_NAME\">\n                      </div>\n                      <label class=\"col-md-2 col-form-label\" for=\"version-component\">{{ 'Version'|translate }}</label>\n                      <div class=\"col-md-2\">\n                        <input type=\"text\" id=\"version-component\" name=\"version-component\" class=\"form-control\" placeholder=\"0.0\" [(ngModel)]=\"dataComponent.COMP_VERSION\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"comment-component\">{{ 'Comment'|translate }}</label>\n                      <div class=\"col-md-9\">\n                        <textarea type=\"text\" id=\"comment-component\" name=\"comment-component\" class=\"form-control\" [(ngModel)]=\"dataComponent.COMP_COMMENT\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-8 col-form-label\" for=\"text-input\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"calcbutton\" (click)=\"checkDataComponent(dataComponent, 1);\" [ladda]=\"laddaIsCalculating\">\n                          <i class=\"icon-energy\"></i>&nbsp; {{ 'Freeze temperature'|translate }}</button>\n                      </label>\n                      <div class=\"col-md-4\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.FREEZE_TEMP\">\n                          <span class=\"input-group-addon\">\n                            <small>\n                              {{ temperatureSymbol }}\n                            </small>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Product family'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"dataComponent.PRODUCT_TYPE\" (change)=\"changCompFamily(dataComponent.PRODUCT_TYPE);\">\n                          <option [value]=\"0\">{{ 'Select a family'|translate }}</option>\n                          <option *ngFor=\"let family of dataComponent.productFamily\" [value]=\"family.ID_TRANSLATION\">\n                            {{ family.LABEL|translate }}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Sub family'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"dataComponent.SUB_TYPE\">\n                          <option [value]=\"0\">{{ 'Select a sub family'|translate }}</option>\n                          <option *ngFor=\"let sub of dataComponent.subFamily\" [value]=\"sub.ID_TRANSLATION\">\n                            {{ sub.LABEL|translate}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Product nature'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"dataComponent.NATURE_TYPE\">\n                          <option *ngFor=\"let nature of dataComponent.productNature\" [value]=\"nature.ID_TRANSLATION\">\n                            {{ nature.LABEL|translate}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row form-group\">\n                      <label class=\"col-md-4 col-form-label\">{{ 'Conductivity'|translate }}</label>\n                      <div class=\"col-md-8\">\n                        <select class=\"form-control\" [(ngModel)]=\"dataComponent.CONDUCT_TYPE\">\n                          <option [value]=0>{{ '% product weigth'|translate }}</option>\n                          <option [value]=1>{{ 'porosity'|translate }}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div class=\"row col-md-12\">\n                      <div class=\"col-md-6\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Water'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.WATER\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Protein & dry material'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.PROTID\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Lipid'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.LIPID\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Glucid'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.GLUCID\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Salt'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.SALT\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Air (volume)'|translate }}</label>\n                              <div class=\"col-md-6\">\n                                <div class=\"input-group\">\n                                  <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.AIR\">\n                                  <span class=\"input-group-addon\">\n                                    <small>%</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Unfreezable water'|translate }}</label>\n                          <div class=\"col-md-6\">\n                            <div class=\"input-group\">\n                              <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\" [(ngModel)]=\"dataComponent.NON_FROZEN_WATER\">\n                              <span class=\"input-group-addon\">\n                                <small>%</small>\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-6 col-form-label\" for=\"text-input\"></label>\n                          <div class=\"col-md-6\">\n                          </div>\n                        </div>\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Fat type'|translate }}</label>\n                          <div class=\"col-md-6\">\n                            <select class=\"form-control\" [(ngModel)]=\"dataComponent.FATTYPE\">\n                              <option *ngFor=\"let fat of dataComponent.FatType\" [value]=\"fat.ID_TRANSLATION\">\n                                {{ fat.LABEL|translate}}\n                              </option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-6 col-form-label\" for=\"text-input\"></label>\n                          <div class=\"col-md-6\">\n                          </div>\n                        </div>\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-6 col-form-label\" for=\"text-input\"></label>\n                          <div class=\"col-md-6\">\n                          </div>\n                        </div>\n                        <div class=\"form-group row\">\n                          <div class=\"col-md-6\"></div>\n                          <div class=\"col-md-6\">\n                            <div class=\"input-group\" align=\"center\">\n                              <input type=\"text\" id=\"total\" name=\"total\" class=\"form-control\" placeholder=\"0.00\" disabled\n                              [value]=\"((dataComponent.WATER) -- (dataComponent.PROTID) -- (dataComponent.LIPID) -- (dataComponent.GLUCID) --(dataComponent.SALT) -- (0.01205 * dataComponent.AIR))\" >\n                              <span class=\"input-group-addon\">\n                                <small>%</small>\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>{{ 'STATUS'|translate }}</strong>\n                  </div>\n                  <div class=\"row card-status\">\n                    <div class=\"col\">\n                      <div class=\"col-md-2\" align=\"center\">\n                        <label class=\"custom-control custom-radio\">\n                          <input type=\"radio\" class=\"custom-control-input\" name=\"statusCompNew\" [(ngModel)]=\"dataComponent.release\"\n                            value=\"1\">{{ 'Draft'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </div>\n                      <div class=\"col-md-2\" align=\"center\">\n                        <label class=\"custom-control custom-radio\">\n                          <input type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"statusCompNew\" [(ngModel)]=\"dataComponent.release\" disabled>{{ 'Test'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </div>\n                      <div class=\"col-md-2\" align=\"center\">\n                        <label class=\"custom-control custom-radio\">\n                          <input type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"statusCompNew\" [(ngModel)]=\"dataComponent.release\" disabled>{{ 'Active'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col-md-2\" align=\"center\">\n                        <label class=\"custom-control custom-radio\">\n                          <input type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"statusCompNew\" [(ngModel)]=\"dataComponent.release\" disabled>{{ 'Certified'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </div>\n                      <div class=\"col-md-2\" align=\"center\">\n                        <label class=\"custom-control custom-radio\">\n                          <input type=\"radio\" class=\"custom-control-input\" value=\"9\" name=\"statusCompNew\" [(ngModel)]=\"dataComponent.release\" disabled>{{ 'Obsolete'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>{{ 'CALCULATION PARAMETER'|translate }}</strong>\n                  </div>\n                  <div class=\"card-body\">\n                    <table class=\"table table-bordered table-sm mb-0\">\n                      <tr>\n                        <th style=\"vertical-align:middle;text-align:center\">{{ 'Temperature'|translate }}({{ temperatureSymbol }})</th>\n                        <th style=\"vertical-align:middle;text-align:center\">{{ 'Action'|translate }}</th>\n                      </tr>\n                      <!-- <perfect-scrollbar style=\"max-height: 150px;display: inline;\">   -->\n                      <tr *ngFor=\"let field of fieldArray; let i = index\">\n                        <td align=\"center\" style=\"vertical-align:middle;text-align:center\">{{ field.temperature }}\n                          <!-- <input [(ngModel)]=\"field.temperature\" class=\"form-control\" type=\"text\" name=\"{{field.temperature}}\" /> -->\n                        </td>\n                        <td align=\"center\" width=\"10%\">\n                          <div style=\"margin-top:0.5em\">\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteFieldValue(i)\">\n                              <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                            </button>\n                          </div>\n                        </td>\n                      </tr>\n                      <!-- </perfect-scrollbar> -->\n                      <tr>\n                        <td align=\"center\" style=\"vertical-align:middle\">\n                          <input type=\"text\" class=\"form-control col-md-6\" [(ngModel)]=\"newAttribute.temperature\">\n                        </td>\n                        <td align=\"center\">\n                          <div style=\"margin-top:0.5em\">\n                            <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addFieldValue()\">\n                              <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                            </button>\n                          </div>\n                        </td>\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalAddComponent.hide()\">{{ 'Cancel'|translate }}</button>\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"checkDataComponent(dataComponent, 0)\">\n                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{ 'Save'|translate }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End model new component -->\n\n<!-- Model Freezetemper Mode -->\n<div class=\"modal fade\" bsModal #modalFreezetemper=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div id=\"showcalculateloading\"></div>\n    <div class=\"modal-content\" *ngIf=\"!isLoading\">\n      <div class=\"modal-header\">\n        <strong class=\"modal-title pull-left\">{{ 'Freeze temperature' | translate }}</strong>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalFreezetemper.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"text-align:center\">\n        <div class=\"freeze-com\">\n          <strong class=\"modal-title txt-component\">{{ 'Please confirm freeze calculation' | translate }}</strong>\n        </div>\n        <div class=\"btn-estimation\">\n          <button class=\"btn btn-secondary btn-lg\" (click)=\"modalFreezetemper.hide()\">Cancel</button>\n          <button class=\"btn btn-primary btn-lg\" style=\"margin-left:20px;\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end Model Freezetemper Mode -->\n<!-- Start Save as -->\n<div bsModal class=\"modal fade\" #modalSaveAsComponent=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n              {{ 'Save Component As'|translate }}\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalSaveAsComponent.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body row\" *ngIf=\"dataComponent && selectComponent\">\n          <div class=\"col-md-12\">\n              <div class=\"form-group row\">\n                  <div class=\"col-md-3\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Name'|translate }}</label>\n                  <div class=\"col-md-4\">\n                      <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"dataComponent.COMP_NAME_NEW\">\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"form-group row\">\n                      <div class=\"col-md-3\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Version'|translate }}</label>\n                  <div class=\"col-md-4\">\n                      <input type=\"text\" id=\"version\" name=\"version\" class=\"form-control\" placeholder=\"0.0\" [(ngModel)]=\"dataComponent.COMP_VERSION_NEW\">\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalSaveAsComponent.hide()\">{{ 'Cancel'|translate }}</button>\n        <button class=\"btn btn-success\" (click)=\"saveAsComponent(selectComponent);\"><i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End Save as-->\n\n<!-- Start generate data -->\n<div bsModal class=\"modal fade\" #displayCTComponent=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>{{'Modify'|translate}}</strong>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"displayCTComponent.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" *ngIf=\"dataCompenth\">\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'Temperature:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPTEMP\" class=\"form-control\" [(ngModel)]=\"dataCompenth.COMPTEMP\" disabled>\n                <span class=\"input-group-addon\">{{ temperatureSymbol }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'Enthalpy:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPENTH\" class=\"form-control\" [(ngModel)]=\"dataCompenth.COMPENTH\">\n                <span class=\"input-group-addon\">{{ enthalpySymbol }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'Conductivity:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPCOND\" class=\"form-control\" [(ngModel)]=\"dataCompenth.COMPCOND\">\n                <span class=\"input-group-addon\">{{ conductivitySymbol }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'Density:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPDENS\" class=\"form-control\" [(ngModel)]=\"dataCompenth.COMPDENS\">\n                <span class=\"input-group-addon\">{{ densitySymbol }}</span>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"displayCTComponent.hide()\">{{ 'Cancel'|translate }}</button>\n        <button class=\"btn btn-success\" (click)=\"updateCompenth(dataCompenth)\" *ngIf=\"dataCompenth\">\n          <i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End generate data -->\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/references/component/component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-status {\n  margin: auto;\n  padding-top: 25px; }\n\n#study-list-card .list-group .list-group-item {\n  border-left: none;\n  border-right: none;\n  cursor: pointer; }\n\n#study-list-card .list-group .list-group-item:first-child {\n  border-top: none !important; }\n\n#study-list-card .list-group .list-group-item:last-child {\n  border-bottom: none !important; }\n\n#study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n\n#study-search-box-container {\n  position: absolute;\n  top: 8px;\n  right: 12px; }\n\n.txt-component {\n  color: #FF6633;\n  padding: 10px;\n  text-transform: uppercase; }\n\n.freeze-com {\n  padding-bottom: 10px; }\n\n.study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n\n.btn-component {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/references/component/component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services_referencedata_service__ = __webpack_require__("../../../../../src/app/api/services/referencedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
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












var ComponentFilterPipe = (function () {
    function ComponentFilterPipe() {
    }
    ComponentFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.LABEL.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    ComponentFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ComponentFilter' })
    ], ComponentFilterPipe);
    return ComponentFilterPipe;
}());

var ComponentComponent = (function () {
    function ComponentComponent(api, apiReference, router, toastr, translate) {
        this.api = api;
        this.apiReference = apiReference;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.activePageComponent = '';
        this.newAttribute = {};
        this.isLoading = false;
        this.filterString = '';
        this.laddaIsCalculating = false;
        this.laddaIsFreeze = false;
        this.total = 0;
        this.checkHideInfo = false;
        this.checkActiveComp = 0;
        this.temperatureSymbol = '';
        this.timeSymbol = '';
        this.meshesSymbol = '';
        this.enthalpySymbol = '';
        this.conductivitySymbol = '';
        this.densitySymbol = '';
        this.checkBackStudy = 0;
        this.idCompInput = 0;
        this.checkCalculate = false;
        localStorage.setItem('CompCurr', '');
        this.userLogon = JSON.parse(localStorage.getItem('user'));
    }
    ComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idCompInput2 = localStorage.getItem('IdCompInput');
        if (idCompInput2 !== 'null') {
            this.params = JSON.parse(localStorage.getItem('paramsCompInput'));
            this.idCompInput = Number(idCompInput2);
            this.apiReference.getComponentById(Number(idCompInput2)).subscribe(function (data) {
                localStorage.setItem('CompCurr', JSON.stringify(data));
                _this.onGetTemperature(data);
            }, function (err) {
                console.log(err);
            }, function () {
                localStorage.setItem('IdCompInput', null);
                _this.checkBackStudy = 1;
            });
        }
        this.activePageComponent = 'new';
        this.isLoading = true;
        this.getDataComponent(0);
        this.getMyComponent();
        // this.generatedData = JSON.parse(localStorage.getItem('generatedData'));
        if (localStorage.getItem('study')) {
            this.study = JSON.parse(localStorage.getItem('study'));
        }
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (Number(this.listUnits[i].TYPE_UNIT) === 8) {
                    this.temperatureSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 5) {
                    this.timeSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 20) {
                    this.meshesSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 9) {
                    this.enthalpySymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 10) {
                    this.conductivitySymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 7) {
                    this.densitySymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
    };
    ComponentComponent.prototype.openNewComponent = function () {
        this.hideAllPageComponent();
        var newC = document.getElementById('page-new-component');
        this.activePageComponent = 'new';
        newC.style.display = 'block';
    };
    ComponentComponent.prototype.openDataGenerateComponent = function () {
        this.hideAllPageComponent();
        var dataGen = document.getElementById('page-datagenerated-component');
        dataGen.style.display = 'block';
        this.activePageComponent = 'gen';
    };
    ComponentComponent.prototype.hideAllPageComponent = function () {
        var newC = document.getElementById('page-new-component');
        var dataGen = document.getElementById('page-datagenerated-component');
        newC.style.display = 'none';
        dataGen.style.display = 'none';
    };
    ComponentComponent.prototype.getDataComponent = function (compfamily) {
        var _this = this;
        this.apiReference.getDataComponent(compfamily).subscribe(function (data) {
            // console.log(data.release);
            _this.dataComponent = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.changCompFamily = function (compfamily) {
        var _this = this;
        this.apiReference.getDataSubFamily(compfamily).subscribe(function (data) {
            _this.dataComponent.subFamily = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.getMyComponent = function () {
        var _this = this;
        this.isLoading = true;
        this.apiReference.getMyComponent().subscribe(function (data) {
            for (var i = 0; i < data.others.length; i++) {
                if (Number(data.others[i].COMP_RELEASE) === 7) {
                    data.others[i].LABEL = data.others[i].LABEL + ' - v' + data.others[i].COMP_VERSION + ' - (@)';
                }
                else {
                    data.others[i].LABEL = data.others[i].LABEL + ' - v' + data.others[i].COMP_VERSION;
                }
            }
            _this.components = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
            if (localStorage.getItem('CompCurr') !== '') {
                var compCurr = JSON.parse(localStorage.getItem('CompCurr'));
                _this.checkActiveComp = Number(compCurr.ID_COMP);
                _this.selectComponent = compCurr;
                // console.log(this.selectComponent);
            }
        });
    };
    ComponentComponent.prototype.onSelectComponent = function (comp) {
        localStorage.setItem('CompCurr', '');
        this.checkActiveComp = 0;
        this.selectComponent = comp;
        this.checkHideInfo = false;
    };
    ComponentComponent.prototype.onGetTemperature = function (comp) {
        var _this = this;
        this.apiReference.getTemperaturesByIdComp(comp.ID_COMP).subscribe(function (data) {
            _this.fieldArray = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.deleteComponent = function (comp) {
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
                _this.apiReference.deleteComponent(comp.ID_COMP).subscribe(function (response) {
                    if (response === 1) {
                        _this.toastr.success(_this.translate.instant('Delete component'), 'successfully');
                        _this.checkHideInfo = true;
                    }
                    else {
                        _this.toastr.error(_this.translate.instant('Delete component'), 'Error');
                    }
                }, function (err) {
                    console.log(err);
                }, function () {
                    _this.refrestComponent();
                });
            }
        });
    };
    ComponentComponent.prototype.onResetData = function () {
        this.fieldArray = [];
    };
    ComponentComponent.prototype.addFieldValue = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.newAttribute.temperature) || String(this.newAttribute.temperature) === ''
            || isNaN(this.newAttribute.temperature)) {
            this.toastr.error(this.translate.instant('Please specify Temperature'), 'Error');
            return;
        }
        for (var i = 0; i < this.fieldArray.length; i++) {
            var element = this.fieldArray[i].temperature;
            if (Number(element) === Number(this.newAttribute.temperature)) {
                this.toastr.error(this.translate.instant('Temperature already exists !'), 'Error');
                return;
            }
        }
        this.apiReference.checkTemperature(this.newAttribute.temperature).subscribe(function (res) {
            if (res === 1) {
                _this.newAttribute.temperature = Number(_this.newAttribute.temperature).toFixed(2);
                _this.fieldArray.push(_this.newAttribute);
                _this.newAttribute = {};
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ComponentComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    ComponentComponent.prototype.checkDataComponent = function (comp, check) {
        var _this = this;
        if (check === 2 || check === 3) {
            comp.COMP_NAME = comp.LABEL;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.COMP_NAME) || String(comp.COMP_NAME) === ''
            || Object(__WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(comp.COMP_NAME)) {
            this.toastr.error(this.translate.instant('Please specify Component name'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.COMP_VERSION) || String(comp.COMP_VERSION) === ''
            || isNaN(comp.COMP_VERSION)) {
            this.toastr.error(this.translate.instant('Please specify Version'), 'Error');
            return;
        }
        if (Number(comp.PRODUCT_TYPE) === 0) {
            this.toastr.error(this.translate.instant('Please select the component`s family'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.FREEZE_TEMP) || String(comp.FREEZE_TEMP) === ''
            || isNaN(comp.FREEZE_TEMP)) {
            this.toastr.error(this.translate.instant('Please specify Freeze temperature'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.WATER) || String(comp.WATER) === ''
            || isNaN(comp.WATER)) {
            this.toastr.error(this.translate.instant('Please specify Water'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.PROTID) || String(comp.PROTID) === ''
            || isNaN(comp.PROTID)) {
            this.toastr.error(this.translate.instant('Please specify Protein & dry material	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.LIPID) || String(comp.LIPID) === ''
            || isNaN(comp.LIPID)) {
            this.toastr.error(this.translate.instant('Please specify Lipid	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.GLUCID) || String(comp.GLUCID) === ''
            || isNaN(comp.GLUCID)) {
            this.toastr.error(this.translate.instant('Please specify Glucid	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.SALT) || String(comp.SALT) === ''
            || isNaN(comp.SALT)) {
            this.toastr.error(this.translate.instant('Please specify Salt	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.AIR) || String(comp.AIR) === ''
            || isNaN(comp.AIR)) {
            this.toastr.error(this.translate.instant('Please specify Air (volume)	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(comp.NON_FROZEN_WATER) || String(comp.NON_FROZEN_WATER) === ''
            || isNaN(comp.NON_FROZEN_WATER)) {
            this.toastr.error(this.translate.instant('Please specify Unfreezable water	'), 'Error');
            return;
        }
        if (check === 3) {
            if (this.fieldArray.length <= 0) {
                this.toastr.error(this.translate.instant('Please enter some temperature	'), 'Error');
                return;
            }
        }
        this.apiReference.checkSaveDataComponent({
            COMP_NAME: comp.COMP_NAME,
            COMP_VERSION: comp.COMP_VERSION,
            FREEZE_TEMP: comp.FREEZE_TEMP,
            WATER: comp.WATER,
            PROTID: comp.PROTID,
            LIPID: comp.LIPID,
            GLUCID: comp.GLUCID,
            SALT: comp.SALT,
            AIR: comp.AIR,
            NON_FROZEN_WATER: comp.NON_FROZEN_WATER,
            check: check
        }).subscribe(function (res) {
            if (res === 1) {
                if (check === 0) {
                    _this.saveDataComponent();
                }
                if (check === 1) {
                    _this.runCalculateFreeze();
                }
                if (check === 2) {
                    if (Number(_this.selectComponent.COMP_RELEASE) === 6) {
                        _this.toastr.error(_this.translate.instant('Please awake component!'), 'Error');
                        return;
                    }
                    _this.runSelectCalculateFreeze(_this.selectComponent);
                }
                if (check === 3) {
                    _this.runCalculate(_this.selectComponent);
                    if (_this.checkBackStudy === 1) {
                        if (_this.idCompInput !== 0) {
                            _this.api.appendElementsToProduct(_this.params).subscribe(function (data) {
                                // code
                            });
                        }
                    }
                }
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.saveDataComponent = function () {
        var _this = this;
        this.apiReference.saveDataComponent({
            PRODUCT_TYPE: this.dataComponent.PRODUCT_TYPE,
            SUB_TYPE: this.dataComponent.SUB_TYPE,
            NATURE_TYPE: this.dataComponent.NATURE_TYPE,
            CONDUCT_TYPE: this.dataComponent.CONDUCT_TYPE,
            FATTYPE: this.dataComponent.FATTYPE,
            COMP_NAME: this.dataComponent.COMP_NAME,
            WATER: this.dataComponent.WATER,
            AIR: this.dataComponent.AIR,
            CLASS_TYPE: this.dataComponent.CLASS_TYPE,
            COMP_COMMENT: this.dataComponent.COMP_COMMENT,
            COMP_VERSION: this.dataComponent.COMP_VERSION,
            FREEZE_TEMP: this.dataComponent.FREEZE_TEMP,
            PROTID: this.dataComponent.PROTID,
            LIPID: this.dataComponent.LIPID,
            GLUCID: this.dataComponent.GLUCID,
            SALT: this.dataComponent.SALT,
            ID_COMP: this.dataComponent.ID_COMP,
            NON_FROZEN_WATER: this.dataComponent.NON_FROZEN_WATER,
            release: this.dataComponent.release,
            Temperatures: this.fieldArray,
        }).subscribe(function (response) {
            var success = true;
            // console.log(response);
            if (response === -2) {
                success = false;
                _this.toastr.error(_this.translate.instant('Create component'), _this.translate.instant('Please, select the components family!'));
                return;
            }
            if (response === -3) {
                success = false;
                _this.toastr.error(_this.translate.instant('Create component'), _this.translate.instant('Component name can not be null!'));
                return;
            }
            if (response === -4) {
                success = false;
                _this.toastr.error(_this.translate.instant('Create component'), _this.translate.instant('Name and version already in use!'));
                return;
            }
            if (success) {
                localStorage.setItem('CompCurr', JSON.stringify(response));
                _this.toastr.success(_this.translate.instant('Create component'), 'successfully');
                _this.modalAddComponent.hide();
                _this.refrestComponent();
                _this.checkHideInfo = false;
                _this.getDataComponent(0);
            }
            else {
                _this.toastr.error(_this.translate.instant('Create component'), 'Error');
            }
        }, function (err) {
        }, function () {
        });
    };
    ComponentComponent.prototype.saveAsComponent = function (comp) {
        var _this = this;
        this.apiReference.saveDataComponent({
            COMP_NAME_NEW: this.dataComponent.COMP_NAME_NEW,
            COMP_VERSION_NEW: this.dataComponent.COMP_VERSION_NEW,
            PRODUCT_TYPE: comp.CLASS_TYPE,
            SUB_TYPE: comp.SUB_FAMILY,
            NATURE_TYPE: comp.COMP_NATURE,
            CONDUCT_TYPE: comp.COND_DENS_MODE,
            FATTYPE: comp.FAT_TYPE,
            COMP_NAME: comp.LABEL,
            AIR: comp.AIR,
            WATER: comp.WATER,
            CLASS_TYPE: comp.CLASS_TYPE,
            COMP_COMMENT: comp.COMP_COMMENT,
            COMP_VERSION: comp.COMP_VERSION,
            FREEZE_TEMP: comp.FREEZE_TEMP,
            PROTID: comp.PROTID,
            ID_COMP: comp.ID_COMP,
            LIPID: comp.LIPID,
            GLUCID: comp.GLUCID,
            SALT: comp.SALT,
            NON_FROZEN_WATER: comp.NON_FROZEN_WATER,
            release: this.dataComponent.release,
            COMP_RELEASE: comp.COMP_RELEASE,
            Temperatures: this.fieldArray,
        }).subscribe(function (response) {
            var success = true;
            if (response === -2) {
                success = false;
                _this.toastr.error(_this.translate.instant('Save as'), _this.translate.instant('Please, select the components family!'));
                return;
            }
            if (response === -3) {
                success = false;
                _this.toastr.error(_this.translate.instant('Save as'), _this.translate.instant('Component name can not be null!'));
                return;
            }
            if (response === -4) {
                success = false;
                _this.toastr.error(_this.translate.instant('Save as'), _this.translate.instant('Name and version already in use!'));
                return;
            }
            if (success) {
                localStorage.setItem('CompCurr', JSON.stringify(response));
                _this.toastr.success(_this.translate.instant('Save as component'), 'successfully');
                _this.modalSaveAsComponent.hide();
                _this.refrestComponent();
                _this.checkHideInfo = false;
                _this.dataComponent.COMP_NAME_NEW = '';
                _this.dataComponent.COMP_VERSION_NEW = 0;
            }
            else {
                _this.toastr.error(_this.translate.instant('Save as component'), 'Error');
            }
        }, function (err) {
        }, function () {
        });
    };
    ComponentComponent.prototype.getGeneratedData = function (comp) {
        var _this = this;
        this.apiReference.getCompenthsByIdComp(comp.ID_COMP).subscribe(function (data) {
            // console.log(data);
            _this.compenths = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.getElementCompenth = function (compenth) {
        var _this = this;
        this.apiReference.getCompenthById(compenth.ID_COMPENTH).subscribe(function (data) {
            data.ID_COMP = Number(data.ID_COMP);
            _this.dataCompenth = data;
            _this.displayCTComponent.show();
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ComponentComponent.prototype.refreshCompenth = function (id) {
        var _this = this;
        this.apiReference.getCompenthsByIdComp(id).subscribe(function (data) {
            _this.compenths = data;
        });
    };
    ComponentComponent.prototype.updateCompenth = function (compenth) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.dataCompenth.COMPENTH) || String(this.dataCompenth.COMPENTH) === ''
            || isNaN(this.dataCompenth.COMPENTH)) {
            this.toastr.error(this.translate.instant('Please specify Enthalpy	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.dataCompenth.COMPCOND) || String(this.dataCompenth.COMPCOND) === ''
            || isNaN(this.dataCompenth.COMPCOND)) {
            this.toastr.error(this.translate.instant('Please specify Conductivity	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.dataCompenth.COMPDENS) || String(this.dataCompenth.COMPDENS) === ''
            || isNaN(this.dataCompenth.COMPDENS)) {
            this.toastr.error(this.translate.instant('Please specify Density	'), 'Error');
            return;
        }
        this.apiReference.updateCompenth({
            ID_COMPENTH: this.dataCompenth.ID_COMPENTH,
            ID_COMP: Number(this.dataCompenth.ID_COMP),
            COMPTEMP: this.dataCompenth.COMPTEMP,
            COMPENTH: this.dataCompenth.COMPENTH,
            COMPCOND: this.dataCompenth.COMPCOND,
            COMPDENS: this.dataCompenth.COMPDENS,
        }).subscribe(function (response) {
            if (response === 1) {
                _this.toastr.success('update compenth', 'successfully');
                _this.refreshCompenth(Number(_this.dataCompenth.ID_COMP));
                _this.displayCTComponent.hide();
            }
            else {
                _this.toastr.error(_this.translate.instant('update compenth'), 'ERROR');
            }
        });
    };
    ComponentComponent.prototype.awakeComponent = function (comp, type) {
        var _this = this;
        this.apiReference.saveDataComponent({
            COMP_NAME_NEW: this.dataComponent.COMP_NAME_NEW,
            COMP_VERSION_NEW: this.dataComponent.COMP_VERSION_NEW,
            PRODUCT_TYPE: comp.CLASS_TYPE,
            SUB_TYPE: comp.SUB_FAMILY,
            NATURE_TYPE: comp.COMP_NATURE,
            CONDUCT_TYPE: comp.COND_DENS_MODE,
            FATTYPE: comp.FAT_TYPE,
            COMP_NAME: comp.LABEL,
            AIR: comp.AIR,
            WATER: comp.WATER,
            CLASS_TYPE: comp.CLASS_TYPE,
            COMP_COMMENT: comp.COMP_COMMENT,
            COMP_VERSION: comp.COMP_VERSION,
            FREEZE_TEMP: comp.FREEZE_TEMP,
            PROTID: comp.PROTID,
            LIPID: comp.LIPID,
            GLUCID: comp.GLUCID,
            ID_COMP: comp.ID_COMP,
            SALT: comp.SALT,
            NON_FROZEN_WATER: comp.NON_FROZEN_WATER,
            release: this.dataComponent.release,
            Temperatures: this.fieldArray,
            TYPE_COMP: type
        }).subscribe(function (response) {
            var success = true;
            if (response === -2) {
                success = false;
                _this.toastr.error(_this.translate.instant('Awake'), _this.translate.instant('Please, select the components family!'));
                return;
            }
            if (response === -3) {
                success = false;
                _this.toastr.error(_this.translate.instant('Awake'), _this.translate.instant('Component name can not be null!'));
                return;
            }
            if (response === -4) {
                success = false;
                _this.toastr.error(_this.translate.instant('Awake'), _this.translate.instant('Name and version already in use!'));
                return;
            }
            if (success) {
                if (_this.params) {
                    _this.params.componentId = response.ID_COMP;
                }
                localStorage.setItem('CompCurr', JSON.stringify(response));
                _this.toastr.success(_this.translate.instant('Awake component'), 'successfully');
                _this.refrestComponent();
                _this.checkHideInfo = false;
            }
            else {
                _this.toastr.error(_this.translate.instant('Awake component'), 'Error');
            }
        }, function (err) {
        }, function () {
        });
    };
    ComponentComponent.prototype.refrestComponent = function () {
        this.getMyComponent();
    };
    ComponentComponent.prototype.runCalculateFreeze = function () {
        var _this = this;
        this.laddaIsFreeze = true;
        this.apiReference.calculateFreeze({
            PRODUCT_TYPE: this.dataComponent.PRODUCT_TYPE,
            SUB_TYPE: this.dataComponent.SUB_TYPE,
            NATURE_TYPE: this.dataComponent.NATURE_TYPE,
            CONDUCT_TYPE: this.dataComponent.CONDUCT_TYPE,
            FATTYPE: this.dataComponent.FATTYPE,
            COMP_NAME: this.dataComponent.COMP_NAME,
            AIR: this.dataComponent.AIR,
            CLASS_TYPE: this.dataComponent.CLASS_TYPE,
            COMP_COMMENT: this.dataComponent.COMP_COMMENT,
            COMP_VERSION: this.dataComponent.COMP_VERSION,
            FREEZE_TEMP: this.dataComponent.FREEZE_TEMP,
            WATER: this.dataComponent.WATER,
            PROTID: this.dataComponent.PROTID,
            LIPID: this.dataComponent.LIPID,
            GLUCID: this.dataComponent.GLUCID,
            SALT: this.dataComponent.SALT,
            NON_FROZEN_WATER: this.dataComponent.NON_FROZEN_WATER,
            release: this.dataComponent.release,
            Temperatures: this.fieldArray,
        }).subscribe(function (response) {
            _this.laddaIsFreeze = false;
            var success = true;
            // console.log(response);
            if (response.CheckCalculate === -2) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Please, select the components family!'));
                return;
            }
            if (response.CheckCalculate === -3) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Component name can not be null!'));
                return;
            }
            if (response.CheckCalculate === -5) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Value out of range in' +
                    'Composition total (90 : 110) !'));
                return;
            }
            if (response.CheckCalculate !== 0) {
                success = false;
            }
            if (success) {
                _this.toastr.success('Freeze temperature', 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Run freeze temperature false'));
            }
            if (response.VComponent) {
                localStorage.setItem('CompCurr', JSON.stringify(response.VComponent));
                _this.checkHideInfo = false;
                _this.refrestComponent();
                _this.modalAddComponent.hide();
                _this.getDataComponent(0);
            }
        }, function (err) {
            _this.laddaIsFreeze = false;
        }, function () {
            _this.laddaIsFreeze = false;
            _this.checkCalculate = true;
        });
    };
    ComponentComponent.prototype.runSelectCalculateFreeze = function (comp) {
        var _this = this;
        this.laddaIsFreeze = true;
        this.apiReference.calculateFreeze({
            PRODUCT_TYPE: comp.CLASS_TYPE,
            SUB_TYPE: comp.SUB_FAMILY,
            NATURE_TYPE: comp.COMP_NATURE,
            CONDUCT_TYPE: comp.COND_DENS_MODE,
            FATTYPE: comp.FAT_TYPE,
            COMP_NAME: comp.LABEL,
            AIR: comp.AIR,
            CLASS_TYPE: comp.CLASS_TYPE,
            COMP_COMMENT: comp.COMP_COMMENT,
            COMP_VERSION: comp.COMP_VERSION,
            FREEZE_TEMP: comp.FREEZE_TEMP,
            WATER: comp.WATER,
            PROTID: comp.PROTID,
            LIPID: comp.LIPID,
            GLUCID: comp.GLUCID,
            SALT: comp.SALT,
            NON_FROZEN_WATER: comp.NON_FROZEN_WATER,
            COMP_RELEASE: comp.COMP_RELEASE,
            Temperatures: this.fieldArray,
            ID_COMP: comp.ID_COMP,
            COMP_VERSION_NEW: -2
        }).subscribe(function (response) {
            // console.log(response);
            _this.laddaIsFreeze = false;
            var success = true;
            if (response.CheckCalculate === -2) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Please, select the components family!'));
                return;
            }
            if (response.CheckCalculate === -3) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Component name can not be null!'));
                return;
            }
            if (response.CheckCalculate === -5) {
                success = false;
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Value out of range in '
                    + 'Composition total (90 : 110) !'));
                return;
            }
            if (response.CheckCalculate !== 0) {
                success = false;
            }
            if (success) {
                _this.toastr.success(_this.translate.instant('Freeze temperature'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Freeze temperature'), _this.translate.instant('Run freeze temperature false'));
            }
            if (response.VComponent) {
                localStorage.setItem('CompCurr', JSON.stringify(response.VComponent));
                _this.checkHideInfo = false;
                _this.refrestComponent();
            }
        }, function (err) {
            _this.laddaIsFreeze = false;
        }, function () {
            _this.laddaIsFreeze = false;
        });
    };
    ComponentComponent.prototype.runCalculate = function (comp) {
        var _this = this;
        this.laddaIsCalculating = true;
        this.apiReference.startFCCalculate({
            ID_COMP: comp.ID_COMP,
            PRODUCT_TYPE: comp.CLASS_TYPE,
            SUB_TYPE: comp.SUB_FAMILY,
            NATURE_TYPE: comp.COMP_NATURE,
            CONDUCT_TYPE: comp.COND_DENS_MODE,
            FATTYPE: comp.FAT_TYPE,
            COMP_NAME: comp.LABEL,
            COMP_RELEASE: comp.COMP_RELEASE,
            AIR: comp.AIR,
            WATER: comp.WATER,
            CLASS_TYPE: comp.CLASS_TYPE,
            COMP_COMMENT: comp.COMP_COMMENT,
            COMP_VERSION: comp.COMP_VERSION,
            FREEZE_TEMP: comp.FREEZE_TEMP,
            PROTID: comp.PROTID,
            LIPID: comp.LIPID,
            GLUCID: comp.GLUCID,
            SALT: comp.SALT,
            NON_FROZEN_WATER: comp.NON_FROZEN_WATER,
            Temperatures: this.fieldArray,
            COMP_VERSION_NEW: -2
        }).subscribe(function (response) {
            _this.laddaIsCalculating = false;
            if (response === 0) {
                // localStorage.setItem('generatedData', JSON.stringify({ isCalculated: true, idComp: comp.ID_COMP}));
                _this.checkCalculate = true;
                _this.toastr.success(_this.translate.instant('Calculation'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Calculation'), 'ERROR!');
            }
        }, function (err) {
            _this.laddaIsCalculating = false;
        }, function () {
            _this.laddaIsCalculating = false;
            _this.checkCalculate = true;
        });
    };
    // by haidt
    ComponentComponent.prototype.comeBackStudy = function () {
        this.checkBackStudy = 0;
        this.router.navigate(['/input/product']);
    };
    ComponentComponent.prototype.comBackStudyNoAdd = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('Component was not generated, study calculation will not be possible.'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes')
        }).then(function (result) {
            if (result.value) {
                // swal(
                //   'Deleted!',
                //   'Your file has been deleted.',
                //   'success'
                // );
                _this.checkBackStudy = 0;
                _this.router.navigate(['/input/product']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalFreezetemper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], ComponentComponent.prototype, "modalFreezetemper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalDeleteComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], ComponentComponent.prototype, "modalDeleteComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAsComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], ComponentComponent.prototype, "modalSaveAsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddComponent'),
        __metadata("design:type", Object)
    ], ComponentComponent.prototype, "modalAddComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('displayCTComponent'),
        __metadata("design:type", Object)
    ], ComponentComponent.prototype, "displayCTComponent", void 0);
    ComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component',
            template: __webpack_require__("../../../../../src/app/views/references/component/component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/references/component/component.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__api_services_referencedata_service__["a" /* ReferencedataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], ComponentComponent);
    return ComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/equipment/equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"card product-container\">\n    <div class=\"text-center\">\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openLoadEquipment();\" [class.active]=\"activePageEquipment == 'load'\">{{ 'Equipments'|translate }}</button>\n          <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openGenerateEquipment();\" [class.active]=\"activePageEquipment == 'gen'\" *ngIf=\"selectEquipment\" [disabled]=\"(selectEquipment.STD != 0)\">{{ 'Data generated'|translate }}</button>\n          <button class=\"btn btn-outline-primary btn-sm\" (click)=\"openCurvesEquipment();getDataCurve(selectEquipment.ID_EQUIP);\" [class.active]=\"activePageEquipment == 'curves'\" *ngIf=\"selectEquipment\" [disabled]=\"!selectEquipment\">{{ 'Curves'|translate }}</button>\n        </div>\n    </div>\n    <div class=\"card-body\">\n      <!--Start load equipment -->\n      <div style=\"margin-top:10px;\" id=\"page-load-equipment\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"card\" *ngIf=\"listEquipment\">\n                <div class=\"card-header\">\n                    <div class=\"input-group input-group-sm study-search-box\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n                        <span>\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </div>\n                <perfect-scrollbar style=\"max-height: 400px;\">\n                    <div class=\"list-group\">\n                        <h6 class=\"dropdown-header\">MINE</h6>\n                        <a *ngFor=\"let equip of (listEquipment.mine | equipFilter: filterString)\"\n                        [ngClass]=\"checkActiveEquip == equip.ID_EQUIP || equip == selectEquipment || checkActive == equip.ID_EQUIP ? 'active' : ''\"\n                        class=\"list-group-item list-group-item-action\" (click)=\"onSelectEquipment(equip)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                {{ equip.EQUIP_NAME }} - (v{{ equip.EQUIP_VERSION }})\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 5\" class=\"fa fa-trash text-secondary\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            </div>\n                        </a>\n                        <h6 class=\"dropdown-header\">OTHERS</h6>\n                        <a *ngFor=\"let equip of (listEquipment.others | equipFilter: filterString)\"\n                        [ngClass]=\"checkActiveEquip == equip.ID_EQUIP || equip == selectEquipment || checkActive == equip.ID_EQUIP ? 'active' : ''\"\n                        class=\"list-group-item list-group-item-action\" (click)=\"onSelectEquipment(equip)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                {{ equip.EQUIP_NAME }} - (v{{ equip.EQUIP_VERSION }})\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 5\" class=\"fa fa-trash text-secondary\"></i>\n                                <i *ngIf=\"equip.EQUIP_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            </div>\n                        </a>\n                    </div>\n                </perfect-scrollbar>\n                <div class=\"card-footer text-center\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"modalAddEquipment.show(); disableFilter = false;\"><i class=\"fa fa-plus\"></i> {{ 'Add'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" *ngIf=\"selectEquipment && !checkHideInfo\" [disabled]=\"selectEquipment.ID_USER != listEquipment.ID_USER\" (click)=\"deleteEquipment(selectEquipment)\" >\n                        <i class=\"fa fa-trash-o\"></i> {{ 'Delete'|translate }}\n                    </button>\n                    <button class=\"btn btn-secondary btn-sm\" type=\"button\" *ngIf=\"selectEquipment && !checkHideInfo\" (click)=\"modalSaveAsEquipment.show();\"><i class=\"fa fa-copy\"></i> {{ 'Save As'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"refrestListEquipment();\"><i class=\"fa fa-refresh\"></i> {{ 'Refresh'|translate }}</button>\n                </div>\n              </div>\n              <div *ngIf=\"selectEquipment && !checkHideInfo\">\n                <div class=\"row\" style=\"font-size: 12px;\" *ngIf=\"selectEquipment.MAX_RAMPS > 0\">\n                    <caption>{{ 'Ramps'|translate }}</caption>\n                    <table class=\"table table-sm \">\n                        <thead>\n                            <tr>\n                                <th style=\"vertical-align:middle;text-align:center\">{{ 'Position ramp'|translate }} ({{ rampsPositionSymbol }})</th>\n                                <th style=\"vertical-align:middle;text-align:center\">{{ 'Action'|translate }}</th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"rampsArray\">\n                            <tr *ngFor=\"let ramp of rampsArray; let i = index\">\n                                <td align=\"center\"style=\"vertical-align:middle\">{{ ramp.POSITION }}</td>\n                                <td align=\"center\" width=\"10%\">\n                                    <div>\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteRampValue(i);\" ngbTooltip=\"Delete one ramp\">\n                                            <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td align=\"center\" style=\"vertical-align:middle\">\n                                    <input type=\"text\" class=\"form-control form-control-sm col-md-6\" placeholder=\"0.00\" [(ngModel)]=\"this.newRamp.POSITION\" maxlength=\"10\">\n                                </td>\n                                <td align=\"center\">\n                                    <div>\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addRampValue();\" ngbTooltip=\"Add one ramp\">\n                                            <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n              </div>\n              <div *ngIf=\"selectEquipment && !checkHideInfo\">\n                <div class=\"row\" style=\"font-size: 12px;\" *ngIf=\"selectEquipment.TYPE_CELL == 2 || selectEquipment.ID_COOLING_FAMILY == 1\">\n                    <caption>{{ 'Trails of shelves'|translate }}</caption>\n                    <table class=\"table table-sm\">\n                        <thead>\n                            <tr>\n                                <th style=\"vertical-align:middle;text-align:center\">{{ 'Space'|translate }}  ({{ shelvesWidthSymbol }})</th>\n                                <th style=\"vertical-align:middle;text-align:center\">{{ 'Number' |translate }}</th>\n                                <th style=\"vertical-align:middle;text-align:center\">{{ 'Action'|translate }}</th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"shelvesArray\">\n                            <tr *ngFor=\"let shelves of shelvesArray; let i = index\">\n                                <td align=\"center\"style=\"vertical-align:middle\">{{ shelves.SPACE }}</td>\n                                <td align=\"center\"style=\"vertical-align:middle\">{{ shelves.NB }}</td>\n                                <td align=\"center\" width=\"10%\">\n                                <div style=\"margin-top:0.5em\">\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteShelveValue(i);\" ngbTooltip=\"delete one shelve\">\n                                        <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                    </button>\n                                </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td align=\"center\" style=\"vertical-align:middle\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"this.newShelve.SPACE\" maxlength=\"10\">\n                                </td>\n                                <td align=\"center\" style=\"vertical-align:middle\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"this.newShelve.NB\" maxlength=\"10\">\n                                </td>\n                                <td align=\"center\">\n                                    <div>\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addShelveValue();\" ngbTooltip=\"Add one shelve\">\n                                            <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n              </div>\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card\" >\n              <div class=\"card-header\">\n                <strong>{{ 'BUILD'|translate }}</strong>\n              </div>\n              <div class=\"card-body\" *ngIf=\"selectEquipment && !checkHideInfo; else hideInfo\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">{{ 'Designation'|translate }}</label>\n                      <div class=\"col-md-4\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.EQUIP_NAME\">\n                      </div>\n                      <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Version'|translate }}</label>\n                      <div class=\"col-md-3\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.0\" [(ngModel)]=\"selectEquipment.EQUIP_VERSION\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label class=\"col-md-3 col-form-label\" for=\"text-input\">{{ 'Comment'|translate }}</label>\n                      <div class=\"col-md-9\">\n                        <textarea type=\"text\" name=\"text-input\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.EQUIP_COMMENT\"></textarea>\n                      </div>\n                    </div>\n                    <!-- Regulation temperature -->\n                    <div class=\"form-group row\" *ngIf=\"selectEquipment && (selectEquipment.STD == 0)\">\n                        <div class=\"col-md-12\" id=\"page-load-equipment3\" *ngIf=\"(capability && (capability.CAP_EQP_DEPEND_ON_TS == true)); else EQ_DWELLING_TIME\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{ 'Dwelling Time'|translate }}</label>\n                                <div class=\"col-md-5\">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"selectEquipment.equipGeneration.DWELLING_TIME\"\n                                            disabled>\n                                        <span class=\"input-group-addon\">\n                                            <small>{{timeSymbol}}</small>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <ng-template #EQ_DWELLING_TIME>\n                            <div class=\"col-md-12\" id=\"page-load-equipment3\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{ 'Regulation temperature'|translate }}</label>\n                                    <div class=\"col-md-5\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"selectEquipment.equipGeneration.TEMP_SETPOINT\"\n                                                disabled>\n                                            <span class=\"input-group-addon\">\n                                                <small>{{temperatureSymbol}}</small>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-md-7 col-form-label\" for=\"text-input\">{{ 'Click here to change this value'|translate }} </label>\n                                    <div class=\"col-md-5\">\n                                        <img src=\".assets/img/change_tr.gif\" alt=\"Click here\" (click)=\"getTempSetPoint(selectEquipment.ID_EQUIP);modalTempSetpoint.show();\">\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                    <!-- End Regulation temperature -->\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <table class=\"table table-hover table-striped table-sm\">\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Family'|translate }}</th>\n                            <td *ngIf=\"listEquipFamily; else emptyEFam\">\n                                <select class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.ID_FAMILY\" disabled>\n                                    <option>-- None --</option>\n                                    <option *ngFor=\"let efam of listEquipFamily\" [value]=\"efam.ID_TRANSLATION\">\n                                        {{ efam.BATCH_PROCESS == 1 ? efam.LABEL + ' - Batch' : efam.LABEL + ' - Process' }}\n                                    </option>\n                                </select>\n                            </td>\n                            <ng-template #emptyEFam>\n                                <td>\n                                    <select class=\"form-control form-control-sm\">\n                                        <option value=\"-1\">-- None --</option>\n                                    </select>\n                                </td>\n                            </ng-template>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Model'|translate }}</th>\n                            <td *ngIf=\"listequipSeries; else emptyModel\">\n                                <select class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.ID_EQUIPSERIES\" disabled>\n                                    <option>-- None --</option>\n                                    <option *ngFor=\"let series of listequipSeries\" [value]=\"series.ID_EQUIPSERIES\">{{ series.SERIES_NAME }} - {{ series.CONSTRUCTOR }}</option>\n                                </select>\n                            </td>\n                            <ng-template #emptyModel>\n                                <td>\n                                    <select class=\"form-control form-control-sm\">\n                                        <option value=\"-1\">-- None --</option>\n                                    </select>\n                                </td>\n                            </ng-template>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Length'|translate }}</th>\n                            <td>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.EQP_LENGTH\" placeholder=\"0.00\" maxlength=\"10\">\n                                    <span class=\"input-group-addon\">{{ equipDimensionSymbol }}</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Width'|translate }}</th>\n                            <td>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.EQP_WIDTH\" placeholder=\"0.00\" maxlength=\"10\">\n                                    <span class=\"input-group-addon\">{{ equipDimensionSymbol }}</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Height'|translate }}</th>\n                            <td>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.EQP_HEIGHT\" placeholder=\"0.00\" maxlength=\"10\">\n                                    <span class=\"input-group-addon\">{{ equipDimensionSymbol }}</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'TR number'|translate }}</th>\n                            <td>\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.NB_TR\" placeholder=\"0.00\" maxlength=\"5\" size=\"5\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'TS number'|translate }}</th>\n                            <td>\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.NB_TS\" placeholder=\"0.00\" maxlength=\"5\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'VC number'|translate }}</th>\n                            <td>\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.NB_VC\"  placeholder=\"0.00\" maxlength=\"5\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Max flow rate'|translate }}</th>\n                            <td>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.MAX_FLOW_RATE\" placeholder=\"0.00\" maxlength=\"10\">\n                                    <span class=\"input-group-addon\" [innerHTML]=\"selectEquipment.consumptionSymbol1 + '/h'\"></span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Mimimum regulation temperature'|translate }}</th>\n                            <td>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.TMP_REGUL_MIN\" placeholder=\"0.00\" maxlength=\"10\">\n                                    <span class=\"input-group-addon\">{{ temperatureSymbol }}</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Nozzles/ramps number'|translate }}</th>\n                            <td>\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.MAX_NOZZLES_BY_RAMP\" placeholder=\"0.00\" maxlength=\"10\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%\">{{ 'Ramp max number'|translate }}</th>\n                            <td>\n                                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"selectEquipment.MAX_RAMPS\" placeholder=\"0.00\" maxlength=\"10\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th style=\"width: 50%;\">{{ 'STD'|translate }}</th>\n                            <td align=\"left\">\n                                <div class=\"input-group\">\n                                  <label class=\"custom-control custom-checkbox cal-check\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"selectEquipment.STD == 1\" disabled>\n                                    <span class=\"custom-control-indicator\"></span>\n                                  </label>\n                                </div>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [value]=\"1\" class=\"custom-control-input\" name=\"statusEquip\" [(ngModel)]=\"selectEquipment.EQUIP_RELEASE\">{{ 'Draft'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [value]=\"2\" class=\"custom-control-input\" name=\"statusEquip\" [(ngModel)]=\"selectEquipment.EQUIP_RELEASE\">{{ 'Test'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [value]=\"3\" class=\"custom-control-input\" name=\"statusEquip\" [(ngModel)]=\"selectEquipment.EQUIP_RELEASE\">{{ 'Active'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [value]=\"4\" class=\"custom-control-input\" name=\"statusEquip\" [(ngModel)]=\"selectEquipment.EQUIP_RELEASE\">{{ 'Certified'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [value]=\"9\" class=\"custom-control-input\" name=\"statusEquip\" [(ngModel)]=\"selectEquipment.EQUIP_RELEASE\">{{ 'Obsolete'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div *ngIf=\"selectEquipment\">\n                    <div class=\"row\" style=\"font-size: 12px;\" *ngIf=\"selectEquipment.capabilitiesCalc256\">\n                        <caption>{{ 'Consumptions'|translate }}</caption>\n                        <table class=\"table table-sm\">\n                            <thead>\n                                <tr>\n                                    <th width=\"30%\" style=\"vertical-align:middle;text-align:center\" *ngIf=\"selectEquipment.capabilitiesCalc; else temperCons\">\n                                        {{ 'Dwelling Time'|translate }} <br> ({{ timeSymbol }})\n                                    </th>\n                                    <ng-template #temperCons>\n                                        <th width=\"30%\" style=\"vertical-align:middle;text-align:center\">{{ 'Temperature'|translate }} <br> ({{ temperatureSymbol }})</th>\n                                    </ng-template>\n                                    <th width=\"30%\" style=\"vertical-align:middle;text-align:center\">\n                                        {{ 'Consumption of maintains' |translate }} <br> {{ 'in cold'|translate }} ({{ selectEquipment.consumptionSymbol2 }})\n                                    </th>\n                                    <th width=\"30%\" style=\"vertical-align:middle;text-align:center\">\n                                        {{ 'Consumption of'|translate}} <br> {{'stake in cold'|translate }} ({{ selectEquipment.consumptionSymbol3 }})\n                                    </th>\n                                    <th width=\"10%\" style=\"vertical-align:middle;text-align:center\">{{ 'Action'|translate }}</th>\n                                </tr>\n                            </thead>\n\n                            <tbody *ngIf=\"consumptionsArray\">\n                                <tr>\n                                  <td colspan=\"4\">\n                                      <perfect-scrollbar style=\"max-height: 200px; width: 100%;\" >\n                                          <table class=\"col-md-12\">\n                                              <tr *ngFor=\"let cons of consumptionsArray; let i = index\">\n                                                  <td width=\"30%\" style=\"vertical-align:middle;text-align:center\">\n                                                      {{ cons.TEMPERATURE }}\n                                                  </td>\n                                                  <td width=\"30%\" style=\"vertical-align:middle;text-align:center\">{{ cons.CONSUMPTION_PERM }}</td>\n                                                  <td width=\"30%\" style=\"vertical-align:middle;text-align:center\">{{ cons.CONSUMPTION_GETCOLD }}</td>\n                                                  <td  width=\"10%\" style=\"vertical-align:middle;text-align:center\">\n                                                      <div style=\"margin-top:0.5em\">\n                                                          <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteConsumptionValue(i);\" ngbTooltip=\"Delete one consumption\">\n                                                              <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                                          </button>\n                                                      </div>\n                                                  </td>\n                                              </tr>\n                                          </table>\n                                      </perfect-scrollbar>\n                                  </td>\n                                </tr>\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                  <td align=\"center\" style=\"vertical-align:middle\">\n                                      <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"newConsumption.TEMPERATURE\" maxlength=\"10\">\n                                  </td>\n                                  <td align=\"center\" style=\"vertical-align:middle\">\n                                      <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"newConsumption.CONSUMPTION_PERM\" maxlength=\"10\">\n                                  </td>\n                                  <td align=\"center\" style=\"vertical-align:middle\">\n                                      <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" [(ngModel)]=\"newConsumption.CONSUMPTION_GETCOLD\" maxlength=\"10\">\n                                  </td>\n                                  <td align=\"center\">\n                                      <div>\n                                            <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addConsumptionValue();\" ngbTooltip=\"Add one consumption\">\n                                              <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                                            </button>\n                                      </div>\n                                  </td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                </div>\n              </div>\n              <ng-template #hideInfo>\n                <div class=\"card-body\">\n                    <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n                        Please select a euqipment from the list before process.\n                    </div>\n                </div>\n              </ng-template>\n              <div class=\"card-footer text-center\" *ngIf=\"selectEquipment && !checkHideInfo\">\n                <button type=\"button\" (click)=\"onFilterLoad(selectEquipment)\" class=\"btn btn-warning\" *ngIf=\"selectEquipment\"\n                [disabled]=\"selectEquipment.ID_USER != listEquipment.ID_USER\"><i class=\"fa fa-filter\"></i> {{ 'Filter'|translate }}</button>\n                <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"selectEquipment\" \n                  [disabled]=\"(selectEquipment.ID_USER != listEquipment.ID_USER) || (selectEquipment.ID_EQUIPGENERATION == 0)\"\n                  (click)=\"startEquipmentCalculate(selectEquipment);\" [ladda]=\"laddaIsEquipmentCalculating\">\n                  <i class=\"icon-energy\"></i> {{ 'Calculate'|translate }}\n                </button>\n                <button type=\"button\" class=\"btn btn-success\" *ngIf=\"selectEquipment\" [disabled]=\"selectEquipment.ID_USER != listEquipment.ID_USER\"\n                (click)=\"checkUpdateEquipment(selectEquipment, 0);\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{ 'Save'|translate }}</button>\n                <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"checkBackStudy == 1\" (click)=\"comeBackStudy();\">\n                    <i class=\"fa fa-chevron-circle-left\"></i>&nbsp; {{ 'Come back to study'|translate }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End load equipment -->\n\n      <!-- Start generated equipemnt -->\n      <div style=\"margin-top:10px;display:none\" id=\"page-generated-equipment\" *ngIf=\"!isLoading\">\n        <!-- start Convection table -->\n        <div class=\"row col-md-12\">\n            <caption>{{ 'Convection table'|translate }} </caption>\n        </div>\n\n        <table class=\"table table-bordered table-sm mb-0\" *ngIf=\"selectEquipment\">\n            <thead>\n                <tr>\n                    <td align=\"center\">{{ 'Position'|translate }}<br> (%)</td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 0);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha top'|translate }}<br> ({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 1);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha bottom'|translate }}<br> ({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 2);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha left'|translate }}<br>({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 3);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha right'|translate }}<br> ({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 4);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha front'|translate }}<br> ({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 1, 5);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Alpha rear'|translate }}<br> ({{ convectionCoeffSymbol }})</a></td>\n                    <td align=\"center\">{{ 'Delete'|translate }}</td>\n                </tr>\n            </thead>\n            <tbody>\n                <td colspan=\"8\" *ngIf=\"checkData == true; else noequipdata\">\n                    <perfect-scrollbar style=\"max-height: 150px;\">\n                        <table>\n                            <tr *ngFor=\"let equipCharact of equipCharacts;let i = index\">\n                                <td width=\"9%\"><a href=\"javascript:;\" (click)=\"getEquipCharact(equipCharact.ID_EQUIPCHARAC);modalReferentialEquip.show();\"\n                                    ngbTooltip=\"Click here to edit one point\">{{ equipCharact.X_POSITION }}</a></td>\n                                <td width=\"14%\">{{ equipCharact.ALPHA_TOP }}</td>\n                                <td width=\"15%\">{{ equipCharact.ALPHA_BOTTOM }}</td>\n\n                                <td width=\"15%\">{{ equipCharact.ALPHA_LEFT }}</td>\n                                <td width=\"13%\">{{ equipCharact.ALPHA_RIGHT }}</td>\n\n                                <td width=\"15%\">{{ equipCharact.ALPHA_FRONT }}</td>\n                                <td width=\"15%\">{{ equipCharact.ALPHA_REAR }}</td>\n                                <td align=\"center\" width=\"12%\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                                        (click)=\"deleteEquipCharactValue(i);deleteEquipCharact(equipCharact.ID_EQUIPCHARAC);\"\n                                        ngbTooltip=\"Delete one point\">\n                                        <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </perfect-scrollbar>\n                </td>\n                <ng-template #noequipdata>\n                    <div class=\"text-muted text-center\">No data generated</div>\n                </ng-template>\n            </tbody>\n        </table>\n        <!-- End table -->\n        <div class=\"row col-md-12\">\n            <caption>{{ 'Temperature table'|translate }} </caption>\n        </div>\n\n        <table class=\"table table-bordered table-sm mb-0\">\n            <thead>\n                <tr>\n                    <td align=\"center\">{{ 'Position'|translate }}<br> (%)</td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 0);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Top temperature'|translate }}<br> ({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 1);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Temperature bottom'|translate }}<br>({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 2);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Temperature left'|translate }}<br>({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 3);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Temperature right'|translate }}<br>({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 4);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Temperature front'|translate }}<br> ({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\"><a href=\"javascript:;\" (click)=\"getDataHighChart(selectEquipment.ID_EQUIP, 0, 5);\"\n                        ngbTooltip=\"Click here to edit the full profile\">{{ 'Temperature rear'|translate }}<br>({{ temperatureSymbol }})</a></td>\n                    <td align=\"center\">{{ 'Delete'|translate }}</td>\n                </tr>\n            </thead>\n            <tbody>\n                <td colspan=\"8\" *ngIf=\"checkData == true; else noequipdata\">\n                    <perfect-scrollbar style=\"max-height: 150px;\">\n                        <table>\n                            <!-- ng-repeat=\"equipCharact in equipCharacts | orderBy:['X_POSITION']\" -->\n                            <tr *ngFor=\"let equipCharact of equipCharacts; let i = index\">\n                                <td width=\"7%\">\n                                    <a href=\"javascript:;\" (click)=\"getEquipCharact(equipCharact.ID_EQUIPCHARAC);modalReferentialEquip.show();\" ngbTooltip=\"Click here to edit one point\">{{ equipCharact.X_POSITION }}</a>\n                                </td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_TOP }}</td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_BOTTOM }}</td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_LEFT }}</td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_RIGHT }}</td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_FRONT }}</td>\n                                <td width=\"15%\">{{ equipCharact.TEMP_REAR }}</td>\n                                <td align=\"center\" width=\"10%\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm\" ngbTooltip=\"Delete one point\" (click)=\"deleteEquipCharactValue(i);deleteEquipCharact(equipCharact.ID_EQUIPCHARAC);\">\n                                            <i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </perfect-scrollbar>\n                </td>\n                <ng-template #noequipdata>\n                    <div class=\"text-muted text-center\">No data generated</div>\n                </ng-template>\n            </tbody>\n        </table>\n\n        <table class=\"table table-bordered table-sm mb-0 \" >\n            <tr>\n                <td align=\"center\">\n                    <div style=\"margin-top:0.5em\">\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" ngbTooltip=\"Delete all points\"\n                        (click)=\"deleteEquipCharacts(selectEquipment);\" [disabled]=\"checkData == false\">\n                            <i class=\"fa fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </td>\n                <td align=\"center\" style=\"vertical-align:middle\">\n                    <input type=\"text\" class=\"form-control col-md-6\" [(ngModel)]=\"newEquipCharact.X_POSITION\">\n                </td>\n                <td align=\"center\">\n                    <div style=\"margin-top:0.5em\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" ngbTooltip=\"Add one point\"\n                        *ngIf=\"selectEquipment\" (click)=\"addOnePoint(selectEquipment.ID_EQUIP);\">\n                            <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n        </table>\n      </div>\n      <!-- End generated equipemnt -->\n\n      <!-- Start curves equipment -->\n      <div style=\"margin-top:10px;display:none\" id=\"page-curves-equipment\" *ngIf=\"!isLoading\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\" *ngIf=\"dataCurve\">\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-6 col-form-label\" for=\"text-input\" *ngIf=\"dataCurve.isCapabilities == 1; else EQ_GEN_REGUL_TEMPlabel\">\n                                {{ 'Dwelling Time'|translate }}</label>\n                            <ng-template #EQ_GEN_REGUL_TEMPlabel>\n                                <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Regulation temperature'|translate }}</label>\n                            </ng-template>\n                            <div class=\"col-md-6\" *ngIf=\"dataCurve.isCapabilities == 1; else EQ_GEN_REGUL_TEMP\">\n                                <div class=\"input-group\" align=\"center\">\n                                    <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\"\n                                    [(ngModel)]=\"dataCurve.DWELLING_TIME\" [disabled]=\"(selectEquipment.STD == 0)\">\n                                    <span class=\"input-group-addon\"><small>{{ timeSymbol }}</small></span>\n                                </div>\n                            </div>\n                            <ng-template #EQ_GEN_REGUL_TEMP>\n                                <div class=\"col-md-6\">\n                                    <div class=\"input-group\" align=\"center\">\n                                        <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\"\n                                        [(ngModel)]=\"dataCurve.REGUL_TEMP\" [disabled]=\"(selectEquipment.STD == 0)\">\n                                        <span class=\"input-group-addon\">\n                                            <small>{{ temperatureSymbol }}</small>\n                                        </span>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Initial temperature of the product'|translate }}</label>\n                            <div class=\"col-md-6\">\n                                <div class=\"input-group\" align=\"center\">\n                                    <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\"\n                                    [(ngModel)]=\"dataCurve.PRODTEMP\" [disabled]=\"(selectEquipment.STD == 0)\">\n                                    <span class=\"input-group-addon\"><small>{{ temperatureSymbol }}</small></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Loading Rate'|translate }}</label>\n                            <div class=\"col-md-6\">\n                                <div class=\"input-group\" align=\"center\">\n                                    <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"0.00\"\n                                    [(ngModel)]=\"dataCurve.LOADINGRATE\" [disabled]=\"(selectEquipment.STD == 0)\">\n                                    <span class=\"input-group-addon\"><small>%</small></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row text-center\" style=\"display: flex; align-items: center; justify-content: center;\">\n                    <button type=\"button\" class=\"btn btn-success\" style=\"margin-bottom: 10px;\" *ngIf=\"selectEquipment\"\n                    (click)=\"checkRedrawCurves(selectEquipment.ID_EQUIP);\" [disabled]=\"(selectEquipment.STD == 0)\"> {{ 'Graphic'|translate }}</button>\n                </div>\n                <div class=\"row\" *ngIf=\"checkData == true\">\n                    <div style=\"width:90%;margin:auto\">\n                        <highcharts-chart #curvesChart [Highcharts]=\"Curvescharts\" [options]=\"chartTempCurvesOptions\"></highcharts-chart>\n                    </div>\n                    <div style=\"width:90%;margin:auto\">\n                        <highcharts-chart #curvesChart [Highcharts]=\"Curvescharts\" [options]=\"chartConvecCurvesOptions\"></highcharts-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      <!-- End curves equipment -->\n    </div>\n  </div>\n</div>\n\n<!-- Start modal add equipment -->\n<div bsModal class=\"modal fade\" #modalAddEquipment=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header \">\n          <strong>{{ 'Equipment'|translate }}</strong>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalAddEquipment.hide()\">\n              <span aria-hidden=\"true\">×</span>\n          </button>\n      </div>\n      <div class=\"modal-body row\">\n          <div class=\"col-md-12\">\n              <div class=\"form-group row\">\n                  <div class=\"col-md-1\"></div>\n                  <label class=\"col-md-2 col-form-label\" for=\"ref-line-name-add\">{{ 'Name'|translate }}</label>\n                  <div class=\"col-md-4\">\n                      <input type=\"text\" [(ngModel)]=\"newEquipment.nameEquipment\" class=\"form-control form-control-sm\">\n                  </div>\n                  <label class=\"col-md-2 col-form-label\" for=\"ref-line-version-add\">{{ 'Version'|translate }}</label>\n                  <div class=\"col-md-2\">\n                      <input type=\"text\" [(ngModel)]=\"newEquipment.versionEquipment\" class=\"form-control form-control-sm\" placeholder=\"0.00\">\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-2\"></div>\n                  <div class=\"col-md-2\" align=\"center\" >\n                  <label class=\"custom-control custom-radio\" >\n                      <input type=\"radio\" value=\"0\" class=\"custom-control-input\" (click)=\"chooseGenerate()\" name=\"add-equip\" [checked]=\"statusEquip == 0\">{{ 'Generate'|translate }}\n                      <span class=\"custom-control-indicator\"></span>\n                  </label>\n                  </div>\n                  <div class=\"col-md-2\" align=\"center\" >\n                      <label class=\"custom-control custom-radio\" >\n                          <input type=\"radio\" value=\"1\" class=\"custom-control-input\" (click)=\"chooseTranslate()\" name=\"add-equip\" [checked]=\"statusEquip == 1\">{{ 'Translate'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                      </label>\n                  </div>\n                  <div class=\"col-md-2\" align=\"center\" >\n                      <label class=\"custom-control custom-radio\" >\n                          <input type=\"radio\" value=\"2\" class=\"custom-control-input\" (click)=\"chooseRotate()\" name=\"add-equip\" [checked]=\"statusEquip == 2\">{{ 'Rotate'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                      </label>\n                  </div>\n                  <div class=\"col-md-2\" align=\"center\" >\n                      <label class=\"custom-control custom-radio\" >\n                          <input type=\"radio\" value=\"3\" class=\"custom-control-input\" (click)=\"chooseMerge()\" name=\"add-equip\" [checked]=\"statusEquip == 3\">{{ 'Merge'|translate }}\n                          <span class=\"custom-control-indicator\"></span>\n                      </label>\n                  </div>\n              </div>\n              <!-- Display Generate -->\n              <table class=\"table table-sm text-center\" *ngIf=\"statusEquip == 0\">\n                  <tr>\n                      <th style=\"width: 40%\">{{ 'Equipment'|translate }}</th>\n                      <td>\n                          <div class=\"col-md-8\" *ngIf=\"listEquipGenerate\">\n                              <select type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"equipGenerate\" (change)=\"selectEquipGenerate()\">\n                                  <option value=\"0\">-- None --</option>\n                                  <option *ngFor=\"let equip of listEquipGenerate\" [value]=\"equip.ID_EQUIP\">{{ equip.EQUIP_NAME }} - (v{{equip.EQUIP_VERSION}})</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr>\n                  <tr *ngIf=\"selectEquipGener && equipGenerate != 0\">\n                      <th style=\"width: 40%\" *ngIf=\"!selectEquipGener.capabilitiesCalc; else dwelling\">{{ 'Regulation temperature'|translate }}</th>\n                      <ng-template #dwelling>\n                          <th style=\"width: 40%\">{{ 'Dwelling Time'|translate }}</th>\n                      </ng-template>\n                      <td>\n                          <div class=\"input-group col-md-8\" *ngIf=\"!selectEquipGener.capabilitiesCalc; else dwellingInput\">\n                              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.tempSetPoint\" placeholder=\"0.00\">\n                              <span class=\"input-group-addon\"><small >{{ temperatureSymbol }}</small></span>\n                          </div>\n                          <ng-template #dwellingInput>\n                              <div class=\"input-group col-md-8\" *ngIf=\"selectEquipGener.capabilitiesCalc\">\n                                  <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.dwellingTime\" placeholder=\"0.00\">\n                                  <span class=\"input-group-addon\"><small> {{ timeSymbol }}</small></span>\n                              </div>\n                          </ng-template>\n                      </td>\n                  </tr>\n              </table>\n              <!-- Display Translation -->\n              <table class=\"table table-sm text-center\" *ngIf=\"statusEquip == 1\">\n                  <tr>\n                      <th style=\"width: 40%\">{{ 'Equipment'|translate }}</th>\n                      <td>\n                          <div class=\"col-md-8\" *ngIf=\"listEquipRotate\">\n                              <select type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"equipTranslation\" (change)=\"selectEquipTranslation()\">\n                                  <option value=\"0\">-- None --</option>\n                                  <option *ngFor=\"let equip of listEquipRotate\" [value]=\"equip.ID_EQUIP\">{{ equip.EQUIP_NAME }} - (v{{equip.EQUIP_VERSION}})</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr>\n                  <tr>\n                      <th>{{ 'New position' | translate }}</th>\n                      <td>\n                          <div class=\"input-group col-md-8\" *ngIf=\"listEquipRotate\">\n                              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.newPos\" placeholder=\"0.00\">\n                              <span class=\"input-group-addon\"><small >{{ timeSymbol }}</small></span>\n                          </div>\n                      </td>\n                  </tr>\n                  <tr>\n                      <th>{{ 'Dwelling time' | translate }}</th>\n                      <td>\n                          <div class=\"input-group col-md-8\">\n                              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.dwellingTime\" placeholder=\"0.00\">\n                              <span class=\"input-group-addon\"><small>{{ timeSymbol }}</small></span>\n                          </div>\n                      </td>\n                  </tr>\n              </table>\n              <!-- Display Rorate -->\n              <table class=\"table table-sm text-center\" *ngIf=\"statusEquip == 2\">\n                  <tr>\n                      <th style=\"width: 40%\">{{ 'Equipment'|translate }}</th>\n                      <td>\n                          <div class=\"col-md-8\" *ngIf=\"listEquipRotate\">\n                              <select type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"equipRotate\">\n                                  <option value=\"0\">-- None --</option>\n                                  <option *ngFor=\"let equip of listEquipRotate\" [value]=\"equip.ID_EQUIP\">{{ equip.EQUIP_NAME }} - (v{{equip.EQUIP_VERSION}})</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr>\n              </table>\n            <!-- Display Merge -->\n              <table class=\"table table-sm text-center\" *ngIf=\"statusEquip == 3\">\n                  <tr>\n                      <th style=\"width: 40%\">{{ 'Equipment 1'|translate }}</th>\n                      <td>\n                          <div class=\"col-md-8\" *ngIf=\"listEquipMeger1\">\n                              <select type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"equipMerge1\" (change)=\"selectEquipMerge1()\">\n                                  <option value=\"0\">-- None --</option>\n                                  <option *ngFor=\"let equip of listEquipMeger1\" [value]=\"equip.ID_EQUIP\">{{ equip.EQUIP_NAME }} - (v{{equip.EQUIP_VERSION}})</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr>\n                  <tr>\n                      <th style=\"width: 40%\">{{ 'Equipment 2'|translate }}</th>\n                      <td>\n                          <div class=\"col-md-8\" *ngIf=\"listEquipMeger2\">\n                              <select type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"equipMerge2\" (change)=\"selectEquipMerge2()\">\n                                  <option value=\"0\">-- None --</option>\n                                  <option *ngFor=\"let equip of listEquipMeger2\" [value]=\"equip.ID_EQUIP\">{{ equip.EQUIP_NAME }} - (v{{equip.EQUIP_VERSION}})</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr>\n                  <tr *ngIf=\"equipMerge1 != 0 && equipMerge2 != 0\">\n                      <th *ngIf=\"selectEquipmentMerge1.capabilitiesCalc && selectEquipmentMerge2.capabilitiesCalc; else labelTemperature\">{{ 'Dwelling time' | translate }}</th>\n                      <ng-template #labelTemperature>\n                          <th>{{ 'Regulation temperature' | translate }}</th>\n                      </ng-template>\n                      <td *ngIf=\"selectEquipmentMerge1.capabilitiesCalc && selectEquipmentMerge2.capabilitiesCalc; else temperature\">\n                          <div class=\"input-group col-md-8\">\n                              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.dwellingTime\" placeholder=\"0.00\">\n                              <span class=\"input-group-addon\"><small>{{ timeSymbol }}</small></span>\n                          </div>\n                      </td>\n                      <ng-template #temperature>\n                          <td>\n                              <div class=\"input-group col-md-8\">\n                                  <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"newEquipment.tempSetPoint\" placeholder=\"0.00\">\n                                  <span class=\"input-group-addon\"><small>{{ temperatureSymbol }}</small></span>\n                              </div>\n                          </td>\n                      </ng-template>\n                  </tr>\n              </table>\n          </div>\n      </div>\n      <div class=\"modal-footer btn-equipment\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalAddEquipment.hide()\">{{ 'Cancel'|translate }}</button>\n          <button class=\"btn btn-warning\" (click)=\"checkEquipment(newEquipment, 2)\"><i class=\"fa fa-filter\"></i> Filter</button>\n          <button class=\"btn btn-primary\" [disabled]=\"(equipGenerate == 0 && equipRotate == 0 && equipTranslation == 0\n          && (equipMerge1 == 0 || equipMerge2 == 0))\" (click)=\"checkEquipment(newEquipment, 1)\" [ladda]=\"laddaIsCalculating\">\n          <i class=\"icon-energy\"></i>{{ 'Calculate'|translate }}</button>\n          <button class=\"btn btn-success\" (click)=\"checkEquipment(newEquipment, 0)\" [ladda]=\"laddaIsSaveNew\" [disabled]=\"equipGenerate == 0 && equipRotate == 0\n          && equipTranslation == 0 && (equipMerge1 == 0 || equipMerge2 == 0)\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End modal add equipment -->\n\n<!-- Start TempSetpoint -->\n<div bsModal class=\"modal fade\" #modalTempSetpoint=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <strong>{{'Changing Equipment Temperature Setpoint'|translate}}</strong>\n        <button class=\"close\" arria-label=\"Close\" data-dismiss=\"modal\" (click)=\"modalTempSetpoint.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" *ngIf=\"tempSetPoint\">\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'Current temperature:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPTEMP\" class=\"form-control\" [(ngModel)]=\"tempSetPoint.tr_current\" disabled>\n                <span class=\"input-group-addon\">{{ temperatureSymbol }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-4\" style=\"float:right\">{{'New temperature:'|translate}}</div>\n            <div class=\"col-md-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" name=\"COMPENTH\" class=\"form-control\" [(ngModel)]=\"tempSetPoint.tr_new\">\n                <span class=\"input-group-addon\">{{ temperatureSymbol }}</span>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalTempSetpoint.hide()\">{{ 'Cancel'|translate }}</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"tempSetPoint && selectEquipment\" (click)=\"checkBuildForNewTR(selectEquipment.ID_EQUIP);\"><i class=\"icon-energy\"></i> {{ 'Calculate'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End TempSetpoint -->\n\n<!-- Start equipment Save as -->\n<div bsModal class=\"modal fade\" #modalSaveAsEquipment=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                {{ 'Save Equipment As'|translate }}\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalSaveAsEquipment.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-3\"></div>\n                        <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Name'|translate }}</label>\n                        <div class=\"col-md-4\">\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"saveAsEquipment.nameEquipment\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-3\"></div>\n                        <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Version'|translate }}</label>\n                        <div class=\"col-md-4\">\n                            <input type=\"text\" id=\"version\" name=\"version\" class=\"form-control\" placeholder=\"0.0\" [(ngModel)]=\"saveAsEquipment.versionEquipment\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalSaveAsEquipment.hide()\">{{ 'Cancel'|translate }}</button>\n                <button class=\"btn btn-success\" *ngIf=\"selectEquipment\" (click)=\"newSaveAsEquipment(selectEquipment);\">\n                    <i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Save as equipment-->\n<!-- Start edit data -->\n<div bsModal class=\"modal fade\" #modalReferentialEquip =\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n        <div class=\"modal-content\" style=\"width: 100%;\">\n            <div class=\"modal-header\">\n                <strong> {{ 'Equipment - Data Generated'|translate }}</strong>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalReferentialEquip.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body row\" *ngIf=\"equipCharact\">\n                <div  class=\"col-md-12\" align=\"center\">\n                    <div class=\"row col-md-12 equip-text\">\n                        <span>{{ 'Convection table'|translate }} </span>\n                    </div>\n                    <table class=\"table table-bordered table-sm mb-0\">\n                        <tr>\n                            <td align=\"center\">{{ 'Position'|translate }} <br> (%)</td>\n                            <td align=\"center\">{{ 'Alpha top'|translate }} <br> ({{ convectionCoeffSymbol }})</td>\n                            <td align=\"center\">{{ 'Alpha bottom'|translate }}<br> ({{ convectionCoeffSymbol }})</td>\n                            <td align=\"center\">{{ 'Alpha left'|translate }} <br>({{ convectionCoeffSymbol }})</td>\n                            <td align=\"center\">{{ 'Alpha right'|translate }}<br> ({{ convectionCoeffSymbol }})</td>\n                            <td align=\"center\">{{ 'Alpha front'|translate }}<br> ({{ convectionCoeffSymbol }})</td>\n                            <td align=\"center\">{{ 'Alpha rear'|translate }}<br> ({{ convectionCoeffSymbol }})</td>\n                        </tr>\n                        <tr>\n                            <td align=\"center\" style=\"vertical-align:middle\">{{ equipCharact.X_POSITION }}</td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_TOP\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_BOTTOM\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_LEFT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_RIGHT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_FRONT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.ALPHA_REAR\">\n                            </td>\n                        </tr>\n                    </table>\n                    <div class=\"row col-md-12 equip-text\">\n                        <span>{{ 'Temperature table'|translate }}</span>\n                    </div>\n                    <table class=\"table table-bordered table-sm mb-0\">\n                        <tr>\n                            <td align=\"center\">{{ 'Position'|translate }} <br> (%)</td>\n                            <td align=\"center\">{{ 'Top temperature'|translate }}<br> (°C)</td>\n                            <td align=\"center\">{{ 'Temperature bottom'|translate }} <br>(°C)</td>\n                            <td align=\"center\">{{ 'Temperature left'|translate }} <br>(°C)</td>\n                            <td align=\"center\">{{ 'Temperature right'|translate }} <br>(°C)</td>\n                            <td align=\"center\">{{ 'Temperature front'|translate }}<br> (°C)</td>\n                            <td align=\"center\">{{ 'Temperature rear'|translate }} <br>(°C)</td>\n                        </tr>\n                        <tr>\n                            <td align=\"center\" style=\"vertical-align:middle\">{{ equipCharact.X_POSITION }}</td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_TOP\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_BOTTOM\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_LEFT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_RIGHT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_FRONT\">\n                            </td>\n                            <td align=\"center\" style=\"vertical-align:middle\">\n                                <input type=\"text\" class=\"form-control col-md-6 input-small\" [(ngModel)]=\"equipCharact.TEMP_REAR\">\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div><!-- modal-body -->\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalReferentialEquip.hide()\">{{ 'Cancel'|translate }}</button>\n                <button class=\"btn btn-success\" *ngIf=\"equipCharact\" (click)=\"updateEquipCharact(equipCharact.ID_EQUIPCHARAC);\">{{ 'Confirm'|translate }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End edit data -->\n\n<!-- Start Convection chart style=\"max-width:70%;\"-->\n<div bsModal class=\"modal fade\" #modalEquipmentProfil=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\" style=\"max-width:60%;\" *ngIf=\"!isLoadingChart\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <strong>{{ 'Equipment Profil - Modify'|translate }}</strong>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalEquipmentProfil.hide()\">\n                <span aria-hidden=\"true\">×</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"card\" *ngIf=\"dataHighChart\">\n                <div class=\"card-header\">\n                    <strong>{{ 'Vertical scale'|translate }}</strong>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\" >\n                                <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Minimum value'|translate }}</label>\n                                <div class=\"col-md-6\">\n                                    <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" [(ngModel)]=\"dataHighChart.MiniMum\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\" >\n                                <label class=\"col-md-5 col-form-label\" for=\"text-input\">{{ 'Maximum value'|translate }}</label>\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" [(ngModel)]=\"dataHighChart.MaxiMum\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\" >\n                                <label class=\"col-md-6 col-form-label\" for=\"text-input\">{{ 'Selected point'|translate }}\t</label>\n                                <div class=\"col-md-6\">\n                                    <input type=\"text\" id=\"circle_position\" name=\"text-input\" class=\"form-control\" [value]=\"\" disabled>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\" >\n                                <div class=\"col-md-5\"></div>\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" id=\"circle_value\" name=\"text-input\" class=\"form-control\" (change)=\"setpoint();\"\n                                    [(ngModel)]=\"circleValue\" (keypress)=\"setpointenter($event);\" [disabled]=\"disabledYvalue == true\">\n                                </div>\n                            </div>\n                        </div>\n                        <input type=\"hidden\" id=\"newprofil\" name=\"newprofil\" value=\"\">\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"row text-center\" style=\"display: flex; align-items: center; justify-content: center;\">\n                        <button type=\"button\" id=\"rescale\" class=\"btn btn-success btn-sm\" style=\"margin-right: 10px;\" (click)=\"refreshScaleChart();\" [disabled]=\"disabledConfirm == 0\"> {{ 'Apply'|translate }}</button>\n                        <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-right: 10px;\" (click)=\"clearSelectedPoints();\" >{{ 'Initialize'|translate }}</button>\n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" style=\"margin-right: 10px;\" (click)=\"submitGenerate();\">{{ 'Generate'|translate }}</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\" *ngIf=\"dataHighChart\">\n                <div class=\"card-header\">\n                    <strong>{{ 'Profile'|translate }}</strong>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <!-- <highcharts-chart #tempProfileChart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"></highcharts-chart> -->\n                            <svg id=\"dropzone\" [attr.width]=\"dataHighChart.imageWidth\" [attr.height]=\"dataHighChart.imageHeight\" (mousemove)=\"movepoint($event);\">\n                                <!-- Background -->\n                                <rect x=\"0\" y=\"0\" [attr.width]=\"dataHighChart.imageWidth\" [attr.height]=\"dataHighChart.imageHeight\" fill=\"#CAE1F7\" stroke=\"#CAE1F7\" />\n\n                                <!-- Interactive zone -->\n                                <rect [attr.x]=\"dataHighChart.imageMargeWidth\" [attr.y]=\"dataHighChart.imageMargeHeight\"\n                                      [attr.width]=\"(dataHighChart.imageWidth) - (2*dataHighChart.imageMargeWidth)\"\n                                      [attr.height]=\"(dataHighChart.imageHeight) - (2*dataHighChart.imageMargeHeight)\"\n                                        fill=\"#FFFFFF\" stroke=\"#FFFFFF\" />\n\n                                <!-- Axis X -->\n                                <line x1=\"75\" y1=\"300\" x2=\"895\" y2=\"300\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <line x1=\"885\" y1=\"295\" x2=\"895\" y2=\"300\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <line x1=\"885\" y1=\"305\" x2=\"895\" y2=\"300\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <text x=\"905\" y=\"300\" text-anchor=\"start\" style=\"font-size:9pt\">%</text>\n                                <text x=\"475\" y=\"340\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ 'Position within the equipment'|translate }}</text>\n                                <!-- for -->\n                                <text *ngFor=\"let x of dataHighChart.X\" [attr.x]=\"x.textX\" y=\"320\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ x.position }}</text>\n                                <line *ngFor=\"let x of dataHighChart.X\" [attr.x1]=\"x.textX\" y1=\"300\" [attr.x2]=\"x.textX\" y2=\"310\" stroke=\"#000000\" stroke-width=\"2\" />\n\n                                <!-- Axis Y -->\n                                <line x1=\"75\" y1=\"300\" x2=\"75\" y2=\"30\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <line x1=\"75\" y1=\"300\" x2=\"75\" y2=\"30\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <line x1=\"70\" y1=\"40\" x2=\"75\" y2=\"30\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <line x1=\"80\" y1=\"40\" x2=\"75\" y2=\"30\" stroke=\"#000000\" stroke-width=\"2\" />\n\n                                <text *ngIf=\"profileType == 1; else kwm\" x=\"75\" y=\"25\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ convectionCoeffSymbol }}</text>\n                                <ng-template #kwm>\n                                    <text x=\"75\" y=\"25\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ temperatureSymbol }}</text>\n                                </ng-template>\n\n                                <text *ngIf=\"profileType == 1; else convection\" x=\"75\" y=\"10\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ 'Convection'|translate }}</text>\n                                <ng-template #convection>\n                                    <text x=\"75\" y=\"10\" text-anchor=\"middle\" style=\"font-size:9pt\">{{ 'Temperature'|translate }}</text>\n                                </ng-template>\n\n                                <line *ngFor=\"let y of dataHighChart.Y\" [attr.x1]=\"y.x1\" [attr.y1]=\"y.y1\" [attr.x2]=\"y.x2\" [attr.y2]=\"y.y2\" stroke=\"#000000\" stroke-width=\"2\" />\n                                <text *ngFor=\"let y of dataHighChart.Y\" [attr.x]=\"y.textX\" [attr.y]=\"y.textY\" text-anchor=\"end\" style=\"font-size:9pt\">{{ y.position }}</text>\n\n                                <!-- link all points -->\n                                <path id=\"profilLine\" [attr.d]=\"dataHighChart.path\" fill=\"none\" stroke=\"#0000FF\" stroke-width=\"2\" />\n\n                                <!-- Points -->\n                                <circle *ngFor=\"let point of dataHighChart.ListOfPoints; let i = index\" id=\"c{{i}}\" [attr.cx]=\"point.X_POSITION\"\n                                [attr.cy]=\"point.Y_POINT\" r=\"3\" fill=\"#D5D5FF\" stroke=\"#000000\" stroke-width=\"1\"\n                                (mouseover)=\"circleover($event, i);\" (mouseout)=\"circleout($event, i);\" (mousedown)=\"selectpoint($event, i);\"\n                                />\n                            </svg>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\" *ngIf=\"dataHighChart\">\n                <div class=\"card-header\">\n                    <strong>{{ 'Select all face to save with the same profil:'|translate }}</strong>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <table class=\"table table-bordered table-sm mb-0\">\n                            <tr *ngIf=\"profileType && profileType == 1; else temperatureV\">\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha top'|translate }}</td>\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha bottom'|translate }}</td>\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha left'|translate }}</td>\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha right'|translate }}</td>\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha front'|translate }}</td>\n                                <td style=\"vertical-align:middle;text-align:center\">{{ 'Alpha rear'|translate }} </td>\n                            </tr>\n                            <ng-template #temperatureV>\n                                <tr>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Top temperature'|translate }}</td>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Temperature bottom'|translate }}</td>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Temperature left'|translate }}</td>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Temperature right'|translate }}</td>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Temperature front'|translate }}</td>\n                                    <td style=\"vertical-align:middle;text-align:center\">{{ 'Temperature rear'|translate }} </td>\n                                </tr>\n                            </ng-template>\n                            <tr>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"0\" [(ngModel)]=\"dataHighChart.checkTop\" [disabled]=\"isSelectChart == 0\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"1\" [(ngModel)]=\"dataHighChart.checkButton\" [disabled]=\"isSelectChart == 1\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"2\" [(ngModel)]=\"dataHighChart.checkLeft\" [disabled]=\"isSelectChart == 2\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"3\" [(ngModel)]=\"dataHighChart.checkRight\" [disabled]=\"isSelectChart == 3\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"4\" [(ngModel)]=\"dataHighChart.checkFront\" [disabled]=\"isSelectChart == 4\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                                <td align=\"center\">\n                                    <div style=\"margin-top:0.5em\">\n                                        <label class=\"custom-control custom-checkbox\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" value=\"5\" [(ngModel)]=\"dataHighChart.checkRear\" [disabled]=\"isSelectChart == 5\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalEquipmentProfil.hide()\">{{ 'Cancel'|translate }}</button>\n            <button class=\"btn btn-success\" id=\"confirmButton\" (click)=\"submitProfil();\" [disabled]=\"disabledConfirm == 0\">{{ 'Confirm'|translate }}</button>\n        </div>\n        </div>\n    </div>\n</div>\n<!-- End Convection chart -->\n\n<!-- Start filter -->\n<div bsModal class=\"modal fade\" #modalFilter=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\" style=\"max-width:70%;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header \">\n            <strong>{{ 'Modification of the filter'|translate }}</strong>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalFilter.hide()\">\n                <span aria-hidden=\"true\">×</span>\n            </button>\n        </div>\n        <div class=\"modal-body row\" *ngIf=\"filterEquipment\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                    <label class=\"col-md-4 col-form-label\" for=\"ref-line-name-add\">{{ 'Zone number '|translate }}</label>\n                    <div class=\"col-md-3\" *ngIf=\"filterEquipment.NUMBER_OF_ZONES > 0; else numberOfZonesEmpty\">\n                        <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0 form-control-sm\" [(ngModel)]=\"zoneNumber\">\n                            <option *ngFor=\"let num of counter(filterEquipment.NUMBER_OF_ZONES); let i = index\" [value]=\"i + 1\">{{ i + 1 }}</option>\n                        </select>\n                    </div>\n                    <ng-template #numberOfZonesEmpty>\n                        <select [disabled]=\"!disableFilter\" class=\"custom-select mb-2 mr-sm-2 mb-sm-0 form-control-sm\">\n                            <option value=\"0\">0</option>\n                        </select>\n                    </ng-template>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                    <label class=\"col-md-4 col-form-label\" for=\"ref-line-name-add\">{{ 'Length / Entry'|translate }}</label>\n                    <div class=\"col-md-4\">\n                        <input [disabled]=\"disableFilter\" type=\"text\" [(ngModel)]=\"filterEquipment.EquipZone[zoneNumber - 1].EQUIP_ZONE_LENGTH\" class=\"form-control form-control-sm\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                    <label class=\"col-md-4 col-form-label\" for=\"ref-line-name-add\">{{ 'Zone name'|translate }}</label>\n                    <div class=\"col-md-4\">\n                        <input [disabled]=\"disableFilter\" type=\"text\" [(ngModel)]=\"filterEquipment.EquipZone[zoneNumber - 1].EQUIP_ZONE_NAME\" class=\"form-control form-control-sm\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-1\"></div>\n                    <label class=\"col-md-4 col-form-label\" for=\"ref-line-name-add\">{{ 'Is Temperature Sensor?'|translate }}</label>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\">\n                            <input [disabled]=\"disableFilter\" type=\"radio\" class=\"custom-control-input\" name=\"filter-equip\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].TEMP_SENSOR = 1\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TEMP_SENSOR == 1\">{{ 'YES'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input [disabled]=\"disableFilter\" type=\"radio\" class=\"custom-control-input\" name=\"filter-equip\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].TEMP_SENSOR = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TEMP_SENSOR != 1\">{{ 'NO'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <table class=\"table table-bordered table-sm text-center\" style=\"font-size: 12px;\">\n                    <thead>\n                        <tr>\n                            <th></th>\n                            <th width=\"13%\">{{ 'Top'|translate}}</th>\n                            <th width=\"13%\">{{'Bottom'|translate}}</th>\n                            <th width=\"13%\">{{'Left'|translate}}</th>\n                            <th width=\"13%\">{{'Right'|translate}}</th>\n                            <th width=\"13%\">{{'Front'|translate}}</th>\n                            <th width=\"13%\">{{'Rear'|translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>{{'Adiabatic'|translate}}</td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-top\" >{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-top\" >{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-bottom\" >{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-bottom\" >{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-left\" >{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-left\">{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE = 0\"  [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-right\">{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-right\" >{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-front\" >{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-front\" >{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                            <td>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT = 1; filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 1\" class=\"custom-control-input\" name=\"adiabatic-rear\" >{{ 'YES'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                                <label class=\"custom-control custom-radio\" >\n                                    <input [disabled]=\"disableFilter\" type=\"radio\" (change)=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT = 0\" [checked]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT != 1\" class=\"custom-control-input\" name=\"adiabatic-rear\">{{ 'NO'|translate }}\n                                    <span class=\"custom-control-indicator\"></span>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Profile type'|translate}}</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <select [disabled]=\"disableFilter\" class=\"form-control form-control-sm\" [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE\">\n                                        <option value=\"0\">None</option>\n                                        <option value=\"1\">Multiplier</option>\n                                        <option value=\"2\">Alpha fixed</option>\n                                        <option value=\"3\">Insulating equation</option>\n                                    </select>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Coefficient'|translate}}</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 1\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'AlphaI/Alpha in the mylar zone'|translate}} <br>({{ convectionCoeffSymbol }})</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 2\">\n                                        <input  [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Alpha spraying zone'|translate}} <br>({{ convectionCoeffSymbol }})</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Alpha stabilization zone'|translate}} <br>({{ convectionCoeffSymbol }})</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 2\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 2\">\n                                        <input  [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM3\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Insulation thickness'|translate}} ({{ lengthSymbol }})</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM1\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Insulation conductivity'|translate}} <br>({{ conductivitySymbol }})</td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].TOP_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].BOTTOM_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].LEFT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].RIGHT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].FRONT_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_ADIABAT == 0\">\n                                    <div class=\"col-md-12\" *ngIf=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_CHANGE == 3\">\n                                        <input [disabled]=\"disableFilter\" type=\"text\" class=\"form-control form-control-sm\"\n                                        [(ngModel)]=\"filterEquipment.EquipGenZone[zoneNumber - 1].REAR_PRM2\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"modal-footer btn-equipment\">\n            <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalFilter.hide()\">{{ 'Cancel'|translate }}</button>\n            <button class=\"btn btn-success\" *ngIf=\"!disableFilter\" (click)=\"confirmFilter()\"><i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- End filter -->\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n\n<app-spinner *ngIf=\"isLoadingChart\"></app-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/views/references/equipment/equipment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-small {\n  padding: 3px; }\n\n.card-status {\n  margin: auto;\n  padding-top: 25px; }\n\n.study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n\n.btn-equipment {\n  margin: auto; }\n\n.highcharts-credits {\n  display: none; }\n\n.equip-text {\n  text-align: inherit;\n  padding-bottom: 5px;\n  padding-left: 0px;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/references/equipment/equipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EquipmentFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_services_referencedata_service__ = __webpack_require__("../../../../../src/app/api/services/referencedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_models__ = __webpack_require__("../../../../../src/app/api/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_draggable_points__ = __webpack_require__("../../../../highcharts-draggable-points/draggable-points.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_draggable_points___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highcharts_draggable_points__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_highcharts_chart_highcharts_chart_component__ = __webpack_require__("../../../../../src/app/components/highcharts-chart/highcharts-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















__WEBPACK_IMPORTED_MODULE_10_highcharts_draggable_points__(__WEBPACK_IMPORTED_MODULE_9_highcharts__);


var EquipmentFilterPipe = (function () {
    function EquipmentFilterPipe() {
    }
    EquipmentFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.EQUIP_NAME.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    EquipmentFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'equipFilter' })
    ], EquipmentFilterPipe);
    return EquipmentFilterPipe;
}());

var EquipmentComponent = (function () {
    function EquipmentComponent(referencedata, toastr, router, translate) {
        this.referencedata = referencedata;
        this.toastr = toastr;
        this.router = router;
        this.translate = translate;
        this.valTop = 1;
        this.valBottom = 1;
        this.valLeft = 1;
        this.valRight = 1;
        this.valFront = 1;
        this.valRear = 1;
        this.zoneNumber = 1;
        this.checkHideInfo = false;
        this.checkActiveEquip = 0;
        this.disableFilter = false;
        this.activePageEquipment = '';
        this.statusEquip = 0;
        this.equipGenerate = 0;
        this.equipRotate = 0;
        this.equipTranslation = 0;
        this.equipMerge1 = 0;
        this.equipMerge2 = 0;
        this.filterString = '';
        this.isLoading = false;
        this.laddaIsCalculating = false;
        this.newRamp = {};
        this.newShelve = {};
        this.newConsumption = {};
        this.laddaIsEquipmentCalculating = false;
        this.xConvection = [];
        this.yConvection = [];
        this.xTemperature = [];
        this.yTemperature = [];
        this.isSelectChart = 0;
        this.Curvescharts = __WEBPACK_IMPORTED_MODULE_9_highcharts__;
        this.chartTempCurvesOptions = {
            chart: {
                renderTo: 'container',
            },
            title: {
                text: this.translate.instant('Highcharts line curves')
            },
            rangeSelector: {
                selected: 6
            },
            tooltip: {
                yDecimals: 2
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            xAxis: {
                title: {
                    text: '(%)'
                },
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
            yAxis: {
                title: {
                    text: this.translate.instant('Temperature (°C)')
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            series: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 7, 9],
                    name: this.translate.instant('Top')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Bottom')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Left')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Right')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Front')
                },
                {
                    data: [9, 10, 11, 12, 5, 14, 15, 7, 17],
                    name: this.translate.instant('Rear')
                }]
        };
        this.chartConvecCurvesOptions = {
            chart: {
                renderTo: 'container',
            },
            title: {
                text: this.translate.instant('Highcharts line curves')
            },
            rangeSelector: {
                selected: 6
            },
            tooltip: {
                yDecimals: 2
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            xAxis: {
                title: {
                    text: '(%)'
                },
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
            yAxis: {
                title: {
                    text: '(Kw/(m².°C)'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            series: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 7, 9],
                    name: this.translate.instant('Top')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Bottom')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Left')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Right')
                },
                {
                    data: [5, 6, 7, 8, 8, 10, 11, 3, 13],
                    name: this.translate.instant('Front')
                },
                {
                    data: [9, 10, 11, 12, 5, 14, 15, 7, 17],
                    name: this.translate.instant('Rear')
                }]
        };
        this.Highcharts = __WEBPACK_IMPORTED_MODULE_9_highcharts__;
        this.chartOptions = {
            chart: {
                renderTo: 'container',
                animation: false,
                zoomType: 'x',
            },
            title: {
                text: this.translate.instant('Highcharts draggable points Convection')
            },
            tooltip: {
                // enabled: false
                yDecimals: 2
            },
            xAxis: {
                title: {
                    text: '(%)'
                },
                categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            },
            yAxis: {
                title: {
                    text: '(Kw/(m².°C)'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            column: {
                stacking: 'normal'
            },
            line: {
                cursor: 'ns-resize'
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    cursor: 'pointer',
                    allowPointSelect: true,
                    point: {
                        events: {
                            // click: function (Event) {
                            //   alert('Name: ' + this.category + ', Value: ' + this.y + ', Series :' + this.series.name);
                            // },
                            drag: function (e) {
                                alert('Name: ' + this.category + ', Value: ' + __WEBPACK_IMPORTED_MODULE_9_highcharts__["numberFormat"](this.y, 2) + ', Series :' + this.series.name);
                            }
                        }
                    }
                }
            },
            series: [{
                    data: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 3, 4, 6, 6, 7, 4, 5],
                    draggableY: true,
                    dragMinY: 0
                }]
        };
        this.laddaCurve = false;
        this.checkData = false;
        this.selectedPoint = null;
        this.currentpos = -1;
        this.profileType = 0;
        this.isLoadingChart = false;
        this.disabledConfirm = 1;
        this.disabledYvalue = true;
        this.circleValue = null;
        this.checkActive = null;
        // add by haidt
        this.equipDimensionSymbol = '';
        this.temperatureSymbol = '';
        this.rampsPositionSymbol = '';
        this.shelvesWidthSymbol = '';
        this.timeSymbol = '';
        this.laddaIsSaveNew = false;
        this.convectionCoeffSymbol = '';
        this.lengthSymbol = '';
        this.conductivitySymbol = '';
        this.checkBackStudy = 0;
        this.activePageEquipment = 'load';
        this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
        this.saveAsEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["k" /* SaveAsEquipment */]();
        this.equipGenerationDefault = new __WEBPACK_IMPORTED_MODULE_7__api_models__["c" /* EquipGeneration */]();
        this.newEquipCharact = new __WEBPACK_IMPORTED_MODULE_7__api_models__["b" /* EquipCharact */]();
        localStorage.setItem('equipCurr', '');
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getListEquipmentFamily();
        this.study = JSON.parse(localStorage.getItem('study'));
        this.isLoading = true;
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (Number(this.listUnits[i].TYPE_UNIT) === 21) {
                    this.equipDimensionSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 8) {
                    this.temperatureSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 23) {
                    this.rampsPositionSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 22) {
                    this.shelvesWidthSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 5) {
                    this.timeSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 14) {
                    this.convectionCoeffSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 3) {
                    this.lengthSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 10) {
                    this.conductivitySymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
        var idEquip = localStorage.getItem('inputIdEquip');
        if (idEquip !== 'null') {
            this.referencedata.getInputEquipment(Number(idEquip)).subscribe(function (data) {
                localStorage.setItem('equipCurr', JSON.stringify(data));
                var equipCurr = JSON.parse(localStorage.getItem('equipCurr'));
                if (equipCurr) {
                    _this.checkActiveEquip = Number(equipCurr.ID_EQUIP);
                    _this.selectEquipment = equipCurr;
                    _this.getListRamps(equipCurr.ID_EQUIP);
                    _this.getListConsumptions(equipCurr.ID_EQUIP);
                    _this.getListShelves(equipCurr.ID_EQUIP);
                }
            }, function (err) {
                console.log(err);
            }, function () {
                localStorage.setItem('inputIdEquip', null);
                _this.checkBackStudy = 1;
            });
        }
    };
    EquipmentComponent.prototype.ngAfterViewInit = function () {
        this.refrestListEquipment();
    };
    EquipmentComponent.prototype.refrestListEquipment = function () {
        var _this = this;
        this.isLoading = true;
        this.referencedata.findRefEquipment()
            .subscribe(function (data) {
            _this.listEquipment = data;
            _this.listEquipGenerateAll = (data.mine).concat(data.others);
            _this.listEquipGenerate = [];
            for (var i = 0; i < _this.listEquipGenerateAll.length; i++) {
                if (_this.listEquipGenerateAll[i].equipGeneration === null) {
                    _this.listEquipGenerateAll[i].equipGeneration = _this.equipGenerationDefault;
                }
                if (Number(_this.listEquipGenerateAll[i].STD) === 1 && Number(_this.listEquipGenerateAll[i].EQUIP_RELEASE) !== 5) {
                    _this.listEquipGenerate.push(_this.listEquipGenerateAll[i]);
                }
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
            if (localStorage.getItem('equipCurr') !== '') {
                var equipCurr = JSON.parse(localStorage.getItem('equipCurr'));
                if (equipCurr) {
                    _this.checkActiveEquip = Number(equipCurr.ID_EQUIP);
                    _this.selectEquipment = equipCurr;
                    _this.getListRamps(equipCurr.ID_EQUIP);
                    _this.getListConsumptions(equipCurr.ID_EQUIP);
                    _this.getListShelves(equipCurr.ID_EQUIP);
                }
            }
        });
    };
    EquipmentComponent.prototype.selectEquipGenerate = function () {
        for (var _i = 0, _a = this.listEquipGenerate; _i < _a.length; _i++) {
            var equip = _a[_i];
            if (Number(equip.ID_EQUIP) === Number(this.equipGenerate)) {
                this.selectEquipGener = equip;
                // console.log(this.selectEquipGener);
                break;
            }
        }
    };
    EquipmentComponent.prototype.selectEquipTranslation = function () {
        if (Number(this.equipTranslation) === 0) {
            this.selectEquipTranslate.equipGeneration.NEW_POS = 0;
            this.selectEquipTranslate.equipGeneration.DWELLING_TIME = 0;
        }
        for (var _i = 0, _a = this.listEquipRotate; _i < _a.length; _i++) {
            var equip = _a[_i];
            if (Number(equip.ID_EQUIP) === Number(this.equipTranslation)) {
                this.selectEquipTranslate = equip;
                break;
            }
        }
    };
    EquipmentComponent.prototype.selectEquipMerge1 = function () {
        for (var _i = 0, _a = this.listEquipMeger1; _i < _a.length; _i++) {
            var equip = _a[_i];
            if (Number(equip.ID_EQUIP) === Number(this.equipMerge1)) {
                this.selectEquipmentMerge1 = equip;
                break;
            }
        }
        if (Number(this.equipMerge1) === 0) {
            this.equipMerge2 = 0;
        }
    };
    EquipmentComponent.prototype.selectEquipMerge2 = function () {
        for (var _i = 0, _a = this.listEquipMeger1; _i < _a.length; _i++) {
            var equip = _a[_i];
            if (Number(equip.ID_EQUIP) === Number(this.equipMerge2)) {
                this.selectEquipmentMerge2 = equip;
                break;
            }
        }
    };
    EquipmentComponent.prototype.chooseGenerate = function () {
        this.statusEquip = 0;
        this.selectEquipGener = new __WEBPACK_IMPORTED_MODULE_7__api_models__["j" /* RefEquipment */]();
        this.equipGenerate = 0;
        this.equipTranslation = 0;
        this.equipRotate = 0;
        this.equipMerge1 = 0;
        this.equipMerge2 = 0;
        this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
    };
    EquipmentComponent.prototype.chooseTranslate = function () {
        this.statusEquip = 1;
        this.getEquipmentRotateTranslation();
        this.selectEquipTranslate = new __WEBPACK_IMPORTED_MODULE_7__api_models__["j" /* RefEquipment */]();
        this.selectEquipTranslate.equipGeneration = new __WEBPACK_IMPORTED_MODULE_7__api_models__["c" /* EquipGeneration */]();
        this.equipGenerate = 0;
        this.equipTranslation = 0;
        this.equipRotate = 0;
        this.equipMerge1 = 0;
        this.equipMerge2 = 0;
        this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
    };
    EquipmentComponent.prototype.chooseRotate = function () {
        this.statusEquip = 2;
        this.getEquipmentRotateTranslation();
        this.equipGenerate = 0;
        this.equipTranslation = 0;
        this.equipRotate = 0;
        this.equipMerge1 = 0;
        this.equipMerge2 = 0;
        this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
    };
    EquipmentComponent.prototype.chooseMerge = function () {
        this.statusEquip = 3;
        this.getEquipmentMerge();
        this.equipGenerate = 0;
        this.equipTranslation = 0;
        this.equipRotate = 0;
        this.equipMerge1 = 0;
        this.equipMerge2 = 0;
        this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
    };
    EquipmentComponent.prototype.getEquipmentRotateTranslation = function () {
        this.listEquipRotate = [];
        for (var i = 0; i < this.listEquipGenerateAll.length; i++) {
            if (this.listEquipGenerateAll[i].equipGeneration === null) {
                this.listEquipGenerateAll[i].equipGeneration = this.equipGenerationDefault;
            }
            if (Number(this.listEquipGenerateAll[i].STD) !== 1 && Number(this.listEquipGenerateAll[i].EQUIP_RELEASE) !== 5) {
                this.listEquipRotate.push(this.listEquipGenerateAll[i]);
            }
        }
    };
    EquipmentComponent.prototype.getEquipmentMerge = function () {
        this.listEquipMeger1 = [];
        this.listEquipMeger2 = [];
        for (var i = 0; i < this.listEquipGenerateAll.length; i++) {
            if (this.listEquipGenerateAll[i].equipGeneration === null) {
                this.listEquipGenerateAll[i].equipGeneration = this.equipGenerationDefault;
            }
            if (Number(this.listEquipGenerateAll[i].EQUIP_RELEASE) !== 5) {
                this.listEquipMeger1.push(this.listEquipGenerateAll[i]);
                this.listEquipMeger2.push(this.listEquipGenerateAll[i]);
            }
        }
    };
    EquipmentComponent.prototype.saveNewEquipment = function (typeCalculate) {
        var _this = this;
        if (typeCalculate === void 0) { typeCalculate = 0; }
        this.newEquipment.typeEquipment = this.statusEquip;
        this.newEquipment.typeCalculate = typeCalculate;
        if (Number(this.statusEquip) === 0) {
            this.newEquipment.equipmentId1 = this.selectEquipGener.ID_EQUIP;
            if (!this.selectEquipGener.capabilitiesCalc) {
                this.newEquipment.dwellingTime = 0;
            }
            else {
                this.newEquipment.tempSetPoint = 0;
            }
        }
        else if (Number(this.statusEquip) === 1) {
            this.newEquipment.equipmentId1 = this.equipTranslation;
        }
        else if (Number(this.statusEquip) === 2) {
            this.newEquipment.equipmentId1 = this.equipRotate;
        }
        else if (Number(this.statusEquip) === 3) {
            this.newEquipment.equipmentId1 = this.equipMerge1;
            this.newEquipment.equipmentId2 = this.equipMerge2;
        }
        if (this.filterEquipment) {
            this.newEquipment.equipGenZone = this.filterEquipment.EquipGenZone;
        }
        else {
            this.newEquipment.equipGenZone = null;
        }
        if (typeCalculate === 1) {
            this.laddaIsCalculating = true;
        }
        else if (typeCalculate === 0) {
            this.laddaIsSaveNew = true;
        }
        this.referencedata.newEquipment(this.newEquipment).subscribe(function (response) {
            var success = true;
            if (response === -4) {
                _this.laddaIsCalculating = false;
                _this.laddaIsSaveNew = false;
                success = false;
                _this.toastr.error(_this.translate.instant('Name and version already in use!'), 'Error');
                return;
            }
            else if (response === -5) {
                _this.laddaIsCalculating = false;
                _this.laddaIsSaveNew = false;
                success = false;
                _this.toastr.error(_this.translate.instant('Run calculate error'), 'Error');
                return;
            }
            else if (success) {
                localStorage.setItem('equipCurr', JSON.stringify(response));
                _this.checkHideInfo = false;
                _this.selectEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["j" /* RefEquipment */]();
                _this.laddaIsCalculating = false;
                _this.laddaIsSaveNew = false;
                _this.toastr.success(_this.translate.instant('Create equipment'), 'successfully');
                _this.modalAddEquipment.hide();
                _this.refrestListEquipment();
                _this.newEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["e" /* NewEquipment */]();
                _this.equipGenerate = 0;
                _this.equipRotate = 0;
                _this.equipTranslation = 0;
                _this.equipMerge1 = 0;
                _this.equipMerge2 = 0;
            }
            else {
                _this.toastr.error(_this.translate.instant('Create equipment'), 'ERROR');
            }
        }, function (err) {
            console.log(err);
            _this.laddaIsCalculating = false;
            _this.laddaIsSaveNew = false;
        }, function () {
            _this.laddaIsCalculating = false;
            _this.laddaIsSaveNew = false;
        });
    };
    EquipmentComponent.prototype.newSaveAsEquipment = function (equipment) {
        var _this = this;
        if (!this.saveAsEquipment.nameEquipment || this.saveAsEquipment.nameEquipment === undefined) {
            this.toastr.error(this.translate.instant('Please specify name!'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.saveAsEquipment.nameEquipment)) {
            this.toastr.error(this.translate.instant('Not a valid string in Name !'), 'Error');
            return;
        }
        if (!this.saveAsEquipment.versionEquipment) {
            this.toastr.error(this.translate.instant('Please specify version!'), 'Error');
            return;
        }
        if (isNaN(this.saveAsEquipment.versionEquipment)) {
            this.toastr.error(this.translate.instant('Not a valid number in Version !'), 'Error');
            return;
        }
        this.referencedata.saveAsEquipment({
            versionEquipment: this.saveAsEquipment.versionEquipment,
            nameEquipment: this.saveAsEquipment.nameEquipment,
            equipmentId: equipment.ID_EQUIP
        }).subscribe(function (response) {
            var success = true;
            if (response === 1) {
                success = true;
            }
            if (response === -4) {
                success = false;
                _this.toastr.error(_this.translate.instant('Save as equipment'), _this.translate.instant('Name and version already in use!'));
                return;
            }
            if (success) {
                _this.laddaIsCalculating = false;
                _this.toastr.success(_this.translate.instant('Save as equipment'), 'successfully');
                _this.modalSaveAsEquipment.hide();
                _this.refrestListEquipment();
                _this.saveAsEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["k" /* SaveAsEquipment */]();
            }
            else {
                _this.toastr.error(_this.translate.instant('Save as equipment'), 'ERROR');
            }
        }, function (err) {
        }, function () {
        });
    };
    EquipmentComponent.prototype.updateEquipment = function (selectEquipment) {
        var _this = this;
        this.referencedata.saveEquipment({
            ID_EQUIP: selectEquipment.ID_EQUIP,
            EQUIP_NAME: selectEquipment.EQUIP_NAME,
            EQUIP_VERSION: selectEquipment.EQUIP_VERSION,
            EQUIP_COMMENT: selectEquipment.EQUIP_COMMENT,
            EQUIP_RELEASE: selectEquipment.EQUIP_RELEASE,
            EQP_LENGTH: selectEquipment.EQP_LENGTH,
            EQP_HEIGHT: selectEquipment.EQP_HEIGHT,
            EQP_WIDTH: selectEquipment.EQP_WIDTH,
            NB_TR: selectEquipment.NB_TR,
            NB_TS: selectEquipment.NB_TS,
            NB_VC: selectEquipment.NB_VC,
            MAX_FLOW_RATE: selectEquipment.MAX_FLOW_RATE,
            TMP_REGUL_MIN: selectEquipment.TMP_REGUL_MIN,
            MAX_NOZZLES_BY_RAMP: selectEquipment.MAX_NOZZLES_BY_RAMP,
            MAX_RAMPS: selectEquipment.MAX_RAMPS,
            Ramps: this.rampsArray,
            Shelves: this.shelvesArray,
            Consumptions: this.consumptionsArray,
        }).subscribe(function (response) {
            var success = true;
            if (response === 1) {
                success = true;
            }
            if (success) {
                _this.toastr.success(_this.translate.instant('Update equipment'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Update equipment'), 'ERROR');
            }
        }, function (err) {
        }, function () {
        });
    };
    EquipmentComponent.prototype.deleteEquipment = function (equip) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won`t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes, delete it!')
        }).then(function (result) {
            if (result.value) {
                _this.referencedata.deleteEquipment(equip.ID_EQUIP).subscribe(function (response) {
                    if (response === 1) {
                        _this.refrestListEquipment();
                        _this.toastr.success(_this.translate.instant('Delete equipment'), 'successfully');
                        _this.selectEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["j" /* RefEquipment */]();
                        _this.checkHideInfo = true;
                    }
                    else {
                        _this.toastr.error(_this.translate.instant('Delete equipment'), 'Error');
                    }
                }, function (err) {
                    console.log(err);
                }, function () {
                });
            }
        });
    };
    EquipmentComponent.prototype.startEquipmentCalculate = function (selectEquipment) {
        var _this = this;
        this.laddaIsEquipmentCalculating = true;
        this.referencedata.startEquipmentCalculate(selectEquipment.ID_EQUIP).subscribe(function (response) {
            _this.laddaIsEquipmentCalculating = false;
            var success = true;
            if (response !== 0) {
                success = false;
            }
            if (success) {
                _this.getEquipCharacts(selectEquipment.ID_EQUIP);
                _this.toastr.success(_this.translate.instant('Run equipment calculate'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Run equipment calculate'), 'ERROR');
            }
        }, function (err) {
            _this.laddaIsEquipmentCalculating = false;
        }, function () {
            _this.laddaIsEquipmentCalculating = false;
        });
    };
    EquipmentComponent.prototype.getEquipCharacts = function (idEquip) {
        var _this = this;
        this.isLoading = true;
        this.referencedata.getEquipmentCharacts(idEquip).subscribe(function (data) {
            _this.equipCharacts = data;
            if (_this.equipCharacts.length > 0) {
                _this.checkData = true;
            }
            else {
                _this.checkData = false;
            }
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    EquipmentComponent.prototype.deleteEquipCharacts = function (equip) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won`t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes, delete it!')
        }).then(function (result) {
            if (result.value) {
                _this.referencedata.deleteEquipCharacts(equip.ID_EQUIP).subscribe(function (response) {
                    if (response === 1) {
                        _this.getEquipCharacts(equip.ID_EQUIP);
                        _this.toastr.success(_this.translate.instant('Delete all point'), 'successfully');
                    }
                    else {
                        _this.toastr.success(_this.translate.instant('Delete all point'), 'Error');
                    }
                }, function (err) {
                    console.log(err);
                }, function () {
                });
            }
        });
    };
    EquipmentComponent.prototype.addOnePoint = function (idEquip) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.newEquipCharact.X_POSITION) || String(this.newEquipCharact.X_POSITION) === ''
            || isNaN(this.newEquipCharact.X_POSITION)) {
            this.toastr.error(this.translate.instant('Please specify Position'), 'Error');
            return;
        }
        if (Number(this.newEquipCharact.X_POSITION) < 0 || Number(this.newEquipCharact.X_POSITION) > 100) {
            this.toastr.error(this.translate.instant('Value out of range in Position (0 : 100)'), 'Error');
            return;
        }
        this.referencedata.addEquipCharact({
            ID_EQUIP: idEquip,
            X_POSITION: this.newEquipCharact.X_POSITION
        }).subscribe(function (data) {
            if (data === -1) {
                _this.toastr.error(_this.translate.instant('Point ready exist!'), 'Error');
                return;
            }
            if (data === -2) {
                _this.toastr.error(_this.translate.instant('Can not add more than the max of the point'), 'Error');
                return;
            }
            _this.equipCharacts.push(data);
            _this.toastr.success(_this.translate.instant('Add one point'), 'Successfully');
        }, function (err) {
        }, function () {
            _this.newEquipCharact.X_POSITION = null;
        });
    };
    EquipmentComponent.prototype.onConvectionCharact = function (element) {
        if (element === void 0) { element = 0; }
        if (this.equipCharacts.length > 0) {
            this.yConvection = [];
            this.isSelectChart = 0;
            for (var _i = 0, _a = this.equipCharacts; _i < _a.length; _i++) {
                var equipCharact = _a[_i];
                this.xConvection.push(Number(equipCharact.X_POSITION));
                if (element === 0) {
                    this.yConvection.push(Number(equipCharact.ALPHA_TOP));
                    this.isSelectChart = 0;
                }
                if (element === 1) {
                    this.yConvection.push(Number(equipCharact.ALPHA_BOTTOM));
                    this.isSelectChart = 1;
                }
                if (element === 2) {
                    this.yConvection.push(Number(equipCharact.ALPHA_LEFT));
                    this.isSelectChart = 2;
                }
                if (element === 3) {
                    this.yConvection.push(Number(equipCharact.ALPHA_RIGHT));
                    this.isSelectChart = 3;
                }
                if (element === 4) {
                    this.yConvection.push(Number(equipCharact.ALPHA_FRONT));
                    this.isSelectChart = 4;
                }
                if (element === 5) {
                    this.yConvection.push(Number(equipCharact.ALPHA_REAR));
                    this.isSelectChart = 5;
                }
            }
            this.chartOptions = {
                chart: {
                    renderTo: 'container',
                    animation: false,
                    zoomType: 'x',
                },
                title: {
                    text: this.translate.instant('Highcharts draggable points convection')
                },
                tooltip: {
                    yDecimals: 2
                },
                xAxis: {
                    title: {
                        text: '(%)'
                    },
                    categories: this.xConvection
                },
                yAxis: {
                    title: {
                        text: this.translate.instant('Convection (Kw/(m².°C)')
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                column: {
                    stacking: 'normal'
                },
                line: {
                    cursor: 'ns-resize'
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        cursor: 'pointer',
                        allowPointSelect: true,
                        point: {
                            events: {
                                drag: function (e) {
                                    this.dataHighChart = new __WEBPACK_IMPORTED_MODULE_7__api_models__["m" /* ViewHighChart */]();
                                    this.dataHighChart.YAxis = this.y;
                                }
                            }
                        }
                    }
                },
                series: [{
                        data: this.yConvection,
                        draggableY: true,
                        dragMinY: 0
                    }]
            };
            this.modalEquipmentProfil.show();
        }
    };
    EquipmentComponent.prototype.onTemperatureCharact = function (element) {
        if (element === void 0) { element = 0; }
        if (this.equipCharacts.length > 0) {
            this.xTemperature = [];
            this.isSelectChart = 0;
            for (var _i = 0, _a = this.equipCharacts; _i < _a.length; _i++) {
                var equipCharact = _a[_i];
                this.yTemperature.push(Number(equipCharact.X_POSITION));
                if (element === 0) {
                    this.xTemperature.push(Number(equipCharact.TEMP_TOP));
                    this.isSelectChart = 0;
                }
                if (element === 1) {
                    this.xTemperature.push(Number(equipCharact.TEMP_BOTTOM));
                    this.isSelectChart = 1;
                }
                if (element === 2) {
                    this.xTemperature.push(Number(equipCharact.TEMP_LEFT));
                    this.isSelectChart = 2;
                }
                if (element === 3) {
                    this.xTemperature.push(Number(equipCharact.TEMP_RIGHT));
                    this.isSelectChart = 3;
                }
                if (element === 4) {
                    this.xTemperature.push(Number(equipCharact.TEMP_FRONT));
                    this.isSelectChart = 4;
                }
                if (element === 5) {
                    this.xTemperature.push(Number(equipCharact.TEMP_REAR));
                    this.isSelectChart = 5;
                }
            }
            this.chartOptions = {
                chart: {
                    renderTo: 'container',
                    animation: false,
                    zoomType: 'x',
                },
                title: {
                    text: this.translate.instant('Highcharts draggable points temperature')
                },
                tooltip: {
                    yDecimals: 2
                },
                xAxis: {
                    title: {
                        text: '(%)'
                    },
                    categories: this.yTemperature
                },
                yAxis: {
                    title: {
                        text: this.translate.instant('Temperature (' + this.temperatureSymbol + ')')
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                column: {
                    stacking: 'normal'
                },
                line: {
                    cursor: 'ns-resize'
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        cursor: 'pointer',
                        allowPointSelect: true,
                        point: {
                            events: {
                                // click: function (Event) {
                                //   alert('Name: ' + this.category + ', Value: ' + this.y + ', Series :' + this.series.name);
                                // },
                                drag: function (e) {
                                    alert('Name: ' + this.category + ', Value: ' + __WEBPACK_IMPORTED_MODULE_9_highcharts__["numberFormat"](this.y, 2) + ', Series :' + this.series.name);
                                }
                            }
                        }
                    }
                },
                series: [{
                        data: this.xTemperature,
                        draggableY: true,
                        dragMinY: 0
                    }]
            };
            this.modalEquipmentProfil.show();
        }
    };
    EquipmentComponent.prototype.onCurvesConvectionChart = function () {
        var xPosition = [];
        var alphaTop = [];
        var alphaBottom = [];
        var alphaLeft = [];
        var alphaRight = [];
        var alphaFront = [];
        var alphaRear = [];
        var tempTop = [];
        var tempBottom = [];
        var tempLeft = [];
        var tempRight = [];
        var tempFront = [];
        var tempRear = [];
        if (this.equipCharacts.length > 0) {
            for (var _i = 0, _a = this.equipCharacts; _i < _a.length; _i++) {
                var charact = _a[_i];
                xPosition.push(Number(charact.X_POSITION));
                alphaTop.push(Number(charact.ALPHA_TOP));
                alphaBottom.push(Number(charact.ALPHA_BOTTOM));
                alphaLeft.push(Number(charact.ALPHA_LEFT));
                alphaRight.push(Number(charact.ALPHA_RIGHT));
                alphaFront.push(Number(charact.ALPHA_FRONT));
                alphaRear.push(Number(charact.ALPHA_REAR));
                tempTop.push(Number(charact.TEMP_TOP));
                tempBottom.push(Number(charact.TEMP_BOTTOM));
                tempLeft.push(Number(charact.TEMP_LEFT));
                tempRight.push(Number(charact.TEMP_RIGHT));
                tempFront.push(Number(charact.TEMP_FRONT));
                tempRear.push(Number(charact.TEMP_REAR));
            }
            this.chartTempCurvesOptions = {
                chart: {
                    renderTo: 'container',
                },
                title: {
                    text: this.translate.instant('Highcharts line temperature')
                },
                rangeSelector: {
                    selected: 6
                },
                tooltip: {
                    yDecimals: 2
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                xAxis: {
                    title: {
                        text: '(%)'
                    },
                    categories: xPosition
                },
                yAxis: {
                    title: {
                        text: this.translate.instant('Temperature (' + this.temperatureSymbol + ')')
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                series: [{
                        data: tempTop,
                        name: this.translate.instant('Top')
                    },
                    {
                        data: tempBottom,
                        name: this.translate.instant('Bottom')
                    },
                    {
                        data: tempLeft,
                        name: this.translate.instant('Left')
                    },
                    {
                        data: tempRight,
                        name: this.translate.instant('Right')
                    },
                    {
                        data: tempFront,
                        name: this.translate.instant('Front')
                    },
                    {
                        data: tempRear,
                        name: this.translate.instant('Rear')
                    }]
            };
            this.chartConvecCurvesOptions = {
                chart: {
                    renderTo: 'container',
                },
                title: {
                    text: this.translate.instant('Highcharts line convection')
                },
                rangeSelector: {
                    selected: 6
                },
                tooltip: {
                    yDecimals: 2
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                xAxis: {
                    title: {
                        text: '(%)'
                    },
                    categories: xPosition
                },
                yAxis: {
                    title: {
                        text: '(' + this.convectionCoeffSymbol + ')'
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                },
                series: [{
                        data: alphaTop,
                        name: this.translate.instant('Top')
                    },
                    {
                        data: alphaBottom,
                        name: this.translate.instant('Bottom')
                    },
                    {
                        data: alphaLeft,
                        name: this.translate.instant('Left')
                    },
                    {
                        data: alphaRight,
                        name: this.translate.instant('Right')
                    },
                    {
                        data: alphaFront,
                        name: this.translate.instant('Front')
                    },
                    {
                        data: alphaRear,
                        name: this.translate.instant('Rear')
                    }]
            };
        }
    };
    EquipmentComponent.prototype.getDataHighChart = function (idEquip, profilType, profilFace) {
        var _this = this;
        if (profilType === void 0) { profilType = 0; }
        if (profilFace === void 0) { profilFace = 0; }
        this.isLoadingChart = true;
        this.profileType = profilType;
        localStorage.setItem('svgchart', JSON.stringify({ idEquip: idEquip, profilType: profilType, profilFace: profilFace }));
        this.referencedata.getDataHighChart({
            profilType: profilType,
            profilFace: profilFace,
            IDEQUIP: idEquip,
            minScaleY: null,
            maxScaleY: null,
            typeChart: 0,
            newProfil: '',
        }).subscribe(function (data) {
            _this.dataHighChart = data;
            // console.log(this.dataHighChart);
            if (profilType === 1) {
                _this.onConvectionCharact(profilFace);
            }
            else {
                _this.onTemperatureCharact(profilFace);
            }
            _this.isLoadingChart = false;
        }, function (err) {
            _this.isLoadingChart = false;
        }, function () {
            _this.isLoadingChart = false;
        });
    };
    EquipmentComponent.prototype.getEquipCharact = function (idEquipCharact) {
        var _this = this;
        this.referencedata.getEquipCharactById(idEquipCharact).subscribe(function (data) {
            _this.equipCharact = data;
        }, function (err) {
        }, function () {
        });
    };
    EquipmentComponent.prototype.getTempSetPoint = function (idEquip) {
        var _this = this;
        this.referencedata.getTempSetPoint(idEquip).subscribe(function (data) {
            _this.tempSetPoint = data;
        }, function (err) {
        }, function () { });
    };
    EquipmentComponent.prototype.buildForNewTR = function (idEquip) {
        var _this = this;
        this.referencedata.buildForNewTR({
            ID_EQUIP: idEquip,
            tr_current: this.tempSetPoint.tr_current,
            tr_new: this.tempSetPoint.tr_new,
            ID_STUDY: (this.study !== null) ? this.study.ID_STUDY : 0,
            isComefromStudy: this.checkBackStudy
        }).subscribe(function (response) {
            // console.log(response);
            var success = true;
            if (response.CheckKernel !== 0) {
                success = false;
            }
            if (success) {
                _this.toastr.success(_this.translate.instant('Update temperature'), 'successfully');
            }
            else {
                _this.toastr.success(_this.translate.instant('Update temperature'), 'successfully');
            }
            localStorage.setItem('equipCurr', JSON.stringify(response.RefEquipment));
            _this.checkHideInfo = false;
            _this.selectEquipment = new __WEBPACK_IMPORTED_MODULE_7__api_models__["j" /* RefEquipment */]();
            _this.modalTempSetpoint.hide();
            _this.refrestListEquipment();
        }, function (err) { }, function () { });
    };
    EquipmentComponent.prototype.checkBuildForNewTR = function (idEquip) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.tempSetPoint.tr_new) || String(this.tempSetPoint.tr_new) === ''
            || isNaN(this.tempSetPoint.tr_new)) {
            this.toastr.error(this.translate.instant('Please specify New temperature	'), 'Error');
            return;
        }
        this.referencedata.checkBuildForNewTR({
            ID_EQUIP: idEquip,
            tr_current: this.tempSetPoint.tr_current,
            tr_new: this.tempSetPoint.tr_new,
            ID_STUDY: (this.study !== null) ? this.study.ID_STUDY : 0,
        }).subscribe(function (res) {
            if (res === 1) {
                _this.buildForNewTR(idEquip);
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.deleteEquipCharact = function (idEquipCharact) {
        var _this = this;
        this.referencedata.deleteEquipCharact(idEquipCharact).subscribe(function (response) {
            var success = true;
            if (response === 1) {
                success = true;
            }
            if (success) {
                // this.getEquipCharacts(this.selectEquipment);
                _this.toastr.success(_this.translate.instant('Delete a point'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Delete a point'), 'ERROR');
            }
        }, function (err) {
        }, function () { });
    };
    EquipmentComponent.prototype.deleteEquipCharactValue = function (index) {
        this.equipCharacts.splice(index, 1);
    };
    EquipmentComponent.prototype.getDataCurve = function (idEquip) {
        var _this = this;
        this.referencedata.getDataCurve(idEquip).subscribe(function (data) {
            _this.dataCurve = data;
        }, function (err) { }, function () { });
    };
    EquipmentComponent.prototype.updateCurves = function (idEquip) {
        var _this = this;
        this.laddaCurve = true;
        this.referencedata.redrawCurves({
            ID_EQUIP: idEquip,
            isCapabilities: null,
            LOADINGRATE: this.dataCurve.LOADINGRATE,
            DWELLING_TIME: this.dataCurve.DWELLING_TIME,
            REGUL_TEMP: this.dataCurve.REGUL_TEMP,
            PRODTEMP: this.dataCurve.PRODTEMP
        }).subscribe(function (response) {
            _this.laddaCurve = false;
            var success = true;
            if (response === 1) {
                success = true;
            }
            if (success) {
                _this.toastr.success(_this.translate.instant('Update data'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Update data'), 'ERROR');
            }
        }, function (err) {
            _this.laddaCurve = false;
        }, function () {
            _this.laddaCurve = false;
        });
    };
    EquipmentComponent.prototype.updateEquipCharact = function (idEquipCharact) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_TOP) || String(this.equipCharact.ALPHA_TOP) === ''
            || isNaN(this.equipCharact.ALPHA_TOP)) {
            this.equipCharact.ALPHA_TOP = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_BOTTOM) || String(this.equipCharact.ALPHA_BOTTOM) === ''
            || isNaN(this.equipCharact.ALPHA_BOTTOM)) {
            this.equipCharact.ALPHA_BOTTOM = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_LEFT) || String(this.equipCharact.ALPHA_LEFT) === ''
            || isNaN(this.equipCharact.ALPHA_LEFT)) {
            this.equipCharact.ALPHA_LEFT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_RIGHT) || String(this.equipCharact.ALPHA_RIGHT) === ''
            || isNaN(this.equipCharact.ALPHA_RIGHT)) {
            this.equipCharact.ALPHA_RIGHT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_FRONT) || String(this.equipCharact.ALPHA_FRONT) === ''
            || isNaN(this.equipCharact.ALPHA_FRONT)) {
            this.equipCharact.ALPHA_FRONT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.ALPHA_REAR) || String(this.equipCharact.ALPHA_REAR) === ''
            || isNaN(this.equipCharact.ALPHA_REAR)) {
            this.equipCharact.ALPHA_REAR = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_TOP) || String(this.equipCharact.TEMP_TOP) === ''
            || isNaN(this.equipCharact.TEMP_TOP)) {
            this.equipCharact.TEMP_TOP = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_BOTTOM) || String(this.equipCharact.TEMP_BOTTOM) === ''
            || isNaN(this.equipCharact.TEMP_BOTTOM)) {
            this.equipCharact.TEMP_BOTTOM = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_LEFT) || String(this.equipCharact.TEMP_LEFT) === ''
            || isNaN(this.equipCharact.TEMP_LEFT)) {
            this.equipCharact.TEMP_LEFT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_RIGHT) || String(this.equipCharact.TEMP_RIGHT) === ''
            || isNaN(this.equipCharact.TEMP_RIGHT)) {
            this.equipCharact.TEMP_RIGHT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_FRONT) || String(this.equipCharact.TEMP_FRONT) === ''
            || isNaN(this.equipCharact.TEMP_FRONT)) {
            this.equipCharact.TEMP_FRONT = 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.equipCharact.TEMP_REAR) || String(this.equipCharact.TEMP_REAR) === ''
            || isNaN(this.equipCharact.TEMP_REAR)) {
            this.equipCharact.TEMP_REAR = 0;
        }
        this.referencedata.updateEquipCharact({
            ID_EQUIPCHARAC: idEquipCharact,
            ALPHA_TOP: this.equipCharact.ALPHA_TOP,
            ALPHA_BOTTOM: this.equipCharact.ALPHA_BOTTOM,
            ALPHA_LEFT: this.equipCharact.ALPHA_LEFT,
            ALPHA_RIGHT: this.equipCharact.ALPHA_RIGHT,
            ALPHA_FRONT: this.equipCharact.ALPHA_FRONT,
            ALPHA_REAR: this.equipCharact.ALPHA_REAR,
            TEMP_TOP: this.equipCharact.TEMP_TOP,
            TEMP_BOTTOM: this.equipCharact.TEMP_BOTTOM,
            TEMP_LEFT: this.equipCharact.TEMP_LEFT,
            TEMP_RIGHT: this.equipCharact.TEMP_RIGHT,
            TEMP_FRONT: this.equipCharact.TEMP_FRONT,
            TEMP_REAR: this.equipCharact.TEMP_REAR
        }).subscribe(function (response) {
            var success = true;
            if (response === 1) {
                success = true;
            }
            if (success) {
                _this.modalReferentialEquip.hide();
                _this.getEquipCharacts(_this.equipCharact.ID_EQUIP);
                _this.toastr.success(_this.translate.instant('Update EquipCharact'), 'successfully');
            }
            else {
                _this.toastr.error(_this.translate.instant('Update EquipCharact'), 'ERROR');
            }
        }, function (err) {
        }, function () {
        });
    };
    EquipmentComponent.prototype.onSelectEquipment = function (equip) {
        localStorage.setItem('equipCurr', '');
        this.checkActiveEquip = 0;
        this.checkHideInfo = false;
        this.disableFilter = false;
        // this.referencedata.getEquipment(equip.ID_EQUIP).subscribe(
        //   data => {
        //     this.equipmentReference = data;
        //   },
        //   err => {
        //     console.log('err');
        //   },
        //   () => {
        //     this.selectEquipment = this.equipmentReference;
        //     if (Number(this.selectEquipment.ID_EQUIP) === Number(equip.ID_EQUIP)) {
        //       this.checkActive = this.selectEquipment.ID_EQUIP;
        //     }
        //   }
        // );
        this.selectEquipment = equip;
        this.getListEquipmentEquipSeries(equip.ID_FAMILY);
        this.getListRamps(equip.ID_EQUIP);
        this.getListShelves(equip.ID_EQUIP);
        this.getListConsumptions(equip.ID_EQUIP);
        this.getEquipCharacts(equip.ID_EQUIP);
        this.getCapability(equip.ID_EQUIP);
    };
    EquipmentComponent.prototype.getListEquipmentFamily = function () {
        var _this = this;
        this.referencedata.getEquipmentFamily().subscribe(function (response) {
            _this.listEquipFamily = response;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.getCapability = function (idEquip) {
        var _this = this;
        this.referencedata.getCapabitity(idEquip).subscribe(function (data) {
            _this.capability = data;
        }, function (err) {
            console.log(err);
        }, function () { });
    };
    EquipmentComponent.prototype.getListEquipmentEquipSeries = function (idFamily) {
        var _this = this;
        this.referencedata.getEquipmentSeries(idFamily).subscribe(function (response) {
            _this.listequipSeries = response;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.getListRamps = function (idEquip) {
        var _this = this;
        this.referencedata.getRamps(idEquip).subscribe(function (data) {
            _this.rampsArray = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.addRampValue = function () {
        if (!this.newRamp.POSITION) {
            this.toastr.error(this.translate.instant('Enter a value in Position ramp'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newRamp.POSITION)) {
            this.toastr.error(this.translate.instant('Not a valid number in Position ramp'), 'Error');
            return;
        }
        if (this.selectEquipment) {
            if (this.rampsArray.length >= Number(this.selectEquipment.MAX_RAMPS)) {
                this.toastr.error(this.translate.instant('Can not add more than the max of the equipment'), 'Error');
                return;
            }
        }
        this.rampsArray.push(this.newRamp);
        this.newRamp = {};
    };
    EquipmentComponent.prototype.deleteRampValue = function (index) {
        this.rampsArray.splice(index, 1);
    };
    EquipmentComponent.prototype.getListShelves = function (idEquip) {
        var _this = this;
        this.referencedata.getShelves(idEquip).subscribe(function (data) {
            _this.shelvesArray = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.addShelveValue = function () {
        if (!this.newShelve.SPACE) {
            this.toastr.error(this.translate.instant('Enter a value in Space'), 'Error');
            return;
        }
        if (!this.newShelve.NB) {
            this.toastr.error(this.translate.instant('Enter a value in Number'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newShelve.SPACE)) {
            this.toastr.error(this.translate.instant('Not a valid number in Space'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newShelve.NB)) {
            this.toastr.error(this.translate.instant('Not a valid number in Number'), 'Error');
            return;
        }
        this.shelvesArray.push(this.newShelve);
        this.newShelve = {};
    };
    EquipmentComponent.prototype.deleteShelveValue = function (index) {
        this.shelvesArray.splice(index, 1);
    };
    EquipmentComponent.prototype.getListConsumptions = function (idEquip) {
        var _this = this;
        this.referencedata.getConsumptions(idEquip).subscribe(function (data) {
            _this.consumptionsArray = data;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.addConsumptionValue = function () {
        if (!this.newConsumption.TEMPERATURE) {
            this.toastr.error(this.translate.instant('Enter a value in Temperature'), 'Error');
            return;
        }
        if (!this.newConsumption.CONSUMPTION_PERM) {
            this.toastr.error(this.translate.instant('Enter a value in Consumption of maintains in cold'), 'Error');
            return;
        }
        if (!this.newConsumption.CONSUMPTION_GETCOLD) {
            this.toastr.error(this.translate.instant('Enter a value in Consumption of stake in cold'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newConsumption.TEMPERATURE)) {
            this.toastr.error(this.translate.instant('Not a valid number in Temperature'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newConsumption.CONSUMPTION_PERM)) {
            this.toastr.error(this.translate.instant('Not a valid number in Consumption of maintains in cold'), 'Error');
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(this.newConsumption.CONSUMPTION_GETCOLD)) {
            this.toastr.error(this.translate.instant('Not a valid number in Consumption of stake in cold'), 'Error');
            return;
        }
        this.consumptionsArray.push(this.newConsumption);
        this.newConsumption = {};
    };
    EquipmentComponent.prototype.deleteConsumptionValue = function (index) {
        this.consumptionsArray.splice(index, 1);
    };
    EquipmentComponent.prototype.movepoint = function ($event) {
        var focusXZone = 50; // pixels around the selected points
        var focusYZone = 25; // pixels around the selected points
        if (this.selectedPoint !== null) {
            var x = Number($event.offsetX);
            var y = Number($event.offsetY);
            var cx = Number(this.selectedPoint.getAttribute('cx'));
            var cy = Number(this.selectedPoint.getAttribute('cy'));
            if (this.dataHighChart) {
                if ((y >= this.dataHighChart.minPixY) && (y <= this.dataHighChart.maxPixY)
                    && (y >= cy - focusYZone) && (y <= cy + focusYZone)
                    && (x >= cx - focusXZone) && (x <= cx + focusXZone)) {
                    this.selectedPoint.setAttribute('cy', y);
                    var value = this.getAxisYValue(y);
                    this.circleValue = value;
                    this.redrawPath();
                    this.dataHighChart.valuesTabY[this.currentpos] = value;
                }
            }
        }
    };
    EquipmentComponent.prototype.circleover = function ($event, pos) {
        if (this.selectedPoint === null) {
            var idCircle = document.getElementById('c' + pos);
            idCircle.setAttribute('fill', '#00FF00');
            var circlePosition = document.getElementById('circle_position');
            circlePosition.setAttribute('value', pos);
            var value = this.getAxisYValue($event.offsetY);
            this.circleValue = value;
        }
    };
    EquipmentComponent.prototype.circleout = function ($event, pos) {
        if (this.selectedPoint === null) {
            var idCircle = document.getElementById('c' + pos);
            idCircle.setAttribute('fill', '#D5D5FF');
            var circlePosition = document.getElementById('circle_position');
            circlePosition.setAttribute('value', '');
            this.circleValue = null;
        }
    };
    EquipmentComponent.prototype.selectpoint = function ($event, pos) {
        var currentCircle = document.getElementById('c' + pos);
        var circlePosition = document.getElementById('circle_position');
        if (this.selectedPoint === null) {
            this.selectedPoint = currentCircle;
            this.currentpos = pos;
            this.selectedPoint.setAttribute('stroke', '#FF0000');
            this.selectedPoint.setAttribute('fill', '#00FF00');
            var value = pos;
            circlePosition.setAttribute('value', pos);
            if (this.dataHighChart) {
                value = this.dataHighChart.valuesTabY[pos];
                this.dataHighChart.selectedPoints[pos] = 1;
            }
            this.circleValue = value;
            this.disabledYvalue = false;
        }
        else {
            this.selectedPoint.setAttribute('stroke', '#000000');
            this.selectedPoint.setAttribute('fill', '#D5D5FF');
            this.selectedPoint = null;
            this.currentpos = -1;
            circlePosition.setAttribute('value', '');
            this.circleValue = null;
            this.disabledYvalue = true;
        }
    };
    EquipmentComponent.prototype.getAxisYValue = function (pos) {
        var value = 0;
        if (this.dataHighChart) {
            if (Number(pos) > Number(this.dataHighChart.originY)) {
                value = Number(this.dataHighChart.minValueY);
            }
            else if (Number(pos) < (Number(this.dataHighChart.originY) - Number(this.dataHighChart.nbpixY))) {
                value = Number(this.dataHighChart.maxValueY);
            }
            else {
                value = (Number(this.dataHighChart.originY) - Number(pos)) / Number(this.dataHighChart.nbpixY) *
                    (Number(this.dataHighChart.MaxiMum) - Number(this.dataHighChart.MiniMum)) + Number(this.dataHighChart.MiniMum);
            }
        }
        value = Math.round(value * 100) / 100;
        return value;
    };
    EquipmentComponent.prototype.getAxisYValue1 = function (pos) {
        var lfVal = 0.0;
        if (pos > this.dataHighChart.originY) {
            lfVal = this.dataHighChart.MiniMum;
        }
        else if (pos < this.dataHighChart.originY - this.dataHighChart.axisYLength) {
            lfVal = this.dataHighChart.MaxiMum;
        }
        else {
            lfVal = (this.dataHighChart.originY - pos) / this.dataHighChart.axisYLength *
                (this.dataHighChart.MaxiMum - this.dataHighChart.MiniMum) + this.dataHighChart.MiniMum;
        }
        return lfVal;
    };
    EquipmentComponent.prototype.getAxisYPos = function (value) {
        var pos = 0;
        if (this.dataHighChart) {
            if (Number(value) < Number(this.dataHighChart.MiniMum)) {
                value = Number(this.dataHighChart.MiniMum);
            }
            else if (Number(value) > Number(this.dataHighChart.MaxiMum)) {
                value = Number(this.dataHighChart.MaxiMum);
            }
            var scaleY = Number(this.dataHighChart.MaxiMum) - Number(this.dataHighChart.MiniMum);
            var tempValue = (Number(value) - Number(this.dataHighChart.MiniMum)) / scaleY;
            var temp = Number(this.dataHighChart.nbpixY);
            pos = Number(this.dataHighChart.originY) - Math.round(tempValue * temp);
        }
        return pos;
    };
    EquipmentComponent.prototype.setpoint = function () {
        if (this.selectedPoint != null) {
            var circlePosition = document.getElementById('circle_position');
            var value = this.circleValue;
            if (this.dataHighChart) {
                if (Number(value) >= Number(this.dataHighChart.MiniMum) && Number(value) <= Number(this.dataHighChart.MaxiMum)) {
                    var cy = this.getAxisYPos(Number(value));
                    this.selectedPoint.setAttribute('cy', cy);
                    this.redrawPath();
                    this.dataHighChart.valuesTabY[this.currentpos] = Number(value);
                    this.selectedPoint.setAttribute('stroke', '#000000');
                    this.selectedPoint.setAttribute('fill', '#D5D5FF');
                    this.selectedPoint = null;
                    this.currentpos = -1;
                    circlePosition.setAttribute('value', '');
                    this.circleValue = null;
                    this.disabledYvalue = true;
                }
            }
        }
    };
    EquipmentComponent.prototype.setpointenter = function ($event) {
        if ($event.which === 13) {
            this.setpoint();
        }
    };
    EquipmentComponent.prototype.redrawPath = function () {
        var idx = 0;
        var linkedpath = document.getElementById('profilLine');
        var circle;
        var path = '';
        var cx, cy;
        if (this.dataHighChart) {
            for (idx = 0; idx < this.dataHighChart.nbpoints; idx++) {
                if (this.dataHighChart.selectedPoints[idx] === 1) {
                    circle = document.getElementById('c' + idx);
                    cx = circle.getAttribute('cx');
                    cy = circle.getAttribute('cy');
                    if (idx === 0) {
                        path = 'M ' + cx + ' ' + cy + ' L';
                    }
                    else {
                        path += ' ' + cx + ' ' + cy;
                    }
                }
            }
            linkedpath.setAttribute('d', path);
        }
    };
    EquipmentComponent.prototype.refreshScaleChart = function () {
        var _this = this;
        this.svgchart = JSON.parse(localStorage.getItem('svgchart'));
        this.referencedata.getDataHighChart({
            profilType: this.svgchart.profilType,
            profilFace: this.svgchart.profilFace,
            IDEQUIP: this.svgchart.idEquip,
            minScaleY: this.dataHighChart.MiniMum,
            maxScaleY: this.dataHighChart.MaxiMum,
            typeChart: 1,
            newProfil: '',
        }).subscribe(function (data) {
            _this.dataHighChart = data;
            // console.log(data);
            _this.toastr.success(_this.translate.instant('Update scale chart'), 'successfully');
        }, function (err) {
            console.log('err');
        }, function () { });
    };
    EquipmentComponent.prototype.clearSelectedPoints = function () {
        this.disabledConfirm = 0;
        var idx = 0;
        var circle;
        this.selectedPoint = null;
        if (this.dataHighChart) {
            this.dataHighChart.selectedPoints[idx] = 1;
            circle = document.getElementById('c' + idx);
            circle.setAttribute('cy', this.dataHighChart.posTabY[idx]);
            for (idx = 1; idx < this.dataHighChart.nbpoints - 1; idx++) {
                circle = document.getElementById('c' + idx);
                this.dataHighChart.selectedPoints[idx] = 0;
                circle.setAttribute('cy', this.dataHighChart.posTabY[idx]);
            }
            circle = document.getElementById('c' + idx);
            this.dataHighChart.selectedPoints[idx] = 1;
            circle.setAttribute('cy', this.dataHighChart.posTabY[idx]);
        }
        var linkedpath = document.getElementById('profilLine');
        linkedpath.setAttribute('d', '');
    };
    EquipmentComponent.prototype.saveEquipProfile = function () {
        var idx = 0;
        var profil_string = '';
        var value = '';
        if (this.dataHighChart) {
            if (this.dataHighChart.nbpoints > 0) {
                for (idx = 0; idx < this.dataHighChart.nbpoints; idx++) {
                    if (this.dataHighChart.selectedPoints[idx] === 1) {
                        profil_string += this.dataHighChart.valuesTabY[idx];
                    }
                    profil_string += '_';
                }
                value = profil_string;
            }
        }
        return value;
    };
    EquipmentComponent.prototype.submitGenerate = function () {
        var _this = this;
        this.svgchart = JSON.parse(localStorage.getItem('svgchart'));
        var point = this.saveEquipProfile();
        this.referencedata.getDataHighChart({
            profilType: this.svgchart.profilType,
            profilFace: this.svgchart.profilFace,
            IDEQUIP: this.svgchart.idEquip,
            minScaleY: this.dataHighChart.MiniMum,
            maxScaleY: this.dataHighChart.MaxiMum,
            typeChart: 2,
            newProfil: point,
        }).subscribe(function (data) {
            _this.dataHighChart = data;
            _this.toastr.success(_this.translate.instant('Generate data chart'), 'successfully');
            _this.disabledConfirm = 1;
        }, function (err) {
            console.log('err');
        }, function () {
            _this.disabledConfirm = 1;
        });
    };
    EquipmentComponent.prototype.submitProfil = function () {
        var _this = this;
        this.svgchart = JSON.parse(localStorage.getItem('svgchart'));
        var point = this.saveEquipProfile();
        this.referencedata.saveSelectedProfile({
            profilType: this.svgchart.profilType,
            profilFace: this.svgchart.profilFace,
            ID_EQUIP: this.svgchart.idEquip,
            minScaleY: this.dataHighChart.MiniMum,
            maxScaleY: this.dataHighChart.MaxiMum,
            typeChart: 3,
            newProfil: point,
            checkTop: this.dataHighChart.checkTop,
            checkButton: this.dataHighChart.checkButton,
            checkFront: this.dataHighChart.checkFront,
            checkLeft: this.dataHighChart.checkLeft,
            checkRear: this.dataHighChart.checkRear,
            checkRight: this.dataHighChart.checkRight
        }).subscribe(function (response) {
            if (response === 1) {
                _this.toastr.success(_this.translate.instant('Update chart point'), 'successfully');
                _this.modalEquipmentProfil.hide();
            }
        }, function (err) {
            console.log('err');
        }, function () { });
    };
    // display page
    EquipmentComponent.prototype.openLoadEquipment = function () {
        this.hideAllPageEquipment();
        var loadE = document.getElementById('page-load-equipment');
        loadE.style.display = 'block';
        this.activePageEquipment = 'load';
    };
    EquipmentComponent.prototype.openGenerateEquipment = function () {
        this.hideAllPageEquipment();
        var genE = document.getElementById('page-generated-equipment');
        genE.style.display = 'block';
        this.activePageEquipment = 'gen';
    };
    EquipmentComponent.prototype.openCurvesEquipment = function () {
        this.hideAllPageEquipment();
        this.onCurvesConvectionChart();
        var curE = document.getElementById('page-curves-equipment');
        curE.style.display = 'block';
        this.activePageEquipment = 'curves';
    };
    EquipmentComponent.prototype.hideAllPageEquipment = function () {
        var loadE = document.getElementById('page-load-equipment');
        var genE = document.getElementById('page-generated-equipment');
        var curE = document.getElementById('page-curves-equipment');
        loadE.style.display = 'none';
        genE.style.display = 'none';
        curE.style.display = 'none';
    };
    // HAIDT
    EquipmentComponent.prototype.onSelectFilter = function () {
        if (Number(this.statusEquip) === 0) {
            this.getEquipmentFilter(this.equipGenerate);
        }
        if (Number(this.statusEquip) === 1) {
            this.getEquipmentFilter(this.equipTranslation);
        }
        if (Number(this.statusEquip) === 2) {
            this.getEquipmentFilter(this.equipRotate);
        }
    };
    EquipmentComponent.prototype.getEquipmentFilter = function (id) {
        var _this = this;
        this.referencedata.getEquipmentFilter(id).subscribe(function (data) {
            // console.log(data);
            _this.filterEquipment = data;
            if (_this.filterEquipment) {
                _this.modalFilter.show();
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.confirmFilter = function () {
        var listEquipGenZone = this.filterEquipment.EquipGenZone;
        var equipZone = this.filterEquipment.EquipZone;
        for (var i = 0; i < equipZone.length; i++) {
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipZone[i].EQUIP_ZONE_LENGTH) || String(equipZone[i].EQUIP_ZONE_LENGTH) === ''
                || isNaN(equipZone[i].EQUIP_ZONE_LENGTH)) {
                this.toastr.error(this.translate.instant('Please specify Length / Entry - Zone ') + (i + 1), 'Error');
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipZone[i].EQUIP_ZONE_NAME) || String(equipZone[i].EQUIP_ZONE_NAME) === '') {
                this.toastr.error(this.translate.instant('Please specify Zone name - Zone ') + (i + 1), 'Error');
                return;
            }
        }
        for (var i = 0; i < listEquipGenZone.length; i++) {
            // *_CHANGE = 1
            // row Coefficient
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM1) || String(listEquipGenZone[i].TOP_PRM1) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM1) || String(listEquipGenZone[i].BOTTOM_PRM1) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM1) || String(listEquipGenZone[i].LEFT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM1) || String(listEquipGenZone[i].RIGHT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM1) || String(listEquipGenZone[i].FRONT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 1) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM1) || String(listEquipGenZone[i].REAR_PRM1) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Coefficient - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            // row AlphaI/Alpha in the mylar zone
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM1) || String(listEquipGenZone[i].TOP_PRM1) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM1) || String(listEquipGenZone[i].BOTTOM_PRM1) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM1) || String(listEquipGenZone[i].LEFT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM1) || String(listEquipGenZone[i].RIGHT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM1) || String(listEquipGenZone[i].FRONT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM1) || String(listEquipGenZone[i].REAR_PRM1) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in AlphaI/Alpha in the mylar - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            // row Alpha spraying zone
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM2) || String(listEquipGenZone[i].TOP_PRM2) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM2) || String(listEquipGenZone[i].BOTTOM_PRM2) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM2) || String(listEquipGenZone[i].LEFT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM2) || String(listEquipGenZone[i].RIGHT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM2) || String(listEquipGenZone[i].FRONT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM2) || String(listEquipGenZone[i].REAR_PRM2) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha spraying - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            // Alpha stabilization zone
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM3) || String(listEquipGenZone[i].TOP_PRM3) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM3) || String(listEquipGenZone[i].BOTTOM_PRM3) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM3) || String(listEquipGenZone[i].LEFT_PRM3) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM3) || String(listEquipGenZone[i].RIGHT_PRM3) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM3) || String(listEquipGenZone[i].FRONT_PRM3) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 2) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM3) || String(listEquipGenZone[i].REAR_PRM3) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM3)) {
                    this.toastr.error(this.translate.instant('Please specify in Alpha stabilization - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            // Insulation tickness
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM1) || String(listEquipGenZone[i].TOP_PRM1) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM1) || String(listEquipGenZone[i].BOTTOM_PRM1) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM1) || String(listEquipGenZone[i].LEFT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM1) || String(listEquipGenZone[i].RIGHT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM1) || String(listEquipGenZone[i].FRONT_PRM1) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM1) || String(listEquipGenZone[i].REAR_PRM1) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM1)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation tickness - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            // Insulation conductivity
            if (Number(listEquipGenZone[i].TOP_ADIABAT) === 0 && Number(listEquipGenZone[i].TOP_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].TOP_PRM2) || String(listEquipGenZone[i].TOP_PRM2) === ''
                    || isNaN(listEquipGenZone[i].TOP_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].BOTTOM_ADIABAT) === 0 && Number(listEquipGenZone[i].BOTTOM_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].BOTTOM_PRM2) || String(listEquipGenZone[i].BOTTOM_PRM2) === ''
                    || isNaN(listEquipGenZone[i].BOTTOM_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].LEFT_ADIABAT) === 0 && Number(listEquipGenZone[i].LEFT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].LEFT_PRM2) || String(listEquipGenZone[i].LEFT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].LEFT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].RIGHT_ADIABAT) === 0 && Number(listEquipGenZone[i].RIGHT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].RIGHT_PRM2) || String(listEquipGenZone[i].RIGHT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].RIGHT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].FRONT_ADIABAT) === 0 && Number(listEquipGenZone[i].FRONT_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].FRONT_PRM2) || String(listEquipGenZone[i].FRONT_PRM2) === ''
                    || isNaN(listEquipGenZone[i].FRONT_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
            if (Number(listEquipGenZone[i].REAR_ADIABAT) === 0 && Number(listEquipGenZone[i].REAR_CHANGE) === 3) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(listEquipGenZone[i].REAR_PRM2) || String(listEquipGenZone[i].REAR_PRM2) === ''
                    || isNaN(listEquipGenZone[i].REAR_PRM2)) {
                    this.toastr.error(this.translate.instant('Please specify in Insulation conductivity - Zone ') + (i + 1), 'Error');
                    return;
                }
            }
        }
        this.modalFilter.hide();
    };
    EquipmentComponent.prototype.counter = function (i) {
        var list = [];
        for (var x = 0; x < i; x++) {
            list.push(x);
        }
        return list;
    };
    EquipmentComponent.prototype.onFilterLoad = function (equip) {
        // console.log(equip);
        if (Number(equip.ID_EQUIPGENERATION) !== 0) {
            this.getEquipmentFilter(equip.ID_EQUIP);
        }
        this.disableFilter = true;
    };
    EquipmentComponent.prototype.checkEquipment = function (equipment, check) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.nameEquipment) || String(equipment.nameEquipment) === ''
            || Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(equipment.nameEquipment)) {
            this.toastr.error(this.translate.instant('Please specify Equipment name'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.versionEquipment) || String(equipment.versionEquipment) === ''
            || isNaN(equipment.versionEquipment)) {
            this.toastr.error(this.translate.instant('Please specify Version'), 'Error');
            return;
        }
        if (Number(this.statusEquip) === 0) {
            if (Number(this.equipGenerate) === 0) {
                this.toastr.error(this.translate.instant('Please choose equipment'), 'Error');
                return;
            }
            if (!this.selectEquipGener.capabilitiesCalc) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.tempSetPoint) || String(equipment.tempSetPoint) === '' || isNaN(equipment.tempSetPoint)) {
                    this.toastr.error(this.translate.instant('Please specify regulation temperature'), 'Error');
                    return;
                }
            }
            else {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.dwellingTime) || String(equipment.dwellingTime) === '' || isNaN(equipment.dwellingTime)) {
                    this.toastr.error(this.translate.instant('Please specify  dwelling time'), 'Error');
                    return;
                }
            }
        }
        if (Number(this.statusEquip) === 1) {
            if (Number(this.equipTranslation) === 0) {
                this.toastr.error(this.translate.instant('Please choose equipment'), 'Error');
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.newPos) || String(equipment.newPos) === '' || isNaN(equipment.newPos)) {
                this.toastr.error(this.translate.instant('Please specify New position'), 'Error');
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.dwellingTime) || String(equipment.dwellingTime) === '' || isNaN(equipment.dwellingTime)) {
                this.toastr.error(this.translate.instant('Please specify Dwelling time'), 'Error');
                return;
            }
        }
        if (Number(this.statusEquip) === 2) {
            if (Number(this.equipRotate) === 0) {
                this.toastr.error(this.translate.instant('Please choose equipment'), 'Error');
                return;
            }
        }
        if (Number(this.statusEquip) === 3) {
            if (Number(this.equipMerge1) === 0 || Number(this.equipMerge2) === 0) {
                this.toastr.error(this.translate.instant('Please choose equipment'), 'Error');
                return;
            }
            if (this.selectEquipmentMerge1.capabilitiesCalc || this.selectEquipmentMerge2.capabilitiesCalc) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.dwellingTime) || String(equipment.dwellingTime) === '' || isNaN(equipment.dwellingTime)) {
                    this.toastr.error(this.translate.instant('Please specify  dwelling time'), 'Error');
                    return;
                }
            }
            else {
                if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.tempSetPoint) || String(equipment.tempSetPoint) === '' || isNaN(equipment.tempSetPoint)) {
                    this.toastr.error(this.translate.instant('Please specify regulation temperature'), 'Error');
                    return;
                }
            }
        }
        equipment.typeEquipment = this.statusEquip;
        equipment.typeCalculate = 0;
        if (Number(this.statusEquip) === 0) {
            equipment.equipmentId1 = this.selectEquipGener.ID_EQUIP;
            if (!this.selectEquipGener.capabilitiesCalc) {
                equipment.dwellingTime = 0;
            }
            else {
                equipment.tempSetPoint = 0;
            }
        }
        else if (Number(this.statusEquip) === 1) {
            equipment.equipmentId1 = this.equipTranslation;
        }
        else if (Number(this.statusEquip) === 2) {
            equipment.equipmentId1 = this.equipRotate;
        }
        else if (Number(this.statusEquip) === 3) {
            equipment.equipmentId1 = this.equipMerge1;
            equipment.equipmentId2 = this.equipMerge2;
        }
        if (this.filterEquipment) {
            equipment.equipGenZone = this.filterEquipment.EquipGenZone;
        }
        else {
            equipment.equipGenZone = null;
        }
        this.referencedata.checkEquipment(equipment).subscribe(function (res) {
            if (res === 1) {
                if (check === 0) {
                    _this.saveNewEquipment(0);
                }
                else if (check === 1) {
                    _this.saveNewEquipment(1);
                }
                else if (check === 2) {
                    _this.onSelectFilter();
                }
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.checkUpdateEquipment = function (equipment, check) {
        var success = true;
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.EQUIP_NAME) || String(equipment.EQUIP_NAME) === ''
            || Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(equipment.EQUIP_NAME)) {
            this.toastr.error(this.translate.instant('Please specify Designation'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.EQUIP_VERSION) || String(equipment.EQUIP_VERSION) === ''
            || isNaN(equipment.EQUIP_VERSION)) {
            this.toastr.error(this.translate.instant('Please specify Version'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.EQP_LENGTH) || String(equipment.EQP_LENGTH) === ''
            || isNaN(equipment.EQP_LENGTH) || Number(equipment.EQP_LENGTH) < 0) {
            this.toastr.error(this.translate.instant('Please specify Length'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.EQP_WIDTH) || String(equipment.EQP_WIDTH) === ''
            || isNaN(equipment.EQP_WIDTH) || Number(equipment.EQP_WIDTH) < 0) {
            this.toastr.error(this.translate.instant('Please specify Width'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.EQP_HEIGHT) || String(equipment.EQP_HEIGHT) === ''
            || isNaN(equipment.EQP_HEIGHT) || Number(equipment.EQP_HEIGHT) < 0) {
            this.toastr.error(this.translate.instant('Please specify Height'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.NB_TR) || String(equipment.NB_TR) === ''
            || isNaN(equipment.NB_TR) || Number(equipment.NB_TR) < 0 || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.NB_TR))) {
            this.toastr.error(this.translate.instant('Please specify TR number'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.NB_TS) || String(equipment.NB_TS) === ''
            || isNaN(equipment.NB_TS) || Number(equipment.NB_TS) < 0 || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.NB_TS))) {
            this.toastr.error(this.translate.instant('Please specify Ts number'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.NB_VC) || String(equipment.NB_VC) === ''
            || isNaN(equipment.NB_VC) || Number(equipment.NB_VC) < 0 || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.NB_VC))) {
            this.toastr.error(this.translate.instant('Please specify VC number	'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.MAX_FLOW_RATE) || String(equipment.MAX_FLOW_RATE) === ''
            || isNaN(equipment.MAX_FLOW_RATE) || Number(equipment.MAX_FLOW_RATE) < 0) {
            this.toastr.error(this.translate.instant('Please specify Max flow rate	'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.TMP_REGUL_MIN) || String(equipment.TMP_REGUL_MIN) === ''
            || isNaN(equipment.TMP_REGUL_MIN)) {
            this.toastr.error(this.translate.instant('Please specify Mimimum regulation temperature'), 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.MAX_NOZZLES_BY_RAMP) || String(equipment.MAX_NOZZLES_BY_RAMP) === ''
            || isNaN(equipment.MAX_NOZZLES_BY_RAMP) || Number(equipment.MAX_NOZZLES_BY_RAMP || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(equipment.MAX_NOZZLES_BY_RAMP)) < 0) {
            this.toastr.error(this.translate.instant('Please specify Nozzles/ramps number'), 'Error');
            success = false;
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.MAX_NOZZLES_BY_RAMP))) {
            this.toastr.error('Not a valid number in Nozzles/ramps number !', 'Error');
            success = false;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(equipment.MAX_RAMPS) || String(equipment.MAX_RAMPS) === ''
            || isNaN(equipment.MAX_RAMPS) || (Number(equipment.MAX_RAMPS) || !Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.MAX_RAMPS))) < 0) {
            this.toastr.error(this.translate.instant('Please specify Ramp max number	'), 'Error');
            success = false;
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_util_util__["c" /* isInteger */])(Number(equipment.MAX_RAMPS))) {
            this.toastr.error('Not a valid number in Ramps max number !', 'Error');
            success = false;
            return;
        }
        if (Number(equipment.MAX_NOZZLES_BY_RAMP) > 32767 || Number(equipment.NB_TR) > 32767
            || Number(equipment.NB_TS) > 32767 || Number(equipment.NB_TR) > 32767 || Number(equipment.MAX_RAMPS) > 32767) {
            this.toastr.error('Error of parameter format', 'Error');
            success = false;
            return;
        }
        if (success) {
            this.updateEquipment(equipment);
        }
    };
    EquipmentComponent.prototype.checkRedrawCurves = function (idEquip) {
        var _this = this;
        if (Number(this.dataCurve.isCapabilities) === 1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.dataCurve.DWELLING_TIME) || String(this.dataCurve.DWELLING_TIME) === ''
                || isNaN(this.dataCurve.DWELLING_TIME)) {
                this.toastr.error(this.translate.instant('Please specify Dwelling Time'), 'Error');
                return;
            }
        }
        else {
            if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.dataCurve.REGUL_TEMP) || String(this.dataCurve.REGUL_TEMP) === ''
                || isNaN(this.dataCurve.REGUL_TEMP)) {
                this.toastr.error(this.translate.instant('Please specify Regulation temperature'), 'Error');
                return;
            }
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.dataCurve.PRODTEMP) || String(this.dataCurve.PRODTEMP) === ''
            || isNaN(this.dataCurve.PRODTEMP)) {
            this.toastr.error(this.translate.instant('Please specify Initial temperature of the product'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_12_util__["isNullOrUndefined"])(this.dataCurve.LOADINGRATE) || String(this.dataCurve.LOADINGRATE) === ''
            || isNaN(this.dataCurve.LOADINGRATE)) {
            this.toastr.error(this.translate.instant('Please specify Loading Rate'), 'Error');
            return;
        }
        this.referencedata.checkRedrawCurves({
            ID_EQUIP: idEquip,
            isCapabilities: null,
            DWELLING_TIME: this.dataCurve.DWELLING_TIME,
            REGUL_TEMP: this.dataCurve.REGUL_TEMP,
            PRODTEMP: this.dataCurve.PRODTEMP,
            LOADINGRATE: this.dataCurve.LOADINGRATE,
        }).subscribe(function (res) {
            if (res === 1) {
                _this.updateCurves(idEquip);
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    EquipmentComponent.prototype.comeBackStudy = function () {
        this.router.navigate(['input/equipment']);
        this.checkBackStudy = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalTempSetpoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalTempSetpoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalReferentialEquip'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalReferentialEquip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEquipmentProfil'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalEquipmentProfil", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddEquipment'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalAddEquipment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAsEquipment'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalSaveAsEquipment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tempProfileChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__components_highcharts_chart_highcharts_chart_component__["a" /* HighchartsChartComponent */])
    ], EquipmentComponent.prototype, "tempProfileChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('curvesChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__components_highcharts_chart_highcharts_chart_component__["a" /* HighchartsChartComponent */])
    ], EquipmentComponent.prototype, "curvesChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalFilter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], EquipmentComponent.prototype, "modalFilter", void 0);
    EquipmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__("../../../../../src/app/views/references/equipment/equipment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/references/equipment/equipment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_services_referencedata_service__["a" /* ReferencedataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"subnav\" class=\"subnav-container text-center pt-3 mb-3\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button type=\"button\" *ngFor=\"let nav of subnav\" [class.active]=\"router.isActive(nav.url)\" class=\"btn btn-outline-secondary\"\n      [routerLink]=\"nav.url\">\n      {{ nav.name | translate}}\n    </button>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/references/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/references/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__references_nav_item__ = __webpack_require__("../../../../../src/app/views/references/references.nav-item.ts");
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
        this.subnav = __WEBPACK_IMPORTED_MODULE_1__references_nav_item__["a" /* ReferencesNavItems */];
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/views/references/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/references/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/packing/packing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n    <div class=\"card product-container\">\n      <div class=\"card-body\">\n        <div style=\"margin-top:10px;\" id=\"page-load-packing\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                      <div class=\"input-group input-group-sm study-search-box\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n                        <span>\n                          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        </span>\n                      </div>\n                  </div>\n                  <perfect-scrollbar style=\"max-height: 300px;\">\n                    <div class=\"list-group\" *ngIf=\"listPackingElmts\">\n                        <h6 class=\"dropdown-header\">MINE</h6>\n                        <a *ngFor=\"let packingEmlt of (listPackingElmts.mine | packingElmtFilter: filterString)\" [ngClass]=\"checkActivePacking == packingEmlt.ID_PACKING_ELMT || packingEmlt == selectPackingElmt? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelectPackingElmt(packingEmlt)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                            \n                             {{ packingEmlt.LABEL }} - (v{{ packingEmlt.PACKING_VERSION }})\n                             <i *ngIf=\"packingEmlt.PACKING_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                             <i *ngIf=\"packingEmlt.PACKING_RELEASE == 5\" class=\"fa fa-lock text-secondary\"></i>\n                             <i *ngIf=\"packingEmlt.PACKING_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                             <i *ngIf=\"packingEmlt.PACKING_RELEASE == 9\" class=\"fa fa-info-circle text-danger\"></i>\n                            </div>\n                        </a>\n                        <h6 class=\"dropdown-header\">OTHERS</h6>\n                        <a *ngFor=\"let packingEmlt of (listPackingElmts.others | packingElmtFilter: filterString)\" [ngClass]=\"packingEmlt == selectPackingElmt? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelectPackingElmt(packingEmlt)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                {{ packingEmlt.LABEL }} - (v{{ packingEmlt.PACKING_VERSION }})\n                                <i *ngIf=\"packingEmlt.PACKING_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                                <i *ngIf=\"packingEmlt.PACKING_RELEASE == 5\" class=\"fa fa-lock text-secondary\"></i>\n                                <i *ngIf=\"packingEmlt.PACKING_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                                <i *ngIf=\"packingEmlt.PACKING_RELEASE == 9\" class=\"fa fa-info-circle text-danger\"></i>\n                            </div>\n                        </a>\n                    </div>\n                  </perfect-scrollbar>\n                  <div class=\"card-footer text-center\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"modalAddPackingElmt.show()\"><i class=\"fa fa-plus\"></i> {{ 'Add'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"refrestListPackingElmt()\"><i class=\"fa fa-refresh\"></i> {{ 'Refresh'|translate }}</button>\n                </div>\n                </div>\n              </div>\n            <div class=\"col-md-7\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>{{ 'DESCRIPTION'|translate }}</strong>\n                </div>\n                <div class=\"card-body\" *ngIf=\"selectPackingElmt && !checkHideInfo; else hideInfo\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"ref-packing-name\">{{ 'Name'|translate }}</label>\n                        <div class=\"col-md-5\">\n                            <input type=\"text\" [(ngModel)]=\"updatePackingElmt.LABEL\" id=\"ref-packing-name\" class=\"form-control\">\n                        </div>\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-version\">{{ 'Version'|translate }}</label>\n                        <div class=\"col-md-2\">\n                            <input type=\"text\" [(ngModel)]=\"updatePackingElmt.PACKING_VERSION\" id=\"ref-packing-version\" class=\"form-control\" placeholder=\"0.0\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-7 col-form-label\" for=\"ref-packing-cond\">{{ 'Lambda thermal conductivity'|translate }} (EN)\t</label>\n                        <div class=\"col-md-5\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" [(ngModel)]=\"updatePackingElmt.PACKINGCOND\" id=\"ref-packing-cond\" class=\"form-control\" placeholder=\"0.00\">\n                                <span class=\"input-group-addon\"><small> {{ conductivitySymbol }}</small></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"ref-packing-comment\">{{ 'Comment'|translate }}</label>\n                        <div class=\"col-md-9\">\n                            <textarea type=\"text\" [(ngModel)]=\"updatePackingElmt.PACKING_COMMENT\" id=\"ref-packing-comment\" name=\"text-input\" class=\"form-control\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"margin-top: 30px;\">\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"status-packing\" \n                                [(ngModel)]=\"updatePackingElmt.PACKING_RELEASE\" [value]=\"1\" \n                                [disabled]=\"selectPackingElmt.PACKING_RELEASE == 4 || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 3 || selectPackingElmt.PACKING_RELEASE == 9\">{{ 'Draft'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"2\" class=\"custom-control-input\" name=\"status-packing\" \n                                [(ngModel)]=\"updatePackingElmt.PACKING_RELEASE\" \n                                [disabled]=\"selectPackingElmt.PACKING_RELEASE == 4 || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 3 || selectPackingElmt.PACKING_RELEASE == 9\">{{ 'Test'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"3\" class=\"custom-control-input\" name=\"status-packing\" \n                                [(ngModel)]=\"updatePackingElmt.PACKING_RELEASE\"  \n                                [disabled]=\"selectPackingElmt.PACKING_RELEASE == 4 || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 9\">{{ 'Active'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"4\" class=\"custom-control-input\" name=\"status-packing\" \n                                [(ngModel)]=\"updatePackingElmt.PACKING_RELEASE\"\n                                [disabled]=\"selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 9\">{{ 'Certified'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"9\" class=\"custom-control-input\" name=\"status-packing\" \n                                [(ngModel)]=\"updatePackingElmt.PACKING_RELEASE\"\n                                [disabled]=\"selectPackingElmt.PACKING_RELEASE == 4 || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 9\">{{ 'Obsolete'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <ng-template #hideInfo>\n                    <div class=\"card-body\">\n                        <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n                            Please select a packaging from the list before process.\n                        </div>\n                    </div>\n                </ng-template>\n                <div class=\"card-footer text-center\" *ngIf=\"selectPackingElmt && !checkHideInfo\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"checkDataPacking(updatePackingElmt, 1)\" \n                    [ladda]=\"isUpdatePacking\" [disabled]=\"selectPackingElmt.ID_USER != userLogon.ID_USER || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 9\">\n                    <i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePacking(selectPackingElmt)\" \n                    [ladda]=\"isDeletePacking\" [disabled]=\"selectPackingElmt.ID_USER != userLogon.ID_USER || selectPackingElmt.PACKING_RELEASE == 5 || selectPackingElmt.PACKING_RELEASE == 9\">\n                    <i class=\"fa fa-trash-o\"></i> {{ 'Delete'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalSaveAs.show()\"><i class=\"fa fa-copy\"></i> {{ 'Save as'|translate }}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<!-- Modals add packing-->\n<div bsModal class=\"modal fade\" #modalAddPackingElmt=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header \">\n                <strong>{{ 'PACKAGING'|translate }}</strong>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalAddPackingElmt.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-1\"></div>\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-name-add\">{{ 'Name'|translate }}</label>\n                        <div class=\"col-md-4\">\n                            <input type=\"text\" [(ngModel)]=\"newPackingElmt.LABEL\" id=\"ref-packing-name-add\" class=\"form-control\">\n                        </div>\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-version-add\">{{ 'Version'|translate }}</label>\n                        <div class=\"col-md-2\">\n                            <input type=\"text\" [(ngModel)]=\"newPackingElmt.PACKING_VERSION\" id=\"ref-packing-version-add\" class=\"form-control\" placeholder=\"0.00\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-1\"></div>\n                        <label class=\"col-md-6 col-form-label\" for=\"ref-packing-cond-add\">{{ 'Lambda thermal conductivity'|translate }} (EN)\t</label>\n                        <div class=\"col-md-4\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" [(ngModel)]=\"newPackingElmt.PACKINGCOND\" id=\"ref-packing-cond-add\" class=\"form-control\" placeholder=\"0.00\">\n                                <span class=\"input-group-addon\"><small> {{ conductivitySymbol }}</small></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <div class=\"col-md-1\"></div>\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-comment-add\">{{ 'Comment'|translate }}</label>\n                        <div class=\"col-md-8\">\n                            <textarea type=\"text\" [(ngModel)]=\"newPackingElmt.PACKING_COMMENT\" id=\"ref-packing-comment-add\" name=\"text-input\" class=\"form-control\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"margin-top: 30px;\">\n                        <div class=\"col-md-1\"></div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"1\" [(ngModel)]=\"newPackingElmt.PACKING_RELEASE\" class=\"custom-control-input\" name=\"status-packing-add\">{{ 'Draft'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"2\" [(ngModel)]=\"newPackingElmt.PACKING_RELEASE\" class=\"custom-control-input check\" name=\"status-packing-add\">{{ 'Test'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"3\" [(ngModel)]=\"newPackingElmt.PACKING_RELEASE\" class=\"custom-control-input\" name=\"status-packing-add\">{{ 'Active'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"4\" [(ngModel)]=\"newPackingElmt.PACKING_RELEASE\" class=\"custom-control-input\" name=\"status-packing-add\" disabled>{{ 'Certified'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                        <div class=\"col-md-2\" align=\"center\" >\n                            <label class=\"custom-control custom-radio\" >\n                                <input type=\"radio\" [value]=\"9\" [(ngModel)]=\"newPackingElmt.PACKING_RELEASE\" class=\"custom-control-input\" name=\"status-packing-add\" disabled>{{ 'Obsolete'|translate }}\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalAddPackingElmt.hide()\">{{ 'Cancel'|translate }}</button>\n                <button class=\"btn btn-success\" (click)=\"checkDataPacking(newPackingElmt, 0)\" [ladda]=\"isAddPacking\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End model add packing -->\n<!-- Start model save as packing -->\n<div bsModal class=\"modal fade\" #modalSaveAs=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header \">\n                <strong>{{ 'Save as'|translate }}</strong>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalSaveAs.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-name-as\">{{ 'Name'|translate }}</label>\n                        <div class=\"col-md-5\">\n                            <input type=\"text\" id=\"ref-packing-name-as\" [(ngModel)]=\"packingSaveAs.newName\" class=\"form-control\">\n                        </div>\n                        <label class=\"col-md-2 col-form-label\" for=\"ref-packing-version-as\">{{ 'Version'|translate }}</label>\n                        <div class=\"col-md-3\">\n                            <input type=\"text\" id=\"ref-packing-version-as\" [(ngModel)]=\"packingSaveAs.newVersion\" class=\"form-control\" placeholder=\"0.00\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalSaveAs.hide()\">{{ 'Cancel'|translate }}</button>\n                <button class=\"btn btn-success\" (click)=\"saveAsPacking(selectPackingElmt)\" [ladda]=\"isSaveAs\"><i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End model save as packing -->\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/references/packing/packing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/references/packing/packing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PackingElmtFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_services_referencedata_service__ = __webpack_require__("../../../../../src/app/api/services/referencedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_models__ = __webpack_require__("../../../../../src/app/api/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PackingElmtFilterPipe = (function () {
    function PackingElmtFilterPipe() {
    }
    PackingElmtFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.LABEL.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    PackingElmtFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'packingElmtFilter' })
    ], PackingElmtFilterPipe);
    return PackingElmtFilterPipe;
}());

var PackingComponent = (function () {
    function PackingComponent(referencedata, toastr, router, translate) {
        this.referencedata = referencedata;
        this.toastr = toastr;
        this.router = router;
        this.translate = translate;
        this.filterString = '';
        this.isAddPacking = false;
        this.isDeletePacking = false;
        this.isUpdatePacking = false;
        this.isSaveAs = false;
        this.isLoading = false;
        this.packingSaveAs = {
            newName: '',
            newVersion: 0
        };
        this.checkHideInfo = false;
        this.checkActivePacking = 0;
        this.conductivitySymbol = '';
        this.newPackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
        this.updatePackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
        this.userLogon = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('packingCurr', '');
    }
    PackingComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (Number(this.listUnits[i].TYPE_UNIT) === 10) {
                    this.conductivitySymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
    };
    PackingComponent.prototype.ngAfterViewInit = function () {
        this.refrestListPackingElmt();
    };
    PackingComponent.prototype.onSelectPackingElmt = function (packingElmt) {
        localStorage.setItem('packingCurr', '');
        this.checkActivePacking = 0;
        this.selectPackingElmt = packingElmt;
        this.updatePackingElmt.LABEL = packingElmt.LABEL;
        this.updatePackingElmt.PACKING_VERSION = packingElmt.PACKING_VERSION;
        this.updatePackingElmt.PACKINGCOND = packingElmt.PACKINGCOND;
        this.updatePackingElmt.PACKING_COMMENT = packingElmt.PACKING_COMMENT;
        this.updatePackingElmt.PACKING_RELEASE = packingElmt.PACKING_RELEASE;
        this.checkHideInfo = false;
    };
    PackingComponent.prototype.refrestListPackingElmt = function () {
        var _this = this;
        this.isLoading = true;
        this.referencedata.findRefPackingElmt()
            .subscribe(function (data) {
            _this.listPackingElmts = data;
            _this.isLoading = false;
        }, function (err) {
            // console.log(err);
        }, function () {
            if (localStorage.getItem('packingCurr') !== '') {
                var packingCurr = JSON.parse(localStorage.getItem('packingCurr'));
                _this.checkActivePacking = Number(packingCurr.ID_PACKING_ELMT);
                _this.updatePackingElmt = packingCurr;
                _this.selectPackingElmt = packingCurr;
            }
        });
    };
    PackingComponent.prototype.newPacking = function () {
        var _this = this;
        this.isAddPacking = true;
        this.referencedata.newPacking(this.newPackingElmt).subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('packingCurr', JSON.stringify(response));
                    _this.checkHideInfo = false;
                    _this.modalAddPackingElmt.hide();
                    _this.toastr.success(_this.translate.instant('Create user'), 'successfully');
                    _this.router.navigate(['/references/packing']);
                    _this.refrestListPackingElmt();
                    _this.newPackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
                }
                else {
                    _this.toastr.error(_this.translate.instant('Create packing error'), 'Error');
                }
            }
            _this.isAddPacking = false;
        }, function (err) {
            _this.isAddPacking = false;
        }, function () {
            _this.isAddPacking = false;
        });
    };
    PackingComponent.prototype.deletePacking = function (packing) {
        var _this = this;
        this.isDeletePacking = true;
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won`t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes, delete it!')
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()(_this.translate.instant('Deleted!'), _this.translate.instant('Your file has been deleted.'), 'success');
                _this.referencedata.deletePacking(packing.ID_PACKING_ELMT)
                    .subscribe(function (data) {
                    if (data === 1) {
                        _this.toastr.success(_this.translate.instant('Delete packing'), 'successfully');
                        _this.refrestListPackingElmt();
                        _this.updatePackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
                        _this.selectPackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
                        _this.checkHideInfo = true;
                    }
                    else {
                        _this.toastr.success(_this.translate.instant('Delete packing'), 'Error');
                    }
                    _this.isDeletePacking = false;
                }, function (err) {
                    // console.log(err);
                    _this.isDeletePacking = false;
                }, function () {
                    _this.isDeletePacking = false;
                });
            }
        });
    };
    PackingComponent.prototype.updatePacking = function () {
        var _this = this;
        this.isUpdatePacking = true;
        this.referencedata.updatePacking({
            ID_PACKING_ELMT: this.selectPackingElmt.ID_PACKING_ELMT,
            LABEL: this.updatePackingElmt.LABEL,
            PACKING_VERSION: this.updatePackingElmt.PACKING_VERSION,
            PACKINGCOND: this.updatePackingElmt.PACKINGCOND,
            PACKING_COMMENT: this.updatePackingElmt.PACKING_COMMENT,
            PACKING_RELEASE: this.updatePackingElmt.PACKING_RELEASE
        }).subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === -1) {
                _this.toastr.error(_this.translate.instant('Not found packaging!'), 'Error');
            }
            else if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use!'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('packingCurr', JSON.stringify(response));
                    _this.refrestListPackingElmt();
                    _this.toastr.success(_this.translate.instant('Update packaging'), 'successfully');
                    _this.router.navigate(['/references/packing']);
                }
                else {
                    _this.toastr.error(_this.translate.instant('Update packaging error !'), 'Error');
                }
            }
            _this.isUpdatePacking = false;
        }, function (err) {
            _this.isUpdatePacking = false;
        }, function () {
            _this.isUpdatePacking = false;
        });
    };
    PackingComponent.prototype.saveAsPacking = function (oldPacking) {
        var _this = this;
        if (!this.packingSaveAs.newName || this.packingSaveAs.newName === undefined) {
            this.toastr.error(this.translate.instant('Please specify name!'), 'Error');
            return;
        }
        if (typeof this.packingSaveAs.newName === 'number') {
            this.toastr.error(this.translate.instant('Not a valid string in Name'), 'Error');
            return;
        }
        if (String(this.packingSaveAs.newVersion) === '') {
            this.toastr.error(this.translate.instant('Please specify version'), 'Error');
            return;
        }
        if (isNaN(this.packingSaveAs.newVersion)) {
            this.toastr.error(this.translate.instant('Not a valid number in Version'), 'Error');
            return;
        }
        this.isSaveAs = true;
        this.referencedata.saveAsPacking({
            ID_PACKING_ELMT: oldPacking.ID_PACKING_ELMT,
            LABEL: this.packingSaveAs.newName,
            PACKING_VERSION: this.packingSaveAs.newVersion
        })
            .subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('packingCurr', JSON.stringify(response));
                    _this.modalSaveAs.hide();
                    _this.refrestListPackingElmt();
                    _this.toastr.success(_this.translate.instant('Save as success !'), 'successfully');
                    _this.router.navigate(['/references/packing']);
                    _this.updatePackingElmt = new __WEBPACK_IMPORTED_MODULE_3__api_models__["g" /* PackingElmt */]();
                    _this.packingSaveAs = {
                        newName: '',
                        newVersion: 0
                    };
                }
                else {
                    _this.toastr.error(_this.translate.instant('Save as packaging error'), 'Error');
                }
            }
            _this.isSaveAs = false;
        }, function (err) {
            // console.log(err);
            _this.isSaveAs = false;
        }, function () {
            _this.isSaveAs = false;
        });
    };
    PackingComponent.prototype.checkDataPacking = function (packing, check) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(packing.LABEL) || String(packing.LABEL) === ''
            || Object(__WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(packing.LABEL)) {
            this.toastr.error(this.translate.instant('Please specify Name	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(packing.PACKING_VERSION) || String(packing.PACKING_VERSION) === ''
            || isNaN(packing.PACKING_VERSION)) {
            this.toastr.error(this.translate.instant('Please specify Version	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(packing.PACKINGCOND) || String(packing.PACKINGCOND) === ''
            || isNaN(packing.PACKINGCOND) || !packing.PACKINGCOND) {
            this.toastr.error(this.translate.instant('Please specify Lambda thermal conductivity 	'), 'Error');
            return;
        }
        if (!packing.PACKING_RELEASE) {
            this.toastr.error(this.translate.instant('Please choose status'), 'Error');
            return;
        }
        if (!packing.PACKING_COMMENT) {
            packing.PACKING_COMMENT = '';
        }
        this.referencedata.checkPacking({
            ID_PACKING_ELMT: packing.ID_PACKING_ELMT,
            LABEL: packing.LABEL,
            PACKING_VERSION: packing.PACKING_VERSION,
            PACKINGCOND: packing.PACKINGCOND,
            PACKING_COMMENT: packing.PACKING_COMMENT,
            PACKING_RELEASE: packing.PACKING_RELEASE
        }).subscribe(function (res) {
            if (res === 1) {
                if (check === 0) {
                    _this.newPacking();
                }
                if (check === 1) {
                    _this.updatePacking();
                }
            }
            else {
                _this.toastr.error(_this.translate.instant(res.Message), 'Error');
            }
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddPackingElmt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PackingComponent.prototype, "modalAddPackingElmt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PackingComponent.prototype, "modalSaveAs", void 0);
    PackingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packing',
            template: __webpack_require__("../../../../../src/app/views/references/packing/packing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/references/packing/packing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_services_referencedata_service__["a" /* ReferencedataService */], __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], PackingComponent);
    return PackingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/pipeline/pipeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!isLoading\">\n    <div class=\"card product-container\">\n      <div class=\"card-body\">\n        <div style=\"margin-top:10px;\" id=\"page-load-pipeline\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"card\">\n                  <div class=\"card-header\">\n                      <div class=\"input-group input-group-sm study-search-box\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterString\" placeholder=\"{{'Search'|translate}}\" />\n                        <span>\n                          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        </span>\n                      </div>\n                  </div>\n                  <perfect-scrollbar style=\"max-height: 400px;\">\n                    <div class=\"list-group\" *ngIf=\"listPipeLines\">\n                        <h6 class=\"dropdown-header\">MINE</h6>\n                        <a *ngFor=\"let line of (listPipeLines.mine | pipeLineFilter: filterString)\" [ngClass]=\"checkActiveLine == line.ID_PIPELINE_ELMT || line == selectLine ? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelectPipeLine(line)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                            \n                             {{ line.LABEL }} - (v{{ line.LINE_VERSION }})\n                             <i *ngIf=\"line.LINE_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 5\" class=\"fa fa-lock text-secondary\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            </div>\n                        </a>\n                        <h6 class=\"dropdown-header\">OTHERS</h6>\n                        <a *ngFor=\"let line of (listPipeLines.others | pipeLineFilter: filterString)\" [ngClass]=\"line == selectLine? 'active' : ''\" class=\"list-group-item list-group-item-action\" (click)=\"onSelectPipeLine(line)\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                            \n                             {{ line.LABEL }} - (v{{ line.LINE_VERSION }})\n                             <i *ngIf=\"line.LINE_RELEASE == 3\" class=\"fa fa-check text-success\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 4\" class=\"fa fa-certificate text-success\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 5\" class=\"fa fa-lock text-secondary\"></i>\n                             <i *ngIf=\"line.LINE_RELEASE == 9\" class=\"fa fa-exclamation-circle text-danger\"></i>\n                            </div>\n                        </a>\n                    </div>\n                  </perfect-scrollbar>\n                  <div class=\"card-footer text-center\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"modalAddPipeLine.show()\"><i class=\"fa fa-plus\"></i> {{ 'Add'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"refrestListLineElmt()\"><i class=\"fa fa-refresh\"></i> {{ 'Refresh'|translate }}</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>{{ 'DESCRIPTION'|translate }}</strong>\n                </div>\n                <div class=\"card-body\" *ngIf=\"selectLine && !checkHideInfo; else hideInfo\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"text-input\">{{ 'Name'|translate }}</label>\n                        <div class=\"col-md-5\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.LABEL\" name=\"text-input\" class=\"form-control form-control-sm\">\n                        </div>\n                        <label class=\"col-md-2 col-form-label\" for=\"text-input\">{{ 'Version'|translate }} </label>\n                        <div class=\"col-md-2\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.LINE_VERSION\" name=\"text-input\" class=\"form-control form-control-sm\" placeholder=\"0.0\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"text-input\">{{ 'Comment'|translate }}</label>\n                        <div class=\"col-md-9\">\n                          <textarea type=\"text\" [(ngModel)]=\"updatePipeLine.LINE_COMMENT\" name=\"text-input\" class=\"form-control form-control-sm\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <table class=\"table table-hover table-striped table-sm\">\n                    <tr>\n                      <th style=\"width: 50%\">{{ 'Manufacturer'|translate }}</th>\n                      <td>\n                        <input type=\"text\" [(ngModel)]=\"updatePipeLine.MANUFACTURER\" class=\"form-control form-control-sm\">\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>{{ 'Type'|translate }}</th>\n                      <td>\n                        <select [(ngModel)]=\"updatePipeLine.ELT_TYPE\" class=\"form-control form-control-sm\" *ngIf=\"listLineType\">\n                          <option *ngFor=\"let type of listLineType\" [value]=\"type.ID_TRANSLATION\">{{ type.LABEL}}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>{{ 'Energy'|translate }}</th>\n                      <td>\n                        <select [(ngModel)]=\"updatePipeLine.ID_COOLING_FAMILY\" class=\"form-control form-control-sm\" *ngIf=\"listEnergies\">\n                          <option *ngFor=\"let energies of listEnergies\" value=\"{{ energies.ID_TRANSLATION }}\">{{ energies.LABEL }}</option>\n                        </select>\n                      </td>              \n                    </tr>\n                    <tr>\n                      <th>{{ 'Insulation'|translate }}</th>\n                      <td>\n                        <select [(ngModel)]=\"updatePipeLine.INSULATION_TYPE\" class=\"form-control form-control-sm\" [disabled]=\"updatePipeLine.ELT_TYPE == 2\">\n                          <option value=\"1\">Polyrethane</option>\n                          <option value=\"2\">Super Insulation</option>\n                          <option value=\"3\" [hidden]=\"newPipeLine.ID_COOLING_FAMILY != 3\">Armaflex</option>\n                          <option value=\"0\">Not insulated</option>\n                        </select>\n                      </td>              \n                    </tr>\n                    <tr>\n                      <th>{{ 'Price'|translate }}</th>\n                      <td>\n                        <div class=\"input-group\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.ELMT_PRICE\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\">\n                          <span class=\"input-group-addon\"><small [innerHTML]=\"monetarySymbol\"></small></span>\n                        </div>\n                      </td>              \n                    </tr>\n                    <tr>\n                      <th>{{ 'Size'|translate }}</th>\n                      <td>\n                        <div class=\"input-group\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.ELT_SIZE\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\">\n                          <span class=\"input-group-addon\">\n                            <small *ngIf=\"updatePipeLine.ELT_TYPE == 2; else hideLineDimensionLoad\">{{ tankCapacitySymbol }}</small>\n                            <ng-template #hideLineDimensionLoad>\n                                <small>{{ lineDimensionSymbol }}</small>\n                            </ng-template>\n                          </span>\n                        </div>\n                      </td>              \n                    </tr>\n                    <tr *ngIf=\"updatePipeLine.ELT_TYPE == 1 || updatePipeLine.ELT_TYPE == 2; else hideTrOpen\">\n                      <th *ngIf=\"updatePipeLine.ELT_TYPE == 2; else lossesInLoad\">{{ 'Rate of evaporation'|translate }}</th>\n                      <ng-template #lossesInLoad>\n                        <th>{{ 'Losses in get cold'|translate }}</th>\n                      </ng-template>\n\n                      <td>\n                        <div class=\"input-group\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.ELT_LOSSES_1\" class=\"form-control form-control-sm\" placeholder=\"0.00\" \n                          [disabled]=\"updatePipeLine.ELT_TYPE == 4 || updatePipeLine.ELT_TYPE == 3 || updatePipeLine.ELT_TYPE == 5 \n                          || (updatePipeLine.ELT_TYPE == 2 && updatePipeLine.ID_COOLING_FAMILY == 3)\" maxlength=\"5\">\n                          <span class=\"input-group-addon\">\n                            <small *ngIf=\"updatePipeLine.ELT_TYPE == 2 && updatePipeLine.ID_COOLING_FAMILY == 2;else symbolLMOpen\">{{ lineDepSymbol2 }}</small>\n                            <ng-template #symbolLMOpen>\n                              <small>{{ lineDepSymbol }}</small>\n                            </ng-template>\n                          </span>\n                        </div>\n                      </td>              \n                    </tr>\n                    <tr *ngIf=\"updatePipeLine.ELT_TYPE == 1 || updatePipeLine.ELT_TYPE == 2; else hideTr\">\n                      <th *ngIf=\"updatePipeLine.ELT_TYPE == 1\">{{ 'Permanent losses'|translate }}</th>\n                      <td *ngIf=\"updatePipeLine.ELT_TYPE == 1\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" [(ngModel)]=\"updatePipeLine.ELT_LOSSES_2\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\"\n                          [disabled]=\"updatePipeLine.ELT_TYPE == 2 || updatePipeLine.ELT_TYPE == 3 \n                          || updatePipeLine.ELT_TYPE == 4 || updatePipeLine.ELT_TYPE == 5\">\n\n                          <span class=\"input-group-addon\"><small>{{ lossesSymbol }}</small></span>\n                        </div>\n                      </td>              \n                    </tr>\n                    <ng-template #hideTrOpen>\n                      <tr></tr>\n                    </ng-template>    \n                  </table>\n                  <div class=\"row \">\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [(ngModel)]=\"updatePipeLine.LINE_RELEASE\" [value]=\"1\" class=\"custom-control-input\" name=\"status-pipe\"  \n                            [disabled]=\"selectLine.LINE_RELEASE == 4 || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 3 || selectLine.LINE_RELEASE == 9\">{{ 'Draft'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [(ngModel)]=\"updatePipeLine.LINE_RELEASE\" [value]=\"2\" class=\"custom-control-input\" name=\"status-pipe\"\n                            [disabled]=\"selectLine.LINE_RELEASE == 4 || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 3 || selectLine.LINE_RELEASE == 9\">{{ 'Test'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [(ngModel)]=\"updatePipeLine.LINE_RELEASE\" [value]=\"3\" class=\"custom-control-input\" name=\"status-pipe\"\n                            [disabled]=\"selectLine.LINE_RELEASE == 4 || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 9\">{{ 'Active'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [(ngModel)]=\"updatePipeLine.LINE_RELEASE\" [value]=\"4\" class=\"custom-control-input\" name=\"status-pipe\" \n                            [disabled]=\"selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 9\">{{ 'Certified'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-md-2\" align=\"center\" >\n                        <label class=\"custom-control custom-radio\" >\n                            <input type=\"radio\" [(ngModel)]=\"updatePipeLine.LINE_RELEASE\" [value]=\"9\" class=\"custom-control-input\" name=\"status-pipe\"                            [disabled]=\"selectLine.LINE_RELEASE == 4 || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 9\">{{ 'Obsolete'|translate }}\n                            <span class=\"custom-control-indicator\"></span>\n                        </label>\n                    </div>\n                  </div>  \n                </div>\n                <ng-template #hideInfo>\n                  <div class=\"card-body\">\n                    <div class=\"text-muted text-center\" style=\"min-height: 200px;padding-top:90px;\">\n                        Please select a pipe line from the list before process.\n                    </div>\n                  </div>\n                </ng-template>\n                <div class=\"card-footer text-center\" *ngIf=\"selectLine && !checkHideInfo\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"checkPipeline(updatePipeLine, 1)\" [ladda]=\"isUpdatePipeLine\" [disabled]=\"selectLine.ID_USER != userLogon.ID_USER || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 9\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> {{ 'Save'|translate }}</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePipeLine(selectLine)\" [ladda]=\"isDeletePipeLine\" [disabled]=\"selectLine.ID_USER != userLogon.ID_USER || selectLine.LINE_RELEASE == 5 || selectLine.LINE_RELEASE == 9\"><i class=\"fa fa-trash-o\"></i> {{ 'Delete'|translate }}</button>\n                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"modalSaveAs.show()\"><i class=\"fa fa-copy\"></i> {{ 'Save As'|translate }}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<!-- Modal add pipeline-->\n<div bsModal class=\"modal fade\" #modalAddPipeLine=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header \">\n        <strong>{{ 'PIPELINE'|translate }}</strong>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalAddPipeLine.hide()\">\n            <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group row\">\n            <div class=\"col-md-1\"></div>\n            <label class=\"col-md-2 col-form-label\" for=\"ref-line-name-add\">{{ 'Name'|translate }}</label>\n            <div class=\"col-md-4\">\n                <input type=\"text\" [(ngModel)]=\"newPipeLine.LABEL\" class=\"form-control form-control-sm\">\n            </div>\n            <label class=\"col-md-2 col-form-label\" for=\"ref-line-version-add\">{{ 'Version'|translate }}</label>\n            <div class=\"col-md-2\">\n                <input type=\"text\" [(ngModel)]=\"newPipeLine.LINE_VERSION\" class=\"form-control form-control-sm\" placeholder=\"0.00\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-md-1\"></div>\n            <label class=\"col-md-2 col-form-label\" for=\"ref-packing-comment-add\">{{ 'Comment'|translate }}</label>\n            <div class=\"col-md-8\">\n              <textarea type=\"text\" [(ngModel)]=\"newPipeLine.LINE_COMMENT\" name=\"text-input\" class=\"form-control form-control-sm\"></textarea>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <table class=\"table table-hover table-sm text-center\">\n              <tr>\n                <th style=\"width: 25%; margin-left: 20px;\">{{ 'Manufacturer'|translate }}</th>\n                <td style=\"width: 25%\">\n                  <input type=\"text\" [(ngModel)]=\"newPipeLine.MANUFACTURER\" class=\"form-control form-control-sm\">\n                </td>\n                <th style=\"width: 25%;\">{{ 'Type'|translate }}</th>\n                <td style=\"width: 25%\">\n                  <select [(ngModel)]=\"newPipeLine.ELT_TYPE\" class=\"form-control form-control-sm\" *ngIf=\"listLineType\">\n                    <option *ngFor=\"let type of listLineType\" [value]=\"type.ID_TRANSLATION\">{{ type.LABEL}}</option>\n                  </select>\n                </td>\n              </tr>\n              <tr>\n                <th>{{ 'Energy'|translate }}</th>\n                <td>\n                  <select [(ngModel)]=\"newPipeLine.ID_COOLING_FAMILY\" class=\"form-control form-control-sm\" *ngIf=\"listEnergies\">\n                    <option *ngFor=\"let energies of listEnergies\" value=\"{{ energies.ID_TRANSLATION }}\">{{ energies.LABEL }}</option>\n                  </select>\n                </td>\n                <th>{{ 'Insulation'|translate }}</th>\n                <td>\n                  <select [(ngModel)]=\"newPipeLine.INSULATION_TYPE\" class=\"form-control form-control-sm\" [disabled]=\"newPipeLine.ELT_TYPE == 2\">\n                    <option value=\"1\">{{ 'Polyrethane'|translate }}</option>\n                    <option value=\"2\">{{ 'Super Insulation'|translate }}</option>\n                    <option value=\"3\" [hidden]=\"newPipeLine.ID_COOLING_FAMILY != 3\">{{ 'Armaflex'|translate }}</option>\n                    <option value=\"0\">{{'Not insulated'|translate}}</option>\n                  </select>\n                </td>              \n              </tr>\n              <tr>\n                <th>{{ 'Price'|translate }}</th>\n                <td>\n                  <div class=\"input-group\">\n                    <input [(ngModel)]=\"newPipeLine.ELMT_PRICE\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\">\n                    <span class=\"input-group-addon\"><small [innerHTML]=\"monetarySymbol\"></small></span>\n                  </div>\n                </td>\n                <th>{{ 'Size'|translate }}</th>\n                <td>\n                  <div class=\"input-group\">\n                    <input type=\"text\" [(ngModel)]=\"newPipeLine.ELT_SIZE\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\">\n                    <span class=\"input-group-addon\">\n                      <small *ngIf=\"newPipeLine.ELT_TYPE == 2; else hideLineDimension\">{{ tankCapacitySymbol }}</small>\n                      <ng-template #hideLineDimension>\n                          <small>{{ lineDimensionSymbol }}</small>\n                      </ng-template>\n                    </span>\n                  </div>\n                </td>              \n              </tr>\n              <tr *ngIf=\"newPipeLine.ELT_TYPE == 1 || newPipeLine.ELT_TYPE == 2; else hideTr\">\n                <th *ngIf=\"newPipeLine.ELT_TYPE == 2; else lossesIn\">{{ 'Rate of evaporation'|translate }}</th>\n                <ng-template #lossesIn>\n                  <th>{{ 'Losses in get cold'|translate }}</th>\n                </ng-template>\n                <td>\n                  <div class=\"input-group\">\n                    <input type=\"text\" [(ngModel)]=\"newPipeLine.ELT_LOSSES_1\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\"\n                     [disabled]=\"newPipeLine.ELT_TYPE == 4 || newPipeLine.ELT_TYPE == 3 || newPipeLine.ELT_TYPE == 5 \n                     || (newPipeLine.ELT_TYPE == 2 && newPipeLine.ID_COOLING_FAMILY == 3)\">\n                    <span class=\"input-group-addon\">\n                      <small *ngIf=\"newPipeLine.ELT_TYPE == 2 && newPipeLine.ID_COOLING_FAMILY == 2;else symbolLM\">{{ lineDepSymbol2 }}</small>\n\n                      <ng-template #symbolLM>\n                        <small>{{ lineDepSymbol }}</small>\n                      </ng-template>\n                    </span>\n                  </div>\n                </td> \n                <th *ngIf=\"newPipeLine.ELT_TYPE == 1\">{{ 'Permanent losses'|translate }}</th>\n                <td *ngIf=\"newPipeLine.ELT_TYPE == 1\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" [(ngModel)]=\"newPipeLine.ELT_LOSSES_2\" class=\"form-control form-control-sm\" placeholder=\"0.00\" maxlength=\"5\"\n                    [disabled]=\"newPipeLine.ELT_TYPE == 2 || newPipeLine.ELT_TYPE == 3 || newPipeLine.ELT_TYPE == 4 || newPipeLine.ELT_TYPE == 5\">\n                    <span class=\"input-group-addon\"><small>{{ lossesSymbol }}</small></span>\n                  </div>\n                </td>\n              </tr>\n              <ng-template #hideTr>\n                <tr></tr>\n              </ng-template>        \n            </table>\n          </div>\n          <div class=\"row\" style=\"margin-top: 30px;\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-2\" align=\"center\" >\n              <label class=\"custom-control custom-radio\" >\n                <input type=\"radio\" [(ngModel)]=\"newPipeLine.LINE_RELEASE\" [value]=\"1\" class=\"custom-control-input\" name=\"status-packing-add\"s>{{ 'Draft'|translate }}\n                <span class=\"custom-control-indicator\"></span>\n              </label>\n            </div>\n            <div class=\"col-md-2\" align=\"center\" >\n                <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" [(ngModel)]=\"newPipeLine.LINE_RELEASE\" [value]=\"2\" class=\"custom-control-input check\" name=\"status-packing-add\">{{ 'Test'|translate }}\n                    <span class=\"custom-control-indicator\"></span>\n                </label>\n            </div>\n            <div class=\"col-md-2\" align=\"center\" >\n                <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" [(ngModel)]=\"newPipeLine.LINE_RELEASE\" [value]=\"3\" class=\"custom-control-input\" name=\"status-packing-add\">{{ 'Active'|translate }}\n                    <span class=\"custom-control-indicator\"></span>\n                </label>\n            </div>\n            <div class=\"col-md-2\" align=\"center\" >\n                <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" [(ngModel)]=\"newPipeLine.LINE_RELEASE\" [value]=\"4\" class=\"custom-control-input\" name=\"status-packing-add\" disabled>{{ 'Certified'|translate }}\n                    <span class=\"custom-control-indicator\"></span>\n                </label>\n            </div>\n            <div class=\"col-md-2\" align=\"center\" >\n                <label class=\"custom-control custom-radio\" >\n                    <input type=\"radio\" [(ngModel)]=\"newPipeLine.LINE_RELEASE\" [value]=\"9\" class=\"custom-control-input\" name=\"status-packing-add\" disabled>{{ 'Obsolete'|translate }}\n                    <span class=\"custom-control-indicator\"></span>\n                </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalAddPipeLine.hide()\">{{ 'Cancel'|translate }}</button>\n          <button class=\"btn btn-success\" (click)=\"checkPipeline(newPipeLine, 0)\" [ladda]=\"isAddLine\"><i class=\"fa fa-floppy-o\"></i> {{ 'Save'|translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End model add pipe -->\n<!-- Model save as pipeline -->\n<div bsModal class=\"modal fade\" #modalSaveAs=\"bs-modal\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header \">\n              <strong>{{ 'Save as'|translate }}</strong>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalSaveAs.hide()\">\n                  <span aria-hidden=\"true\">×</span>\n              </button>\n          </div>\n          <div class=\"modal-body row\">\n              <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                      <div class=\"col-md-2\"></div>\n                      <label class=\"col-md-2 col-form-label\" for=\"ref-packing-name-as\">{{ 'Name'|translate }}</label>\n                      <div class=\"col-md-6\">\n                          <input type=\"text\" id=\"ref-packing-name-as\" [(ngModel)]=\"pipeLineSaveAs.newName\" class=\"form-control\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"modal-footer\">\n              <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalSaveAs.hide()\">{{ 'Cancel'|translate }}</button>\n              <button class=\"btn btn-success\" (click)=\"saveAsPipeLine(selectLine)\" [ladda]=\"isSaveAs\"><i class=\"fa fa-floppy-o\"></i> {{ 'Confirm'|translate }}</button>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- End model save as pipeline -->\n<app-spinner *ngIf=\"isLoading\"></app-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/references/pipeline/pipeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".study-search-box span {\n  position: absolute;\n  top: 3px;\n  right: 6px;\n  z-index: 999;\n  color: #a9a9a9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/references/pipeline/pipeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeLineFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PipelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_services_referencedata_service__ = __webpack_require__("../../../../../src/app/api/services/referencedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_services__ = __webpack_require__("../../../../../src/app/api/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_models__ = __webpack_require__("../../../../../src/app/api/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PipeLineFilterPipe = (function () {
    function PipeLineFilterPipe() {
    }
    PipeLineFilterPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.LABEL.toLowerCase().indexOf(filter.toLowerCase()) >= 0; });
    };
    PipeLineFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'pipeLineFilter' })
    ], PipeLineFilterPipe);
    return PipeLineFilterPipe;
}());

var PipelineComponent = (function () {
    function PipelineComponent(referencedata, toastr, router, api, translate) {
        this.referencedata = referencedata;
        this.toastr = toastr;
        this.router = router;
        this.api = api;
        this.translate = translate;
        this.isAddLine = false;
        this.isDeletePipeLine = false;
        this.isUpdatePipeLine = false;
        this.isSaveAs = false;
        this.isLoading = false;
        this.filterString = '';
        this.pipeLineSaveAs = {
            newName: ''
        };
        this.checkHideInfo = false;
        this.checkActiveLine = 0;
        this.monetarySymbol = '';
        this.tankCapacitySymbol = '';
        this.lineDimensionSymbol = '';
        this.lineDepSymbol = '';
        this.lineDepSymbol2 = '';
        this.lossesSymbol = '';
        this.pipelineType = 1;
        this.newPipeLine = new __WEBPACK_IMPORTED_MODULE_8__api_models__["h" /* PipeLineElmt */]();
        this.userLogon = JSON.parse(localStorage.getItem('user'));
        this.updatePipeLine = new __WEBPACK_IMPORTED_MODULE_8__api_models__["h" /* PipeLineElmt */]();
        localStorage.setItem('pipelineCurr', '');
    }
    PipelineComponent.prototype.ngOnInit = function () {
        this.refrestListLineElmt();
        this.getListLineType();
        this.getListEnergies();
        this.isLoading = true;
        this.newPipeLine.ELT_TYPE = 2;
        this.newPipeLine.ID_COOLING_FAMILY = 2;
        this.newPipeLine.INSULATION_TYPE = 2;
        this.newPipeLine.LINE_RELEASE = 1;
        this.listUnits = JSON.parse(localStorage.getItem('UnitUser'));
        this.monetaryUser = JSON.parse(localStorage.getItem('MoneratyUser'));
        if (this.monetaryUser) {
            this.monetarySymbol = this.monetaryUser.SYMBOL;
        }
        if (this.listUnits) {
            for (var i = 0; i < this.listUnits.length; i++) {
                if (this.newPipeLine.ID_COOLING_FAMILY === 3) {
                    if (Number(this.listUnits[i].TYPE_UNIT) === 25) {
                        this.tankCapacitySymbol = this.listUnits[i].SYMBOL;
                    }
                }
                else {
                    if (Number(this.listUnits[i].TYPE_UNIT) === 18) {
                        this.tankCapacitySymbol = this.listUnits[i].SYMBOL;
                    }
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 17) {
                    this.lineDimensionSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 11) {
                    this.lineDepSymbol = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 26) {
                    this.lineDepSymbol2 = this.listUnits[i].SYMBOL;
                }
                if (Number(this.listUnits[i].TYPE_UNIT) === 12) {
                    this.lossesSymbol = this.listUnits[i].SYMBOL;
                }
            }
        }
    };
    PipelineComponent.prototype.ngAfterViewInit = function () {
    };
    PipelineComponent.prototype.refrestListLineElmt = function () {
        var _this = this;
        this.isLoading = true;
        this.referencedata.findRefPipeline()
            .subscribe(function (data) {
            for (var i = 0; i < data.mine.length; i++) {
                // data.mine[i].ELMT_PRICE = Number(data.mine[i].ELMT_PRICE);
                // data.mine[i].ELT_LOSSES_1 = Number(data.mine[i].ELT_LOSSES_1);
                // data.mine[i].ELT_LOSSES_2 = Number(data.mine[i].ELT_LOSSES_2);
                data.mine[i].ID_COOLING_FAMILY = Number(data.mine[i].ID_COOLING_FAMILY);
            }
            for (var i = 0; i < data.others.length; i++) {
                // data.others[i].ELMT_PRICE = Number(data.others[i].ELMT_PRICE);
                // data.others[i].ELT_LOSSES_1 = Number(data.others[i].ELT_LOSSES_1);
                // data.others[i].ELT_LOSSES_2 = Number(data.others[i].ELT_LOSSES_2);
                data.others[i].ID_COOLING_FAMILY = Number(data.others[i].ID_COOLING_FAMILY);
            }
            _this.listPipeLines = data;
            _this.isLoading = false;
        }, function (err) {
            // console.log(err);
        }, function () {
            if (localStorage.getItem('pipelineCurr') !== '') {
                var lineCurr = JSON.parse(localStorage.getItem('pipelineCurr'));
                if (lineCurr) {
                    _this.checkActiveLine = Number(lineCurr.ID_PIPELINE_ELMT);
                    _this.updatePipeLine = lineCurr;
                    _this.selectLine = lineCurr;
                }
            }
        });
    };
    PipelineComponent.prototype.getListLineType = function () {
        var _this = this;
        this.api.getListLineType()
            .subscribe(function (data) {
            _this.listLineType = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    PipelineComponent.prototype.getListEnergies = function () {
        var _this = this;
        this.api.getListEnergies()
            .subscribe(function (data) {
            _this.listEnergies = data;
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    PipelineComponent.prototype.onSelectPipeLine = function (line) {
        localStorage.setItem('pipelineCurr', '');
        this.checkActiveLine = 0;
        this.selectLine = line;
        this.updatePipeLine.LABEL = line.LABEL;
        this.updatePipeLine.LINE_VERSION = line.LINE_VERSION;
        this.updatePipeLine.LINE_COMMENT = line.LINE_COMMENT;
        this.updatePipeLine.MANUFACTURER = line.MANUFACTURER;
        this.updatePipeLine.ELT_TYPE = line.ELT_TYPE;
        this.updatePipeLine.ID_COOLING_FAMILY = line.ID_COOLING_FAMILY;
        this.updatePipeLine.INSULATION_TYPE = line.INSULATION_TYPE;
        this.updatePipeLine.ELMT_PRICE = line.ELMT_PRICE;
        this.updatePipeLine.ELT_SIZE = line.ELT_SIZE;
        this.updatePipeLine.ELT_LOSSES_1 = line.ELT_LOSSES_1;
        this.updatePipeLine.ELT_LOSSES_2 = line.ELT_LOSSES_2;
        this.updatePipeLine.LINE_RELEASE = Number(line.LINE_RELEASE);
        this.checkHideInfo = false;
        // console.log(this.updatePipeLine);
        // console.log(this.selectLine);
    };
    PipelineComponent.prototype.checkPipeline = function (pipeLine, check) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(pipeLine.LABEL) || String(pipeLine.LABEL) === ''
            || Object(__WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap_util_util__["d" /* isNumber */])(pipeLine.LABEL)) {
            this.toastr.error(this.translate.instant('Please specify Name	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(pipeLine.LINE_VERSION) || String(pipeLine.LINE_VERSION) === ''
            || isNaN(pipeLine.LINE_VERSION)) {
            this.toastr.error(this.translate.instant('Please specify Version	'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(pipeLine.ELMT_PRICE) || String(pipeLine.ELMT_PRICE) === ''
            || isNaN(pipeLine.ELMT_PRICE) || pipeLine.ELMT_PRICE < 0) {
            this.toastr.error(this.translate.instant('Please specify Price'), 'Error');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(pipeLine.ELT_SIZE) || String(pipeLine.ELT_SIZE) === ''
            || isNaN(pipeLine.ELT_SIZE) || pipeLine.ELT_SIZE < 0) {
            this.toastr.error(this.translate.instant('Please specify Size'), 'Error');
            return;
        }
        if (!pipeLine.LINE_RELEASE) {
            this.toastr.error(this.translate.instant('Please choose Status'), 'Error');
            return;
        }
        if (pipeLine.ELT_LOSSES_1 === undefined || !pipeLine.ELT_LOSSES_1) {
            pipeLine.ELT_LOSSES_1 = 0;
        }
        if (pipeLine.ELT_LOSSES_2 === undefined || !pipeLine.ELT_LOSSES_2) {
            pipeLine.ELT_LOSSES_2 = 0;
        }
        if (pipeLine.MANUFACTURER === undefined || !pipeLine.MANUFACTURER) {
            pipeLine.MANUFACTURER = '';
        }
        if (!pipeLine.LINE_COMMENT) {
            pipeLine.LINE_COMMENT = '';
        }
        if (Number(pipeLine.ELT_TYPE) === 1 || Number(pipeLine.ELT_TYPE) === 2) {
            if (Number(pipeLine.ELT_TYPE) === 2) {
                if (isNaN(pipeLine.ELT_LOSSES_1)) {
                    this.toastr.error(this.translate.instant('Please specify Rate of evaporation'), 'Error');
                    return;
                }
            }
            else {
                if (Number(pipeLine.ELT_TYPE) === 3 || Number(pipeLine.ELT_TYPE) === 4 || Number(pipeLine.ELT_TYPE) === 5
                    || (Number(pipeLine.ELT_TYPE) === 2 && Number(pipeLine.ID_COOLING_FAMILY) === 3)) {
                }
                else {
                    if (isNaN(pipeLine.ELT_LOSSES_1) || pipeLine.ELT_LOSSES_1 < 0) {
                        this.toastr.error(this.translate.instant('Please specify Losses in get cold'), 'Error');
                        return;
                    }
                }
                if (Number(pipeLine.ELT_TYPE) === 1) {
                    if (Number(pipeLine.ELT_TYPE) !== 2 && Number(pipeLine.ELT_TYPE) !== 3 && Number(pipeLine.ELT_TYPE) !== 4
                        && Number(pipeLine.ELT_TYPE) !== 5) {
                        if (isNaN(pipeLine.ELT_LOSSES_2) || pipeLine.ELT_LOSSES_2 < 0) {
                            this.toastr.error(this.translate.instant('Please specify Permanent losses'), 'Error');
                            return;
                        }
                    }
                }
            }
        }
        // if (isNullOrUndefined(pipeLine.ELT_LOSSES_1) || String(pipeLine.ELT_LOSSES_1) === ''
        // || isNaN(pipeLine.ELT_LOSSES_1) || pipeLine.ELT_LOSSES_1 < 0) {
        //   this.toastr.error('Please specify Losses 1', 'Error');
        //   return;
        // }
        // if (isNullOrUndefined(pipeLine.ELT_LOSSES_2) || String(pipeLine.ELT_LOSSES_2) === ''
        // || isNaN(pipeLine.ELT_LOSSES_2) || pipeLine.ELT_LOSSES_2 < 0) {
        //   this.toastr.error('Please specify Losses 2', 'Error');
        //   return;
        // }
        this.referencedata.checkPipeline({
            LABEL: pipeLine.LABEL,
            LINE_VERSION: pipeLine.LINE_VERSION,
            LINE_COMMENT: pipeLine.LINE_COMMENT,
            MANUFACTURER: pipeLine.MANUFACTURER,
            ELT_TYPE: pipeLine.ELT_TYPE,
            ID_COOLING_FAMILY: pipeLine.ID_COOLING_FAMILY,
            INSULATION_TYPE: pipeLine.INSULATION_TYPE,
            ELMT_PRICE: pipeLine.ELMT_PRICE,
            ELT_SIZE: pipeLine.ELT_SIZE,
            ELT_LOSSES_1: pipeLine.ELT_LOSSES_1,
            ELT_LOSSES_2: pipeLine.ELT_LOSSES_2,
            LINE_RELEASE: pipeLine.LINE_RELEASE
        }).subscribe(function (res) {
            if (res === 1) {
                if (check === 0) {
                    _this.savePipeLine();
                }
                if (check === 1) {
                    _this.updatePipeLineElmt();
                }
            }
            else {
                _this.toastr.error(res.Message, 'Error');
            }
        }, function (err) {
            // console.log(err);
        }, function () {
        });
    };
    PipelineComponent.prototype.savePipeLine = function () {
        var _this = this;
        if (this.newPipeLine.ELT_LOSSES_1 === undefined || !this.newPipeLine.ELT_LOSSES_1) {
            this.newPipeLine.ELT_LOSSES_1 = 0;
        }
        if (this.newPipeLine.ELT_LOSSES_2 === undefined || !this.newPipeLine.ELT_LOSSES_2) {
            this.newPipeLine.ELT_LOSSES_2 = 0;
        }
        if (this.newPipeLine.MANUFACTURER === undefined || !this.newPipeLine.MANUFACTURER) {
            this.newPipeLine.MANUFACTURER = '';
        }
        if (!this.newPipeLine.LINE_COMMENT) {
            this.newPipeLine.LINE_COMMENT = '';
        }
        this.isAddLine = true;
        this.referencedata.newPipeLine(this.newPipeLine).subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('pipelineCurr', JSON.stringify(response));
                    _this.modalAddPipeLine.hide();
                    _this.toastr.success('Create pipe line', 'successfully');
                    _this.router.navigate(['/references/pipeline']);
                    _this.refrestListLineElmt();
                    _this.ngOnInit();
                    _this.checkHideInfo = false;
                    _this.newPipeLine = new __WEBPACK_IMPORTED_MODULE_8__api_models__["h" /* PipeLineElmt */]();
                }
                else {
                    _this.toastr.error(_this.translate.instant('Create pipeline error!'), 'Error');
                }
            }
            _this.isAddLine = false;
        }, function (err) {
            _this.isAddLine = false;
            // console.log(err);
        }, function () {
            _this.isAddLine = false;
        });
    };
    PipelineComponent.prototype.deletePipeLine = function (pipeLineElmt) {
        var _this = this;
        this.isDeletePipeLine = true;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: this.translate.instant('Are you sure?'),
            text: this.translate.instant('You won`t be able to revert this!'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.translate.instant('Yes, delete it!')
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(_this.translate.instant('Deleted!'), _this.translate.instant('Your file has been deleted.'), 'success');
                _this.referencedata.deletePipeLine(pipeLineElmt.ID_PIPELINE_ELMT)
                    .subscribe(function (data) {
                    if (data === 1) {
                        _this.toastr.success(_this.translate.instant('Delete pipe line'), 'successfully');
                        _this.updatePipeLine = new __WEBPACK_IMPORTED_MODULE_8__api_models__["h" /* PipeLineElmt */]();
                        _this.checkHideInfo = true;
                    }
                    else {
                        _this.toastr.error(_this.translate.instant('Delete pipe line error!'), 'Error');
                    }
                    _this.isDeletePipeLine = false;
                }, function (err) {
                    // console.log(err);
                    _this.isDeletePipeLine = false;
                }, function () {
                    _this.refrestListLineElmt();
                    _this.isDeletePipeLine = false;
                    _this.selectLine = new __WEBPACK_IMPORTED_MODULE_8__api_models__["h" /* PipeLineElmt */]();
                });
            }
        });
    };
    PipelineComponent.prototype.updatePipeLineElmt = function () {
        var _this = this;
        if (this.updatePipeLine.ELT_LOSSES_1 === undefined || !this.updatePipeLine.ELT_LOSSES_1) {
            this.updatePipeLine.ELT_LOSSES_1 = 0;
        }
        if (this.updatePipeLine.ELT_LOSSES_2 === undefined || !this.updatePipeLine.ELT_LOSSES_2) {
            this.updatePipeLine.ELT_LOSSES_2 = 0;
        }
        if (this.updatePipeLine.MANUFACTURER === undefined || !this.updatePipeLine.MANUFACTURER) {
            this.updatePipeLine.MANUFACTURER = '';
        }
        if (!this.updatePipeLine.LINE_COMMENT) {
            this.updatePipeLine.LINE_COMMENT = '';
        }
        this.isUpdatePipeLine = true;
        this.referencedata.updatePipeLine({
            ID_PIPELINE_ELMT: this.selectLine.ID_PIPELINE_ELMT,
            LABEL: this.updatePipeLine.LABEL,
            LINE_VERSION: this.updatePipeLine.LINE_VERSION,
            LINE_COMMENT: this.updatePipeLine.LINE_COMMENT,
            MANUFACTURER: this.updatePipeLine.MANUFACTURER,
            ELT_TYPE: this.updatePipeLine.ELT_TYPE,
            ID_COOLING_FAMILY: this.updatePipeLine.ID_COOLING_FAMILY,
            INSULATION_TYPE: this.updatePipeLine.INSULATION_TYPE,
            ELMT_PRICE: this.updatePipeLine.ELMT_PRICE,
            ELT_SIZE: this.updatePipeLine.ELT_SIZE,
            ELT_LOSSES_1: this.updatePipeLine.ELT_LOSSES_1,
            ELT_LOSSES_2: this.updatePipeLine.ELT_LOSSES_2,
            LINE_RELEASE: this.updatePipeLine.LINE_RELEASE
        }).subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use!'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('pipelineCurr', JSON.stringify(response));
                    _this.modalAddPipeLine.hide();
                    _this.toastr.success(_this.translate.instant('Update pipe line'), 'successfully');
                    _this.router.navigate(['/references/pipeline']);
                    _this.refrestListLineElmt();
                }
                else {
                    _this.toastr.error(_this.translate.instant('Update pipeline error!'), 'Error');
                }
            }
            _this.isUpdatePipeLine = false;
        }, function (err) {
            _this.isUpdatePipeLine = false;
            // console.log(err);
        }, function () {
            _this.isUpdatePipeLine = false;
        });
    };
    PipelineComponent.prototype.saveAsPipeLine = function (oldPipeLine) {
        var _this = this;
        if (!this.pipeLineSaveAs.newName || this.pipeLineSaveAs.newName === undefined) {
            this.toastr.error(this.translate.instant('Please specify name!'), 'Error');
            return;
        }
        if (typeof this.pipeLineSaveAs.newName === 'number') {
            this.toastr.error(this.translate.instant('Not a valid string in Name !'), 'Error');
            return;
        }
        this.isSaveAs = true;
        this.referencedata.saveAsPipeLine({
            ID_PIPELINE_ELMT: oldPipeLine.ID_PIPELINE_ELMT,
            LABEL: this.pipeLineSaveAs.newName
        })
            .subscribe(function (response) {
            var success = true;
            if (response === undefined) {
                success = false;
            }
            if (response === 0) {
                _this.toastr.error(_this.translate.instant('Name and version already in use!'), 'Error');
            }
            else {
                if (success) {
                    localStorage.setItem('pipelineCurr', JSON.stringify(response));
                    _this.modalSaveAs.hide();
                    _this.toastr.success(_this.translate.instant('Save as success !'), 'successfully');
                    _this.router.navigate(['/references/pipeline']);
                    _this.refrestListLineElmt();
                    _this.pipeLineSaveAs = {
                        newName: ''
                    };
                }
                else {
                    _this.toastr.error(_this.translate.instant('Save as pipe line error!'), 'Error');
                }
            }
            _this.isSaveAs = false;
        }, function (err) {
            // console.log(err);
            _this.isSaveAs = false;
        }, function () {
            _this.isSaveAs = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalAddPipeLine'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PipelineComponent.prototype, "modalAddPipeLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSaveAs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_directive__["a" /* ModalDirective */])
    ], PipelineComponent.prototype, "modalSaveAs", void 0);
    PipelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pipeline',
            template: __webpack_require__("../../../../../src/app/views/references/pipeline/pipeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/references/pipeline/pipeline.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_services_referencedata_service__["a" /* ReferencedataService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_7__api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], PipelineComponent);
    return PipelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/references-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/references/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_component_component__ = __webpack_require__("../../../../../src/app/views/references/component/component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipment_equipment_component__ = __webpack_require__("../../../../../src/app/views/references/equipment/equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__packing_packing_component__ = __webpack_require__("../../../../../src/app/views/references/packing/packing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipeline_pipeline_component__ = __webpack_require__("../../../../../src/app/views/references/pipeline/pipeline.component.ts");
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
                redirectTo: 'component',
                pathMatch: 'full',
            },
            {
                path: 'component',
                component: __WEBPACK_IMPORTED_MODULE_3__component_component_component__["a" /* ComponentComponent */]
            },
            {
                path: 'packing',
                component: __WEBPACK_IMPORTED_MODULE_5__packing_packing_component__["a" /* PackingComponent */]
            },
            {
                path: 'equipment',
                component: __WEBPACK_IMPORTED_MODULE_4__equipment_equipment_component__["a" /* EquipmentComponent */]
            },
            {
                path: 'pipeline',
                component: __WEBPACK_IMPORTED_MODULE_6__pipeline_pipeline_component__["b" /* PipelineComponent */]
            }
        ]
    }
];
var ReferencesRoutingModule = (function () {
    function ReferencesRoutingModule() {
    }
    ReferencesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], ReferencesRoutingModule);
    return ReferencesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/references.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesModule", function() { return ReferencesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__references_routing_module__ = __webpack_require__("../../../../../src/app/views/references/references-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__ = __webpack_require__("../../../../../src/app/views/references/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_component_component__ = __webpack_require__("../../../../../src/app/views/references/component/component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__packing_packing_component__ = __webpack_require__("../../../../../src/app/views/references/packing/packing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__equipment_equipment_component__ = __webpack_require__("../../../../../src/app/views/references/equipment/equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipeline_pipeline_component__ = __webpack_require__("../../../../../src/app/views/references/pipeline/pipeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ReferencesModule = (function () {
    function ReferencesModule() {
    }
    ReferencesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__references_routing_module__["a" /* ReferencesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__layout_layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__component_component_component__["a" /* ComponentComponent */], __WEBPACK_IMPORTED_MODULE_7__packing_packing_component__["a" /* PackingComponent */], __WEBPACK_IMPORTED_MODULE_8__equipment_equipment_component__["a" /* EquipmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipeline_pipeline_component__["b" /* PipelineComponent */], __WEBPACK_IMPORTED_MODULE_7__packing_packing_component__["b" /* PackingElmtFilterPipe */], __WEBPACK_IMPORTED_MODULE_9__pipeline_pipeline_component__["a" /* PipeLineFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__component_component_component__["b" /* ComponentFilterPipe */], __WEBPACK_IMPORTED_MODULE_8__equipment_equipment_component__["b" /* EquipmentFilterPipe */]]
        })
    ], ReferencesModule);
    return ReferencesModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/references/references.nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesNavItems; });
var ReferencesNavItems = [
    {
        name: 'Component',
        url: '/references/component',
        icon: '',
    },
    {
        name: 'Packaging',
        url: '/references/packing',
        icon: '',
    },
    {
        name: 'Equipment',
        url: '/references/equipment',
        icon: '',
    },
    {
        name: 'PipeLine',
        url: '/references/pipeline',
        icon: '',
    }
];


/***/ }),

/***/ "../../../../highcharts-draggable-points/draggable-points.js":
/***/ (function(module, exports) {

/**
 * Draggable points plugin for Highcharts JS
 * Author: Torstein Honsi
 * License: MIT License
 * Version: 2.0.9 (2018-03-29)
 */

/*global document, Highcharts */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
}(function (Highcharts) {

    'use strict';

    var addEvent = Highcharts.addEvent,
        each = Highcharts.each,
        extend = Highcharts.extend,
        pick = Highcharts.pick,
        columnProto = Highcharts.seriesTypes.column.prototype;


    /**
     * Filter by dragMin and dragMax
     */
    function filterRange(newY, series, XOrY) {
        var options = series.options,
            dragMin = pick(options['dragMin' + XOrY], undefined),
            dragMax = pick(options['dragMax' + XOrY], undefined),
            precision = pick(options['dragPrecision' + XOrY], undefined);

        if (!isNaN(precision)) {
            newY = Math.round(newY / precision) * precision;
        }

        if (newY < dragMin) {
            newY = dragMin;
        } else if (newY > dragMax) {
            newY = dragMax;
        }
        return newY;
    }


    Highcharts.Chart.prototype.callbacks.push(function (chart) {

        var container = chart.container,
            chartOptions = chart.userOptions.chart || {},
            dragPoint,
            dragStart,
            dragX,
            dragY,
            dragPlotX,
            dragPlotY,
            dragPlotHigh,
            dragPlotLow,
            changeLow,
            newHigh,
            newLow,
            // Check whether the panKey and zoomKey are set in chart.userOptions
            panKey = chartOptions.panKey && chartOptions.panKey + 'Key',
            zoomKey = chartOptions.zoomKey && chartOptions.zoomKey + 'Key';

        /**
         * Check, whether the zoomKey or panKey is pressed
         **/
        function zoomOrPanKeyPressed(e) {
            return (e[zoomKey] || e[panKey]);
        }

        /**
         * Get the new values based on the drag event
         */
        function getNewPos(e) {
            var originalEvent = e.originalEvent || e,
                pageX = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageX : e.pageX,
                pageY = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageY : e.pageY,
                series = dragPoint.series,
                draggableX = series.options.draggableX && dragPoint.draggableX !== false,
                draggableY = series.options.draggableY && dragPoint.draggableY !== false,
                dragSensitivity = pick(series.options.dragSensitiviy, 1),
                deltaX = draggableX ? dragX - pageX : 0,
                deltaY = draggableY ? dragY - pageY : 0,
                newPlotX = dragPlotX - deltaX,
                newPlotY = dragPlotY - deltaY,
                newX = dragX === undefined ? dragPoint.x : series.xAxis.toValue(newPlotX, true),
                newY = dragY === undefined ? dragPoint.y : series.yAxis.toValue(newPlotY, true),
                ret;

            newX = filterRange(newX, series, 'X');
            newY = filterRange(newY, series, 'Y');
            if (dragPoint.low) {
                var newPlotHigh = dragPlotHigh - deltaY,
                    newPlotLow = dragPlotLow - deltaY;
                newHigh = dragY === undefined ? dragPoint.high : series.yAxis.toValue(newPlotHigh, true);
                newLow = dragY === undefined ? dragPoint.low : series.yAxis.toValue(newPlotLow, true);
                newHigh = filterRange(newHigh, series, 'Y');
                newLow = filterRange(newLow, series, 'Y');
            }
            if (Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) > dragSensitivity) {
                return {
                    x: draggableX ? newX : dragPoint.x,
                    y: draggableY ? newY : dragPoint.y,
                    high: (draggableY && !changeLow) ? newHigh : dragPoint.high,
                    low: (draggableY && changeLow) ? newLow : dragPoint.low,
                    dragStart: dragStart,
                    originalEvent: e
                };
            } else {
                return null;
            }
        }

        /**
         * Handler for mouseup
         */
        function drop(e) {
            var newPos = dragPoint && e && getNewPos(e);

            function reset() {
                dragPoint = dragX = dragY = undefined;
            }

            if (newPos) {
                dragPoint.firePointEvent('drop', newPos, function () {
                    dragPoint.update(newPos);

                    // Update k-d-tree immediately to prevent tooltip jump (#43)
                    dragPoint.series.options.kdNow = true;
                    dragPoint.series.buildKDTree();

                    reset();
                });
            } else {
                reset();
            }
            
        }

        /**
         * Handler for mousedown
         */
        function mouseDown(e) {

            // Check whether the panKey or zoomKey isn't pressed
            if (!zoomOrPanKeyPressed(e)) {

                var options,
                    originalEvent = e.originalEvent || e,
                    hoverPoint,
                    series,
                    bottom;

                if ((originalEvent.target.getAttribute('class') || '').indexOf('highcharts-handle') !== -1) {
                    hoverPoint = originalEvent.target.point;
                }

                series = chart.hoverPoint && chart.hoverPoint.series;
                if (!hoverPoint && chart.hoverPoint && (!series.useDragHandle || !series.useDragHandle())) {
                    hoverPoint = chart.hoverPoint;
                }

                if (hoverPoint) {
                    options = hoverPoint.series.options;
                    dragStart = {};
                    if (options.draggableX && hoverPoint.draggableX !== false) {
                        dragPoint = hoverPoint;
                        dragX = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageX : e.pageX;
                        dragPlotX = dragPoint.plotX;
                        dragStart.x = dragPoint.x;
                    }

                    if (options.draggableY && hoverPoint.draggableY !== false) {
                        dragPoint = hoverPoint;
                        // Added support for normal stacking (#78)
                        bottom = pick(series.translatedThreshold, chart.plotHeight);

                        dragY = originalEvent.changedTouches ? originalEvent.changedTouches[0].pageY : e.pageY;
                        dragPlotY = dragPoint.plotY + (bottom - (dragPoint.yBottom || bottom));
                        dragStart.y = dragPoint.y;
                        if (dragPoint.plotHigh) {
                            dragPlotHigh = dragPoint.plotHigh;
                            dragPlotLow = dragPoint.plotLow;
                            changeLow = (Math.abs(dragPlotLow - (dragY - 60)) < Math.abs(dragPlotHigh - (dragY - 60))) ? true : false;
                        }
                    }

                    // Disable zooming when dragging
                    if (dragPoint) {
                        chart.mouseIsDown = false;
                    }
                }
            }
        }

        /**
         * Handler for mousemove. If the mouse button is pressed, drag the element.
         */
        function mouseMove(e) {

            // Check whether the zoomKey or panKey isn't pressed
            if (dragPoint && !zoomOrPanKeyPressed(e)) {

                e.preventDefault();

                var evtArgs = getNewPos(e), // Gets x and y
                    proceed;

                // Fire the 'drag' event with a default action to move the point.
                if (evtArgs) {
                    dragPoint.firePointEvent(
                        'drag',
                        evtArgs,
                        function () {

                            var kdTree,
                                series = dragPoint.series;

                            proceed = true;

                            dragPoint.update(evtArgs, false);

                            // Hide halo while dragging (#14)
                            if (series.halo) {
                                series.halo = series.halo.destroy();
                            }

                            // Let the tooltip follow and reflect the drag point
                            chart.pointer.reset(true);


                            // Stacking requires full redraw
                            if (series.stackKey) {
                                chart.redraw();

                                // Do a series redraw only. Let the k-d-tree survive the redraw in order to
                                // prevent tooltip flickering (#43).
                            } else {

                                kdTree = series.kdTree;
                                series.redraw();
                                series.kdTree = kdTree;
                            }
                        }
                    );


                    // The default handler has not run because of prevented default
                    if (!proceed) {
                        drop();
                    }
                }
            }
        }

        // Kill animation on first drag when chart.animation is set to false.
        chart.redraw();

        // Add'em
        addEvent(container, 'mousemove', mouseMove);
        addEvent(container, 'touchmove', mouseMove);
        addEvent(container, 'mousedown', mouseDown);
        addEvent(container, 'touchstart', mouseDown);
        addEvent(document, 'mouseup', drop);
        addEvent(document, 'touchend', drop);
        addEvent(container, 'mouseleave', drop);
    });

    /**
     * Extend the column chart tracker by visualizing the tracker object for
     * small points
     */
    columnProto.useDragHandle = function () {
        var is3d = this.chart.is3d && this.chart.is3d();
        return !is3d;
    };

    columnProto.dragHandlePath = function (shapeArgs, strokeW, isNegative) {
        var h = 6,
            h1 = h / 3,
            h2 = h1 * 2,
            x1 = shapeArgs.x,
            y = (isNegative ? shapeArgs.height - h : 0) + shapeArgs.y,
            x2 = shapeArgs.x + shapeArgs.width;

        return [
            'M', x1, y + h * strokeW,
            'L', x1, y,
            'L', x2, y,
            'L', x2, y + h1 * strokeW,
            'L', x1, y + h1 * strokeW,
            'L', x2, y + h1 * strokeW,
            'L', x2, y + h2 * strokeW,
            'L', x1, y + h2 * strokeW,
            'L', x2, y + h2 * strokeW,
            'L', x2, y + h * strokeW
        ];
    };

    Highcharts.wrap(columnProto, 'drawTracker', function (proceed) {
        var series = this,
            options = series.options,
            strokeW = series.borderWidth || 0;

        proceed.apply(series);

        if (
            this.useDragHandle() &&
            (options.draggableX || options.draggableY)
        ) {

            each(series.points, function (point) {

                var path = (
                        options.dragHandlePath ||
                        series.dragHandlePath
                    )(point.shapeArgs, strokeW, point.negative);

                if (!point.handle) {
                    point.handle = series.chart.renderer.path(path)
                        .attr({
                            fill: options.dragHandleFill || 'rgba(0,0,0,0.5)',
                            'class': 'highcharts-handle',
                            'stroke-width': strokeW,
                            'stroke': options.dragHandleStroke ||
                                options.borderColor ||
                                1
                        })
                        .css({
                            cursor: 'ns-resize'
                        })
                        .add(series.group);

                    point.handle.element.point = point;
                } else {
                    point.handle.attr({d: path});
                }
            });
        }
    });

}));


/***/ })

});
//# sourceMappingURL=references.module.chunk.js.map