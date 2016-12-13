import { Component, NgZone, trigger, state, style, transition, animate, AnimationTransitionEvent } from '@angular/core';

@Component({
  selector: 'anime-block',
  animations:[
      trigger('buttomstate', [
            state('void', style({
                backgroundColor: '#eee',
                transform: 'translateX(200px)'
            })),
            state('next', style({
                backgroundColor: '#eee',
                transform: 'translateX(0px)'
            })),
            state('prev', style({
                backgroundColor: '#eee',
                transform: 'translateX(-100px)'
            })),
            transition('* => next', animate(500, style({transform: 'translateX(0px)'}))),
            transition('* => prev', animate(500, style({transform: 'translateX(-100px)'})))
      ])
  ],
  template: `
  <h1 [@buttomstate]="status" (@buttomstate.done)="animationDone($event)">{{name}}</h1>
  <div (click)="onClick('next')">次へ</div>
  <div (click)="onClick('prev')">前へ</div>
  `,
})
export class AnimeComponent
{
  public name:string = 'Anime';

  public status:string = 'void';

  public constructor(private zone:NgZone){}

  public onClick(status: string)
  {
      if(this.status != 'void')
      {
          return;
      }

      switch(status)
      {
          case 'next':
            this.status = 'next'; 
          break;
          case 'prev':
            this.status = 'prev';
          break;
      }
  }

  public animationDone(event:AnimationTransitionEvent)
  {
      this.zone.run(() => {
        if(event.toState == 'void')
        {
            return;
        }

        this.status = 'void';
      });
  }
}