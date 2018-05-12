import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../../model/data';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS

  constructor(private userService: UserService, 
              private router: Router) { }

  ngOnInit() {
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      
       data => { this.users = data
        console.log(data)},
       err => console.error(err),
       () => console.log('done loading vehicles')
     );
   }

  editUser(user : User){
    //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
    this.router.navigate(['editUser']);
  }

}
