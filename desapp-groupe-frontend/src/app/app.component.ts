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

  goToMyProfile(){
    this.router.navigate(['userProfile/']);
  }

  goToMyReservations(){
    this.forFullProfile(()=>{
      this.router.navigate(['userReservations/']);
    }, {title:"Perfil incompleto",body:"Para poder ver tus reservas deberas completar tu perfil"})
  }

  goToMyPublications(){
    this.forFullProfile(()=>{
      this.router.navigate(['userPublications/']);
    }, {title:"Perfil incompleto",body:"Para poder ver tus publicaciones deberas completar tu perfil"})
  }

  goToMyVehicles(){
    this.forFullProfile(()=>{
      this.router.navigate(['userVehicles/']);
    }, {title:"Perfil incompleto",body:"Para poder ver vehiculos deberas completar tu perfil"})
  }

  goToAddCredit(){
    this.forFullProfile(()=>{
      this.router.navigate(['addCredit/']);
    }, {title:"Perfil incompleto",body:"Para poder agregar crediro deberas completar tu perfil"})
  }

  goToRetireCredit(){
    this.forFullProfile(()=>{
      this.router.navigate(['retireCredit/']);
    }, {title:"Perfil incompleto",body:"Para poder retirar crediro deberas completar tu perfil"})
  }

  goToNewPublication(){
    this.forFullProfile(()=>{
      this.router.navigate(['/newPublication'])
    }, {title:"Perfil incompleto",body:"Para poder publicar deberas completar tu perfil"})
  }

  forFullProfile(ifcall,error){
    if(this.authenticationService.getUserLoggedIn().haveFullProfile){
      ifcall();
    } else {
      this.notificationService.onError(error.title,error.body); 
      this.goToMyProfile();            
    }
  }

}