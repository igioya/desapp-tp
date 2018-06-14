package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class ReturnConfirmedByClientState extends State {
	
	public ReturnConfirmedByClientState(){
		this.order = 4;
	}
	
	public boolean returnConfirmedByClient() {
		return true;
	}
}
