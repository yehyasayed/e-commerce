import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { userData } from 'src/app/interFace/userData.interface';
import { AuthService } from 'src/app/serices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMass:string='';

  constructor(private as:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  logIn(f: { value: userData; }){
    let data:userData = f.value;
    this.as.login(data.email,data.password).then(result => {
      this.errorMass='';
      this.router.navigate(['/']);
    }).catch(err=>{
      this.errorMass = err.message;
    })
  }
}
