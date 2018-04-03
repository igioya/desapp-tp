package model;

import java.util.HashSet;
import java.util.Set;

public class User {
	
	private String cuil;
	private String name;
	private String surname;
	private String address;
	private String email;
	private CurrentAccount currentAccount;
	private Set<Vehicle> myVehicles;
	private Set<Publication> myPublications;
	private RatingCalculator rating;
	
	public User() {}
	
	public User(String cuil, String name, String surname, String address, String email) {
		this.cuil = cuil;
		this.name = name;
		this.surname = surname;
		this.address = address;
		this.email = email;
		this.currentAccount = new CurrentAccount(0.0);
		this.myVehicles = new HashSet<Vehicle>();
		this.myPublications = new HashSet<Publication>();
		this.rating = new RatingCalculator();
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
	
	public Set<Publication> getMyPublications() {
		return myPublications;
	}

	public void setMyPublications(Set<Publication> myPublications) {
		this.myPublications = myPublications;
	}
	
	public void addPublication(Publication newPublication) {
		this.myPublications.add(newPublication);
	}

	public Double getRating() {
		return rating.getCurrentRating();
	}
	
}
