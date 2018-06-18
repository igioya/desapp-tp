import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Vehicle, VehicleType } from '../../model/vehicle';
import { VEHICLES } from '../../model/data';
import { VehicleService } from '../services/vehicle.service';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {

  type = Object.keys(VehicleType);
  types = this.type.slice(this.type.length/2);

  vehicle : FormGroup = this.formBuilder.group({
    model : new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    numberOfPassengers: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required,Validators.minLength(30),Validators.maxLength(200)]),
    photo: new FormControl('',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, 
              private vehicleService: VehicleService, 
              private router: Router,
              private authService: AuthenticationService,
              private userService: UserService) 
    { }

  newVehicle() {
      let vehicleObj = this.vehicle.getRawValue();
      let owner = this.authService.getUserLoggedIn().email;
      this.userService.addVehicle(owner, vehicleObj).subscribe(data => { 
        this.router.navigate(['vehicles']); },
        err => console.error(err),
       () => console.log('done loading vehicles')
      );
  }

  cancel(){
    this.router.navigate(['vehicles']);
  }
}