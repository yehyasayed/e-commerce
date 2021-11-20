import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoodsComponent } from './components/goods/goods.component';
import { from } from 'rxjs';
import { GoodsService } from './serices/goods.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    NavbarComponent,
    SignupComponent,
    NotFoundComponent,
    GoodsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBa7XlCJlV1xvQUQAx1ecdU2tzMlJ1zFpM",
      authDomain: "sample-shopping-4914777.firebaseapp.com",
      projectId: "sample-shopping-4914777",
      storageBucket: "sample-shopping-4914777.appspot.com",
      messagingSenderId: "319398327245",
      appId: "1:319398327245:web:ee67c5bf3d00694ef20a84",
      measurementId: "G-4PFRSP3PHZ"
    })
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
