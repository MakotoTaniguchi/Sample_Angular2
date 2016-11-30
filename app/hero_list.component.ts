import { Component } from '@angular/core';

@Component({
  selector: 'hero-list',
  template: `
  <h1>Hello {{name}}</h1>
  <div>
    <a routerLink="../home">Home</a>
  </div>
  `,
})
export class HeroListComponent
{
  public name:string = 'HeroList';
}