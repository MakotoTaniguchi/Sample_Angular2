import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteModule }  from './routing/sample.routing';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRouteModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }