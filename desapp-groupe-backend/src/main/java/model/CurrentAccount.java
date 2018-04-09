package model;

import java.util.ArrayList;
import java.util.List;

import model.exceptions.UnableToDoTransactionException;

public class CurrentAccount {

	private Double credit;
	private List<String> movements;

	public CurrentAccount() {
		this.credit = 0.0;
		this.movements = new ArrayList<String>();
	}
	
	public Double getCredit() {
		return credit;
	}

	public List<String> getMovements() {
		return movements;
	}

	public void addCredit(Double moreCredit) {
		this.credit += moreCredit;
		String movement = "Se acreditaron $" + moreCredit + " en tu cuenta";
		this.movements.add(movement);
	}

	public void transferCreditTo(Double transfer, User vehicleOwner) throws UnableToDoTransactionException {
		if (transfer <= this.credit) {
			this.credit -= transfer;
			String movement = "Se debitaron $" + transfer + " de tu cuenta";
			this.movements.add(movement);
			vehicleOwner.addCredit(transfer);
		} else
			throw new UnableToDoTransactionException();
	}
}
