import { Component ,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './services/auth.service';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Carpnd';
  
  constructor(private translate: TranslateService,
              public authenticationService: AuthenticationService,
              public authService: AuthService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
    console.log("this.authService.authState: ",this.authService.authState)
    this.authService.authState.subscribe((user) => {
      //this.authenticationService.setUser(user);
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
