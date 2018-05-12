import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  u : User;

  user : FormGroup = this.formBuilder.group({
    //id : new FormControl('u.id'), //VER SI ES NECESARIO ACA
    cuil : new FormControl('u.cuil',[Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
    name: new FormControl('u.name',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    surname: new FormControl('u.surname',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    address: new FormControl('u.address',Validators.required),
    email: new FormControl('u.email',[Validators.required, Validators.email]),
  });

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) 
    { 
      //this.u = ; // VER COMO RECIBE EL PARAMETRO
    }

  updateUser() {
    console.log(this.user);
    this.userService.updateUser(this.u.id, this.user);
    this.router.navigate(['users']);
  }

  cancel(){
    this.router.navigate(['users']);
  }

}
