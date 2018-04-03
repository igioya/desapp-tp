package model;

import java.util.ArrayList;
import java.util.List;

import model.exceptions.IlegalOperationException;

public class User {
	
	private String cuil;
	private String name;
	private String surname;
	private String address;
	private String email;
	private CurrentAccount currentAccount;
	private List<Vehicle> myVehicles;
	private List<Publication> myPublications;
	private RatingCalculator rating;
	private List<Reservation> myReservations;
	
	public User() {
		this.myReservations = new ArrayList<Reservation>();
		this.myPublications = new ArrayList<Publication>();
	}
	
	public User(String cuil, String name, String surname, String address, String email) {
		this.cuil = cuil;
		this.name = name;
		this.surname = surname;
		this.address = address;
		this.email = email;
		this.currentAccount = new CurrentAccount();
		this.myVehicles = new ArrayList<Vehicle>();
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

	public List<Vehicle> getMyVehicles() {
		return myVehicles;
	}

	public void setMyVehicles(List<Vehicle> myVehicles) {
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

	public Publication createNewPublication(Vehicle vehicle, Ubication retireAddress, List<Ubication> returnAddress,
			String description, String telephone, Double costPerHour, User owner) {
		
		Publication newPublication = new Publication(vehicle, retireAddress, returnAddress, description, telephone, costPerHour, owner);
		this.myPublications.add(newPublication);		
		return newPublication;
	}
	
}
