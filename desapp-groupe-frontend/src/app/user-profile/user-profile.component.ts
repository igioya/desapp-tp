import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  u : User;

  user : FormGroup = this.formBuilder.group({
    id : new FormControl(''), 
    cuil : new FormControl('',[Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
    name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    surname: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(50)]),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
  });

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationService) 
    { }

  ngOnInit(){
  	this.u = this.authenticationService.getUserLoggedIn();
  	console.log(this.u)
  	this.setUserFrom()
  }

  setUserFrom(){
    this.user.setValue({
      id: this.u.id || null,
      cuil: this.u.cuil || null,
      name: this.u.name,
      surname: this.u.surname,
      address: this.u.address || null,
      email: this.u.email
    });
  }

  updateUser() {
    let userObj = this.user.getRawValue();
    console.log("this.user",userObj)
    this.userService.newUser(userObj).subscribe(data =>{
      this.userService.getUserByEmail(this.u.email).subscribe(user => {
          user.haveFullProfile = true;
          user.imgProfile = this.u.imgProfile;
          delete user.rating;
          delete user.state;
          this.authenticationService.setUserLoggedIn(user)
          this.notificationService.onSuccess("Guardado", "El perfil fue completado");
          this.ngOnInit();
      }, (error)=>{
          this.notificationService.onError(error.statusText,error.message);  
      });
    },(error)=>{
      this.notificationService.onError(error.statusText,error.message);
    });  
  }



  cancel(){
    this.router.navigate(['users']);
  }


}
