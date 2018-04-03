package model;

public class ConfirmedRetireByClientState extends State {
	public State getNextState() {return new WaitingForReturnState();}

}
