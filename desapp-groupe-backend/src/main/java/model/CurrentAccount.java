package model;

import java.util.ArrayList;
import java.util.List;

import model.exceptions.IlegalOperationException;

public class CurrentAccount {

	private Double credit;
	private List<String> movements;

	public CurrentAccount() {
		this.credit = 0.0;
		this.movements = new ArrayList<String>();
	}

	public void addCredit(Double moreCredit) {
		this.credit += moreCredit;
		String movement = "Se acreditaron $" + moreCredit + " en tu cuenta";
		this.movements.add(movement);
	}

	public void transferCreditTo(Double transfer, User user) throws IlegalOperationException {
		if (transfer <= this.credit) {
			this.credit -= transfer;
			String movement = "Se debitaron de tu cuenta $" + transfer + ", como pago a ";
			this.movements.add(movement);
			user.addCredit(transfer);
		} else
			throw new IlegalOperationException();
	}
}
