import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { AuthenticationService } from '../services/auth.service';
import { WizardComponent, FreeNavigationMode, WizardState } from 'angular-archwizard';


@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

	reservation
	@ViewChild(WizardComponent)
	public wizard: WizardComponent;

	constructor(private activatedRoute: ActivatedRoute,
				public reservationService: ReservationService,
				public authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			let idReservation = params.id;
			this.getReservation(idReservation)
		});
	} 

	initWizard(initialOrder,initOrderState){
		this.wizard.navigation.canGoToStep(initialOrder).then((can1)=>{
			this.wizard.navigation.goToStep(initialOrder);	
			if(!(initialOrder===initOrderState)){
				this.initWizard(initialOrder+1,initOrderState);
			}
		})	
	}
	
	ngAfterViewInit(){
		let initOrderState = this.reservation.state.order;
		if(initOrderState !==0){
			this.initWizard(1, initOrderState);
		}
	}

	show(){
	}

	isReservationMakedByLoguedUser(){
		return this.reservation.publication.owner.email === this.authenticationService.getUserLoggedIn().email
	}

	confirmReservationByOwner(){
		this.reservationService.confirmReservationByOwner(this.reservation.id).subscribe(data => {
			this.getReservation(this.reservation.id)
			this.goToStep(this.reservation.state.order);
		});
	}

	confirmRetireByClient(){
		this.reservationService.confirmRetireByClient(this.reservation.id).subscribe(data => {
			this.getReservation(this.reservation.id)
			this.goToStep(this.reservation.state.order);
		});
	}

	confirmReturnByClient(){
		this.reservationService.confirmReturnByClient(this.reservation.id).subscribe(data => {
			this.getReservation(this.reservation.id)
			this.goToStep(this.reservation.state.order);
		});
	}

	confirmRetireByOwner(){
		this.reservationService.confirmRetireByOwner(this.reservation.id).subscribe(data => {
			this.getReservation(this.reservation.id)
			this.goToStep(this.reservation.state.order);
		});
	}

	confirmReturnByOwner(){
		this.reservationService.confirmReturnByOwner(this.reservation.id).subscribe(data => {
			this.getReservation(this.reservation.id)
			this.goToStep(this.reservation.state.order);			
		});
	}

	getReservation(id){
		this.reservationService.getReservation(id).subscribe(reservation => {
			this.reservation = this.reservationsWithDatesFormatted(reservation);
			console.log(reservation);
		});
	}

	goToStep(stepIndex){
		this.wizard.navigation.canGoToStep(stepIndex).then((can)=>{
			this.wizard.navigation.goToStep(stepIndex);	
		})
	}

	canConfirmReservationByOwner():boolean{
		return this.reservation.state.order === 0; 
	}

	canConfirmRetireByClient():boolean{
		return this.reservation.state.name !== "RetireConfirmedByClientState" && (this.reservation.state.name === "RetireConfirmedByOwnerState"
				|| (this.reservation.state.order <= 2 && this.reservation.state.order >= 1));  
	}

	canConfirmRetireByOwner():boolean{
		return this.reservation.state.name !== "RetireConfirmedByOwnerState" && (this.reservation.state.name === "RetireConfirmedByClientState"
				|| (this.reservation.state.order <= 2 && this.reservation.state.order >= 1));
	}

	canConfirmReturnByClient():boolean{
		//return this.reservation.state.order === 3 || this.reservation.state.order === 4;
		return this.reservation.state.name !== "ReturnConfirmedByClientState" && (this.reservation.state.name === "ReturnConfirmedByOwnerState"
				|| (this.reservation.state.order <= 4 && this.reservation.state.order >= 3)); 
	}

	canConfirmReturnByOwner():boolean{
		//return this.reservation.state.order === 3 || this.reservation.state.order === 4;
		return this.reservation.state.name !== "ReturnConfirmedByOwnerState" && (this.reservation.state.name === "ReturnConfirmedByClientState"
				|| (this.reservation.state.order <= 4 && this.reservation.state.order >= 3));
	}


	reservationsWithDatesFormatted(reservation){
		let fromDate = reservation.fromDate;
		let toDate = reservation.toDate;
		reservation.fromDate = fromDate.year + "-" + fromDate.monthOfYear + "-" + fromDate.dayOfMonth;
		reservation.toDate = toDate.year + "-" + toDate.monthOfYear + "-" + toDate.dayOfMonth;

		return reservation;	
	}

}
