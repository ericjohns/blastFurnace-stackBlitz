import { Component, OnInit } from '@angular/core';
import {AngularFirstore, AngularFirestoreDocument} from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string
  password:string
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  signIn(){
    console.log(this.email+", "+this.password);
  }

}