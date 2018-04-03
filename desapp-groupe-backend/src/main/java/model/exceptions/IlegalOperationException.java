package model.exceptions;

public class IlegalOperationException extends Exception {

	public IlegalOperationException() {
		super();
	}

	@Override
	public String getMessage() {
		return "No puede realizar la operacion";
	}
}
