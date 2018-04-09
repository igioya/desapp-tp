package model;


import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.joda.time.LocalDateTime;
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


public class ReservationTest {
	
	@Test
	public void seCreaUnaReservaYComienzaEnReservationNotConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		assertEquals(newReservation.getState().getClass(), ReservationNotConfirmedState.class);		
	}
	
	@Test
	public void dadaUnaReservaEnReservationNotConfirmedStateCuandoElOwnerConfirmaQuedaEnReservationConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmReservationByOwner();
		
		assertEquals(newReservation.getState().getClass(), ReservationConfirmedState.class);		
	}
	
	@Test
	public void dadaUnaReservaEnReservationConfirmedStateCuandoElClienteConfirmaElRetiroQuedaEnRetireConfirmedByClient() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByClient();
		
		assertEquals(newReservation.getState().getClass(), RetireConfirmedByClientState.class);		
	}
	
	@Test
	public void dadaUnaReservaEnReservationConfirmedStateCuandoElOwnerConfirmaElRetiroQuedaEnRetireConfirmedByOwner() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		
		assertEquals(newReservation.getState().getClass(), RetireConfirmedByOwnerState.class);		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedByClientCuandoElOwnerConfirmaQuedaEnRetireConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByClient();
		newReservation.confirmRetireByOwner();
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedByOwnerCuandoElClientConfirmaQuedaEnRetireConfirmedState() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();		
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedCuandoElOwnerConfirmaElRetornoQuedaEnReturnConfirmedByOwner() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByOwner();
		
		assertEquals(ReturnConfirmedByOwnerState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedCuandoElClientConfirmaElRetornoQuedaEnReturnConfirmedByClient() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByClient();
		
		assertEquals(ReturnConfirmedByClientState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnReturnConfirmedByClientCuandoElOwnerConfirmaElRetornoQuedaEnReturnConfirmed() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByClient();
		newReservation.confirmReturnByOwner();
		
		assertEquals(ReturnConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnReturnConfirmedByOwnerCuandoElClientConfirmaElRetornoQuedaEnReturnConfirmed() throws DateNotAvailableException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		
		newReservation.confirmRetireByOwner();
		newReservation.confirmRetireByClient();
		
		newReservation.confirmReturnByOwner();
		newReservation.confirmReturnByClient();
		
		assertEquals(ReturnConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedByOwnerStateCuandoPasan30MinQuedaEnRetireConfirmedState() throws DateNotAvailableException, InterruptedException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		newReservation.confirmRetireByOwner();
		newReservation.setMINUTES(3.00 * 0.0166667);//0.5 minute, for testing
		
		TimeUnit.SECONDS.sleep(5);
		
		assertEquals(RetireConfirmedState.class, newReservation.getState().getClass());		
	}
	
	@Test
	public void dadaUnaReservaEnRetireConfirmedByClientCuandoPasan30minQuedaEnReservationConfirmedState() throws DateNotAvailableException, InterruptedException{
		User client = new User();
		
		Reservation newReservation = new Reservation(client, new LocalDateTime(), new LocalDateTime());
		newReservation.confirmRetireByClient();
		newReservation.setMINUTES(3.00 * 0.0166667);//0.5 minute, for testing 
		
		TimeUnit.SECONDS.sleep(5);
		
		assertEquals(ReservationConfirmedState.class, newReservation.getState().getClass());		
	}
}
