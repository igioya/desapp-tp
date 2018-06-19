package service;

import org.joda.time.LocalDateTime;

import model.Publication;
import model.User;
import model.Vehicle;
import model.VehicleType;
import model.exceptions.DateNotAvailableException;
import persistence.GenericRepository;

public class InitalFakeData {
	private GenericRepository<User> userDAO;
	private GenericRepository<Vehicle> vehicleDAO;
	private GenericRepository<Publication> publicationDAO;
	
	public void init() throws DateNotAvailableException{
		User user1 = new User("20250010028", "Jose", "Lopez", "Lavalle 45, Quilmes", "jlopez@gmail.com");
		User user2 = new User("20300010025", "Ignacio" , "Gioya", "Andrade 500, Bernal", "ignacio.gioya@gmail.com");
		User user3 = new User("20323018025", "Grupo" , "E", "Viejo Bueno 1020, Bernal Oeste, Buenos Aires", "desapp.unq.grupoe@gmail.com");
		
		user1.addCredit(500f);
		user2.addCredit(1000f);	
		
		Vehicle car1 = new Vehicle("Fiat 500", VehicleType.Car, 4, "Color rosa. Esta en execelente estado","https://cdn.pixabay.com/photo/2018/04/04/08/04/car-3289114__340.jpg");
		Vehicle car2 = new Vehicle("Mercedes-Benz",VehicleType.Car, 5, "Color gris. Esta en execelente estado","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwooXbtuHPo9gge7CfQzYE274GV-LoIso3pGYZgrXU1PfXU6PTMQ");
		Vehicle truck1 = new Vehicle("Camion",VehicleType.Truck, 3, "Color amarillo. Esta en execelente estado","https://cdn.pixabay.com/photo/2018/03/08/14/58/usa-3208827__340.jpg");
		Vehicle motorbike1 = new Vehicle("Moto",VehicleType.Motorbike, 2, "Color rojo. Esta en execelente estado","https://cdn.pixabay.com/photo/2018/04/03/08/15/motorbike-3286222__340.jpg");

		Vehicle car3 = new Vehicle("Desconocido",VehicleType.Car, 5, "Esta viejo y oxidado pero anda.","https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094__340.jpg");
		Vehicle car4 = new Vehicle("Mustang",VehicleType.Car, 3, "Deportivo veloz. Esta en execelente estado.","https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__340.jpg");
		Vehicle car5 = new Vehicle("Audi A7",VehicleType.Car, 5, "Alta gama. Esta en execelente estado.","https://cdn.pixabay.com/photo/2016/12/07/21/50/audi-1890494__340.jpg");

		Vehicle truck2 = new Vehicle("Mercedes-Benz",VehicleType.Truck, 3, "Color amarillo. Esta en execelente estado.","https://cdn.pixabay.com/photo/2018/05/11/23/23/truck-3392054__340.jpg");
		Vehicle truck3 = new Vehicle("Camion",VehicleType.Truck, 3, "Esta viejo y oxidado pero anda.","https://cdn.pixabay.com/photo/2017/06/24/20/10/old-truck-2438713__340.jpg");
		Vehicle truck4 = new Vehicle("Camion de bomberos",VehicleType.Truck, 6, "Color rojo. Esta en execelente estado. incluye sirena.","https://cdn.pixabay.com/photo/2018/05/31/11/31/fire-truck-3443708__340.jpg");

		Vehicle motorbike2 = new Vehicle("Moto custom",VehicleType.Motorbike, 2, "Diseño unico. Esta en execelente estado","https://cdn.pixabay.com/photo/2018/01/27/00/39/wheel-3110175__340.jpg");
		Vehicle motorbike3 = new Vehicle("Moto antigua",VehicleType.Motorbike, 2, "Color gris. Esta en execelente estado","https://cdn.pixabay.com/photo/2016/01/19/16/46/motorcycle-1149389__340.jpg");
		Vehicle motorbike4 = new Vehicle("Kawasaki Ninja",VehicleType.Motorbike, 2, "Moto Deportiva veloz. Esta en execelente estado.","https://cdn.pixabay.com/photo/2014/10/24/08/31/motorcycle-500910__340.jpg");

		
		user1.addVehicle(car1);
		user1.addVehicle(car3);

		user2.addVehicle(car2);
		user2.addVehicle(truck1);
		user2.addVehicle(car4);
		user2.addVehicle(truck2);
		user2.addVehicle(truck3);
		user2.addVehicle(truck4);
		user2.addVehicle(car5);

		user3.addVehicle(motorbike1);
		user3.addVehicle(motorbike2);
		user3.addVehicle(motorbike3);
		user3.addVehicle(motorbike4);

		user1.newRating(4);
		user1.newRating(5);
		user2.newRating(5);
		user2.newRating(4);
		user2.newRating(4);
		user3.newRating(5);
		
			
		Publication publictionCar1 = new Publication(car1, "Lavalle 45, Quilmes", "Lavalle 45, Quilmes", "01142241818", 25d, user1);
		Publication publictionCar2 = new Publication(car2, "Andrade 500, Bernal", "Andrade 500, Bernal", "01142249999", 50d, user2);
		Publication publictionCar3 = new Publication(car3, "Otamendi 45, Quilmes", "Otamendi 45, Quilmes", "01142241818", 25d, user1);
		Publication publictionCar4 = new Publication(car4, "Edmundo Fierro 500, Bernal", "Edmundo Fierro 500, Bernal", "01142249999", 50d, user2);
		Publication publictionCar5 = new Publication(car5, "Moreno 45, Quilmes", "Moreno 45, Quilmes", "01142241818", 25d, user2);

		Publication publictionTruck1 = new Publication(truck1, "Av. Calchaquí 1699, Quilmes Oeste, Buenos Aires", "Av. Calchaquí 1699, Quilmes Oeste, Buenos Aires", "01142249999", 75d, user2);
		Publication publictionTruck2 = new Publication(truck2, "Av. Mosconi 1699, Quilmes Oeste, Buenos Aires", "Av. Mosconi 1699, Quilmes Oeste, Buenos Aires", "01142249999", 75d, user2);
		Publication publictionTruck3 = new Publication(truck3, "Av. Vicente Lopez 1699, Quilmes Oeste, Buenos Aires", "Av.  Vicente Lopez 1699, Quilmes Oeste, Buenos Aires", "01142249999", 75d, user2);
		Publication publictionTruck4 = new Publication(truck4, "Av. Amoedo 1699, Quilmes Oeste, Buenos Aires", "Av. Amoedo 1699, Quilmes Oeste, Buenos Aires", "01142249999", 75d, user2);

		Publication publictionMotorbike1 = new Publication(motorbike1, "Rojas 1098, Quilmes Oeste, Buenos Aires", "Rojas 1098, Quilmes Oeste, Buenos Aires", "01142241818", 5d, user3);
		Publication publictionMotorbike2 = new Publication(motorbike2, "Olivieri 1098, Quilmes Oeste, Buenos Aires", "Olivieri 1098, Quilmes Oeste, Buenos Aires", "01142241818", 5d, user3);
		Publication publictionMotorbike3 = new Publication(motorbike3, "Av. Mosconi 1098, Quilmes Oeste, Buenos Aires", "Av. Mosconi 1098, Quilmes Oeste, Buenos Aires", "01142241818", 5d, user3);
		Publication publictionMotorbike4 = new Publication(motorbike4, "Av. Amoedo 500, Quilmes Oeste, Buenos Aires", "Av. Amoedo 500, Quilmes Oeste, Buenos Aires", "01142241818", 5d, user3);
		
		publictionCar1.makeReservation(user2, new LocalDateTime(), new LocalDateTime().plusDays(3));
		publictionCar2.makeReservation(user3, new LocalDateTime(), new LocalDateTime().plusDays(3));
		publictionMotorbike1.makeReservation(user2, new LocalDateTime(), new LocalDateTime().plusDays(3));
		
		//PERSISTENCE
		userDAO.save(user1);
		userDAO.save(user2);
		userDAO.save(user3);
		
		publicationDAO.save(publictionCar1);
		publicationDAO.save(publictionCar2);
		publicationDAO.save(publictionCar3);
		publicationDAO.save(publictionCar4);
		publicationDAO.save(publictionCar5);

		publicationDAO.save(publictionTruck1);
		publicationDAO.save(publictionTruck2);
		publicationDAO.save(publictionTruck3);
		publicationDAO.save(publictionTruck4);

		publicationDAO.save(publictionMotorbike1);
		publicationDAO.save(publictionMotorbike2);
		publicationDAO.save(publictionMotorbike3);
		publicationDAO.save(publictionMotorbike4);
		
	}
	
	public void setUserDAO(final GenericRepository<User> usrDAO) {
		   this.userDAO = usrDAO;
	}
	
	public void setVehicleDAO(final GenericRepository<Vehicle> vcleDAO) {
		   this.vehicleDAO = vcleDAO;
	}
	
	public void setPublicationDAO(final GenericRepository<Publication> publDAO) {
		   this.publicationDAO = publDAO;
	}
}

