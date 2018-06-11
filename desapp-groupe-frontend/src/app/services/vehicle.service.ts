import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../model/vehicle';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable()
export class VehicleService {

  url:string = '/rest/vehicles/';
  vechicleToEdit:Vehicle;

  constructor(private http: HttpClient) { }

  getAllVehicles():Observable<any> {
    return this.http.get<Vehicle[]>(this.url);
  }

  getVehicle(id):Observable<any> {
    return this.http.get(this.url+id);
  }

  newVehicle(vehicle):Observable<any> {
    return this.http.post(this.url+'new',vehicle)
  }

  updateVehicle(vehicle):Observable<any> {
    return this.http.put(this.url+'edit/',vehicle)
  }

  deleteVehicle(id):Observable<any> {
    return this.http.delete(this.url+id)
  }
}