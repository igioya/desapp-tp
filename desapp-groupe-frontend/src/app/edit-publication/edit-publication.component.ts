import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { VEHICLES, PUBLICATIONS, USERS } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { User } from '../../model/user';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent {

  p: Publication;

  vehicle = Object.keys(Vehicle);
  vehicles = VEHICLES.slice(this.vehicle.length/2); //cambiar por getAll de vehiculos

  owner = Object.keys(User);
  users = USERS.slice(this.owner.length/2); //cambiar por getAll de users

  publication : FormGroup = this.formBuilder.group({
    //id : new FormControl('p.id'), //VER SI ES NECESARIO ACA
    vehicle : new FormControl('p.vehicle',Validators.required),
    retireAddress: new FormControl('p.retireAddress',Validators.required),
    returnAddress: new FormControl('p.returnAddress',Validators.required),
    telephone: new FormControl('p.telephone',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    costPerHour: new FormControl('p.costPerHour',Validators.required),
    owner: new FormControl('p.owner',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, 
              private publicationService: PublicationService, 
              private router: Router) 
    { 
      //this.p = ; // VER COMO RECIBE EL PARAMETRO
    }

  newPublication() {
    console.log(this.publication);
    this.publicationService.updatePublication(this.p.id, this.publication);
    this.router.navigate(['publications']);
  }

  cancel(){
    this.router.navigate(['publications']);
  }

}
