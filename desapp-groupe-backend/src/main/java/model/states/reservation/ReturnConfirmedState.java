package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReturnConfirmedState extends State {
	public ReturnConfirmedState(){
		this.order = 5;
	}
}
