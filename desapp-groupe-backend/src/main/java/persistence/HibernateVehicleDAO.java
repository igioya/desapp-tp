package persistence;

import model.Publication;

public class HibernateVehicleDAO extends HibernateGenericDAO<Publication> implements GenericRepository<Publication>{

	private static final long serialVersionUID = -8450367060304883300L;

	@Override
	protected Class<Publication> getDomainClass() {
		return Publication.class;
	}

}
