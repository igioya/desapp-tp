package model.reservationStates;

public class WaitingForReturnState extends State {
	public State getNextState() {return new ConfirmedReturnByClientState();}
}
