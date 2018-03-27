package model;


import org.joda.time.LocalDateTime;
import junit.framework.TestCase;

public class ReservationTest extends TestCase{
	
	public void test_dadaUnaPublicacionUnUsuarioRealizaUnaReserva() {
		LocalDateTime fromDate = new LocalDateTime();
		LocalDateTime toDate = new LocalDateTime();
		
		Publication publication = new Publication();
		
		User client = new User();
		
		publication.makeReservation(client, fromDate, toDate);
		
		assertEquals(publication.getReservations().size(), 1);
	}
	
	
}
