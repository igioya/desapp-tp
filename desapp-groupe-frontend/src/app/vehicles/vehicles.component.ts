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

  vehicles = VEHICLES;

  constructor( private vehicleService: VehicleService, 
               private router: Router) 
  { }

  ngOnInit() {
    //this.getAllVehicles();
  }

  editVehicle(vehicle : Vehicle){
    //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
    this.router.navigate(['editVehicle']);
  }

  deleteVehicle(id:number)
  {
    this.vehicleService.deleteVehicle(id);
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
