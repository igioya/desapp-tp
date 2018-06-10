import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../services/publication.service';
import { AuthenticationService } from '../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Reservation } from '../../model/reservation';
import { User } from '../../model/user';
import { SocialUser } from "angularx-social-login";
import { Location } from '@angular/common'
import { AuthService } from "angularx-social-login";


@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

	datepickerFromDate
	datepickerToDate
	publicationId
	userLogued:SocialUser

  	constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private publicationService: PublicationService,
              private location: Location,
              private authService:AuthService,
              private authenticationService: AuthenticationService) { 
  	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {this.publicationId = params.id});
		this.authService.authState.subscribe((user) => {this.userLogued = user});
	}

	reserve(){
		//Validar que las fechas no sean iguals y que toDate > fromDate
		let newFromDate = this.formatDateToLocalDate(this.datepickerFromDate);
		let newToDate = this.formatDateToLocalDate(this.datepickerToDate);
		let client = this.authenticationService.getModelUserLogued();
		let newReservation:Reservation = new Reservation(client, newFromDate, newToDate);
		console.log("this.authenticationService.getUSerLogued(): ",this.authenticationService.getModelUserLogued());
		console.log("newReservation: ",newReservation);
		this.publicationService.newReservation(newReservation,this.publicationId
		).subscribe(publication => {
	    	this.location.back()
	    });

	}

	formatDateToLocalDate(date){
		return date.year + "-" + date.month + "-" + date.day;
	}

}
