import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  url:string = '/rest/users/';
  userToEdit:User;

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

  //***************************************************************//
  getUserToEdit():User{
    return this.userToEdit;
  }

  setUserToEdit(user:User):void {
    this.userToEdit = user;
  }
  //***************************************************************//

}