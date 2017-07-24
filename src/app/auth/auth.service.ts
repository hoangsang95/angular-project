import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router){}

  loginFacebook(){
    
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(
          response => {
            console.log(response);
            firebase.auth().currentUser.getToken()
              .then(
                (token: string) =>  { this.token = token}
              )
          }
        )
        .then(() => { this.router.navigate(['/']) })
  }

  signupUser(email: string, password: string){
    
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(
        error => console.log(error)
      ) 
      .then(() => {
        this.signinUser(email,password);
      });
     
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response => {
          console.log(response);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) =>  { this.token = token}
            )
        }
      )
      .then(() => { this.router.navigate(['/']) })
      .catch(
        error => console.log(error)
      );
  }

  getToken(){
    firebase.auth().currentUser.getToken()
        .then(
          (token: string) =>  { this.token = token}
        );
    return this.token;
  }

  isAuthenticate(){
    return this.token != null;
  }

  logoutUser(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/'])
  }
}
