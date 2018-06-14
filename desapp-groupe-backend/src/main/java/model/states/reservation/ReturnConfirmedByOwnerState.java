package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReturnConfirmedByOwnerState extends State {
	
	public ReturnConfirmedByOwnerState(){
		this.order = 4;
	}
	
	public boolean returnConfirmedByOwner() {
		return true;
	}
}
