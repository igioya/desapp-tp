package webservice;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import model.Publication;
import service.PublicationService;
import service.VehicleService;


@Path("/publications")
public class PublicationController {
	public static final int NUMBER_OF_PUBLICATIONS = 10;
	
	 private PublicationService service;

	   @GET
	   @Path("/")
	   @Produces("application/json")
	   public List<Publication> getAllPublications() {
	       List<Publication> all = this.service.retriveAll();
	       return all;
	   }
	   
	   @GET
	   @Path("/{id}")
	   @Produces("application/json")
	   public Publication getPublication(@RequestParam("id") long id){
		   return this.service.getById(id);
	   }
	   
	   @POST
	   @Path("/")
	   @Produces("application/json")
	   public void newPublication(@RequestBody Publication publication){
		   this.service.save(publication);
	   }
	   
	   @PUT
	   @Path("/{id}")
	   @Produces("application/json")
	   public void updatePublication(@RequestParam("id") long id,@RequestBody Publication publication){
		   this.service.update(publication);
	   }
	   
	   @DELETE
	   @Path("/{id}")
	   @Produces("application/json")
	   public void deletePublication(@RequestParam("id") long id){
		   Publication vehicle = this.service.getById(id);
		   this.service.delete(vehicle);
	   }
	   
	   public void setPublicationService(final PublicationService publicatioService) {
		   this.service = publicatioService;
	   }
}
