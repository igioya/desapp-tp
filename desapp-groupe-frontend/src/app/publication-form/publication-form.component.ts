import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { VEHICLES, PUBLICATIONS } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent {

  service: PublicationService;

  vehicle = Object.keys(Vehicle);
  vehicles = VEHICLES.slice(this.vehicle.length/2); //cambiar por getAll de vehiculos

  publication : FormGroup = this.formBuilder.group({
    vehicle : new FormControl('',Validators.required),
    retireAddress: new FormControl('',Validators.required),
    returnAddress: new FormControl('',Validators.required),
    telephone: new FormControl('',Validators.required),
    costPerHour: new FormControl('',Validators.required),
    //owner: new FormControl('',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, publicationService: PublicationService) {

    this.service = publicationService;
   }

  newPublication() {
    console.log(this.publication);
    this.service.newPublication(this.publication);
  }

  cancel(){}

}

