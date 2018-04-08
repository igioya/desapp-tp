package model;
import java.util.Timer;
import java.util.TimerTask;
import java.util.function.Supplier;


import org.joda.time.LocalDateTime;

import model.states.reservation.ReservationConfirmedState;
import model.states.reservation.ReservationNotConfirmedState;
import model.states.reservation.RetireConfirmedByClientState;
import model.states.reservation.RetireConfirmedByOwnerState;
import model.states.reservation.RetireConfirmedState;
import model.states.reservation.ReturnConfirmedByClientState;
import model.states.reservation.ReturnConfirmedByOwnerState;
import model.states.reservation.ReturnConfirmedState;
import model.states.reservation.State;
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
	private LocalDateTime timeRemaing;
	private static Double MINUTES = 30.00;

	public Reservation(User client, LocalDateTime fromDate, LocalDateTime toDate){	
		this.client = client;	
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.state = new ReservationNotConfirmedState();
		this.timer = new Timer();
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
		this.state = new ReservationConfirmedState();		
	}

	public void confirmRetireByClient() {
		this.confirmAction(
				() -> this.state.retireConfirmedByOwner(), 
				new RetireConfirmedState(), 
				new RetireConfirmedByClientState()
		);
		
		this.startTimer(new ReservationConfirmedState());
	}

	public void confirmRetireByOwner() {
		this.confirmAction(
				() -> this.state.retireConfirmedByClient(), 
				new RetireConfirmedState(), 
				new RetireConfirmedByOwnerState()
		);
		startTimer(new RetireConfirmedState());		
	}

	private void startTimer(State state) {
		this.timer.schedule(new TimerTask() {
			Integer seconds = 0;
	        public void run(){
	        	if(seconds * 0.0166667 >= MINUTES){
	        		setState(state);
	        		this.cancel();
	        	}
	        	seconds++;
	        }
	    }, 0, 1000);
	}

	private void setState(State state) {
		this.state = state;		
	}

	public void confirmReturnByOwner() {
		this.confirmAction(
				() -> this.state.returnConfirmedByClient(), 
				new ReturnConfirmedState(), 
				new ReturnConfirmedByOwnerState()
		);
	}

	public void confirmReturnByClient() {
		this.confirmAction(
				() -> this.state.returnConfirmedByOwner(), 
				new ReturnConfirmedState(), 
				new ReturnConfirmedByClientState()
		);
	}
	
	private void confirmAction(Supplier<Boolean> methodToRun, State stateToSet, State defaultStateToSet){
		if(methodToRun.get()){
			this.state = stateToSet;
		} else {
			this.state = defaultStateToSet;
		}	
	}


	public void setMINUTES(Double minutes) {
		this.MINUTES = minutes;
		
	}
}
