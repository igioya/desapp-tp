package persistence;

import model.Vehicle;

public class HibernateVehicleDAO extends HibernateGenericDAO<Vehicle> implements GenericRepository<Vehicle>{

	private static final long serialVersionUID = -8450367060304883300L;

	@Override
	protected Class<Vehicle> getDomainClass() {
		return Vehicle.class;
	}

}
