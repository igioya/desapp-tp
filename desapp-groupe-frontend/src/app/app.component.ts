import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carpnd';

  constructor(private translate: TranslateService,
              public auth: AuthService) {
    translate.setDefaultLang('es');
    auth.handleAuthentication();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
