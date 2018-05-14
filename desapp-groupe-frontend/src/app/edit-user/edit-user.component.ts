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

  user : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) 
    { }

  ngOnInit(){
    this.u = this.userService.getUserToEdit();
    this.user = this.formBuilder.group({
      id : new FormControl(this.u.id), //VER SI ES NECESARIO ACA
      cuil : new FormControl(this.u.cuil,[Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
      name: new FormControl(this.u.name,[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
      surname: new FormControl(this.u.surname,[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
      address: new FormControl(this.u.address,Validators.required),
      email: new FormControl(this.u.email,[Validators.required, Validators.email]),
    });
  }

  updateUser() {
    let userObj = this.user.getRawValue();
    this.userService.updateUser(userObj).subscribe(data => { 
      this.router.navigate(['users'])};
    err => console.error(err),
      () => console.log(err)
    );
  }

  cancel(){
    this.router.navigate(['users']);
  }

}
