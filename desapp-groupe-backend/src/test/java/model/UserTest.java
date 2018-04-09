package model;



import static org.junit.Assert.assertEquals;

import org.junit.Test;

import model.states.user.ActiveState;
import model.states.user.BannedState;


public class UserTest {
	
	@Test
	public void test_dadoUnUsuarioConPromedio4CuandoSeLoPuntuaYSuPromedioBajaDe4QuedaEnBannedState(){
		User user = new User();
		user.giveScore(4);
		user.giveScore(4);
		user.giveScore(1);

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
