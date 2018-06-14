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

import org.springframework.web.bind.annotation.RequestBody;

import model.Vehicle;
import service.VehicleService;

@Path("/vehicles")
public class VehicleController {

    public static final int NUMBER_OF_VEHICLES = 10;

    private  VehicleService vehicleService;
    

   @GET
   @Path("/")
   @Produces("application/json")
   public List<Vehicle> getAllVehicle() {
       List<Vehicle> all = this.vehicleService.retriveAll();
       return all;
   }
   
   @GET
   @Path("/{id}")
   @Produces("application/json")
   public Vehicle getVehicle(@PathParam("id") int id){
	   return this.vehicleService.findById(id);
   }
   
   @POST
   @Path("/new")
   @Produces("application/json")
   @Consumes("application/json")
   public Response newVehicle(@RequestBody Vehicle vehicle){
	   this.vehicleService.save(vehicle);
	   return Response.ok().build();
   }
   
   @PUT
   @Path("/edit")
   @Produces("application/json")
   public void updateVehicle(@RequestBody Vehicle vehicle){
	   this.vehicleService.update(vehicle);
   }
   
   @DELETE
   @Path("/{id}")
   @Produces("application/json")
   @Consumes("application/json")
   public void deleteVehicle(@PathParam("id") int id){
	   Vehicle v = this.vehicleService.findById(id);
	   this.vehicleService.delete(v);
   }
   
   public void setVehicleService(final VehicleService vehicleService) {
	   this.vehicleService = vehicleService;
   }
   
}