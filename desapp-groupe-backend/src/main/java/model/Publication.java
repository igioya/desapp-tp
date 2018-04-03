package model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Set;

import org.joda.time.LocalDateTime;

import model.exceptions.DateNotAvailableException;
import utils.DateRange;

public class Publication {

	private Vehicle vehicle;
	private String city;
	private Ubication retireAddress;
	private Set<Ubication> returnAddress;
	private String telephone;
	private Set<LocalDateTime> datesAvailable;
	private Double cost;
	private List<Reservation> reservations;
	private User owner;

	public Publication() {
		this.reservations = new ArrayList<Reservation>();
	}

	public Publication(Vehicle vehicle, String city, Ubication retireAddress, Set<Ubication> returnAddress,
			String description, String telephone, Set<LocalDateTime> datesAvailable, Double cost, User owner) {
		this.vehicle = vehicle;
		this.city = city;
		this.retireAddress = retireAddress;
		this.returnAddress = returnAddress;
		this.telephone = telephone;
		this.datesAvailable = datesAvailable;
		this.cost = cost;
		this.reservations = new ArrayList<Reservation>();
		this.owner = owner;
	}
	
	public void makeReservation(User client, LocalDateTime fromDate, LocalDateTime toDate) throws DateNotAvailableException{
		this.validateReservationDate(fromDate, toDate);
		Reservation newReservation = new Reservation(client, fromDate, toDate);		
		this.reservations.add(newReservation);
	}
	
	private void validateReservationDate(LocalDateTime fromDate, LocalDateTime toDate) throws DateNotAvailableException {
		DateRange datesToValidate = new DateRange(fromDate, toDate);
		for(Reservation reservation: this.reservations){
			DateRange datesForCompare = new DateRange(reservation.getFromDate(), reservation.getToDate());
			if(this.areMixed(datesToValidate, datesForCompare)){
				throw new DateNotAvailableException();
			}
		}
	}

	private boolean areMixed(DateRange aRange, DateRange otherRange) {
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
	
	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Ubication getRetireAddress() {
		return retireAddress;
	}

	public void setRetireAddress(Ubication retireAddress) {
		this.retireAddress = retireAddress;
	}

	public Set<Ubication> getReturnAddress() {
		return returnAddress;
	}

	public void setReturnAddress(Set<Ubication> returnAddress) {
		this.returnAddress = returnAddress;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public Set<LocalDateTime> getDatesAvailable() {
		return datesAvailable;
	}

	public void setDatesAvailable(Set<LocalDateTime> datesAvailable) {
		this.datesAvailable = datesAvailable;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

}
