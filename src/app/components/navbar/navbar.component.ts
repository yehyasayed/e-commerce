import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tfShow:boolean=false;
  isUser:boolean=false

  constructor(private as:AuthService) {}

  ngOnInit(): void {
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
  toggelSow(){
    this.tfShow = !this.tfShow;
  }
  logOut(){
    this.as.logout().then();
  }
}
