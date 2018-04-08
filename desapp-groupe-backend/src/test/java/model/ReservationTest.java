package model;


import org.joda.time.LocalDateTime;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import model.exceptions.DateNotAvailableException;
import model.states.reservation.ReservationConfirmedState;
import model.states.reservation.ReservationNotConfirmedState;
import model.states.reservation.RetireConfirmedByClientState;
import model.states.reservation.RetireConfirmedByOwnerState;
import model.states.reservation.RetireConfirmedState;
import model.states.reservation.ReturnConfirmedByClientState;
import model.states.reservation.ReturnConfirmedByOwnerState;
import model.states.reservation.ReturnConfirmedState;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;


public class ReservationTest {
	

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	
	@Test
	public void test_seCreaUnaReservaYComienzaEnReservationNotConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		assertEquals(newReservation.getState().getClass(), ReservationNotConfirmedState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnReservationNotConfirmedStateCuandoElOwnerConfirmaQuedaEnReservationConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmReservationByOwner();
		
		assertEquals(newReservation.getState().getClass(), ReservationConfirmedState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnReservationConfirmedStateCuandoElClienteConfirmaElRetiroQuedaEnRetireConfirmedByClient() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByClient();
		
		assertEquals(newReservation.getState().getClass(), RetireConfirmedByClientState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnReservationConfirmedStateCuandoElOwnerConfirmaElRetiroQuedaEnRetireConfirmedByOwner() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		
		assertEquals(newReservation.getState().getClass(), RetireConfirmedByOwnerState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedByClientCuandoElOwnerConfirmaQuedaEnRetireConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByClient();
		newReservation.confirmRetireByOwner();
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedByOwnerCuandoElClientConfirmaQuedaEnRetireConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();		
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedCuandoElOwnerConfirmaElRetornoQuedaEnReturnConfirmedByOwner() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByOwner();
		
		assertEquals(ReturnConfirmedByOwnerState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedCuandoElClientConfirmaElRetornoQuedaEnReturnConfirmedByClient() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByClient();
		
		assertEquals(ReturnConfirmedByClientState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnReturnConfirmedByClientCuandoElOwnerConfirmaElRetornoQuedaEnReturnConfirmed() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByClient();
		newReservation.confirmReturnByOwner();
		
		assertEquals(ReturnConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnReturnConfirmedByOwnerCuandoElClientConfirmaElRetornoQuedaEnReturnConfirmed() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByOwner();
		newReservation.confirmReturnByClient();
		
		assertEquals(ReturnConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedByOwnerStateCuandoPasan30MinQuedaEnRetireConfirmedState() throws DateNotAvailableException, InterruptedException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		newReservation.confirmRetireByOwner();
		newReservation.setMINUTES(3.00 * 0.0166667);//0.5 minute, for testing
		
		TimeUnit.SECONDS.sleep(5);
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void test_dadaUnaReservaEnRetireConfirmedByClientCuandoPasan30minQuedaEnReservationConfirmedState() throws DateNotAvailableException, InterruptedException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		newReservation.confirmRetireByClient();
		newReservation.setMINUTES(3.00 * 0.0166667);//0.5 minute, for testing 
		
		TimeUnit.SECONDS.sleep(5);
		
		assertEquals(ReservationConfirmedState.class, newReservation.getState().getClass());		
	}
}
