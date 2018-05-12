import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
              private publicationService: UserService, 
              private router: Router) 
    { }

  newUser() {
    console.log(this.user);
    this.publicationService.newUser(this.user);
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['users']);
  }

}