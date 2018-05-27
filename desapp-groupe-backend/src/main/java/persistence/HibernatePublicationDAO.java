package persistence;

import java.util.List;

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
    public List<Publication> filter(final String pattern) {
    	
        return (List<Publication>) this.getHibernateTemplate().execute(new HibernateCallback() {
            public List<Publication> doInHibernate(final Session session) throws HibernateException {
                Criteria criteria = session.createCriteria(Publication.class);
                criteria.add(
                		Restrictions.disjunction()
                					.add(Restrictions.like("retireAddress", "%" + pattern + "%").ignoreCase())
                					.add(Restrictions.like("returnAddress", "%" + pattern + "%").ignoreCase())
                );
                
                List<Publication> p = criteria.list();
                log.info("Retornando FilterPublications con el patron: "+ pattern);
                return criteria.list();
            }

        });
    }

}
