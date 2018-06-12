import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Publication } from '../../model/publication';
import { Reservation } from '../../model/reservation';

@Injectable()
export class PublicationService {

  url:string = '/rest/publications/';

  constructor(private httpClient: HttpClient) { }

  getAllPublications():Observable<any> {
    return this.httpClient.get<Publication[]>(this.url);
  }

  getPublication(id):Observable<any> {
    return this.httpClient.get(this.url+id);
  }

  newPublication(publication):Observable<any> {
    return this.httpClient.post(this.url+'new',publication);
  }

  updatePublication(id, publication):Observable<any> {
    return this.httpClient.put(this.url+'edit/'+id,publication);
  }

  deletePublication(id):Observable<any> {
    return this.httpClient.delete(this.url+id);
  }

  filterPublications(term):Observable<any> {
    return this.httpClient.get(this.url + 'find/' + term);
  }

  newReservation(reservation:Reservation, idPublication):Observable<any> {
    return this.httpClient.put(this.url + idPublication + '/newReservation', reservation);
  }   

}