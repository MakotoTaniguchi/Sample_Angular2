import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path:'sample', loadChildren:'./app/routing/sample_child.routing.js?v=10#AppChildRouteModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouteModule {
}