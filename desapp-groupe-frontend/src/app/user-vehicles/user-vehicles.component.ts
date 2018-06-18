import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../../model/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-user-vehicles',
  templateUrl: './user-vehicles.component.html',
  styleUrls: ['./user-vehicles.component.css']
})
export class UserVehiclesComponent implements OnInit {

  vehicles;

  constructor( private vehicleService: VehicleService,
               private userService: UserService,
               private router: Router,
               private authService: AuthenticationService)
  { }

  ngOnInit() {
    this.getMyVehicles();
  }

  editVehicle(vehicle : Vehicle){
    this.router.navigate(['editVehicle', vehicle.id]);
  }

  deleteVehicle(id:number)
  {
    this.vehicleService.deleteVehicle(id).subscribe(
       data => { 
        this.router.navigate(['userVehicles']);
        console.log(data)},
       err => console.error(err),
       () => console.log('done loading vehicles')
     );
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
