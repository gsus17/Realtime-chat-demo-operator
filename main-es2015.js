(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill\r\n     fxLayout=\"column\"\r\n     class=\"containers\"\r\n     fxLayoutAlign=\"center center\">\r\n\r\n  <div fxLayout=\"column\"\r\n       fxLayoutAlign=\"center center\">\r\n    <div fxFlex\r\n         fxLayout=\"row\"\r\n         fxLayoutAlign=\"center center\">\r\n      <span class=\"mat-title\">Realtime chat demo (operators)</span>\r\n    </div>\r\n    <div fxHide.xs=\"true\"\r\n         fxFlex\r\n         fxLayout=\"row\"\r\n         fxLayoutAlign=\"center center\">\r\n      <span class=\"mat-title principal-label\"></span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Login form -->\r\n  <mat-card class=\"login-content\"\r\n            fxLayout=\"column\"\r\n            fxLayoutAlign=\"center flex\">\r\n    <div class=\"progress-bar-container\">\r\n      <mat-progress-bar mode=\"indeterminate\"\r\n                        *ngIf=\"progressLinear\"></mat-progress-bar>\r\n    </div>\r\n\r\n    <mat-card-subtitle>\r\n      <span>Ingresa con tu cuenta favorita</span>\r\n    </mat-card-subtitle>\r\n\r\n    <form class=\"example-form\"\r\n          fxLayout=\"column\">\r\n      <div fxFlex\r\n           fxLayout=\"row\"\r\n           class=\"fxMargin\">\r\n        <button fxFlex\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"googleLogin()\">Google</button>\r\n      </div>\r\n      <div fxFlex\r\n           fxLayout=\"row\"\r\n           class=\"fxMargin\">\r\n        <button fxFlex\r\n                [disabled]=\"true\"\r\n                mat-raised-button\r\n                color=\"accent\"\r\n                (click)=\"twitterLogin()\">Twitter</button>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n\r\n  <div class=\"fxMargin\">\r\n    <span class=\"version-app\">Version 0.0.1</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/chat-contacts/chat-contacts.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/chat-contacts/chat-contacts.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex>\n  <mat-nav-list fxFlex\n                fxLayout=\"column\">\n\n    <ng-container *ngIf=\"(userListToRender.length > 0)\">\n      <div fxLayout=\"row\"\n           class=\"fxMargin search-chat-container\"\n           fxFlex>\n\n        <div fxLayout=\"row\"\n             fxFlex\n             class=\"search-chat-container\">\n          <input [(ngModel)]=\"searchFilter\"\n                 (keyup)=\"filterList()\"\n                 class=\"search-chat-input\"\n                 type=\"text\"\n                 fxFlex\n                 placeholder=\"Buscar un chat nuevo...\">\n        </div>\n      </div>\n      <mat-list-item *ngFor=\"let item of userListToRender\"\n                     (click)=\"selectChat(item)\">\n\n        <img [src]=\"item.avatar | noimage\"\n             matListAvatar />\n\n        <div fxLayout=\"column\"\n             fxFlex>\n          <div class=\"message-container\"\n               fxLayout=\"row\"\n               fxLayoutAlign=\"space-between center\"\n               fsxFlex>\n            <span class=\"mat-small\"> {{item.name}} </span>\n            <span class=\"mat-small\"> 12/03/1997 </span>\n\n            <span class=\"message-unread-count\"\n                  *ngIf=\"item.messageUnread > 0\">{{item.messageUnread}}</span>\n          </div>\n\n          <div class=\"message-container\"\n               fxLayout=\"row\">\n            <span class=\"mat-small\"> mensaje </span>\n          </div>\n        </div>\n\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(userListToRender.length > 0)\">\n      <div fxLayout=\"column\"\n           fxLayoutAlign=\"center center\">\n        <img src=\"assets/img/no-results-persona.png\"\n             alt=\"\">\n\n        <span>No hay usuarios en linea</span>\n      </div>\n    </ng-container>\n  </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/chat-window/chat-window.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/chat-window/chat-window.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"\n     class=\"chat-window\"\n     fxFlex>\n  <div fxLayout=\"row\"\n       fxLayoutAlign=\"space-between center\">\n    <div fxLayout=\"row\"\n         fxLayoutAlign=\"start center\">\n      <img class=\"avatar\"\n           [src]=\"userSelected.avatar | noimage\"\n           alt=\"avatar\">\n\n      <span class=\"user-name-label\">{{userSelected.name}}</span>\n    </div>\n\n    <button mat-raised-button\n            color=\"accent\"\n            (click)=\"logout()\">Salir</button>\n  </div>\n\n  <div class=\"message-general-container\"\n       fxFlex\n       id=\"chat-container\">\n    <div *ngFor=\"let message of messages\"\n         class=\"fxMargin\"\n         fxLayout=\"column\">\n      <div fxLayout=\"column\"\n           fxLayoutAlign=\"{{messageSendByMe(message) ? 'center end' : 'center start'}}\"\n           class=\"message-container\">\n        <div class=\"user-name-container\">\n          <span class=\"user-name\"\n                [ngClass]=\"{'right': messageSendByMe(message), 'left': !messageSendByMe(message)}\">{{message.name}}</span>\n        </div>\n        <span class=\"chat-message\">{{message.message}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\"\n       fxLayoutAlign=\"space-between center\">\n    <input matInput\n           fxFlex\n           [(ngModel)]=\"newMessage\"\n           placeholder=\"Escriba su mensaje\"\n           class=\"message-input\"\n           value=\"mensaje\"\n           (keyup.enter)=\"sendMessage()\">\n\n    <div fxLayout=\"row\"\n         fxLayoutAlign=\"center center\"\n         fxFlex=\"10\">\n      <button mat-fab\n              (click)=\"sendMessage()\"\n              color=\"primary\">\n        <mat-icon>send</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/master/master.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/master/master.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill\r\n     fxLayout=\"column\"\r\n     fxLayoutAlign=\"center center\"\r\n     class=\"master-general-container\">\r\n  <mat-card class=\"master-content-container\">\r\n    <mat-drawer-container fxFlexFill\r\n                          class=\"containers\"\r\n                          fxFlexLayout=\"column\">\r\n      <mat-drawer #drawer\r\n                  class=\"contents\"\r\n                  [(opened)]=\"openedSideBar\"\r\n                  [mode]=\"openedSideBarMode\"\r\n                  class=\"left-drawer-container\">\r\n        <app-chat-contacts (selectionUser)=changeUserSelected($event)></app-chat-contacts>\r\n      </mat-drawer>\r\n\r\n      <mat-drawer-content fxLayout=\"column\"\r\n                          (scroll)=\"onElementScroll($event)\">\r\n        <app-chat-window *ngIf=\"userSelected !== null\"\r\n                         [userAuthenticate]=\"userAuthenticate\"\r\n                         [userSelected]=\"userSelected\"\r\n                         (logoutHandler)=\"logout()\"\r\n                         fxFlex></app-chat-window>\r\n      </mat-drawer-content>\r\n\r\n    </mat-drawer-container>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");































let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollDispatchModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__["CdkTableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__["LayoutModule"]
        ],
        exports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollDispatchModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__["CdkTableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__["LayoutModule"]
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/firebase-auth/firebase-auth.service */ "./src/app/login/firebase-auth/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _master_firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./master/firebase-db/firebase-db.service */ "./src/app/master/firebase-db/firebase-db.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _master_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./master/chat-window/chat-window.component */ "./src/app/master/chat-window/chat-window.component.ts");
/* harmony import */ var _master_chat_contacts_chat_contacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./master/chat-contacts/chat-contacts.component */ "./src/app/master/chat-contacts/chat-contacts.component.ts");
/* harmony import */ var _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/noimage.pipe */ "./src/app/pipes/noimage.pipe.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _master_master_component__WEBPACK_IMPORTED_MODULE_6__["MasterComponent"],
            _master_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_17__["ChatWindowComponent"],
            _master_chat_contacts_chat_contacts_component__WEBPACK_IMPORTED_MODULE_18__["ChatContactsComponent"],
            _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_19__["NoimagePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_12__["AngularMaterialModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]
        ],
        providers: [_login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseAuthService"], _master_firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_15__["FirebaseDBService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");



const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'master', component: _master_master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/firebase-auth/firebase-auth.service */ "./src/app/login/firebase-auth/firebase-auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(fAuth, router) {
        this.fAuth = fAuth;
        this.router = router;
    }
    canActivate() {
        const isLogged = this.fAuth.isUserLogged();
        if (!isLogged) {
            this.router.navigate(['/login']);
        }
        return isLogged;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/login/firebase-auth/firebase-auth.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/login/firebase-auth/firebase-auth.service.ts ***!
  \**************************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let FirebaseAuthService = class FirebaseAuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.currentUser = null;
    }
    /**
     * Login with Google.
     */
    googleLogin() {
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    }
    /**
     * Return the current state of login.
     */
    isUserLogged() {
        const currenUser = this.afAuth.auth.currentUser;
        const response = currenUser ? true : false;
        return response;
    }
    /**
     * Logout.
     */
    logout() {
        return this.afAuth.auth.signOut();
    }
    /**
     * Save the current user.
     */
    setUser(user) {
        this.currentUser = user;
    }
    /**
     * Return the current user.
     */
    geUser() {
        return this.currentUser;
    }
};
FirebaseAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
FirebaseAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], FirebaseAuthService);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  height: auto !important;\n}\n\n.version-app {\n  color: grey;\n  font-size: 9px;\n  margin: 16px 0;\n}\n\n.progress-bar-container {\n  padding-bottom: 8px;\n}\n\n.selection-section {\n  padding-top: 40px;\n}\n\n.principal-label {\n  margin-bottom: 0 !important;\n}\n\n@media (min-width: 599px) {\n  .login-content {\n    min-width: 500px;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXERlc2Fycm9sbG9cXFNyY1xcUmVzZWFyY2hcXHRvVXBkYXRlXFxSZWFsdGltZS1jaGF0LWRlbW8tb3BlcmF0b3Ivc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUFpQixnQkFBQTtJQUFtQix1QkFBQTtFQ0VwQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudCB7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZXJzaW9uLWFwcCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uc2VsZWN0aW9uLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucHJpbmNpcGFsLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIE1lZGlhcXVlcnkgcGFyYSBmb3JtdWxhcmlvIGRlIHVuYSBzb2xhIGNvbHVtbmEgZW4geHMuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1OTlweCkge1xyXG4gIC5sb2dpbi1jb250ZW50IHsgbWluLXdpZHRoOiA1MDBweDsgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O31cclxufVxyXG4iLCIubG9naW4tY29udGVudCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udmVyc2lvbi1hcHAge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5zZWxlY3Rpb24tc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucHJpbmNpcGFsLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTk5cHgpIHtcbiAgLmxvZ2luLWNvbnRlbnQge1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-auth/firebase-auth.service */ "./src/app/login/firebase-auth/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var LoginComponent_1;




let LoginComponent = LoginComponent_1 = class LoginComponent {
    constructor(firebaseAuthService, zone, router) {
        this.firebaseAuthService = firebaseAuthService;
        this.zone = zone;
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * Login with google.
     */
    googleLogin() {
        console.log(`${LoginComponent_1.name}::googleLogin`);
        this.firebaseAuthService.googleLogin()
            .then((res) => {
            console.log(`${LoginComponent_1.name}::success`, res);
            this.saveLocalUser(res);
            this.goToMaster();
        })
            .catch((err) => {
            console.log(`${LoginComponent_1.name}::catch`, err);
        });
    }
    /**
     * Login with twitter.
     */
    twitterLogin() {
        console.log(`${LoginComponent_1.name}::twitterLogin`);
    }
    /**
     * Save user login.
     */
    saveLocalUser(response) {
        console.log(`${LoginComponent_1.name}::saveLocalUser`);
        const user = {
            uid: response.user.uid,
            name: response.user.displayName,
            avatar: response.user.photoURL,
            messageUnread: 0
        };
        this.firebaseAuthService.setUser(user);
    }
    /**
     * Redirect to master view.
     */
    goToMaster() {
        console.log(`${LoginComponent_1.name}::goToMaster`);
        this.zone.run(() => this.router.navigate(['/master']));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = LoginComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/master/chat-contacts/chat-contacts.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/master/chat-contacts/chat-contacts.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-chat-input {\n  border-radius: 20px;\n  height: 30px;\n  padding: 8px 16px;\n  border-width: 1px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.message-container {\n  padding-left: 8px;\n}\n\n.message-unread-count {\n  background-color: #09d261;\n  border-radius: 12px;\n  padding: 0 5px;\n  text-align: center;\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NoYXQtY29udGFjdHMvQzpcXERlc2Fycm9sbG9cXFNyY1xcUmVzZWFyY2hcXHRvVXBkYXRlXFxSZWFsdGltZS1jaGF0LWRlbW8tb3BlcmF0b3Ivc3JjXFxhcHBcXG1hc3RlclxcY2hhdC1jb250YWN0c1xcY2hhdC1jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFzdGVyL2NoYXQtY29udGFjdHMvY2hhdC1jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jaGF0LWNvbnRhY3RzL2NoYXQtY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNoYXQtaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtdW5yZWFkLWNvdW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWQyNjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iLCIuc2VhcmNoLWNoYXQtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLm1lc3NhZ2UtdW5yZWFkLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5ZDI2MTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/master/chat-contacts/chat-contacts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/chat-contacts/chat-contacts.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContactsComponent", function() { return ChatContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db/firebase-db.service */ "./src/app/master/firebase-db/firebase-db.service.ts");



let ChatContactsComponent = class ChatContactsComponent {
    constructor(db) {
        this.db = db;
        this.userList = [];
        this.searchFilter = '';
        this.userListToRender = [];
        this.selectionUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptionReference = null;
    }
    /**
     * Init the component.
     */
    ngOnInit() {
        this.subscriptionReference = this.db.getConversations$()
            .subscribe((data) => {
            this.userList = data;
            this.userListToRender = data;
        });
    }
    /**
     * Filter list.
     */
    filterList() {
        if (this.searchFilter !== undefined && this.searchFilter !== '') {
            this.userListToRender = this.userList.filter((user) => user.name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1);
        }
        else {
            this.userListToRender = this.userList;
        }
    }
    /**
     * Unsubscription.
     */
    ngOnDestroy() {
        this.subscriptionReference.unsubscribe();
    }
    /**
     * Chat selection.
     */
    selectChat(item) {
        this.selectionUser.emit(item);
    }
};
ChatContactsComponent.ctorParameters = () => [
    { type: _firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDBService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatContactsComponent.prototype, "selectionUser", void 0);
ChatContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-contacts',
        template: __webpack_require__(/*! raw-loader!./chat-contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/chat-contacts/chat-contacts.component.html"),
        styles: [__webpack_require__(/*! ./chat-contacts.component.scss */ "./src/app/master/chat-contacts/chat-contacts.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDBService"]])
], ChatContactsComponent);



/***/ }),

/***/ "./src/app/master/chat-window/chat-window.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/master/chat-window/chat-window.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #999;\n}\n\n.login-content {\n  height: auto !important;\n}\n\n.version-app {\n  color: grey;\n  font-size: 9px;\n  margin: 16px 0;\n}\n\n.progress-bar-container {\n  padding-bottom: 8px;\n}\n\n.selection-section {\n  padding-top: 40px;\n}\n\n.principal-label {\n  margin-bottom: 0 !important;\n}\n\n.avatar {\n  max-height: 70px;\n  border-radius: 10px;\n}\n\n.user-name {\n  padding: 4px 8px;\n  border-radius: 8px;\n  color: white;\n  font-size: 10px;\n  font-style: italic;\n}\n\n.user-name.right {\n  background-color: #008008a1;\n}\n\n.user-name.left {\n  background-color: #0000ff94;\n}\n\n.user-name-container {\n  margin-bottom: 4px;\n}\n\n.chat-message {\n  font-size: 12px;\n}\n\n.message-general-container {\n  border-radius: 8px;\n  height: 260px;\n  overflow: auto;\n  margin: 16px 0;\n  background-color: #a9a9a921;\n}\n\n.message-container {\n  margin: 16px 0;\n}\n\n.chat-window {\n  padding: 16px;\n}\n\n.user-name-label {\n  padding-left: 8px;\n}\n\n.message-input {\n  border-radius: 20px;\n  height: 40px;\n  border-width: 1px;\n  padding: 16px;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NoYXQtd2luZG93L0M6XFxEZXNhcnJvbGxvXFxTcmNcXFJlc2VhcmNoXFx0b1VwZGF0ZVxcUmVhbHRpbWUtY2hhdC1kZW1vLW9wZXJhdG9yL3NyY1xcYXBwXFxtYXN0ZXJcXGNoYXQtd2luZG93XFxjaGF0LXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFzdGVyL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFBaUIsdUJBQUE7QUNFakI7O0FEQUE7RUFBZSxXQUFBO0VBQWMsY0FBQTtFQUFpQixjQUFBO0FDTTlDOztBREpBO0VBQTJCLG1CQUFBO0FDUTNCOztBRE5BO0VBQXFCLGlCQUFBO0FDVXJCOztBRFJBO0VBQ0UsMkJBQUE7QUNXRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNXRjs7QURSQTtFQU9FLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FEZkM7RUFDQywyQkFBQTtBQ2lCRjs7QURmQztFQUNDLDJCQUFBO0FDaUJGOztBRFJBO0VBQ0Usa0JBQUE7QUNXRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNXRjs7QURSQTtFQUNFLGNBQUE7QUNXRjs7QURSQTtFQUNFLGFBQUE7QUNXRjs7QURSQTtFQUNFLGlCQUFBO0FDV0Y7O0FEUkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNXRjs7QURSQTtFQUNFLGFBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jaGF0LXdpbmRvdy9jaGF0LXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IHsgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7fVxyXG5cclxuLnZlcnNpb24tYXBwIHsgY29sb3I6IGdyZXk7ICBmb250LXNpemU6IDlweDsgIG1hcmdpbjogMTZweCAwO31cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHsgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cclxuXHJcbi5zZWxlY3Rpb24tc2VjdGlvbiB7IHBhZGRpbmctdG9wOiA0MHB4O31cclxuXHJcbi5wcmluY2lwYWwtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgbWF4LWhlaWdodDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICYucmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDhhMTtcclxuIH1cclxuICYubGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBmZjk0O1xyXG4gfVxyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4udXNlci1uYW1lLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdlbmVyYWwtY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW46IDE2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5MjE7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5jaGF0LXdpbmRvd3tcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4udXNlci1uYW1lLWxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiIsIjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi52ZXJzaW9uLWFwcCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLnNlbGVjdGlvbi1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wcmluY2lwYWwtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnVzZXItbmFtZS5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDhhMTtcbn1cbi51c2VyLW5hbWUubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwZmY5NDtcbn1cblxuLnVzZXItbmFtZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5jaGF0LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZXNzYWdlLWdlbmVyYWwtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDI2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTkyMTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5jaGF0LXdpbmRvdyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi51c2VyLW5hbWUtbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/master/chat-window/chat-window.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/master/chat-window/chat-window.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db/firebase-db.service */ "./src/app/master/firebase-db/firebase-db.service.ts");
var ChatWindowComponent_1;



let ChatWindowComponent = ChatWindowComponent_1 = class ChatWindowComponent {
    constructor(firebaseDb) {
        this.firebaseDb = firebaseDb;
        this.userAuthenticate = null;
        this.userSelected = null;
        this.logoutHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messages = [];
        this.newMessage = '';
        this.subscriptionReference = null;
    }
    /**
     * Init the component.
     */
    ngOnInit() {
        this.element = document.getElementById('chat-container');
        this.loadMessages();
    }
    /**
     * Detect any changes.
     */
    ngOnChanges(changes) {
        if (changes.userSelected.currentValue !== null) {
            this.loadMessages();
            this.updateMessageUnread();
        }
    }
    /**
     * Evaluate if the message is sent by the current user.
     */
    messageSendByMe(message) {
        return this.userAuthenticate.uid === message.from;
    }
    /**
    * Load messages.
    */
    loadMessages() {
        console.log(`${ChatWindowComponent_1.name}::loadMessages`);
        if (this.userSelected !== null) {
            if (this.subscriptionReference !== null) {
                this.subscriptionReference.unsubscribe();
            }
            this.subscriptionReference = this.firebaseDb
                .getConversationByUid$(this.userSelected.uid)
                .subscribe((response) => {
                this.messages = response;
                this.updateScroll();
            });
        }
    }
    updateMessageUnread() {
        console.log(`${ChatWindowComponent_1.name}::loadMessages`);
        this.firebaseDb.updateMessageUnread(this.userSelected);
    }
    /**
     * Close session.
     */
    logout() {
        this.logoutHandler.emit();
    }
    /**
     * Send message.
     */
    sendMessage() {
        console.log(`${ChatWindowComponent_1.name}::sendMessage`);
        if (this.newMessage) {
            const newMessageToSend = {
                from: this.userAuthenticate.uid,
                name: this.userAuthenticate.name,
                date: new Date(),
                message: this.newMessage,
                to: this.userSelected.uid,
                uidChat: this.userSelected.uid
            };
            this.firebaseDb
                .setMessage(newMessageToSend)
                .then(() => {
                this.newMessage = '';
            });
        }
    }
    /**
     * Update the scroll position.
     */
    updateScroll() {
        setTimeout(() => {
            this.element.scrollTop = this.element.scrollHeight;
        }, 20);
    }
};
ChatWindowComponent.ctorParameters = () => [
    { type: _firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDBService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatWindowComponent.prototype, "userAuthenticate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatWindowComponent.prototype, "userSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatWindowComponent.prototype, "logoutHandler", void 0);
ChatWindowComponent = ChatWindowComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-window',
        template: __webpack_require__(/*! raw-loader!./chat-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/chat-window/chat-window.component.html"),
        styles: [__webpack_require__(/*! ./chat-window.component.scss */ "./src/app/master/chat-window/chat-window.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDBService"]])
], ChatWindowComponent);



/***/ }),

/***/ "./src/app/master/firebase-db/firebase-db.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/master/firebase-db/firebase-db.service.ts ***!
  \***********************************************************/
/*! exports provided: FirebaseDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseDBService", function() { return FirebaseDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
var FirebaseDBService_1;



let FirebaseDBService = FirebaseDBService_1 = class FirebaseDBService {
    constructor(db) {
        this.db = db;
    }
    /**
     * Return the message list.
     */
    getConversationByUid$(uidChat) {
        return this.db
            .collection('messages')
            .doc(uidChat)
            .collection('chats', ref => ref.orderBy('date')).valueChanges();
    }
    /**
     * Insert a new message.
     */
    setMessage(newMessage) {
        console.log(`${FirebaseDBService_1.name}::setMessage`);
        if (newMessage.uidChat === undefined || newMessage.uidChat === null) {
            newMessage.uidChat = this.createId();
        }
        return this.db
            .collection('messages')
            .doc(newMessage.uidChat)
            .collection('chats')
            .add(newMessage);
    }
    /**
     * getConversationById
     */
    getConversations$() {
        return this.db.collection('users').valueChanges();
    }
    /**
     * sendMessage
     */
    sendMessage(message) {
        console.log(`${FirebaseDBService_1.name}::sendMessage`);
        const newId = this.createId();
        message.uidChat = newId;
        this.db
            .collection('chats')
            .doc(newId)
            .set(message);
    }
    /**
     * Update message unread.
     */
    updateMessageUnread(user) {
        console.log(`${FirebaseDBService_1.name}::updateMessageUnread`);
        user.messageUnread = 0;
        this.db
            .doc(`users/${user.uid}`)
            .update(user);
    }
    /**
     * createId
     */
    createId() {
        return this.db.createId();
    }
};
FirebaseDBService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseDBService = FirebaseDBService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirebaseDBService);



/***/ }),

/***/ "./src/app/master/master.component.scss":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-drawer-container {\n  width: 300px !important;\n}\n\n.fx-margin {\n  padding: 8px;\n}\n\n.master-general-container {\n  background-color: #009688;\n}\n\n.master-content-container {\n  max-width: 1400px;\n  width: 1400px;\n  max-height: 800px;\n  height: 800px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL0M6XFxEZXNhcnJvbGxvXFxTcmNcXFJlc2VhcmNoXFx0b1VwZGF0ZVxcUmVhbHRpbWUtY2hhdC1kZW1vLW9wZXJhdG9yL3NyY1xcYXBwXFxtYXN0ZXJcXG1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFzdGVyL21hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0dBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1kcmF3ZXItY29udGFpbmVye1xyXG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZngtbWFyZ2lue1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLm1hc3Rlci1nZW5lcmFsLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xyXG59XHJcblxyXG4ubWFzdGVyLWNvbnRlbnQtY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIHdpZHRoOiAxNDAwcHg7XHJcbiAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuIiwiLmxlZnQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4uZngtbWFyZ2luIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ubWFzdGVyLWdlbmVyYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbn1cblxuLm1hc3Rlci1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICB3aWR0aDogMTQwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/firebase-auth/firebase-auth.service */ "./src/app/login/firebase-auth/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var MasterComponent_1;




let MasterComponent = MasterComponent_1 = class MasterComponent {
    constructor(firebaseAuthService, router) {
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
        this.userAuthenticate = null;
        this.openedSideBar = true;
        this.openedSideBarMode = 'side';
        this.userSelected = null;
    }
    /**
     * Inicializacion del componente.
     */
    ngOnInit() {
        this.userAuthenticate = this.firebaseAuthService.geUser();
    }
    /**
     * changeUserSelected
     */
    changeUserSelected(userSelected) {
        this.userSelected = userSelected;
    }
    /**
     * Logout.
     */
    logout() {
        console.log(`${MasterComponent_1.name}::logout`);
        this.firebaseAuthService.logout()
            .then((res) => {
            console.log(`${MasterComponent_1.name}::success`, res);
            this.goToLogin();
        })
            .catch((err) => {
            console.log(`${MasterComponent_1.name}::catch`, err);
        });
    }
    /**
     * Redirect to login view.
     */
    goToLogin() {
        this.router.navigate(['/login']);
    }
};
MasterComponent.ctorParameters = () => [
    { type: _login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MasterComponent = MasterComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master',
        template: __webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/index.js!./src/app/master/master.component.html"),
        styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/master/master.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MasterComponent);



/***/ }),

/***/ "./src/app/pipes/noimage.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noimage.pipe.ts ***!
  \***************************************/
/*! exports provided: NoimagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoimagePipe", function() { return NoimagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoimagePipe = class NoimagePipe {
    transform(images) {
        if (!images) {
            return 'assets/img/noimage.png';
        }
        if (images) {
            return images;
        }
        else {
            return 'assets/img/noimage.png';
        }
    }
};
NoimagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'noimage'
    })
], NoimagePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyConxyWARFIaU2CTdTZftRDLUKGX3CsHPE',
        authDomain: 'realtime-chat-demo.firebaseapp.com',
        databaseURL: 'https://realtime-chat-demo.firebaseio.com',
        projectId: 'realtime-chat-demo',
        storageBucket: '',
        messagingSenderId: '1006699949980',
        appId: '1:1006699949980:web:36c78baa1f4d1b46'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Desarrollo\Src\Research\toUpdate\Realtime-chat-demo-operator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map