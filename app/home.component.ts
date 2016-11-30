import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <h1>Hello {{name}}</h1>
  <div>
    <a routerLink="/hero-list" >Hero List</a>
  </div>
  `,
})
export class HomeComponent  { name = 'Home'; }