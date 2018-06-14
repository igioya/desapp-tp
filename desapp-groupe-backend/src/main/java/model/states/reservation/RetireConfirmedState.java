package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class RetireConfirmedState extends State {
	public RetireConfirmedState(){
		this.order = 3;
	}
}
