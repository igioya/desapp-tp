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
    })
  }

  goToMyPublications(){
    this.forFullProfile(()=>{
      this.router.navigate(['userPublications/']);
    })
  }

  goToMyVehicles(){
    this.forFullProfile(()=>{
      this.router.navigate(['userVehicles/']);
    })
  }

  goToAddCredit(){
    this.forFullProfile(()=>{
      this.router.navigate(['addCredit/']);
    })
  }

  goToRetireCredit(){
    this.forFullProfile(()=>{
      this.router.navigate(['retireCredit/']);
    })
  }

  goToNewPublication(){
    this.forFullProfile(()=>{
      this.router.navigate(['/newPublication'])
    })
  }

  forFullProfile(ifcall,elsecall){
    if(this.authenticationService.getUserLoggedIn().haveFullProfile){
      ifcall();
    } else {
      this.notificationService.onError("Perfil incompleto","Para poder publicar deberas completar tu perfil"); 
      this.goToMyProfile();            
    }
  }

}