package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReturnConfirmedByClientState extends State {
	
	public ReturnConfirmedByClientState(){}
	
	public boolean returnConfirmedByClient() {
		return true;
	}
}
