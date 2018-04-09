package model.states.reservation;

public abstract class State {

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