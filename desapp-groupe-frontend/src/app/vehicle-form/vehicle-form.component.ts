import { Component } from '@angular/core';
import { Vehicle, VehicleType } from '../../model/vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {

  type = Object.keys(VehicleType);
  types = this.type.slice(this.type.length/2);

  model = new Vehicle('', VehicleType.Car, 0, '', '');

  submitted = false;

  constructor() { }

  onSubmit() { this.submitted = true; }

  newVehicle() {
    this.model = new Vehicle('', VehicleType.Car, 0, '', '');
  }
}
