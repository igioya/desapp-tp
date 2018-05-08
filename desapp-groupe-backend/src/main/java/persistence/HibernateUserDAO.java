package persistence;

import model.User;

public class HibernateUserDAO extends HibernateGenericDAO<User> implements GenericRepository<User> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6102825026635478339L;

	@Override
	protected Class<User> getDomainClass() {
		return User.class;
	}

}
