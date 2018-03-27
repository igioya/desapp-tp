package model;


import org.joda.time.LocalDateTime;
import junit.framework.TestCase;

public class ReservationTest extends TestCase{
	
	public void test_dadaUnaPublicacionUnUsuarioRealizaUnaReserva() {
		LocalDateTime fromDate = new LocalDateTime(2018, 3, 27, 16, 30); // 27-03-2018 a las 16:30 hs
		LocalDateTime toDate = new LocalDateTime(2018, 3, 29, 16, 30);   // 29-03-2018 a las 16:30 hs
		
		Publication publication = new Publication();
		
		User client = new User();
		
		publication.makeReservation(client, fromDate, toDate);
		
		assertEquals(publication.getReservations().size(), 1);
	}
	
}
