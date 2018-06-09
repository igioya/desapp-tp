package model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.codehaus.jackson.annotate.JsonProperty;
import org.joda.time.LocalDateTime;

import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import model.exceptions.DateNotAvailableException;
import utils.DateRange;

@Entity
@JsonSerialize(using = PublicationSerializer.class)
public class Publication {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	
	@JsonProperty("retireAddress")
	private String retireAddress;
	@JsonProperty("returnAddress")
	private String returnAddress;
	@JsonProperty("telephone")
	private String telephone;
	@JsonProperty("costPerHour")
	private Double costPerHour;
	
	@ManyToOne(cascade = {CascadeType.ALL})
	private Vehicle vehicle;
	@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
	private Set<Reservation> reservations;
	
	@ManyToOne(cascade = {CascadeType.ALL})
	private User owner;

	public Publication() {
		this.reservations = new HashSet<Reservation>();
	}

	public Publication(Vehicle vehicle, String retireAddress, String returnAddress, String telephone, Double costPerHour, User owner) {
		this.vehicle = vehicle;
		this.retireAddress = retireAddress;
		this.returnAddress = returnAddress;
		this.telephone = telephone;
		this.costPerHour = costPerHour;
		this.reservations = new HashSet<Reservation>();
		this.owner = owner;
	}
	
	public Reservation makeReservation(User client, LocalDateTime fromDate, LocalDateTime toDate) throws DateNotAvailableException{
		this.validateReservationDate(fromDate, toDate);
		Reservation newReservation = new Reservation(client, fromDate, toDate);		
		this.reservations.add(newReservation);
//		client.addReservation(newReservation);
		return newReservation;
	}
	
	private void validateReservationDate(LocalDateTime fromDate, LocalDateTime toDate) throws DateNotAvailableException {
		DateRange datesToValidate = new DateRange(fromDate, toDate);
		for(Reservation reservation: this.reservations){
			DateRange datesForCompare = new DateRange(reservation.getFromDate(), reservation.getToDate());
			if(this.areOverlapped(datesToValidate, datesForCompare)){
				throw new DateNotAvailableException();
			}
		}
	}

	private boolean areOverlapped(DateRange aRange, DateRange otherRange) {
		LocalDateTime fromDate1 = aRange.getFromDate();
		LocalDateTime toDate1 = aRange.getToDate();
		
		LocalDateTime fromDate2 = otherRange.getFromDate();
		LocalDateTime toDate2 = otherRange.getToDate();
		
		//fromDate1 >= fromDate2 && fromDate1 <= toDate2 || toDate1 >= fromDate2 && toDate1 <= toDate2
		Boolean a = fromDate1.compareTo(fromDate2) > -1 && fromDate1.compareTo(toDate2) < 1;
		
		Boolean b = toDate1.compareTo(fromDate2) > -1 && toDate1.compareTo(toDate2) < 1;
		
		return a || b;
	}

	public Set<Reservation> getReservations() {
		return reservations;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public String getRetireAddress() {
		return retireAddress;
	}

	public String getReturnAddress() {
		return returnAddress;
	}

	public String getTelephone() {
		return telephone;
	}

	public Double getCostPerHour() {
		return costPerHour;
	}

	public User getOwner() {
		return owner;
	}
	
}
