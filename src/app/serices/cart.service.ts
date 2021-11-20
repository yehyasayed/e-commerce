import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { goods } from '../interFace/goods.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs : AngularFirestore , private as:AuthService) { }

  addToCart(data:goods){
    return this.afs.collection(`user/${this.as.userId}/cart`).add(data);
  }

  getCart(){
    return this.afs.collection(`user/${this.as.userId}/cart`).snapshotChanges();
  }
  delet(id:any){
     this.afs.doc(`user/${this.as.userId}/cart/${id}`).delete();
     
  }
  save(id:any,number:any){
     this.afs.doc(`user/${this.as.userId}/cart/${id}`).update({
      number
    });
  }
}
