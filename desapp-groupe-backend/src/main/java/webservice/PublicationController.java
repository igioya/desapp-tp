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


@Path("/publications")
public class PublicationController {
	public static final int NUMBER_OF_PUBLICATIONS = 10;
	
	 private PublicationService publicationService;

	   @GET
	   @Path("/")
	   @Produces("application/json")
	   public List<Publication> getAllPublications() {
	       List<Publication> all = this.publicationService.retriveAll();
	       return all;
	   }
	   
	   @GET
	   @Path("/{id}")
	   @Produces("application/json")
	   public Publication getPublication(@RequestParam("id") int id){
		   return this.publicationService.findById(id);
	   }
	   
	   @POST
	   @Path("/new")
	   @Produces("application/json")
	   public void newPublication(@RequestBody Publication publication){
		   this.publicationService.save(publication);
	   }
	   
	   @PUT
	   @Path("/edit/{id}")
	   @Produces("application/json")
	   public void updatePublication(@RequestBody Publication publication){
		   this.publicationService.update(publication);
	   }
	   
	   @DELETE
	   @Path("/{id}")
	   @Produces("application/json")
	   public void deletePublication(@RequestParam("id") int id){
		   Publication vehicle = this.publicationService.findById(id);
		   this.publicationService.delete(vehicle);
	   }
	   
	   public void setPublicationService(final PublicationService publicatioService) {
		   this.publicationService = publicatioService;
	   }
}
