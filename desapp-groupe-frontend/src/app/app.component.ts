import { Component ,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './services/auth.service';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';

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
              private router: Router) {
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
    this.router.navigate(['userReservations/']);
  }

}
