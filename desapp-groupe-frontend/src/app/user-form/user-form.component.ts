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

  service: UserService;

  user : FormGroup = this.formBuilder.group({
    cuil : new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    surname: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, private publicationService: UserService, private router: Router) { 

    this.service = publicationService;


  }

  newUser() {
    console.log(this.user);
    this.service.newUser(this.user);
    this.router.navigate(['publications']);
  }

  cancel(){}


}