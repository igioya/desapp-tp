package webservice;

import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.Reservation;
import service.ReservationService;

@Path("/reservations")
public class ReservationController {
	private ReservationService reservationService;
	
	@GET
	@Path("/byemail/{email}")
	@Produces("application/json")
	public Response getByEmailReservation(@PathParam("email") String email) throws JsonProcessingException{
		Set<Reservation> reservations = this.reservationService.getReservationsByEmail(email);
		String serialized = new ObjectMapper().writeValueAsString(reservations);
	    return Response.ok(serialized).build();
	}
	
	@GET
	@Path("/reservationsOfPublicationsByemail/{email}")
	@Produces("application/json")
	public Response getOfPublicationsByEmailReservation(@PathParam("email") String email) throws JsonProcessingException{
		Set<Reservation> reservations = this.reservationService.getReservationsOfPublicationsByEmail(email);
		String serialized = new ObjectMapper().writeValueAsString(reservations);
	    return Response.ok(serialized).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces("application/json")
	public Response getByIdReservation(@PathParam("id") int id) throws JsonProcessingException{
		Reservation reservation = this.reservationService.findById(id);
		String serialized = new ObjectMapper().writeValueAsString(reservation);
	    return Response.ok(serialized).build();
	}
	
	@PUT
	@Path("/confirmReservationByOwner")
	@Produces("application/json")
	public Response confirmByOwnerReservation(@RequestBody Integer id) throws JsonProcessingException{
		this.reservationService.confirmReservationByOwner(id);
	    return Response.ok().build();
	}
	
	
	@PUT
	@Path("/confirmRetireByClient")
	@Produces("application/json")
	public Response confirmRetireByClientReservation(@RequestBody Integer id) throws JsonProcessingException{
		this.reservationService.confirmRetireByClient(id);
	    return Response.ok().build();
	}
	
	@PUT
	@Path("/confirmReturnByClient")
	@Produces("application/json")
	public Response confirmReturnByClientReservation(@RequestBody Integer id) throws JsonProcessingException{
		this.reservationService.confirmReturnByClient(id);
	    return Response.ok().build();
	}
	
	@PUT
	@Path("/confirmRetireByOwner")
	@Produces("application/json")
	public Response confirmRetireByOwnerReservation(@RequestBody Integer id) throws JsonProcessingException{
		this.reservationService.confirmRetireByOwner(id);
	    return Response.ok().build();
	}
	
	@PUT
	@Path("/confirmReturnByOwner")
	@Produces("application/json")
	public Response confirmReturnByOwnerReservation(@RequestBody Integer id) throws JsonProcessingException{
		this.reservationService.confirmReturnByOwner(id);
	    return Response.ok().build();
	}
	
	public void setReservationService(final ReservationService reservationService) {
		this.reservationService = reservationService;
	}
}
