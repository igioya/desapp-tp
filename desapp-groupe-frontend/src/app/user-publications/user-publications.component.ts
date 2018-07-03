import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { PublicationService } from '../services/publication.service';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-user-publications',
  templateUrl: './user-publications.component.html',
  styleUrls: ['./user-publications.component.css']
})
export class UserPublicationsComponent implements OnInit {

	publications
	reservations
	constructor(public authenticationService: AuthenticationService,
			  public publicationService: PublicationService,
			  public reservationService: ReservationService,
			  public router: Router,
			  private notificationService: NotificationService) { }

	ngOnInit() {
		this.getMyPublications();
	}

	getMyPublications() {
	    this.publicationService.getPublicationsByEmail(this.authenticationService.getUserLoggedIn().email)
		    .subscribe(publications => { 
		    	this.publications = publications;
		        console.log(publications)
		        this.reservationService.getReservationsOfPublicationsByEmail(this.authenticationService.getUserLoggedIn().email)
		        	.subscribe(reservations => { 
		        		this.reservations = this.reservationsWithDatesFormatted(reservations);
		        		console.log(reservations)
				    }, err => console.error(err),
				       () => console.log('done')
				    );
		    }, err => console.error(err),
		       () => console.log('done loading publications')
		    );
	}

	show(publication){
		this.router.navigate(['publicationDetail/', publication.id])
	}

	showReservation(reservation){
		this.router.navigate(['userReservations/', reservation.id])	
	}

	delete(publication){
		console.log(publication.id)
		this.notificationService.onConfirmation("Confirmar","Desea eliminar la publicacion?",[
	        {text: 'Si', action: (toast) => {this.confirmDelete(publication);this.notificationService.snotifyService.remove(toast.id);}},
	        {text: 'Cancelar', action: (toast) => {this.notificationService.snotifyService.remove(toast.id); }, bold: true},
	    ])
	}

	confirmDelete(publication){
		this.publicationService.deletePublication(publication.id).subscribe(data => { 
			this.getMyPublications();
	  	}, err => console.error(err),
	       () => console.log('done loading userPublications')
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
