package model;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDateTime;
import org.junit.Test;

import model.exceptions.DateNotAvailableException;

public class PublicationTest {

	@Test
	public void cuandoUnUsuarioCreaUnaPublicacionSeGuardaEnSuListaDePublicaciones() throws DateNotAvailableException {
		User publicationOwner = new User();
		List<Ubication> returnAdress = new ArrayList<Ubication>();
		
		Publication newPublication = publicationOwner.createNewPublication(new Vehicle(), new Ubication(),returnAdress, "", "", 100.00, publicationOwner);
		
		assertEquals(publicationOwner.getMyPublications().get(0), newPublication);
	}
	
	@Test
	public void dadaUnaPublicacionCuandoUnUsuarioRealizaUnaReservaQuedaGuardadaEnLaListaDeReservasDeLaPublicacion() throws DateNotAvailableException {
		LocalDateTime fromDate = new LocalDateTime();
		LocalDateTime toDate = new LocalDateTime();
		
		Publication publication = new Publication();
		
		User client = new User();
		
		Reservation newReservation = publication.makeReservation(client, fromDate, toDate);
		
		assertEquals(publication.getReservations().get(0), newReservation);
	}
	
	@Test
	public void dadaUnaPublicacionCuandoUnClienteHaceUnaReservaSeAgregaEsaReservaASuListaDeReservas() throws DateNotAvailableException{
		Publication publication = new Publication();
		User client = new User();
		
		Reservation newReservation = publication.makeReservation(client, new LocalDateTime(), new LocalDateTime());
		
		assertEquals(client.getReservations().get(0), newReservation);		
	}
	
	@Test(expected = DateNotAvailableException.class)
	public void dadaUnaPublicacionConUnaReservaCuandoSeIntentaHacerOtraReservaQueSeSuperponeNoLoPermite() throws DateNotAvailableException{
		LocalDateTime fromDate1 = new LocalDateTime().minusDays(2);
		LocalDateTime toDate1 = fromDate1.plusDays(5);   				  
		LocalDateTime fromDate2 = new LocalDateTime(); 
		LocalDateTime toDate2 = fromDate2.plusDays(5);   				  
		
		Publication publication = new Publication();
		User client = new User();		
		
		publication.makeReservation(client, fromDate1, toDate1);
		publication.makeReservation(client, fromDate2, toDate2);
	}
	
}
