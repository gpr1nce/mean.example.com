"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-delete_user-delete_module_ts"],{

/***/ 7094:
/*!***********************************************************!*\
  !*** ./src/app/user-delete/user-delete-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePageRoutingModule": () => (/* binding */ UserDeletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-delete.page */ 4793);




const routes = [
    {
        path: '',
        component: _user_delete_page__WEBPACK_IMPORTED_MODULE_0__.UserDeletePage
    }
];
let UserDeletePageRoutingModule = class UserDeletePageRoutingModule {
};
UserDeletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDeletePageRoutingModule);



/***/ }),

/***/ 609:
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePageModule": () => (/* binding */ UserDeletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-delete-routing.module */ 7094);
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-delete.page */ 4793);







let UserDeletePageModule = class UserDeletePageModule {
};
UserDeletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDeletePageRoutingModule
        ],
        declarations: [_user_delete_page__WEBPACK_IMPORTED_MODULE_1__.UserDeletePage]
    })
], UserDeletePageModule);



/***/ }),

/***/ 4793:
/*!*************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePage": () => (/* binding */ UserDeletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_delete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-delete.page.html */ 3106);
/* harmony import */ var _user_delete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-delete.page.scss */ 1882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 7223);






let UserDeletePage = class UserDeletePage {
    constructor(activatedRoute, router, usersService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.getUser(params['userId']);
        });
    }
    deleteUser(id) {
        this.usersService.deleteUser(id).subscribe((response) => {
            if (response.success == true) {
                this.router.navigate(['/users']);
                // window.location.href='#/users/';
            }
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            this.user = response.user;
        });
    }
};
UserDeletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
UserDeletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-delete',
        template: _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_delete_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_delete_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserDeletePage);



/***/ }),

/***/ 3106:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user-delete/user-delete.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userDelete</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"user\">\n\n    <ion-card-header>\n      <ion-card-title color=\"danger\">\n        Are you sure you want to delete {{user.username}}?\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteUser(user._id)\">\n        Delete {{user.username}}\n      </ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ 1882:
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRlbGV0ZS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_user-delete_user-delete_module_ts.js.map