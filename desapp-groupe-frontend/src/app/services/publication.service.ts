import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicationService {

  url:string = 'http://localhost:8080/rest/publications/';

  constructor(private http: HttpClient) { }

  getAllPublications():Observable<any> {
    return this.http.get(this.url);
  }

  getPublication(id):Observable<any> {
    return this.http.get(this.url+id);
  }

  newPublication(publication):Observable<any> {
    return this.http.post(this.url+'new',publication)
  }

  updatePublication(id, publication):Observable<any> {
    return this.http.put(this.url+'edit/'+id,publication)
  }

  deletePublication(id, publication):Observable<any> {
    return this.http.delete(this.url+id,publication)
  }

}