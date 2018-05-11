import { Component, OnInit } from '@angular/core';
import { USERS } from '../../model/data';
import { User } from '../../model/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS

  constructor() { }

  ngOnInit() {
  }

  edit(user : User){

  }

}
