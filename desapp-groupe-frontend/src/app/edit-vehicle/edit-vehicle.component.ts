import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Vehicle, VehicleType } from '../../model/vehicle';
import { VEHICLES } from '../../model/data';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {

  v: Vehicle;

  type = Object.keys(VehicleType);
  types = this.type.slice(this.type.length/2);

  vehicle : FormGroup = this.formBuilder.group({
    //id : new FormControl('v.id'), //VER SI ES NECESARIO ACA
    model : new FormControl('v.model',Validators.required),
    type: new FormControl('v.type',Validators.required),
    numberOfPassengers: new FormControl('v.numberOfPassengers',Validators.required),
    description: new FormControl('v.description',[Validators.required,Validators.minLength(30),Validators.maxLength(200)]),
    photo: new FormControl('v.photo',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, 
              private vehicleService: VehicleService, 
              private router: Router) 
    { 
      //this.v = ; // VER COMO RECIBE EL PARAMETRO
    }

  updateVehicle() {
    console.log(this.vehicle);
    this.vehicleService.updateVehicle(this.v.id, this.vehicle);
    this.router.navigate(['vehicles']);
  }

  cancel(){
    this.router.navigate(['vehicles']);
  }

}
