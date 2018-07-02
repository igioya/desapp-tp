import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { UserService } from './user.service';
import { User } from '../../model/user';
import { Cookie } from 'ng2-cookies/ng2-cookies';

(window as any).global = window;

@Injectable()
export class AuthenticationService {


  constructor(public router:Router, public authService:AuthService, public userService:UserService){}
  buildedUser

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        localStorage.setItem('id_token', userData.idToken);
        return userData;
      }
    ).then((userData)=>{
      //Verify if have full profile
      this.userService.haveFullProfile(userData.email).subscribe(haveFullProfile => { 
          console.log("userData",userData)
          this.buildedUser = new User().fromSocialUser(userData);
          this.buildedUser.haveFullProfile = haveFullProfile;
          if(this.buildedUser.haveFullProfile){
            //Fetch User Id
            this.userService.getUserByEmail(this.buildedUser.email).subscribe(user => { 
                this.buildedUser = this.buildedUser.merge(user);
                console.log("this.buildedUser",this.buildedUser)
                this.setCookie('user', this.buildedUser);
                this.router.navigate(['home']);   
            }, err => console.error(err),
               () => {
               }
            );
          } else {
            this.setCookie('user', this.buildedUser);
            this.router.navigate(['home']);   
          }
          console.log("FALALALA",this.buildedUser)
      }, err => console.error(err),
         () => {

         }
      );
    });
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('id_token');
    this.deleteCookie('user');
    this.router.navigate(['login']);
  }

  setCookie(properyName:string, object:any){
    Cookie.set(properyName, JSON.stringify(object));
  }

  getCookie(properyName:string){
    return Cookie.get(properyName);
  }

  deleteCookie(properyName:string){
    Cookie.delete(properyName);
  }

  isLoggedIn(){
    return (JSON.parse(this.getCookie('user'))) ? true : false;
  }

  getUserLoggedIn():User{
    return JSON.parse(this.getCookie('user'));
  }

  setUserLoggedIn(user:User){
    return this.setCookie('user',user);
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