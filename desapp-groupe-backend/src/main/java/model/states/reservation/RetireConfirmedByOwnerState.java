package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class RetireConfirmedByOwnerState extends State {
	
	public RetireConfirmedByOwnerState(){}
	
	public Boolean retireConfirmedByOwner() {
		return true;
	}
}
