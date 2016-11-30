import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path:'sample', loadChildren:'./sample_child.routing:AppChildRouteModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRouteModule {
}