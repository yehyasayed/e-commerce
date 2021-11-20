import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('router',[
      transition('0=>1 , 1=>0 , 0=>2 , 2=>0 , 2=>1 , 1=>2 , 0=>3 , 0=>4 , 4=>0 , 3=>0 , 3=>4 , 4=>3' , [
        group([
          query(':enter',[
            style({
              transform: 'translate(100%)'
            }),
            animate(1000,style({
              transform: 'translate(0)'
            }))
          ]),
          query(':leave',[
            style({
              transform: 'translate(0%)'
            }),
            animate(1000,style({
              transform: 'translate(-100%)'
            }))
          ])
        ])
      ]),
    ]),
    trigger('Showw',[
      state('s1',style( {opacity: 1} )),
      state('s2',style( {opacity: 0 , display:'none'} )),
      transition('s1 => s2', animate(2000) )
    ])
  ]
})
export class AppComponent {
  title = 'sample-project';
  state='s1';
  state2='s1';
  constructor(){}
  ngOnInit(){
    setTimeout(() => {
      this.state2='s2';
    }, 100);
    setTimeout(() => {
      this.state='s2';
    }, 2000);
  }

}
