package model;

import model.exceptions.IlegalOperationException;

public class CurrentAccount {

	private Double credit;

	public CurrentAccount(Double credit) {
		this.credit = credit;
	}

	public Double getCredit() {
		return credit;
	}

	public void setCredit(Double credit) {
		this.credit = credit;
	}

	public void addCredit(Double moreCredit) {
		this.credit += moreCredit;
	}

	public void useCredit(Double lessCredit) throws IlegalOperationException {
		if (lessCredit <= this.credit) {
			this.credit -= lessCredit;
		} else
			throw new IlegalOperationException();
	}
}
