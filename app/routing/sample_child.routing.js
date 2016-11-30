"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const hero_list_component_1 = require('../hero_list.component');
const home_component_1 = require('../home.component');
const appChildRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'heros', component: hero_list_component_1.HeroListComponent }
];
let AppChildRouteModule = class AppChildRouteModule {
};
AppChildRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(appChildRoutes)
        ],
        declarations: [
            hero_list_component_1.HeroListComponent,
            home_component_1.HomeComponent,
        ],
        exports: [
            router_1.RouterModule
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppChildRouteModule);
exports.AppChildRouteModule = AppChildRouteModule;
//# sourceMappingURL=sample_child.routing.js.map