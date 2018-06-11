import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

	reservations
	constructor(public authenticationService: AuthenticationService,
				public reservationService: ReservationService) { }

	ngOnInit() {
		console.log(" USER: ", this.authenticationService.getUserLoggedIn());
		this.getMyReservations();
	}
	
	getMyReservations() {
	    this.reservationService.getReservationsByEmail(this.authenticationService.getUserLoggedIn().email)
		    .subscribe(reservations => { 
		    	this.reservations = this.reservationsWithDatesFormatted(reservations);
		        console.log(reservations)
		    }, err => console.error(err),
		       () => console.log('done loading reservations')
		    );
	}

	reservationsWithDatesFormatted(reservations){
		reservations.forEach((reservation)=> {
		  let fromDate = reservation.fromDate;
		  let toDate = reservation.toDate;
		  reservation.fromDate = fromDate.year + "-" + fromDate.monthOfYear + "-" + fromDate.dayOfMonth;
		  reservation.toDate = toDate.year + "-" + toDate.monthOfYear + "-" + toDate.dayOfMonth;
		}); 

		return reservations;	
	}

}
