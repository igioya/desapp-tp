import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.activatedRoute.params.subscribe(params => {
      //let idUser = params.id;
      this.userService.getUser(1).subscribe(user => {
        console.log(user);
        this.u = user;
        console.log(this.u);
        this.account = user['currentAccount'];
        console.log(this.account);
      });
  //});
  }

  addCredit() {
    this.userService.addCredit(this.u.id,this.addC,this.u);
    console.log(this.addC)
    this.router.navigate(['home']);    
  }
}