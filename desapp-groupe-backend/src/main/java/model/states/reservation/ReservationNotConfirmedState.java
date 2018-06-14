package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReservationNotConfirmedState extends State {
	public ReservationNotConfirmedState(){
		this.order = 0;
	}
}
