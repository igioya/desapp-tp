package model;

public class ConfirmedReturnByClientState extends State {
	public State getNextState() {return new ConfirmedReturnByOwnerState();}
}
