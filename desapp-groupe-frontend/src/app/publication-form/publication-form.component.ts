import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Publication } from '../../model/publication';
import { VEHICLES, PUBLICATIONS, USERS } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { User } from '../../model/user';
import { PublicationService } from '../services/publication.service';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {

  vehicle = Object.keys(Vehicle);
  vehicles;

  owner;

  publication : FormGroup = this.formBuilder.group({
    vehicle : new FormControl('',Validators.required),
    retireAddress: new FormControl('',Validators.required),
    returnAddress: new FormControl('',Validators.required),
    telephone: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(13)]),
    costPerHour: new FormControl('',Validators.required),
    owner: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, 
              private publicationService: PublicationService, 
              private router: Router,
              private userService: UserService,
              private vehicleService: VehicleService,
              private authService: AuthenticationService) 
    { }

    ngOnInit() {
      this.getOwner();
      this.getMyVehicles();
  }

  newPublication() {
    this.publication.get('owner').setValue(this.owner);
    console.log(this.publication);
    this.publicationService.newPublication(this.publication);
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['publications']);
  }

  getOwner() {
    let email = this.authService.getUserLoggedIn().email;
    this.userService.getUserByEmail(email).subscribe(user => {
      this.owner = user;
    });
  }

  getMyVehicles() {
    let email = this.authService.getUserLoggedIn().email;
    this.userService.getMyVehicles(email).subscribe(data => {
      this.vehicles = data;
    });
  }

}

