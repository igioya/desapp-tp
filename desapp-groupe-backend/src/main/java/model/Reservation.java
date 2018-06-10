package model;
import java.util.Timer;
import java.util.TimerTask;
import java.util.function.Supplier;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.apache.cxf.jaxrs.model.wadl.ElementClass;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.joda.time.LocalDateTime;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

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
import webservice.serialization.ReservationDeserializer;
import webservice.serialization.ReservationSerializer;

/**
 * States management:
 * 
 * 	  ReservationNotConfirmedState: when the client requested a reservation. 
 * 				 |
 * 		ReservationConfirmedState: when publication owner accepted the reservation. 
 * 				 |
 * 	   RetireConfirmedByClientState: when the client confirmed that the vehicle has been retired, but not the owner.
 * 				 o
 * 	    RetireConfirmedByOwnerState: when the publication owner confirmed that the vehicle has been retired, but not the client.
 * 				 |
 * 	      RetireConfirmedState: when the client and the owner confirmed that the vehicle has been retired.
 * 				 |
 * 	 ConfirmedReturnByOwnerState: when publication owner confirmed that the client return the vehicle, but not the client.
 * 				 o
 * 	 ConfirmedReturnByClientState: when client confirmed that returned the vehicle,but not the owner
 * 				 |
 * 		ConfirmedReturnState:	when the client and the owner confirmed that the vehicle has been returned.
 **/
@Entity
@JsonSerialize(using = ReservationSerializer.class)
@JsonDeserialize(using = ReservationDeserializer.class)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Reservation {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	
	@ManyToOne(cascade = {CascadeType.MERGE})
	private User client;
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	@ManyToOne(cascade = {CascadeType.ALL})
	private State state;
	@Transient
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
	
	public Reservation(){}
	
	public User getClient() {
		return client;
	}

	public LocalDateTime getTimeRemaing() {
		return timeRemaing;
	}

	public static Double getMINUTES() {
		return MINUTES;
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
		Reservation.MINUTES = minutes;
		
	}
}
