import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { PublicationService } from './services/publication.service';
import { AuthenticationService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { TokenInterceptor } from './services/token.interceptor';
import { UnauthorizedInterceptor } from './services/unauthorized.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { LoginComponent } from './login/login.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { MyDatePickerModule } from 'mydatepicker';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { RetireCreditComponent } from './retire-credit/retire-credit.component';
import {NgxPaginationModule} from 'ngx-pagination';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("742198362537-437c5bp4k8c1kjdctnd5obucvu396drr.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    VehicleFormComponent,
    PublicationFormComponent,
    UserFormComponent,
    UsersComponent,
    VehiclesComponent,
    EditPublicationComponent,
    EditUserComponent,
    EditVehicleComponent,
    GoogleMapsComponent,
    PublicationDetailComponent,
    MakeReservationComponent,
    LoginComponent,
    AddCreditComponent,
    RetireCreditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { 
        path: '', 
        redirectTo: 'publications', 
        pathMatch: 'full' 
      },
      { 
        path: 'home', 
        redirectTo: 'publications', 
        pathMatch: 'full' 
      },
      { 
        path: 'login', 
        component:LoginComponent 
      },
      {
        path:'publications',
        component:PublicationsComponent
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'vehicles',
        component:VehiclesComponent
      },
      {
        path:'newUser',
        component:UserFormComponent
      },
      {
        path:'newVehicle',
        component:VehicleFormComponent
      },
      {
        path:'newPublication',
        component:PublicationFormComponent
      },
      {
        path:'editUser/:id',
        component:EditUserComponent
      },
      {
        path:'editVehicle/:id',
        component:EditVehicleComponent
      },
      {
        path:'editPublication',
        component:EditPublicationComponent
      },
      {
        path:'publicationDetail/:id',
        component:PublicationDetailComponent
      },
      {
        path:'publicationDetail/:id/makeReservation',
        component:MakeReservationComponent
      },
      {
        path:'addCredit',
        component:AddCreditComponent
      },
      {
        path:'retireCredit',
        component:RetireCreditComponent
      },
      {
        path:'googleMaps',
        component:GoogleMapsComponent
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM'//Se uso la del tutorial por no estar activada la nuestra //'AIzaSyAzaSxsKDUNelh_OQcOyNOPJExOqJetn70'
    }),
    SocialLoginModule.initialize(config),
    MyDatePickerModule
  ],
  providers: [
    UserService,
    VehicleService,
    PublicationService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }