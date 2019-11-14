import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const paths: {}[] = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  
]

const firebaseConfig = {
  apiKey: "AIzaSyDxUwQBkLmskWHF2T100ySP7SJPWjpldjA",
  authDomain: "blastfurnace-stackblitz.firebaseapp.com",
  databaseURL: "https://blastfurnace-stackblitz.firebaseio.com",
  projectId: "blastfurnace-stackblitz",
  storageBucket: "blastfurnace-stackblitz.appspot.com",
  messagingSenderId: "777805420560",
  appId: "1:777805420560:web:761020e8c8bbbe96dc9295",
  measurementId: "G-3CY8CSNB67"
};

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  MDBBootstrapModule.forRoot(),
                  RouterModule.forRoot(paths),
                  AngularFireModule.initializeApp(firebaseConfig),
                  AngularFireDatabaseModule,
                  AngularFirestoreModule,
                  AngularFireAuthModule
                ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
