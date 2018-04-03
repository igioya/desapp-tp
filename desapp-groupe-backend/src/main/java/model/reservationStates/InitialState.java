package model.reservationStates;

public class InitialState extends State {
	public State getNextState() {return new WaitingForRetireState();}
}
