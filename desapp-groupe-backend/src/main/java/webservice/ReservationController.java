package webservice;

import java.util.List;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.Reservation;
import service.ReservationService;

@Path("/reservations")
public class ReservationController {
	private ReservationService reservationService;
	
	@GET
	@Path("/{email}")
	@Produces("application/json")
	public Response getReservationsByEmail(@PathParam("email") String email) throws JsonProcessingException{
		Set<Reservation> reservations = this.reservationService.getReservationsByEmail(email);
		String serialized = new ObjectMapper().writeValueAsString(reservations);
	    return Response.ok(serialized).build();
	}
	
	public void setReservationService(final ReservationService reservationService) {
		this.reservationService = reservationService;
	}
}
