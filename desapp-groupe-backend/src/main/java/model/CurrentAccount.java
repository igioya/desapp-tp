package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import model.exceptions.UnableToDoTransactionException;

@Entity
public class CurrentAccount {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private Double credit;
	@ElementCollection(fetch = FetchType.EAGER)
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
