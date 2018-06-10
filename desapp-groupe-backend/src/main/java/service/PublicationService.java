package service;

import java.util.List;

import model.Publication;
import model.Reservation;
import model.User;
import model.exceptions.DateNotAvailableException;
import persistence.HibernatePublicationDAO;
import persistence.HibernateUserDAO;

public class PublicationService extends GenericService<Publication> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6300990314754071423L;
	
	private HibernateUserDAO userRepository;
	
	public List<Publication> find(final String text) {
		HibernatePublicationDAO repository = (HibernatePublicationDAO) this.getRepository();
		return repository.filter(text);
	}
	
	public void newReservation(Reservation reservation, int idPublication) throws DateNotAvailableException {
		//User client = this.userRepository.getByEmail(reservation.getClient().getEmail());
		HibernatePublicationDAO repository = (HibernatePublicationDAO) this.getRepository();
		Publication publication = repository.findById(idPublication);
		publication.makeReservation(reservation.getClient(), reservation.getFromDate(), reservation.getToDate());
		repository.update(publication);
	}
	
	public void	setUserRepository(final HibernateUserDAO userRepository){
		this.userRepository = userRepository;
	}

}
