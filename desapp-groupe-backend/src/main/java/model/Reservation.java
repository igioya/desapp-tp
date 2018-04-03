package model;

import java.util.Map.Entry;

import org.joda.time.LocalDateTime;

import utils.DateRange;

public class Reservation {
	private User client;
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	

	public Reservation(User client, LocalDateTime fromDate, LocalDateTime toDate){	
		this.client = client;	
		this.fromDate = fromDate;
		this.toDate = toDate;
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
}
