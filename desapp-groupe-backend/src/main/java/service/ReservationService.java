package service;

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
	
	public Set<Reservation> getReservationsOfPublicationsByEmail(String email) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		return repository.getReservationsOfPublicationsByEmail(email);
	}

	public void confirmRetireByClient(Integer id) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		Reservation reservationRetrieved = repository.findById(id);
		reservationRetrieved.confirmRetireByClient();
		repository.update(reservationRetrieved);
	}

	public void confirmReturnByClient(Integer id) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		Reservation reservationRetrieved = repository.findById(id);
		reservationRetrieved.confirmReturnByClient();
		repository.update(reservationRetrieved);		
	}

	public void confirmRetireByOwner(Integer id) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		Reservation reservationRetrieved = repository.findById(id);
		reservationRetrieved.confirmRetireByOwner();
		repository.update(reservationRetrieved);	
		
	}

	public void confirmReturnByOwner(Integer id) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		Reservation reservationRetrieved = repository.findById(id);
		reservationRetrieved.confirmReturnByOwner();
		repository.update(reservationRetrieved);	
		
	}

	public void confirmReservationByOwner(Integer id) {
		HibernateReservationDAO repository = (HibernateReservationDAO) this.getRepository();
		Reservation reservationRetrieved = repository.findById(id);
		reservationRetrieved.confirmReservationByOwner();
		repository.update(reservationRetrieved);			
	}

}
