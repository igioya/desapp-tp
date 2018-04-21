package persistence;

import model.Publication;

public class PublicationRepository extends HibernateGenericDAO<Publication> implements GenericRepository<Publication>{
	private static final long serialVersionUID = -4036535812105672110L;
	
	@Override
	protected Class<Publication> getDomainClass() {
		return Publication.class;
	}

}
