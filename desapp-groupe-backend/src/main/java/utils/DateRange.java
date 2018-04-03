package utils;

import org.joda.time.LocalDateTime;

public class DateRange {
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	
    public DateRange(LocalDateTime fromDate, LocalDateTime toDate){
    	this.fromDate = fromDate;
		this.toDate = toDate;
    }
    
	public LocalDateTime getFromDate() {
		return fromDate;
	}

	public LocalDateTime getToDate() {
		return toDate;
	}


}
