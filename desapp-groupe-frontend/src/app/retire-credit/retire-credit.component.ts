import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  retireCredit(){
    this.userService.retireCredit(this.u.id,this.retireC,this.u);
    console.log(this.retireC);
    this.router.navigate(['home']);
  }

}