import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {

  url:string = 'http://localhost:8080/rest/vehicles/';

  constructor(private http: HttpClient) { }

  getAllVehicles():Observable<any> {
    return this.http.get(this.url);
  }

  getVehicle(id):Observable<any> {
    return this.http.get(this.url+id);
  }

  newVehicle(vehicle):Observable<any> {
    return this.http.post(this.url+'new',vehicle)
  }

  updateVehicle(id, vehicle):Observable<any> {
    return this.http.put(this.url+'edit/'+id,vehicle)
  }

  deleteVehicle(id, vehicle):Observable<any> {
    return this.http.delete(this.url+id,vehicle)
  }

}