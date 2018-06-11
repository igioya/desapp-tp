import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { AuthenticationService } from '../services/auth.service';


@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.css']
})
export class AddCreditComponent implements OnInit {

  u : any;
  account : any;
  addC : any;

  constructor(private userService: UserService, 
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {

      let email = this.authService.getModelUserLogued().email;
      this.userService.getUserByEmail(email).subscribe(user => {
        console.log(user);
        this.u = user;
        this.account = user['currentAccount'];
        console.log(this.account);
      });
  }

  addCredit() {
    console.log(this.u.id)
    console.log(this.addC)
    this.userService.addCredit(this.u.id,this.addC).subscribe(
      res => { this.router.navigate(["home"])},
      error => console.log(error)
    )
  }

}