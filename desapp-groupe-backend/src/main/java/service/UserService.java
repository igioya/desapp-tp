package service;

import org.springframework.transaction.annotation.Transactional;

import model.User;
import model.Vehicle;
import persistence.HibernateUserDAO;

public class UserService extends GenericService<User> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7871118767651385673L;

	public boolean haveFullProfile(String email) {
		HibernateUserDAO repository = (HibernateUserDAO) this.getRepository();
		User user = repository.getByEmail(email);
		return user != null; 
	}
	
	public User getUserByEmail(String email) {
		HibernateUserDAO repository = (HibernateUserDAO) this.getRepository();
		User user = repository.getByEmail(email);
		return user; 
	}
	
	@Transactional
	public void addCredits(int id, float credit) {
		User user = this.findById(id);
		user.addCredit(credit);
		this.update(user);
	}
	
	@Transactional
	public void retireCredits(int id, float credit) {
		User user = this.findById(id);
		user.retireCredit(credit);
		this.update(user);
	}

	@Transactional
	public void addVehicle(String email, Vehicle vehicle) {
		User user = this.getUserByEmail(email);
		user.addVehicle(vehicle);
		this.update(user);
	}
	
}
