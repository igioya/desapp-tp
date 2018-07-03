import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './services/auth.service';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Carpnd';

  constructor(private translate: TranslateService,
    public authenticationService: AuthenticationService,
    public authService: AuthService,
    private router: Router,
    private notificationService: NotificationService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
    //console.log("this.authService.authState: ",this.authService.authState)
    //this.authService.authState.subscribe((user) => {
    //  console.log("SOCIAL USER: ",user )
    //  this.authenticationService.setUser(user);
    //});
    //console.log("APPCOMPONENR ACAAA")
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  goToMyProfile(tryPath){
    this.authenticationService.setCookie('tryPath',tryPath);
    console.log("this.authenticationService.getCookie('tryPath')",this.authenticationService.getCookie('tryPath'))
    this.router.navigate(['userProfile/']);
  }

  goToMyReservations(){
    this.forFullProfile(
      'userReservations/',
      {title:"Perfil incompleto",body:"Para poder ver tus reservas deberas completar tu perfil"})
  }

  goToMyPublications(){
    this.forFullProfile(
      'userPublications/',
      {title:"Perfil incompleto",body:"Para poder ver tus publicaciones deberas completar tu perfil"})
  }

  goToMyVehicles(){
    this.forFullProfile(
      'userVehicles/',
      {title:"Perfil incompleto",body:"Para poder ver vehiculos deberas completar tu perfil"})
  }

  goToAddCredit(){
    this.forFullProfile(
      'addCredit/',
      {title:"Perfil incompleto",body:"Para poder agregar crediro deberas completar tu perfil"})
  }

  goToRetireCredit(){
    this.forFullProfile(
      'retireCredit/', 
      {title:"Perfil incompleto",body:"Para poder retirar crediro deberas completar tu perfil"})
  }

  goToNewPublication(){
    this.forFullProfile(
      '/newPublication', 
      {title:"Perfil incompleto",body:"Para poder publicar deberas completar tu perfil"}
    )
  }

  forFullProfile(tryPath,error){
    if(this.authenticationService.getUserLoggedIn().haveFullProfile){
      this.router.navigate([tryPath])
    } else {
      this.notificationService.onError(error.title,error.body); 
      this.goToMyProfile(tryPath);            
    }
  }

}