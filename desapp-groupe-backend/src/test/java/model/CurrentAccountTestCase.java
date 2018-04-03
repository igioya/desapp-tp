package model;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import org.junit.Test;

import model.exceptions.IlegalOperationException;

public class CurrentAccountTestCase {

	@Test
	public void whenIAddCreditToAnAccountCheckThatTheOperationIsDone() {

		CurrentAccount account = new CurrentAccount();

		account.addCredit(500.5);
		assertTrue(account.getCredit().equals(500.5));
		assertTrue(account.getMovements().contains("Se acreditaron $500.5 en tu cuenta"));
	}

	@Test
	public void whenIDoATransferToAVehicleOwnerCheckThatTheOperationIsDone() throws IlegalOperationException {

		User vehicleOwner = mock(User.class);
		CurrentAccount account = new CurrentAccount();
		account.addCredit(500.5);

		account.transferCreditTo(250.3, vehicleOwner);

		verify(vehicleOwner, atLeastOnce()).addCredit(250.3);

		assertTrue(account.getCredit().equals(250.2));
		assertTrue(account.getMovements().contains("Se debitaron $250.3 de tu cuenta"));
	}

	@Test(expected = IlegalOperationException.class)
	public void whenIDoATransferToAVehicleOwnerAndIDontHaveEnoughMoneyCheckThatTheOperationIsNotDone()
			throws IlegalOperationException {

		User vehicleOwner = mock(User.class);
		CurrentAccount account = new CurrentAccount();
		account.addCredit(100.5);

		account.transferCreditTo(250.3, vehicleOwner);

		verify(vehicleOwner, atLeastOnce()).addCredit(250.3);

		assertTrue(account.getCredit().equals(100.2));
	}

}
