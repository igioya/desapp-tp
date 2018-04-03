package model;

public class InitialState extends State {
	public State getNextState() {return new WaitingForRetireState();}
}
