package model;

import java.time.LocalDate;

public class Reservation {
	private User ownerPublication;
	private User client;
	private LocalDate fromDate;
	private LocalDate toDate;
	
	public Reservation(User ownerPublication, User client, LocalDate fromDate, LocalDate toDate){	
		this.ownerPublication = ownerPublication;
		this.client = client;	
		this.fromDate = fromDate;
		this.toDate = toDate;
	}
}
