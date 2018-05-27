package service;

import java.util.List;

import model.Publication;
import persistence.HibernatePublicationDAO;

public class PublicationService extends GenericService<Publication> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6300990314754071423L;
	
	public List<Publication> find(final String text) {
		HibernatePublicationDAO repository = (HibernatePublicationDAO) this.getRepository();
		return repository.filter(text);
	}

}
