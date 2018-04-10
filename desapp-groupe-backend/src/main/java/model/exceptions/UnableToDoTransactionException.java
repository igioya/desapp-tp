package model.exceptions;

public class UnableToDoTransactionException extends Exception {

	private static final long serialVersionUID = 6363641848077357564L;

	@Override
	public String getMessage() {
		return "No puede realizar la operacion";
	}
}
