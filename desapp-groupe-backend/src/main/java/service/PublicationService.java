package service;

import java.util.Set;

import model.Publication;
import model.Reservation;
import model.exceptions.DateNotAvailableException;
import persistence.HibernatePublicationDAO;
import persistence.HibernateUserDAO;

public class PublicationService extends GenericService<Publication> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6300990314754071423L;
	
	private HibernatePublicationDAO repository;
	
	public Set<Publication> find(final String text) {
		return repository.filter(text);
	}
	
	public Set<Publication> getPublicationsByEmail(final String email) {
		return repository.getPublicationsByEmail(email);
	}
	
	public void newReservation(Reservation reservation, int idPublication) throws DateNotAvailableException {
		Publication publication = repository.findById(idPublication);
		publication.makeReservation(reservation.getClient(), reservation.getFromDate(), reservation.getToDate());
		repository.update(publication);
	}
	
	public void	setPublicationRepository(final HibernatePublicationDAO publicationRepository){
		this.repository = publicationRepository;
	}

}
