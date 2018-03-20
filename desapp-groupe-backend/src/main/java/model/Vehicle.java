package model;

import java.time.LocalDate;
import java.util.Set;

public class Vehicle {
	
	private Integer numberOfPassengers;
	private String city;
	private String retireAddress;
	private Set<String> returnAddress;
	private String description;
	private String telephone;
	private Set<LocalDate> datesAvailable;
	private Double cost;
	private String photo;
	
	public Vehicle() {}
	
	public Vehicle(Integer numberOfPassengers, String city, String retireAddress, Set<String> returnAddress,
			String description, String telephone, Set<LocalDate> datesAvailable, Double cost) {
		super();
		this.numberOfPassengers = numberOfPassengers;
		this.city = city;
		this.retireAddress = retireAddress;
		this.returnAddress = returnAddress;
		this.description = description;
		this.telephone = telephone;
		this.datesAvailable = datesAvailable;
		this.cost = cost;
	}

	public Integer getNumberOfPassengers() {
		return numberOfPassengers;
	}

	public void setNumberOfPassengers(Integer numberOfPassengers) {
		this.numberOfPassengers = numberOfPassengers;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRetireAddress() {
		return retireAddress;
	}

	public void setRetireAddress(String retireAddress) {
		this.retireAddress = retireAddress;
	}

	public Set<String> getReturnAddress() {
		return returnAddress;
	}

	public void setReturnAddress(Set<String> returnAddress) {
		this.returnAddress = returnAddress;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public Set<LocalDate> getDatesAvailable() {
		return datesAvailable;
	}

	public void setDatesAvailable(Set<LocalDate> datesAvailable) {
		this.datesAvailable = datesAvailable;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

}
