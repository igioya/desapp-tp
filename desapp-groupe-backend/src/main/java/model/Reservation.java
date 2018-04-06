package model;
import javax.swing.Timer;

import org.joda.time.LocalDateTime;

import model.reservationStates.ConfirmedByOwnerState;
import model.reservationStates.NotConfirmedState;
import model.reservationStates.RetireConfirmedByClientState;
import model.reservationStates.RetireConfirmedByOwnerState;
import model.reservationStates.RetireConfirmedState;
import model.reservationStates.ReturnConfirmedByClientState;
import model.reservationStates.ReturnConfirmedByOwnerState;
import model.reservationStates.ReturnConfirmedState;
import model.reservationStates.State;
import utils.DateRange;

/**
 * States management:
 * 
 * 			NotConfirmedState: when the client requested a reservation. 
 * 				 |
 * 		WaitingForRetireState: when publication owner accepted the reservation. 
 * 				 |
 * 	ConfirmedRetireByClientState: when the client confirmed that the vehicle has been retired.
 * 				 |
 * 		WaitingForReturnState: when the publication owner confirmed that the vehicle has been retired.
 * 				 |
 * 	ConfirmedReturnByClientState when the client confirmed that return the vehicle.
 * 				 |
 * 	 ConfirmedReturnByOwnerState: when publication owner confirmed that the client return the vehicle.	
 * 
 **/

public class Reservation {
	private User client;
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	private State state;
	private Timer timer;

	public Reservation(User client, LocalDateTime fromDate, LocalDateTime toDate){	
		this.client = client;	
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.state = new NotConfirmedState();
		this.timer = new Timer(1000, null);
	}
	
	public LocalDateTime getFromDate() {
		return fromDate;
	}

	public LocalDateTime getToDate() {
		return toDate;
	}

	public DateRange getDates() {
		return new DateRange(this.fromDate, this.toDate);
	}

	public State getState() {
		return this.state;
	}

	public void changeStateToNext() {
		this.state = this.state.getNextState();			
	}
	public Timer getTimer() {
		return this.timer;
	}

	public void confirmReservationByOwner() {
		this.state = new ConfirmedByOwnerState();		
	}

	public void confirmRetireByClient() {
		if(this.state.retireConfirmedByOwner()){
			this.state = new RetireConfirmedState();
		} else {
			this.state = new RetireConfirmedByClientState();
		}		
	}

	public void confirmRetireByOwner() {
		if(this.state.retireConfirmedByClient()){
			this.state = new RetireConfirmedState(); 
		} else {
			this.state = new RetireConfirmedByOwnerState();
		}		
	}

	public void confirmReturnByOwner() {
		if(this.state.returnConfirmedByClient()){
			this.state = new ReturnConfirmedState();
		} else {
			this.state = new ReturnConfirmedByOwnerState();
		}		
	}

	public void confirmReturnByClient() {
		if(this.state.returnConfirmedByOwner()){
			this.state = new ReturnConfirmedState();
		} else {
			this.state = new ReturnConfirmedByClientState();
		}		
	}
}
