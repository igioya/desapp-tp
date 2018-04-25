package model.states.reservation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public abstract class State {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected int id;
	public Boolean retireConfirmedByOwner() {
		return false;
	}
	
	public Boolean retireConfirmedByClient() {
		return false;
	}

	public boolean returnConfirmedByClient() {
		return false;
	}

	public boolean returnConfirmedByOwner() {
		return false;
	}

}
