package service;

import model.User;
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

}
