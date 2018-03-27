package model;

public class Vehicle {
	
	private String model;
	private VehicleType type;
	private Integer numberOfPassengers;
	private String description;
	private String photo;
	
	public Vehicle() {}

	public Vehicle(String model, VehicleType type, Integer numberOfPassengers, String description, String photo) {
		super();
		this.model = model;
		this.type = type;
		this.numberOfPassengers = numberOfPassengers;
		this.description = description;
		this.photo = photo;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public VehicleType getType() {
		return type;
	}

	public void setType(VehicleType type) {
		this.type = type;
	}

	public Integer getNumberOfPassengers() {
		return numberOfPassengers;
	}

	public void setNumberOfPassengers(Integer numberOfPassengers) {
		this.numberOfPassengers = numberOfPassengers;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
}
