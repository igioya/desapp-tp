import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-retire-credit',
  templateUrl: './retire-credit.component.html',
  styleUrls: ['./retire-credit.component.css']
})
export class RetireCreditComponent implements OnInit {

  u : any;
  account : any;
  retireC : any;


  constructor(private userService: UserService, 
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let email = this.authService.getUserLoggedIn().email;
    this.userService.getUserByEmail(email).subscribe(user => {
      console.log(user);
      this.u = user;
      this.account = user['currentAccount'];
      console.log(this.account);
    });
  } 

  retireCredit(){
    this.userService.retireCredit(this.u.id,this.retireC).subscribe(
      res => { this.getUser()},
      error => console.log(error)
    )
  }

}