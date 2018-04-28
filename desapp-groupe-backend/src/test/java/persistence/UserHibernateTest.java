package persistence;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import model.Publication;
import model.User;
import model.Vehicle;
import model.states.user.ActiveState;
import model.states.user.BannedState;

public class UserHibernateTest extends HibernateTest{
	@Autowired	
    private HibernateUserDAO userDAO;

    @Test
    public void testDadoUnUsuarioLoPersistoYCuandoPidoTodosLosUsersMeDevuelveUnListadoConEseUser() {
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	
    	userDAO.save(user);
    	User userRetrieved = userDAO.findAll().get(0);
    	
        Assert.assertEquals(user.getCuil(), userRetrieved.getCuil());
        Assert.assertEquals(user.getName(), userRetrieved.getName());
        Assert.assertEquals(user.getSurname(), userRetrieved.getSurname());
        Assert.assertEquals(user.getAddress(), userRetrieved.getAddress());
        Assert.assertEquals(user.getEmail(), userRetrieved.getEmail());
    }
    
    @Test 
    public void testDadoUnUsuarioCuandoCreaUnaPublicacioYLoPersistoQuedaGuardadaEnSuListaDePublicaciones(){
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	Vehicle vehicle = new Vehicle();
    	
    	user.createNewPublication(vehicle, "retireAddress", "returnAddress", "4250432244", 800.00);
    	userDAO.save(user);
    	
    	User userRetrieved = userDAO.findAll().get(0); 
    	Publication publication = userRetrieved.getMyPublications().get(0);
    	
    	Assert.assertEquals(1,userRetrieved.getMyPublications().size());
    	Assert.assertEquals(publication.getVehicle().getClass(), vehicle.getClass());
    	Assert.assertEquals(publication.getRetireAddress(), "retireAddress");
    	Assert.assertEquals(publication.getReturnAddress(), "returnAddress");
    	Assert.assertEquals(publication.getTelephone(), "4250432244");
    	Assert.assertEquals(publication.getCostPerHour(), (Double)800.00);
    }
    
    @Test 
    public void testDadoUnUsuarioActivoLoPersistoYCuandoLoRecuperoSuEstadoEsActiveState(){
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	userDAO.save(user);
    	Assert.assertEquals(ActiveState.class, userDAO.findById(1).getState().getClass());
    }
    
    @Test 
    public void testDadoUnUsuarioBaneadoLoPersistoYCuandoLoRecuperoSuEstadoEsBannedState(){
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	user.giveScore(1);
    	user.giveScore(1);
    	user.giveScore(1);
    	userDAO.save(user);
    	Assert.assertEquals(BannedState.class, userDAO.findById(1).getState().getClass());
    }
}
