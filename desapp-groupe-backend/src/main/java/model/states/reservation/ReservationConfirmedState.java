package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReservationConfirmedState extends State {
	public ReservationConfirmedState(){
		this.order = 1; 
	}
}
