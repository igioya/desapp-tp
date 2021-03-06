import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
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

  vehicle : FormGroup = this.formBuilder.group({
      id : new FormControl(''),
      model : new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      numberOfPassengers: new FormControl('',Validators.required),
      description: new FormControl('',[Validators.required,Validators.minLength(30),Validators.maxLength(200)]),
      photo: new FormControl('',Validators.required),
    });

  constructor(private formBuilder: FormBuilder, 
              private vehicleService: VehicleService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) 
    { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        let idVehicle = params.id;
        this.vehicleService.getVehicle(idVehicle).subscribe(vehicle => {
          this.v = vehicle;
          this.setVehicleFrom();
        });
    });
  }

  setVehicleFrom(){
    this.vehicle.setValue({
      id:this.v.id,
      model:this.v.model,
      type: this.v.type,
      numberOfPassengers:this.v.numberOfPassengers,
      description:this.v.description,
      photo:this.v.photo
    });
  }

  updateVehicle() {
    let vehicleObj = this.vehicle.getRawValue();
    this.vehicleService.updateVehicle(vehicleObj).subscribe(data => { 
      this.router.navigate(['userVehicles'])},
    err => console.error(err),
      () => console.log('()')
    );
  }

  cancel(){
    this.router.navigate(['userVehicles']);
  }

}
