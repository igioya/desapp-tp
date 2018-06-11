package service;

import java.util.List;
import java.util.Set;

import model.Reservation;
import persistence.HibernateReservationDAO;

public class ReservationService extends GenericService<Reservation> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4630781971120543048L;

	public Set<Reservation> getReservationsByEmail(final String email) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		return repository.getReservationsByEmail(email);
	}

}
