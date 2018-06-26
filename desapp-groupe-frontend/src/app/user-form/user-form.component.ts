import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  user : FormGroup = this.formBuilder.group({
    cuil : new FormControl('',[Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
    name: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    surname: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
  });

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router,
              private authService: AuthenticationService) 
    {this.user.get('email').setValue(this.authService.getUserLoggedIn().email); console.log(this.user)}

  newUser() {
    let userObj = this.user.getRawValue();
    this.userService.newUser(userObj).subscribe(data => { 
      this.router.navigate(['users']);
    },err => console.error(err)
    );
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['users']);
  }

}