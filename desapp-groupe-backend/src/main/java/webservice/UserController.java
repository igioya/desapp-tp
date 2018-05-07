package webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import model.User;
import service.UserService;

@Path("/users")
public class UserController {
	
	private UserService userService;
	
	@POST
    @Path("/new")
    @Produces("application/json")
	@Consumes("application/json")
	public Response newUser(User user){
		userService.save(user);
		return Response.ok().build();
	} 
	
	public void setUserService(final UserService userService) {
		this.userService = userService;
    }
}
