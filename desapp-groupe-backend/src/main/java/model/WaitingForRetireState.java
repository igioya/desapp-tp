package model;

public class WaitingForRetireState extends State {
	public State getNextState() {return new ConfirmedRetireByClientState();}
}