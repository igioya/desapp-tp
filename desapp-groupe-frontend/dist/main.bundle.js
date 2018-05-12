webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n\n    \n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <img width=\"20\" height=\"20\" src=\"favicon.ico\"> <a class=\"navbar-brand\" href=\"#\">Carpnd</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\"> <!--\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>-->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ 'Agregar...' | translate }}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"nav-link\" routerLink=\"/newUser\"> {{ 'Usuario' | translate }} </a>\n          <a class=\"nav-link\" routerLink=\"/newVehicle\"> {{ 'Vehiculo' | translate }} </a>\n          <a class=\"nav-link\" routerLink=\"/newPublication\"> {{ 'Publicacion' | translate }} </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ 'Ver...' | translate }} \n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"nav-link\" routerLink=\"/users\"> {{ 'Usuarios' | translate }} </a>\n          <a class=\"nav-link\" routerLink=\"/vehicles\"> {{ 'Vehiculos' | translate }} </a>\n          <a class=\"nav-link\" routerLink=\"/publications\"> {{ 'Publicaciones' | translate }} </a>\n        </div>\n      </li>\n    </ul>\n    <!-- BUSCADOR\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n    -->\n    <div>\n        <button (click)=\"switchLanguage('en')\">en</button>\n\n        <button (click)=\"switchLanguage('es')\">es</button>\n    </div>\n  </div>\n</nav>\n<!--\n  <h1>\n    {{ title }}  - Pick and Drive\n  </h1>\n  <img width=\"300\" alt=\"Carpnd Logo\" src=\"assets/logo_carpnd.png\">\n-->\n  <router-outlet></router-outlet>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'Carpnd';
        translate.setDefaultLang('es');
    }
    AppComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publications_publications_component__ = __webpack_require__("./src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_form_vehicle_form_component__ = __webpack_require__("./src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_form_publication_form_component__ = __webpack_require__("./src/app/publication-form/publication-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_publication_service__ = __webpack_require__("./src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_form_user_form_component__ = __webpack_require__("./src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vehicles_vehicles_component__ = __webpack_require__("./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_publication_edit_publication_component__ = __webpack_require__("./src/app/edit-publication/edit-publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_user_edit_user_component__ = __webpack_require__("./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_vehicle_edit_vehicle_component__ = __webpack_require__("./src/app/edit-vehicle/edit-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__publications_publications_component__["a" /* PublicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__vehicle_form_vehicle_form_component__["a" /* VehicleFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__publication_form_publication_form_component__["a" /* PublicationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__vehicles_vehicles_component__["a" /* VehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__edit_publication_edit_publication_component__["a" /* EditPublicationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_vehicle_edit_vehicle_component__["a" /* EditVehicleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '/publications',
                        pathMatch: 'full'
                    },
                    {
                        path: 'publications',
                        component: __WEBPACK_IMPORTED_MODULE_4__publications_publications_component__["a" /* PublicationsComponent */]
                    },
                    {
                        path: 'users',
                        component: __WEBPACK_IMPORTED_MODULE_13__users_users_component__["a" /* UsersComponent */]
                    },
                    {
                        path: 'vehicles',
                        component: __WEBPACK_IMPORTED_MODULE_14__vehicles_vehicles_component__["a" /* VehiclesComponent */]
                    },
                    {
                        path: 'newUser',
                        component: __WEBPACK_IMPORTED_MODULE_12__user_form_user_form_component__["a" /* UserFormComponent */]
                    },
                    {
                        path: 'newVehicle',
                        component: __WEBPACK_IMPORTED_MODULE_5__vehicle_form_vehicle_form_component__["a" /* VehicleFormComponent */]
                    },
                    {
                        path: 'newPublication',
                        component: __WEBPACK_IMPORTED_MODULE_6__publication_form_publication_form_component__["a" /* PublicationFormComponent */]
                    },
                    {
                        path: 'editUser',
                        component: __WEBPACK_IMPORTED_MODULE_16__edit_user_edit_user_component__["a" /* EditUserComponent */]
                    },
                    {
                        path: 'editVehicle',
                        component: __WEBPACK_IMPORTED_MODULE_17__edit_vehicle_edit_vehicle_component__["a" /* EditVehicleComponent */]
                    },
                    {
                        path: 'editPublication',
                        component: __WEBPACK_IMPORTED_MODULE_15__edit_publication_edit_publication_component__["a" /* EditPublicationComponent */]
                    },
                ]),
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__["a" /* VehicleService */],
                __WEBPACK_IMPORTED_MODULE_10__services_publication_service__["a" /* PublicationService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-publication/edit-publication.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-publication/edit-publication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n<h1 translate> Editar Publicacion </h1>\n\n<form [formGroup]=\"publication\">\n\n  <div class=\"form-group\">\n    <label for=\"vehicle\"> {{ 'Vehiculo' | translate }} </label>\n    <select class=\"form-control\" id=\"vehicle\" formControlName=\"vehicle\" required >\n      <option *ngFor=\"let v of vehicles\" [value]=\"v\">{{v.model}}</option>\n    </select>\n    <div *ngIf=\"publication.get('vehicle').errors && publication.get('vehicle').dirty\">\n        <p *ngIf=\"publication.get('vehicle').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El vehiculo es requerido.' | translate }} </p>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"costPerHour\"> {{ 'Precio' | translate }} </label>\n    <input type=\"number\"  min=\"50\" class=\"form-control\" id=\"costPerHour\" formControlName=\"costPerHour\" required >\n    <div *ngIf=\"publication.get('costPerHour').errors && publication.get('costPerHour').dirty\">\n        <p *ngIf=\"publication.get('costPerHour').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El costo es requerido.' | translate }} </p>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"retireAddress\"> {{ 'Direccion de retiro' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"retireAddress\" formControlName=\"retireAddress\" required >\n    <div *ngIf=\"publication.get('retireAddress').errors && publication.get('retireAddress').dirty\">\n        <p *ngIf=\"publication.get('retireAddress').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La direccion de retiro es requerida.' | translate }} </p>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"returnAddress\"> {{ 'Direccion de devolucion' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"returnAddress\" formControlName=\"returnAddress\" required >\n    <div *ngIf=\"publication.get('returnAddress').errors && publication.get('returnAddress').dirty\">\n        <p *ngIf=\"publication.get('returnAddress').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La direccion de devolucion es requerida.' | translate }} </p>\n        </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"telephone\"> {{ 'Telefono' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"telephone\" formControlName=\"telephone\" required >\n    <div *ngIf=\"publication.get('telephone').errors && publication.get('telephone').dirty\">\n        <p *ngIf=\"publication.get('telephone').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El telefono es requerido.' | translate }} </p>\n        <p *ngIf=\"publication.get('telephone').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 10.' | translate }} </p>\n        <p *ngIf=\"publication.get('telephone').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 6.' | translate }} </p>\n      </div> \n  </div>\n<div>\n  <label for=\"owner\"> {{ 'Dueño' | translate }} </label>\n  <select class=\"form-control\" id=\"owner\" formControlName=\"owner\" required >\n    <option *ngFor=\"let owner of users\" [value]=\"owner\">{{owner.name}} {{owner.surname}}</option>\n  </select>\n  <div *ngIf=\"publication.get('owner').errors && publication.get('owner').dirty\">\n      <p *ngIf=\"publication.get('owner').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El dueño es requerido.' | translate }} </p>\n  </div>\n</div>\n\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n  </div>\n  <div class=\"col-md-6\"> \n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!publication.valid\" (click)=\"updatePublication()\"> {{ 'Guardar' | translate }} </button>\n  </div>\n  </div>\n</form> \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-publication/edit-publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_data__ = __webpack_require__("./src/model/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_vehicle__ = __webpack_require__("./src/model/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user__ = __webpack_require__("./src/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_publication_service__ = __webpack_require__("./src/app/services/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPublicationComponent = /** @class */ (function () {
    function EditPublicationComponent(formBuilder, publicationService, router) {
        this.formBuilder = formBuilder;
        this.publicationService = publicationService;
        this.router = router;
        this.vehicle = Object.keys(__WEBPACK_IMPORTED_MODULE_4__model_vehicle__["a" /* Vehicle */]);
        this.vehicles = __WEBPACK_IMPORTED_MODULE_3__model_data__["c" /* VEHICLES */].slice(this.vehicle.length / 2); //cambiar por getAll de vehiculos
        this.owner = Object.keys(__WEBPACK_IMPORTED_MODULE_5__model_user__["a" /* User */]);
        this.users = __WEBPACK_IMPORTED_MODULE_3__model_data__["b" /* USERS */].slice(this.owner.length / 2); //cambiar por getAll de users
        this.publication = this.formBuilder.group({
            //id : new FormControl('p.id'), //VER SI ES NECESARIO ACA
            vehicle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.vehicle', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            retireAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.retireAddress', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            returnAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.returnAddress', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            telephone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.telephone', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(10)]),
            costPerHour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.costPerHour', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            owner: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('p.owner', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
        });
        //this.p = ; // VER COMO RECIBE EL PARAMETRO
    }
    EditPublicationComponent.prototype.newPublication = function () {
        console.log(this.publication);
        this.publicationService.updatePublication(this.p.id, this.publication);
        this.router.navigate(['publications']);
    };
    EditPublicationComponent.prototype.cancel = function () {
        this.router.navigate(['publications']);
    };
    EditPublicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-publication',
            template: __webpack_require__("./src/app/edit-publication/edit-publication.component.html"),
            styles: [__webpack_require__("./src/app/edit-publication/edit-publication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], EditPublicationComponent);
    return EditPublicationComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <h1 translate> Editar Usuario </h1>\n\n<form [formGroup]=\"user\">\n\n  <div class=\"form-group\">\n    <label for=\"cuil\"> CUIL </label>\n    <input type=\"text\" class=\"form-control\" id=\"cuil\" formControlName=\"cuil\" required >\n    <div *ngIf=\"user.get('cuil').errors && user.get('cuil').dirty\">\n        <p *ngIf=\"user.get('cuil').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El CUIL es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('cuil').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 11.' | translate }} </p>\n        <p *ngIf=\"user.get('cuil').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 11.' | translate }} </p>\n      </div>  \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\"> {{ 'Nombre' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required >\n    <div *ngIf=\"user.get('name').errors && user.get('name').dirty\">\n        <p *ngIf=\"user.get('name').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El nombre es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('name').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 50.' | translate }} </p>\n        <p *ngIf=\"user.get('name').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 4.' | translate }} </p>\n    </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"surname\"> {{ 'Apellido' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"surname\" formControlName=\"surname\" required >\n    <div *ngIf=\"user.get('surname').errors && user.get('surname').dirty\">\n        <p *ngIf=\"user.get('surname').hasError('required')\" style=\"white-space: normal; color:red\">{{ 'El apellido es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('surname').hasError('maxlength')\" style=\"white-space: normal; color:red\">{{ 'El maximo de caracteres permitidos es 50.' | translate }} </p>\n        <p *ngIf=\"user.get('surname').hasError('minlength')\" style=\"white-space: normal; color:red\">{{ 'El minimo de caracteres permitidos es 4.' | translate }} </p>\n      </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"address\"> {{ 'Direccion' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"address\" formControlName=\"address\" required >\n    <div *ngIf=\"user.get('address').errors && user.get('address').dirty\">\n        <p *ngIf=\"user.get('address').hasError('required')\" style=\"white-space: normal; color:red\">{{ 'La direccion es requerida.' | translate }} </p>\n        <p *ngIf=\"user.get('address').hasError('maxlength')\" style=\"white-space: normal; color:red\">{{ 'El maximo de caracteres permitidos es 11.' | translate }} </p>\n        <p *ngIf=\"user.get('address').hasError('minlength')\" style=\"white-space: normal; color:red\">{{ 'El minimo de caracteres permitidos es 11.' | translate }} </p>\n      </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\"> Email </label>\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" required >\n    <div *ngIf=\"user.get('email').errors && user.get('email').dirty\">\n        <p *ngIf=\"user.get('email').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El email es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('email').hasError('email')\" style=\"white-space: normal; color:red\"> {{ 'El email indicado no es valido.' | translate }} </p></div> \n  </div>\n\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n  </div>\n  <div class=\"col-md-6\"> \n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!user.valid\" (click)=\"updateUser()\"> {{ 'Guardar' | translate }} </button>\n  </div>\n  </div>\n\n</form> \n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.user = this.formBuilder.group({
            //id : new FormControl('u.id'), //VER SI ES NECESARIO ACA
            cuil: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('u.cuil', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(11)]),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('u.name', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]),
            surname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('u.surname', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('u.address', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('u.email', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
        });
        //this.u = ; // VER COMO RECIBE EL PARAMETRO
    }
    EditUserComponent.prototype.updateUser = function () {
        console.log(this.user);
        this.userService.updateUser(this.u.id, this.user);
        this.router.navigate(['users']);
    };
    EditUserComponent.prototype.cancel = function () {
        this.router.navigate(['users']);
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-vehicle/edit-vehicle.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-vehicle/edit-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n  <h1 translate>Editar Vehiculo</h1>\n  \n  <form [formGroup]=\"vehicle\">\n\n    <div class=\"form-group\">\n      <label for=\"model\"> {{ 'Modelo' | translate }} </label>\n      <input type=\"text\" class=\"form-control\" id=\"model\" formControlName=\"model\" required >\n      <div *ngIf=\"vehicle.get('model').errors && vehicle.get('model').dirty\">\n          <p *ngIf=\"vehicle.get('model').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El modelo es requerido.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"type\"> {{ 'Tipo de vehiculo' | translate }} </label>\n      <select class=\"form-control\" id=\"type\" formControlName=\"type\" required >\n        <option *ngFor=\"let t of types\" [value]=\"t\">{{t}}</option>\n      </select>\n      <div *ngIf=\"vehicle.get('type').errors && vehicle.get('type').dirty\">\n          <p *ngIf=\"vehicle.get('type').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El tipo de vehiculo es requerido.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"numberOfPassengers\">{{ 'Capacidad de pasajeros' | translate }} </label>\n      <input type=\"number\" min=\"0\" max=50 class=\"form-control\" id=\"numberOfPassengers\" formControlName=\"numberOfPassengers\" required >\n      <div *ngIf=\"vehicle.get('numberOfPassengers').errors && vehicle.get('numberOfPassengers').dirty\">\n          <p *ngIf=\"vehicle.get('numberOfPassengers').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La capacidad de pasajeros es requerida.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\"> {{ 'Descripcion' | translate }} </label>\n      <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required >\n      <div *ngIf=\"vehicle.get('description').errors && vehicle.get('description').dirty\">\n          <p *ngIf=\"vehicle.get('description').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La descripcion es requerida.' | translate }} </p>\n          <p *ngIf=\"vehicle.get('description').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 200.' | translate }} </p>\n          <p *ngIf=\"vehicle.get('description').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 30.' | translate }} </p>\n        </div> \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"photo\"> {{ 'URL foto' | translate }} </label>\n      <input type=\"textarea\" class=\"form-control\" id=\"photo\" formControlName=\"photo\" required >\n      <div *ngIf=\"vehicle.get('photo').errors && vehicle.get('photo').dirty\">\n          <p *ngIf=\"vehicle.get('photo').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La imagen es requerida.' | translate }} </p>\n      </div>\n    </div>\n\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n  </div>\n  <div class=\"col-md-6\"> \n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!vehicle.valid\" (click)=\"updateVehicle()\"> {{ 'Guardar' | translate }} </button>\n  </div>\n  </div>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-vehicle/edit-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_vehicle__ = __webpack_require__("./src/model/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVehicleComponent = /** @class */ (function () {
    function EditVehicleComponent(formBuilder, vehicleService, router) {
        this.formBuilder = formBuilder;
        this.vehicleService = vehicleService;
        this.router = router;
        this.type = Object.keys(__WEBPACK_IMPORTED_MODULE_3__model_vehicle__["b" /* VehicleType */]);
        this.types = this.type.slice(this.type.length / 2);
        this.vehicle = this.formBuilder.group({
            //id : new FormControl('v.id'), //VER SI ES NECESARIO ACA
            model: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('v.model', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('v.type', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            numberOfPassengers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('v.numberOfPassengers', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('v.description', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(200)]),
            photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('v.photo', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
        //this.v = ; // VER COMO RECIBE EL PARAMETRO
    }
    EditVehicleComponent.prototype.updateVehicle = function () {
        console.log(this.vehicle);
        this.vehicleService.updateVehicle(this.v.id, this.vehicle);
        this.router.navigate(['vehicles']);
    };
    EditVehicleComponent.prototype.cancel = function () {
        this.router.navigate(['vehicles']);
    };
    EditVehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-vehicle',
            template: __webpack_require__("./src/app/edit-vehicle/edit-vehicle.component.html"),
            styles: [__webpack_require__("./src/app/edit-vehicle/edit-vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], EditVehicleComponent);
    return EditVehicleComponent;
}());



/***/ }),

/***/ "./src/app/publication-form/publication-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publication-form/publication-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n  <h1 translate> Nueva Publicacion </h1>\n\n  <form [formGroup]=\"publication\">\n\n    <div class=\"form-group\">\n      <label for=\"vehicle\"> {{ 'Vehiculo' | translate }} </label>\n      <select class=\"form-control\" id=\"vehicle\" formControlName=\"vehicle\" required >\n        <option *ngFor=\"let v of vehicles\" [value]=\"v\">{{v.model}}</option>\n      </select>\n      <div *ngIf=\"publication.get('vehicle').errors && publication.get('vehicle').dirty\">\n          <p *ngIf=\"publication.get('vehicle').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El vehiculo es requerido.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"costPerHour\"> {{ 'Precio' | translate }} </label>\n      <input type=\"number\"  min=\"50\" class=\"form-control\" id=\"costPerHour\" formControlName=\"costPerHour\" required >\n      <div *ngIf=\"publication.get('costPerHour').errors && publication.get('costPerHour').dirty\">\n          <p *ngIf=\"publication.get('costPerHour').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El costo es requerido.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"retireAddress\"> {{ 'Direccion de retiro' | translate }} </label>\n      <input type=\"text\" class=\"form-control\" id=\"retireAddress\" formControlName=\"retireAddress\" required >\n      <div *ngIf=\"publication.get('retireAddress').errors && publication.get('retireAddress').dirty\">\n          <p *ngIf=\"publication.get('retireAddress').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La direccion de retiro es requerida.' | translate }} </p>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"returnAddress\"> {{ 'Direccion de devolucion' | translate }} </label>\n      <input type=\"text\" class=\"form-control\" id=\"returnAddress\" formControlName=\"returnAddress\" required >\n      <div *ngIf=\"publication.get('returnAddress').errors && publication.get('returnAddress').dirty\">\n          <p *ngIf=\"publication.get('returnAddress').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La direccion de devolucion es requerida.' | translate }} </p>\n          </div> \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"telephone\"> {{ 'Telefono' | translate }} </label>\n      <input type=\"text\" class=\"form-control\" id=\"telephone\" formControlName=\"telephone\" required >\n      <div *ngIf=\"publication.get('telephone').errors && publication.get('telephone').dirty\">\n          <p *ngIf=\"publication.get('telephone').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El telefono es requerido.' | translate }} </p>\n          <p *ngIf=\"publication.get('telephone').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 10.' | translate }} </p>\n          <p *ngIf=\"publication.get('telephone').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 6.' | translate }} </p>\n        </div> \n    </div>\n  <div>\n    <label for=\"owner\"> {{ 'Dueño' | translate }} </label>\n    <select class=\"form-control\" id=\"owner\" formControlName=\"owner\" required >\n      <option *ngFor=\"let owner of users\" [value]=\"owner\">{{owner.name}} {{owner.surname}}</option>\n    </select>\n    <div *ngIf=\"publication.get('owner').errors && publication.get('owner').dirty\">\n        <p *ngIf=\"publication.get('owner').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El dueño es requerido.' | translate }} </p>\n    </div>\n  </div>\n \n    <div class=\"row\">\n    <div class=\"col-md-6\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n    </div>\n    <div class=\"col-md-6\"> \n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!publication.valid\" (click)=\"newPublication()\"> {{ 'Publicar' | translate }} </button>\n    </div>\n    </div>\n  </form> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/publication-form/publication-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_data__ = __webpack_require__("./src/model/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_vehicle__ = __webpack_require__("./src/model/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user__ = __webpack_require__("./src/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_publication_service__ = __webpack_require__("./src/app/services/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PublicationFormComponent = /** @class */ (function () {
    function PublicationFormComponent(formBuilder, publicationService, router) {
        this.formBuilder = formBuilder;
        this.publicationService = publicationService;
        this.router = router;
        this.vehicle = Object.keys(__WEBPACK_IMPORTED_MODULE_4__model_vehicle__["a" /* Vehicle */]);
        this.vehicles = __WEBPACK_IMPORTED_MODULE_3__model_data__["c" /* VEHICLES */].slice(this.vehicle.length / 2); //cambiar por getAll de vehiculos
        this.owner = Object.keys(__WEBPACK_IMPORTED_MODULE_5__model_user__["a" /* User */]);
        this.users = __WEBPACK_IMPORTED_MODULE_3__model_data__["b" /* USERS */].slice(this.owner.length / 2); //cambiar por getAll de users
        this.publication = this.formBuilder.group({
            vehicle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            retireAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            returnAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            telephone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(10)]),
            costPerHour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            owner: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
        });
    }
    PublicationFormComponent.prototype.newPublication = function () {
        console.log(this.publication);
        this.publicationService.newPublication(this.publication);
        this.router.navigate(['']);
    };
    PublicationFormComponent.prototype.cancel = function () {
        this.router.navigate(['publications']);
    };
    PublicationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publication-form',
            template: __webpack_require__("./src/app/publication-form/publication-form.component.html"),
            styles: [__webpack_require__("./src/app/publication-form/publication-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], PublicationFormComponent);
    return PublicationFormComponent;
}());



/***/ }),

/***/ "./src/app/publications/publications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 translate class=\"title\">Publicaciones</h3>\n</div>\n<ul class=\"list-inline\" >\n  <div class=\"row\">\n    <li class=\"list-group-item\" *ngFor=\"let publication of publications\">\n      <div class=\"card\">\n\t       <img class=\"card-img-top\" src=\"{{publication.vehicle.photo}}\" alt=\"Card image cap\" height=\"150px\" width=\"250px\">\n            <div class=\"card-body\">\n              <p class=\"card-text\"><small class=\"text-muted\">{{publication.owner.name}} {{publication.owner.surname}}</small></p>\n              <h4 class=\"card-title\">${{publication.costPerHour}} {{ 'por hora' | translate }} </h4>\n              <p class=\"card-text\"> {{publication.vehicle.description}}</p>\n              <p class=\"card-text\"><small class=\"text-muted\">{{publication.retireAddress}}</small></p>\n            </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-danger\" (click)=\"deletePublication(publication.id)\" > {{ 'Eliminar' | translate }} </a>\n            </div>\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-success\" (click)=\"editPublication(publication)\" > {{ 'Editar' | translate }} </a>\n            </div>\n          </div>\n      </div>\n    </li>\n  </div>\n</ul>"

/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_data__ = __webpack_require__("./src/model/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_publication_service__ = __webpack_require__("./src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent(publicationService, router) {
        this.publicationService = publicationService;
        this.router = router;
        this.publications = __WEBPACK_IMPORTED_MODULE_1__model_data__["a" /* PUBLICATIONS */];
    }
    PublicationsComponent.prototype.ngOnInit = function () {
        //this.getPublications();
    };
    PublicationsComponent.prototype.editPublication = function (publication) {
        //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
        this.router.navigate(['editPublication']);
    };
    PublicationsComponent.prototype.deletePublication = function (id) {
        this.publicationService.deletePublication(id);
    };
    PublicationsComponent.prototype.getPublications = function () {
        var _this = this;
        this.publicationService.getAllPublications().subscribe(function (data) {
            _this.publications = data;
            console.log(data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading publications'); });
    };
    PublicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publications',
            template: __webpack_require__("./src/app/publications/publications.component.html"),
            styles: [__webpack_require__("./src/app/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/services/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationService = /** @class */ (function () {
    function PublicationService(http) {
        this.http = http;
        this.url = '/rest/publications/';
    }
    PublicationService.prototype.getAllPublications = function () {
        return this.http.get(this.url);
    };
    PublicationService.prototype.getPublication = function (id) {
        return this.http.get(this.url + id);
    };
    PublicationService.prototype.newPublication = function (publication) {
        return this.http.post(this.url + 'new', publication);
    };
    PublicationService.prototype.updatePublication = function (id, publication) {
        return this.http.put(this.url + 'edit/' + id, publication);
    };
    PublicationService.prototype.deletePublication = function (id) {
        return this.http.delete(this.url + id);
    };
    PublicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = '/rest/users/';
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.url + id);
    };
    UserService.prototype.newUser = function (user) {
        return this.http.post(this.url + 'new', user);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.url + 'edit/' + id, user);
    };
    UserService.prototype.deleteUser = function (id, user) {
        return this.http.delete(this.url + id, user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
        this.url = '/rest/vehicles/';
    }
    VehicleService.prototype.getAllVehicles = function () {
        return this.http.get(this.url);
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.http.get(this.url + id);
    };
    VehicleService.prototype.newVehicle = function (vehicle) {
        console.log(vehicle);
        return this.http.post(this.url + 'new', vehicle);
    };
    VehicleService.prototype.updateVehicle = function (id, vehicle) {
        return this.http.put(this.url + 'edit/', vehicle);
    };
    VehicleService.prototype.deleteVehicle = function (id) {
        return this.http.delete(this.url + id);
    };
    VehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <h1 translate> Registrarse </h1>\n\n<form [formGroup]=\"user\">\n\n  <div class=\"form-group\">\n    <label for=\"cuil\"> CUIL </label>\n    <input type=\"text\" class=\"form-control\" id=\"cuil\" formControlName=\"cuil\" required >\n    <div *ngIf=\"user.get('cuil').errors && user.get('cuil').dirty\">\n        <p *ngIf=\"user.get('cuil').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El CUIL es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('cuil').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 11.' | translate }} </p>\n        <p *ngIf=\"user.get('cuil').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 11.' | translate }} </p>\n      </div>  \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\"> {{ 'Nombre' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required >\n    <div *ngIf=\"user.get('name').errors && user.get('name').dirty\">\n        <p *ngIf=\"user.get('name').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El nombre es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('name').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 50.' | translate }} </p>\n        <p *ngIf=\"user.get('name').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 4.' | translate }} </p>\n    </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"surname\"> {{ 'Apellido' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"surname\" formControlName=\"surname\" required >\n    <div *ngIf=\"user.get('surname').errors && user.get('surname').dirty\">\n        <p *ngIf=\"user.get('surname').hasError('required')\" style=\"white-space: normal; color:red\">{{ 'El apellido es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('surname').hasError('maxlength')\" style=\"white-space: normal; color:red\">{{ 'El maximo de caracteres permitidos es 50.' | translate }} </p>\n        <p *ngIf=\"user.get('surname').hasError('minlength')\" style=\"white-space: normal; color:red\">{{ 'El minimo de caracteres permitidos es 4.' | translate }} </p>\n      </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"address\"> {{ 'Direccion' | translate }} </label>\n    <input type=\"text\" class=\"form-control\" id=\"address\" formControlName=\"address\" required >\n    <div *ngIf=\"user.get('address').errors && user.get('address').dirty\">\n        <p *ngIf=\"user.get('address').hasError('required')\" style=\"white-space: normal; color:red\">{{ 'La direccion es requerida.' | translate }} </p>\n        <p *ngIf=\"user.get('address').hasError('maxlength')\" style=\"white-space: normal; color:red\">{{ 'El maximo de caracteres permitidos es 11.' | translate }} </p>\n        <p *ngIf=\"user.get('address').hasError('minlength')\" style=\"white-space: normal; color:red\">{{ 'El minimo de caracteres permitidos es 11.' | translate }} </p>\n      </div> \n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\"> Email </label>\n    <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" required >\n    <div *ngIf=\"user.get('email').errors && user.get('email').dirty\">\n        <p *ngIf=\"user.get('email').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El email es requerido.' | translate }} </p>\n        <p *ngIf=\"user.get('email').hasError('email')\" style=\"white-space: normal; color:red\"> {{ 'El email indicado no es valido.' | translate }} </p></div> \n  </div>\n\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n  </div>\n  <div class=\"col-md-6\"> \n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!user.valid\" (click)=\"newUser()\"> {{ 'Registrar' | translate }} </button>\n  </div>\n  </div>\n\n</form> \n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.user = this.formBuilder.group({
            cuil: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(11)]),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]),
            surname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
        });
    }
    UserFormComponent.prototype.newUser = function () {
        console.log(this.user);
        this.userService.newUser(this.user);
        this.router.navigate(['']);
    };
    UserFormComponent.prototype.cancel = function () {
        this.router.navigate(['users']);
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-form',
            template: __webpack_require__("./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__("./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 translate class=\"title\">Usuarios</h3>\n</div>\n<div class=\"user-table\">\n  <table class=\"table\">\n    <thead>\n      <th> ID </th>\n      <th> CUIL </th>\n      <th> {{ 'Nombre' | translate }} </th>\n      <th> {{ 'Apellido' | translate }} </th>\n      <th> {{ 'Direccion' | translate }} </th>\n      <th> Email </th>\n    </thead>\n    <tbody *ngIf=\"users\">\n      <tr *ngFor=\"let user of users\">\n        <td> {{user.id}} </td>\n        <td> {{user.cuil}} </td>\n        <td> {{user.name}} </td>\n        <td> {{user.surname}} </td>\n        <td> {{user.address}} </td>\n        <td> {{user.email}} </td>\n        <td> <a class=\"btn btn-success\" (click)=\"editUser(user)\" > {{ 'Editar' | translate }} </a> </td>\n      </tr>    \n    </tbody>\n  </table>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_data__ = __webpack_require__("./src/model/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.users = __WEBPACK_IMPORTED_MODULE_2__model_data__["b" /* USERS */];
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading vehicles'); });
    };
    UsersComponent.prototype.editUser = function (user) {
        //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
        this.router.navigate(['editUser']);
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n    <h1 translate>Cargar Vehiculo</h1>\n    \n    <form [formGroup]=\"vehicle\">\n\n      <div class=\"form-group\">\n        <label for=\"model\"> {{ 'Modelo' | translate }} </label>\n        <input type=\"text\" class=\"form-control\" id=\"model\" formControlName=\"model\" required >\n        <div *ngIf=\"vehicle.get('model').errors && vehicle.get('model').dirty\">\n            <p *ngIf=\"vehicle.get('model').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El modelo es requerido.' | translate }} </p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\"> {{ 'Tipo de vehiculo' | translate }} </label>\n        <select class=\"form-control\" id=\"type\" formControlName=\"type\" required >\n          <option *ngFor=\"let t of types\" [value]=\"t\">{{t}}</option>\n        </select>\n        <div *ngIf=\"vehicle.get('type').errors && vehicle.get('type').dirty\">\n            <p *ngIf=\"vehicle.get('type').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'El tipo de vehiculo es requerido.' | translate }} </p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"numberOfPassengers\">{{ 'Capacidad de pasajeros' | translate }} </label>\n        <input type=\"number\" min=\"0\" max=50 class=\"form-control\" id=\"numberOfPassengers\" formControlName=\"numberOfPassengers\" required >\n        <div *ngIf=\"vehicle.get('numberOfPassengers').errors && vehicle.get('numberOfPassengers').dirty\">\n            <p *ngIf=\"vehicle.get('numberOfPassengers').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La capacidad de pasajeros es requerida.' | translate }} </p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\"> {{ 'Descripcion' | translate }} </label>\n        <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required >\n        <div *ngIf=\"vehicle.get('description').errors && vehicle.get('description').dirty\">\n            <p *ngIf=\"vehicle.get('description').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La descripcion es requerida.' | translate }} </p>\n            <p *ngIf=\"vehicle.get('description').hasError('maxlength')\" style=\"white-space: normal; color:red\"> {{ 'El maximo de caracteres permitidos es 200.' | translate }} </p>\n            <p *ngIf=\"vehicle.get('description').hasError('minlength')\" style=\"white-space: normal; color:red\"> {{ 'El minimo de caracteres permitidos es 30.' | translate }} </p>\n          </div> \n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"photo\"> {{ 'URL foto' | translate }} </label>\n        <input type=\"textarea\" class=\"form-control\" id=\"photo\" formControlName=\"photo\" required >\n        <div *ngIf=\"vehicle.get('photo').errors && vehicle.get('photo').dirty\">\n            <p *ngIf=\"vehicle.get('photo').hasError('required')\" style=\"white-space: normal; color:red\"> {{ 'La imagen es requerida.' | translate }} </p>\n        </div>\n      </div>\n\n    <div class=\"row\">\n    <div class=\"col-md-6\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\"> {{ 'Cancelar' | translate }} </button>\n    </div>\n    <div class=\"col-md-6\"> \n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!vehicle.valid\" (click)=\"newVehicle()\"> {{ 'Guardar' | translate }} </button>\n    </div>\n    </div>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_vehicle__ = __webpack_require__("./src/model/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleFormComponent = /** @class */ (function () {
    function VehicleFormComponent(formBuilder, vehicleService, router) {
        this.formBuilder = formBuilder;
        this.vehicleService = vehicleService;
        this.router = router;
        this.type = Object.keys(__WEBPACK_IMPORTED_MODULE_3__model_vehicle__["b" /* VehicleType */]);
        this.types = this.type.slice(this.type.length / 2);
        this.vehicle = this.formBuilder.group({
            model: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            numberOfPassengers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(200)]),
            photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    }
    VehicleFormComponent.prototype.newVehicle = function () {
        console.log(this.vehicle);
        this.vehicleService.newVehicle(this.vehicle);
        this.router.navigate(['']);
    };
    VehicleFormComponent.prototype.cancel = function () {
        this.router.navigate(['vehicles']);
    };
    VehicleFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-form',
            template: __webpack_require__("./src/app/vehicle-form/vehicle-form.component.html"),
            styles: [__webpack_require__("./src/app/vehicle-form/vehicle-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], VehicleFormComponent);
    return VehicleFormComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 translate class=\"title\">Vehiculos</h3>\n</div>\n<ul>\n    <div>\n      <li class=\"list-group-item\" *ngFor=\"let vehicle of vehicles\">\n          <div class=\"row\">\n          <div class=\"col-md-6\">\n           <img src=\"{{vehicle.photo}}\" alt=\"Card image cap\" height=\"200px\" width=\"200px\">\n          </div>\n           <div class=\"col-md-6\">\n                <h4 class=\"card-title\"> {{ 'Modelo' | translate }}: {{vehicle.model}}</h4>\n                <p class=\"card-text\"> {{ 'Descripcion' | translate }}: {{vehicle.description}}</p>\n                <p class=\"card-text\"><small class=\"text-muted\"> {{ 'Capacidad de pasajeros' | translate }}: {{vehicle.numberOfPassengers}}</small></p>     \n                <a class=\"btn btn-danger\" (click)=\"deleteVehicle(vehicle.id)\" > {{ 'Eliminar' | translate }} </a>\n                <a class=\"btn btn-success\" (click)=\"editVehicle(vehicle)\" > {{ 'Editar' | translate }} </a>\n            </div>\n          </div>\n      </li>\n    </div>\n  </ul>"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_data__ = __webpack_require__("./src/model/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__ = __webpack_require__("./src/app/services/vehicle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.vehicles = __WEBPACK_IMPORTED_MODULE_2__model_data__["c" /* VEHICLES */];
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        //this.getAllVehicles();
    };
    VehiclesComponent.prototype.editVehicle = function (vehicle) {
        //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
        this.router.navigate(['editVehicle']);
    };
    VehiclesComponent.prototype.deleteVehicle = function (id) {
        this.vehicleService.deleteVehicle(id);
    };
    VehiclesComponent.prototype.getAllVehicles = function () {
        var _this = this;
        this.vehicleService.getAllVehicles().subscribe(function (data) {
            _this.vehicles = data;
            console.log(data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading vehicles'); });
    };
    VehiclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicles',
            template: __webpack_require__("./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__("./src/app/vehicles/vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLICATIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicle__ = __webpack_require__("./src/model/vehicle.ts");

var USERS = [
    { id: 11, cuil: '20111111119', name: 'Jose', surname: 'Ioia', address: 'Uriburu 500, Bernal', email: 'ioia@gmail.com' },
    { id: 12, cuil: '20222222228', name: 'Luis', surname: 'Bombasto', address: 'Saenz Peña 600, Bernal', email: 'bombasto@outlook.com' },
];
var VEHICLES = [
    { id: 11, model: 'Fiat 500', type: __WEBPACK_IMPORTED_MODULE_0__vehicle__["b" /* VehicleType */].Car, numberOfPassengers: 5, description: 'color rosa', photo: 'https://cdn.pixabay.com/photo/2018/04/04/08/04/car-3289114__340.jpg' },
    { id: 12, model: 'Mustang', type: __WEBPACK_IMPORTED_MODULE_0__vehicle__["b" /* VehicleType */].Car, numberOfPassengers: 4, description: 'Deportivo de lujo', photo: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png' },
    { id: 13, model: 'Camion', type: __WEBPACK_IMPORTED_MODULE_0__vehicle__["b" /* VehicleType */].Truck, numberOfPassengers: 3, description: 'Camion para transporte', photo: 'https://cdn.pixabay.com/photo/2018/03/08/14/58/usa-3208827__340.jpg' },
    { id: 14, model: 'Honda Crf100f', type: __WEBPACK_IMPORTED_MODULE_0__vehicle__["b" /* VehicleType */].Motorbike, numberOfPassengers: 2, description: 'Moto ', photo: 'https://cdn.pixabay.com/photo/2018/04/03/08/15/motorbike-3286222__340.jpg' }
];
var PUBLICATIONS = [
    { id: 11, vehicle: VEHICLES[0], retireAddress: 'Uriburu 500, Bernal', returnAddress: 'Uriburu 500, Bernal', telephone: '42243131', owner: USERS[0], costPerHour: 100 },
    { id: 12, vehicle: VEHICLES[1], retireAddress: 'Saenz Peña 600, Bernal', returnAddress: 'Saenz Peña 600, Bernal', telephone: '42244141', owner: USERS[1], costPerHour: 200 },
    { id: 13, vehicle: VEHICLES[2], retireAddress: 'Uriburu 500, Bernal', returnAddress: 'Uriburu 500, Bernal', telephone: '42245151', owner: USERS[0], costPerHour: 300 },
    { id: 14, vehicle: VEHICLES[3], retireAddress: 'Saenz Peña 600, Bernal', returnAddress: 'Saenz Peña 600, Bernal', telephone: '42246161', owner: USERS[1], costPerHour: 50 }
];


/***/ }),

/***/ "./src/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(cuil, name, surname, address, email, id) {
        this.id = id;
        this.cuil = cuil;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/model/vehicle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VehicleType; });
var Vehicle = /** @class */ (function () {
    function Vehicle(model, type, numberOfPassengers, description, photo, id) {
        this.id = id;
        this.model = model;
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
        this.description = description;
        this.photo = photo;
    }
    return Vehicle;
}());

var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Motorbike"] = 0] = "Motorbike";
    VehicleType[VehicleType["Car"] = 1] = "Car";
    VehicleType[VehicleType["Truck"] = 2] = "Truck";
})(VehicleType || (VehicleType = {}));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map