import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <h1>Hello {{name}}</h1>
  <div>
    <a routerLink="../heros">Hero List</a>
  </div>
  `,
})
export class HomeComponent
{
  public name:string = 'Home';
}