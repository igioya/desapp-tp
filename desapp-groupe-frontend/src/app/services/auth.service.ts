import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { UserService } from './user.service';
import {User} from '../../model/user';

(window as any).global = window;

@Injectable()
export class AuthenticationService {

  userLogued:SocialUser
  modelUserLogued:User
  haveFullProfile:boolean
  token:string;

  constructor(public router:Router, public authService:AuthService, public userService:UserService){}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.userLogued = userData;
        this.token = userData.idToken;
        localStorage.setItem('id_token', userData.idToken);
      }
    ).then(()=>{
      this.verifyFullProfile(this.userLogued);
      this.router.navigate(['home']);   
    });
  }

  signOut(): void {
    this.authService.signOut();
    this.token = null;
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  setUser(user:SocialUser){
    this.userLogued = user;
  }

  getModelUserLogued(){
    return this.modelUserLogued;
  }

  userLoguedIn(){
    return this.userLogued;
  }

  verifyFullProfile(user:SocialUser){
    console.log("ENTRO")
    this.userService.haveFullProfile(user.email).subscribe(haveFullProfile => { 
        this.haveFullProfile = haveFullProfile;
        console.log("haveFullProfile: ", haveFullProfile);
        if(this.haveFullProfile){
          this.findModelUser();
        }        
    }
    , err => console.error(err),
       () => console.log('nana')
    );
  }

  findModelUser(){
    this.userService.getUserByEmail(this.userLogued.email).subscribe(user => { 
      this.modelUserLogued = new User(user.cuil,user.name,user.surname,user.address,user.email,user.id);
      console.log("this.modelUserLogued: ",this.modelUserLogued);
    }, err => console.error(err),
       () => console.log("error")
    );
  }

  /*auth0 = new auth0.WebAuth({
    clientID: 'LWZztUWgI1nmZb7t4j5jQDCWC5tY4dg2',
    domain: 'desapp-unq-grupoe.auth0.com',
    responseType: 'token id_token',
    audience: 'https://desapp-unq-grupoe.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/#',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        //this.router.navigate(['home']);
      } else if (err) {
        //this.router.navigate(['home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }*/

}