import { Component, OnInit } from '@angular/core';
import { VEHICLES } from '../../model/data';
import { Vehicle } from '../../model/vehicle';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles = VEHICLES

  constructor() { }

  ngOnInit() {
  }

}
