import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Publication } from '../../model/publication';
import { VEHICLES, PUBLICATIONS, USERS } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { PublicationService } from '../services/publication.service';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {

  vehicle = Object.keys(Vehicle);
  vehicles = this.vehicle.slice(this.vehicle.length/2)
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
              private authService: AuthenticationService) 
    { }

    ngOnInit() {
      this.getOwner();
      this.getMyVehicles();
  }

  newPublication() {
    this.publication.get('owner').setValue(this.owner);
    let pub = this.publication.getRawValue();
    this.publicationService.newPublication(pub).subscribe(
      data => { this.router.navigate(['']); },
      err => console.error(err)
    );
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
      console.log(data);
      console.log(this.vehicles);
    });
  }

}