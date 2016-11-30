import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRouteModule }  from './routing/sample.routing';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule,
    // AppRouteModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }