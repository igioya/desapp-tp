package persistence;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import model.User;
import service.UserService;

public class UserHibernateTest extends HibernateTest{
	@Autowired	
    private UserService userDAO;

    @Test
    public void testSave() {
    	User user = new User("20658774580","Carlos","Dominguez","Calle falsa 123","email.false@gmail.com");
    	userDAO.save(user);
        Assert.assertEquals(1, userDAO.retriveAll().size());
    }
}
