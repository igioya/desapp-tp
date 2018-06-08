package persistence;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.HibernateCallback;

import model.Publication;
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
    public User findByCuil(String cuil) {
        return (User) this.getHibernateTemplate().execute(new HibernateCallback() {
            public User doInHibernate(final Session session) throws HibernateException {
            	Criteria criteria = session.createCriteria(User.class);
            	User user = (User) criteria.add(Restrictions.eq("cuil", cuil))
            	                             .uniqueResult();
            	return user;
            }

        });
    }
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
    public User getByEmail(String email) {
        return (User) this.getHibernateTemplate().execute(new HibernateCallback() {
            public User doInHibernate(final Session session) throws HibernateException {
            	Criteria criteria = session.createCriteria(User.class);
            	User user = (User) criteria.add(Restrictions.eq("email", email))
            	                             .uniqueResult();
            	return user;
            }

        });
    }

}
