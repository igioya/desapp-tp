import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  u : User;

  user : FormGroup = this.formBuilder.group({
    id : new FormControl(''), 
    cuil : new FormControl('',[Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
    name: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    surname: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
  });

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) 
    { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
        let idUser = params.id;
        this.userService.getUser(idUser).subscribe(user => {
          this.u = user;
          this.setUserFrom();
        });
    });
  }

  setUserFrom(){
    this.user.setValue({
      id: this.u.id,
      cuil: this.u.cuil,
      name: this.u.name,
      surname: this.u.surname,
      address: this.u.address,
      email: this.u.email
    });
  }

  updateUser() {
    let userObj = this.user.getRawValue();
    this.userService.updateUser(userObj).subscribe(
      data => { 
      this.router.navigate(['users'])},
    err => console.error(err),
      () => console.log('()')
    );
  }

  cancel(){
    this.router.navigate(['users']);
  }

}
