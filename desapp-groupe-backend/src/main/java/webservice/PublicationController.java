package webservice;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.Publication;
import service.PublicationService;


@Path("/publications")
public class PublicationController {
	public static final int NUMBER_OF_PUBLICATIONS = 10;
	
	 private PublicationService publicationService;

	   @GET
	   @Path("/")
	   @Produces("application/json")
	   public Response getAllPublications() throws JsonProcessingException {
	       List<Publication> all = this.publicationService.retriveAll();
	       String serialized = new ObjectMapper().writeValueAsString(all);
	       return Response.ok(serialized).build();
	   }
	   
	   @GET
	   @Path("/{id}")
	   @Produces("application/json")
	   public Response getPublication(@PathParam("id") int id) throws JsonProcessingException{
		   Publication publication = this.publicationService.findById(id);
		   String serialized = new ObjectMapper().writeValueAsString(publication);
	       return Response.ok(serialized).build();
	   }
	   
	   @GET
	   @Path("/find/{text}")
	   @Produces("application/json")
	   public Response findPublications(@PathParam("text") String text) throws JsonProcessingException {
	       List<Publication> all = this.publicationService.find(text);
	       System.out.println("##################################################");
	       System.out.println(all);
	       String serialized = new ObjectMapper().writeValueAsString(all);
	       System.out.println("##################################################");
	       System.out.println(serialized);
	       return Response.ok(serialized).build();
	   }
	   
	   @POST
	   @Path("/new")
	   @Produces("application/json")
	   public Response newPublication(@RequestBody Publication publication){
		   this.publicationService.save(publication);
		   return Response.ok().build();
	   }
	   
//	   @PUT
//	   @Path("/edit/{id}")
//	   @Produces("application/json")
//	   public void updatePublication(@RequestBody Publication publication){
//		   this.publicationService.update(publication);
//	   }
	   
//	   @DELETE
//	   @Path("/{id}")
//	   @Produces("application/json")
//	   public void deletePublication(@RequestParam("id") int id){
//		   Publication vehicle = this.publicationService.findById(id);
//		   this.publicationService.delete(vehicle);
//	   }
	   
	   public void setPublicationService(final PublicationService publicatioService) {
		   this.publicationService = publicatioService;
	   }
}
