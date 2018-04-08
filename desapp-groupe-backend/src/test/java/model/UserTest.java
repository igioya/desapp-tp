package model;



import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import model.userStates.ActiveState;
import model.userStates.BannedState;


public class UserTest {
	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void test_dadoUnUsuarioConPromedio4CuandoSeLoPuntuaYSuPromedioBajaDe4QuedaEnBannedState(){
		User user = new User();
		user.giveScore(4);
		user.giveScore(4);
		user.giveScore(1);
//		System.out.println(user.getRating());
		assertEquals(BannedState.class,user.getState().getClass());
	}
	
	@Test
	public void test_dadoUnUsuarioConPromedio3CuandoSeLoPuntuaYSuPromedioSubeA4QuedaEnActiveState(){
		User user = new User();
		user.giveScore(3);
		user.giveScore(5);
		assertEquals(ActiveState.class,user.getState().getClass());
	}
}
