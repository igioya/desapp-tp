package model.states.reservation;

import javax.persistence.Entity;

@Entity
public class RetireConfirmedByClientState extends State {
	
	public RetireConfirmedByClientState(){
		this.order = 2;
	}
	
	public Boolean retireConfirmedByClient() {
		return true;
	}
}
