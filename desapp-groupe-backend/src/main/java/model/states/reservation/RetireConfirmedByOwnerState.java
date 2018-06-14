package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class RetireConfirmedByOwnerState extends State {
	
	public RetireConfirmedByOwnerState(){
		this.order = 2;
	}
	
	public Boolean retireConfirmedByOwner() {
		return true;
	}
}
