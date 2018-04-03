package model;


import org.joda.time.LocalDateTime;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import model.exceptions.DateNotAvailableException;

import static org.junit.Assert.*;


public class ReservationTest {
	

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test_dadaUnaPublicacionUnUsuarioRealizaUnaReserva() {
		LocalDateTime fromDate = new LocalDateTime();
		LocalDateTime toDate = new LocalDateTime();
		
		Publication publication = new Publication();
		
		User client = new User();
		
		try {
			publication.makeReservation(client, fromDate, toDate);
		} catch (DateNotAvailableException e) {
			e.printStackTrace();
		}
		
		assertEquals(publication.getReservations().size(), 1);
	}
	
	@Test(expected = DateNotAvailableException.class)
	public void test_dadaUnaPublicacionConUnaReservaCuandoSeIntentaHacerOtraReservaQueSeSuperponeNoLoPermite() throws DateNotAvailableException{
		LocalDateTime fromDate1 = new LocalDateTime(2018, 3, 22, 16, 30); // 22-03-2018 a las 16:30 hs
		LocalDateTime toDate1 = new LocalDateTime(2018, 3, 29, 16, 30);   // 29-03-2018 a las 16:30 hs
		LocalDateTime fromDate2 = new LocalDateTime(2018, 3, 25, 15, 00);   // 25-03-2018 a las 15:00 hs
		LocalDateTime toDate2 = new LocalDateTime(2018, 4, 1, 15, 00);   // 1-04-2018 a las 15:00 hs
		
		Publication publication = new Publication();
		User client = new User();		
		
		publication.makeReservation(client, fromDate1, toDate1);
		publication.makeReservation(client, fromDate2, toDate2);
	}
	
	
	
}
