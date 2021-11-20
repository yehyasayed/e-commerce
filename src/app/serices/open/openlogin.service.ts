import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpenloginService implements CanActivate{

  constructor(private router:Router , private as:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise ( tf =>{
      this.as.isuser().subscribe(user=>{
        if(!user) tf(true)
        else {
          this.router.navigate(['/']);
          tf(false)
        }
      })
    })
  }
  
}