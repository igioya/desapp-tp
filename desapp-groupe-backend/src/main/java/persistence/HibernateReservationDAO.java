package persistence;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.HibernateCallback;

import model.Reservation;

public class HibernateReservationDAO extends HibernateGenericDAO<Reservation> implements GenericRepository<Reservation> {

	@Override
	protected Class<Reservation> getDomainClass() {
		return Reservation.class;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Set<Reservation> getReservationsByEmail(final String email){
        return (Set<Reservation>) this.getHibernateTemplate().execute(new HibernateCallback() {
            public Set<Reservation> doInHibernate(final Session session) throws HibernateException {
            	Criteria criteria = session.createCriteria(Reservation.class)
            							   .createAlias("client", "cl")
            							   .add(Restrictions.eq("cl.email", email));
            	return new HashSet<Reservation>(criteria.list());
            }

        });
    }
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Set<Reservation> getReservationsOfPublicationsByEmail(String email) {
		return (Set<Reservation>) this.getHibernateTemplate().execute(new HibernateCallback() {
            public Set<Reservation> doInHibernate(final Session session) throws HibernateException {
            	Criteria criteria = session.createCriteria(Reservation.class)
            							   .createAlias("publication", "pub")
            							   .createAlias("pub.owner", "ow")
            							   .add(Restrictions.eq("ow.email", email));
            	return new HashSet<Reservation>(criteria.list());
            }

        });
	}

}
