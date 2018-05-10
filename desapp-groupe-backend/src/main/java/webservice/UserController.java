package webservice;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
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
	public Response getAll(){
		List<User> users = userService.retriveAll();
		return Response.ok(users).build();
	}
	
	public void setUserService(final UserService userService) {
		this.userService = userService;
    }
}
