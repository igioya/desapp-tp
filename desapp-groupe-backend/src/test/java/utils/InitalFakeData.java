package utils;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import model.Publication;
import model.User;
import model.Vehicle;
import model.VehicleType;
import persistence.GenericRepository;
import persistence.HibernateGenericDAO;
import persistence.HibernatePublicationDAO;
import persistence.HibernateUserDAO;
import persistence.HibernateVehicleDAO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "/META-INF/spring-persistence-context.xml", "/META-INF/spring-services-context.xml" })
public class InitalFakeData {
	@Autowired	
	private GenericRepository<User> userDAO = new HibernateUserDAO();
	@Autowired	
	private GenericRepository<Publication> publicationDAO = new HibernatePublicationDAO();
	@Autowired	
	private GenericRepository<Vehicle> vehicleDAO = new HibernateVehicleDAO();
	
	@Test
	public void init(){
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
		
//		Publication publicationCar1 = new Publication(car1, "", "", "01142241818", 25d, user1);
//		Publication publicationCar2 = new Publication(car2, "", "", "01142249999", 50d, user2);
//		Publication publicationTruck1 = new Publication(truck1, "", "", "01142249999", 75d, user2);
//		Publication publicationMotorbike1 = new Publication(motorbike1, "", "", "01142241818", 5d, user1);
		
		user1.createNewPublication(car1, "", "", "01142241818", 25d);
		user1.createNewPublication(motorbike1, "", "", "01142241818", 5d);
		user2.createNewPublication(car2, "", "", "01142249999", 50d);
		user2.createNewPublication(truck1, "", "", "01142249999", 75d);
		
//		user1.addPublication(publicationCar1);
//		user1.addPublication(publicationMotorbike1);
//		user2.addPublication(publicationCar2);
//		user2.addPublication(publicationTruck1);
		
		//PERSISTENCE
		userDAO.save(user1);
		userDAO.save(user2);
		
		vehicleDAO.save(car1);
		vehicleDAO.save(car2);
		vehicleDAO.save(motorbike1);
		vehicleDAO.save(truck1);
		
//		publicationDAO.save(publicationCar1);
//		publicationDAO.save(publicationCar2);
//		publicationDAO.save(publicationTruck1);
//		publicationDAO.save(publicationCar1);
	}
}

