package model;


import org.joda.time.LocalDateTime;

import utils.DateRange;

public class Reservation {
	private User client;
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	private State state;
	

	public Reservation(User client, LocalDateTime fromDate, LocalDateTime toDate){	
		this.client = client;	
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.state = new InitialState();
	}
	
	public LocalDateTime getFromDate() {
		return fromDate;
	}

	public LocalDateTime getToDate() {
		return toDate;
	}

	public DateRange getDates() {
		return new DateRange(this.fromDate, this.toDate);
	}

	public State getState() {
		return this.state;
	}

	public void changeStateToNext() {
		this.state = this.state.getNextState();	
		
	}
}
