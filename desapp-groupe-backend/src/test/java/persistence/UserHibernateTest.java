package persistence;

import org.junit.After;
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
	
	@After
	public static void tearDown() {
        System.out.println("/////////////// AFTER ///////////////");
    }

    @Test
    public void testDadoUnUsuarioLoPersistoYCuandoPidoTodosLosUsersMeDevuelveUnListadoConEseUser() {
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	
    	userDAO.save(user);
    	User userRetrieved = userDAO.findById(1);
    	
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
    	
    	User userRetrieved = userDAO.findById(1);
    	System.out.println("#################################################");
    	System.out.println(userRetrieved.getMyPublications());
    	System.out.println("#################################################");
    	Publication publication = userRetrieved.getMyPublications().get(0);
    	
    	Assert.assertEquals(1,userRetrieved.getMyPublications().size());
    	Assert.assertEquals(vehicle.getClass(), publication.getVehicle().getClass());
    	Assert.assertEquals("retireAddress", publication.getRetireAddress());
    	Assert.assertEquals("returnAddress", publication.getReturnAddress());
    	Assert.assertEquals("4250432244", publication.getTelephone());
    	Assert.assertEquals((Double)800.00, publication.getCostPerHour());
    }
    
    @Test 
    public void testDadoUnUsuarioConUnaPublicacionCuandoCreaOtraYLoPersistoQuedanLasDosGuardadasEnSuListaDePublicaciones(){
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	Vehicle vehicle = new Vehicle();
    	
    	user.createNewPublication(vehicle, "retireAddress", "returnAddress", "4250432244", 800.00);
    	userDAO.save(user);
    	
    	user.createNewPublication(vehicle, "retireAddress", "returnAddress", "4250432244", 800.00);
    	
    	userDAO.update(user);
    	
    	Assert.assertEquals(2,userDAO.findById(1).getMyPublications().size());
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
    	userDAO.save(user);
    	Assert.assertEquals(BannedState.class, userDAO.findById(1).getState().getClass());
    }
    
    @Test 
    public void testDadoUnUsuarioVerificoQueSuCuentaCorrienteSePersistaCorrectamente(){
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	userDAO.save(user);
    	
    	User userRetrieved = userDAO.findById(1);
    	userRetrieved.addCredit(50.00);
    	userDAO.update(userRetrieved);
    	
    	Assert.assertEquals((Double)50.00, userDAO.findById(1).getCurrentAccount().getCredit());
    }
}
