"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-edit_user-edit_module_ts"],{

/***/ 8184:
/*!*******************************************************!*\
  !*** ./src/app/user-edit/user-edit-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPageRoutingModule": () => (/* binding */ UserEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit.page */ 4512);




const routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_0__.UserEditPage
    }
];
let UserEditPageRoutingModule = class UserEditPageRoutingModule {
};
UserEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserEditPageRoutingModule);



/***/ }),

/***/ 2427:
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPageModule": () => (/* binding */ UserEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit-routing.module */ 8184);
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.page */ 4512);







let UserEditPageModule = class UserEditPageModule {
};
UserEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserEditPageRoutingModule
        ],
        declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_1__.UserEditPage]
    })
], UserEditPageModule);



/***/ }),

/***/ 4512:
/*!*********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPage": () => (/* binding */ UserEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-edit.page.html */ 3278);
/* harmony import */ var _user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.page.scss */ 9279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 7223);






let UserEditPage = class UserEditPage {
    constructor(activatedRoute, usersService, router) {
        this.activatedRoute = activatedRoute;
        this.usersService = usersService;
        this.router = router;
        this.errors = {};
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getUser(params['userId']);
        });
    }
    response(response) {
        if (response.success === false) {
            if (response.errors.name == 'MissingUsernameError') {
                this.errors.username = 'Please enter a username';
            }
            if (response.errors.name == 'UserExistsError') {
                this.errors.username = 'A user with the given username is already registered';
            }
            if (response.errors.email) {
                this.errors.email = response.errors.errors.email.message;
            }
        }
        if (response.success === true) {
            this.router.navigate(['/users']);
        }
    }
    onSubmit() {
        this.usersService.updateUser(this.user).subscribe((response) => {
            this.response(response);
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            console.log(response);
            this.user = response.user;
        });
    }
};
UserEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-edit',
        template: _home_dev_ionicUsers_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserEditPage);



/***/ }),

/***/ 3278:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user-edit/user-edit.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userEdit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!user\">\n  <ion-label ion-text-center>\n    <ion-spinner></ion-spinner>\n  </ion-label>\n</ion-content>\n\n<ion-content *ngIf=\"user\">\n  \n  <ion-input [(ngModel)]=\"user._id\" name=\"_id\" type=\"hidden\"></ion-input>\n  \n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n    <div *ngIf=\"errors.email\"> {{ errors.email }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"></ion-input>\n    <div *ngIf=\"errors.username\"> {{ errors.username }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>\n</ion-content>");

/***/ }),

/***/ 9279:
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_user-edit_user-edit_module_ts.js.map