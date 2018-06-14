package webservice;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import model.User;
import service.UserService;

@Path("/users")
public class UserController {
		
	private UserService userService;
	
	@POST
    @Path("/new")
	@Consumes("application/json")
	public Response newUser(User user){
		userService.save(user);
		return Response.ok().build();
	}
	
	@PUT
    @Path("/edit")
	@Consumes("application/json")
	public Response updateUser(User user){
		userService.update(user);
		return Response.ok().build();
	}
	
	@GET
    @Path("/")
	@Consumes("application/json")
	@Produces("application/json")
	public Response getAllUser(){
		List<User> users = userService.retriveAll();
		return Response.ok(users).build();
	}
	
	@GET
    @Path("/{id}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response getUserUser(@PathParam("id") int id){
		User user = userService.findById(id);
		return Response.ok(user).build();
	}
	
	@GET
    @Path("/byemail/{email}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response haveFullProfileUser(@PathParam("email") String email){
		boolean havefullProfile = userService.haveFullProfile(email);
		return Response.ok(havefullProfile).build();
	}
	
	@GET
    @Path("/getbyemail/{email}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response getByEmailUser(@PathParam("email") String email){
		User user = userService.getUserByEmail(email);
		return Response.ok(user).build();
	}
	
	@PUT
    @Path("/{id}/add/{credit}")
	//@Consumes("application/json")
	@Produces("application/json")
	public Response addCreditUser(@PathParam("id") final int id, @PathParam("credit") final float credit){
		this.userService.addCredits(id, credit);
		return Response.ok().build();
	}

	@PUT
    @Path("/{id}/retire/{credit}")
	//@Consumes("application/json")
	@Produces("application/json")
	public Response retireCreditUser(@PathParam("id") final int id, @PathParam("credit") final float credit){
		this.userService.retireCredits(id, credit);
		return Response.ok().build();
	}
	
	@GET
    @Path("/myVehicles/{email}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response getMyVehiclesUser(@PathParam("email") String email){
		User user = userService.getUserByEmail(email);
		return Response.ok(user.getMyVehicles()).build();
	}
	
	public void setUserService(final UserService userService) {
		this.userService = userService;
    }
}
