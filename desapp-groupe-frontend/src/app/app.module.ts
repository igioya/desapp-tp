import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { RouterModule } from '@angular/router';
import { VehicleService } from './services/vehicle.service';
import { PublicationService } from './services/publication.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    VehicleFormComponent,
    PublicationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
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
    VehicleService,
    PublicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
