package model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.joda.time.LocalDateTime;
import model.exceptions.IlegalOperationException;

public class User {
	
	private String cuil;
	private String name;
	private String surname;
	private String address;
	private String email;
	private CurrentAccount currentAccount;
	private Set<Vehicle> myVehicles;
	private List<Publication> myPublications;
	private RatingCalculator rating;
	private List<Reservation> myReservations;
	
	public User() {
		this.myReservations = new ArrayList<Reservation>();
	}
	
	public User(String cuil, String name, String surname, String address, String email) {
		this.cuil = cuil;
		this.name = name;
		this.surname = surname;
		this.address = address;
		this.email = email;
		this.currentAccount = new CurrentAccount();
		this.myVehicles = new HashSet<Vehicle>();
		this.myPublications = new ArrayList<Publication>();
		this.rating = new RatingCalculator();
		this.myReservations = new ArrayList<Reservation>();
	}

	public String getCuil() {
		return cuil;
	}

	public void setCuil(String cuil) {
		this.cuil = cuil;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<Vehicle> getMyVehicles() {
		return myVehicles;
	}

	public void setMyVehicles(Set<Vehicle> myVehicles) {
		this.myVehicles = myVehicles;
	}
	
	public void addVehicle(Vehicle newVehicle) {
		this.myVehicles.add(newVehicle);
	}
	
	public List<Publication> getMyPublications() {
		return myPublications;
	}

	public void setMyPublications(List<Publication> myPublications) {
		this.myPublications = myPublications;
	}
	
	public void addPublication(Publication newPublication) {
		this.myPublications.add(newPublication);
	}

	public Double getRating() {
		return rating.getCurrentRating();
	}

	public List<Reservation> getReservations() {
		return this.myReservations;
	}

	public void addReservation(Reservation newReservation) {
		this.myReservations.add(newReservation);
		
	}

	public void addCredit(Double credit) {
		this.currentAccount.addCredit(credit);
	}
	
	public void trasnferCreditTo(Double transfer, User vehicleOwner) {
		try {
			this.currentAccount.transferCreditTo(transfer, vehicleOwner);
		} catch (IlegalOperationException e) {
			e.getMessage();
			e.printStackTrace();
		}
	}
	
}
