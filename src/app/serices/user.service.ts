import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }
  addNewUser(id: any , name: any , address: any){
    return this.afs.doc('user/' + id).set({
      name,
      address
    });
  }
}
