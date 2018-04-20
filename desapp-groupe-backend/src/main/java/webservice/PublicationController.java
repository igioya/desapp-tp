package webservice;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import model.Publication;


@Path("/publications")
public class PublicationController {
	public static final int NUMBER_OF_PUBLICATIONS = 10;
	
	@GET
    @Path("/")
    @Produces("application/json")
    public String getPublications() {
        
        return "{}";
    }
}
