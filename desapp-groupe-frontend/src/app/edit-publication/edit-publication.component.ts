import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { VEHICLES, PUBLICATIONS, USERS } from '../../model/data';
import { Vehicle } from '../../model/vehicle';
import { User } from '../../model/user';
import { PublicationService } from '../services/publication.service';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent implements OnInit {

  p: Publication;

  vehicle = Object.keys(Vehicle);
  vehicles;

  publication : FormGroup = this.formBuilder.group({
    id : new FormControl('p.vehicle'),
    vehicle : new FormControl('',Validators.required),
    retireAddress: new FormControl('',Validators.required),
    returnAddress: new FormControl('',Validators.required),
    telephone: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(13)]),
    costPerHour: new FormControl('',Validators.required),
    owner: new FormControl('',Validators.required),
  });

  constructor(private formBuilder: FormBuilder, 
              private publicationService: PublicationService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private authService: AuthenticationService) 
    { }

    ngOnInit(){
      this.activatedRoute.params.subscribe(params => {
          let id = params.id;
          this.publicationService.getPublication(id).subscribe(pub => {
            this.p = pub;
            this.setPublicationFrom();
          });
      });
      this.getMyVehicles();
    }

    setPublicationFrom(){
      this.publication.setValue({
        id: this.p.id,
        vehicle : this.p.vehicle,
        retireAddress: this.p.retireAddress,
        returnAddress: this.p.returnAddress,
        telephone: this.p.telephone,
        costPerHour: this.p.costPerHour,
        owner: this.p.owner
      });
    }
  
    updateUser() {
      let obj = this.publication.getRawValue();
      this.publicationService.updatePublication(this.p.id, obj).subscribe(
        data => { 
        this.router.navigate(['publications'])},
      err => console.error(err),
        () => console.log('()')
      );
    }

  cancel(){
    this.router.navigate(['publications']);
  }

  getMyVehicles() {
    let email = this.authService.getUserLoggedIn().email;
    this.userService.getMyVehicles(email).subscribe(data => {
      this.vehicles = data;
    });
  }

}