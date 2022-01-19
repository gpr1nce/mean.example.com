"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_user_module_ts"],{

/***/ 591:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 4027);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 3765:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 591);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 4027);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 4027:
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user.page.html */ 939);
/* harmony import */ var _user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss */ 7462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 7223);






let UserPage = class UserPage {
    constructor(activatedRoute, usersService) {
        this.activatedRoute = activatedRoute;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['userId']);
            this.getUser(params['userId']);
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            console.log(response);
            this.user = response.user;
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user',
        template: _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 939:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/user.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item *ngIf=\"!user\">\n        <ion-label ion-text-center>\n          <ion-spinner></ion-spinner>\n        </ion-label>\n      </ion-item>\n    \n      <ion-card *ngIf=\"user\">\n    \n        <ion-card-header>\n          <ion-card-title>{{ user.first_name }} {{ user.last_name }}</ion-card-title>\n        </ion-card-header>\n        \n        <ion-list>\n          <ion-item>{{ user.username  }}</ion-item>\n          <ion-item>{{ user.email  }}</ion-item>\n        </ion-list>\n    \n      </ion-card>\n    \n      <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button  color=\"secondary\">\n          <ion-icon name=\"arrow-dropleft\"></ion-icon>\n        </ion-fab-button>\n    \n        <ion-fab-list side=\"start\" *ngIf=\"user\">\n    \n          <ion-fab-button color=\"light\" [routerLink]=\"['/user-edit', user._id]\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n    \n          <ion-fab-button color=\"danger\" [routerLink]=\"['/user-delete', user._id]\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button>\n    \n        </ion-fab-list>\n      </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ 7462:
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map