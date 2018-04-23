package persistence;

import model.User;

public class HibernateUserDAO extends HibernateGenericDAO<User> implements GenericRepository<User> {

	@Override
	protected Class<User> getDomainClass() {
		return User.class;
	}

}
