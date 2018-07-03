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
import { IMyDpOptions } from 'mydatepicker';
import { NotificationService } from '../services/notification.service';


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
	public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };


  	constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private publicationService: PublicationService,
              private location: Location,
              private authService:AuthService,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationService) { 
  		this.datepickerFromDate = { date: { year: 2018, month: 10, day: 9 } };
  	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {this.publicationId = params.id});
		this.authService.authState.subscribe((user) => {this.userLogued = user});
	}

	reserve(){
		//Validar que las fechas no sean iguals y que toDate > fromDate
		this.datepickerFromDate = this.datepickerFromDate.date;
		this.datepickerToDate = this.datepickerToDate.date;
		let newFromDate = this.formatDateToLocalDate(this.datepickerFromDate);
		let newToDate = this.formatDateToLocalDate(this.datepickerToDate);
		let client = this.authenticationService.getUserLoggedIn();
		console.log("!$%&/&&/(%$#&%/&$%#&%:", client);
		delete client.haveFullProfile;
		delete client.imgProfile;
		delete client.rating
		let newReservation:Reservation = new Reservation(client, newFromDate, newToDate);
		console.log("!$%&/&&/(%$#&%/&$%#&%: ", newReservation.client);
		console.log("this.authenticationService.getUSerLogued(): ",this.authenticationService.getUserLoggedIn());
		console.log("newReservation: ",newReservation);
		this.publicationService.newReservation(newReservation,this.publicationId
		).subscribe(publication => {
			this.notificationService.onSuccess("Reserva realizada", "La reserva se realizo con exito");
	    	this.router.navigate(['userReservations']);
	    });

	}

	formatDateToLocalDate(date){
		return date.year + "-" + date.month + "-" + date.day;
	}



}
