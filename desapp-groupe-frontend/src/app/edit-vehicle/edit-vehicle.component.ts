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
export class EditVehicleComponent implements OnInit{

  v: Vehicle;


  type = Object.keys(VehicleType);
  types = this.type.slice(this.type.length/2);

  vehicle : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private vehicleService: VehicleService, 
              private router: Router) 
    { }

  ngOnInit() {
    this.v = this.vehicleService.getVehicleToEdit();
    this.vehicle = this.formBuilder.group({
      id : new FormControl(this.v.id),
      model : new FormControl(this.v.model,Validators.required),
      type: new FormControl(this.v.type,Validators.required),
      numberOfPassengers: new FormControl(this.v.numberOfPassengers,Validators.required),
      description: new FormControl(this.v.description,[Validators.required,Validators.minLength(30),Validators.maxLength(200)]),
      photo: new FormControl(this.v.photo,Validators.required),
    });
  }

  updateVehicle() {
    let vehicleObj = this.vehicle.getRawValue();
    this.vehicleService.updateVehicle(vehicleObj).subscribe(data => { 
      this.router.navigate(['vehicles'])};
    err => console.error(err),
      () => console.log(err)
    );
  }

  cancel(){
    this.router.navigate(['vehicles']);
  }

}
