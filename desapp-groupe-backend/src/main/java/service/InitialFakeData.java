package service;

import java.util.ArrayList;
import java.util.List;

import model.Publication;
import model.User;
import model.Vehicle;
import model.VehicleType;

public class InitialFakeData {
	
	List<User> users = new ArrayList<User>();
	List<Publication> publications = new ArrayList<Publication>();
	List<Vehicle> vehicles =  new ArrayList<Vehicle>();
	
	public void createInitialData() {
	User user1 = new User("20250010028", "Jose", "Lopez", "Lavalle 45, Quilmes", "jlopez@gmail.com");
	User user2 = new User("20300010025", "Pablo" , "Perez", "Andrade 500, Bernal", "pppp@gmail.com");
	
	user1.addCredit(500d);
	user2.addCredit(1000d);	
	
	Vehicle car1 = new Vehicle("Fiat 500", VehicleType.Car, 4, "Color rosa","https://cdn.pixabay.com/photo/2018/04/04/08/04/car-3289114__340.jpg");
	Vehicle car2 = new Vehicle("Mercedes-Benz",VehicleType.Car, 5, "Color gris","https://cdn.pixabay.com/photo/2018/04/04/08/20/car-3289143_960_720.jpg");
	Vehicle truck1 = new Vehicle("Camion",VehicleType.Truck, 3, "Color amarillo","https://cdn.pixabay.com/photo/2018/03/08/14/58/usa-3208827__340.jpg");
	Vehicle motorbike1 = new Vehicle("Moto",VehicleType.Motorbike, 2, "Color rojo","https://cdn.pixabay.com/photo/2018/04/03/08/15/motorbike-3286222__340.jpg");

	user1.addVehicle(car1);
	user1.addVehicle(motorbike1);
	user2.addVehicle(car2);
	user2.addVehicle(truck1);
	
	Publication publictionCar1 = new Publication(car1, null, null, "01142241818", 25d, user1);
	Publication publictionCar2 = new Publication(car2, null, null, "01142249999", 50d, user2);
	Publication publictionTruck1 = new Publication(truck1, null, null, "01142249999", 75d, user2);
	Publication publictionMotorbike1 = new Publication(motorbike1, null, null, "01142241818", 5d, user1);
	
	user1.addPublication(publictionCar1);
	user1.addPublication(publictionMotorbike1);
	user2.addPublication(publictionCar2);
	user2.addPublication(publictionTruck1);
	
	users.add(user1);
	users.add(user2);
	
	vehicles.add(car1);
	vehicles.add(car2);
	vehicles.add(truck1);
	vehicles.add(motorbike1);
	
	publications.add(publictionCar1);
	publications.add(publictionCar2);
	publications.add(publictionTruck1);
	publications.add(publictionMotorbike1);
	
	}

	public List<Publication> getPublications() {
		return this.publications;
	}
}

