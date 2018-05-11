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
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    VehicleFormComponent,
    PublicationFormComponent,
    UserFormComponent,
    UsersComponent,
    VehiclesComponent
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
    ]),
  ],
  providers: [
    UserService,
    VehicleService,
    PublicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }