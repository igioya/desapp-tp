package model.reservationStates;

public abstract class State {

	public State getNextState() {return null;}

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
