"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_users_users_module_ts"],{

/***/ 7564:
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 303);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 6538:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 7564);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 303);







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 303:
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users.page.html */ 7199);
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss */ 3243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 7223);





let UsersPage = class UsersPage {
    constructor(usersService) {
        this.usersService = usersService;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.usersService.getUsers().subscribe((response) => {
            this.users = response.users;
        });
    }
};
UsersPage.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-users',
        template: _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersPage);



/***/ }),

/***/ 7199:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/users/users.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"!users\">\n    <ion-label ion-text-center>\n      <ion-spinner></ion-spinner>\n    </ion-label>\n  </ion-item>\n\n  <ion-list *ngIf=\"users\">\n    <ion-item *ngFor=\"let user of users\" [routerLink]=\"['/user', user._id]\">\n      <ion-label>{{ user.username }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ 3243:
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_users_users_module_ts.js.map