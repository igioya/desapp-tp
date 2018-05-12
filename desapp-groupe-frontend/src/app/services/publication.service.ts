import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Publication } from '../../model/publication';

@Injectable()
export class PublicationService {

  url:string = '/rest/publications/';

  constructor(private http: HttpClient) { }

  getAllPublications():Observable<any> {
    return this.http.get<Publication[]>(this.url);
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

  deletePublication(id):Observable<any> {
    return this.http.delete(this.url+id)
  }

}