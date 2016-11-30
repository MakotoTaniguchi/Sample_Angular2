import { Component } from '@angular/core';

@Component({
  selector: 'hero-list',
  template: `
  <h1>Hello {{name}}</h1>
  <div>
    <a routerLink="/crisis-center" >Crisis Center</a>
  </div>
  `,
})
export class HeroListComponent  { name = 'HeroList'; }