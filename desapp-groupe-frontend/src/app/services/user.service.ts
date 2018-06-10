import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../../model/user';

@Injectable()
export class UserService {

  url:string = '/rest/users/';

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<any> {
    return this.http.get(this.url);
  }

  getUser(id):Observable<any> {
    return this.http.get(this.url+id);
  }

  newUser(user):Observable<any> {
    return this.http.post(this.url+'new',user);
  }

  updateUser(user):Observable<any> {
    return this.http.put(this.url+'edit',user);
  }

  deleteUser(id, user):Observable<any> {
    return this.http.delete(this.url+id,user);
  }

  haveFullProfile(email):Observable<any> {
    return this.http.get(this.url + "byemail/" + email);
  }

  getUserByEmail(email):Observable<any> {
    return this.http.get(this.url + "getbyemail/" + email);
  }

  addCredit(id, credit, user):Observable<any> {
    return this.http.put(this.url+id+'/add/'+credit,user);
  }

  retireCredit(id, credit, user):Observable<any> {
    return this.http.put(this.url+id+'/retire/'+credit,user);
  }
}