webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/___temp/material2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyCustomMaterialModule = (function () {
    function MyCustomMaterialModule() {
    }
    MyCustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                // MatButtonToggleModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatStepperModule */],
                // MatDatepickerModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                // MatMenuModule,
                // MatNativeDateModule,
                // MatPaginatorModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSelectModule */],
                // MatSidenavModule,
                // MatSliderModule,
                // MatSlideToggleModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSnackBarModule */],
                // MatSortModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTableModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                // MatButtonToggleModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatStepperModule */],
                // MatDatepickerModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                // MatMenuModule,
                // MatNativeDateModule,
                // MatPaginatorModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSelectModule */],
                // MatSidenavModule,
                // MatSliderModule,
                // MatSlideToggleModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSnackBarModule */],
                // MatSortModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTableModule */],
            ]
        })
    ], MyCustomMaterialModule);
    return MyCustomMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {SettingService} from './services/setting.service';
var AppComponent = (function () {
    /*
    isSubscribed = false;
    isActivated = false;
    showLoader = true;
    currentSysId: string;
    currentStep: string;
  
    haveSubscribed(dataEvent: { isSubscribed: boolean }) {
      // this.isSubscribed = dataEvent.isSubscribed;
      // this.showLoader = false;
      // this.currentStep = 'submited';
      this.getActivation();
      // console.log('this.isSuscribed', this.isSubscribed);
    }
  
    haveActivated(dataEvent: { isActivated: boolean }) {
      // this.isActivated = dataEvent.isActivated;
      // this.showLoader = false;
      // this.currentStep = 'activated';
      this.getActivation();
      // console.log('this.isActivated', this.isActivated);
    }
  */
    // constructor(private settingService: SettingService) {
    // }
    function AppComponent(_router) {
        this._router = _router;
        this.router = _router;
        console.log(this.router.url);
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getActivation();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__temp_material2_module__ = __webpack_require__("../../../../../src/app/___temp/material2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setup_guide_header_header_component__ = __webpack_require__("../../../../../src/app/setup-guide/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__setup_guide_header_logo_logo_component__ = __webpack_require__("../../../../../src/app/setup-guide/header/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_server_data_service__ = __webpack_require__("../../../../../src/app/services/server-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setup_guide_body_activated_body_activated_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-activated/body-activated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setup_guide_body_activation_body_activation_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-activation/body-activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setup_guide_body_stepper_body_stepper_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/body-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__setup_guide_body_stepper_roles_and_users_roles_and_users_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__setup_guide_body_stepper_billing_details_billing_details_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__setup_guide_body_stepper_billing_accounts_billing_accounts_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__setup_guide_body_stepper_catalog_import_catalog_import_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__setup_guide_body_stepper_api_activation_api_activation_component__ = __webpack_require__("../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__setup_guide_setup_guide_component__ = __webpack_require__("../../../../../src/app/setup-guide/setup-guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_panel_service_panel_component__ = __webpack_require__("../../../../../src/app/service-panel/service-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_panel_service_item_service_item_component__ = __webpack_require__("../../../../../src/app/service-panel/service-item/service-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_panel_service_item_widget_dialog_widget_dialog_component__ = __webpack_require__("../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { DeviceDialogComponent } from './setup-guide/body-stepper/device-dialog/device-dialog.component';
















var appRoutes = [
    { path: 'x_mobi_aom_setup-guide', component: __WEBPACK_IMPORTED_MODULE_24__service_panel_service_panel_component__["a" /* ServicePanelComponent */] },
    { path: 'x_mobi_aom_portal', component: __WEBPACK_IMPORTED_MODULE_22__setup_guide_setup_guide_component__["a" /* SetupGuideComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__setup_guide_setup_guide_component__["a" /* SetupGuideComponent */] },
    // { path: '**', component: ServicePanelComponent}, // temp!!
    { path: 'service-panel', component: __WEBPACK_IMPORTED_MODULE_24__service_panel_service_panel_component__["a" /* ServicePanelComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_23__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__setup_guide_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__setup_guide_header_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__setup_guide_body_activation_body_activation_component__["a" /* BodyActivationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__setup_guide_body_stepper_body_stepper_component__["a" /* BodyStepperComponent */],
                // DeviceDialogComponent,
                __WEBPACK_IMPORTED_MODULE_17__setup_guide_body_stepper_roles_and_users_roles_and_users_component__["a" /* RolesAndUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__setup_guide_body_stepper_billing_details_billing_details_component__["a" /* BillingDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__setup_guide_body_stepper_billing_accounts_billing_accounts_component__["a" /* BillingAccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__setup_guide_body_stepper_catalog_import_catalog_import_component__["a" /* CatalogImportComponent */],
                __WEBPACK_IMPORTED_MODULE_21__setup_guide_body_stepper_api_activation_api_activation_component__["a" /* ApiActivationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__setup_guide_body_activated_body_activated_component__["a" /* BodyActivatedComponent */],
                __WEBPACK_IMPORTED_MODULE_22__setup_guide_setup_guide_component__["a" /* SetupGuideComponent */],
                __WEBPACK_IMPORTED_MODULE_23__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_24__service_panel_service_panel_component__["a" /* ServicePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_25__service_panel_service_item_service_item_component__["a" /* ServiceItemComponent */],
                __WEBPACK_IMPORTED_MODULE_26__service_panel_service_item_widget_dialog_widget_dialog_component__["a" /* WidgetDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__temp_material2_module__["a" /* MyCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_26__service_panel_service_item_widget_dialog_widget_dialog_component__["a" /* WidgetDialogComponent */]
                // DeviceDialogComponent,
            ],
            providers: [
                // DeviceDialogComponent,
                __WEBPACK_IMPORTED_MODULE_26__service_panel_service_item_widget_dialog_widget_dialog_component__["a" /* WidgetDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__services_setting_service__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_12__services_server_data_service__["a" /* ServerDataService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"width: 100%;text-align: center;height:100vh;min-height: 500px; display: flex; flex-direction: column;align-items: center;justify-content: center;color: #b3b3b3\">\n  <h1>\n    [ 404 ] Page not found!\n  </h1>\n  <i class=\"material-icons\"\n     style=\"font-size: 5rem; color: #b3b3b3;\">bug_report</i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/service-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget{\r\n  padding: 15px 20px;\r\n  transition: all .2s ease-in-out;\r\n  background-color: white;\r\n  border-radius: 20px;\r\n  height: 110px;\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.widget:hover{\r\n  margin-top: -5px;\r\n  box-shadow: 0 10px 6px -6px #77777773;\r\n}\r\n\r\n.ico{\r\n  text-align: center;\r\n  margin-left: -20px;\r\n}\r\n\r\n.title{\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  font-size: 18.0px;\r\n  color: rgba(5,116,172,1.0);\r\n  text-align: left;\r\n  line-height: 23.0px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.description{\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 14.0px;\r\n  color: rgba(113,113,113,1.0);\r\n  text-align: left;\r\n  line-height: 18.0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/service-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\"\n     fxLayout=\"row\"\n     (click)=\"openWidget()\"\n>\n  <div class=\"ico\" *ngIf=\"widgetIcon\"\n       fxFlex=\"35%\" fxFlex.md=\"25%\" fxFlex.lg=\"25%\">\n    <img src=\"{{widgetIcon}}\" alt=\"{{widgetTitle}}\">\n  </div>\n\n  <div fxLayout=\"column\" fxFlex=\"{{widgetIcon ? '75%': '100%'}}\">\n    <div class=\"title\">\n      {{widgetTitle}}\n    </div>\n    <div class=\"description\">\n      {{widgetDescription}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/service-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_dialog_widget_dialog_component__ = __webpack_require__("../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceItemComponent = (function () {
    function ServiceItemComponent(dialog) {
        this.dialog = dialog;
    }
    ServiceItemComponent.prototype.ngOnInit = function () {
    };
    ServiceItemComponent.prototype.openWidget = function () {
        console.log('0000', this.widgetURL);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__widget_dialog_widget_dialog_component__["a" /* WidgetDialogComponent */], {
            height: '90vh',
            width: '820px',
            data: {
                'target': this.widgetURL,
                'title': this.widgetTitle,
                'description': this.widgetDescription
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ServiceItemComponent.prototype, "widgetTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ServiceItemComponent.prototype, "widgetDescription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ServiceItemComponent.prototype, "widgetIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ServiceItemComponent.prototype, "widgetURL", void 0);
    ServiceItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service-item',
            template: __webpack_require__("../../../../../src/app/service-panel/service-item/service-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-panel/service-item/service-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], ServiceItemComponent);
    return ServiceItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\r\n  margin-bottom: 10px;\r\n}\r\n.head img{\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 10px;\r\n}\r\n.header-title{\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\n.header-description{\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head flex-container\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"start center\">\n  <div class=\"flex-item\" fxFlex=\"10%\" fxLayoutAlign=\"center center\">\n    <img src=\"https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/att_logo.png\" width=\"40px\"\n         height=\"40px\" alt=\"AT&T\">\n  </div>\n  <div class=\"flex-item\" fxFlex=\"80%\" fxLayout=\"column\" fxLayoutAlign=\"start start\" style=\"text-align: left\">\n    <div class=\"header-title\">{{dialogData.title}}</div>\n    <div class=\"header-description\">{{dialogData.description}}</div>\n  </div>\n\n</div>\n<iframe style=\"height: 100%; width: 100%;\"\n        [src]=\"targetUrl\" frameborder=\"0\">\n</iframe>\n"

/***/ }),

/***/ "../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WidgetDialogComponent = (function () {
    function WidgetDialogComponent(dialogRef, sanitizer, data) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.data = data;
        this.showLoader = true;
        this.dialogData = data;
        // this.targetUrl = '/$sp.do?id=' + this.dialogData.target + '&amp&output=embed';
        this.targetUrl = '/$sp.do?id=att_suspend_line&amp&output=embed';
    }
    WidgetDialogComponent.prototype.ngOnInit = function () {
        this.targetUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/$sp.do?id=' + this.dialogData.target + '&amp&output=embed');
    };
    WidgetDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-dialog',
            template: __webpack_require__("../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-panel/service-item/widget-dialog/widget-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], Object])
    ], WidgetDialogComponent);
    return WidgetDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-panel/service-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\r\n  background-color: white;\r\n}\r\n\r\n.sub-header{\r\n  min-height: 160px;\r\n  background-image: linear-gradient(to left, #02a1d6, #0574ac);\r\n  padding: 20px 0;\r\n  color: white;\r\n}\r\n\r\nh2 {\r\n  margin: 30px 0;\r\n}\r\n\r\nh3{\r\n  color: rgba(181,192,196,1.0);\r\n  margin: 0;\r\n}\r\n\r\n.widget-block{\r\n  margin-right: 20px;\r\n}\r\n\r\n.widget-block app-service-item{\r\n  min-height: 130px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer{\r\n  border-top: 1px solid #e4e4e4;\r\n  padding: 15px 0;\r\n  min-height: 150px;\r\n}\r\n\r\n.footer .settings{\r\n  font-size: 14.0px;\r\n  color: rgba(66,139,202,1.0);\r\n  text-align: left;\r\n  line-height: 18.0px;\r\n}\r\n\r\n.footer .settings i{\r\n  color: rgba(66,139,202,1.0);\r\n  margin-right: 5px;\r\n}\r\n\r\n.footer .all-rights{\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 12.0px;\r\n  color: rgba(181,192,196,1.0);\r\n  text-align: center;\r\n  line-height: 15.0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-panel/service-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"service-panel\">\n  <header>\n    <div class=\"flex-container\"\n         style=\"padding: 0 15px; height: 50px;\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"start center\">\n      <div class=\"flex-item\" fxFlex=\"80%\" fxFlex.lg=\"820px\" fxFlex.md=\"80%\"\n           fxLayout=\"row\">\n        <div class=\"flex-item\" fxLayoutAlign=\"center center\" style=\"margin-right: 10px\">\n          <img src=\"https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/mobichord-logo.png\" alt=\"MobiChord\">\n        </div>\n        <div class=\"flex-item\" fxLayoutAlign=\"center center\">\n          <h3>AT&T Hub</h3>\n        </div>\n      </div>\n\n      <div class=\"flex-item\" fxFlex=\"30%\" style=\"text-align: right\">\n        <img src=\"https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/att-logo.png\" alt=\"MobiChord\">\n      </div>\n    </div>\n\n    <div class=\"flex-container sub-header\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"center center\" style=\"width: 100%\">\n      <div class=\"flex-item\" fxFlex=\"80%\" fxFlex.lg=\"820px\" fxFlex.md=\"80%\">\n        <h1>\n          Order Manager\n        </h1>\n        <div>\n          Welcome! You are all set up to manage your AT&T services and order the new ones\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"flex-container\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"center center\">\n    <div\n      class=\"flex-item\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"start start\"\n      fxFlex=\"80%\" fxFlex.lg=\"820px\" fxFlex.md=\"80%\">\n\n      <div class=\"flex-item\" fxFlex=\"100%\">\n        <h2>Shop new service</h2>\n      </div>\n\n      <div\n        fxLayout fxLayout.xs=\"column\"\n        fxLayoutWrap fxLayoutGap=\"20px\"\n        class=\"flex-item\" fxFlex=\"100%\"\n        style=\"width: 100%;\">\n\n        <div class=\"flex-item widget-block\" fxFlex=\"calc(50% - 20px)\">\n          <app-service-item\n            [widgetIcon]=\"'https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/shop-new.png'\"\n            [widgetTitle]=\"'Shop new device'\"\n            [widgetDescription]=\"'Order new smartphone or tablet with a new AT&T line'\"\n            [widgetURL]=\"'att_shop_new_service'\">\n          </app-service-item>\n\n          <app-service-item\n            [widgetIcon]=\"'https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/bring.png'\"\n            [widgetTitle]=\"'Bring a device to AT&T'\"\n            [widgetDescription]=\"'Order a SIM card and transfer a device to AT&T or add it to your existing account'\"\n            [widgetURL]=\"'att_suspend_line'\">\n          </app-service-item>\n        </div>\n        <div class=\"flex-item widget-block\" fxFlex=\"calc(50% - 20px)\">\n          <app-service-item\n            [widgetIcon]=\"'https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/upgrade.png'\"\n            [widgetTitle]=\"'Upgrade a device'\"\n            [widgetDescription]=\"'Upgrade an old device to a smartphone with a new AT&T line'\"\n            [widgetURL]=\"'att_suspend_line'\">\n          </app-service-item>\n          <app-service-item\n            [widgetIcon]=\"'https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/accessories.png'\"\n            [widgetTitle]=\"'Shop accessories'\"\n            [widgetDescription]=\"'Get an extra something to your smartphone, tablet or other devices'\"\n            [widgetURL]=\"'att_suspend_line'\">\n          </app-service-item>\n        </div>\n\n      </div>\n\n      <div class=\"flex-item\" fxFlex=\"100%\">\n        <h2>Manage lines</h2>\n      </div>\n      <div\n        fxLayout fxLayout.xs=\"column\"\n        fxLayoutWrap fxLayoutGap=\"20px\"\n        class=\"flex-item\" fxFlex=\"100%\"\n        style=\"width: 100%;\">\n\n        <div class=\"flex-item widget-block\" fxFlex=\"calc(50% - 20px)\">\n          <app-service-item\n            [widgetTitle]=\"'Suspend line'\"\n            [widgetDescription]=\"'Protect your phone or device from unauthorized use if it’s lost or stolen'\"\n            [widgetURL]=\"'att_suspend_line'\">\n          </app-service-item>\n        </div>\n        <div class=\"flex-item widget-block\" fxFlex=\"calc(50% - 20px)\">\n          <app-service-item\n            [widgetTitle]=\"'Reactivate line'\"\n            [widgetDescription]=\"'Restore wireless service for a suspended phone, device, or account'\"\n            [widgetURL]=\"'att_suspend_line'\">\n          </app-service-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"flex-container footer\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"center center\">\n\n    <div\n      class=\"flex-item\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\"\n      fxFlex=\"80%\" fxFlex.lg=\"820px\" fxFlex.md=\"80%\"\n    >\n      <div  class=\"settings\" fxLayoutAlign=\"center center\">\n        <i class=\"material-icons\">settings</i> Settings\n      </div>\n      <div class=\"all-rights\">\n        ©2017 AT&T Intellectual Property. All rights reserved. ©2017 Mobichord: AT&T Hub, Powered by Mobichord Inc.\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/service-panel/service-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicePanelComponent = (function () {
    function ServicePanelComponent(_router) {
        this._router = _router;
        this.router = _router;
        // console.log('+++++++++++++++++++++ >>>> ', this.router.url);
    }
    ServicePanelComponent.prototype.ngOnInit = function () {
    };
    ServicePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service-panel',
            template: __webpack_require__("../../../../../src/app/service-panel/service-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-panel/service-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ServicePanelComponent);
    return ServicePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/server-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerDataService = (function () {
    function ServerDataService(http) {
        this.http = http;
        // private messageSource = new BehaviorSubject<string>('no sys_id');
        // currentSysId = this.messageSource.asObservable();
        this.host = 'https://dev.mobichord.com';
        this.api = '/emi-mng-facade/api/';
        this.carrierId = 'c391d429db5a8300c0d956f0cf961918';
        this.tenantUser = 'rVKlCG4KaB';
        this.tenantPassword = 'fGy8TGFmax';
        this.tenantCode = 'UrWKP7zEnfOxrxN';
    }
    ServerDataService.prototype.createAuthorizationHeader = function (headers) {
        // headers.append('Content-Type' , 'application/json');
        headers.append('Authorization', 'Basic ' +
            btoa(this.tenantUser + ':' + this.tenantPassword));
        headers.append('ac-tenant-code', this.tenantCode);
    };
    ServerDataService.prototype.saveBillingDetails2 = function (data) {
        console.log('saveBillingDetails2 start');
        return this.http.post('/api/now/table/x_mobi_aom_billing_info', data);
    };
    ServerDataService.prototype.saveBillingDetails = function (data) {
        console.log('saveBillingDetails start');
        /*
          PUT https://{host}.mobichord.com/emi-mng-facade/api/tenant/contracts/{contractId/carrierId}/api/params
          Headers:ac-tenant-code: {tenantCode}
          Authorization: Basic (tenantUser:tenantPassword)
         */
        var target = this.api + 'tenant/contracts/' + this.carrierId + '/api/params';
        return this.saveData(target, data);
    };
    ServerDataService.prototype.saveData = function (target, data) {
        console.log('saveData start');
        // let headers = new Headers({'Content-Type': 'application/json'});
        // this.createAuthorizationHeader(headers);
        // console.log('headers', headers);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.createAuthorizationHeader(headers);
        // headers2.append('Authorization', 'Basic ' +
        //   btoa(this.tenantUser + ':' + this.tenantPassword)
        // );
        // headers2.append('ac-tenant-code', this.tenantCode);
        return this.http.put(target, data, { headers: headers });
    };
    ServerDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServerDataService);
    return ServerDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingService = (function () {
    function SettingService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentSysId = this.messageSource.asObservable();
        this.stepSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentStep = this.stepSource.asObservable();
    }
    SettingService.prototype.changeSysId = function (message) {
        this.messageSource.next(message);
    };
    SettingService.prototype.changeCurrentStep = function (message) {
        console.log('changeCurrentStep', message);
        this.stepSource.next(message);
    };
    SettingService.prototype.nextStep = function (step, data) {
        data.current_step = step.toString();
        return data;
    };
    SettingService.prototype.getSysId = function () {
        var sysId = '';
        this.currentSysId.subscribe(function (response) { return sysId = response; });
        return sysId;
    };
    SettingService.prototype.createAuthorizationHeader = function (headers) {
        // headers.append('Authorization', 'Basic ' +
        //   btoa('admin:admin')
        // );
    };
    SettingService.prototype.checkActivation = function () {
        var _this = this;
        return this.http
            .get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_fields=sys_id%2Ccurrent_step&sysparm_limit=1&sysparm_query=ORDERBYDESCsys_created_on').map(function (response) {
            var result = response.json();
            if (result.result && result.result[0] && result.result[0].sys_id) {
                _this.changeSysId(result.result[0].configId);
                _this.changeCurrentStep(result.result[0].current_step);
                _this.checkCatalog();
            }
            return result;
        });
    };
    SettingService.prototype.getRequestInfo = function () {
        return this.http
            .get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_limit=1&sysparm_query=ORDERBYDESCsys_created_on');
    };
    SettingService.prototype.getSettings = function () {
        return this.http.get('/api/now/table/x_mobi_aom_att_global_settings?sysparm_fields=account_number%2Ccustomer_email%2Ccompany_name%2Ccustomer_name&sysparm_limit=1')
            .map(function (response) { return response.json(); });
    };
    SettingService.prototype.setSettings = function (settings) {
        var data = this.nextStep('submited', settings);
        // console.log('setSettings', data)
        return this.http.post('/api/now/table/x_mobi_aom_att_global_settings', data);
    };
    SettingService.prototype.sendSettingsForActivation = function (settings) {
        var data = {
            'customer': settings.company_name,
            'account': settings.account_number,
            'email': settings.customer_name,
            'contact': settings.customer_email
        };
        return this.http.post('/api/x_mobi_cacm/carrier/client/att', data);
    };
    SettingService.prototype.setBillingInfo = function (formData) {
        var _this = this;
        var data = this.nextStep('billAccounts', formData);
        var sys_id = this.getSysId();
        return this.http.post('/api/x_mobi_aom/config/' + sys_id + '/billing', data).map(function (response) {
            _this.http.put('/api/now/table/x_mobi_aom_att_global_settings/' +
                sys_id, { 'current_step': data.current_step }).subscribe();
        });
    };
    SettingService.prototype.validateBillingAccount = function (data) {
        var sys_id = this.getSysId();
        return this.http.get('/api/x_mobi_aom/config/' + sys_id + '/accounts/' + data.ban + '/lines/' + data.ctn);
        // return this.http.post('/api/now/table/x_mobi_aom_billing_account_numbers?sysparm_fields=', {
        //   'account_number': sys_id,
        //   'ban': data.ban,
        //   'ctn': data.ctn
        // });
        // /api/x_mobi_aom/config/{configId}/billing
    };
    SettingService.prototype.setBillingAccount = function (acc) {
        var sys_id = this.getSysId();
        var data = this.nextStep('catalog', {
            'configuration': sys_id,
            'account_number': acc.ban,
            'line_number': acc.ctn
        });
        return this.http.post('/api/now/table/x_mobi_aom_billing_account', data);
    };
    SettingService.prototype.getBillingAccounts = function () {
        var sys_id = this.getSysId();
        return this.http.get('/api/now/table/x_mobi_aom_billing_account?sysparm_limit=100&configuration=' + sys_id);
    };
    SettingService.prototype.removeBillingAccount = function (sys_id) {
        return this.http.delete('/api/now/table/x_mobi_aom_billing_account/' + sys_id + '');
    };
    SettingService.prototype.haveToken = function () {
        var _this = this;
        var sys_id = this.getSysId();
        var data = this.nextStep('token', {});
        return this.http.put('/api/now/table/x_mobi_aom_att_global_settings/' + sys_id, data).map(function (response) {
            var result = response.json();
            if (result.result && result.result.configId) {
                _this.changeSysId(result.result.configId);
            }
        });
    };
    SettingService.prototype.setToken = function (token, decodedToken) {
        // let sys_id = this.getSysId();
        // // sendDataToServer(decodedToken) ??
        // return this.http.put('/api/now/table/x_mobi_aom_att_global_settings/'
        //   + sys_id +
        //   '?sysparm_fields=', {
        //   'token_api': token,
        //   'tenant_code': decodedToken.tenantCode,
        //   'tenant_user': decodedToken.tenantUser,
        //   'tenant_password': decodedToken.tenantPassword
        // });
    };
    SettingService.prototype.saveTokenAndPassword = function (formData) {
        var _this = this;
        var data = this.nextStep('rolesAndUsers', formData);
        return this.http.post('/api/x_mobi_aom/config', data)
            .map(function (response) {
            var result = response.json();
            if (result.result && result.result.configId) {
                _this.changeSysId(result.result.configId);
                _this.http.put('/api/now/table/x_mobi_aom_att_global_settings/' +
                    result.result.configId, { 'current_step': data.current_step }).subscribe();
            }
        });
    };
    SettingService.prototype.saveRolesProgress = function () {
        var sys_id = this.getSysId();
        var data = this.nextStep('billInfo', {});
        return this.http.put('/api/now/table/x_mobi_aom_att_global_settings/' +
            sys_id, { 'current_step': data.current_step });
    };
    SettingService.prototype.saveBANProgress = function () {
        var sys_id = this.getSysId();
        var data = this.nextStep('catalog', {});
        return this.http.put('/api/now/table/x_mobi_aom_att_global_settings/' +
            sys_id, { 'current_step': data.current_step });
    };
    SettingService.prototype.checkCatalog = function () {
        var sys_id = this.getSysId();
        return this.http.get('/api/x_mobi_aom/catalog/' + sys_id);
        // return this.http.get('/api/now/table/x_mobi_aom_jsonfordevice?sysparm_fields=catalog&sysparm_limit=1')
    };
    SettingService.prototype.pullCatalog = function () {
        var sys_id = this.getSysId();
        // if(sys_id != 'undefined') {
        return this.http.post('/api/x_mobi_aom/catalog/' + sys_id, {});
        // } else {
        //   return false;
        // }
        // return this.http.get('/api/now/table/x_mobi_aom_jsonfordevice?sysparm_fields=catalog&sysparm_limit=1')
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('no sys_id');
        this.currentSysId = this.messageSource.asObservable();
    }
    UserService.prototype.changeSysId = function (message) {
        this.messageSource.next(message);
    };
    UserService.prototype.createAuthorizationHeader = function (headers) {
        // headers.append('Authorization', 'Basic ' +
        //   btoa('admin:admin')
        // );
    };
    ;
    UserService.prototype.getUsers = function () {
        // const headers = new Headers();
        // this.createAuthorizationHeader(headers);
        return this.http.get('/api/now/table/sys_user?sysparm_limit=10')
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getRoles = function () {
        return this.http.get('/api/now/table/sys_user_role')
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activated/body-activated.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activated/body-activated.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"center center\">\n\n  <div class=\"flex-item\" fxFlex=\"70%\" fxLayout=\"column\" style=\"max-width: 640px\">\n\n\n    <div class=\"flex-item\" fxFlex=\"100%\" fxLayout=\"column\" >\n\n      <h1 style=\"text-align: center\">Get Started</h1>\n      <div class=\"flex-item\" fxFlex=\"100%\">\n        <p class=\"head-description\">\n          Welcome! Thanks for installing AT&T Premier App. Please provide us your company details so we can initiate the\n          integration process. Our team will fully handle the implementation and notify you once everything is ready.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"flex-item\" fxFlex=\"100%\" style=\"text-align: center;position: relative\">\n      <div class=\"form-loader\"\n           style=\"background-color: white\"\n           *ngIf=\"formLoader\">\n        <mat-spinner\n          mode=\"query\"\n          mode=\"indeterminate\"\n        ></mat-spinner>\n      </div>\n\n      <div class=\"form-block\">\n        <i class=\"material-icons\"\n           style=\"color:#5cb85c;font-size: 5rem\">check_circle</i>\n        <h2 class=\"form-title\" style=\"text-align: center;\">Your request has been submitted</h2>\n\n        <div class=\"form-container\">\n          <h5>Request sent {{requestInfo.sys_created_on || 'retrieving info..'}}</h5>\n          <div class=\"form-description-body\" style=\"text-align: center;\">\n            We'll get back to you as soon as possible. We will need aroud an hour to review your request and prepare all\n            the technical stuff. Notification email will be send to <br>{{requestInfo.customer_email || 'retrieving info..'}}.\n          </div>\n        </div>\n\n        <div class=\"form-container\">\n        </div>\n      </div>\n\n      <div class=\"form-container\">\n        Already have the Activation Token?\n        <a (click)=\"haveToken()\" class=\"link-btn\">Open App Setup</a>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activated/body-activated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyActivatedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyActivatedComponent = (function () {
    function BodyActivatedComponent(settingService) {
        this.settingService = settingService;
        this.isActivated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.requestInfo = {};
        this.formLoader = true;
    }
    BodyActivatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formLoader = true;
        this.settingService.getRequestInfo()
            .subscribe(function (response) {
            var data = response.json();
            if (data.result && data.result[0]) {
                // console.log('data.result[0]',data.result[0])
                _this.requestInfo = data.result[0];
            }
            _this.formLoader = false;
        }, function (err) {
            _this.formLoader = false;
            console.log('some error when activation check:', err);
        });
    };
    BodyActivatedComponent.prototype.haveToken = function () {
        var _this = this;
        this.formLoader = true;
        // console.log('haveToken');
        this.settingService.haveToken().subscribe(function (response) {
            _this.isActivated.emit({ isActivated: true });
            _this.formLoader = false;
        }, function (error) {
            _this.formLoader = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BodyActivatedComponent.prototype, "isActivated", void 0);
    BodyActivatedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body-activated',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-activated/body-activated.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-activated/body-activated.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_setting_service__["a" /* SettingService */]])
    ], BodyActivatedComponent);
    return BodyActivatedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activation/body-activation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\r\n  color: rgba(74,73,74,1.0);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activation/body-activation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"center center\">\n\n  <div class=\"flex-item\" fxFlex=\"70%\" fxLayout=\"column\" style=\"max-width: 640px\" style=\"position: relative\">\n\n\n    <div class=\"flex-item\" fxFlex=\"100%\" fxLayout=\"column\">\n      <h1 style=\"text-align: center\">Get Started</h1>\n      <div class=\"flex-item\" fxFlex=\"100%\">\n        <p class=\"head-description\">\n          Welcome! Thanks for installing Mobichord: AT&T Hub. Please provide us your company details so we can initiate\n          the integration process. Our team will fully handle the implementation and notify you once everything is\n          ready.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"flex-item\" fxFlex=\"100%\">\n      <div class=\"form-loader\"\n      *ngIf=\"formLoader\">\n        <mat-spinner\n          mode=\"query\"\n          mode=\"indeterminate\"\n        ></mat-spinner>\n      </div>\n      <div class=\"form-block\">\n        <form [formGroup]=\"activationFormGroup\">\n          <h2 class=\"form-title\">Submit Activation Request</h2>\n\n          <div class=\"form-container\">\n            <h5>Enter your company name</h5>\n            <div class=\"form-description-body\">\n              The same as stated in your AT&T contract\n            </div>\n            <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n              <input\n                matInput\n                placeholder=\"ACME. Inc.\"\n                formControlName=\"companyNameCtrl\"\n                [(ngModel)]=\"activationData.company_name\"\n              >\n              <span class=\"has-error\"\n                    *ngIf=\"!activationFormGroup.get('companyNameCtrl').valid && activationFormGroup.get('companyNameCtrl').touched\">\n                Incorrect company name\n              <i class=\"material-icons\">info</i>\n              </span>\n            </mat-form-field>\n          </div>\n\n          <div class=\"form-container\">\n            <h5>Enter your AT&T Account Number</h5>\n            <div class=\"form-description-body\">\n              We need this to specify your AT&T Premier account. You can find it on the AT&T Premeir website.\n            </div>\n\n            <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n              <input\n                matInput\n                placeholder=\"00000008\"\n                formControlName=\"accountNumberCtrl\"\n                [(ngModel)]=\"activationData.account_number\"\n              >\n              <span class=\"has-error\"\n                    *ngIf=\"!activationFormGroup.get('accountNumberCtrl').valid && activationFormGroup.get('accountNumberCtrl').touched\">\n              Incorrect Account Number. Should be 8 digits length\n                <i class=\"material-icons\">info</i>\n              </span>\n            </mat-form-field>\n          </div>\n\n\n          <div class=\"form-container\">\n            <h5>Enter your full name</h5>\n            <div class=\"form-description-body\">\n              Please introduce yourself\n            </div>\n\n            <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n              <input\n                matInput\n                placeholder=\"First and Last name\"\n                formControlName=\"fullNameCtrl\"\n                [(ngModel)]=\"activationData.customer_name\"\n              >\n              <span class=\"has-error\"\n                    *ngIf=\"!activationFormGroup.get('fullNameCtrl').valid && activationFormGroup.get('fullNameCtrl').touched\">\n                Incorrect full name.\n                <i class=\"material-icons\">info</i>\n              </span>\n            </mat-form-field>\n          </div>\n\n\n          <div class=\"form-container\">\n            <h5>Enter email</h5>\n            <div class=\"form-description-body\">\n              We will use this email address as the main communication channel during activation\n            </div>\n\n            <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n              <input\n                matInput\n                placeholder=\"example@yourcompany.com\"\n                formControlName=\"emailCtrl\"\n                [(ngModel)]=\"activationData.customer_email\"\n              >\n              <span class=\"has-error\"\n                    *ngIf=\"!activationFormGroup.get('emailCtrl').valid && activationFormGroup.get('emailCtrl').touched\">\n                Email incorrect\n                <i class=\"material-icons\">info</i>\n              </span>\n            </mat-form-field>\n          </div>\n\n          <div class=\"flex-container\"\n               fxLayout=\"row\"\n               fxLayoutAlign=\"start start\">\n\n            <div class=\"flex-item\" fxFlex=\"50%\">\n              <!--<p>Please fulfill</p>-->\n              <!--<div class=\"fulfill-list\">-->\n              <!--<div class=\"fulfill-item\" *ngIf=\"!activationData.company_name\">Company name</div>-->\n              <!--<div class=\"fulfill-item\" *ngIf=\"!activationData.account_number\">Account number</div>-->\n              <!--<div class=\"fulfill-item\" *ngIf=\"!activationData.customer_name\">Customer name</div>-->\n              <!--<div class=\"fulfill-item\" *ngIf=\"!activationData.customer_email\">Customer email</div>-->\n              <!--</div>-->\n            </div>\n\n            <div class=\"flex-item\" fxFlex=\"50%\">\n              <!--<button class=\"form-btn\"-->\n                      <!--mat-raised-button color=\"primary\"-->\n                      <!--style=\"width: 100%\"-->\n                      <!--(click)=\"onSubmit()\"-->\n                      <!--[disabled]=\"!activationData.company_name || !activationData.account_number || !activationData.customer_name || !activationData.customer_email\"-->\n              <!--&gt;Submit-->\n              <!--</button>-->\n              <button class=\"form-btn\"\n                      mat-raised-button color=\"primary\"\n                      style=\"width: 100%\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"isDisabled()\"\n              >Submit\n              </button>\n\n              <mat-progress-bar\n                *ngIf=\"loader\"\n                mode=\"indeterminate\"\n              >\n              </mat-progress-bar>\n              <p class=\"info\">\n                <i class=\"material-icons\">info_outline</i>\n                We do not store any personal data\n              </p>\n\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-activation/body-activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyActivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_activation_model__ = __webpack_require__("../../../../../src/app/shared/activation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BodyActivationComponent = (function () {
    function BodyActivationComponent(_formBuilder, settingService) {
        this._formBuilder = _formBuilder;
        this.settingService = settingService;
        this.isSubmited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isSubscribed = true;
        this.activationData = new __WEBPACK_IMPORTED_MODULE_1__shared_activation_model__["a" /* ActivationModel */]();
        this.formLoader = false;
    }
    BodyActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activationFormGroup = this._formBuilder.group({
            companyNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(2)])],
            accountNumberCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern('^[0-9]+$')])],
            fullNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ,.\'-]+$')])],
            emailCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].email])],
        });
        this.settingService.checkActivation()
            .subscribe(function (response) {
            // let data = response.json();
            var data = response;
            if (data.result && data.result[0] && data.result[0].is_activated) {
                _this.scrollToTop();
                console.log('-- isSubscribed defined as:', data.result[0].is_activated);
                _this.isSubmited.emit({ isSubscribed: true });
                _this.settingService.changeSysId(data.result[0].sys_id);
            }
        }, function (err) {
            console.log('some error when activation check:', err);
        });
    };
    BodyActivationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formLoader = true;
        // this.settingService.currentSysId.subscribe(currentSysId => this.currentSysId = currentSysId)
        this.settingService.setSettings(this.activationData)
            .subscribe(function (response) {
            var data = response.json();
            _this.settingService.sendSettingsForActivation(_this.activationData).subscribe();
            // console.log('all settings:', data.result.sys_id);
            _this.settingService.changeSysId(data.result.sys_id);
            _this.isSubmited.emit({ isSubscribed: _this.isSubscribed });
            _this.formLoader = false;
        }, function (err) {
            console.log('some error:', err);
            _this.formLoader = false;
        });
        this.scrollToTop();
        // this.isSubscribed = true;
        // setTimeout(() => {
        //   this.isSubscribed = true;
        // }, 2000);
    };
    BodyActivationComponent.prototype.isDisabled = function () {
        if (this.activationFormGroup.get('companyNameCtrl').valid &&
            this.activationFormGroup.get('accountNumberCtrl').valid &&
            this.activationFormGroup.get('fullNameCtrl').valid &&
            this.activationFormGroup.get('emailCtrl').valid) {
            return false;
        }
        return true;
    };
    BodyActivationComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BodyActivationComponent.prototype, "isSubmited", void 0);
    BodyActivationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body-activation',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-activation/body-activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-activation/body-activation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */]])
    ], BodyActivationComponent);
    return BodyActivationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"firstFormGroup\"  style=\"position: relative\">\n\n  <div class=\"form-loader\"\n       *ngIf=\"formLoader\">\n    <mat-spinner\n      mode=\"query\"\n      mode=\"indeterminate\"\n    ></mat-spinner>\n  </div>\n\n  <h2 class=\"form-title\">API Activation</h2>\n  <div class=\"form-description-title\">Enter API Activation Token Code</div>\n  <div class=\"form-description-body\">\n    <p>It's a code, that has been sent to example@yourcompany.com</p>\n    <p>Format: TOKEN-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX…</p>\n  </div>\n\n  <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n    <input\n      matInput\n      placeholder=\"Copy-paste code here\"\n      formControlName=\"tokenCtrl\"\n      [(ngModel)]=\"token\"\n    >\n    <span class=\"has-error\"\n          *ngIf=\"!firstFormGroup.get('tokenCtrl').valid && firstFormGroup.get('tokenCtrl').touched\">\n              Invalid Token\n       <i class=\"material-icons\">info</i>\n    </span>\n  </mat-form-field>\n\n  <div class=\"form-container\">\n    <div class=\"form-description-title\" floatPlaceholder=\"never\">\n      Set password for system user “mobi_att_service”\n    </div>\n    <div class=\"form-description-body\">\n      Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n    </div>\n\n    <div class=\"form-container\">\n      <div class=\"form-description-title\" style=\"margin: 0\">Password</div>\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n        <input\n          matInput\n          placeholder=\"Password\"\n          formControlName=\"passwordCtrl\"\n          type=\"password\"\n          [(ngModel)]=\"password\"\n        >\n        <span class=\"has-error\"\n              *ngIf=\"!firstFormGroup.get('passwordCtrl').valid && firstFormGroup.get('passwordCtrl').touched\">\n              Must be more than 8 characters. Should be numbers and upper case\n          <i class=\"material-icons\">info</i>\n        </span>\n      </mat-form-field>\n\n      <div class=\"form-description-title\" style=\"margin: 0\">Confirm Password</div>\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\n        <input\n          matInput\n          placeholder=\"Confirm Password\"\n          formControlName=\"passwordConfirmCtrl\"\n          type=\"password\"\n          [(ngModel)]=\"passwordConfirm\"\n        >\n        <span class=\"has-error\"\n              *ngIf=\"!firstFormGroup.get('passwordConfirmCtrl').valid && firstFormGroup.get('passwordConfirmCtrl').touched\">\n              Passwords mismatch\n          <i class=\"material-icons\">info</i>\n        </span>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"flex-container\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"start start\">\n\n    <div class=\"flex-item\" fxFlex=\"50%\">\n      <button\n        class=\"form-btn\"\n        [disabled]=\"isDisabled()\"\n        mat-raised-button\n        style=\"width: 100%\"\n        (click)=\"setTokenAndPassw()\"\n      >Activate\n      </button>\n      <!--(click)=\"checkToken()\"-->\n      <section style=\"width: 100%\">\n        <mat-progress-bar\n          *ngIf=\"loader1\"\n          mode=\"indeterminate\"\n        >\n        </mat-progress-bar>\n      </section>\n    </div>\n\n    <div class=\"flex-item\" fxFlex=\"50%\">\n      <!--<div *ngIf=\"!goodToken\">-->\n        <!--<p style=\"padding: 0 10px\">Please fulfill</p>-->\n        <!--<div class=\"fulfill-list\">-->\n          <!--<div class=\"fulfill-item\" *ngIf=\"!token\">Token</div>-->\n          <!--<div class=\"fulfill-item\" *ngIf=\"!password\">Password</div>-->\n          <!--<div class=\"fulfill-item\" *ngIf=\"!passwordConfirm\">Password Confirm</div>-->\n        <!--</div>-->\n      <!--</div>-->\n\n      <div *ngIf=\"goodToken\" class=\"subscribed\">\n        <i class=\"material-icons\">done</i>\n        <b>API has been activated</b>\n      </div>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiActivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiActivationComponent = (function () {
    function ApiActivationComponent(_formBuilder, globalSettings, snackBar) {
        this._formBuilder = _formBuilder;
        this.globalSettings = globalSettings;
        this.snackBar = snackBar;
        this.loader1 = false;
        this.formLoader = false;
        this.goodToken = false;
        this.isTokenApplied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.tokenApplied = false;
    }
    ApiActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalSettings.currentSysId.subscribe(function (currentSysId) { return _this.currentSysId = currentSysId; });
        this.firstFormGroup = this._formBuilder.group({
            tokenCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            passwordCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(8)])],
            passwordConfirmCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    ApiActivationComponent.prototype.checkToken = function () {
        // this.firstFormGroup.disable();
        // if (this.token && this.token.length > 5) {
        //   this.loader1 = true;
        //   // this.firstFormGroup.disable();
        //   // this.stepper.selected.editable = false;   -----------------<<<<<<<<<<<<<<<<< !!!!
        //
        //   try {
        //     const decodedToken = JSON.parse(atob(this.token));
        //     if (decodedToken.tenantCode && decodedToken.tenantUser && decodedToken.tenantPassword && decodedToken.carrierId) {
        //       // this.globalSettings.setToken(this.token, decodedToken, this.currentSysId)
        //       this.globalSettings.setToken(this.token, decodedToken)
        //         .subscribe(
        //           result => {
        //             console.log('success');
        //             this.goodToken = true;
        //             setTimeout(() => {
        //               this.isTokenApplied.emit({tokenApplied: true});
        //               // this.tokenApplied = true;
        //               // this.stepper.selectedIndex = 1;  -----------------<<<<<<<<<<<<<<<<< !!!!
        //             }, 500);
        //           },
        //           error => {
        //             console.log('error', error);
        //           },
        //           () => {
        //             console.log('complited')
        //             this.loader1 = false;
        //           }
        //         );
        //     }
        //   } catch (e) {
        //     // console.log('error', e.toString());
        //     this.loader1 = false;
        //     return false;
        //   }
        // }
    };
    ApiActivationComponent.prototype.setTokenAndPassw = function () {
        var _this = this;
        this.formLoader = true;
        // this.firstFormGroup.get('tokenCtrl').hasError('ssssssssssssss')
        // this.loader1 = true;
        // this.firstFormGroup.controls['tokenCtrl'].valueChanges.subscribe(console.log);
        var isValidToken = this.verifyToken();
        var isValidPassw = this.verifyPassword();
        // this.firstFormGroup.controls['passwordCtrl'].setErrors({'incorrect': true});
        // console.log('isValidToken',isValidToken);
        // console.log('isValidPassw',isValidPassw);
        var data = {};
        data.token = this.token;
        data.servicePassword = this.password;
        if (isValidToken && isValidPassw) {
            this.globalSettings.saveTokenAndPassword(data)
                .subscribe(function (result) {
                console.log('success');
                _this.goodToken = true;
                setTimeout(function () {
                    _this.isTokenApplied.emit({ tokenApplied: true });
                    // this.tokenApplied = true;
                    // this.stepper.selectedIndex = 1;  -----------------<<<<<<<<<<<<<<<<< !!!!
                }, 500);
                // this.globalSettings.pullCatalog().subscribe();
                // this.loader1;
                _this.formLoader = false;
            }, function (error) {
                console.log('error', error);
                // this.snackBar.open('Some error occurring. Pls check data and try again. ', '', {
                _this.snackBar.open(error.statusText, '', {
                    duration: 3000
                });
                _this.formLoader = false;
                // setTimeout(() => {
                //   // this.tokenApplied = true;
                //   // this.stepper.selectedIndex = 1;  -----------------<<<<<<<<<<<<<<<<< !!!!
                // }, 500);
            }, function () {
                console.log('complited');
                // this.loader1 = false;
                _this.formLoader = false;
            });
        }
        else {
            // this.loader1 = false;
            this.formLoader = false;
        }
        return;
    };
    ApiActivationComponent.prototype.verifyToken = function () {
        if (this.token && this.token.length > 0) {
            try {
                var decodedToken = JSON.parse(atob(this.token));
                if (decodedToken.tenantCode && decodedToken.tenantUser && decodedToken.tenantPassword && decodedToken.carrierId) {
                    return true;
                }
                else {
                    console.log('invalid Token');
                    return false;
                }
            }
            catch (e) {
                console.log('error', e.toString());
                return false;
            }
        }
        return false;
    };
    ApiActivationComponent.prototype.verifyPassword = function () {
        if (this.password.length > 0 && (this.password !== this.passwordConfirm)) {
            return false;
        }
        return true;
    };
    ApiActivationComponent.prototype.isDisabled = function () {
        if (this.firstFormGroup.get('tokenCtrl').valid &&
            this.firstFormGroup.get('passwordCtrl').valid &&
            this.firstFormGroup.get('passwordConfirmCtrl').valid) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ApiActivationComponent.prototype, "isTokenApplied", void 0);
    ApiActivationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-api-activation',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/api-activation/api-activation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatSnackBar */]])
    ], ApiActivationComponent);
    return ApiActivationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-inputed{\r\n  border-style: solid;\r\n  border-width: 0;\r\n  border-color: rgba(237,241,242,1.0);\r\n  padding: 10px 5px;\r\n}\r\n\r\n.validate-btn{\r\n  width: 100%;\r\n  border-radius: 3px!important;\r\n  min-height: 65px;\r\n  font-weight: 600!important;\r\n  letter-spacing: 1px;\r\n  font-size: 17px!important;\r\n  /* margin: 3px!important; */\r\n  background-color: white!important;\r\n  color: rgb(66, 139, 202)!important;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: rgba(237,241,242,1.0);\r\n}\r\n\r\n.validate-btn:disabled{\r\n  background-color: #d4d4d4 !important;\r\n  color: rgb(123, 132, 125) !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fourthFormGroup\" style=\"position: relative\">\r\n\r\n  <div class=\"form-loader\"\r\n       *ngIf=\"formLoader\">\r\n    <mat-spinner\r\n      mode=\"query\"\r\n      mode=\"indeterminate\"\r\n    ></mat-spinner>\r\n  </div>\r\n\r\n\r\n  <h2 class=\"form-title\">Validate your Billing Account Number</h2>\r\n  <div class=\"form-description-body\" style=\"margin-bottom: 20px\">\r\n    Add Billing Account Numbers(BAN) that will be used for the future AT&T orders.\r\n    Confirm every BAN with affiliated Customer Telephone Number(CTN) to eliminate mistakes in the future.\r\n  </div>\r\n\r\n  <div *ngIf=\"!billingAccounts\"\r\n       class=\"form-container\">\r\n    No account added\r\n  </div>\r\n\r\n  <!-- display BANs -->\r\n  <div *ngIf=\"billingAccounts\" class=\"form-container\">\r\n\r\n    <div style=\"color: rgba(92,184,92,1.0);\">\r\n      <i class=\"material-icons\"\r\n      style=\"float: left;\r\n    padding-right: 5px;\">done</i>\r\n      <h4>Validated accounts</h4>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of billingAccounts; let i = index\" style=\"margin-bottom: 30px;\">\r\n\r\n      <div class=\"flex-container\"\r\n           style=\"margin-bottom: 15px\"\r\n           fxLayout=\"row\"\r\n           fxLayoutAlign=\"space-between center\">\r\n\r\n      </div>\r\n\r\n      <div class=\"flex-container row-inputed\"\r\n           fxLayout=\"row\"\r\n           fxLayoutAlign=\"center center\">\r\n        <div class=\"flex-item\" fxFlex=\"10%\">\r\n          <h3 *ngIf=\"i < 1\" class=\"form-subtitle\">#</h3>\r\n          {{i +1 }}\r\n        </div>\r\n\r\n        <div class=\"flex-item\" fxFlex=\"35%\">\r\n          <h3 *ngIf=\"i < 1\" class=\"form-subtitle\">BAN</h3>\r\n          {{item.account_number}}\r\n        </div>\r\n\r\n        <div class=\"flex-item\" fxFlex=\"35%\">\r\n          <h3 *ngIf=\"i < 1\" class=\"form-subtitle\">CTN</h3>\r\n          {{item.line_number}}\r\n        </div>\r\n\r\n        <div class=\"flex-item\" fxFlex=\"20%\">\r\n          <a class=\" \" style=\"color: rgba(217,83,79,1.0);\"\r\n             (click)=\"removeBan(item)\"\r\n          >Delete</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"loaderAcc\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"visibleNewForm\">\r\n    <div class=\"flex-container\"\r\n         fxLayout=\"row\"\r\n         fxLayoutAlign=\"start center\">\r\n\r\n      <div class=\"flex-item\" fxFlex=\"50%\">\r\n        <div class=\"form-description-title\" style=\"margin: 0;\">BAN</div>\r\n        <mat-form-field class=\"form-input\" floatPlaceholder=\"never\" style=\"padding-right: 10px\">\r\n          <input\r\n            matInput\r\n            placeholder=\"BAN\"\r\n            formControlName=\"banCtrl\"\r\n            [(ngModel)]=\"ban\"\r\n          >\r\n          <span class=\"has-error\"\r\n                *ngIf=\"!fourthFormGroup.get('banCtrl').valid && fourthFormGroup.get('banCtrl').touched\">\r\n                Should contain 8 digits\r\n              <i class=\"material-icons\">info</i>\r\n        </span>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"flex-item\" fxFlex=\"50%\">\r\n        <div class=\"form-description-title\" style=\"margin: 0;\">Affiliated CTN</div>\r\n        <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Affiliated CTN\"\r\n            formControlName=\"ctnCtrl\"\r\n            [(ngModel)]=\"ctn\"\r\n          >\r\n          <span class=\"has-error\"\r\n                *ngIf=\"!fourthFormGroup.get('ctnCtrl').valid && fourthFormGroup.get('ctnCtrl').touched\">\r\n                Should contain 10 or 11 digits\r\n              <i class=\"material-icons\">info</i>\r\n        </span>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-container\"\r\n         fxLayout=\"row\"\r\n         fxLayoutAlign=\"start center\" style=\"margin-bottom: 20px\">\r\n\r\n      <div class=\"flex-item\" fxFlex=\"50%\">\r\n        <button class=\"validate-btn\"\r\n                mat-raised-button\r\n                style=\"max-width:120px; min-height: 40px; background-color: #774d98\"\r\n                [disabled]=\"isDisabled()\"\r\n                (click)=\"addBan()\"\r\n        >Validate\r\n        </button>\r\n\r\n        <mat-progress-bar\r\n          mode=\"query\"\r\n          style=\"width: 100%;max-width:120px;float:left\"\r\n          *ngIf=\"loaderValidate\"\r\n          mode=\"indeterminate\"\r\n        >\r\n        </mat-progress-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-container\"\r\n       *ngIf=\"!visibleNewForm\"\r\n  >\r\n    <a class=\"link-btn\"\r\n       (click)=\"showNewForm()\"\r\n    >\r\n      <i class=\"material-icons\">add_circle</i> Add another billing account\r\n    </a>\r\n  </div>\r\n\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <!--<p style=\"padding: 0 10px\">Please fulfill</p>-->\r\n      <!--<div class=\"fulfill-list\">-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!ban\">BAN</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!ctn\">Affiliated CTN</div>-->\r\n      <!--</div>-->\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <button class=\"form-btn\"\r\n              [disabled]=\"!billingAccounts || billingAccounts.length == 0\"\r\n              mat-raised-button color=\"primary\"\r\n              style=\"width: 100%\"\r\n              (click)=\"onSubmit()\"\r\n      >Continue\r\n      </button>\r\n      <mat-progress-bar\r\n        *ngIf=\"loader\"\r\n        mode=\"indeterminate\"\r\n      >\r\n      </mat-progress-bar>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingAccountsComponent = (function () {
    function BillingAccountsComponent(_formBuilder, globalSettings, snackBar) {
        this._formBuilder = _formBuilder;
        this.globalSettings = globalSettings;
        this.snackBar = snackBar;
        this.loader = false;
        this.loaderValidate = false;
        this.formLoader = false;
        this.visibleNewForm = true;
        this.isBanApplied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BillingAccountsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.fourthFormGroup = this._formBuilder.group({
            banCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(\\d{12})$')])],
            ctnCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(\\d{10})$|^(\\d{11})$')])]
        });
    };
    BillingAccountsComponent.prototype.isDisabled = function () {
        if (this.fourthFormGroup.get('banCtrl').valid &&
            this.fourthFormGroup.get('ctnCtrl').valid) {
            return false;
        }
        return true;
    };
    BillingAccountsComponent.prototype.getAccounts = function () {
        var _this = this;
        this.formLoader = true;
        console.log('getAccounts');
        this.globalSettings.getBillingAccounts().subscribe(function (response) {
            var data = response.json();
            console.log('getAccounts data', data);
            if (data && data.result) {
                _this.billingAccounts = data.result;
            }
            _this.formLoader = false;
        }, function (error) {
            _this.formLoader = false;
        });
        this.loader = false;
    };
    BillingAccountsComponent.prototype.showNewForm = function () {
        console.log('showNewForm');
        this.visibleNewForm = true;
    };
    BillingAccountsComponent.prototype.addBan = function () {
        var _this = this;
        this.formLoader = true;
        var data = {};
        data.ban = this.ban;
        data.ctn = this.ctn;
        this.globalSettings.validateBillingAccount(data).subscribe(function (result) {
            _this.globalSettings.setBillingAccount(data).subscribe(function (success) {
                _this.visibleNewForm = false;
                _this.getAccounts();
                _this.formLoader = false;
                _this.ban = '';
                _this.ctn = '';
            }, function (error) {
                _this.formLoader = false;
                _this.snackBar.open('Something went wrong', '', {
                    duration: 3000
                });
            });
        }, function (error) {
            _this.formLoader = false;
            _this.snackBar.open('Some error occurring. Pls cehck data and try again. ', '', {
                duration: 3000
            });
        });
    };
    BillingAccountsComponent.prototype.removeBan = function (ban) {
        var _this = this;
        this.formLoader = true;
        this.loader = true;
        this.globalSettings.removeBillingAccount(ban.sys_id).subscribe(function (result) {
            _this.getAccounts();
            _this.formLoader = false;
        }, function (error) {
            _this.formLoader = false;
        });
    };
    BillingAccountsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formLoader = true;
        // this.loader = true;
        this.globalSettings.saveBANProgress().subscribe(function (response) {
            // this.loader = false;
            _this.formLoader = false;
            _this.isBanApplied.emit({ isBanReady: true });
        }, function (error) {
            _this.formLoader = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BillingAccountsComponent.prototype, "isBanApplied", void 0);
    BillingAccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-billing-accounts',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-accounts/billing-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBar */]])
    ], BillingAccountsComponent);
    return BillingAccountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"thirdFormGroup\" style=\"position: relative\">\r\n  <div class=\"form-loader\"\r\n       *ngIf=\"formLoader\">\r\n    <mat-spinner\r\n      mode=\"query\"\r\n      mode=\"indeterminate\"\r\n    ></mat-spinner>\r\n  </div>\r\n\r\n  <h2 class=\"form-title\">Set default billing details</h2>\r\n  <div class=\"form-description-body\" style=\"margin-bottom: 20px\">\r\n    Set the billing address and a contact person, that would be used as a default configuration for all your AT&T orders\r\n    via the app.\r\n  </div>\r\n\r\n  <div class=\"form-description-title\">Street Address</div>\r\n  <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n    <input\r\n      matInput\r\n      placeholder=\"Street Address\"\r\n      formControlName=\"streetCtrl\"\r\n      [(ngModel)]=\"street\"\r\n    >\r\n    <span class=\"has-error\"\r\n          *ngIf=\"!thirdFormGroup.get('streetCtrl').valid && thirdFormGroup.get('streetCtrl').touched\">\r\n      Incorrect Street Address\r\n      <i class=\"material-icons\">info</i>\r\n    </span>\r\n  </mat-form-field>\r\n\r\n  <div class=\"form-description-title\">State</div>\r\n  <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n    <input\r\n      matInput\r\n      placeholder=\"State\"\r\n      formControlName=\"stateCtrl\"\r\n      [(ngModel)]=\"state\"\r\n    >\r\n    <span class=\"has-error\"\r\n          *ngIf=\"!thirdFormGroup.get('stateCtrl').valid && thirdFormGroup.get('stateCtrl').touched\">\r\n                Should contain only 2 uppercase characters.\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n  </mat-form-field>\r\n\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">City</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\" style=\"padding-right: 10px\">\r\n        <input\r\n          matInput\r\n          placeholder=\"City\"\r\n          formControlName=\"cityCtrl\"\r\n          [(ngModel)]=\"city\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('cityCtrl').valid && thirdFormGroup.get('cityCtrl').touched\">\r\n                Incorrect City\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">Zip Code</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Zip\"\r\n          formControlName=\"zipCtrl\"\r\n          [(ngModel)]=\"zip\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('zipCtrl').valid && thirdFormGroup.get('zipCtrl').touched\">\r\n                Should contain only digits and must match the patterns (XXXXX or XXXXX-XXXX)\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">First Name</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\" style=\"padding-right: 10px\">\r\n        <input\r\n          matInput\r\n          placeholder=\"First Name\"\r\n          formControlName=\"firstNameCtrl\"\r\n          [(ngModel)]=\"firstName\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('firstNameCtrl').valid && thirdFormGroup.get('firstNameCtrl').touched\">\r\n                Incorrect First Name\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">Last Name</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Last Name\"\r\n          formControlName=\"lastNameCtrl\"\r\n          [(ngModel)]=\"lastName\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('lastNameCtrl').valid && thirdFormGroup.get('lastNameCtrl').touched\">\r\n                Incorrect Last Name\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">Email</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\" style=\"padding-right: 10px\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Email\"\r\n          formControlName=\"emailCtrl\"\r\n          [(ngModel)]=\"email\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('emailCtrl').valid && thirdFormGroup.get('emailCtrl').touched\">\r\n                Looks not like an Email\r\n              <i class=\"material-icons\">info</i>\r\n              </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <div class=\"form-description-title\">Phone Number</div>\r\n      <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Phone Number\"\r\n          formControlName=\"phoneNumberCtrl\"\r\n          [(ngModel)]=\"phoneNumber\"\r\n        >\r\n        <span class=\"has-error\"\r\n              *ngIf=\"!thirdFormGroup.get('phoneNumberCtrl').valid && thirdFormGroup.get('phoneNumberCtrl').touched\">\r\n                Should start from 1 and contain only 10 or 11 digits.\r\n              <i class=\"material-icons\">info</i>\r\n        </span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <!--<p style=\"padding: 0 10px\">Please fulfill</p>-->\r\n      <!--<div class=\"fulfill-list\">-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!street\">Street Address</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!state\">State</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!city\">City</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!zip\">Zip code</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!firstName\">First Name</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!lastName\">Last Name</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!phoneNumber\">Phone Number</div>-->\r\n      <!--<div class=\"fulfill-item\" *ngIf=\"!email\">Email</div>-->\r\n      <!--</div>-->\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <button class=\"form-btn\"\r\n              mat-raised-button color=\"primary\"\r\n              [disabled]=\"isDisabled()\"\r\n              style=\"width: 100%\"\r\n              (click)=\"saveDetails()\"\r\n      >Continue\r\n      </button>\r\n      <mat-progress-bar\r\n        *ngIf=\"loader\"\r\n        mode=\"indeterminate\"\r\n      >\r\n      </mat-progress-bar>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_data_service__ = __webpack_require__("../../../../../src/app/services/server-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillingDetailsComponent = (function () {
    function BillingDetailsComponent(_formBuilder, http, globalSettings, _serverDataService, snackBar) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.globalSettings = globalSettings;
        this._serverDataService = _serverDataService;
        this.snackBar = snackBar;
        this.loader = false;
        this.formLoader = false;
        this.billingDataReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BillingDetailsComponent.prototype.ngOnInit = function () {
        this.thirdFormGroup = this._formBuilder.group({
            // streetCtrl: [''],
            // stateCtrl: [''],
            // cityCtrl : [''],
            // zipCtrl : [''],
            // firstNameCtrl : [''],
            // lastNameCtrl : [''],
            // emailCtrl : [''],
            // phoneNumberCtrl : ['']
            streetCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2)])],
            stateCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[A-Z]+$')])],
            cityCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ,\-]+$')])],
            zipCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(\\d{5})$|^(\\d{5})+(-(\\d{4}))$')])],
            firstNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z]+$')])],
            lastNameCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z]+$')])],
            emailCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email])],
            phoneNumberCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(\\d{10})$|^(1)+(\\d{11})$')])]
        });
    };
    BillingDetailsComponent.prototype.isDisabled = function () {
        if (this.thirdFormGroup.get('streetCtrl').valid &&
            this.thirdFormGroup.get('stateCtrl').valid &&
            this.thirdFormGroup.get('cityCtrl').valid &&
            this.thirdFormGroup.get('zipCtrl').valid &&
            this.thirdFormGroup.get('firstNameCtrl').valid &&
            this.thirdFormGroup.get('lastNameCtrl').valid &&
            this.thirdFormGroup.get('emailCtrl').valid &&
            this.thirdFormGroup.get('phoneNumberCtrl').valid) {
            return false;
        }
        return true;
    };
    BillingDetailsComponent.prototype.saveDetails = function () {
        var _this = this;
        this.formLoader = true;
        // this.loader = true;
        // this.thirdFormGroup.disable();
        var billingInfo = {};
        billingInfo.address = this.street;
        billingInfo.state = this.state;
        billingInfo.city = this.city;
        billingInfo.zip = this.zip;
        billingInfo.contactFirstName = this.firstName;
        billingInfo.contactLastName = this.lastName;
        billingInfo.contactEmail = this.email;
        billingInfo.contactPhone = this.phoneNumber;
        this.globalSettings.setBillingInfo(billingInfo).subscribe(function (result) {
            _this.billingDataReady.emit({ billingInfo: billingInfo });
            // this.loader = false;
            _this.formLoader = false;
        }, function (error) {
            // this.loader = false;
            _this.formLoader = false;
            _this.snackBar.open('Some error occurring. Pls cehck data and try again. ', '', {
                duration: 3000
            });
        });
        // this._serverDataService.saveBillingDetails2(billingInfo)
        //   .subscribe(
        //   result => {}
        // );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BillingDetailsComponent.prototype, "billingDataReady", void 0);
    BillingDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-billing-details',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/billing-details/billing-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_server_data_service__["a" /* ServerDataService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatSnackBar */]])
    ], BillingDetailsComponent);
    return BillingDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/body-stepper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*:not(i){\r\n  font-family: 'Source Sans Pro', Arial, Helvetica;\r\n}\r\n\r\n.mat-stepper-horizontal, .mat-stepper-vertical {\r\n  background-color: #fff0;\r\n  color: rgba(74,73,74,1.0);\r\n}\r\n\r\ntable{\r\n  color: rgba(74, 73, 74, 0.84);\r\n  border: 3px solid rgba(0, 0, 0, 0)\r\n}\r\ntable th:nth-child(1){ width: 10% }\r\ntable th:nth-child(2){ width: 30% }\r\ntable th:nth-child(3){ width: 30% }\r\ntable th:nth-child(4){ width: 30% }\r\n\r\nth{\r\n  font-size: smaller;\r\n}\r\n\r\nform{\r\n  font-family: 'Source Sans Pro', Arial, Helvetica !important;\r\n  background-color: #ffffff;\r\n  color: rgba(74,73,74,1.0);\r\n  padding: 4rem;\r\n  margin: 20px 10px;\r\n  box-shadow: 0 1px 15px rgba(0,0,0,0.30), 0 2px 2px rgba(0,0,0,0.22);\r\n}\r\n\r\n.example-full-width{\r\n  width: 100%\r\n}\r\n\r\nbutton{\r\n  padding: 5px 2rem;\r\n}\r\n\r\n.device-item{\r\n  padding: 30px 10px;\r\n  border: 2px solid lightgray;\r\n  border-radius: 10px;\r\n  margin: 20px 0;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.description {\r\n  background: rgba(255,255,255,0.0);\r\n  height: auto;\r\n  width: auto;\r\n  margin: 0;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 14.0px;\r\n  color: rgba(66,139,202,1.0);\r\n  line-height: 18.0px;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.subscribed{\r\n  padding: 10px 15px;\r\n  border: 1px solid lightgreen;\r\n  margin: 20px 0;\r\n  line-height: 25px;\r\n  color: #54d154;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\nmat-list-item-content, .mat-list-item-content{\r\n  -webkit-box-orient: vertical!important;\r\n  -webkit-box-direction: normal!important;\r\n      -ms-flex-direction: column!important;\r\n          flex-direction: column!important;\r\n}\r\n\r\n.empty{\r\n  padding: 20px;\r\n  color: darkgray;\r\n  font-size: 2rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-weight: 600;\r\n}\r\n.empty i {\r\n  margin-right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/body-stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\"\r\n     fxLayout=\"row\"\r\n     fxLayoutAlign=\"center center\">\r\n\r\n  <div class=\"flex-item\" fxFlex=\"70%\" fxLayout=\"column\" style=\"max-width: 820px\">\r\n\r\n\r\n    <div class=\"flex-item\" fxFlex=\"100%\" fxLayout=\"column\" style=\"position: relative\">\r\n      <h1 style=\"text-align: center\">App Setup</h1>\r\n      <div class=\"flex-item\" fxFlex=\"100%\">\r\n        <p class=\"head-description\">\r\n          Welcome to Mobichord: AT&T Hub Setup! We need to collect all the necessary business information to streamline\r\n          your requests in future. Right after completing these steps you’ll be ready to start requesting AT&T services\r\n          via ServiceNow.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-item\" fxFlex=\"100%\">\r\n\r\n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n\r\n        <mat-step [stepControl]=\"firstFormGroup\" label=\"API Activation\" [editable]=\"false\">\r\n          <div class=\"form-block\">\r\n            <app-api-activation\r\n              (isTokenApplied)=\"isTokenReady($event)\">\r\n            </app-api-activation>\r\n          </div>\r\n          <!--<form [formGroup]=\"firstFormGroup\">-->\r\n          <ng-template matStepLabel>API Activation</ng-template>\r\n          <!--<h2 style=\"text-align: center\">API Activation</h2>-->\r\n          <!--<b>Enter API Activation Token Code</b>-->\r\n          <!--<p>It's a code, that has been sent to example@yourcompany.com-->\r\n\r\n          <!--( Format: TOKEN-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX )</p>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input-->\r\n          <!--matInput-->\r\n          <!--placeholder=\"Copy-paste code here\"-->\r\n          <!--formControlName=\"firstCtrl\"-->\r\n          <!--required-->\r\n          <!--[(ngModel)]=\"token\"-->\r\n          <!--&gt;-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<div>-->\r\n          <!--<button-->\r\n          <!--mat-raised-button-->\r\n          <!--color=\"primary\" style=\"width: 100%\"-->\r\n          <!--(click)=\"checkToken()\"-->\r\n          <!--&gt;Activate</button>-->\r\n\r\n          <!--<section style=\"width: 100%\">-->\r\n          <!--<mat-progress-bar-->\r\n          <!--*ngIf=\"loader1\"-->\r\n          <!--mode=\"indeterminate\"-->\r\n          <!--&gt;-->\r\n          <!--</mat-progress-bar>-->\r\n          <!--</section>-->\r\n          <!--</div>-->\r\n\r\n          <!--<div *ngIf=\"goodToken\" class=\"subscribed\">-->\r\n          <!--<i class=\"material-icons\">done</i>-->\r\n          <!--<b>API has been activated</b>-->\r\n          <!--</div>-->\r\n          <!--</form>-->\r\n        </mat-step>\r\n\r\n\r\n        <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"false\" label=\"Roles & Users\">\r\n          <!--<form [formGroup]=\"secondFormGroup\">-->\r\n          <!--<ng-template matStepLabel>Roles & Users</ng-template>-->\r\n          <div class=\"form-block\">\r\n            <app-roles-and-users\r\n              (isRolesApplied)=\"isRolesReady($event)\">\r\n            </app-roles-and-users>\r\n          </div>\r\n          <!--<h2 style=\"text-align: center\">Assign Roles</h2>-->\r\n          <!--<div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus-->\r\n          <!--sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.-->\r\n          <!--<div class=\"description\">Advanced Role Configuration</div>-->\r\n          <!--</div>-->\r\n\r\n          <!--<p>-->\r\n          <!--<b>Add role(s) that will be cofigured as “AT&T Service Manager” </b>-->\r\n          <!--</p>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input matInput placeholder=\"Type user name\" aria-label=\"State\" [matAutocomplete]=\"auto1\" formControlName=\"secondCtrl\">-->\r\n          <!--<mat-autocomplete #auto1=\"matAutocomplete\">-->\r\n          <!--<mat-option *ngFor=\"let role of roles\" [value]=\"role.name\">-->\r\n          <!--<span>{{ role.name }}</span>-->\r\n          <!--</mat-option>-->\r\n          <!--</mat-autocomplete>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<div>-->\r\n          <!--<button mat-raised-button color=\"primary\" style=\"width: 100%\" matStepperNext>Assign</button>-->\r\n          <!--</div>-->\r\n\r\n          <!--</form>-->\r\n        </mat-step>\r\n\r\n        <mat-step [stepControl]=\"thirdFormGroup\" [editable]=\"false\">\r\n          <!--<form [formGroup]=\"thirdFormGroup\">-->\r\n          <ng-template matStepLabel>Billing details</ng-template>\r\n          <div class=\"form-block\">\r\n            <app-billing-details\r\n              (billingDataReady)=\"saveBillingData($event)\"\r\n            ></app-billing-details>\r\n          </div>\r\n          <!--<h2 style=\"text-align: center\">Set Billing Details</h2>-->\r\n          <!--<div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus-->\r\n          <!--sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.-->\r\n          <!--<div class=\"description\">Configure Default Billing <Address></Address></div>-->\r\n          <!--</div>-->\r\n\r\n          <!--<br>-->\r\n          <!--<b>Add contact person(s) </b>-->\r\n          <!--<br>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input matInput placeholder=\"Street Address\" formControlName=\"thirdCtrl\" required>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input matInput placeholder=\"Country / State\" formControlName=\"thirdCtrl\" required>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n          <!--<textarea matInput placeholder=\"City\" matTextareaAutosize matAutosizeMinRows=\"2\"-->\r\n          <!--matAutosizeMaxRows=\"5\"></textarea>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n          <!--<textarea matInput placeholder=\"Zip Code\" matTextareaAutosize matAutosizeMinRows=\"2\"-->\r\n          <!--matAutosizeMaxRows=\"5\"></textarea>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input matInput placeholder=\"Contact Person\" aria-label=\"State\" [matAutocomplete]=\"auto2\" formControlName=\"thirdCtrl\">-->\r\n          <!--<mat-autocomplete #auto2=\"matAutocomplete\">-->\r\n          <!--<mat-option *ngFor=\"let user of users\" [value]=\"user.name\">-->\r\n          <!--<span>{{ user.name }}</span>-->\r\n          <!--</mat-option>-->\r\n          <!--</mat-autocomplete>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<div>-->\r\n          <!--<button mat-raised-button color=\"primary\" style=\"width: 100%\" matStepperNext>Assign</button>-->\r\n          <!--</div>-->\r\n\r\n          <!--</form>-->\r\n        </mat-step>\r\n\r\n        <mat-step [stepControl]=\"fourthFormGroup\" [editable]=\"false\">\r\n          <ng-template matStepLabel>Billing account</ng-template>\r\n          <div class=\"form-block\">\r\n            <app-billing-accounts\r\n              (isBanApplied)=\"isBANReady($event)\"\r\n            ></app-billing-accounts>\r\n          </div>\r\n          <!--<form [formGroup]=\"fourthFormGroup\">-->\r\n          <!--<ng-template matStepLabel>Billing accounts</ng-template>-->\r\n          <!--<h2 style=\"text-align: center\">Set-up Catalog</h2>-->\r\n          <!--<div style=\"text-align: center\"  class=\"label1\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus-->\r\n          <!--sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.-->\r\n          <!--<div class=\"description\">Advanced Configuration<Address></Address></div>-->\r\n          <!--</div>-->\r\n\r\n          <!--<p>-->\r\n          <!--<b>Add devices to the list</b>-->\r\n          <!--</p>-->\r\n          <!--<div *ngIf=\"devices.length == 0\" class=\"device-item empty\">-->\r\n          <!--<i class=\"material-icons\">pets</i>-->\r\n          <!--<p>Not selected yet</p>-->\r\n          <!--</div>-->\r\n          <!--<mat-list>-->\r\n          <!--<mat-list-item *ngFor=\"let item of devices; let i = index\" class=\"device-item\">-->\r\n          <!--<table style=\"width: 100%\">-->\r\n          <!--<tr>-->\r\n          <!--<th rowspan=\"2\">-->\r\n          <!--<span class=\"device-img\">-->\r\n          <!--<i class=\"material-icons\">developer_mode</i>-->\r\n          <!--</span>-->\r\n          <!--</th>-->\r\n          <!--<th>NAME</th>-->\r\n          <!--<th>SKU</th>-->\r\n          <!--<th>PRICE</th>-->\r\n          <!--</tr>-->\r\n          <!--<tr>-->\r\n          <!--<td>{{ item.name }}</td>-->\r\n          <!--<td>{{ item.sku }}</td>-->\r\n          <!--<td>{{ item.price }}</td>-->\r\n          <!--</tr>-->\r\n          <!--<tr>-->\r\n          <!--<td colspan=\"3\" style=\"padding-top: 15px;\">-->\r\n          <!--{{ item.plans.rate.length + item.plans.data.length }} plans and .. features avaliable-->\r\n          <!--<span class=\"description\" (click)=\"openDialog(item)\">Configure</span>-->\r\n          <!--</td>-->\r\n          <!--<td style=\"text-align: right\">-->\r\n          <!--<i-->\r\n          <!--(click)=\"removeDevice(i)\"-->\r\n          <!--class=\"material-icons\"-->\r\n          <!--style=\"cursor: pointer\"-->\r\n          <!--&gt;delete</i>-->\r\n          <!--</td>-->\r\n          <!--</tr>-->\r\n          <!--</table>-->\r\n          <!--</mat-list-item>-->\r\n\r\n          <!--</mat-list>-->\r\n\r\n          <!--<br>-->\r\n\r\n          <!--<mat-form-field class=\"example-full-width\">-->\r\n          <!--<input matInput placeholder=\"Type SKU or device name\" aria-label=\"device list\" [matAutocomplete]=\"auto3\" formControlName=\"fourthCtrl\">-->\r\n          <!--<mat-autocomplete #auto3=\"matAutocomplete\">-->\r\n\r\n          <!--<mat-option-->\r\n          <!--*ngFor=\"let device of catalogDevices; let i = index\"-->\r\n          <!--(click)=\"chooseDevice(device)\"-->\r\n          <!--[value]=\"device.name\"-->\r\n          <!--&gt;-->\r\n          <!--<span>-->\r\n          <!--<img [src]=\"device.image\" style=\"max-width: 50px; max-height: 50px; height: auto;\"></span>-->\r\n          <!--<span>{{ device.name }}  ({{ device.sku }})</span>-->\r\n          <!--</mat-option>-->\r\n\r\n          <!--</mat-autocomplete>-->\r\n          <!--</mat-form-field>-->\r\n          <!--</form>-->\r\n        </mat-step>\r\n\r\n        <mat-step [stepControl]=\"fifthFormGroup\" [editable]=\"false\">\r\n          <ng-template matStepLabel>Catalog import</ng-template>\r\n          <div class=\"form-block\">\r\n            <app-catalog-import\r\n            ></app-catalog-import>\r\n          </div>\r\n        </mat-step>\r\n\r\n      </mat-horizontal-stepper>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/body-stepper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyStepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BodyStepperComponent = (function () {
    function BodyStepperComponent(dialog, _formBuilder, globalSettings, cdRef, userSys) {
        var _this = this;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.globalSettings = globalSettings;
        this.cdRef = cdRef;
        this.userSys = userSys;
        // @ViewChild('stepper') stepper: MatStepper
        this.isLinear = true;
        this.loader1 = false;
        this.catalogDevices = [];
        this.catalogPlans = {};
        this.catalogFeatures = {};
        this.devices = [];
        this.users = [];
        this.goodToken = false;
        this.deviceCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredDevice = this.deviceCtrl.valueChanges
            .startWith(null)
            .map(function (state) { return state ? _this.filterDevice(state) : _this.catalogDevices.slice(); });
    }
    BodyStepperComponent.prototype.filterDevice = function (name) {
        return this.catalogDevices.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    BodyStepperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalSettings.currentSysId.subscribe(function (currentSysId) { return _this.currentSysId = currentSysId; });
        this.globalSettings.currentStep.subscribe(function (currentStep) {
            _this.currentStep = currentStep;
            _this.leafStepper();
        });
        this.userSys.getUsers().subscribe(function (response) { return _this.users = response.result; });
        this.userSys.getRoles().subscribe(function (response) { return _this.roles = response.result; });
        this.firstFormGroup = this._formBuilder.group({});
        this.secondFormGroup = this._formBuilder.group({});
        this.thirdFormGroup = this._formBuilder.group({});
        this.fourthFormGroup = this._formBuilder.group({});
        this.fifthFormGroup = this._formBuilder.group({});
    };
    BodyStepperComponent.prototype.ngAfterViewChecked = function () {
        this.leafStepper();
        this.cdRef.detectChanges();
    };
    BodyStepperComponent.prototype.leafStepper = function () {
        // console.log('this.currentStep', this.currentStep);
        // console.log('this.stepper', this.stepper);
        if (this.stepper._steps && this.currentStep === 'rolesAndUsers') {
            this.stepper.selectedIndex = 1;
            this.stepper._steps._results[0].completed = true;
        }
        else if (this.stepper._steps && this.currentStep === 'billInfo') {
            this.stepper.selectedIndex = 2;
            this.stepper._steps._results[0].completed = true;
            this.stepper._steps._results[1].completed = true;
        }
        else if (this.stepper._steps && this.currentStep === 'billAccounts') {
            this.stepper.selectedIndex = 3;
            this.stepper._steps._results[0].completed = true;
            this.stepper._steps._results[1].completed = true;
            this.stepper._steps._results[2].completed = true;
        }
        else if (this.stepper._steps && this.currentStep === 'catalog') {
            this.stepper.selectedIndex = 4;
            this.stepper._steps._results[0].completed = true;
            this.stepper._steps._results[1].completed = true;
            this.stepper._steps._results[2].completed = true;
            this.stepper._steps._results[3].completed = true;
        }
    };
    BodyStepperComponent.prototype.isTokenReady = function (dataEvent) {
        var isTokenApplied = dataEvent.tokenApplied;
        if (isTokenApplied) {
            this.stepper.selected.completed = true;
            this.stepper.selectedIndex = 1;
            this.getData();
        }
    };
    BodyStepperComponent.prototype.isRolesReady = function (dataEvent) {
        var isRolesApplied = dataEvent.isRolesApplied;
        // console.log('isRolesApplied', isRolesApplied);
        if (isRolesApplied) {
            this.stepper.selected.completed = true;
            this.stepper.selectedIndex = 2;
        }
    };
    BodyStepperComponent.prototype.saveBillingData = function (dataEvent) {
        // console.log('saveBillingData at parent COntroller' );
        var billingInfo = dataEvent.billingInfo;
        // this.globalSettings.setBillingInfo(billingInfo).subscribe();
        this.stepper.selected.completed = true;
        this.stepper.selectedIndex = 3;
        // console.log('saveBillingData at parent COntroller', billingInfo);
        // }
    };
    BodyStepperComponent.prototype.isBANReady = function (dataEvent) {
        var isBanReady = dataEvent.isBanReady;
        // console.log('isBanReady', isBanReady);
        if (isBanReady) {
            this.stepper.selected.completed = true;
            this.stepper.selectedIndex = 4;
        }
    };
    BodyStepperComponent.prototype.openDialog = function (item) {
        // const dialogRef = this.dialog.open(DeviceDialogComponent, {
        //   height: '90vh',
        //   width: '800px',
        //   data: item
        // });
        //
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        // });
    };
    BodyStepperComponent.prototype.checkToken = function () {
        // ==========  Temp ===============
        // this.firstFormGroup.disable();
        // this.secondFormGroup.disable();
        // this.thirdFormGroup.disable();
        // this.fourthFormGroup.disable();
        // this.fifthFormGroup.disable();
        // =============================
        //this.loader1 = false;
        //setTimeout(() => {
        //  this.stepper.selectedIndex = 1;
        //}, 1500);
        //if (this.token && this.token.length > 5) {
        //  this.loader1 = true;
        //  // this.firstFormGroup.disable();
        //  this.stepper.selected.editable = false;
        //
        //  this.globalSettings.setToken(this.token, this.currentSysId)
        //    .subscribe(
        //      () => {
        //        this.getData();
        //        this.goodToken = true;
        //        this.loader1 = false;
        //        setTimeout(() => {
        //          this.stepper.selectedIndex = 1;
        //        }, 1500);
        //      },
        //      () => {
        //        this.loader1 = false;
        //      }
        //    )
        //}
    };
    BodyStepperComponent.prototype.getData = function () {
        this.globalSettings.pullCatalog()
            .subscribe(function (response) {
            // let data = response.json();
            // console.log('all Catalog:', data.result[0].catalog);
            // this.catalog = JSON.parse(data.result[0].catalog)
            // console.log('sku11460700036:', this.catalog);
            // this.catalog = data.result;
            //this.createCatalogs();
        }, function (err) {
            console.log('some error whit catalog loading:', err);
        });
    };
    BodyStepperComponent.prototype.chooseDevice = function (device) {
        // this.devices.push(device)
        // let i = this.devices.indexOf(device)
        // this.setOptionsDevice(i)
        // // console.log('device', device)
    };
    BodyStepperComponent.prototype.setOptionsDevice = function (i) {
        // let device = this.devices[i];
        // let devicePlans = [];
        // for (let plan of device.plans.rate) {
        //   devicePlans.push(this.catalogPlans[plan]);
        // }
        // for (let plan of device.plans.data) {
        //   devicePlans.push(this.catalogPlans[plan]);
        // }
        // this.devices[i].devicePlans = devicePlans;
    };
    BodyStepperComponent.prototype.removeDevice = function (i) {
        // this.devices.splice(i, 1)
    };
    BodyStepperComponent.prototype.createCatalogs = function () {
        // for (let i in this.catalog) {
        //   let item = this.catalog[i];
        //   switch (item.type) {
        //     case 'deviceSku': {
        //       this.catalogDevices.push(item);
        //       break;
        //     }
        //     case 'rateplanSku': {
        //       item.isVisible = false;
        //       this.catalogPlans[item.sku] = item;
        //       break;
        //     }
        //     case 'featureSku': {
        //       this.catalogFeatures[item.sku] = item;
        //       break;
        //     }
        //     // present in last XML edition
        //     case 'applicationSku': {
        //       this.catalogFeatures[item.sku] = item;
        //       break;
        //     }
        //   }
        // }
        //
        // this.assignFeaturesToPlans()
    };
    BodyStepperComponent.prototype.assignFeaturesToPlans = function () {
        // for (let i in this.catalogPlans) {
        //   let item = this.catalogPlans[i];
        //   let planFeatures = [];
        //
        //   for (let f of item.features) {
        //     planFeatures.push(this.catalogFeatures[f]);
        //   }
        //   if (this.catalogPlans[i]) {
        //     this.catalogPlans[i].planFeatures = planFeatures;
        //   }
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('stepper'),
        __metadata("design:type", Object)
    ], BodyStepperComponent.prototype, "stepper", void 0);
    BodyStepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body-stepper',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/body-stepper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/body-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], BodyStepperComponent);
    return BodyStepperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fifthFormGroup\" style=\"\">\r\n  <div *ngIf=\"!isCatalogReady\">\r\n    <div class=\"form-description-body\" style=\"text-align: center!important;\">\r\n      Nice job! You’re almost done.\r\n    </div>\r\n\r\n    <div class=\"flex-container\"\r\n         fxLayout=\"row\"\r\n         fxLayoutAlign=\"center center\"\r\n         style=\"padding: 15px\">\r\n      <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n    <h2 class=\"form-title\" style=\"text-align: center!important;\">Importing catalog from AT&T…</h2>\r\n    <div class=\"form-description-body\" style=\"text-align: center!important;\">\r\n      This may take up to a minute, please wait.\r\n    </div>\r\n\r\n    <div class=\"form-container form-description-body\" style=\"text-align: center!important;\">\r\n      Progress stuck?\r\n      <a class=\"link-btn\" (click)=\"checkCatalogLoading()\">Retry</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"isCatalogReady\">\r\n    <div style=\"display: flex; flex-direction: row\">\r\n      <i class=\"material-icons\"\r\n         style=\"color:#5cb85c;font-size: 5rem\">check_circle</i>\r\n      <h2 class=\"form-title\">Setup has been finished</h2>\r\n    </div>\r\n    <div class=\"form-description-body\">\r\n      Well done! Setup has been successfully finished and you catalog has been imported from AT&T to Service now. Your\r\n      are ready to start requesting and managing services.\r\n    </div>\r\n    <br>\r\n    <div class=\"form-description-title\">Summary</div>\r\n    <div class=\"flex-container\"\r\n         fxLayout=\"column\"\r\n         fxLayoutAlign=\"start center\">\r\n\r\n      <div *ngFor=\"let item of catalogSummary\" style=\"width: 100%;text-align: left\">\r\n        <div class=\"flex-item\" fxFlex=\"50%\">\r\n          {{item.title}}\r\n        </div>\r\n        <div class=\"flex-item\" fxFlex=\"50%\">\r\n          {{item.count}}\r\n        </div>\r\n      </div>\r\n      <a class=\"form-btn\" href=\"/nav_to.do?uri=x_mobi_aom_setup-guide\"\r\n              mat-raised-button color=\"primary\"\r\n              style=\"width: 100%;margin-top: 20px;\r\n              display: flex;\r\n              justify-content: center;\r\n              align-items: center;\"\r\n      >Go to Service Panel\r\n      </a>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogImportComponent = (function () {
    function CatalogImportComponent(_formBuilder, globalSettings) {
        this._formBuilder = _formBuilder;
        this.globalSettings = globalSettings;
    }
    CatalogImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalSettings.currentSysId.subscribe(function (currentSysId) { return _this.currentSysId = currentSysId; });
        this.checkCatalogLoading();
        this.fifthFormGroup = this._formBuilder.group({});
    };
    CatalogImportComponent.prototype.checkCatalogLoading = function () {
        var _this = this;
        // console.log('checkCatalogLoading');
        // console.log('checkCatalogLoading this.currentSysId', this.currentSysId.length);
        if (this.currentSysId && this.currentSysId.length > 0) {
            this.globalSettings.checkCatalog()
                .subscribe(function (response) {
                var resp = response.json();
                if (resp.result && resp.result.summary) {
                    // need to fix
                    // if (resp.result && resp.result.status) {
                    // this.isCatalogReady = resp.result.status;
                    _this.isCatalogReady = true;
                    _this.catalogSummary = resp.result.summary;
                }
                // console.log('catalog resp', resp)
            });
        }
    };
    CatalogImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog-import',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/catalog-import/catalog-import.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */]])
    ], CatalogImportComponent);
    return CatalogImportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"secondFormGroup\" style=\"position: relative\">\r\n  <div class=\"form-loader\"\r\n       *ngIf=\"formLoader\">\r\n    <mat-spinner\r\n      mode=\"query\"\r\n      mode=\"indeterminate\"\r\n    ></mat-spinner>\r\n  </div>\r\n\r\n  <h2 class=\"form-title\">Roles & Users</h2>\r\n  <div class=\"form-description-body\">\r\n    Add role(s) that will be responsible for AT&T service managment. Emplyees assigned as “AT&T Service Manager” would\r\n    be able to place orders, manage all AT&T lines and aproove request from other employees.\r\n  </div>\r\n  <div class=\"form-description-title\">\r\n    Add role(s) that will be cofigured as “AT&T Service Manager”\r\n  </div>\r\n\r\n  <div style=\"padding: 20px 0\">\r\n    <mat-chip-list>\r\n      <mat-chip\r\n        *ngFor=\"let role of selectedRoles\"\r\n         (remove)=\"removeRole(role)\"\r\n      >\r\n        {{ role.name }}\r\n        <mat-icon matChipRemove >cancel</mat-icon>\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </div>\r\n\r\n  <mat-form-field class=\"form-input\" floatPlaceholder=\"never\">\r\n    <input type=\"text\" placeholder=\"Type Role name\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let option of filteredOptions | async\"\r\n                  [value]=\"option.name\"\r\n                  (onSelectionChange)=\"onRoleSelect(option)\">\r\n        {{ option.name }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n\r\n  <div class=\"flex-container\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <!--<p style=\"padding: 0 10px\">Please fulfill</p>-->\r\n      <!--<div class=\"fulfill-list\">-->\r\n        <!--<div class=\"fulfill-item\" *ngIf=\"selectedRoles.length == 0\">Roles</div>-->\r\n      <!--</div>-->\r\n    </div>\r\n\r\n    <div class=\"flex-item\" fxFlex=\"50%\">\r\n      <button class=\"form-btn\"\r\n              [disabled]=\"!selectedRoles.length === 0\"\r\n              mat-raised-button color=\"primary\"\r\n              style=\"width: 100%\"\r\n              (click)=\"onSubmit()\"\r\n      >Continue\r\n      </button>\r\n      <mat-progress-bar\r\n        *ngIf=\"loader\"\r\n        mode=\"indeterminate\"\r\n      >\r\n      </mat-progress-bar>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesAndUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesAndUsersComponent = (function () {
    function RolesAndUsersComponent(userSys, globalSettings, _formBuilder) {
        this.userSys = userSys;
        this.globalSettings = globalSettings;
        this._formBuilder = _formBuilder;
        this.roles = [];
        this.selectedRoles = [];
        this.loader = false;
        this.formLoader = false;
        this.isRolesApplied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    RolesAndUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSys.getRoles().subscribe(function (response) { return _this.roles = response.result; });
        this.secondFormGroup = this._formBuilder.group({});
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.roles.slice(); });
    };
    RolesAndUsersComponent.prototype.filter = function (val) {
        return this.roles.filter(function (role) {
            return role.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    RolesAndUsersComponent.prototype.onRoleSelect = function (role) {
        if (this.selectedRoles.indexOf(role) === -1) {
            this.selectedRoles.push(role);
        }
    };
    RolesAndUsersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formLoader = true;
        // this.loader = true;
        this.globalSettings.saveRolesProgress().subscribe(function (response) {
            // this.loader = false;
            _this.formLoader = false;
            _this.isRolesApplied.emit({ isRolesApplied: true });
        }, function (error) {
            _this.formLoader = false;
        });
    };
    RolesAndUsersComponent.prototype.removeRole = function (role) {
        var i = this.selectedRoles.indexOf(role);
        if (i >= 0) {
            this.selectedRoles.splice(i, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], RolesAndUsersComponent.prototype, "isRolesApplied", void 0);
    RolesAndUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-roles-and-users',
            template: __webpack_require__("../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/body-stepper/roles-and-users/roles-and-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], RolesAndUsersComponent);
    return RolesAndUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{    text-align: center;\r\n  font-size: small;\r\n  font-weight: 800;\r\n  color: #939596;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/setup-guide/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/header/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/header/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"logo-block\" layout-align=\"center center\">\r\n  <div>\r\n    <img class=\"logo\"\r\n         src=\"https://cdn.rawgit.com/alex-krn/devtraining-needit-jakarta/master/dist/img/logo.png\"   title=\"logo\">\r\n  </div>\r\n  <div>\r\n    <h3 class=\"logo-title\">MOBICHORD: AT&T HUB</h3>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/header/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
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

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/setup-guide/header/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/header/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setup-guide/setup-guide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup-guide/setup-guide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-block\">\n  <app-header></app-header>\n</div>\n\n\n<section class=\"main-block\" layout-align=\"center center\">\n  <div\n    *ngIf=\"showLoader\"\n    style=\"justify-content: center; display: flex; padding: 10vw; width: 100%\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <section\n    class=\"content-block\"\n    *ngIf=\"!showLoader && (currentStep == '')\">\n    <app-body-activation\n      (isSubmited)=\"haveSubscribed($event)\"\n    ></app-body-activation>\n  </section>\n\n\n  <section\n    class=\"content-block\"\n    *ngIf=\"!showLoader && (currentStep == 'submited')\">\n    <app-body-activated\n      (isActivated)=\"haveActivated($event)\"\n    ></app-body-activated>\n  </section>\n\n\n  <!--*ngIf=\"showStepper()\">-->\n  <section\n    class=\"content-block\"\n    *ngIf=\"!showLoader && (currentStep != '' && currentStep != 'submited')\">\n    <app-body-stepper></app-body-stepper>\n  </section>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/setup-guide/setup-guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupGuideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupGuideComponent = (function () {
    function SetupGuideComponent(settingService) {
        this.settingService = settingService;
        this.isSubscribed = false;
        this.isActivated = false;
        this.showLoader = true;
    }
    SetupGuideComponent.prototype.haveSubscribed = function (dataEvent) {
        // this.isSubscribed = dataEvent.isSubscribed;
        // this.showLoader = false;
        // this.currentStep = 'submited';
        this.getActivation();
        // console.log('this.isSuscribed', this.isSubscribed);
    };
    SetupGuideComponent.prototype.haveActivated = function (dataEvent) {
        // this.isActivated = dataEvent.isActivated;
        // this.showLoader = false;
        // this.currentStep = 'activated';
        this.getActivation();
        // console.log('this.isActivated', this.isActivated);
    };
    SetupGuideComponent.prototype.ngOnInit = function () {
        this.getActivation();
    };
    SetupGuideComponent.prototype.showStepper = function () {
        if (this.currentStep != '' && this.currentStep != 'submited') {
            return true;
        }
        return false;
    };
    SetupGuideComponent.prototype.getActivation = function () {
        var _this = this;
        this.currentStep = 'hide';
        this.showLoader = true;
        this.settingService.checkActivation()
            .subscribe(function (response) {
            var data = response;
            // const data = response.json();
            console.log('subscribe success', data);
            if (data.result && data.result[0] && data.result[0].current_step) {
                console.log('-- current_step defined as:', data.result[0].current_step);
                _this.showLoader = false;
                _this.currentStep = data.result[0].current_step;
                _this.settingService.changeSysId(data.result[0].sys_id);
                // this.isSubscribed = true;
                // setTimeout(() => {
                //   this.settingService.changeSysId(data.result[0].sys_id);
                // }, 2000);
            }
            else {
                console.log('subscribe no activation');
                _this.currentStep = '';
                // this.isSubscribed = false;
                _this.showLoader = false;
            }
        }, function (err) {
            _this.showLoader = false;
            console.log('some error when activation check:', err);
        });
        this.scrollToTop();
    };
    SetupGuideComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    SetupGuideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup-guide',
            template: __webpack_require__("../../../../../src/app/setup-guide/setup-guide.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup-guide/setup-guide.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_setting_service__["a" /* SettingService */]])
    ], SetupGuideComponent);
    return SetupGuideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/activation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationModel; });
var ActivationModel = (function () {
    function ActivationModel(company_name, account_number, customer_name, customer_email) {
        this.company_name = company_name;
        this.account_number = account_number;
        this.customer_name = customer_name;
        this.customer_email = customer_email;
    }
    return ActivationModel;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map