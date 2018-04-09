package model;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class ValidatorTestCase {
	
	Validator validator = new Validator();

	@Test
	public void checkIfACuilIsValid() {
		String cuil = "20317359692";
		assertTrue(validator.isValidCuil(cuil));
	}
	
	@Test
	public void checkIfACuilIsInvalid() {
		String cuil = "11111111111";
		assertFalse(validator.isValidCuil(cuil));
	}
	
	@Test
	public void checkIfANameOrSurnameIsValid() {
		String name = "Pedro";
		assertTrue(validator.isValidNameOrSurname(name));
	}
	
	@Test
	public void checkIfANameOrSurnameIsInvalidWhenIsEmpty() {
		String name = "";
		assertFalse(validator.isValidNameOrSurname(name));
	}
	
	@Test
	public void checkIfANameOrSurnameIsInvalidWhenIsNull() {
		String name = null;
		assertFalse(validator.isValidNameOrSurname(name));
	}
	
	@Test
	public void checkIfANameOrSurnameIsInvalidWhenIsLessThanFour() {
		String name = "foo";
		assertFalse(validator.isValidNameOrSurname(name));
	}
	
	@Test
	public void checkIfANameOrSurnameIsInvalidWhenIsMoreThanFifty() {
		String name = "ggggggggggggggggggggggggggggggggggggggggggggggggggggggg"; //55 chars
		assertFalse(validator.isValidNameOrSurname(name));
	}
	
	@Test
	public void checkIfAnEmailIsValid() {
		String mail = "pepe@gmail.com";
		assertTrue(validator.isValidEmailAddress(mail));
	}
	
	@Test
	public void checkIfAnEmailIsInvalid() {
		String mail = "pepe.com";
		assertFalse(validator.isValidEmailAddress(mail));
	}
	
//	@Test
//	public void checkIfATelephoneIsValid() {
//		String telephone = "011-4-224-9785";
//		assertTrue(validator.isValidTelephone(telephone));
//	}
	
	@Test
	public void checkIfATelephoneIsInvalid() {
		String telephone = "485";
		assertFalse(validator.isValidTelephone(telephone));
	}
}
