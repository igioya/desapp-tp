import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VEHICLES } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { VehicleService } from '../services/vehicle.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles;
  vehicleService:VehicleService;

  constructor( private vService: VehicleService, 
               private router: Router) 
  {

    this.vehicleService = vService;
  }

  ngOnInit() {
    this.getAllVehicles();
  }

  editVehicle(vehicle : Vehicle){
    this.router.navigate(['editVehicle', vehicle.id]);
  }

  deleteVehicle(id:number)
  {
    this.vehicleService.deleteVehicle(id).subscribe(
       data => { 
        this.getAllVehicles();
        console.log(data)},
       err => console.error(err),
       () => console.log('done loading vehicles')
     );
  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe(
      
       data => { this.vehicles = data
        console.log(data)},
       err => console.error(err),
       () => console.log('done loading vehicles')
     );
   }

}
