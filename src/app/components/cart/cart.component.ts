import { Component, OnChanges, OnInit , SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { shoppingGoods } from 'src/app/interFace/shoppingGoods.interface';
import { AuthService } from 'src/app/serices/auth.service';
import { CartService } from 'src/app/serices/cart.service';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[
    trigger('Show',[
      state('s1',style( {opacity: 0} )),
      state('s2',style( {opacity: 1} )),
      transition('s1 => s2', animate(2000) )
    ])
  ]
})

export class CartComponent implements OnInit ,OnChanges {
  state:string='s1';

  carts:shoppingGoods[]=[];
  total:number=0;
  constructor(private cs:CartService ,private as:AuthService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.cs.getCart().subscribe( data =>{
      this.carts = data.map(result=>{
        return <shoppingGoods>{
          ...JSON.parse(JSON.stringify(result.payload.doc.data())),
          id:result.payload.doc.id,
        }
      });
    });
    setTimeout(() => {
      for(let i=0 ; i< this.carts.length ; i++){
        this.total+=this.carts[i].price*this.carts[i].number;
      };
    }, 1000);
    setTimeout(() => {
      this.state='s2'
    }, 300);
  }
  save(i:number)
  {
    this.cs.save(this.carts[i].id,this.carts[i].number);
    setTimeout(() => {
      this.total=0;
      for(let i=0 ; i< this.carts.length ; i++){
        this.total+=this.carts[i].price*this.carts[i].number;
      };
    }, 500);
  }
  delet(i:number)
  {
    this.cs.delet(this.carts[i].id);
    setTimeout(() => {
      this.total=0;
      for(let i=0 ; i< this.carts.length ; i++){
        this.total+=this.carts[i].price*this.carts[i].number;
      };
    }, 500);
  }
}
