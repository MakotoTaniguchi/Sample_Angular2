import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from '../hero_list.component';
import { HomeComponent } from '../home.component';
import { AnimeComponent } from '../anime.component';

const appChildRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'heros', component: HeroListComponent },
  { path: 'anime', component: AnimeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appChildRoutes)
  ],
  declarations: [
    HeroListComponent,
    HomeComponent,
    AnimeComponent
  ],
  exports:[
    RouterModule
  ]
})
export class AppChildRouteModule {
}