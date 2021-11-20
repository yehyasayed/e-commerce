import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId?:string='';

  constructor(private afa:AngularFireAuth) {

   }
   isuser(){
     return this.afa.user;
   }

  suginUp(email:any , password:any){
    return this.afa.createUserWithEmailAndPassword(email,password);
  }

  login(email:any , password:any){
    return this.afa.signInWithEmailAndPassword(email,password);
  }

  logout(){
    return this.afa.signOut()
  }
}
