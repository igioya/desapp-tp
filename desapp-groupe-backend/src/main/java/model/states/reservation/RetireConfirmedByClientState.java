package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class RetireConfirmedByClientState extends State {
	
	public RetireConfirmedByClientState(){}
	
	public Boolean retireConfirmedByClient() {
		return true;
	}
}
