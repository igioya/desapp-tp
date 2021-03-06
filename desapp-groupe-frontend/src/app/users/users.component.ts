import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../../model/data';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private userService: UserService, 
              private router: Router,
              private authService: AuthenticationService) 
              { }

  ngOnInit() {
    this.getAllUsers();
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
    this.router.navigate(['editUser',user.id]);
  }

  isMyUser(email:string){
    let em = this.authService.getUserLoggedIn().email;
    return em == email;
  }
}
