package model;


import org.joda.time.LocalDateTime;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import model.exceptions.DateNotAvailableException;
import model.reservationStates.ConfirmedByOwnerState;
import model.reservationStates.NotConfirmedState;
import model.reservationStates.RetireConfirmedByClientState;
import model.reservationStates.RetireConfirmedByOwnerState;
import model.reservationStates.RetireConfirmedState;
import model.reservationStates.ReturnConfirmedByClientState;
import model.reservationStates.ReturnConfirmedByOwnerState;
import model.reservationStates.ReturnConfirmedState;

import static org.junit.Assert.*;


public class ReservationTest {
	

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	
	@Test
	public void test_seCreaUnaReservaYComienzaEnNotConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		assertEquals(newReservation.getState().getClass(), NotConfirmedState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnNotConfirmedStateCuandoElOwnerConfirmaQuedaEnConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmReservationByOwner();
		
		assertEquals(newReservation.getState().getClass(), ConfirmedByOwnerState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnConfirmedStateCuandoElClienteConfirmaElRetiroQuedaEnRetireConfirmedByClient() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByClient();
		
		assertEquals(newReservation.getState().getClass(), RetireConfirmedByClientState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnConfirmedStateCuandoElOwnerConfirmaElRetiroQuedaEnRetireConfirmedByOwner() throws DateNotAvailableException{
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
}
