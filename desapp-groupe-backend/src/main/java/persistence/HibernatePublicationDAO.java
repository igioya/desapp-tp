package persistence;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.HibernateCallback;

import model.Publication;

public class HibernatePublicationDAO extends HibernateGenericDAO<Publication> implements GenericRepository<Publication>{
	private static final long serialVersionUID = -4036535812105672110L;
	
	@Override
	protected Class<Publication> getDomainClass() {
		return Publication.class;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
    public Set<Publication> filter(final String pattern) {
    	
        return (Set<Publication>) this.getHibernateTemplate().execute(new HibernateCallback() {
            public Set<Publication> doInHibernate(final Session session) throws HibernateException {
                Criteria criteria = session.createCriteria(Publication.class);
                criteria.add(
                		Restrictions.disjunction()
                					.add(Restrictions.like("retireAddress", "%" + pattern + "%").ignoreCase())
                					.add(Restrictions.like("returnAddress", "%" + pattern + "%").ignoreCase())
                );
                
                return new HashSet<Publication>(criteria.list());
            }

        });
    }
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Set<Publication> getPublicationsByEmail(final String email){
        return (Set<Publication>) this.getHibernateTemplate().execute(new HibernateCallback() {
            public Set<Publication> doInHibernate(final Session session) throws HibernateException {
            	Criteria criteria = session.createCriteria(Publication.class)
            							   .createAlias("owner", "ow")
            							   .add(Restrictions.eq("ow.email", email));
            	return new HashSet<Publication>(criteria.list());
            }

        });
    }

}
