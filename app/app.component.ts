import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <div>
    <a routerLink="sample/home" >Home</a>
    <a routerLink="sample/heros" >Heroes</a>
    <a routerLink="sample/anime" >Anime</a>
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  public name:string = 'Angular';
}