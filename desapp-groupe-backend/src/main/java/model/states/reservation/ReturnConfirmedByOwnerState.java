package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReturnConfirmedByOwnerState extends State {
	
	public ReturnConfirmedByOwnerState(){}
	
	public boolean returnConfirmedByOwner() {
		return true;
	}
}
