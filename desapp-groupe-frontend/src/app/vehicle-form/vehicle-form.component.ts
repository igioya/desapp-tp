import { Component } from '@angular/core';
import { Vehicle, VehicleType } from '../../model/vehicle';
import { VEHICLES } from '../../model/data';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {

  service: VehicleService;

  type = Object.keys(VehicleType);
  types = this.type.slice(this.type.length/2);

  vehicle : FormGroup = this.formBuilder.group({
    model : new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    numberOfPassengers: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, vehicleService: VehicleService) {

    this.service = vehicleService;
  
  }

  newVehicle() {
    console.log(this.vehicle);
    this.service.newVehicle(this.vehicle);
  }

  cancel(){}
}