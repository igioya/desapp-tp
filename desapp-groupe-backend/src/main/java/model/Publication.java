package model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.joda.time.LocalDateTime;

import model.exceptions.DateNotAvailableException;
import utils.DateRange;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

@Entity
public class Publication{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected int id;
	@ManyToOne(cascade = {CascadeType.ALL})
	private Vehicle vehicle;
	private String retireAddress;
	private String returnAddress;
	private String telephone;
	private Double costPerHour;
	@OneToMany(cascade = {CascadeType.ALL})
	private List<Reservation> reservations;
	
	@ManyToOne(cascade = {CascadeType.ALL})
	private User owner;

	public Publication() {
		this.reservations = new ArrayList<Reservation>();
	}

	public Publication(Vehicle vehicle, String retireAddress, String returnAddress, String telephone, Double costPerHour, User owner) {
		this.vehicle = vehicle;
		this.retireAddress = retireAddress;
		this.returnAddress = returnAddress;
		this.telephone = telephone;
		this.costPerHour = costPerHour;
		this.reservations = new ArrayList<Reservation>();
		this.owner = owner;
	}
	
	public Reservation makeReservation(User client, LocalDateTime fromDate, LocalDateTime toDate) throws DateNotAvailableException{
		this.validateReservationDate(fromDate, toDate);
		Reservation newReservation = new Reservation(client, fromDate, toDate);		
		this.reservations.add(newReservation);
		client.addReservation(newReservation);
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

	public List<Reservation> getReservations() {
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
