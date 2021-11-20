import { Component, OnInit ,OnDestroy } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Observable, observable, Observer, Subscription } from 'rxjs';
import { goods } from 'src/app/interFace/goods.interface';
import { AuthService } from 'src/app/serices/auth.service';
import { CartService } from 'src/app/serices/cart.service';
import { GoodsService } from 'src/app/serices/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('Show',[
      state('s1',style( {opacity: 0} )),
      state('s2',style( {opacity: 1} )),
      transition('s1 => s2', animate(2000) )
    ])
  ]
})
export class HomeComponent implements OnInit , OnDestroy{
  state:string='s1';
  isUser:boolean=false
  Goods:goods[]=[];
  mySub: Subscription = new Subscription;
  add: number =-1;
  
  constructor(private gs:GoodsService , private cs:CartService ,private as:AuthService) { }

  ngOnDestroy(): void {
    this.mySub.unsubscribe()
  }

  ngOnInit() {
    this.mySub=this.gs.getAllGoods().subscribe(data => {
      this.Goods =JSON.parse(JSON.stringify(data));
    })
    setTimeout(() => {
      this.state='s2'
    }, 300);
    this.as.isuser().subscribe(user=>{
      if(user)
      {
        this.isUser=true;
        this.as.userId=user.uid;
      }
      else
      {
        this.isUser=false;
        this.as.userId='';
      }
    });
  }

  addToCart(i:number){
    this.add=i;
  }
  buy(n:number){
    let data = {
      number : +n,
      name:this.Goods[this.add].name,
      price:this.Goods[this.add].price,
    }
    this.cs.addToCart(data).then(()=>{
      this.add=-1;
    });
  }
}
