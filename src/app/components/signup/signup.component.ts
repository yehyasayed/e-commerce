import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { userData } from 'src/app/interFace/userData.interface';
import { AuthService } from 'src/app/serices/auth.service';
import { UserService } from 'src/app/serices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMass:string=''
  constructor(private as:AuthService , private us:UserService , private router :Router) { }
  
  ngOnInit(): void {
  }
  SignUp(f: { value: userData; }){
    let data:userData = f.value;
    this.as.suginUp(data.email,data.password).then(result => {
      this.errorMass='';
      this.us.addNewUser(result.user?.uid , data.name , data.address).then(()=>{
        this.router.navigate(['/'])
      })
    }).catch(err=>{
      this.errorMass = err.message;
    })
  }
}
