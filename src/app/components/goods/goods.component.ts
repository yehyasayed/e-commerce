import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoodsService } from 'src/app/serices/goods.service';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { goods } from 'src/app/interFace/goods.interface';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
  animations:[
    trigger('Show',[
      state('s1',style( {opacity: 0} )),
      state('s2',style( {opacity: 1} )),
      transition('s1 => s2', animate(2000) )
    ])
  ]
})
export class GoodsComponent implements OnInit {
  state:string='s1';

  @ViewChild('image') image ?:ElementRef;
  Goodss:goods[]=[];

  constructor(private gs:GoodsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.state='s2'
    }, 300);
    this.gs.getAllGoodsAndId().subscribe( data =>{
      this.Goodss = data.map(result=>{
        return <goods>{
          ...JSON.parse(JSON.stringify(result.payload.doc.data())),
          id:result.payload.doc.id,
        }
      });
    });
  }
  addNewGood(f:NgForm){
    this.gs.addNewGood(f.value.name,f.value.price,this.image?.nativeElement.files[0]);
  }
  delet(i:number){
    this.gs.delet(this.Goodss[i].id);
  }
}
