package model;


import org.joda.time.LocalDateTime;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import model.exceptions.DateNotAvailableException;
import model.reservationStates.ConfirmedRetireByClientState;
import model.reservationStates.ConfirmedReturnByClientState;
import model.reservationStates.ConfirmedReturnByOwnerState;
import model.reservationStates.WaitingForRetireState;
import model.reservationStates.WaitingForReturnState;

import static org.junit.Assert.*;


public class ReservationTest {
	

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	
	
	@Test
	public void test_dadaUnaReservaCuandoElOwnerConfirmaLaReservaQuedaEnEstadoWaitingForRetireState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
//		changeStateToWaitingForRetire
		newReservation.changeStateToNext();
		
		assertEquals(newReservation.getState().getClass(), WaitingForRetireState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaConfirmadaCuandoElClienteConfirmaElRetiroQuedaEnEstadoConfirmedByClientState() throws DateNotAvailableException{ //test_dadaUnaPublicacionConUnaReservaEnEstadoWaitingForRetireCuandoElClienteConfirmaElRetiroQuedaEnEstadoConfirmedByClientState
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
//		changeStateToWaitingForRetire
		newReservation.changeStateToNext();
//		changeStateToConfirmedRetireByClient
		newReservation.changeStateToNext();
		
		assertEquals(newReservation.getState().getClass(), ConfirmedRetireByClientState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaConfirmadaPorElClienteCuandoConfirmaElOwnerQuedaEnEstadoWaitingForReturnState() throws DateNotAvailableException{ //test_dadaUnaPublicacionConUnaReservaEnEstadoWaitingForRetireCuandoElClienteConfirmaElRetiroQuedaEnEstadoConfirmedByClientState
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
//		changeStateToWaitingForRetire
		newReservation.changeStateToNext();
//		changeStateToConfirmedRetireByClient
		newReservation.changeStateToNext();
//		changeStateToWaitingForReturn
		newReservation.changeStateToNext();
		
		assertEquals(newReservation.getState().getClass(), WaitingForReturnState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnEstadoWaitingForReturnStateCuandoClienteConfirmaRetornoQuedaEnEstadoConfirmedReturnByClientState() throws DateNotAvailableException{ //test_dadaUnaPublicacionConUnaReservaEnEstadoWaitingForRetireCuandoElClienteConfirmaElRetiroQuedaEnEstadoConfirmedByClientState
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
//		changeStateToWaitingForRetire
		newReservation.changeStateToNext();
//		changeStateToConfirmedRetireByClient
		newReservation.changeStateToNext();
//		changeStateToWaitingForReturn
		newReservation.changeStateToNext();
//		changeStateToConfirmedReturnByClient
		newReservation.changeStateToNext();
		
		assertEquals(newReservation.getState().getClass(), ConfirmedReturnByClientState.class);		
	}
	
	@Test
	public void test_dadaUnaReservaEnEstadoConfirmedReturnByClientStateCuandoOwnerConfirmaRetornoQuedaEnEstadoConfirmedReturnByOwnerState() throws DateNotAvailableException{ //test_dadaUnaPublicacionConUnaReservaEnEstadoWaitingForRetireCuandoElClienteConfirmaElRetiroQuedaEnEstadoConfirmedByClientState
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
//		changeStateToWaitingForRetire
		newReservation.changeStateToNext();
//		changeStateToConfirmedRetireByClient
		newReservation.changeStateToNext();
//		changeStateToWaitingForReturn
		newReservation.changeStateToNext();
//		changeStateToConfirmedReturnByClient
		newReservation.changeStateToNext();
//		changeStateToConfirmedReturnByOwner
		newReservation.changeStateToNext();
		
		assertEquals(newReservation.getState().getClass(), ConfirmedReturnByOwnerState.class);		
	}
	
	
	
	
	
}
