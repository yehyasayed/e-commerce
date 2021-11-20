import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs:AngularFirestore , private st:AngularFireStorage) { }

  getAllGoods(){
    return this.fs.collection('goods').valueChanges()
  }
  getAllGoodsAndId(){
    return this.fs.collection('goods').snapshotChanges();
  }
  addNewGood(name:any , price:any , image:File){
    let ref=this.st.ref('goods/'+image.name);
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(potoUrl=>{
        this.fs.collection('goods').add({
            name,
            price,
            imgUrl:potoUrl
        })
      })
    })
  }
  delet(id:any){
    this.fs.doc(`goods/${id}`).delete();
 }
}
