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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        redirectTo: '/publications', 
        pathMatch: 'full' 
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
        path:'editUser',
        component:EditUserComponent
      },
      {
        path:'editVehicle',
        component:EditVehicleComponent
      },
      {
        path:'editPublication',
        component:EditPublicationComponent
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    UserService,
    VehicleService,
    PublicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }