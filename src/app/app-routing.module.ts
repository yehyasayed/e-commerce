import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartService } from './serices/cart.service';
import { OpenadminService } from './serices/open/openadmin.service';
import { OpencartService } from './serices/open/opencart.service';
import { OpenloginService } from './serices/open/openlogin.service';
import { OpenlogoutService } from './serices/open/openlogout.service';

const routes: Routes = [
  {path:'' , component:HomeComponent , data:{ index:0 } },
  {path:'login',component:LoginComponent , canActivate:[OpenloginService] , data:{ index:3 }},
  {path:'signup',component:SignupComponent , canActivate:[OpenlogoutService] , data:{ index:4 }},
  {path:'cart',component:CartComponent , canActivate:[OpencartService] , data:{ index:1 }},
  {path:'admin',component:GoodsComponent , canActivate:[OpenadminService] , data:{ index:2 } },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
